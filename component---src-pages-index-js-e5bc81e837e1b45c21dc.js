webpackJsonp([35783957827783],{87:function(e,t,r){function n(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,r){var i,s;if(n(e)||n(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=a.call(e),t=a.call(t),u(e,t,r));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=c(e),d=c(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),i=f.length-1;i>=0;i--)if(f[i]!=d[i])return!1;for(i=f.length-1;i>=0;i--)if(s=f[i],!u(e[s],t[s],r))return!1;return typeof e==typeof t}var a=Array.prototype.slice,c=r(89),l=r(88),u=e.exports=function(e,t,r){return r||(r={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?r.strict?e===t:e==t:i(e,t,r))}},88:function(e,t){function r(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function n(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?r:n,t.supported=r,t.unsupported=n},89:function(e,t){function r(e){var t=[];for(var r in e)t.push(r);return t}t=e.exports="function"==typeof Object.keys?Object.keys:r,t.shim=r},91:function(e,t,r){var n;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};n=function(){return i}.call(t,r,t,e),!(void 0!==n&&(e.exports=n))}()},95:function(e,t){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,i=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,u=l&&l(Object);e.exports=function e(t,s,f){if("string"!=typeof s){if(u){var d=l(s);d&&d!==u&&e(t,d,f)}var p=i(s);a&&(p=p.concat(a(s)));for(var T=0;T<p.length;++T){var m=p[T];if(!(r[m]||n[m]||f&&f[m])){var h=c(s,m);try{o(t,m,h)}catch(e){}}}return t}return t}},114:function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(1),f=n(s),d=r(4),p=n(d),T=r(119),m=n(T),h=r(87),g=n(h),E=r(115),y=r(43),b=function(e){var t,r;return r=t=function(t){function r(){return i(this,r),a(this,t.apply(this,arguments))}return c(r,t),r.prototype.shouldComponentUpdate=function(e){return!(0,g.default)(this.props,e)},r.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case y.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return l({},n,(t={},t[r.type]=[].concat(n[r.type]||[],[l({},o,this.mapNestedChildrenToProps(r,i))]),t))},r.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case y.TAG_NAMES.TITLE:return l({},o,(t={},t[n.type]=a,t.titleAttributes=l({},i),t));case y.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},i)});case y.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},i)})}return l({},o,(r={},r[n.type]=l({},i),r))},r.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=l({},t);return Object.keys(e).forEach(function(t){var n;r=l({},r,(n={},n[t]=e[t],n))}),r},r.prototype.warnOnInvalidChildren=function(e,t){return!0},r.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,c=o(i,["children"]),l=(0,E.convertReactPropstoHtmlAttributes)(c);switch(r.warnOnInvalidChildren(e,a),e.type){case y.TAG_NAMES.LINK:case y.TAG_NAMES.META:case y.TAG_NAMES.NOSCRIPT:case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:l,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(n,t)},r.prototype.render=function(){var t=this.props,r=t.children,n=o(t,["children"]),i=l({},n);return r&&(i=this.mapChildrenToProps(r,i)),f.default.createElement(e,i)},u(r,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),r}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,E.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r},A=function(){return null},S=(0,m.default)(E.reducePropsToState,E.handleClientStateChange,E.mapStateOnServer)(A),v=b(S);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},43:function(e,t){t.__esModule=!0;var r=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),n=(t.VALID_TAG_NAMES=Object.keys(r).map(function(e){return r[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce(function(e,t){return e[n[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},115:function(e,t,r){(function(e){function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(1),c=n(a),l=r(14),u=n(l),s=r(43),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=g(e,s.TAG_NAMES.TITLE),r=g(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,function(){return t});var n=g(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},p=function(e){return g(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},m=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&r[a])return t.concat(r)}return t},[])},h=function(e,t,r){var n={};return r.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var o={};r.filter(function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();t.indexOf(l)===-1||r===s.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||l===s.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(r=l),t.indexOf(c)===-1||c!==s.TAG_PROPERTIES.INNER_HTML&&c!==s.TAG_PROPERTIES.CSS_TEXT&&c!==s.TAG_PROPERTIES.ITEM_PROP||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=(0,u.default)({},n[c],o[c]);n[c]=l}return e},[]).reverse()},g=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},E=function(e){return{baseTag:m([s.TAG_PROPERTIES.HREF],e),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,e),defer:g(e,s.HELMET_PROPS.DEFER),encode:g(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,e),linkTags:h(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:h(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:h(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,e)}},y=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout(function(){y(t)},0)}}(),b=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:e.requestAnimationFrame||y,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,O=function(e){_&&S(_),e.defer?_=A(function(){w(e,function(){_=null})}):(w(e),_=null)},w=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;x(s.TAG_NAMES.BODY,n),x(s.TAG_NAMES.HTML,o),P(d,p);var T={baseTag:M(s.TAG_NAMES.BASE,r),linkTags:M(s.TAG_NAMES.LINK,i),metaTags:M(s.TAG_NAMES.META,a),noscriptTags:M(s.TAG_NAMES.NOSCRIPT,c),scriptTags:M(s.TAG_NAMES.SCRIPT,u),styleTags:M(s.TAG_NAMES.STYLE,f)},m={},h={};Object.keys(T).forEach(function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=T[e].oldTags)}),t&&t(),l(e,m,h)},R=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=R(e)),x(s.TAG_NAMES.TITLE,t)},x=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(s.HELMET_ATTRIBUTE),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),o.indexOf(l)===-1&&o.push(l);var f=i.indexOf(l);f!==-1&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);o.length===i.length?r.removeAttribute(s.HELMET_ATTRIBUTE):r.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&r.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},M=function(e,t){var r=document.head||document.querySelector(s.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===s.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===s.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c="undefined"==typeof t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,r.isEqualNode(e)})?o.splice(a,1):i.push(r)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return r.appendChild(e)}),{oldTags:o,newTags:i}},L=function(e){return Object.keys(e).reduce(function(t,r){var n="undefined"!=typeof e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},C=function(e,t,r,n){var o=L(r),i=R(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,n)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(i,n)+"</"+e+">"},I=function(e,t,r){return t.reduce(function(t,n){var o=Object.keys(n).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof n[t]?t:t+'="'+f(n[t],r)+'"';return e?e+" "+o:o},""),i=n.innerHTML||n.cssText||"",a=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[s.REACT_TAG_MAP[r]||r]=e[r],t},t)},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[s.HTML_TAG_MAP[r]||r]=e[r],t},t)},G=function(e,t,r){var n,o=(n={key:t},n[s.HELMET_ATTRIBUTE]=!0,n),i=N(r,o);return[c.default.createElement(s.TAG_NAMES.TITLE,i,t)]},j=function(e,t){return t.map(function(t,r){var n,o=(n={key:r},n[s.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach(function(e){var r=s.REACT_TAG_MAP[e]||e;if(r===s.TAG_PROPERTIES.INNER_HTML||r===s.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]}),c.default.createElement(e,o)})},H=function(e,t,r){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,r)},toString:function(){return C(e,t.title,t.titleAttributes,r)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return N(t)},toString:function(){return L(t)}};default:return{toComponent:function(){return j(e,t)},toString:function(){return I(e,t,r)}}}},B=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:H(s.TAG_NAMES.BASE,t,n),bodyAttributes:H(s.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:H(s.ATTRIBUTE_NAMES.HTML,o,n),link:H(s.TAG_NAMES.LINK,i,n),meta:H(s.TAG_NAMES.META,a,n),noscript:H(s.TAG_NAMES.NOSCRIPT,c,n),script:H(s.TAG_NAMES.SCRIPT,l,n),style:H(s.TAG_NAMES.STYLE,u,n),title:H(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},n)}};t.convertReactPropstoHtmlAttributes=k,t.handleClientStateChange=O,t.mapStateOnServer=B,t.reducePropsToState=E,t.requestAnimationFrame=A,t.warn=v}).call(t,function(){return this}())},119:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=r(1),l=n(c),u=r(91),s=n(u),f=r(120),d=n(f);e.exports=function(e,t,r){function n(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function f(){T=e(p.map(function(e){return e.props})),m.canUseDOM?t(T):r&&(T=r(T))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,m=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return l.default.createElement(u,this.props)},t}(c.Component);return m.displayName="SideEffect("+n(u)+")",m.canUseDOM=s.default.canUseDOM,m}}},120:function(e,t){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var u=i[l];if(!c(u))return!1;var s=e[u],f=t[u];if(o=r?r.call(n,s,f,u):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},189:function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}t.__esModule=!0,t.primaryStyle=void 0;var i,a,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=r(23),u=n(l),s=r(1),f=(n(s),r(3)),d=function(t){var r=t.cssProps,n=void 0===r?{}:r;return e.createElement("svg",{css:n,height:"12",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 4.53657 8.69699"},e.createElement("path",{d:"\n        M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,\n        0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,\n        0,0,1,.18254,8.697Z\n      ",fill:"currentColor"}))},p=(i={display:"inline-block",fontSize:16},i[f.media.greaterThan("xlarge")]={fontSize:20},i),T=t.primaryStyle=(a={border:"1px solid "+f.colors.primary,borderRadius:"3px",color:f.colors.primary,padding:"15px 15px",whiteSpace:"nowrap",transition:"background-color 0.2s ease-out"},a[f.media.greaterThan("xlarge")]={padding:"20px 30px"},a[":hover"]={background:f.colors.primary,color:"white"},a),m={color:f.colors.text,transition:"color 0.2s ease-out",":hover":{color:f.colors.white}},h={color:f.colors.white,transition:"color 0.2s ease-out",":hover":{color:f.colors.primary}},g=function(t){var r=t.children,n=t.type,i=o(t,["children","type"]),a=void 0;switch(n){case"primary":a=T;break;case"secondary":a=m;break;case"inverse":a=h}return e.createElement(u.default,c({},i,{css:[p,a]}),r,"secondary"===n&&e.createElement(d,{cssProps:{marginLeft:10}}))};t.default=g}).call(t,r(2))},17:function(e,t,r){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=r(1),a=(o(i),r(3)),c=function(e){var t,r=e.children;return n.createElement("div",{css:(t={paddingLeft:20,paddingRight:20,marginLeft:"auto",marginRight:"auto"},t[a.media.greaterThan("medium")]={width:"90%"},t[a.media.size("xxlarge")]={maxWidth:1260},t)},r)};t.default=c,e.exports=t.default}).call(t,r(2))},18:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(2),a=function(e){var t=e.basis,r=void 0===t?"auto":t,a=e.children,c=e.direction,l=void 0===c?"row":c,u=e.grow,s=void 0===u?0:u,f=e.halign,d=void 0===f?"flex-start":f,p=e.shrink,T=void 0===p?1:p,m=e.type,h=void 0===m?"div":m,g=e.valign,E=void 0===g?"flex-start":g,y=n(e,["basis","children","direction","grow","halign","shrink","type","valign"]);return(0,i.createElement)(h,o({css:{display:"flex",flexDirection:l,flexGrow:s,flexShrink:T,flexBasis:r,justifyContent:"row"===l?d:E,alignItems:"row"===l?E:d}},y),a)};t.default=a,e.exports=t.default},66:function(e,t,r){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=r(114),a=o(i),c=r(1),l=(o(c),r(9)),u=function(e){var t=e.title,r=e.ogDescription,o=e.ogUrl;return n.createElement(a.default,{title:t},n.createElement("meta",{property:"og:title",content:t}),n.createElement("meta",{property:"og:type",content:"website"}),o&&n.createElement("meta",{property:"og:url",content:o}),n.createElement("meta",{property:"og:image",content:"/logo-og.png"}),n.createElement("meta",{property:"og:description",content:r||l.tagline}))};t.default=u,e.exports=t.default}).call(t,r(2))},521:function(e,t,r){e.exports=r.p+"static/logo-512-inverse-no-border.fa107416.png"},207:function(e,t,r){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=r(1),f=(o(s),r(189)),d=o(f),p=r(17),T=o(p),m=r(18),h=o(m),g=r(66),E=o(g),y=r(67),b=o(y),A=r(521),S=o(A),v=r(3),_=r(9),O=(l={marginTop:20,marginBottom:15},l[v.media.greaterThan("medium")]={marginBottom:65},l),w={"&&":{marginBottom:20}},R=function(e){var t,r,o,i=e.title,a=e.children;return n.createElement("div",{css:(r={display:"flex",flexDirection:"column",flex:"0 1 33%",marginLeft:40,"&:first-of-type":(t={marginLeft:0},t[v.media.lessThan("medium")]={marginLeft:10},t)},r[v.media.lessThan("medium")]={display:"inline-block",verticalAlign:"top",marginLeft:0,whiteSpace:"normal",width:"75%",marginRight:20,paddingBottom:40,"&:first-of-type":{marginTop:0}},r)},n.createElement("h3",{css:[w,{"&&":(o={color:v.colors.subtle,paddingTop:0,fontWeight:300,fontSize:20},o[v.media.greaterThan("xlarge")]={fontSize:24,fontWeight:200},o)}]},i),a)},P=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return c(t,e),t.prototype.render=function(){var e,t,r,o,i,a,c;return n.createElement("div",{css:{width:"100%"}},n.createElement(E.default,{title:_.name+" - "+_.tagline,ogUrl:(0,b.default)("index.html")}),n.createElement("div",{css:u({},v.sharedStyles.fluid)},n.createElement("header",{css:{backgroundColor:v.colors.white,color:v.colors.text}},n.createElement("div",{css:(e={paddingTop:45,paddingBottom:20},e[v.media.greaterThan("small")]={paddingTop:60,paddingBottom:70},e)},n.createElement("div",{css:{position:"relative"}},n.createElement(T.default,null,n.createElement("img",{css:{display:"block",marginRight:"auto",marginLeft:"auto"},src:S.default,height:"150"}),n.createElement("h1",{css:(t={textAlign:"center",margin:0,letterSpacing:"0.01em",fontSize:"2em"},t[v.media.greaterThan("medium")]={fontSize:"2.5em"},t[v.media.greaterThan("large")]={fontSize:"3em"},t[v.media.greaterThan("xlarge")]={fontSize:"3.333em"},t)},_.name),n.createElement("h2",{css:(r={paddingTop:15,textAlign:"center",fontSize:"1.1em",letterSpacing:"0.01em"},r[v.media.size("xsmall")]={marginLeft:"auto",marginRight:"auto"},r[v.media.greaterThan("small")]={fontSize:"1.3em"},r[v.media.greaterThan("large")]={fontSize:"1.5em"},r[v.media.greaterThan("xlarge")]={paddingTop:20},r.fontFamily=v.fonts.brand.fontFamily,r.fontWeight=300,r)},_.tagline),n.createElement(h.default,{valign:"center",direction:"column",halign:"center",css:(o={paddingTop:20},o[v.media.greaterThan("xlarge")]={paddingTop:40},o)},n.createElement(d.default,{to:"/getting-started/",type:"primary"},"Get started")))))),n.createElement(T.default,null,n.createElement("div",{css:v.sharedStyles.markdown},n.createElement("section",{css:[O,(i={},i[v.media.lessThan("medium")]={marginTop:0,paddingTop:30,position:"relative"},i)]},n.createElement("div",{css:(a={display:"flex",flexDirection:"row"},a[v.media.lessThan("medium")]={flexDirection:"column",alignItems:"center",textAlign:"center"},a)},n.createElement(R,{title:"No Sign-up Required"},"Your users do not need a GitHub or Jira account to post feedback to your issue tracker."),n.createElement(R,{title:"Easy Deployment"},"Host your own MicroFeedback backend with one command using either ZEIT now or Heroku."),n.createElement(R,{title:"Free and Open Source"},"MicroFeedback is free to use and liberally licensed (MIT).")))))),n.createElement("section",{css:{background:v.colors.dark,color:v.colors.white,paddingTop:45,paddingBottom:45}},n.createElement(T.default,null,n.createElement(h.default,{halign:"center",valign:"center"},n.createElement("span",{css:u({},v.fonts.brand,(c={fontWeight:300,marginRight:30,fontSize:"1.1em",color:v.colors.subtleOnDark},c[v.media.greaterThan("small")]={fontSize:"1.5em"},c))},"The easiest way to collect user feedback"),n.createElement(d.default,{to:"/getting-started/",type:"primary"},"Get Started")))))},t}(s.Component);t.default=P,e.exports=t.default}).call(t,r(2))},9:function(e,t){"use strict";t.__esModule=!0;t.name="MicroFeedback",t.tagline="User feedback delivered straight to your issue tracker",t.urlRoot="https://microfeedback.github.io",t.githubOrgURL="https://github.com/MicroFeedback",t.githubURL="https://github.com/MicroFeedback/microfeedback.github.io",t.microfeedbackURL="https://microfeedback-github.now.sh/microfeedback/microfeedback.github.io",t.copyrightOwner="Steven Loria",t.copyrightOwnerURL="https://stevenloria.com"},3:function(e,t){"use strict";t.__esModule=!0;var r,n,o,i,a,c,l,u,s={dark:"#282c34",darker:"#20232a",text:"#1a1a1a",subtle:"#6d6d6d",subtleOnDark:"#999",divider:"#ececec",note:"#ffe564",white:"#ffffff",black:"#000000",menu:"#f7f7f7",primary:"#3085d6",linkHighlight:"rgba(187, 239, 253, 0.3)",linkHighlightHover:"rgba(187, 239, 253, 1)",codeHighlight:"rgba(255, 229, 100, 0.2)"},f={xsmall:{min:0,max:599},small:{min:600,max:779},medium:{min:780,max:979},large:{min:980,max:1279},xlarge:{min:1280,max:1339},xxlarge:{min:1340,max:1/0},largerSidebar:{min:1100,max:1339},sidebarFixed:{min:2e3,max:1/0}},d={between:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r?"@media (min-width: "+f[e].min+"px) and (max-width: "+(f[t].min-1)+"px)":f[t].max===1/0?"@media (min-width: "+f[e].min+"px)":"@media (min-width: "+f[e].min+"px) and (max-width: "+f[t].max+"px)"},greaterThan:function(e){return"@media (min-width: "+f[e].min+"px)"},lessThan:function(e){return"@media (max-width: "+(f[e].min-1)+"px)"},size:function e(t){var e=f[t];return null===e.min?d.lessThan(t):null===e.max?d.greaterThan(t):d.between(t,t)}},p='-apple-system, BlinkMacSystemFont,\n"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",\n"Fira Sans", "Droid Sans", "Helvetica Neue",\nsans-serif',T="'Raleway', "+p,m={brand:{fontFamily:T,fontWeight:700}},h={backgroundColor:s.linkHighlight,borderBottom:"1px solid rgba(0, 0, 0, 0.2)",color:s.text,":hover":{backgroundColor:s.linkHighlightHover,borderBottomColor:s.text}},g=50,E=60,y={link:h,header:(r={height:g},r[d.greaterThan("large")]={height:E},r),articleLayout:{container:(n={display:"flex",minHeight:"calc(100vh - 60px)"},n[d.greaterThan("sidebarFixed")]={maxWidth:840,marginLeft:"auto",marginRight:"auto"},n),content:(o={marginTop:30,marginBottom:120},o[d.greaterThan("medium")]={marginTop:40},o),sidebar:(i={display:"flex",flexDirection:"column"},i[d.between("small","sidebarFixed")]={borderLeft:"1px solid #ececec",marginLeft:80},i[d.between("small","largerSidebar")]={flex:"0 0 200px",marginLeft:80},i[d.between("small","medium")]={marginLeft:40},i[d.greaterThan("largerSidebar")]={flex:"0 0 300px"},i[d.greaterThan("sidebarFixed")]={position:"fixed",right:0,width:300,zIndex:2},i),editLink:{color:s.subtle,borderColor:s.divider,transition:"all 0.2s ease",transitionPropery:"color, border-color",whiteSpace:"nowrap",borderBottomWidth:1,borderBottomStyle:"solid",":hover":{color:s.text,borderColor:s.text}}},markdown:{"& .gatsby-highlight":(a={marginTop:25,marginLeft:-30,marginRight:-30,marginBottom:25,paddingLeft:15,paddingRight:15},a[d.lessThan("small")]={marginLeft:-20,marginRight:-20,borderRadius:0},a),"& a:not(.anchor):not(.gatsby-resp-image-link)":h,"& > p:first-child":(c={fontSize:"1.1em",fontWeight:300,marginBottom:"1.8rem",fontFamily:T,color:s.subtle},c[d.greaterThan("xlarge")]={fontSize:"1.3em"},c["& a, & strong"]={fontWeight:400},c),"& p":(l={marginTop:20,maxWidth:"42em","&:first-of-type":{marginTop:15},"&:first-child":{marginTop:0}},l[d.lessThan("large")]={marginTop:15},l),"& h3 + p, & h3 + p:first-of-type":{marginTop:20},"& p > code, & li > code":{background:s.codeHighlight,color:s.text},"& p > code, & li > code, & p > a > code, & li > a > code":{padding:"0 3px",fontSize:"1em",wordBreak:"break-word"},"& hr":{height:1,marginBottom:-1,border:"none",borderBottom:"1px solid "+s.divider,marginTop:40,":first-child":{marginTop:0}},"& h2":{borderTop:"1px solid "+s.divider,marginTop:44,paddingTop:40,":first-child":{borderTop:0,marginTop:0,paddingTop:0}},"& hr + h2":{borderTop:0,marginTop:0},"& h2 + h3, & h2 + h3:first-of-type":{
paddingTop:"0.75em"},"& ol, & ul":{marginTop:20,color:s.text,paddingLeft:20,"& p, & p:first-of-type":{marginTop:0,lineHeight:1.2},"& li":{marginTop:15},"& ol, & ul":{marginLeft:20}},"& img":{maxWidth:"100%"}}};y.fluid=(u={minHeight:"calc(100vh - "+g+"px)",marginTop:50},u[d.greaterThan("large")]={minHeight:"calc(100vh - "+E+"px)",marginTop:60},u),t.colors=s,t.fonts=m,t.media=d,t.sharedStyles=y},67:function(e,t,r){"use strict";t.__esModule=!0;var n=r(9);t.default=function(e){return null===e?null:n.urlRoot+"/"+e.replace(/^\//,"")},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-e5bc81e837e1b45c21dc.js.map