/**
 * This is a copy of @wordpress/block-library/src/image/image.js that has been modified to be used with this plugin.
 * Wordpress is distributed under the GNU General Public License: https://www.gnu.org/licenses/gpl-3.0.en.html
 */

/**
 * WordPress dependencies
 */
import {isBlobURL} from "@wordpress/blob";
import {
	__experimentalImageSizeControl as ImageSizeControl,
	__experimentalImageURLInputUI as ImageURLInputUI,
	BlockControls,
	InspectorAdvancedControls,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import {createBlock} from "@wordpress/blocks";
import {
	ExternalLink,
	PanelBody,
	ResizableBox,
	Spinner,
	TextareaControl,
	TextControl,
	ToolbarGroup,
} from "@wordpress/components";
import {useViewportMatch} from "@wordpress/compose";
import {useDispatch, useSelect} from "@wordpress/data";
import {useEffect, useRef, useState} from "@wordpress/element";
import {__, sprintf} from "@wordpress/i18n";
import {getPath} from "@wordpress/url";
import {filter, get, includes, last, map, pick} from "lodash";
import {createUpgradedEmbedBlock} from "./create-upgrade-embed-block";

/**
 * Internal dependencies
 */
import useClientWidth from "./use-client-width";

/**
 * Module constants
 */
const MIN_SIZE = 20;

function getFilename(url) {
	const path = getPath(url);
	if (path) {
		return last(path.split("/"));
	}
}

export function Image({
	attributes: {
		url = "",
		alt,
		caption,
		align,
		id,
		href,
		rel,
		linkClass,
		linkDestination,
		title,
		width,
		height,
		linkTarget,
		sizeSlug,
	},
	setAttributes,
	isSelected,
	insertBlocksAfter,
	onReplace,
	containerRef,
}) {
	const captionRef = useRef();
	const image = useSelect(
		(select) => {
			const { getMedia } = select("core");
			return id && isSelected ? getMedia(id) : null;
		},
		[id, isSelected]
	);
	const { imageSizes, isRTL, maxWidth } = useSelect((select) => {
		const { getSettings } = select("core/block-editor");
		return pick(getSettings(), [
			"imageEditing",
			"imageSizes",
			"isRTL",
			"maxWidth",
			"mediaUpload",
		]);
	});
	const { toggleSelection } = useDispatch("core/block-editor");
	const isLargeViewport = useViewportMatch("medium");
	const [captionFocused, setCaptionFocused] = useState(false);
	const isWideAligned = includes(["wide", "full"], align);
	const [{ naturalWidth, naturalHeight }, setNaturalSize] = useState({});
	const [isEditingImage, setIsEditingImage] = useState(false);
	const clientWidth = useClientWidth(containerRef);
	const isResizable = !isWideAligned && isLargeViewport;
	const imageSizeOptions = map(
		filter(imageSizes, ({ slug }) =>
			get(image, ["media_details", "sizes", slug, "source_url"])
		),
		({ name, slug }) => ({ value: slug, label: name })
	);

	useEffect(() => {
		if (!isSelected) {
			setCaptionFocused(false);
		}
	}, [isSelected]);

	function onResizeStart() {
		toggleSelection(false);
	}

	function onResizeStop() {
		toggleSelection(true);
	}

	function onImageError() {
		// Check if there's an embed block that handles this URL.
		const embedBlock = createUpgradedEmbedBlock({ attributes: { url } });
		if (undefined !== embedBlock) {
			onReplace(embedBlock);
		}
	}

	function onSetHref(props) {
		setAttributes(props);
	}

	function onSetTitle(value) {
		// This is the HTML title attribute, separate from the media object
		// title.
		setAttributes({ title: value });
	}

	function onFocusCaption() {
		if (!captionFocused) {
			setCaptionFocused(true);
		}
	}

	function onImageClick() {
		if (captionFocused) {
			setCaptionFocused(false);
		}
	}

	function updateAlt(newAlt) {
		setAttributes({ alt: newAlt });
	}

	function updateImage(newSizeSlug) {
		const newUrl = get(image, [
			"media_details",
			"sizes",
			newSizeSlug,
			"source_url",
		]);
		if (!newUrl) {
			return null;
		}

		setAttributes({
			url: newUrl,
			width: undefined,
			height: undefined,
			sizeSlug: newSizeSlug,
		});
	}

	useEffect(() => {
		if (!isSelected) {
			setIsEditingImage(false);
		}
	}, [isSelected]);

	const controls = (
		<>
			<BlockControls>
				{!isEditingImage && (
					<ToolbarGroup>
						<ImageURLInputUI
							url={href || ""}
							onChangeUrl={onSetHref}
							linkDestination={linkDestination}
							mediaUrl={(image && image.source_url) || url}
							mediaLink={image && image.link}
							linkTarget={linkTarget}
							linkClass={linkClass}
							rel={rel}
						/>
					</ToolbarGroup>
				)}
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__("Image settings")}>
					<TextareaControl
						label={__("Alt text (alternative text)")}
						value={alt}
						onChange={updateAlt}
						help={
							<>
								<ExternalLink href="https://www.w3.org/WAI/tutorials/images/decision-tree">
									{__("Describe the purpose of the image")}
								</ExternalLink>
								{__("Leave empty if the image is purely decorative.")}
							</>
						}
					/>
					<ImageSizeControl
						onChangeImage={updateImage}
						onChange={(value) => setAttributes(value)}
						slug={sizeSlug}
						width={width}
						height={height}
						imageSizeOptions={imageSizeOptions}
						isResizable={isResizable}
						imageWidth={naturalWidth}
						imageHeight={naturalHeight}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorAdvancedControls>
				<TextControl
					label={__("Title attribute")}
					value={title || ""}
					onChange={onSetTitle}
					help={
						<>
							{__("Describe the role of this image on the page.")}
							<ExternalLink href="https://www.w3.org/TR/html52/dom.html#the-title-attribute">
								{__(
									"(Note: many devices and browsers do not display this text.)"
								)}
							</ExternalLink>
						</>
					}
				/>
			</InspectorAdvancedControls>
		</>
	);

	const filename = getFilename(url);
	let defaultedAlt;

	if (alt) {
		defaultedAlt = alt;
	} else if (filename) {
		defaultedAlt = sprintf(
			/* translators: %s: file name */
			__("This image has an empty alt attribute; its file name is %s"),
			filename
		);
	} else {
		defaultedAlt = __("This image has an empty alt attribute");
	}

	let img = (
		// Disable reason: Image itself is not meant to be interactive, but
		// should direct focus to block.
		/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
		<>
			<img
				src={url}
				alt={defaultedAlt}
				onClick={onImageClick}
				onError={() => onImageError()}
				onLoad={(event) => {
					setNaturalSize(pick(event.target, ["naturalWidth", "naturalHeight"]));
				}}
			/>
			{isBlobURL(url) && <Spinner />}
		</>
		/* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
	);

	let imageWidthWithinContainer;
	let imageHeightWithinContainer;

	if (clientWidth && naturalWidth && naturalHeight) {
		const exceedMaxWidth = naturalWidth > clientWidth;
		const ratio = naturalHeight / naturalWidth;
		imageWidthWithinContainer = exceedMaxWidth ? clientWidth : naturalWidth;
		imageHeightWithinContainer = exceedMaxWidth
			? clientWidth * ratio
			: naturalHeight;
	}

	if (!isResizable || !imageWidthWithinContainer) {
		img = <div style={{ width, height }}>{img}</div>;
	} else {
		const ratio = naturalWidth / naturalHeight;
		const minWidth = naturalWidth < naturalHeight ? MIN_SIZE : MIN_SIZE * ratio;
		const minHeight =
			naturalHeight < naturalWidth ? MIN_SIZE : MIN_SIZE / ratio;

		// With the current implementation of ResizableBox, an image needs an
		// explicit pixel value for the max-width. In absence of being able to
		// set the content-width, this max-width is currently dictated by the
		// vanilla editor style. The following variable adds a buffer to this
		// vanilla style, so 3rd party themes have some wiggleroom. This does,
		// in most cases, allow you to scale the image beyond the width of the
		// main column, though not infinitely.
		// @todo It would be good to revisit this once a content-width variable
		// becomes available.
		const maxWidthBuffer = maxWidth * 2.5;

		let showRightHandle = false;
		let showLeftHandle = false;

		/* eslint-disable no-lonely-if */
		// See https://github.com/WordPress/gutenberg/issues/7584.
		if (align === "center") {
			// When the image is centered, show both handles.
			showRightHandle = true;
			showLeftHandle = true;
		} else if (isRTL) {
			// In RTL mode the image is on the right by default.
			// Show the right handle and hide the left handle only when it is
			// aligned left. Otherwise always show the left handle.
			if (align === "left") {
				showRightHandle = true;
			} else {
				showLeftHandle = true;
			}
		} else {
			// Show the left handle and hide the right handle only when the
			// image is aligned right. Otherwise always show the right handle.
			if (align === "right") {
				showLeftHandle = true;
			} else {
				showRightHandle = true;
			}
		}
		/* eslint-enable no-lonely-if */

		img = (
			<ResizableBox
				size={{ width: width || "100%", height: height || "100%" }}
				showHandle={isSelected}
				minWidth={minWidth}
				maxWidth={maxWidthBuffer}
				minHeight={minHeight}
				maxHeight={maxWidthBuffer / ratio}
				lockAspectRatio
				enable={{
					top: false,
					right: showRightHandle,
					bottom: true,
					left: showLeftHandle,
				}}
				onResizeStart={onResizeStart}
				onResizeStop={(event, direction, elt, delta) => {
					onResizeStop();
					setAttributes({
						width: parseInt(elt.offsetWidth, 10),
						height: parseInt(elt.offsetHeight, 10),
					});
				}}
			>
				{img}
			</ResizableBox>
		);
	}

	return (
		<>
			{controls}
			{img}
			{(!RichText.isEmpty(caption) || isSelected) && (
				<RichText
					ref={captionRef}
					tagName="figcaption"
					placeholder={__("Write caption…")}
					value={caption}
					unstableOnFocus={onFocusCaption}
					onChange={(value) => setAttributes({ caption: value })}
					isSelected={captionFocused}
					inlineToolbar
					__unstableOnSplitAtEnd={() =>
						insertBlocksAfter(createBlock("core/paragraph"))
					}
				/>
			)}
		</>
	);
}
