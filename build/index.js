(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{27:function(e,t,r){}}]),function(e){function t(t){for(var n,a,c=t[0],l=t[1],u=t[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);f.length;)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==o[l]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={0:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;i.push([28,1]),r()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,r){var n=r(21);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(23),o=r(24),i=r(14),a=r(25);e.exports=function(e,t){return n(e)||o(e,t)||i(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},function(e){e.exports=JSON.parse('{"name":"brandfolder/editor-integration","title":"Brandfolder","category":"media","description":"The Brandfolder Integration gives you the ability to display your assets on your Wordpress website.","textdomain":"brandfolder-integration","supports":{"align":true,"anchor":true,"lightBlockWrapper":true},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css","attributes":{"align":{"type":"string"},"url":{"type":"string"},"alt":{"type":"string","source":"attribute","selector":"img","attribute":"alt","default":""},"caption":{"type":"string","source":"html","selector":"figcaption"},"title":{"type":"string","source":"attribute","selector":"img","attribute":"title"},"href":{"type":"string","source":"attribute","selector":"figure > a","attribute":"href"},"rel":{"type":"string","source":"attribute","selector":"figure > a","attribute":"rel"},"linkClass":{"type":"string","source":"attribute","selector":"figure > a","attribute":"class"},"id":{"type":"number"},"width":{"type":"string","source":"attribute","selector":"img","attribute":"width"},"height":{"type":"string","source":"attribute","selector":"img","attribute":"height"},"sizeSlug":{"type":"string"},"linkDestination":{"type":"string"},"linkTarget":{"type":"string","source":"attribute","selector":"figure > a","attribute":"target"}}}')},function(e,t){!function(){e.exports=this.wp.blob}()},function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,i(r)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},function(e,t,r){var n=r(18),o=r(19),i=r(14),a=r(20);e.exports=function(e){return n(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(13);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){!function(){e.exports=this.wp.url}()},function(e,t,r){var n=r(13);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(15).default,o=r(22);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(15).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var n=r(4),o=r(1),i=r(0),a=Object(i.createElement)("svg",{width:20,height:20,viewBox:"0 0 256 241",preserveAspectRatio:"xMidYMid"},Object(i.createElement)("path",{d:"M0 240.881h209.079v-31.763H31.782V31.787H209.12v116.379h-15.165l31.02 31.024L256 148.166h-15.12V0H0v240.881zm80.643-189.51c4.092-.657 8.816-1.155 14.18-1.54 5.382-.385 12.083-.574 20.128-.574 7.021 0 13.677.574 19.925 1.73 6.27 1.14 11.726 3.088 16.38 5.836 4.655 2.755 8.336 6.41 11.02 11.023 2.68 4.591 4.02 10.337 4.02 17.245 0 4.084-.592 7.882-1.823 11.4-1.2 3.496-2.835 6.57-4.88 9.204-2.048 2.612-4.339 4.772-6.906 6.494-2.548 1.728-5.16 2.793-7.841 3.156 2.933.392 6.18 1.298 9.77 2.71 3.568 1.383 6.885 3.473 9.951 6.221 3.07 2.748 5.637 6.297 7.679 10.63 2.046 4.342 3.068 9.567 3.068 15.706 0 8.312-1.566 15.108-4.703 20.415-3.133 5.3-7.339 9.475-12.658 12.549-5.292 3.064-11.427 5.171-18.377 6.311-6.973 1.156-14.29 1.73-21.944 1.73-5.886 0-11.677-.16-17.427-.476-5.768-.317-12.268-.936-19.562-1.82V51.371zm27.789 116.87v-39.858h11.495c3.974 0 7.565.325 10.834.96 3.25.633 6.07 1.752 8.43 3.367 2.363 1.585 4.179 3.7 5.455 6.312 1.272 2.612 1.93 5.904 1.93 9.86 0 4.221-.843 7.634-2.5 10.269-1.657 2.612-3.772 4.658-6.316 6.138a25.51 25.51 0 0 1-8.248 2.952c-2.93.521-5.746.77-8.43.77-1.93 0-4.062-.067-6.425-.182-2.367-.134-4.432-.323-6.225-.588zm8.426-60.938h-8.426V70.527c2.43-.386 5.428-.574 9.015-.574 2.548 0 5.137.211 7.75.664 2.612.453 4.975 1.344 7.09 2.68 2.11 1.344 3.834 3.202 5.179 5.565 1.341 2.363 1.997 5.383 1.997 9.09 0 3.836-.566 7-1.703 9.499-1.159 2.491-2.749 4.469-4.794 5.926-2.042 1.472-4.455 2.5-7.203 3.066-2.725.589-5.7.86-8.905.86z",fill:"#40D1F6",fillRule:"evenodd"})),c=r(8),l=r(11),u=r.n(l),s=r(6),p=r.n(s),f=r(7),b=r.n(f),d=r(9),m=r(2),g=r(3),h=r(10),j=r.n(h),O=["jpeg","jpg","png","gif"],v=["mp4","ogv","mov","webm","3gp","m4f","mj2","mkv","ogg"],y=["mp3"],x=(r(26),r(16)),_=r(12),w=r(17),E=r(5);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){var t;return null===(t=Object(n.getBlockVariations)("core/embed"))||void 0===t?void 0:t.find((function(t){var r=t.patterns;return R(e,r)}))},B=function(e){return e&&e.includes('class="wp-embedded-content"')},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.some((function(t){return e.match(t)}))};function T(e){var t=e.attributes,r=t.url,a=void 0===r?"":r,c=t.alt,l=t.caption,u=t.align,s=t.id,p=t.href,f=t.rel,h=t.linkClass,j=t.linkDestination,O=t.title,v=t.width,y=t.height,S=t.linkTarget,R=t.sizeSlug,T=e.setAttributes,C=e.isSelected,M=e.insertBlocksAfter,A=e.onReplace,z=e.containerRef,W=Object(i.useRef)(),I=Object(_.useSelect)((function(e){var t=e("core").getMedia;return s&&C?t(s):null}),[s,C]),N=Object(_.useSelect)((function(e){var t=e("core/block-editor").getSettings;return Object(E.pick)(t(),["imageEditing","imageSizes","isRTL","maxWidth","mediaUpload"])})),L=N.imageSizes,D=N.isRTL,F=N.maxWidth,H=Object(_.useDispatch)("core/block-editor").toggleSelection,U=Object(x.useViewportMatch)("medium"),V=Object(i.useState)(!1),J=b()(V,2),$=J[0],G=J[1],q=Object(E.includes)(["wide","full"],u),Y=Object(i.useState)({}),K=b()(Y,2),Q=K[0],X=Q.naturalWidth,Z=Q.naturalHeight,ee=K[1],te=Object(i.useState)(!1),re=b()(te,2),ne=re[0],oe=re[1],ie=function(e){var t,r=Object(i.useState)(),n=b()(r,2),o=n[0],a=n[1];return Object(i.useEffect)((function(){var t;a(null===(t=e.current)||void 0===t?void 0:t.clientWidth)}),[null===(t=e.current)||void 0===t?void 0:t.clientWidth]),o}(z),ae=!q&&U,ce=Object(E.map)(Object(E.filter)(L,(function(e){var t=e.slug;return Object(E.get)(I,["media_details","sizes",t,"source_url"])})),(function(e){var t=e.name;return{value:e.slug,label:t}}));function le(){var e=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=e.preview,i=e.attributes,a=(i=void 0===i?{}:i).url,c=i.providerNameSlug,l=i.type;if(a&&Object(n.getBlockType)("core/embed")){var u=P(a),s="wordpress"===c||"wp-embed"===l,p=!s&&u&&(u.attributes.providerNameSlug!==c||!c);if(p)return Object(n.createBlock)("core/embed",k({url:a},u.attributes));var f=null===(t=Object(n.getBlockVariations)("core/embed"))||void 0===t?void 0:t.find((function(e){return"wordpress"===e.name}));if(f&&o&&B(o.html)&&!s)return Object(n.createBlock)("core/embed",k(k({url:a},f.attributes),r))}}({attributes:{url:a}});void 0!==e&&A(e)}Object(i.useEffect)((function(){C||G(!1)}),[C]),Object(i.useEffect)((function(){C||oe(!1)}),[C]);var ue,se=Object(i.createElement)(i.Fragment,null,Object(i.createElement)(m.BlockControls,null,!ne&&Object(i.createElement)(g.ToolbarGroup,null,Object(i.createElement)(m.__experimentalImageURLInputUI,{url:p||"",onChangeUrl:function(e){T(e)},linkDestination:j,mediaUrl:I&&I.source_url||a,mediaLink:I&&I.link,linkTarget:S,linkClass:h,rel:f}))),Object(i.createElement)(m.InspectorControls,null,Object(i.createElement)(g.PanelBody,{title:Object(o.__)("Image settings")},Object(i.createElement)(g.TextareaControl,{label:Object(o.__)("Alt text (alternative text)"),value:c,onChange:function(e){T({alt:e})},help:Object(i.createElement)(i.Fragment,null,Object(i.createElement)(g.ExternalLink,{href:"https://www.w3.org/WAI/tutorials/images/decision-tree"},Object(o.__)("Describe the purpose of the image")),Object(o.__)("Leave empty if the image is purely decorative."))}),Object(i.createElement)(m.__experimentalImageSizeControl,{onChangeImage:function(e){var t=Object(E.get)(I,["media_details","sizes",e,"source_url"]);if(!t)return null;T({url:t,width:void 0,height:void 0,sizeSlug:e})},onChange:function(e){return T(e)},slug:R,width:v,height:y,imageSizeOptions:ce,isResizable:ae,imageWidth:X,imageHeight:Z}))),Object(i.createElement)(m.InspectorAdvancedControls,null,Object(i.createElement)(g.TextControl,{label:Object(o.__)("Title attribute"),value:O||"",onChange:function(e){T({title:e})},help:Object(i.createElement)(i.Fragment,null,Object(o.__)("Describe the role of this image on the page."),Object(i.createElement)(g.ExternalLink,{href:"https://www.w3.org/TR/html52/dom.html#the-title-attribute"},Object(o.__)("(Note: many devices and browsers do not display this text.)")))}))),pe=function(e){var t=Object(w.getPath)(e);if(t)return Object(E.last)(t.split("/"))}(a);ue=c||(pe?Object(o.sprintf)(
/* translators: %s: file name */
Object(o.__)("This image has an empty alt attribute; its file name is %s"),pe):Object(o.__)("This image has an empty alt attribute"));var fe,be=Object(i.createElement)(i.Fragment,null,Object(i.createElement)("img",{src:a,alt:ue,onClick:function(){$&&G(!1)},onError:function(){return le()},onLoad:function(e){ee(Object(E.pick)(e.target,["naturalWidth","naturalHeight"]))}}),Object(d.isBlobURL)(a)&&Object(i.createElement)(g.Spinner,null));if(ie&&X&&Z){var de=X>ie;fe=de?ie:X,de?ie*(Z/X):Z}if(ae&&fe){var me=X/Z,ge=X<Z?20:20*me,he=Z<X?20:20/me,je=2.5*F,Oe=!1,ve=!1;"center"===u?(Oe=!0,ve=!0):D?"left"===u?Oe=!0:ve=!0:"right"===u?ve=!0:Oe=!0,be=Object(i.createElement)(g.ResizableBox,{size:{width:v||"100%",height:y||"100%"},showHandle:C,minWidth:ge,maxWidth:je,minHeight:he,maxHeight:je/me,lockAspectRatio:!0,enable:{top:!1,right:Oe,bottom:!0,left:ve},onResizeStart:function(){H(!1)},onResizeStop:function(e,t,r,n){H(!0),T({width:parseInt(r.offsetWidth,10),height:parseInt(r.offsetHeight,10)})}},be)}else be=Object(i.createElement)("div",{style:{width:v,height:y}},be);return Object(i.createElement)(i.Fragment,null,se,be,(!m.RichText.isEmpty(l)||C)&&Object(i.createElement)(m.RichText,{ref:W,tagName:"figcaption",placeholder:Object(o.__)("Write caption…"),value:l,unstableOnFocus:function(){$||G(!0)},onChange:function(e){return T({caption:e})},isSelected:$,inlineToolbar:!0,__unstableOnSplitAtEnd:function(){return M(Object(n.createBlock)("core/paragraph"))}}))}function C(e){return!!e&&null!=e.match(new RegExp(".(".concat(O.join("|"),")($|\\?)")))}function M(e){return!!e&&null!=e.match(new RegExp(".(".concat(v.join("|"),")($|\\?)")))}function A(e){return!!e&&null!=e.match(new RegExp(".(".concat(y.join("|"),")($|\\?)")))}var z=Object(g.withNotices)((function(e){var t=e.attributes,r=e.className,n=e.setAttributes,c=e.isSelected,l=e.insertBlocksAfter,s=e.onReplace,f=Object(i.useRef)(),h=t.height,x=t.sizeSlug,_=t.url,w=t.width,E=Object(i.useState)(!1),S=b()(E,2),k=S[0],P=S[1],B=Object(i.useCallback)((function(){return P(!1)})),R=Object(i.useCallback)((function(){return P(!0)})),z=Object(i.useCallback)((function(e){"blur"!==e.type&&B()}));function W(e){return e.cdn_url?e.cdn_url.startsWith("https://")?e.cdn_url:e.cdn_url.startsWith("http://")?e.cdn_url.replace("http://","https://"):"https://"+e.cdn_url:e.url}Object(i.useEffect)((function(){var e=function(e){if("https://integration-panel-ui.brandfolder-svc.com"===e.origin&&c&&"selectedAttachment"===e.data.event){var t=e.data.payload;n({url:W(t),filename:t.filename}),B()}};return window.addEventListener("message",e),function(){return window.removeEventListener("message",e)}}),[c]);var I=Object(i.createElement)(g.Placeholder,{className:"image-placeholder",icon:a,label:Object(o.__)("Brandfolder"),instructions:Object(o.__)("Pick an asset from your Brandfolder library.")},Object(i.createElement)(g.Button,{isPrimary:!0,onClick:R},"Pick Asset")),N=function(e){return C(e)?Object(i.createElement)(T,{attributes:t,setAttributes:n,isSelected:c,insertBlocksAfter:l,onReplace:s,containerRef:f}):M(e)?Object(i.createElement)("video",{controls:!0,src:e},Object(i.createElement)("track",null)):A(e)?Object(i.createElement)("audio",{controls:!0,src:e}):I},L=j()(r,p()({"is-transient":Object(d.isBlobURL)(_),"is-resized":!!w||!!h,"is-focused":c},"size-".concat(x),x)),D=[].concat(u()(y),u()(O),u()(v)).join(","),F=Object(i.createElement)(m.BlockControls,null,_&&Object(i.createElement)(g.ToolbarGroup,null,Object(i.createElement)(g.ToolbarButton,{onClick:R},"Pick another asset")));return Object(i.createElement)(i.Fragment,null,m.useBlockProps?Object(i.createElement)("div",Object(m.useBlockProps)(),F,Object(i.createElement)("div",{className:L,ref:f},N(_))):Object(i.createElement)(i.Fragment,null,F,Object(i.createElement)(m.__experimentalBlock.figure,{className:L,ref:f},N(_))),k&&Object(i.createElement)(g.Modal,{className:"brandfolder-integration-image-selector-modal",title:Object(o.__)("Pick an asset"),onRequestClose:z},Object(i.createElement)("iframe",{id:"bfi-image-selector-iframe",style:{width:"100%"},src:"".concat("https://integration-panel-ui.brandfolder-svc.com","?origin=").concat(location.origin,"&allowedExtensions=").concat(D,"&appName=").concat("WordPress")})))}));r(27);var W={to:[{type:"block",blocks:["core/image"],transform:function(e){var t=e.caption,r=e.url,o=e.align,i=e.id,a=e.anchor;return Object(n.createBlock)("core/image",{caption:t,url:r,align:o,id:i,anchor:a})}}]},I=c.attributes,N=c.category,L=c.description,D=c.name,F=c.supports,H=c.title;Object(n.registerBlockType)(D,{title:Object(o.__)(H,"brandfolder-integration"),description:Object(o.__)(L,"brandfolder-integration"),category:N,icon:a,supports:F,getEditWrapperProps:function(e){return{"data-align":e.url&&e.align}},edit:z,save:function(e){var t,r=e.attributes,n=r.align,o=r.url,a=r.alt,c=r.caption,l=r.href,u=r.rel,s=r.linkClass,f=r.width,b=r.height,d=r.id,g=r.linkTarget,h=r.sizeSlug,O=r.title,v=Object(E.isEmpty)(u)?void 0:u,y=j()((t={},p()(t,"align".concat(n),n),p()(t,"size-".concat(h),h),p()(t,"is-resized",f||b),t)),x=Object(i.createElement)(i.Fragment,null,function(e){var t=Object(i.createElement)("img",{src:e,alt:a,className:d?"wp-image-".concat(d):null,width:f,height:b,title:O});return C(e)?l?Object(i.createElement)("a",{className:s,href:l,target:g,rel:v},t):t:M(e)?Object(i.createElement)("video",{controls:!0,src:e}):A(e)?Object(i.createElement)("audio",{controls:!0,src:e}):void 0}(o),!m.RichText.isEmpty(c)&&Object(i.createElement)(m.RichText.Content,{tagName:"figcaption",value:c}));return Object(i.createElement)("figure",{className:y},x)},attributes:I,transforms:W})}]);