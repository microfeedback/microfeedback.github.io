webpackJsonp([236594062348235],{

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(35);
	var isArguments = __webpack_require__(34);
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ }),

/***/ 34:
/***/ (function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ }),

/***/ 35:
/***/ (function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ }),

/***/ 264:
/***/ (function(module, exports) {

	module.exports = function() {
		return /[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g;
	};


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

	var emoji = __webpack_require__(264)
	
	module.exports = BananaSlug
	
	function BananaSlug () {
	  var self = this
	  if (!(self instanceof BananaSlug)) return new BananaSlug()
	
	  self.reset()
	}
	
	/**
	 * Generate a unique slug.
	 * @param  {string} value String of text to slugify
	 * @param  {boolean} [false] Keep the current case, otherwise make all lowercase
	 * @return {string}       A unique slug string
	 */
	BananaSlug.prototype.slug = function (value, maintainCase) {
	  maintainCase = maintainCase === true
	  var self = this
	  var slug = slugger(value, maintainCase)
	  var occurrences = self.occurrences[slug]
	
	  if (self.occurrences.hasOwnProperty(slug)) {
	    occurrences++
	  } else {
	    occurrences = 0
	  }
	
	  self.occurrences[slug] = occurrences
	
	  if (occurrences) {
	    slug = slug + '-' + occurrences
	  }
	
	  return slug
	}
	
	/**
	 * Reset - Forget all previous slugs
	 * @return void
	 */
	BananaSlug.prototype.reset = function () {
	  this.occurrences = {}
	}
	
	var whitespace = /\s/g
	
	function lower (string) {
	  return string.toLowerCase()
	}
	
	function slugger (string, maintainCase) {
	  var re = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g
	  var replacement = '-'
	
	  if (typeof string !== 'string') return ''
	  if (!maintainCase) string = string.replace(/[A-Z]+/g, lower)
	  return string.trim()
	    .replace(re, '')
	    .replace(emoji(), '')
	    .replace(whitespace, replacement)
	}


/***/ }),

/***/ 80:
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	
	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }
	
	        var keys = getOwnPropertyNames(sourceComponent);
	
	        if (getOwnPropertySymbols) {
	            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try { // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }
	
	        return targetComponent;
	    }
	
	    return targetComponent;
	};


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.microfeedback = factory());
	}(this, (function () { 'use strict';
	
	function __$$styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;
	
	  if (!css || typeof document === 'undefined') { return; }
	
	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';
	
	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }
	
	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}
	
	var defaultParams = {
	  title: '',
	  titleText: '',
	  text: '',
	  html: '',
	  type: null,
	  toast: false,
	  customClass: '',
	  target: 'body',
	  backdrop: true,
	  animation: true,
	  allowOutsideClick: true,
	  allowEscapeKey: true,
	  allowEnterKey: true,
	  showConfirmButton: true,
	  showCancelButton: false,
	  preConfirm: null,
	  confirmButtonText: 'OK',
	  confirmButtonAriaLabel: '',
	  confirmButtonColor: null,
	  confirmButtonClass: null,
	  cancelButtonText: 'Cancel',
	  cancelButtonAriaLabel: '',
	  cancelButtonColor: null,
	  cancelButtonClass: null,
	  buttonsStyling: true,
	  reverseButtons: false,
	  focusConfirm: true,
	  focusCancel: false,
	  showCloseButton: false,
	  closeButtonAriaLabel: 'Close this dialog',
	  showLoaderOnConfirm: false,
	  imageUrl: null,
	  imageWidth: null,
	  imageHeight: null,
	  imageAlt: '',
	  imageClass: null,
	  timer: null,
	  width: null,
	  padding: null,
	  background: null,
	  input: null,
	  inputPlaceholder: '',
	  inputValue: '',
	  inputOptions: {},
	  inputAutoTrim: true,
	  inputClass: null,
	  inputAttributes: {},
	  inputValidator: null,
	  grow: false,
	  position: 'center',
	  progressSteps: [],
	  currentProgressStep: null,
	  progressStepsDistance: null,
	  onBeforeOpen: null,
	  onOpen: null,
	  onClose: null,
	  useRejections: false,
	  expectRejections: false
	}
	
	const deprecatedParams = [
	  'useRejections',
	  'expectRejections'
	];
	
	const swalPrefix = 'swal2-';
	
	const prefix = (items) => {
	  const result = {};
	  for (const i in items) {
	    result[items[i]] = swalPrefix + items[i];
	  }
	  return result
	};
	
	const swalClasses = prefix([
	  'container',
	  'shown',
	  'iosfix',
	  'popup',
	  'modal',
	  'no-backdrop',
	  'toast',
	  'toast-shown',
	  'overlay',
	  'fade',
	  'show',
	  'hide',
	  'noanimation',
	  'close',
	  'title',
	  'header',
	  'content',
	  'actions',
	  'confirm',
	  'cancel',
	  'icon',
	  'image',
	  'input',
	  'has-input',
	  'file',
	  'range',
	  'select',
	  'radio',
	  'checkbox',
	  'textarea',
	  'inputerror',
	  'validationerror',
	  'progresssteps',
	  'activeprogressstep',
	  'progresscircle',
	  'progressline',
	  'loading',
	  'styled',
	  'top',
	  'top-start',
	  'top-end',
	  'top-left',
	  'top-right',
	  'center',
	  'center-start',
	  'center-end',
	  'center-left',
	  'center-right',
	  'bottom',
	  'bottom-start',
	  'bottom-end',
	  'bottom-left',
	  'bottom-right',
	  'grow-row',
	  'grow-column',
	  'grow-fullscreen'
	]);
	
	const iconTypes = prefix([
	  'success',
	  'warning',
	  'info',
	  'question',
	  'error'
	]);
	
	const consolePrefix = 'SweetAlert2:';
	
	/**
	 * Filter the unique values into a new array
	 * @param arr
	 */
	const uniqueArray = (arr) => {
	  const result = [];
	  for (var i in arr) {
	    if (result.indexOf(arr[i]) === -1) {
	      result.push(arr[i]);
	    }
	  }
	  return result
	};
	
	/**
	 * Standardise console warnings
	 * @param message
	 */
	const warn = (message) => {
	  console.warn(`${consolePrefix} ${message}`);
	};
	
	/**
	 * Standardise console errors
	 * @param message
	 */
	const error = (message) => {
	  console.error(`${consolePrefix} ${message}`);
	};
	
	/**
	 * Private global state for `warnOnce`
	 * @type {Array}
	 * @private
	 */
	const previousWarnOnceMessages = [];
	
	/**
	 * Show a console warning, but only if it hasn't already been shown
	 * @param message
	 */
	const warnOnce = (message) => {
	  if (!previousWarnOnceMessages.includes(message)) {
	    previousWarnOnceMessages.push(message);
	    warn(message);
	  }
	};
	
	/**
	 * If `arg` is a function, call it (with no arguments or context) and return the result.
	 * Otherwise, just pass the value through
	 * @param arg
	 */
	const callIfFunction = (arg) => typeof arg === 'function' ? arg() : arg;
	
	// Remember state in cases where opening and handling a modal will fiddle with it.
	const states = {
	  previousActiveElement: null,
	  previousBodyPadding: null
	};
	
	// Detect Node env
	const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';
	
	/*
	 * Add modal + overlay to DOM
	 */
	const init = (params) => {
	  // Clean up the old popup if it exists
	  const c = getContainer();
	  if (c) {
	    c.parentNode.removeChild(c);
	    removeClass(
	      [document.documentElement, document.body],
	      [
	        swalClasses['no-backdrop'],
	        swalClasses['has-input'],
	        swalClasses['toast-shown']
	      ]
	    );
	  }
	
	  if (isNodeEnv()) {
	    error('SweetAlert2 requires document to initialize');
	    return
	  }
	
	  const container = document.createElement('div');
	  container.className = swalClasses.container;
	  container.innerHTML = sweetHTML;
	
	  let targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
	  targetElement.appendChild(container);
	
	  const popup = getPopup();
	  const content = getContent();
	  const input = getChildByClass(content, swalClasses.input);
	  const file = getChildByClass(content, swalClasses.file);
	  const range = content.querySelector(`.${swalClasses.range} input`);
	  const rangeOutput = content.querySelector(`.${swalClasses.range} output`);
	  const select = getChildByClass(content, swalClasses.select);
	  const checkbox = content.querySelector(`.${swalClasses.checkbox} input`);
	  const textarea = getChildByClass(content, swalClasses.textarea);
	
	  // a11y
	  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
	
	  const resetValidationError = () => {
	    sweetAlert.isVisible() && sweetAlert.resetValidationError();
	  };
	
	  input.oninput = resetValidationError;
	  file.onchange = resetValidationError;
	  select.onchange = resetValidationError;
	  checkbox.onchange = resetValidationError;
	  textarea.oninput = resetValidationError;
	
	  range.oninput = () => {
	    resetValidationError();
	    rangeOutput.value = range.value;
	  };
	
	  range.onchange = () => {
	    resetValidationError();
	    range.previousSibling.value = range.value;
	  };
	
	  return popup
	};
	
	/*
	 * Manipulate DOM
	 */
	
	const sweetHTML = `
	 <div role="dialog" aria-modal="true" aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses.content}" class="${swalClasses.popup}" tabindex="-1">
	   <div class="${swalClasses.header}">
	     <ul class="${swalClasses.progresssteps}"></ul>
	     <div class="${swalClasses.icon} ${iconTypes.error}">
	       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>
	     </div>
	     <div class="${swalClasses.icon} ${iconTypes.question}">?</div>
	     <div class="${swalClasses.icon} ${iconTypes.warning}">!</div>
	     <div class="${swalClasses.icon} ${iconTypes.info}">i</div>
	     <div class="${swalClasses.icon} ${iconTypes.success}">
	       <div class="swal2-success-circular-line-left"></div>
	       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
	       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
	       <div class="swal2-success-circular-line-right"></div>
	     </div>
	     <img class="${swalClasses.image}" />
	     <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
	     <button type="button" class="${swalClasses.close}">×</button>
	   </div>
	   <div class="${swalClasses.content}">
	     <div id="${swalClasses.content}"></div>
	     <input class="${swalClasses.input}" />
	     <input type="file" class="${swalClasses.file}" />
	     <div class="${swalClasses.range}">
	       <input type="range" />
	       <output></output>
	     </div>
	     <select class="${swalClasses.select}"></select>
	     <div class="${swalClasses.radio}"></div>
	     <label for="${swalClasses.checkbox}" class="${swalClasses.checkbox}">
	       <input type="checkbox" />
	     </label>
	     <textarea class="${swalClasses.textarea}"></textarea>
	     <div class="${swalClasses.validationerror}" id="${swalClasses.validationerror}"></div>
	   </div>
	   <div class="${swalClasses.actions}">
	     <button type="button" class="${swalClasses.confirm}">OK</button>
	     <button type="button" class="${swalClasses.cancel}">Cancel</button>
	   </div>
	 </div>
	`.replace(/(^|\n)\s*/g, '');
	
	const getContainer = () => document.body.querySelector('.' + swalClasses.container);
	
	const getPopup = () => getContainer() ? getContainer().querySelector('.' + swalClasses.popup) : null;
	
	const getIcons = () => {
	  const popup = getPopup();
	  return popup.querySelectorAll('.' + swalClasses.icon)
	};
	
	const elementByClass = (className) => getContainer() ? getContainer().querySelector('.' + className) : null;
	
	const getTitle = () => elementByClass(swalClasses.title);
	
	const getContent = () => elementByClass(swalClasses.content);
	
	const getImage = () => elementByClass(swalClasses.image);
	
	const getProgressSteps = () => elementByClass(swalClasses.progresssteps);
	
	const getValidationError = () => elementByClass(swalClasses.validationerror);
	
	const getConfirmButton = () => elementByClass(swalClasses.confirm);
	
	const getCancelButton = () => elementByClass(swalClasses.cancel);
	
	const getButtonsWrapper = () => {
	  warnOnce(`swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead`);
	  return elementByClass(swalClasses.actions)
	};
	
	const getActions = () => elementByClass(swalClasses.actions);
	
	const getCloseButton = () => elementByClass(swalClasses.close);
	
	const getFocusableElements = () => {
	  const focusableElementsWithTabindex = Array.prototype.slice.call(
	    getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')
	  )
	  // sort according to tabindex
	  .sort((a, b) => {
	    a = parseInt(a.getAttribute('tabindex'));
	    b = parseInt(b.getAttribute('tabindex'));
	    if (a > b) {
	      return 1
	    } else if (a < b) {
	      return -1
	    }
	    return 0
	  });
	
	  const otherFocusableElements = Array.prototype.slice.call(
	    getPopup().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]')
	  );
	
	  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements))
	};
	
	const isModal = () => {
	  return !document.body.classList.contains(swalClasses['toast-shown'])
	};
	
	const isToast = () => {
	  return document.body.classList.contains(swalClasses['toast-shown'])
	};
	
	const isLoading = () => {
	  return getPopup().hasAttribute('data-loading')
	};
	
	const hasClass = (elem, className) => {
	  if (elem.classList) {
	    return elem.classList.contains(className)
	  }
	  return false
	};
	
	const focusInput = (input) => {
	  input.focus();
	
	  // place cursor at end of text in text input
	  if (input.type !== 'file') {
	    // http://stackoverflow.com/a/2345915/1331425
	    const val = input.value;
	    input.value = '';
	    input.value = val;
	  }
	};
	
	const addOrRemoveClass = (target, classList, add) => {
	  if (!target || !classList) {
	    return
	  }
	  if (typeof classList === 'string') {
	    classList = classList.split(/\s+/).filter(Boolean);
	  }
	  classList.forEach((className) => {
	    if (target.forEach) {
	      target.forEach((elem) => {
	        add ? elem.classList.add(className) : elem.classList.remove(className);
	      });
	    } else {
	      add ? target.classList.add(className) : target.classList.remove(className);
	    }
	  });
	};
	
	const addClass = (target, classList) => {
	  addOrRemoveClass(target, classList, true);
	};
	
	const removeClass = (target, classList) => {
	  addOrRemoveClass(target, classList, false);
	};
	
	const getChildByClass = (elem, className) => {
	  for (let i = 0; i < elem.childNodes.length; i++) {
	    if (hasClass(elem.childNodes[i], className)) {
	      return elem.childNodes[i]
	    }
	  }
	};
	
	const show = (elem, display) => {
	  if (!display) {
	    display = (elem.id === swalClasses.content) ? 'block' : 'flex';
	  }
	  elem.style.opacity = '';
	  elem.style.display = display;
	};
	
	const hide = (elem) => {
	  elem.style.opacity = '';
	  elem.style.display = 'none';
	};
	
	const empty = (elem) => {
	  while (elem.firstChild) {
	    elem.removeChild(elem.firstChild);
	  }
	};
	
	// borrowed from jquery $(elem).is(':visible') implementation
	const isVisible = (elem) => elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
	
	const removeStyleProperty = (elem, property) => {
	  if (elem.style.removeProperty) {
	    elem.style.removeProperty(property);
	  } else {
	    elem.style.removeAttribute(property);
	  }
	};
	
	const animationEndEvent = (() => {
	  // Prevent run in Node env
	  if (isNodeEnv()) {
	    return false
	  }
	
	  const testEl = document.createElement('div');
	  const transEndEventNames = {
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'OAnimation': 'oAnimationEnd oanimationend',
	    'animation': 'animationend'
	  };
	  for (const i in transEndEventNames) {
	    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
	      return transEndEventNames[i]
	    }
	  }
	
	  return false
	})();
	
	// Reset previous window keydown handler and focued element
	const resetPrevState = () => {
	  if (states.previousActiveElement && states.previousActiveElement.focus) {
	    let x = window.scrollX;
	    let y = window.scrollY;
	    states.previousActiveElement.focus();
	    if (typeof x !== 'undefined' && typeof y !== 'undefined') { // IE doesn't have scrollX/scrollY support
	      window.scrollTo(x, y);
	    }
	  }
	};
	
	// Measure width of scrollbar
	// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
	const measureScrollbar = () => {
	  const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
	  if (supportsTouch) {
	    return 0
	  }
	  const scrollDiv = document.createElement('div');
	  scrollDiv.style.width = '50px';
	  scrollDiv.style.height = '50px';
	  scrollDiv.style.overflow = 'scroll';
	  document.body.appendChild(scrollDiv);
	  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	  document.body.removeChild(scrollDiv);
	  return scrollbarWidth
	};
	
	/**
	 * Inject a string of CSS into the page header
	 *
	 * @param {String} css
	 */
	
	let popupParams = Object.assign({}, defaultParams);
	let queue = [];
	
	let previousWindowKeyDown;
	let windowOnkeydownOverridden;
	
	/*
	 * Check for the existence of Promise
	 * Hopefully to avoid many github issues
	 */
	if (typeof Promise === 'undefined') {
	  error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
	}
	
	/**
	 * Show relevant warnings for given params
	 *
	 * @param params
	 */
	const showWarningsForParams = (params) => {
	  for (const param in params) {
	    if (!sweetAlert.isValidParameter(param)) {
	      warn(`Unknown parameter "${param}"`);
	    }
	    if (sweetAlert.isDeprecatedParameter(param)) {
	      warnOnce(`The parameter "${param}" is deprecated and will be removed in the next major release.`);
	    }
	  }
	};
	
	/**
	 * Set type, text and actions on popup
	 *
	 * @param params
	 * @returns {boolean}
	 */
	const setParameters = (params) => {
	  // If a custom element is set, determine if it is valid
	  if ((typeof params.target === 'string' && !document.querySelector(params.target)) || (typeof params.target !== 'string' && !params.target.appendChild)) {
	    warn('Target parameter is not valid, defaulting to "body"');
	    params.target = 'body';
	  }
	
	  let popup;
	  const oldPopup = getPopup();
	  let targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
	  // If the model target has changed, refresh the popup
	  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
	    popup = init(params);
	  } else {
	    popup = oldPopup || init(params);
	  }
	
	  // Set popup width
	  if (params.width) {
	    popup.style.width = (typeof params.width === 'number') ? params.width + 'px' : params.width;
	  }
	
	  // Set popup padding
	  if (params.padding) {
	    popup.style.padding = (typeof params.padding === 'number') ? params.padding + 'px' : params.padding;
	  }
	
	  // Set popup background
	  if (params.background) {
	    popup.style.background = params.background;
	  }
	  const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
	  const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
	  for (let i = 0; i < successIconParts.length; i++) {
	    successIconParts[i].style.backgroundColor = popupBackgroundColor;
	  }
	
	  const container = getContainer();
	  const title = getTitle();
	  const content = getContent().querySelector('#' + swalClasses.content);
	  const actions = getActions();
	  const confirmButton = getConfirmButton();
	  const cancelButton = getCancelButton();
	  const closeButton = getCloseButton();
	
	  // Title
	  if (params.titleText) {
	    title.innerText = params.titleText;
	  } else {
	    title.innerHTML = params.title.split('\n').join('<br />');
	  }
	
	  if (!params.backdrop) {
	    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
	  }
	
	  // Content
	  if (params.text || params.html) {
	    if (typeof params.html === 'object') {
	      content.innerHTML = '';
	      if (0 in params.html) {
	        for (let i = 0; i in params.html; i++) {
	          content.appendChild(params.html[i].cloneNode(true));
	        }
	      } else {
	        content.appendChild(params.html.cloneNode(true));
	      }
	    } else if (params.html) {
	      content.innerHTML = params.html;
	    } else if (params.text) {
	      content.textContent = params.text;
	    }
	    show(content);
	  } else {
	    hide(content);
	  }
	
	  // Position
	  if (params.position in swalClasses) {
	    addClass(container, swalClasses[params.position]);
	  }
	
	  // Grow
	  if (params.grow && typeof params.grow === 'string') {
	    let growClass = 'grow-' + params.grow;
	    if (growClass in swalClasses) {
	      addClass(container, swalClasses[growClass]);
	    }
	  }
	
	  // Close button
	  if (params.showCloseButton) {
	    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
	    show(closeButton);
	  } else {
	    hide(closeButton);
	  }
	
	  // Default Class
	  popup.className = swalClasses.popup;
	  if (params.toast) {
	    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
	    addClass(popup, swalClasses.toast);
	  } else {
	    addClass(popup, swalClasses.modal);
	  }
	
	  // Custom Class
	  if (params.customClass) {
	    addClass(popup, params.customClass);
	  }
	
	  // Progress steps
	  let progressStepsContainer = getProgressSteps();
	  let currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert.getQueueStep() : params.currentProgressStep, 10);
	  if (params.progressSteps.length) {
	    show(progressStepsContainer);
	    empty(progressStepsContainer);
	    if (currentProgressStep >= params.progressSteps.length) {
	      warn(
	        'Invalid currentProgressStep parameter, it should be less than progressSteps.length ' +
	        '(currentProgressStep like JS arrays starts from 0)'
	      );
	    }
	    params.progressSteps.forEach((step, index) => {
	      let circle = document.createElement('li');
	      addClass(circle, swalClasses.progresscircle);
	      circle.innerHTML = step;
	      if (index === currentProgressStep) {
	        addClass(circle, swalClasses.activeprogressstep);
	      }
	      progressStepsContainer.appendChild(circle);
	      if (index !== params.progressSteps.length - 1) {
	        let line = document.createElement('li');
	        addClass(line, swalClasses.progressline);
	        if (params.progressStepsDistance) {
	          line.style.width = params.progressStepsDistance;
	        }
	        progressStepsContainer.appendChild(line);
	      }
	    });
	  } else {
	    hide(progressStepsContainer);
	  }
	
	  // Icon
	  const icons = getIcons();
	  for (let i = 0; i < icons.length; i++) {
	    hide(icons[i]);
	  }
	  if (params.type) {
	    let validType = false;
	    for (let iconType in iconTypes) {
	      if (params.type === iconType) {
	        validType = true;
	        break
	      }
	    }
	    if (!validType) {
	      error(`Unknown alert type: ${params.type}`);
	      return false
	    }
	    const icon = popup.querySelector(`.${swalClasses.icon}.${iconTypes[params.type]}`);
	    show(icon);
	
	    // Animate icon
	    if (params.animation) {
	      switch (params.type) {
	        case 'success':
	          addClass(icon, 'swal2-animate-success-icon');
	          addClass(icon.querySelector('.swal2-success-line-tip'), 'swal2-animate-success-line-tip');
	          addClass(icon.querySelector('.swal2-success-line-long'), 'swal2-animate-success-line-long');
	          break
	        case 'error':
	          addClass(icon, 'swal2-animate-error-icon');
	          addClass(icon.querySelector('.swal2-x-mark'), 'swal2-animate-x-mark');
	          break
	        default:
	          break
	      }
	    }
	  }
	
	  // Custom image
	  const image = getImage();
	  if (params.imageUrl) {
	    image.setAttribute('src', params.imageUrl);
	    image.setAttribute('alt', params.imageAlt);
	    show(image);
	
	    if (params.imageWidth) {
	      image.setAttribute('width', params.imageWidth);
	    } else {
	      image.removeAttribute('width');
	    }
	
	    if (params.imageHeight) {
	      image.setAttribute('height', params.imageHeight);
	    } else {
	      image.removeAttribute('height');
	    }
	
	    image.className = swalClasses.image;
	    if (params.imageClass) {
	      addClass(image, params.imageClass);
	    }
	  } else {
	    hide(image);
	  }
	
	  // Cancel button
	  if (params.showCancelButton) {
	    cancelButton.style.display = 'inline-block';
	  } else {
	    hide(cancelButton);
	  }
	
	  // Confirm button
	  if (params.showConfirmButton) {
	    removeStyleProperty(confirmButton, 'display');
	  } else {
	    hide(confirmButton);
	  }
	
	  // Actions (buttons) wrapper
	  if (!params.showConfirmButton && !params.showCancelButton) {
	    hide(actions);
	  } else {
	    show(actions);
	  }
	
	  // Edit text on confirm and cancel buttons
	  confirmButton.innerHTML = params.confirmButtonText;
	  cancelButton.innerHTML = params.cancelButtonText;
	
	  // ARIA labels for confirm and cancel buttons
	  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
	  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);
	
	  // Add buttons custom classes
	  confirmButton.className = swalClasses.confirm;
	  addClass(confirmButton, params.confirmButtonClass);
	  cancelButton.className = swalClasses.cancel;
	  addClass(cancelButton, params.cancelButtonClass);
	
	  // Buttons styling
	  if (params.buttonsStyling) {
	    addClass([confirmButton, cancelButton], swalClasses.styled);
	
	    // Buttons background colors
	    if (params.confirmButtonColor) {
	      confirmButton.style.backgroundColor = params.confirmButtonColor;
	    }
	    if (params.cancelButtonColor) {
	      cancelButton.style.backgroundColor = params.cancelButtonColor;
	    }
	
	    // Loading state
	    const confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
	    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
	    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
	  } else {
	    removeClass([confirmButton, cancelButton], swalClasses.styled);
	
	    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
	    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
	  }
	
	  // CSS animation
	  if (params.animation === true) {
	    removeClass(popup, swalClasses.noanimation);
	  } else {
	    addClass(popup, swalClasses.noanimation);
	  }
	
	  // showLoaderOnConfirm && preConfirm
	  if (params.showLoaderOnConfirm && !params.preConfirm) {
	    warn(
	      'showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' +
	      'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' +
	      'https://sweetalert2.github.io/#ajax-request'
	    );
	  }
	};
	
	/**
	 * Animations
	 *
	 * @param animation
	 * @param onBeforeOpen
	 * @param onComplete
	 */
	const openPopup = (animation, onBeforeOpen, onComplete) => {
	  const container = getContainer();
	  const popup = getPopup();
	
	  if (onBeforeOpen !== null && typeof onBeforeOpen === 'function') {
	    onBeforeOpen(popup);
	  }
	
	  if (animation) {
	    addClass(popup, swalClasses.show);
	    addClass(container, swalClasses.fade);
	    removeClass(popup, swalClasses.hide);
	  } else {
	    removeClass(popup, swalClasses.fade);
	  }
	  show(popup);
	
	  // scrolling is 'hidden' until animation is done, after that 'auto'
	  container.style.overflowY = 'hidden';
	  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
	    popup.addEventListener(animationEndEvent, function swalCloseEventFinished () {
	      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
	      container.style.overflowY = 'auto';
	    });
	  } else {
	    container.style.overflowY = 'auto';
	  }
	
	  addClass([document.documentElement, document.body, container], swalClasses.shown);
	  if (isModal()) {
	    fixScrollbar();
	    iOSfix();
	  }
	  states.previousActiveElement = document.activeElement;
	  if (onComplete !== null && typeof onComplete === 'function') {
	    setTimeout(() => {
	      onComplete(popup);
	    });
	  }
	};
	
	const fixScrollbar = () => {
	  // for queues, do not do this more than once
	  if (states.previousBodyPadding !== null) {
	    return
	  }
	  // if the body has overflow
	  if (document.body.scrollHeight > window.innerHeight) {
	    // add padding so the content doesn't shift after removal of scrollbar
	    states.previousBodyPadding = document.body.style.paddingRight;
	    document.body.style.paddingRight = measureScrollbar() + 'px';
	  }
	};
	
	const undoScrollbar = () => {
	  if (states.previousBodyPadding !== null) {
	    document.body.style.paddingRight = states.previousBodyPadding;
	    states.previousBodyPadding = null;
	  }
	};
	
	// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
	const iOSfix = () => {
	  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
	    const offset = document.body.scrollTop;
	    document.body.style.top = (offset * -1) + 'px';
	    addClass(document.body, swalClasses.iosfix);
	  }
	};
	
	const undoIOSfix = () => {
	  if (hasClass(document.body, swalClasses.iosfix)) {
	    const offset = parseInt(document.body.style.top, 10);
	    removeClass(document.body, swalClasses.iosfix);
	    document.body.style.top = '';
	    document.body.scrollTop = (offset * -1);
	  }
	};
	
	// SweetAlert entry point
	const sweetAlert = (...args) => {
	  // Prevent run in Node env
	  if (typeof window === 'undefined') {
	    return
	  }
	
	  if (typeof args[0] === 'undefined') {
	    error('SweetAlert2 expects at least 1 attribute!');
	    return false
	  }
	
	  let params = Object.assign({}, popupParams);
	
	  switch (typeof args[0]) {
	    case 'string':
	      [params.title, params.html, params.type] = args;
	      break
	
	    case 'object':
	      showWarningsForParams(args[0]);
	      Object.assign(params, args[0]);
	      params.extraParams = args[0].extraParams;
	
	      if (params.input === 'email' && params.inputValidator === null) {
	        const inputValidator = (email) => {
	          return new Promise((resolve, reject) => {
	            const emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/;
	            if (emailRegex.test(email)) {
	              resolve();
	            } else {
	              reject('Invalid email address');
	            }
	          })
	        };
	        params.inputValidator = params.expectRejections ? inputValidator : sweetAlert.adaptInputValidator(inputValidator);
	      }
	
	      if (params.input === 'url' && params.inputValidator === null) {
	        const inputValidator = (url) => {
	          return new Promise((resolve, reject) => {
	            // taken from https://stackoverflow.com/a/3809435/1331425
	            const urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
	            if (urlRegex.test(url)) {
	              resolve();
	            } else {
	              reject('Invalid URL');
	            }
	          })
	        };
	        params.inputValidator = params.expectRejections ? inputValidator : sweetAlert.adaptInputValidator(inputValidator);
	      }
	      break
	
	    default:
	      error('Unexpected type of argument! Expected "string" or "object", got ' + typeof args[0]);
	      return false
	  }
	
	  setParameters(params);
	
	  const container = getContainer();
	  const popup = getPopup();
	
	  return new Promise((resolve, reject) => {
	    // functions to handle all resolving/rejecting/settling
	    const succeedWith = (value) => {
	      sweetAlert.closePopup(params.onClose);
	      if (params.useRejections) {
	        resolve(value);
	      } else {
	        resolve({value});
	      }
	    };
	    const dismissWith = (dismiss) => {
	      sweetAlert.closePopup(params.onClose);
	      if (params.useRejections) {
	        reject(dismiss);
	      } else {
	        resolve({dismiss});
	      }
	    };
	    const errorWith = (error$$1) => {
	      sweetAlert.closePopup(params.onClose);
	      reject(error$$1);
	    };
	
	    // Close on timer
	    if (params.timer) {
	      popup.timeout = setTimeout(() => dismissWith('timer'), params.timer);
	    }
	
	    // Get input element by specified type or, if type isn't specified, by params.input
	    const getInput = (inputType) => {
	      inputType = inputType || params.input;
	      if (!inputType) {
	        return null
	      }
	      switch (inputType) {
	        case 'select':
	        case 'textarea':
	        case 'file':
	          return getChildByClass(content, swalClasses[inputType])
	        case 'checkbox':
	          return popup.querySelector(`.${swalClasses.checkbox} input`)
	        case 'radio':
	          return popup.querySelector(`.${swalClasses.radio} input:checked`) ||
	            popup.querySelector(`.${swalClasses.radio} input:first-child`)
	        case 'range':
	          return popup.querySelector(`.${swalClasses.range} input`)
	        default:
	          return getChildByClass(content, swalClasses.input)
	      }
	    };
	
	    // Get the value of the popup input
	    const getInputValue = () => {
	      const input = getInput();
	      if (!input) {
	        return null
	      }
	      switch (params.input) {
	        case 'checkbox':
	          return input.checked ? 1 : 0
	        case 'radio':
	          return input.checked ? input.value : null
	        case 'file':
	          return input.files.length ? input.files[0] : null
	        default:
	          return params.inputAutoTrim ? input.value.trim() : input.value
	      }
	    };
	
	    // input autofocus
	    if (params.input) {
	      setTimeout(() => {
	        const input = getInput();
	        if (input) {
	          focusInput(input);
	        }
	      }, 0);
	    }
	
	    const confirm = (value) => {
	      if (params.showLoaderOnConfirm) {
	        sweetAlert.showLoading();
	      }
	
	      if (params.preConfirm) {
	        sweetAlert.resetValidationError();
	        const preConfirmPromise = Promise.resolve().then(() => params.preConfirm(value, params.extraParams));
	        if (params.expectRejections) {
	          preConfirmPromise.then(
	            (preConfirmValue) => succeedWith(preConfirmValue || value),
	            (validationError) => {
	              sweetAlert.hideLoading();
	              if (validationError) {
	                sweetAlert.showValidationError(validationError);
	              }
	            }
	          );
	        } else {
	          preConfirmPromise.then(
	            (preConfirmValue) => {
	              if (isVisible(getValidationError())) {
	                sweetAlert.hideLoading();
	              } else {
	                succeedWith(preConfirmValue || value);
	              }
	            },
	            (error$$1) => errorWith(error$$1)
	          );
	        }
	      } else {
	        succeedWith(value);
	      }
	    };
	
	    // Mouse interactions
	    const onButtonEvent = (event) => {
	      const e = event || window.event;
	      const target = e.target || e.srcElement;
	      const confirmButton = getConfirmButton();
	      const cancelButton = getCancelButton();
	      const targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
	      const targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));
	
	      switch (e.type) {
	        case 'click':
	          // Clicked 'confirm'
	          if (targetedConfirm && sweetAlert.isVisible()) {
	            sweetAlert.disableButtons();
	            if (params.input) {
	              const inputValue = getInputValue();
	
	              if (params.inputValidator) {
	                sweetAlert.disableInput();
	                const validationPromise = Promise.resolve().then(() => params.inputValidator(inputValue, params.extraParams));
	                if (params.expectRejections) {
	                  validationPromise.then(
	                    () => {
	                      sweetAlert.enableButtons();
	                      sweetAlert.enableInput();
	                      confirm(inputValue);
	                    },
	                    (validationError) => {
	                      sweetAlert.enableButtons();
	                      sweetAlert.enableInput();
	                      if (validationError) {
	                        sweetAlert.showValidationError(validationError);
	                      }
	                    }
	                  );
	                } else {
	                  validationPromise.then(
	                    (validationError) => {
	                      sweetAlert.enableButtons();
	                      sweetAlert.enableInput();
	                      if (validationError) {
	                        sweetAlert.showValidationError(validationError);
	                      } else {
	                        confirm(inputValue);
	                      }
	                    },
	                    error$$1 => errorWith(error$$1)
	                  );
	                }
	              } else {
	                confirm(inputValue);
	              }
	            } else {
	              confirm(true);
	            }
	
	          // Clicked 'cancel'
	          } else if (targetedCancel && sweetAlert.isVisible()) {
	            sweetAlert.disableButtons();
	            dismissWith('cancel');
	          }
	          break
	        default:
	      }
	    };
	
	    const buttons = popup.querySelectorAll('button');
	    for (let i = 0; i < buttons.length; i++) {
	      buttons[i].onclick = onButtonEvent;
	      buttons[i].onmouseover = onButtonEvent;
	      buttons[i].onmouseout = onButtonEvent;
	      buttons[i].onmousedown = onButtonEvent;
	    }
	
	    // Closing popup by close button
	    getCloseButton().onclick = () => {
	      dismissWith('close');
	    };
	
	    if (params.toast) {
	      // Closing popup by overlay click
	      popup.onclick = (e) => {
	        if (e.target !== popup || (params.showConfirmButton || params.showCancelButton)) {
	          return
	        }
	        if (params.allowOutsideClick) {
	          sweetAlert.closePopup(params.onClose);
	          dismissWith('overlay');
	        }
	      };
	    } else {
	      let ignoreOutsideClick = false;
	
	      // Ignore click events that had mousedown on the popup but mouseup on the container
	      // This can happen when the user drags a slider
	      popup.onmousedown = () => {
	        container.onmouseup = function (e) {
	          container.onmouseup = undefined;
	          // We only check if the mouseup target is the container because usually it doesn't
	          // have any other direct children aside of the popup
	          if (e.target === container) {
	            ignoreOutsideClick = true;
	          }
	        };
	      };
	
	      // Ignore click events that had mousedown on the container but mouseup on the popup
	      container.onmousedown = () => {
	        popup.onmouseup = function (e) {
	          popup.onmouseup = undefined;
	          // We also need to check if the mouseup target is a child of the popup
	          if (e.target === popup || popup.contains(e.target)) {
	            ignoreOutsideClick = true;
	          }
	        };
	      };
	
	      container.onclick = (e) => {
	        if (ignoreOutsideClick) {
	          ignoreOutsideClick = false;
	          return
	        }
	        if (e.target !== container) {
	          return
	        }
	        if (callIfFunction(params.allowOutsideClick)) {
	          dismissWith('overlay');
	        }
	      };
	    }
	
	    const content = getContent();
	    const actions = getActions();
	    const confirmButton = getConfirmButton();
	    const cancelButton = getCancelButton();
	
	    // Reverse buttons (Confirm on the right side)
	    if (params.reverseButtons) {
	      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
	    } else {
	      confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
	    }
	
	    // Focus handling
	    const setFocus = (index, increment) => {
	      const focusableElements = getFocusableElements(params.focusCancel);
	      // search for visible elements and select the next possible match
	      for (let i = 0; i < focusableElements.length; i++) {
	        index = index + increment;
	
	        // rollover to first item
	        if (index === focusableElements.length) {
	          index = 0;
	
	        // go to last item
	        } else if (index === -1) {
	          index = focusableElements.length - 1;
	        }
	
	        // determine if element is visible
	        const el = focusableElements[index];
	        if (isVisible(el)) {
	          return el.focus()
	        }
	      }
	    };
	
	    const handleKeyDown = (event) => {
	      const e = event || window.event;
	
	      const arrowKeys = [
	        'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
	        'Left', 'Right', 'Up', 'Down' // IE11
	      ];
	
	      if (e.key === 'Enter' && !e.isComposing) {
	        if (e.target === getInput()) {
	          if (['textarea', 'file'].includes(params.input)) {
	            return // do not submit
	          }
	
	          sweetAlert.clickConfirm();
	          e.preventDefault();
	        }
	
	      // TAB
	      } else if (e.key === 'Tab') {
	        const targetElement = e.target || e.srcElement;
	
	        const focusableElements = getFocusableElements(params.focusCancel);
	        let btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
	        for (let i = 0; i < focusableElements.length; i++) {
	          if (targetElement === focusableElements[i]) {
	            btnIndex = i;
	            break
	          }
	        }
	
	        if (!e.shiftKey) {
	          // Cycle to the next button
	          setFocus(btnIndex, 1);
	        } else {
	          // Cycle to the prev button
	          setFocus(btnIndex, -1);
	        }
	        e.stopPropagation();
	        e.preventDefault();
	
	      // ARROWS - switch focus between buttons
	      } else if (arrowKeys.includes(e.key)) {
	        // focus Cancel button if Confirm button is currently focused
	        if (document.activeElement === confirmButton && isVisible(cancelButton)) {
	          cancelButton.focus();
	        // and vice versa
	        } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
	          confirmButton.focus();
	        }
	
	      // ESC
	      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(params.allowEscapeKey) === true) {
	        dismissWith('esc');
	      }
	    };
	
	    if (params.toast && windowOnkeydownOverridden) {
	      window.onkeydown = previousWindowKeyDown;
	      windowOnkeydownOverridden = false;
	    }
	
	    if (!params.toast && !windowOnkeydownOverridden) {
	      previousWindowKeyDown = window.onkeydown;
	      windowOnkeydownOverridden = true;
	      window.onkeydown = handleKeyDown;
	    }
	
	    /**
	     * Show spinner instead of Confirm button and disable Cancel button
	     */
	    sweetAlert.hideLoading = sweetAlert.disableLoading = () => {
	      if (!params.showConfirmButton) {
	        hide(confirmButton);
	        if (!params.showCancelButton) {
	          hide(getActions());
	        }
	      }
	      removeClass([popup, actions], swalClasses.loading);
	      popup.removeAttribute('aria-busy');
	      popup.removeAttribute('data-loading');
	      confirmButton.disabled = false;
	      cancelButton.disabled = false;
	    };
	
	    sweetAlert.getTitle = () => getTitle();
	    sweetAlert.getContent = () => getContent();
	    sweetAlert.getInput = () => getInput();
	    sweetAlert.getImage = () => getImage();
	    sweetAlert.getButtonsWrapper = () => getButtonsWrapper();
	    sweetAlert.getActions = () => getActions();
	    sweetAlert.getConfirmButton = () => getConfirmButton();
	    sweetAlert.getCancelButton = () => getCancelButton();
	    sweetAlert.isLoading = () => isLoading();
	
	    sweetAlert.enableButtons = () => {
	      confirmButton.disabled = false;
	      cancelButton.disabled = false;
	    };
	
	    sweetAlert.disableButtons = () => {
	      confirmButton.disabled = true;
	      cancelButton.disabled = true;
	    };
	
	    sweetAlert.enableConfirmButton = () => {
	      confirmButton.disabled = false;
	    };
	
	    sweetAlert.disableConfirmButton = () => {
	      confirmButton.disabled = true;
	    };
	
	    sweetAlert.enableInput = () => {
	      const input = getInput();
	      if (!input) {
	        return false
	      }
	      if (input.type === 'radio') {
	        const radiosContainer = input.parentNode.parentNode;
	        const radios = radiosContainer.querySelectorAll('input');
	        for (let i = 0; i < radios.length; i++) {
	          radios[i].disabled = false;
	        }
	      } else {
	        input.disabled = false;
	      }
	    };
	
	    sweetAlert.disableInput = () => {
	      const input = getInput();
	      if (!input) {
	        return false
	      }
	      if (input && input.type === 'radio') {
	        const radiosContainer = input.parentNode.parentNode;
	        const radios = radiosContainer.querySelectorAll('input');
	        for (let i = 0; i < radios.length; i++) {
	          radios[i].disabled = true;
	        }
	      } else {
	        input.disabled = true;
	      }
	    };
	
	    // Show block with validation error
	    sweetAlert.showValidationError = (error$$1) => {
	      const validationError = getValidationError();
	      validationError.innerHTML = error$$1;
	      const popupComputedStyle = window.getComputedStyle(popup);
	      validationError.style.marginLeft = `-${popupComputedStyle.getPropertyValue('padding-left')}`;
	      validationError.style.marginRight = `-${popupComputedStyle.getPropertyValue('padding-right')}`;
	      show(validationError);
	
	      const input = getInput();
	      if (input) {
	        input.setAttribute('aria-invalid', true);
	        input.setAttribute('aria-describedBy', swalClasses.validationerror);
	        focusInput(input);
	        addClass(input, swalClasses.inputerror);
	      }
	    };
	
	    // Hide block with validation error
	    sweetAlert.resetValidationError = () => {
	      const validationError = getValidationError();
	      hide(validationError);
	
	      const input = getInput();
	      if (input) {
	        input.removeAttribute('aria-invalid');
	        input.removeAttribute('aria-describedBy');
	        removeClass(input, swalClasses.inputerror);
	      }
	    };
	
	    sweetAlert.getProgressSteps = () => {
	      return params.progressSteps
	    };
	
	    sweetAlert.setProgressSteps = (progressSteps) => {
	      params.progressSteps = progressSteps;
	      setParameters(params);
	    };
	
	    sweetAlert.showProgressSteps = () => {
	      show(getProgressSteps());
	    };
	
	    sweetAlert.hideProgressSteps = () => {
	      hide(getProgressSteps());
	    };
	
	    sweetAlert.enableButtons();
	    sweetAlert.hideLoading();
	    sweetAlert.resetValidationError();
	
	    if (params.input) {
	      addClass(document.body, swalClasses['has-input']);
	    }
	
	    // inputs
	    const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
	    let input;
	    for (let i = 0; i < inputTypes.length; i++) {
	      const inputClass = swalClasses[inputTypes[i]];
	      const inputContainer = getChildByClass(content, inputClass);
	      input = getInput(inputTypes[i]);
	
	      // set attributes
	      if (input) {
	        for (let j in input.attributes) {
	          if (input.attributes.hasOwnProperty(j)) {
	            const attrName = input.attributes[j].name;
	            if (attrName !== 'type' && attrName !== 'value') {
	              input.removeAttribute(attrName);
	            }
	          }
	        }
	        for (let attr in params.inputAttributes) {
	          input.setAttribute(attr, params.inputAttributes[attr]);
	        }
	      }
	
	      // set class
	      inputContainer.className = inputClass;
	      if (params.inputClass) {
	        addClass(inputContainer, params.inputClass);
	      }
	
	      hide(inputContainer);
	    }
	
	    let populateInputOptions;
	    switch (params.input) {
	      case 'text':
	      case 'email':
	      case 'password':
	      case 'number':
	      case 'tel':
	      case 'url':
	        input = getChildByClass(content, swalClasses.input);
	        input.value = params.inputValue;
	        input.placeholder = params.inputPlaceholder;
	        input.type = params.input;
	        show(input);
	        break
	      case 'file':
	        input = getChildByClass(content, swalClasses.file);
	        input.placeholder = params.inputPlaceholder;
	        input.type = params.input;
	        show(input);
	        break
	      case 'range':
	        const range = getChildByClass(content, swalClasses.range);
	        const rangeInput = range.querySelector('input');
	        const rangeOutput = range.querySelector('output');
	        rangeInput.value = params.inputValue;
	        rangeInput.type = params.input;
	        rangeOutput.value = params.inputValue;
	        show(range);
	        break
	      case 'select':
	        const select = getChildByClass(content, swalClasses.select);
	        select.innerHTML = '';
	        if (params.inputPlaceholder) {
	          const placeholder = document.createElement('option');
	          placeholder.innerHTML = params.inputPlaceholder;
	          placeholder.value = '';
	          placeholder.disabled = true;
	          placeholder.selected = true;
	          select.appendChild(placeholder);
	        }
	        populateInputOptions = (inputOptions) => {
	          for (let optionValue in inputOptions) {
	            const option = document.createElement('option');
	            option.value = optionValue;
	            option.innerHTML = inputOptions[optionValue];
	            if (params.inputValue.toString() === optionValue) {
	              option.selected = true;
	            }
	            select.appendChild(option);
	          }
	          show(select);
	          select.focus();
	        };
	        break
	      case 'radio':
	        const radio = getChildByClass(content, swalClasses.radio);
	        radio.innerHTML = '';
	        populateInputOptions = (inputOptions) => {
	          for (let radioValue in inputOptions) {
	            const radioInput = document.createElement('input');
	            const radioLabel = document.createElement('label');
	            const radioLabelSpan = document.createElement('span');
	            radioInput.type = 'radio';
	            radioInput.name = swalClasses.radio;
	            radioInput.value = radioValue;
	            if (params.inputValue.toString() === radioValue) {
	              radioInput.checked = true;
	            }
	            radioLabelSpan.innerHTML = inputOptions[radioValue];
	            radioLabel.appendChild(radioInput);
	            radioLabel.appendChild(radioLabelSpan);
	            radioLabel.for = radioInput.id;
	            radio.appendChild(radioLabel);
	          }
	          show(radio);
	          const radios = radio.querySelectorAll('input');
	          if (radios.length) {
	            radios[0].focus();
	          }
	        };
	        break
	      case 'checkbox':
	        const checkbox = getChildByClass(content, swalClasses.checkbox);
	        const checkboxInput = getInput('checkbox');
	        checkboxInput.type = 'checkbox';
	        checkboxInput.value = 1;
	        checkboxInput.id = swalClasses.checkbox;
	        checkboxInput.checked = Boolean(params.inputValue);
	        let label = checkbox.getElementsByTagName('span');
	        if (label.length) {
	          checkbox.removeChild(label[0]);
	        }
	        label = document.createElement('span');
	        label.innerHTML = params.inputPlaceholder;
	        checkbox.appendChild(label);
	        show(checkbox);
	        break
	      case 'textarea':
	        const textarea = getChildByClass(content, swalClasses.textarea);
	        textarea.value = params.inputValue;
	        textarea.placeholder = params.inputPlaceholder;
	        show(textarea);
	        break
	      case null:
	        break
	      default:
	        error(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`);
	        break
	    }
	
	    if (params.input === 'select' || params.input === 'radio') {
	      if (params.inputOptions instanceof Promise) {
	        sweetAlert.showLoading();
	        params.inputOptions.then((inputOptions) => {
	          sweetAlert.hideLoading();
	          populateInputOptions(inputOptions);
	        });
	      } else if (typeof params.inputOptions === 'object') {
	        populateInputOptions(params.inputOptions);
	      } else {
	        error('Unexpected type of inputOptions! Expected object or Promise, got ' + typeof params.inputOptions);
	      }
	    }
	
	    openPopup(params.animation, params.onBeforeOpen, params.onOpen);
	
	    if (!params.toast) {
	      if (!callIfFunction(params.allowEnterKey)) {
	        if (document.activeElement) {
	          document.activeElement.blur();
	        }
	      } else if (params.focusCancel && isVisible(cancelButton)) {
	        cancelButton.focus();
	      } else if (params.focusConfirm && isVisible(confirmButton)) {
	        confirmButton.focus();
	      } else {
	        setFocus(-1, 1);
	      }
	    }
	
	    // fix scroll
	    getContainer().scrollTop = 0;
	  })
	};
	
	/*
	 * Global function to determine if swal2 popup is shown
	 */
	sweetAlert.isVisible = () => {
	  return !!getPopup()
	};
	
	/*
	 * Global function for chaining sweetAlert popups
	 */
	sweetAlert.queue = (steps) => {
	  queue = steps;
	  const resetQueue = () => {
	    queue = [];
	    document.body.removeAttribute('data-swal2-queue-step');
	  };
	  let queueResult = [];
	  return new Promise((resolve, reject) => {
	    (function step (i, callback) {
	      if (i < queue.length) {
	        document.body.setAttribute('data-swal2-queue-step', i);
	
	        sweetAlert(queue[i]).then((result) => {
	          if (typeof result.value !== 'undefined') {
	            queueResult.push(result.value);
	            step(i + 1, callback);
	          } else {
	            resetQueue();
	            resolve({dismiss: result.dismiss});
	          }
	        });
	      } else {
	        resetQueue();
	        resolve({value: queueResult});
	      }
	    })(0);
	  })
	};
	
	/*
	 * Global function for getting the index of current popup in queue
	 */
	sweetAlert.getQueueStep = () => document.body.getAttribute('data-swal2-queue-step');
	
	/*
	 * Global function for inserting a popup to the queue
	 */
	sweetAlert.insertQueueStep = (step, index) => {
	  if (index && index < queue.length) {
	    return queue.splice(index, 0, step)
	  }
	  return queue.push(step)
	};
	
	/*
	 * Global function for deleting a popup from the queue
	 */
	sweetAlert.deleteQueueStep = (index) => {
	  if (typeof queue[index] !== 'undefined') {
	    queue.splice(index, 1);
	  }
	};
	
	/*
	 * Global function to close sweetAlert
	 */
	sweetAlert.close = sweetAlert.closePopup = sweetAlert.closeModal = sweetAlert.closeToast = (onComplete) => {
	  const container = getContainer();
	  const popup = getPopup();
	  if (!popup) {
	    return
	  }
	  removeClass(popup, swalClasses.show);
	  addClass(popup, swalClasses.hide);
	  clearTimeout(popup.timeout);
	
	  if (!isToast()) {
	    resetPrevState();
	    window.onkeydown = previousWindowKeyDown;
	    windowOnkeydownOverridden = false;
	  }
	
	  const removePopupAndResetState = () => {
	    if (container.parentNode) {
	      container.parentNode.removeChild(container);
	    }
	    removeClass(
	      [document.documentElement, document.body],
	      [
	        swalClasses.shown,
	        swalClasses['no-backdrop'],
	        swalClasses['has-input'],
	        swalClasses['toast-shown']
	      ]
	    );
	
	    if (isModal()) {
	      undoScrollbar();
	      undoIOSfix();
	    }
	  };
	
	  // If animation is supported, animate
	  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
	    popup.addEventListener(animationEndEvent, function swalCloseEventFinished () {
	      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
	      if (hasClass(popup, swalClasses.hide)) {
	        removePopupAndResetState();
	      }
	    });
	  } else {
	    // Otherwise, remove immediately
	    removePopupAndResetState();
	  }
	  if (onComplete !== null && typeof onComplete === 'function') {
	    setTimeout(() => {
	      onComplete(popup);
	    });
	  }
	};
	
	/*
	 * Global function to click 'Confirm' button
	 */
	sweetAlert.clickConfirm = () => getConfirmButton().click();
	
	/*
	 * Global function to click 'Cancel' button
	 */
	sweetAlert.clickCancel = () => getCancelButton().click();
	
	/**
	 * Show spinner instead of Confirm button and disable Cancel button
	 */
	sweetAlert.showLoading = sweetAlert.enableLoading = () => {
	  let popup = getPopup();
	  if (!popup) {
	    sweetAlert('');
	  }
	  popup = getPopup();
	  const actions = getActions();
	  const confirmButton = getConfirmButton();
	  const cancelButton = getCancelButton();
	
	  show(actions);
	  show(confirmButton, 'inline-block');
	  addClass([popup, actions], swalClasses.loading);
	  confirmButton.disabled = true;
	  cancelButton.disabled = true;
	
	  popup.setAttribute('data-loading', true);
	  popup.setAttribute('aria-busy', true);
	  popup.focus();
	};
	
	/**
	 * Is valid parameter
	 * @param {String} paramName
	 */
	sweetAlert.isValidParameter = (paramName) => {
	  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams'
	};
	
	/**
	 * Is deprecated parameter
	 * @param {String} paramName
	 */
	sweetAlert.isDeprecatedParameter = (paramName) => {
	  return deprecatedParams.includes(paramName)
	};
	
	/**
	 * Set default params for each popup
	 * @param {Object} userParams
	 */
	sweetAlert.setDefaults = (userParams) => {
	  if (!userParams || typeof userParams !== 'object') {
	    return error('the argument for setDefaults() is required and has to be a object')
	  }
	
	  showWarningsForParams(userParams);
	
	  // assign valid params from userParams to popupParams
	  for (const param in userParams) {
	    if (sweetAlert.isValidParameter(param)) {
	      popupParams[param] = userParams[param];
	    }
	  }
	};
	
	/**
	 * Reset default params for each popup
	 */
	sweetAlert.resetDefaults = () => {
	  popupParams = Object.assign({}, defaultParams);
	};
	
	/**
	 * Adapt a legacy inputValidator for use with expectRejections=false
	 */
	sweetAlert.adaptInputValidator = (legacyValidator) => {
	  return function adaptedInputValidator (inputValue, extraParams) {
	    return legacyValidator.call(this, inputValue, extraParams)
	      .then(() => undefined, validationError => validationError)
	  }
	};
	
	sweetAlert.noop = () => { };
	
	sweetAlert.version = '';
	
	sweetAlert.default = sweetAlert;
	
	/**
	 * Set default params if `window._swalDefaults` is an object
	 */
	if (typeof window !== 'undefined' && typeof window._swalDefaults === 'object') {
	  sweetAlert.setDefaults(window._swalDefaults);
	}
	
	var css = "button.microfeedback-button {\n  cursor: pointer;\n  text-decoration: none;\n  position: fixed;\n  bottom: 0;\n  right: 3.125em;\n  padding: 4px 7px;\n  font-size: 0.875em;\n  border-radius: 5px 5px 0 0;\n  z-index: 1001;\n  transition: all 0.2s ease-in-out;\n\n  /* Button reset */\n  border: none;\n  margin: 0;\n  width: auto;\n  overflow: visible;\n  background: transparent;\n  color: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n}\n\nbutton.microfeedback-button:hover,\nbutton.microfeedback-button--clicked {\n  /* Darken background color a bit */\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNikAQAACIAHF/uBd8AAAAASUVORK5CYII=\");\n  padding-bottom: 10px;\n}\n";
	__$$styleInject(css);
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	
	
	
	
	
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	var defaults$1 = {
	  method: 'POST',
	  url: null,
	  payload: null
	};
	
	var sendJSON = (function (options) {
	  var opts = _extends({}, defaults$1, options);
	  return new Promise(function (resolve, reject) {
	    var req = new XMLHttpRequest();
	    req.open(opts.method, opts.url, true);
	    req.setRequestHeader('Content-Type', 'application/json');
	    req.setRequestHeader('Accept', 'application/json');
	    req.send(JSON.stringify(opts.payload));
	    req.onload = function () {
	      if (req.status < 400) {
	        var data = JSON.parse(req.response);
	        resolve(data);
	      } else {
	        reject(new Error(req.statusText));
	      }
	    };
	    req.onerror = function () {
	      reject(new Error('Network Error'));
	    };
	  });
	});
	
	// Less typing
	var d = document;
	var noop = function noop() {};
	var clickedClass = 'microfeedback-button--clicked';
	
	var makeButton = function makeButton(options) {
	  return '<button aria-label="' + options.buttonAriaLabel + '" style="background-color: ' + options.backgroundColor + '; color: ' + options.color + '" class="microfeedback-button">' + options.buttonText + '</button>';
	};
	var defaults$2 = {
	  url: null,
	  buttonText: 'Feedback',
	  buttonAriaLabel: 'Send feedback',
	  title: 'Send feedback',
	  placeholder: 'Describe your issue or share your ideas',
	  extra: null,
	  backgroundColor: '#3085d6',
	  color: '#fff',
	  optimistic: true,
	  showDialog: function showDialog(btn) {
	    var swalOpts = {
	      title: btn.options.title,
	      input: 'textarea',
	      inputPlaceholder: btn.options.placeholder,
	      showCancelButton: true,
	      confirmButtonText: 'Send'
	    };
	    if (!btn.options.optimistic) {
	      swalOpts.showLoaderOnConfirm = true;
	      swalOpts.preConfirm = function (value) {
	        return btn.onSubmit({ value: value });
	      };
	      swalOpts.allowOutsideClick = function () {
	        return !sweetAlert.isLoading();
	      };
	    }
	    // Allow passing any valid sweetalert2 options
	    Object.keys(btn.options).forEach(function (each) {
	      if (sweetAlert.isValidParameter(each)) {
	        swalOpts[each] = btn.options[each];
	      }
	    });
	    return btn.alert(swalOpts);
	  },
	  showSuccessDialog: function showSuccessDialog(btn) {
	    return btn.alert('Thank you!', 'Your feedback has been submitted.', 'success');
	  },
	  getPayload: function getPayload(btn, _ref) {
	    var body = _ref.value;
	
	    var payload = { body: body };
	    if (btn.options.extra) {
	      payload.extra = btn.options.extra;
	    }
	    return payload;
	  },
	  preSend: function preSend(btn, input) {
	    if (btn.options.optimistic) {
	      // Show thank you message before request is sent so the
	      // user doesn't have to wait
	      return btn.options.showSuccessDialog(btn, input);
	    }
	  },
	  sendRequest: function sendRequest(btn, url, payload) {
	    return sendJSON({
	      url: url,
	      method: 'POST',
	      payload: payload
	    });
	  },
	  onSuccess: function onSuccess(btn, input, response) {
	    if (!btn.options.optimistic) {
	      return btn.options.showSuccessDialog(btn, input, response);
	    }
	  },
	  onFailure: noop
	};
	
	var MicroFeedbackButton = function () {
	  function MicroFeedbackButton(element, options) {
	    classCallCheck(this, MicroFeedbackButton);
	
	    var opts = element instanceof HTMLElement ? options : element;
	    this.options = _extends({}, defaults$2, opts);
	    if (!this.options.url) {
	      console.warn('options.url not provided. Feedback will only be logged to the console.');
	    }
	
	    this.appended = false;
	    this._parent = null;
	    if (element instanceof HTMLElement) {
	      this.el = element;
	    } else {
	      // assume element is an object
	      var buttonParent = d.createElement('div');
	      buttonParent.innerHTML = makeButton(this.options);
	      d.body.appendChild(buttonParent);
	      this._parent = buttonParent;
	      this.appended = true;
	      this.el = buttonParent.querySelector('.microfeedback-button');
	    }
	    this.el.addEventListener('click', this.onClick.bind(this), false);
	  }
	
	  createClass(MicroFeedbackButton, [{
	    key: 'alert',
	    value: function alert() {
	      return sweetAlert.apply(undefined, arguments);
	    }
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit(input) {
	      // Backend requires body in payload
	      if (input.dismiss) {
	        return null;
	      }
	      var payload = this.options.getPayload(this, input);
	      // microfeedback backends requires 'body'
	      if (payload.body) {
	        this.options.preSend(this, input);
	        var promise = void 0;
	        var url = typeof this.options.url === 'function' ? this.options.url(this, input) : this.options.url;
	        if (url) {
	          promise = this.options.sendRequest(this, url, payload, input);
	        } else {
	          console.debug('microfeedback payload:');
	          console.debug(payload);
	          promise = Promise.resolve(payload);
	        }
	        return promise.then(this.options.onSuccess.bind(this, this, input), this.options.onFailure.bind(this, this, input));
	      }
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      var _this = this;
	
	      // eslint-disable-next-line no-unused-expressions
	      e && e.preventDefault();
	      this.el.classList.add(clickedClass);
	      var promise = this.options.showDialog(this).then(function (input) {
	        _this.el.classList.remove(clickedClass);
	        return input;
	      });
	      if (this.options.optimistic) {
	        promise.then(this.onSubmit.bind(this));
	      }
	      return promise;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.el.removeEventListener('click', this.onClick.bind(this));
	      if (this.appended) {
	        d.body.removeChild(this._parent);
	      }
	    }
	  }]);
	  return MicroFeedbackButton;
	}();
	
	var factory = function factory(element, options) {
	  return new MicroFeedbackButton(element, options);
	};
	factory.MicroFeedbackButton = MicroFeedbackButton;
	
	var css$2 = "body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast {\n  flex-direction: column;\n  align-items: stretch; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-actions {\n    flex: 1;\n    align-self: stretch;\n    justify-content: flex-end;\n    height: 2.2em; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-loading {\n    justify-content: center; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-input {\n    height: 2em;\n    font-size: 1em;\n    margin: .3125em auto; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-validationerror {\n    font-size: 1em; }\n\nbody.swal2-toast-shown > .swal2-container {\n  position: fixed;\n  background-color: transparent; }\n  body.swal2-toast-shown > .swal2-container.swal2-shown {\n    background-color: transparent; }\n  body.swal2-toast-shown > .swal2-container.swal2-top {\n    top: 0;\n    left: 50%;\n    bottom: auto;\n    right: auto;\n    transform: translateX(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-top-end, body.swal2-toast-shown > .swal2-container.swal2-top-right {\n    top: 0;\n    left: auto;\n    bottom: auto;\n    right: 0; }\n  body.swal2-toast-shown > .swal2-container.swal2-top-start, body.swal2-toast-shown > .swal2-container.swal2-top-left {\n    top: 0;\n    left: 0;\n    bottom: auto;\n    right: auto; }\n  body.swal2-toast-shown > .swal2-container.swal2-center-start, body.swal2-toast-shown > .swal2-container.swal2-center-left {\n    top: 50%;\n    left: 0;\n    bottom: auto;\n    right: auto;\n    transform: translateY(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-center {\n    top: 50%;\n    left: 50%;\n    bottom: auto;\n    right: auto;\n    transform: translate(-50%, -50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-center-end, body.swal2-toast-shown > .swal2-container.swal2-center-right {\n    top: 50%;\n    left: auto;\n    bottom: auto;\n    right: 0;\n    transform: translateY(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom-start, body.swal2-toast-shown > .swal2-container.swal2-bottom-left {\n    top: auto;\n    left: 0;\n    bottom: 0;\n    right: auto; }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom {\n    top: auto;\n    left: 50%;\n    bottom: 0;\n    right: auto;\n    transform: translateX(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom-end, body.swal2-toast-shown > .swal2-container.swal2-bottom-right {\n    top: auto;\n    left: auto;\n    bottom: 0;\n    right: 0; }\n\n.swal2-popup.swal2-toast {\n  width: auto;\n  padding: 0.625em;\n  flex-direction: row;\n  align-items: center;\n  overflow-y: hidden;\n  box-shadow: 0 0 10px #d9d9d9; }\n  .swal2-popup.swal2-toast .swal2-header {\n    flex-direction: row; }\n  .swal2-popup.swal2-toast .swal2-title {\n    font-size: 1em;\n    justify-content: flex-start;\n    margin: 0 .6em; }\n  .swal2-popup.swal2-toast .swal2-close {\n    position: initial; }\n  .swal2-popup.swal2-toast .swal2-content {\n    font-size: 0.875em;\n    justify-content: flex-start; }\n  .swal2-popup.swal2-toast .swal2-icon {\n    width: 32px;\n    min-width: 32px;\n    height: 32px;\n    margin: 0; }\n    .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n      width: 32px;\n      height: 32px; }\n    .swal2-popup.swal2-toast .swal2-icon.swal2-info, .swal2-popup.swal2-toast .swal2-icon.swal2-warning, .swal2-popup.swal2-toast .swal2-icon.swal2-question {\n      font-size: 26px;\n      line-height: 32px; }\n    .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      top: 14px;\n      width: 22px; }\n      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        left: 5px; }\n      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        right: 5px; }\n  .swal2-popup.swal2-toast .swal2-actions {\n    margin: 0 .3125em;\n    height: auto; }\n  .swal2-popup.swal2-toast .swal2-styled {\n    margin: 0 .3125em;\n    padding: .3125em .625em;\n    font-size: 1em; }\n    .swal2-popup.swal2-toast .swal2-styled:focus {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 2px rgba(50, 100, 150, 0.4); }\n  .swal2-popup.swal2-toast .swal2-success {\n    border-color: #a5dc86; }\n    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n      border-radius: 50%;\n      position: absolute;\n      width: 32px;\n      height: 45px;\n      transform: rotate(45deg); }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        border-radius: 64px 0 0 64px;\n        top: -4px;\n        left: -15px;\n        transform: rotate(-45deg);\n        transform-origin: 32px 32px; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        border-radius: 0 64px 64px 0;\n        top: -5px;\n        left: 14px;\n        transform-origin: 0 32px; }\n    .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n      width: 32px;\n      height: 32px; }\n    .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n      width: 7px;\n      height: 43px;\n      left: 7px;\n      top: 0; }\n    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n      height: 5px; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n        width: 12px;\n        left: 3px;\n        top: 18px; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n        width: 22px;\n        right: 3px;\n        top: 15px; }\n  .swal2-popup.swal2-toast.swal2-show {\n    animation: showSweetToast .5s; }\n  .swal2-popup.swal2-toast.swal2-hide {\n    animation: hideSweetToast .2s forwards; }\n  .swal2-popup.swal2-toast .swal2-animate-success-line-tip {\n    animation: animate-toast-success-tip .75s; }\n  .swal2-popup.swal2-toast .swal2-animate-success-line-long {\n    animation: animate-toast-success-long .75s; }\n\n@keyframes showSweetToast {\n  0% {\n    transform: translateY(-10px) rotateZ(2deg);\n    opacity: 0; }\n  33% {\n    transform: translateY(0) rotateZ(-2deg);\n    opacity: .5; }\n  66% {\n    transform: translateY(5px) rotateZ(2deg);\n    opacity: .7; }\n  100% {\n    transform: translateY(0) rotateZ(0);\n    opacity: 1; } }\n\n@keyframes hideSweetToast {\n  0% {\n    opacity: 1; }\n  33% {\n    opacity: .5; }\n  100% {\n    transform: rotateZ(1deg);\n    opacity: 0; } }\n\n@keyframes animate-toast-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 9px; }\n  54% {\n    width: 0;\n    left: 2px;\n    top: 2px; }\n  70% {\n    width: 26px;\n    left: -4px;\n    top: 10px; }\n  84% {\n    width: 8px;\n    left: 12px;\n    top: 17px; }\n  100% {\n    width: 12px;\n    left: 3px;\n    top: 18px; } }\n\n@keyframes animate-toast-success-long {\n  0% {\n    width: 0;\n    right: 22px;\n    top: 26px; }\n  65% {\n    width: 0;\n    right: 15px;\n    top: 20px; }\n  84% {\n    width: 18px;\n    right: 0;\n    top: 15px; }\n  100% {\n    width: 22px;\n    right: 3px;\n    top: 15px; } }\n\nhtml.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown),\nbody.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n  overflow-y: hidden;\n  height: auto; }\n\nbody.swal2-iosfix {\n  position: fixed;\n  left: 0;\n  right: 0; }\n\nbody.swal2-no-backdrop .swal2-shown {\n  top: auto;\n  bottom: auto;\n  left: auto;\n  right: auto;\n  background-color: transparent; }\n  body.swal2-no-backdrop .swal2-shown > .swal2-modal {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n  body.swal2-no-backdrop .swal2-shown.swal2-top {\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-top-start, body.swal2-no-backdrop .swal2-shown.swal2-top-left {\n    top: 0;\n    left: 0; }\n  body.swal2-no-backdrop .swal2-shown.swal2-top-end, body.swal2-no-backdrop .swal2-shown.swal2-top-right {\n    top: 0;\n    right: 0; }\n  body.swal2-no-backdrop .swal2-shown.swal2-center {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-center-start, body.swal2-no-backdrop .swal2-shown.swal2-center-left {\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-center-end, body.swal2-no-backdrop .swal2-shown.swal2-center-right {\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-bottom {\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-bottom-start, body.swal2-no-backdrop .swal2-shown.swal2-bottom-left {\n    bottom: 0;\n    left: 0; }\n  body.swal2-no-backdrop .swal2-shown.swal2-bottom-end, body.swal2-no-backdrop .swal2-shown.swal2-bottom-right {\n    bottom: 0;\n    right: 0; }\n\n.swal2-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  padding: 10px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: transparent;\n  z-index: 1060; }\n  .swal2-container.swal2-top {\n    align-items: flex-start; }\n  .swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n    align-items: flex-start;\n    justify-content: flex-start; }\n  .swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n    align-items: flex-start;\n    justify-content: flex-end; }\n  .swal2-container.swal2-center {\n    align-items: center; }\n  .swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n    align-items: center;\n    justify-content: flex-start; }\n  .swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n    align-items: center;\n    justify-content: flex-end; }\n  .swal2-container.swal2-bottom {\n    align-items: flex-end; }\n  .swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n    align-items: flex-end;\n    justify-content: flex-start; }\n  .swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n    align-items: flex-end;\n    justify-content: flex-end; }\n  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n    display: flex !important;\n    flex: 1;\n    align-self: stretch;\n    justify-content: center; }\n  .swal2-container.swal2-grow-row > .swal2-modal {\n    display: flex !important;\n    flex: 1;\n    align-content: center;\n    justify-content: center; }\n  .swal2-container.swal2-grow-column {\n    flex: 1;\n    flex-direction: column; }\n    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n      align-items: center; }\n    .swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n      align-items: flex-start; }\n    .swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n      align-items: flex-end; }\n    .swal2-container.swal2-grow-column > .swal2-modal {\n      display: flex !important;\n      flex: 1;\n      align-content: center;\n      justify-content: center; }\n  .swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right) > .swal2-modal {\n    margin: auto; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .swal2-container .swal2-modal {\n      margin: 0 !important; } }\n  .swal2-container.swal2-fade {\n    transition: background-color .1s; }\n  .swal2-container.swal2-shown {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.swal2-popup {\n  flex-direction: column;\n  background-color: #fff;\n  font-family: inherit;\n  font-size: 1rem;\n  padding: 1.25em;\n  border-radius: .3125em;\n  box-sizing: border-box;\n  justify-content: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: none;\n  position: relative;\n  width: 32em;\n  max-width: 100%; }\n  .swal2-popup:focus {\n    outline: none; }\n  .swal2-popup.swal2-loading {\n    overflow-y: hidden; }\n  .swal2-popup .swal2-header {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .swal2-popup .swal2-title {\n    color: #595959;\n    font-size: 1.875em;\n    text-align: center;\n    font-weight: 600;\n    text-transform: none;\n    position: relative;\n    margin: 0 0 .4em;\n    padding: 0;\n    display: block;\n    word-wrap: break-word; }\n  .swal2-popup .swal2-actions {\n    margin-top: 1.25em;\n    align-items: center;\n    justify-content: center; }\n    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n      opacity: .4;\n      cursor: no-drop; }\n    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNikAQAACIAHF/uBd8AAAAASUVORK5CYII=\"); }\n    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active {\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNiMAYAADwANpiOMBYAAAAASUVORK5CYII=\"); }\n    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n      box-sizing: border-box;\n      border: .25em solid transparent;\n      border-color: transparent;\n      width: 2.5em;\n      height: 2.5em;\n      padding: 0;\n      margin: .46875em;\n      background-color: transparent !important;\n      color: transparent;\n      cursor: default;\n      border-radius: 100%;\n      animation: rotate-loading 1.5s linear 0s infinite normal;\n      -ms-user-select: none;\n          user-select: none; }\n    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n      margin-left: 30px;\n      margin-right: 30px; }\n    .swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n      display: inline-block;\n      content: '';\n      margin-left: 5px;\n      height: 15px;\n      width: 15px;\n      border: 3px solid #999999;\n      box-shadow: 1px 1px 1px #fff;\n      border-right-color: transparent;\n      border-radius: 50%;\n      animation: rotate-loading 1.5s linear 0s infinite normal; }\n  .swal2-popup .swal2-styled {\n    border: 0;\n    border-radius: .25em;\n    box-shadow: none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 1.0625em;\n    font-weight: 500;\n    margin: 0 .3125em;\n    padding: .625em 2em; }\n    .swal2-popup .swal2-styled.swal2-confirm {\n      background-color: #3085d6; }\n    .swal2-popup .swal2-styled.swal2-cancel {\n      background-color: #aaa; }\n    .swal2-popup .swal2-styled:focus {\n      outline: none;\n      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n    .swal2-popup .swal2-styled::-moz-focus-inner {\n      border: 0; }\n  .swal2-popup .swal2-image {\n    margin: 1.25em auto;\n    max-width: 100%; }\n  .swal2-popup .swal2-close {\n    background: transparent;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    width: 1.2em;\n    min-width: 1.2em;\n    height: 1.2em;\n    font-size: calc(2.5em - 0.25em);\n    line-height: 1.2em;\n    justify-content: center;\n    font-family: serif;\n    position: absolute;\n    top: 5px;\n    right: 8px;\n    cursor: pointer;\n    color: #cccccc;\n    transition: color .1s ease; }\n    .swal2-popup .swal2-close:hover {\n      color: #d55; }\n  .swal2-popup > .swal2-input,\n  .swal2-popup > .swal2-file,\n  .swal2-popup > .swal2-textarea,\n  .swal2-popup > .swal2-select,\n  .swal2-popup > .swal2-radio,\n  .swal2-popup > .swal2-checkbox {\n    display: none; }\n  .swal2-popup .swal2-content {\n    font-size: 1.125em;\n    justify-content: center;\n    font-weight: 300;\n    margin: 0;\n    padding: 0;\n    line-height: normal;\n    color: #545454;\n    word-wrap: break-word; }\n  .swal2-popup #swal2-content {\n    text-align: center; }\n  .swal2-popup .swal2-input,\n  .swal2-popup .swal2-file,\n  .swal2-popup .swal2-textarea,\n  .swal2-popup .swal2-select,\n  .swal2-popup .swal2-radio,\n  .swal2-popup .swal2-checkbox {\n    margin: 1em auto; }\n  .swal2-popup .swal2-input,\n  .swal2-popup .swal2-file,\n  .swal2-popup .swal2-textarea {\n    width: 100%;\n    box-sizing: border-box;\n    font-size: 1.125em;\n    border-radius: 3px;\n    border: 1px solid #d9d9d9;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n    transition: border-color .3s, box-shadow .3s; }\n    .swal2-popup .swal2-input.swal2-inputerror,\n    .swal2-popup .swal2-file.swal2-inputerror,\n    .swal2-popup .swal2-textarea.swal2-inputerror {\n      border-color: #f27474 !important;\n      box-shadow: 0 0 2px #f27474 !important; }\n    .swal2-popup .swal2-input:focus,\n    .swal2-popup .swal2-file:focus,\n    .swal2-popup .swal2-textarea:focus {\n      outline: none;\n      border: 1px solid #b4dbed;\n      box-shadow: 0 0 3px #c4e6f5; }\n    .swal2-popup .swal2-input:-ms-input-placeholder,\n    .swal2-popup .swal2-file:-ms-input-placeholder,\n    .swal2-popup .swal2-textarea:-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input::placeholder,\n    .swal2-popup .swal2-file::placeholder,\n    .swal2-popup .swal2-textarea::placeholder {\n      color: #cccccc; }\n  .swal2-popup .swal2-range input {\n    width: 80%; }\n  .swal2-popup .swal2-range output {\n    width: 20%;\n    font-weight: 600;\n    text-align: center; }\n  .swal2-popup .swal2-range input,\n  .swal2-popup .swal2-range output {\n    font-size: 1.125em;\n    height: 2.625em;\n    line-height: 2.625em;\n    margin: 1em auto;\n    padding: 0; }\n  .swal2-popup .swal2-input {\n    height: 2.625em;\n    padding: 0 .75em; }\n    .swal2-popup .swal2-input[type='number'] {\n      max-width: 10em; }\n  .swal2-popup .swal2-file {\n    font-size: 1.125em; }\n  .swal2-popup .swal2-textarea {\n    height: 6.75em;\n    padding: .75em; }\n  .swal2-popup .swal2-select {\n    color: #545454;\n    font-size: 1.125em;\n    padding: .375em .625em;\n    min-width: 50%;\n    max-width: 100%; }\n  .swal2-popup .swal2-radio,\n  .swal2-popup .swal2-checkbox {\n    justify-content: center;\n    align-items: center; }\n    .swal2-popup .swal2-radio label,\n    .swal2-popup .swal2-checkbox label {\n      font-size: 1.125em;\n      margin: 0 .6em; }\n    .swal2-popup .swal2-radio input,\n    .swal2-popup .swal2-checkbox input {\n      margin: 0 .4em; }\n  .swal2-popup .swal2-validationerror {\n    align-items: center;\n    justify-content: center;\n    background-color: #f0f0f0;\n    overflow: hidden;\n    padding: .625em;\n    color: gray;\n    font-size: 1em;\n    font-weight: 300;\n    display: none; }\n    .swal2-popup .swal2-validationerror::before {\n      content: '!';\n      display: inline-block;\n      width: 1.5em;\n      height: 1.5em;\n      border-radius: 50%;\n      background-color: #ea7d7d;\n      color: #fff;\n      line-height: 1.5em;\n      font-weight: 600;\n      text-align: center;\n      margin: 0 .625em; }\n\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n.swal2-icon {\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  margin: 1.25em auto 1.875em;\n  justify-content: center;\n  position: relative;\n  box-sizing: content-box;\n  cursor: default;\n  -ms-user-select: none;\n      user-select: none; }\n  .swal2-icon.swal2-error {\n    border-color: #f27474; }\n    .swal2-icon.swal2-error .swal2-x-mark {\n      position: relative;\n      flex-grow: 1; }\n    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      position: absolute;\n      height: 5px;\n      width: 47px;\n      background-color: #f27474;\n      display: block;\n      top: 37px;\n      border-radius: 2px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        transform: rotate(45deg);\n        left: 17px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        transform: rotate(-45deg);\n        right: 16px; }\n  .swal2-icon.swal2-warning, .swal2-icon.swal2-info, .swal2-icon.swal2-question {\n    font-family: inherit;\n    font-size: 3.75em;\n    margin: .333333em auto .5em; }\n  .swal2-icon.swal2-warning {\n    color: #f8bb86;\n    border-color: #facea8; }\n  .swal2-icon.swal2-info {\n    color: #3fc3ee;\n    border-color: #9de0f6; }\n  .swal2-icon.swal2-question {\n    color: #87adbd;\n    border-color: #c9dae1; }\n  .swal2-icon.swal2-success {\n    border-color: #a5dc86; }\n    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n      border-radius: 50%;\n      position: absolute;\n      width: 60px;\n      height: 120px;\n      transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        border-radius: 120px 0 0 120px;\n        top: -7px;\n        left: -33px;\n        transform: rotate(-45deg);\n        transform-origin: 60px 60px; }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        border-radius: 0 120px 120px 0;\n        top: -11px;\n        left: 30px;\n        transform: rotate(-45deg);\n        transform-origin: 0 60px; }\n    .swal2-icon.swal2-success .swal2-success-ring {\n      width: 80px;\n      height: 80px;\n      border: 4px solid rgba(165, 220, 134, 0.2);\n      border-radius: 50%;\n      box-sizing: content-box;\n      position: absolute;\n      left: -4px;\n      top: -4px;\n      z-index: 2; }\n    .swal2-icon.swal2-success .swal2-success-fix {\n      width: 7px;\n      height: 90px;\n      position: absolute;\n      left: 26px;\n      top: 8px;\n      z-index: 1;\n      transform: rotate(-45deg); }\n    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n      height: 5px;\n      background-color: #a5dc86;\n      display: block;\n      border-radius: 2px;\n      position: absolute;\n      z-index: 2; }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n        width: 25px;\n        left: 14px;\n        top: 46px;\n        transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n        width: 47px;\n        right: 8px;\n        top: 38px;\n        transform: rotate(-45deg); }\n\n.swal2-progresssteps {\n  font-weight: 600;\n  padding: 0;\n  margin: 0 0 1.25em;\n  align-items: center; }\n  .swal2-progresssteps li {\n    display: inline-block;\n    position: relative; }\n  .swal2-progresssteps .swal2-progresscircle {\n    background: #3085d6;\n    border-radius: 2em;\n    color: #fff;\n    height: 2em;\n    line-height: 2em;\n    text-align: center;\n    width: 2em;\n    z-index: 20; }\n    .swal2-progresssteps .swal2-progresscircle:first-child {\n      margin-left: 0; }\n    .swal2-progresssteps .swal2-progresscircle:last-child {\n      margin-right: 0; }\n    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n      background: #3085d6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n        background: #add8e6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n        background: #add8e6; }\n  .swal2-progresssteps .swal2-progressline {\n    background: #3085d6;\n    height: .4em;\n    width: 2.5em;\n    margin: 0 -1px;\n    z-index: 10; }\n\n[class^='swal2'] {\n  -webkit-tap-highlight-color: transparent; }\n\n@keyframes showSweetAlert {\n  0% {\n    transform: scale(0.7); }\n  45% {\n    transform: scale(1.05); }\n  80% {\n    transform: scale(0.95); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes hideSweetAlert {\n  0% {\n    transform: scale(1);\n    opacity: 1; }\n  100% {\n    transform: scale(0.5);\n    opacity: 0; } }\n\n.swal2-show {\n  animation: showSweetAlert .3s; }\n  .swal2-show.swal2-noanimation {\n    animation: none; }\n\n.swal2-hide {\n  animation: hideSweetAlert .15s forwards; }\n  .swal2-hide.swal2-noanimation {\n    animation: none; }\n\n[dir='rtl'] .swal2-close {\n  left: 8px;\n  right: auto; }\n\n@keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 2px;\n    top: 17px; }\n  70% {\n    width: 50px;\n    left: -6px;\n    top: 35px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@keyframes rotatePlaceholder {\n  0% {\n    transform: rotate(-45deg); }\n  5% {\n    transform: rotate(-45deg); }\n  12% {\n    transform: rotate(-405deg); }\n  100% {\n    transform: rotate(-405deg); } }\n\n.swal2-animate-success-line-tip {\n  animation: animate-success-tip .75s; }\n\n.swal2-animate-success-line-long {\n  animation: animate-success-long .75s; }\n\n.swal2-success.swal2-animate-success-icon .swal2-success-circular-line-right {\n  animation: rotatePlaceholder 4.25s ease-in; }\n\n@keyframes animate-error-icon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1; } }\n\n.swal2-animate-error-icon {\n  animation: animate-error-icon .5s; }\n\n@keyframes animate-x-mark {\n  0% {\n    transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n.swal2-animate-x-mark {\n  animation: animate-x-mark .5s; }\n\n@keyframes rotate-loading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n";
	__$$styleInject(css$2);
	
	/*
	 * Entry point for UMD builds that bundles
	 * sweetalert2's CSS.
	 */
	
	return factory;
	
	})));


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.Helmet = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSideEffect = __webpack_require__(43);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _deepEqual = __webpack_require__(33);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _HelmetUtils = __webpack_require__(42);
	
	var _HelmetConstants = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Helmet = function Helmet(Component) {
	    var _class, _temp;
	
	    return _temp = _class = function (_React$Component) {
	        _inherits(HelmetWrapper, _React$Component);
	
	        function HelmetWrapper() {
	            _classCallCheck(this, HelmetWrapper);
	
	            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	        }
	
	        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	            return !(0, _deepEqual2.default)(this.props, nextProps);
	        };
	
	        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
	            if (!nestedChildren) {
	                return null;
	            }
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.SCRIPT:
	                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    return {
	                        innerHTML: nestedChildren
	                    };
	
	                case _HelmetConstants.TAG_NAMES.STYLE:
	                    return {
	                        cssText: nestedChildren
	                    };
	            }
	
	            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
	        };
	
	        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
	            var _extends2;
	
	            var child = _ref.child,
	                arrayTypeChildren = _ref.arrayTypeChildren,
	                newChildProps = _ref.newChildProps,
	                nestedChildren = _ref.nestedChildren;
	
	            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
	        };
	
	        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
	            var _extends3, _extends4;
	
	            var child = _ref2.child,
	                newProps = _ref2.newProps,
	                newChildProps = _ref2.newChildProps,
	                nestedChildren = _ref2.nestedChildren;
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.TITLE:
	                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));
	
	                case _HelmetConstants.TAG_NAMES.BODY:
	                    return _extends({}, newProps, {
	                        bodyAttributes: _extends({}, newChildProps)
	                    });
	
	                case _HelmetConstants.TAG_NAMES.HTML:
	                    return _extends({}, newProps, {
	                        htmlAttributes: _extends({}, newChildProps)
	                    });
	            }
	
	            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
	        };
	
	        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
	            var newFlattenedProps = _extends({}, newProps);
	
	            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
	                var _extends5;
	
	                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
	            });
	
	            return newFlattenedProps;
	        };
	
	        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
	            if (false) {
	                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
	                    return child.type === name;
	                })) {
	                    if (typeof child.type === "function") {
	                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
	                    }
	
	                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
	                }
	
	                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
	                    return typeof nestedChild !== "string";
	                }))) {
	                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
	                }
	            }
	
	            return true;
	        };
	
	        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
	            var _this2 = this;
	
	            var arrayTypeChildren = {};
	
	            _react2.default.Children.forEach(children, function (child) {
	                if (!child || !child.props) {
	                    return;
	                }
	
	                var _child$props = child.props,
	                    nestedChildren = _child$props.children,
	                    childProps = _objectWithoutProperties(_child$props, ["children"]);
	
	                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);
	
	                _this2.warnOnInvalidChildren(child, nestedChildren);
	
	                switch (child.type) {
	                    case _HelmetConstants.TAG_NAMES.LINK:
	                    case _HelmetConstants.TAG_NAMES.META:
	                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    case _HelmetConstants.TAG_NAMES.SCRIPT:
	                    case _HelmetConstants.TAG_NAMES.STYLE:
	                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
	                            child: child,
	                            arrayTypeChildren: arrayTypeChildren,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	
	                    default:
	                        newProps = _this2.mapObjectTypeChildren({
	                            child: child,
	                            newProps: newProps,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	                }
	            });
	
	            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
	            return newProps;
	        };
	
	        HelmetWrapper.prototype.render = function render() {
	            var _props = this.props,
	                children = _props.children,
	                props = _objectWithoutProperties(_props, ["children"]);
	
	            var newProps = _extends({}, props);
	
	            if (children) {
	                newProps = this.mapChildrenToProps(children, newProps);
	            }
	
	            return _react2.default.createElement(Component, newProps);
	        };
	
	        _createClass(HelmetWrapper, null, [{
	            key: "canUseDOM",
	
	
	            // Component.peek comes from react-side-effect:
	            // For testing, you may use a static peek() method available on the returned component.
	            // It lets you get the current state without resetting the mounted instance stack.
	            // Don’t use it for anything other than testing.
	
	            /**
	            * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
	            * @param {Object} bodyAttributes: {"className": "root"}
	            * @param {String} defaultTitle: "Default Title"
	            * @param {Boolean} defer: true
	            * @param {Boolean} encodeSpecialCharacters: true
	            * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
	            * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
	            * @param {Array} meta: [{"name": "description", "content": "Test description"}]
	            * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
	            * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
	            * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
	            * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
	            * @param {String} title: "Title"
	            * @param {Object} titleAttributes: {"itemprop": "name"}
	            * @param {String} titleTemplate: "MySite.com - %s"
	            */
	            set: function set(canUseDOM) {
	                Component.canUseDOM = canUseDOM;
	            }
	        }]);
	
	        return HelmetWrapper;
	    }(_react2.default.Component), _class.propTypes = {
	        base: _propTypes2.default.object,
	        bodyAttributes: _propTypes2.default.object,
	        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
	        defaultTitle: _propTypes2.default.string,
	        defer: _propTypes2.default.bool,
	        encodeSpecialCharacters: _propTypes2.default.bool,
	        htmlAttributes: _propTypes2.default.object,
	        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        onChangeClientState: _propTypes2.default.func,
	        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        title: _propTypes2.default.string,
	        titleAttributes: _propTypes2.default.object,
	        titleTemplate: _propTypes2.default.string
	    }, _class.defaultProps = {
	        defer: true,
	        encodeSpecialCharacters: true
	    }, _class.peek = Component.peek, _class.rewind = function () {
	        var mappedState = Component.rewind();
	        if (!mappedState) {
	            // provide fallback if mappedState is undefined
	            mappedState = (0, _HelmetUtils.mapStateOnServer)({
	                baseTag: [],
	                bodyAttributes: {},
	                encodeSpecialCharacters: true,
	                htmlAttributes: {},
	                linkTags: [],
	                metaTags: [],
	                noscriptTags: [],
	                scriptTags: [],
	                styleTags: [],
	                title: "",
	                titleAttributes: {}
	            });
	        }
	
	        return mappedState;
	    }, _temp;
	};
	
	var NullComponent = function NullComponent() {
	    return null;
	};
	
	var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
	
	var HelmetExport = Helmet(HelmetSideEffects);
	HelmetExport.renderStatic = HelmetExport.rewind;
	
	exports.Helmet = HelmetExport;
	exports.default = HelmetExport;

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

	exports.__esModule = true;
	var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
	    BODY: "bodyAttributes",
	    HTML: "htmlAttributes",
	    TITLE: "titleAttributes"
	};
	
	var TAG_NAMES = exports.TAG_NAMES = {
	    BASE: "base",
	    BODY: "body",
	    HEAD: "head",
	    HTML: "html",
	    LINK: "link",
	    META: "meta",
	    NOSCRIPT: "noscript",
	    SCRIPT: "script",
	    STYLE: "style",
	    TITLE: "title"
	};
	
	var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
	    return TAG_NAMES[name];
	});
	
	var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
	    CHARSET: "charset",
	    CSS_TEXT: "cssText",
	    HREF: "href",
	    HTTPEQUIV: "http-equiv",
	    INNER_HTML: "innerHTML",
	    ITEM_PROP: "itemprop",
	    NAME: "name",
	    PROPERTY: "property",
	    REL: "rel",
	    SRC: "src"
	};
	
	var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
	    accesskey: "accessKey",
	    charset: "charSet",
	    class: "className",
	    contenteditable: "contentEditable",
	    contextmenu: "contextMenu",
	    "http-equiv": "httpEquiv",
	    itemprop: "itemProp",
	    tabindex: "tabIndex"
	};
	
	var HELMET_PROPS = exports.HELMET_PROPS = {
	    DEFAULT_TITLE: "defaultTitle",
	    DEFER: "defer",
	    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
	    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
	    TITLE_TEMPLATE: "titleTemplate"
	};
	
	var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
	    obj[REACT_TAG_MAP[key]] = key;
	    return obj;
	}, {});
	
	var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
	
	var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
	exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(11);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _HelmetConstants = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
	    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (encode === false) {
	        return String(str);
	    }
	
	    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};
	
	var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
	    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
	    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);
	
	    if (innermostTemplate && innermostTitle) {
	        // use function arg to avoid need to escape $ characters
	        return innermostTemplate.replace(/%s/g, function () {
	            return innermostTitle;
	        });
	    }
	
	    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
	
	    return innermostTitle || innermostDefaultTitle || undefined;
	};
	
	var getOnChangeClientState = function getOnChangeClientState(propsList) {
	    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
	};
	
	var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[tagType] !== "undefined";
	    }).map(function (props) {
	        return props[tagType];
	    }).reduce(function (tagAttrs, current) {
	        return _extends({}, tagAttrs, current);
	    }, {});
	};
	
	var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstants.TAG_NAMES.BASE];
	    }).reverse().reduce(function (innermostBaseTag, tag) {
	        if (!innermostBaseTag.length) {
	            var keys = Object.keys(tag);
	
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
	                    return innermostBaseTag.concat(tag);
	                }
	            }
	        }
	
	        return innermostBaseTag;
	    }, []);
	};
	
	var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
	    // Calculate list of tags, giving priority innermost component (end of the propslist)
	    var approvedSeenTags = {};
	
	    return propsList.filter(function (props) {
	        if (Array.isArray(props[tagName])) {
	            return true;
	        }
	        if (typeof props[tagName] !== "undefined") {
	            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
	        }
	        return false;
	    }).map(function (props) {
	        return props[tagName];
	    }).reverse().reduce(function (approvedTags, instanceTags) {
	        var instanceSeenTags = {};
	
	        instanceTags.filter(function (tag) {
	            var primaryAttributeKey = void 0;
	            var keys = Object.keys(tag);
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
	                    primaryAttributeKey = lowerCaseAttributeKey;
	                }
	                // Special case for innerHTML which doesn't work lowercased
	                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
	                    primaryAttributeKey = attributeKey;
	                }
	            }
	
	            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
	                return false;
	            }
	
	            var value = tag[primaryAttributeKey].toLowerCase();
	
	            if (!approvedSeenTags[primaryAttributeKey]) {
	                approvedSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!instanceSeenTags[primaryAttributeKey]) {
	                instanceSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!approvedSeenTags[primaryAttributeKey][value]) {
	                instanceSeenTags[primaryAttributeKey][value] = true;
	                return true;
	            }
	
	            return false;
	        }).reverse().forEach(function (tag) {
	            return approvedTags.push(tag);
	        });
	
	        // Update seen tags with tags from this instance
	        var keys = Object.keys(instanceSeenTags);
	        for (var i = 0; i < keys.length; i++) {
	            var attributeKey = keys[i];
	            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
	
	            approvedSeenTags[attributeKey] = tagUnion;
	        }
	
	        return approvedTags;
	    }, []).reverse();
	};
	
	var getInnermostProperty = function getInnermostProperty(propsList, property) {
	    for (var i = propsList.length - 1; i >= 0; i--) {
	        var props = propsList[i];
	
	        if (props.hasOwnProperty(property)) {
	            return props[property];
	        }
	    }
	
	    return null;
	};
	
	var reducePropsToState = function reducePropsToState(propsList) {
	    return {
	        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
	        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
	        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
	        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
	        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
	        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        onChangeClientState: getOnChangeClientState(propsList),
	        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
	        title: getTitleFromPropsList(propsList),
	        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
	    };
	};
	
	var rafPolyfill = function () {
	    var clock = Date.now();
	
	    return function (callback) {
	        var currentTime = Date.now();
	
	        if (currentTime - clock > 16) {
	            clock = currentTime;
	            callback(currentTime);
	        } else {
	            setTimeout(function () {
	                rafPolyfill(callback);
	            }, 0);
	        }
	    };
	}();
	
	var cafPolyfill = function cafPolyfill(id) {
	    return clearTimeout(id);
	};
	
	var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
	
	var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;
	
	var warn = function warn(msg) {
	    return console && typeof console.warn === "function" && console.warn(msg);
	};
	
	var _helmetCallback = null;
	
	var handleClientStateChange = function handleClientStateChange(newState) {
	    if (_helmetCallback) {
	        cancelAnimationFrame(_helmetCallback);
	    }
	
	    if (newState.defer) {
	        _helmetCallback = requestAnimationFrame(function () {
	            commitTagChanges(newState, function () {
	                _helmetCallback = null;
	            });
	        });
	    } else {
	        commitTagChanges(newState);
	        _helmetCallback = null;
	    }
	};
	
	var commitTagChanges = function commitTagChanges(newState, cb) {
	    var baseTag = newState.baseTag,
	        bodyAttributes = newState.bodyAttributes,
	        htmlAttributes = newState.htmlAttributes,
	        linkTags = newState.linkTags,
	        metaTags = newState.metaTags,
	        noscriptTags = newState.noscriptTags,
	        onChangeClientState = newState.onChangeClientState,
	        scriptTags = newState.scriptTags,
	        styleTags = newState.styleTags,
	        title = newState.title,
	        titleAttributes = newState.titleAttributes;
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
	    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
	
	    updateTitle(title, titleAttributes);
	
	    var tagUpdates = {
	        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
	        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
	        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
	        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
	        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
	        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
	    };
	
	    var addedTags = {};
	    var removedTags = {};
	
	    Object.keys(tagUpdates).forEach(function (tagType) {
	        var _tagUpdates$tagType = tagUpdates[tagType],
	            newTags = _tagUpdates$tagType.newTags,
	            oldTags = _tagUpdates$tagType.oldTags;
	
	
	        if (newTags.length) {
	            addedTags[tagType] = newTags;
	        }
	        if (oldTags.length) {
	            removedTags[tagType] = tagUpdates[tagType].oldTags;
	        }
	    });
	
	    cb && cb();
	
	    onChangeClientState(newState, addedTags, removedTags);
	};
	
	var flattenArray = function flattenArray(possibleArray) {
	    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
	};
	
	var updateTitle = function updateTitle(title, attributes) {
	    if (typeof title !== "undefined" && document.title !== title) {
	        document.title = flattenArray(title);
	    }
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
	};
	
	var updateAttributes = function updateAttributes(tagName, attributes) {
	    var elementTag = document.getElementsByTagName(tagName)[0];
	
	    if (!elementTag) {
	        return;
	    }
	
	    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	    var attributesToRemove = [].concat(helmetAttributes);
	    var attributeKeys = Object.keys(attributes);
	
	    for (var i = 0; i < attributeKeys.length; i++) {
	        var attribute = attributeKeys[i];
	        var value = attributes[attribute] || "";
	
	        if (elementTag.getAttribute(attribute) !== value) {
	            elementTag.setAttribute(attribute, value);
	        }
	
	        if (helmetAttributes.indexOf(attribute) === -1) {
	            helmetAttributes.push(attribute);
	        }
	
	        var indexToSave = attributesToRemove.indexOf(attribute);
	        if (indexToSave !== -1) {
	            attributesToRemove.splice(indexToSave, 1);
	        }
	    }
	
	    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
	        elementTag.removeAttribute(attributesToRemove[_i]);
	    }
	
	    if (helmetAttributes.length === attributesToRemove.length) {
	        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
	        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
	    }
	};
	
	var updateTags = function updateTags(type, tags) {
	    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
	    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
	    var oldTags = Array.prototype.slice.call(tagNodes);
	    var newTags = [];
	    var indexToDelete = void 0;
	
	    if (tags && tags.length) {
	        tags.forEach(function (tag) {
	            var newElement = document.createElement(type);
	
	            for (var attribute in tag) {
	                if (tag.hasOwnProperty(attribute)) {
	                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
	                        newElement.innerHTML = tag.innerHTML;
	                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                        if (newElement.styleSheet) {
	                            newElement.styleSheet.cssText = tag.cssText;
	                        } else {
	                            newElement.appendChild(document.createTextNode(tag.cssText));
	                        }
	                    } else {
	                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
	                        newElement.setAttribute(attribute, value);
	                    }
	                }
	            }
	
	            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");
	
	            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	            if (oldTags.some(function (existingTag, index) {
	                indexToDelete = index;
	                return newElement.isEqualNode(existingTag);
	            })) {
	                oldTags.splice(indexToDelete, 1);
	            } else {
	                newTags.push(newElement);
	            }
	        });
	    }
	
	    oldTags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	    });
	    newTags.forEach(function (tag) {
	        return headElement.appendChild(tag);
	    });
	
	    return {
	        oldTags: oldTags,
	        newTags: newTags
	    };
	};
	
	var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
	    return Object.keys(attributes).reduce(function (str, key) {
	        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
	        return str ? str + " " + attr : attr;
	    }, "");
	};
	
	var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
	    var attributeString = generateElementAttributesAsString(attributes);
	    var flattenedTitle = flattenArray(title);
	    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
	};
	
	var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
	    return tags.reduce(function (str, tag) {
	        var attributeHtml = Object.keys(tag).filter(function (attribute) {
	            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
	        }).reduce(function (string, attribute) {
	            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
	            return string ? string + " " + attr : attr;
	        }, "");
	
	        var tagContent = tag.innerHTML || tag.cssText || "";
	
	        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
	
	        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
	    }, "");
	};
	
	var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
	    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(attributes).reduce(function (obj, key) {
	        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
	        return obj;
	    }, initProps);
	};
	
	var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
	    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(props).reduce(function (obj, key) {
	        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
	        return obj;
	    }, initAttributes);
	};
	
	var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
	    var _initProps;
	
	    // assigning into an array to define toString function on it
	    var initProps = (_initProps = {
	        key: title
	    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
	    var props = convertElementAttributestoReactProps(attributes, initProps);
	
	    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
	};
	
	var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
	    return tags.map(function (tag, i) {
	        var _mappedTag;
	
	        var mappedTag = (_mappedTag = {
	            key: i
	        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
	
	        Object.keys(tag).forEach(function (attribute) {
	            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;
	
	            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                var content = tag.innerHTML || tag.cssText;
	                mappedTag.dangerouslySetInnerHTML = { __html: content };
	            } else {
	                mappedTag[mappedAttribute] = tag[attribute];
	            }
	        });
	
	        return _react2.default.createElement(type, mappedTag);
	    });
	};
	
	var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
	    switch (type) {
	        case _HelmetConstants.TAG_NAMES.TITLE:
	            return {
	                toComponent: function toComponent() {
	                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
	                },
	                toString: function toString() {
	                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
	                }
	            };
	        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
	        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
	            return {
	                toComponent: function toComponent() {
	                    return convertElementAttributestoReactProps(tags);
	                },
	                toString: function toString() {
	                    return generateElementAttributesAsString(tags);
	                }
	            };
	        default:
	            return {
	                toComponent: function toComponent() {
	                    return generateTagsAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTagsAsString(type, tags, encode);
	                }
	            };
	    }
	};
	
	var mapStateOnServer = function mapStateOnServer(_ref) {
	    var baseTag = _ref.baseTag,
	        bodyAttributes = _ref.bodyAttributes,
	        encode = _ref.encode,
	        htmlAttributes = _ref.htmlAttributes,
	        linkTags = _ref.linkTags,
	        metaTags = _ref.metaTags,
	        noscriptTags = _ref.noscriptTags,
	        scriptTags = _ref.scriptTags,
	        styleTags = _ref.styleTags,
	        _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        titleAttributes = _ref.titleAttributes;
	    return {
	        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
	        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
	        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
	        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
	        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
	        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
	        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
	        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
	        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
	    };
	};
	
	exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
	exports.handleClientStateChange = handleClientStateChange;
	exports.mapStateOnServer = mapStateOnServer;
	exports.reducePropsToState = reducePropsToState;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.warn = warn;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _exenv = __webpack_require__(36);
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var _shallowequal = __webpack_require__(44);
	
	var _shallowequal2 = _interopRequireDefault(_shallowequal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }
	
	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }
	
	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }
	
	    var mountedInstances = [];
	    var state = void 0;
	
	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));
	
	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }
	
	    var SideEffect = function (_Component) {
	      _inherits(SideEffect, _Component);
	
	      function SideEffect() {
	        _classCallCheck(this, SideEffect);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      // Try to use displayName of wrapped component
	      SideEffect.peek = function peek() {
	        return state;
	      };
	
	      // Expose canUseDOM so tests can monkeypatch it
	
	
	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
	        }
	
	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };
	
	      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !(0, _shallowequal2.default)(nextProps, this.props);
	      };
	
	      SideEffect.prototype.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };
	
	      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };
	
	      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };
	
	      SideEffect.prototype.render = function render() {
	        return _react2.default.createElement(WrappedComponent, this.props);
	      };
	
	      return SideEffect;
	    }(_react.Component);
	
	    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
	    SideEffect.canUseDOM = _exenv2.default.canUseDOM;
	
	
	    return SideEffect;
	  };
	};

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	
	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	    if(ret !== void 0) {
	        return !!ret;
	    }
	
	    if(objA === objB) {
	        return true;
	    }
	
	    if(typeof objA !== 'object' || !objA ||
	       typeof objB !== 'object' || !objB) {
	        return false;
	    }
	
	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);
	
	    if(keysA.length !== keysB.length) {
	        return false;
	    }
	
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	
	    // Test for A's keys different from B.
	    for(var idx = 0; idx < keysA.length; idx++) {
	
	        var key = keysA[idx];
	
	        if(!bHasOwnProperty(key)) {
	            return false;
	        }
	
	        var valueA = objA[key];
	        var valueB = objB[key];
	
	        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	
	        if(ret === false ||
	           ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	
	    }
	
	    return true;
	
	};


/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

	
	;(function (name, root, factory) {
	  if (true) {
	    module.exports = factory()
	    module.exports['default'] = factory()
	  }
	  /* istanbul ignore next */
	  else if (typeof define === 'function' && define.amd) {
	    define(factory)
	  }
	  else {
	    root[name] = factory()
	  }
	}('slugify', this, function () {
	  /*eslint-disable */
	  var charMap = JSON.parse('{"$":"dollar","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}')
	  /*eslint-enable */
	
	  function replace (string, options) {
	    options = (typeof options === 'string')
	      ? {replacement: options}
	      : options || {}
	
	    string = string.split('')
	      .reduce(function (result, ch) {
	        if (charMap[ch]) {
	          ch = charMap[ch]
	        }
	        // allowed
	        ch = ch.replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]/g, '')
	        result += ch
	        return result
	      }, '')
	      // trim leading/trailing spaces
	      .replace(/^\s+|\s+$/g, '')
	      // convert spaces
	      .replace(/[-\s]+/g, options.replacement || '-')
	      // remove trailing separator
	      .replace('#{replacement}$', '')
	
	    return options.lower ? string.toLowerCase() : string
	  }
	
	  replace.extend = function (customMap) {
	    for (var key in customMap) {
	      charMap[key] = customMap[key]
	    }
	  }
	
	  return replace
	}))


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ChevronSvg = function ChevronSvg(_ref) {
	  var _ref$size = _ref.size,
	      size = _ref$size === undefined ? 10 : _ref$size,
	      _ref$cssProps = _ref.cssProps,
	      cssProps = _ref$cssProps === undefined ? {} : _ref$cssProps;
	  return Glamor.createElement(
	    "svg",
	    {
	      css: cssProps,
	      viewBox: "0 0 926.23699 573.74994",
	      version: "1.1",
	      x: "0px",
	      y: "0px",
	      width: size,
	      height: size },
	    Glamor.createElement(
	      "g",
	      { transform: "translate(904.92214,-879.1482)" },
	      Glamor.createElement("path", {
	        d: "\n          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n          -174.68583 0.6895,0 26.281,25.03215 56.8701,\n          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n          -104.0616 -231.873,-231.248 z\n        ",
	        fill: "currentColor"
	      })
	    )
	  );
	};
	
	exports.default = ChevronSvg;
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _theme = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * This component wraps page content sections (eg header, footer, main).
	 * It provides consistent margin and max width behavior.
	 */
	var Container = function Container(_ref) {
	  var _ref2;
	
	  var children = _ref.children;
	  return Glamor.createElement(
	    'div',
	    {
	      css: (_ref2 = {
	        paddingLeft: 20,
	        paddingRight: 20,
	        marginLeft: 'auto',
	        marginRight: 'auto'
	
	      }, _ref2[_theme.media.greaterThan('medium')] = {
	        width: '90%'
	      }, _ref2[_theme.media.size('xxlarge')] = {
	        maxWidth: 1260
	      }, _ref2) },
	    children
	  );
	};
	
	exports.default = Container;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * Convenience component for declaring a flexbox layout.
	 */
	var Flex = function Flex(_ref) {
	  var _ref$basis = _ref.basis,
	      basis = _ref$basis === undefined ? 'auto' : _ref$basis,
	      children = _ref.children,
	      _ref$direction = _ref.direction,
	      direction = _ref$direction === undefined ? 'row' : _ref$direction,
	      _ref$grow = _ref.grow,
	      grow = _ref$grow === undefined ? 0 : _ref$grow,
	      _ref$halign = _ref.halign,
	      halign = _ref$halign === undefined ? 'flex-start' : _ref$halign,
	      _ref$shrink = _ref.shrink,
	      shrink = _ref$shrink === undefined ? 1 : _ref$shrink,
	      _ref$type = _ref.type,
	      type = _ref$type === undefined ? 'div' : _ref$type,
	      _ref$valign = _ref.valign,
	      valign = _ref$valign === undefined ? 'flex-start' : _ref$valign,
	      rest = _objectWithoutProperties(_ref, ['basis', 'children', 'direction', 'grow', 'halign', 'shrink', 'type', 'valign']);
	
	  return (0, _react.createElement)(type, _extends({
	    css: {
	      display: 'flex',
	      flexDirection: direction,
	      flexGrow: grow,
	      flexShrink: shrink,
	      flexBasis: basis,
	      justifyContent: direction === 'row' ? halign : valign,
	      alignItems: direction === 'row' ? valign : halign
	    }
	  }, rest), children);
	};
	
	exports.default = Flex;
	module.exports = exports['default'];

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _theme = __webpack_require__(3);
	
	var _Flex = __webpack_require__(18);
	
	var _Flex2 = _interopRequireDefault(_Flex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MarkdownHeader = function MarkdownHeader(_ref) {
	  var _ref2;
	
	  var title = _ref.title;
	  return Glamor.createElement(
	    _Flex2.default,
	    { type: 'header', halign: 'space-between', valign: 'baseline' },
	    Glamor.createElement(
	      'h1',
	      {
	        css: (_ref2 = {
	          color: _theme.colors.dark,
	          marginBottom: 0,
	          marginTop: 40
	        }, _ref2[_theme.media.size('medium')] = {
	          marginTop: 60
	        }, _ref2[_theme.media.greaterThan('large')] = {
	          marginTop: 80
	        }, _ref2) },
	      title
	    )
	  );
	};
	
	exports.default = MarkdownHeader;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _findSectionForPath = __webpack_require__(188);
	
	var _findSectionForPath2 = _interopRequireDefault(_findSectionForPath);
	
	var _createOgUrl = __webpack_require__(64);
	
	var _createOgUrl2 = _interopRequireDefault(_createOgUrl);
	
	var _theme = __webpack_require__(3);
	
	var _siteConstants = __webpack_require__(6);
	
	var _TitleAndMetaTags = __webpack_require__(26);
	
	var _TitleAndMetaTags2 = _interopRequireDefault(_TitleAndMetaTags);
	
	var _MarkdownHeader = __webpack_require__(174);
	
	var _MarkdownHeader2 = _interopRequireDefault(_MarkdownHeader);
	
	var _Container = __webpack_require__(12);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _Flex = __webpack_require__(18);
	
	var _Flex2 = _interopRequireDefault(_Flex);
	
	var _StickyResponsiveSidebar = __webpack_require__(182);
	
	var _StickyResponsiveSidebar2 = _interopRequireDefault(_StickyResponsiveSidebar);
	
	var _NavigationFooter = __webpack_require__(177);
	
	var _NavigationFooter2 = _interopRequireDefault(_NavigationFooter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MarkdownPage = function MarkdownPage(_ref) {
	  var directory = _ref.directory,
	      enableScrollSync = _ref.enableScrollSync,
	      ogDescription = _ref.ogDescription,
	      location = _ref.location,
	      markdownRemark = _ref.markdownRemark,
	      sectionList = _ref.sectionList,
	      _ref$titlePostfix = _ref.titlePostfix,
	      titlePostfix = _ref$titlePostfix === undefined ? '' : _ref$titlePostfix;
	
	  var titlePrefix = markdownRemark.frontmatter.title || '';
	  var headings = markdownRemark.headings || [];
	  return Glamor.createElement(
	    _Flex2.default,
	    {
	      direction: 'column',
	      grow: '1',
	      shrink: '0',
	      halign: 'stretch',
	      css: _extends({
	        width: '100%',
	        flex: '1 0 auto',
	        position: 'relative'
	      }, _theme.sharedStyles.fluid, {
	        zIndex: 0
	      }) },
	    Glamor.createElement(_TitleAndMetaTags2.default, {
	      ogDescription: ogDescription,
	      ogUrl: (0, _createOgUrl2.default)(markdownRemark.fields.slug),
	      title: '' + titlePrefix + titlePostfix
	    }),
	    Glamor.createElement(
	      'div',
	      { css: { flex: '1 0 auto' } },
	      Glamor.createElement(
	        _Container2.default,
	        null,
	        Glamor.createElement(
	          'div',
	          { css: _theme.sharedStyles.articleLayout.container },
	          Glamor.createElement(
	            _Flex2.default,
	            { type: 'article', direction: 'column', grow: '1', halign: 'stretch' },
	            Glamor.createElement(_MarkdownHeader2.default, { title: titlePrefix }),
	            Glamor.createElement(
	              'div',
	              { css: _theme.sharedStyles.articleLayout.content },
	              Glamor.createElement('div', {
	                css: [_theme.sharedStyles.markdown],
	                dangerouslySetInnerHTML: { __html: markdownRemark.html }
	              }),
	              markdownRemark.fields.path && Glamor.createElement(
	                'div',
	                { css: { marginTop: 80 } },
	                Glamor.createElement(
	                  'a',
	                  {
	                    css: _theme.sharedStyles.articleLayout.editLink,
	                    href: _siteConstants.githubURL + '/tree/master/content/' + markdownRemark.fields.path },
	                  'Edit this page'
	                )
	              )
	            )
	          ),
	          Glamor.createElement(
	            'div',
	            { css: _theme.sharedStyles.articleLayout.sidebar },
	            Glamor.createElement(_StickyResponsiveSidebar2.default, {
	              enableScrollSync: enableScrollSync,
	              directory: directory,
	              defaultActiveSection: (0, _findSectionForPath2.default)(location.pathname, sectionList),
	              location: location,
	              sectionList: sectionList,
	              headings: headings
	            })
	          )
	        )
	      )
	    ),
	    (markdownRemark.frontmatter.next || markdownRemark.frontmatter.prev) && Glamor.createElement(_NavigationFooter2.default, {
	      location: location,
	      next: markdownRemark.frontmatter.next,
	      prev: markdownRemark.frontmatter.prev
	    })
	  );
	};
	
	exports.default = MarkdownPage;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _theme = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MetaTitle = function MetaTitle(_ref) {
	  var children = _ref.children,
	      _ref$cssProps = _ref.cssProps,
	      cssProps = _ref$cssProps === undefined ? {} : _ref$cssProps,
	      _ref$onDark = _ref.onDark,
	      onDark = _ref$onDark === undefined ? false : _ref$onDark;
	  return Glamor.createElement(
	    'div',
	    {
	      css: _extends({
	        color: onDark ? _theme.colors.subtleOnDark : _theme.colors.subtle,
	        fontSize: 14,
	        fontWeight: 700,
	        lineHeight: 3,
	        textTransform: 'uppercase',
	        letterSpacing: '0.08em'
	      }, cssProps) },
	    children
	  );
	};
	
	exports.default = MetaTitle;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var microfeedback = void 0;
	var $ = void 0;
	if (typeof window !== 'undefined') {
	  microfeedback = __webpack_require__(95);
	  $ = document.querySelectorAll.bind(document);
	}
	
	var MicroFeedbackButtonExamples = function (_React$Component) {
	  _inherits(MicroFeedbackButtonExamples, _React$Component);
	
	  function MicroFeedbackButtonExamples() {
	    _classCallCheck(this, MicroFeedbackButtonExamples);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  MicroFeedbackButtonExamples.prototype.componentDidMount = function componentDidMount() {
	    this.buttons = [microfeedback($('#custom-button')[0], {
	      url: null,
	      title: 'Binding to an element',
	      text: 'You can bind a feedback dialog to any element.'
	    }), microfeedback($('#custom-dialog')[0], {
	      url: null,
	      title: 'Custom dialog example',
	      text: 'See the sweetalert2 docs for available customization options.',
	      input: 'text',
	      width: 600,
	      placeholder: "What's on your mind?",
	      cancelButtonText: 'Discard',
	      confirmButtonText: 'Send it!',
	      confirmButtonColor: '#41b883',
	      reverseButtons: true
	    }), microfeedback($('#show-dialog')[0], {
	      showDialog: function showDialog(btn) {
	        return btn.alert({
	          title: 'Programmatic dialog example',
	          html: 'You can create a dialog programatically using <code>btn.alert()</code>.',
	          inputPlaceholder: 'One thing we can do better',
	          input: 'text'
	        });
	      }
	    }), microfeedback($('#non-optimistic')[0], {
	      title: 'Non-optimistic example',
	      text: 'The success dialog will not be displayed until the fake request is finished.',
	      optimistic: false,
	      // Simulate requests for demo purposes
	      url: true,
	      sendRequest: function sendRequest() {
	        return new Promise(function (resolve) {
	          window.setTimeout(function () {
	            resolve();
	          }, 2000);
	        });
	      }
	    }), microfeedback(document.getElementById('handling-failure'), {
	      title: 'Handling errors',
	      html: 'Use <code>onFailure</code> to handle errors.',
	      optimistic: false,
	      onFailure: function onFailure(btn) {
	        return btn.alert('Oops', 'Something terrible happened!', 'error');
	      },
	
	      // Simulate a failed request
	      url: true,
	      sendRequest: function sendRequest() {
	        return new Promise(function (resolve, reject) {
	          window.setTimeout(function () {
	            reject();
	          }, 2000);
	        });
	      }
	    }), microfeedback($('#custom-success')[0], {
	      title: 'Success message example',
	      html: 'Use <code>showSuccessDialog</code> to create a custom success dialog.',
	      width: 600,
	      showSuccessDialog: function showSuccessDialog(btn, input) {
	        return btn.alert({
	          title: "❤️ You're amazing!",
	          text: 'You wrote: "' + input.value + '"',
	          confirmButtonText: 'Continue being amazing'
	        });
	      }
	    }), microfeedback($('#custom-success-non-optimistic')[0], {
	      title: 'Success message after response',
	      html: 'Use <code>showSuccessDialog</code> together with <code>optimistic: false</code> ' + 'to display a custom message after the request finishes.',
	      width: 600,
	      optimistic: false,
	      showSuccessDialog: function showSuccessDialog(btn, input, response) {
	        return btn.alert('Issue posted', 'You wrote: "' + input.value + '".<br>Your issue number is: ' + response.result.issueNo, 'info');
	      },
	
	      // Simulate requests for demo purposes
	      url: true,
	      sendRequest: function sendRequest(btn, url, payload) {
	        return new Promise(function (resolve) {
	          window.setTimeout(function () {
	            resolve({
	              result: {
	                body: payload.body,
	                issueNo: Math.floor(Math.random() * 1000)
	              }
	            });
	          }, 2000);
	        });
	      }
	    }), microfeedback($('#multi-input')[0], {
	      url: false,
	      showDialog: function showDialog(btn) {
	        return btn.alert({
	          title: 'Multiple input example',
	          html: '<textarea id="microfeedback-input" class="swal2-textarea" style="display: block;" placeholder="Describe your issue or share your ideas"></textarea>' + '<label id="microfeedback-followup" for="swal2-checkbox" class="swal2-checkbox">' + '<input style="display:block" type="checkbox">' + '<span>Contact me about opportunities to improve our product</span>' + '</label>',
	          focusConfirm: false,
	          preConfirm: function preConfirm() {
	            var input = document.getElementById('microfeedback-input');
	            var followup = document.querySelectorAll('#microfeedback-followup input')[0];
	            return {
	              input: input.value,
	              followup: followup.checked
	            };
	          },
	
	          showCancelButton: true,
	          confirmButtonText: 'Send'
	        });
	      },
	      showSuccessDialog: function showSuccessDialog(btn, _ref) {
	        var followup = _ref.value.followup;
	
	        var text = followup ? 'We will contact you soon.' : 'We will not contact you in the future.';
	        return btn.alert({
	          title: 'Thank you for your feedback!',
	          text: text,
	          type: 'success'
	        });
	      },
	      getPayload: function getPayload(btn, _ref2) {
	        var _ref2$value = _ref2.value,
	            input = _ref2$value.input,
	            followup = _ref2$value.followup;
	
	        return {
	          body: input,
	          extra: {
	            followup: followup
	          }
	        };
	      }
	    })];
	  };
	
	  MicroFeedbackButtonExamples.prototype.componentWillUnmount = function componentWillUnmount() {
	    for (var _iterator = this.buttons, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref3;
	
	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref3 = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref3 = _i.value;
	      }
	
	      var btn = _ref3;
	
	      btn.destroy();
	    }
	  };
	
	  MicroFeedbackButtonExamples.prototype.render = function render() {
	    return Glamor.createElement('span', { style: { display: 'none' } });
	  };
	
	  return MicroFeedbackButtonExamples;
	}(_react2.default.Component);
	
	exports.default = MicroFeedbackButtonExamples;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(23);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _theme = __webpack_require__(3);
	
	var _Container = __webpack_require__(12);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _Flex = __webpack_require__(18);
	
	var _Flex2 = _interopRequireDefault(_Flex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var linkToTitle = function linkToTitle(link) {
	  return link.replace(/-/g, ' ').replace('.html', '');
	};
	
	var PrimaryLink = function PrimaryLink(_ref) {
	  var _ref2;
	
	  var children = _ref.children,
	      to = _ref.to,
	      location = _ref.location;
	
	  // quick fix
	  // TODO: replace this with better method of getting correct full url
	  var updatedUrl = location && location.pathname.replace(/\/[^/]+\.html/, '/' + to) || to;
	  return Glamor.createElement(
	    _gatsbyLink2.default,
	    {
	      css: (_ref2 = {
	        display: 'inline',
	        textTransform: 'capitalize',
	        borderColor: _theme.colors.subtle,
	        transition: 'border-color 0.2s ease',
	        fontSize: 30,
	        borderBottomWidth: 1,
	        borderBottomStyle: 'solid'
	
	      }, _ref2[_theme.media.lessThan('large')] = {
	        fontSize: 24
	      }, _ref2[_theme.media.size('xsmall')] = {
	        fontSize: 16
	      }, _ref2[':hover'] = {
	        borderColor: _theme.colors.white
	      }, _ref2),
	      to: updatedUrl },
	    children
	  );
	};
	
	var SecondaryLabel = function SecondaryLabel(_ref3) {
	  var children = _ref3.children;
	  return Glamor.createElement(
	    'div',
	    {
	      css: {
	        color: _theme.colors.text
	      } },
	    children
	  );
	};
	
	var NavigationFooter = function NavigationFooter(_ref4) {
	  var _ref5;
	
	  var _ref4$next = _ref4.next,
	      next = _ref4$next === undefined ? null : _ref4$next,
	      _ref4$prev = _ref4.prev,
	      prev = _ref4$prev === undefined ? null : _ref4$prev,
	      location = _ref4.location;
	
	  return Glamor.createElement(
	    'div',
	    {
	      css: {
	        background: _theme.colors.dark,
	        color: _theme.colors.white,
	        paddingTop: 50,
	        paddingBottom: 50
	      } },
	    Glamor.createElement(
	      _Container2.default,
	      null,
	      Glamor.createElement(
	        _Flex2.default,
	        {
	          type: 'ul',
	          halign: 'space-between',
	          css: (_ref5 = {}, _ref5[_theme.media.between('small', 'medium')] = {
	            paddingRight: 240
	          }, _ref5[_theme.media.between('large', 'largerSidebar')] = {
	            paddingRight: 280
	          }, _ref5[_theme.media.between('largerSidebar', 'sidebarFixed', true)] = {
	            paddingRight: 380
	          }, _ref5) },
	        Glamor.createElement(
	          _Flex2.default,
	          { basis: '50%', type: 'li' },
	          prev && Glamor.createElement(
	            'div',
	            null,
	            Glamor.createElement(
	              SecondaryLabel,
	              null,
	              'Previous article'
	            ),
	            Glamor.createElement(
	              'div',
	              {
	                css: {
	                  paddingTop: 10
	                } },
	              Glamor.createElement(
	                PrimaryLink,
	                { location: location, to: prev },
	                linkToTitle(prev)
	              )
	            )
	          )
	        ),
	        next && Glamor.createElement(
	          _Flex2.default,
	          {
	            halign: 'flex-end',
	            basis: '50%',
	            type: 'li',
	            css: {
	              textAlign: 'right'
	            } },
	          Glamor.createElement(
	            'div',
	            null,
	            Glamor.createElement(
	              SecondaryLabel,
	              null,
	              'Next article'
	            ),
	            Glamor.createElement(
	              'div',
	              {
	                css: {
	                  paddingTop: 10
	                } },
	              Glamor.createElement(
	                PrimaryLink,
	                { location: location, to: next },
	                linkToTitle(next)
	              )
	            )
	          )
	        )
	      )
	    )
	  );
	};
	
	exports.default = NavigationFooter;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Section = __webpack_require__(179);
	
	var _Section2 = _interopRequireDefault(_Section);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _getItemIds = function _getItemIds(items) {
	  return items.map(function (item) {
	    var subItemIds = [];
	    if (item.subitems) {
	      subItemIds = item.subitems.map(function (subitem) {
	        return subitem.id;
	      });
	    }
	    return [item.id].concat(subItemIds);
	  }).reduce(function (prev, current) {
	    return prev.concat(current);
	  });
	};
	
	var _getElementTopOffsetsById = function _getElementTopOffsetsById(ids) {
	  return ids.map(function (id) {
	    var element = document.getElementById(id);
	    if (!element) {
	      return null;
	    }
	    return {
	      id: id,
	      offsetTop: element.offsetTop
	    };
	  }).filter(function (item) {
	    return item;
	  });
	};
	
	var ScrollSyncSection = function (_Component) {
	  _inherits(ScrollSyncSection, _Component);
	
	  function ScrollSyncSection(props, context) {
	    _classCallCheck(this, ScrollSyncSection);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    _this.calculateItemTopOffsets = function () {
	      var section = _this.props.section;
	
	
	      var itemIds = _getItemIds(section.items);
	      _this.setState({
	        itemTopOffsets: _getElementTopOffsetsById(itemIds)
	      });
	    };
	
	    _this.handleResize = function () {
	      _this.calculateItemTopOffsets();
	      _this.handleScroll();
	    };
	
	    _this.handleScroll = function () {
	      var itemTopOffsets = _this.state.itemTopOffsets;
	
	      var item = itemTopOffsets.find(function (itemTopOffset, i) {
	        var nextItemTopOffset = itemTopOffsets[i + 1];
	        if (nextItemTopOffset) {
	          return window.scrollY >= itemTopOffset.offsetTop && window.scrollY < nextItemTopOffset.offsetTop;
	        }
	        return window.scrollY >= itemTopOffset.offsetTop;
	      });
	      _this.setState({
	        activeItemId: item ? item.id : ''
	      });
	    };
	
	    _this.state = {
	      activeItemId: '',
	      itemTopOffsets: []
	    };
	    return _this;
	  }
	
	  ScrollSyncSection.prototype.componentDidMount = function componentDidMount() {
	    this.calculateItemTopOffsets();
	
	    window.addEventListener('resize', this.handleResize);
	    window.addEventListener('scroll', this.handleScroll);
	  };
	
	  ScrollSyncSection.prototype.componentWillUnmount = function componentWillUnmount() {
	    window.removeEventListener('resize', this.handleResize);
	    window.removeEventListener('scroll', this.handleScroll);
	  };
	
	  // eslint-disable-next-line no-undef
	
	
	  // eslint-disable-next-line no-undef
	
	
	  // eslint-disable-next-line no-undef
	
	
	  ScrollSyncSection.prototype.render = function render() {
	    var activeItemId = this.state.activeItemId;
	
	    return Glamor.createElement(_Section2.default, _extends({ isScrollSync: true, activeItemId: activeItemId }, this.props));
	  };
	
	  return ScrollSyncSection;
	}(_react.Component);
	
	exports.default = ScrollSyncSection;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _theme = __webpack_require__(3);
	
	var _isItemActive = __webpack_require__(104);
	
	var _isItemActive2 = _interopRequireDefault(_isItemActive);
	
	var _MetaTitle = __webpack_require__(63);
	
	var _MetaTitle2 = _interopRequireDefault(_MetaTitle);
	
	var _SectionLink = __webpack_require__(180);
	
	var _SectionLink2 = _interopRequireDefault(_SectionLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SubItems = function SubItems(_ref) {
	  var items = _ref.items,
	      isScrollSync = _ref.isScrollSync,
	      activeItemId = _ref.activeItemId,
	      _ref$indent = _ref.indent,
	      indent = _ref$indent === undefined ? 20 : _ref$indent,
	      onLinkClick = _ref.onLinkClick;
	
	  return Glamor.createElement(
	    'div',
	    { css: { lineHeight: 1.3 } },
	    items.map(function (subitem) {
	      return Glamor.createElement(
	        'div',
	        { key: subitem.id },
	        Glamor.createElement(
	          'div',
	          { css: { marginLeft: indent * (subitem.depth - 1) } },
	          Glamor.createElement(_SectionLink2.default, {
	            onClick: onLinkClick,
	            isActive: isScrollSync ? activeItemId === subitem.id : (0, _isItemActive2.default)(location, subitem),
	            item: subitem
	          })
	        )
	      );
	    })
	  );
	};
	
	var Section = function Section(_ref2) {
	  var _ref3, _ref4;
	
	  var activeItemId = _ref2.activeItemId,
	      directory = _ref2.directory,
	      isActive = _ref2.isActive,
	      isScrollSync = _ref2.isScrollSync,
	      location = _ref2.location,
	      section = _ref2.section,
	      onLinkClick = _ref2.onLinkClick,
	      _ref2$indent = _ref2.indent,
	      indent = _ref2$indent === undefined ? 20 : _ref2$indent;
	  return Glamor.createElement(
	    'div',
	    null,
	    Glamor.createElement(
	      'a',
	      {
	        css: {
	          cursor: 'pointer',
	          backgroundColor: 'transparent',
	          border: 0,
	          marginTop: 10
	        },
	        href: '/' + directory + '/' },
	      Glamor.createElement(
	        _MetaTitle2.default,
	        {
	          cssProps: (_ref3 = {}, _ref3[_theme.media.greaterThan('small')] = {
	            color: isActive ? _theme.colors.text : _theme.colors.subtle,
	
	            ':hover': {
	              color: _theme.colors.primary
	            }
	          }, _ref3) },
	        section.title
	      )
	    ),
	    Glamor.createElement(
	      'div',
	      {
	        css: (_ref4 = {
	          marginBottom: 10
	        }, _ref4[_theme.media.greaterThan('small')] = {
	          display: isActive ? 'block' : 'none'
	        }, _ref4) },
	      section.items.map(function (item) {
	        var sectionIsActive = (0, _isItemActive2.default)(location, item);
	        return Glamor.createElement(
	          'div',
	          {
	            key: item.id,
	            css: {
	              marginTop: 5,
	              lineHeight: 1.6
	            } },
	          Glamor.createElement(_SectionLink2.default, {
	            isActive: !activeItemId && sectionIsActive,
	            isSubItemActive: sectionIsActive && activeItemId,
	            item: item,
	            directory: directory
	          }),
	          sectionIsActive && item.subitems.length && Glamor.createElement(SubItems, {
	            activeItemId: activeItemId,
	            indent: indent,
	            isScrollSync: isScrollSync,
	            onLinkClick: onLinkClick,
	            items: item.subitems
	          })
	        );
	      })
	    )
	  );
	};
	
	exports.default = Section;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _activeLinkBefore;
	
	var _gatsbyLink = __webpack_require__(23);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _theme = __webpack_require__(3);
	
	var _slugify = __webpack_require__(105);
	
	var _slugify2 = _interopRequireDefault(_slugify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var activeLinkCss = {
	  fontWeight: 700
	};
	
	var activeLinkBefore = (_activeLinkBefore = {
	  width: 4,
	  height: 25,
	  borderLeft: '4px solid ' + _theme.colors.text,
	  paddingLeft: 16,
	  position: 'absolute',
	  left: 0
	
	}, _activeLinkBefore[_theme.media.greaterThan('largerSidebar')] = {
	  left: 15
	}, _activeLinkBefore);
	
	var subItemActiveLinkBefore = {
	  borderLeft: '4px solid ' + _theme.colors.primary
	};
	
	var linkCss = {
	  color: _theme.colors.text,
	  display: 'inline-block',
	  borderBottom: '1px solid transparent',
	  transition: 'border 0.2s ease',
	  marginTop: 5,
	
	  '&:hover': {
	    color: _theme.colors.primary
	  }
	};
	
	var SectionLink = function SectionLink(_ref) {
	  var isActive = _ref.isActive,
	      isSubItemActive = _ref.isSubItemActive,
	      item = _ref.item,
	      directory = _ref.directory,
	      onClick = _ref.onClick;
	
	  var to = item.href || (0, _slugify2.default)(item.id, directory);
	  return Glamor.createElement(
	    _gatsbyLink2.default,
	    {
	      onClick: onClick,
	      css: [linkCss, isActive && activeLinkCss],
	      to: to },
	    (isActive || isSubItemActive) && Glamor.createElement('span', { css: [activeLinkBefore, isSubItemActive && subItemActiveLinkBefore] }),
	    item.title
	  );
	};
	
	exports.default = SectionLink;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Flex = __webpack_require__(18);
	
	var _Flex2 = _interopRequireDefault(_Flex);
	
	var _theme = __webpack_require__(3);
	
	var _ScrollSyncSection = __webpack_require__(178);
	
	var _ScrollSyncSection2 = _interopRequireDefault(_ScrollSyncSection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Sidebar = function (_Component) {
	  _inherits(Sidebar, _Component);
	
	  function Sidebar(props, context) {
	    _classCallCheck(this, Sidebar);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    _this.state = {
	      activeSection: props.defaultActiveSection
	    };
	    return _this;
	  }
	
	  Sidebar.prototype.render = function render() {
	    var _ref;
	
	    var _props = this.props,
	        closeParentMenu = _props.closeParentMenu,
	        directory = _props.directory,
	        location = _props.location,
	        sectionList = _props.sectionList;
	    var activeSection = this.state.activeSection;
	
	    return Glamor.createElement(
	      _Flex2.default,
	      {
	        type: 'nav',
	        direction: 'column',
	        halign: 'stretch',
	        css: (_ref = {
	          width: '100%',
	          paddingLeft: 20,
	          position: 'relative'
	
	        }, _ref[_theme.media.greaterThan('largerSidebar')] = {
	          paddingLeft: 40
	        }, _ref[_theme.media.lessThan('small')] = {
	          paddingBottom: 100
	        }, _ref) },
	      sectionList.map(function (section) {
	        return Glamor.createElement(_ScrollSyncSection2.default, {
	          key: section.title,
	          directory: directory,
	          isActive: activeSection === section || sectionList.length === 1,
	          location: location,
	          onLinkClick: closeParentMenu,
	          section: section
	        });
	      })
	    );
	  };
	
	  return Sidebar;
	}(_react.Component);
	
	exports.default = Sidebar;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _theme = __webpack_require__(3);
	
	var _Sidebar = __webpack_require__(181);
	
	var _Sidebar2 = _interopRequireDefault(_Sidebar);
	
	var _ChevronSvg = __webpack_require__(167);
	
	var _ChevronSvg2 = _interopRequireDefault(_ChevronSvg);
	
	var _Container = __webpack_require__(12);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StickyResponsiveSidebar = function (_Component) {
	  _inherits(StickyResponsiveSidebar, _Component);
	
	  function StickyResponsiveSidebar(props) {
	    _classCallCheck(this, StickyResponsiveSidebar);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.handleClickMenu = function () {
	      _this.setState(function (prevState) {
	        return { open: !prevState.open };
	      });
	    };
	
	    _this.closeNavMenu = function () {
	      _this.setState({ open: false });
	    };
	
	    _this.state = {
	      open: false
	    };
	    return _this;
	  }
	
	  // eslint-disable-next-line no-undef
	
	
	  // eslint-disable-next-line no-undef
	
	
	  StickyResponsiveSidebar.prototype.render = function render() {
	    var _ref, _ref2, _ref3, _ref4;
	
	    var open = this.state.open;
	
	    var smallScreenSidebarStyles = {
	      top: 0,
	      left: 0,
	      bottom: 0,
	      right: 0,
	      position: 'fixed',
	      backgroundColor: _theme.colors.white,
	      zIndex: 2,
	      height: '100vh',
	      overflowY: 'auto',
	      WebkitOverflowScrolling: 'touch',
	      pointerEvents: open ? 'auto' : 'none'
	    };
	
	    var smallScreenBottomBarStyles = {
	      display: 'inline-block'
	    };
	
	    var iconOffset = open ? 8 : -4;
	    var menuOpacity = open ? 1 : 0;
	    var menuOffset = open ? 0 : 40;
	
	    // TODO: role and aria props for 'close' button?
	    return Glamor.createElement(
	      'div',
	      null,
	      Glamor.createElement(
	        'div',
	        {
	          style: {
	            opacity: menuOpacity,
	            transition: 'opacity 0.5s ease'
	          },
	          css: (_ref = {}, _ref[_theme.media.lessThan('small')] = smallScreenSidebarStyles, _ref[_theme.media.greaterThan('medium')] = {
	            marginRight: -999,
	            paddingRight: 999,
	            backgroundColor: _theme.colors.menu
	          }, _ref[_theme.media.between('medium', 'sidebarFixed', true)] = {
	            position: 'fixed',
	            zIndex: 2,
	            height: '100%'
	          }, _ref[_theme.media.greaterThan('small')] = {
	            position: 'fixed',
	            zIndex: 2,
	            height: 'calc(100vh - 60px)',
	            overflowY: 'auto',
	            WebkitOverflowScrolling: 'touch',
	            marginRight: -999,
	            paddingRight: 999,
	            backgroundColor: _theme.colors.menu,
	            opacity: '1 !important'
	          }, _ref[_theme.media.size('small')] = {
	            height: 'calc(100vh - 40px)'
	          }, _ref[_theme.media.between('medium', 'large')] = {
	            height: 'calc(100vh - 50px)'
	          }, _ref[_theme.media.greaterThan('sidebarFixed')] = {
	            borderLeft: '1px solid #ececec'
	          }, _ref) },
	        Glamor.createElement(
	          'div',
	          {
	            style: {
	              transform: 'translate(0px, ' + menuOffset + 'px)',
	              transition: 'transform 0.2s ease'
	            },
	            css: (_ref2 = {
	              marginTop: 60
	            }, _ref2[_theme.media.greaterThan('small')] = {
	              transform: 'none !important'
	            }, _ref2) },
	          Glamor.createElement(_Sidebar2.default, _extends({ closeParentMenu: this.closeNavMenu }, this.props))
	        )
	      ),
	      Glamor.createElement(
	        'div',
	        {
	          css: (_ref3 = {
	            backgroundColor: _theme.colors.darker,
	            opacity: 0.5,
	            bottom: '50%', // iOS Safari's inert "bottom 44px"
	            color: _theme.colors.text,
	            display: 'none', // gets overriden at small screen sizes
	            cursor: 'pointer',
	            position: 'fixed',
	            right: 20,
	            zIndex: 3,
	            borderRadius: '50%',
	            border: '1px solid rgba(255, 255, 255, 0.1)',
	            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)'
	          }, _ref3[_theme.media.lessThan('small')] = smallScreenBottomBarStyles, _ref3),
	          onClick: this.handleClickMenu,
	          role: 'button',
	          tabIndex: 0 },
	        Glamor.createElement(
	          _Container2.default,
	          null,
	          Glamor.createElement(
	            'div',
	            {
	              css: (_ref4 = {
	                display: 'flex',
	                flexDirection: 'row',
	                alignItems: 'center',
	                height: 60
	              }, _ref4[_theme.media.between('medium', 'large')] = {
	                height: 50
	              }, _ref4[_theme.media.lessThan('small')] = {
	                height: 60,
	                overflow: 'hidden',
	                alignItems: 'flex-start'
	              }, _ref4) },
	            Glamor.createElement(
	              'div',
	              {
	                css: {
	                  width: 20,
	                  height: 20,
	                  alignSelf: 'center',
	                  display: 'flex',
	                  flexDirection: 'column',
	                  color: _theme.colors.white
	                } },
	              Glamor.createElement(_ChevronSvg2.default, {
	                size: 15,
	                cssProps: {
	                  transform: 'translate(2px, ' + iconOffset + 'px) rotate(180deg)',
	                  transition: 'transform 0.2s ease'
	                }
	              }),
	              Glamor.createElement(_ChevronSvg2.default, {
	                size: 15,
	                cssProps: {
	                  transform: 'translate(2px, ' + (0 - iconOffset) + 'px)',
	                  transition: 'transform 0.2s ease'
	                }
	              })
	            )
	          )
	        )
	      )
	    );
	  };
	
	  return StickyResponsiveSidebar;
	}(_react.Component);
	
	exports.default = StickyResponsiveSidebar;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _reactHelmet = __webpack_require__(41);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _siteConstants = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TitleAndMetaTags = function TitleAndMetaTags(_ref) {
	  var title = _ref.title,
	      ogDescription = _ref.ogDescription,
	      ogUrl = _ref.ogUrl;
	
	  return Glamor.createElement(
	    _reactHelmet2.default,
	    { title: title },
	    Glamor.createElement('meta', { property: 'og:title', content: title }),
	    Glamor.createElement('meta', { property: 'og:type', content: 'website' }),
	    ogUrl && Glamor.createElement('meta', { property: 'og:url', content: ogUrl }),
	    Glamor.createElement('meta', { property: 'og:image', content: '/logo-og.png' }),
	    Glamor.createElement('meta', { property: 'og:description', content: ogDescription || _siteConstants.tagline })
	  );
	};
	
	exports.default = TitleAndMetaTags;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var name = exports.name = 'MicroFeedback';
	var tagline = exports.tagline = 'User feedback delivered straight to your issue tracker';
	var urlRoot = exports.urlRoot = 'https://microfeedback.github.io';
	var githubOrgURL = exports.githubOrgURL = 'https://github.com/MicroFeedback';
	var githubURL = exports.githubURL = 'https://github.com/MicroFeedback/microfeedback.github.io';
	var microfeedbackURL = exports.microfeedbackURL = 'https://microfeedback-github.now.sh/microfeedback/microfeedback.github.io';
	var copyrightOwner = exports.copyrightOwner = 'Steven Loria';
	var copyrightOwnerURL = exports.copyrightOwnerURL = 'https://stevenloria.com';

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	exports.pageQuery = undefined;
	
	var _githubSlugger = __webpack_require__(308);
	
	var _githubSlugger2 = _interopRequireDefault(_githubSlugger);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _MicroFeedbackButtonExamples = __webpack_require__(176);
	
	var _MicroFeedbackButtonExamples2 = _interopRequireDefault(_MicroFeedbackButtonExamples);
	
	var _MarkdownPage = __webpack_require__(175);
	
	var _MarkdownPage2 = _interopRequireDefault(_MarkdownPage);
	
	var _siteConstants = __webpack_require__(6);
	
	var _isItemActive = __webpack_require__(104);
	
	var _isItemActive2 = _interopRequireDefault(_isItemActive);
	
	__webpack_require__(265);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var slugger = new _githubSlugger2.default();
	
	var Docs = function Docs(_ref) {
	  var data = _ref.data,
	      location = _ref.location;
	
	  var sectionList = JSON.parse(data.markdownRemark.fields.sectionList);
	  // Add subitems for current page
	  sectionList.forEach(function (list) {
	    list.items.forEach(function (item) {
	      if ((0, _isItemActive2.default)(location, item)) {
	        item.subitems = data.markdownRemark.headings.filter(function (_ref2) {
	          var value = _ref2.value;
	          return Boolean(value);
	        }).map(function (_ref3) {
	          var value = _ref3.value,
	              depth = _ref3.depth;
	
	          slugger.reset();
	          var id = slugger.slug(value);
	          return {
	            depth: depth,
	            href: data.markdownRemark.fields.slug + '#' + id,
	            id: id,
	            title: value
	          };
	        });
	      } else {
	        item.subitems = [];
	      }
	    });
	  });
	  return [Glamor.createElement(_MarkdownPage2.default, {
	    key: 'content',
	    directory: data.markdownRemark.fields.dir,
	    location: location,
	    markdownRemark: data.markdownRemark,
	    sectionList: sectionList,
	    titlePostfix: ' - ' + _siteConstants.name
	  }), location.pathname === '/ui-components/microfeedback-button' ? Glamor.createElement(_MicroFeedbackButtonExamples2.default, { key: 'examples' }) : false];
	};
	
	Docs.propTypes = {
	  data: _propTypes2.default.object.isRequired
	};
	
	// eslint-disable-next-line no-undef
	var pageQuery = exports.pageQuery = '** extracted graphql fragment **';
	
	exports.default = Docs;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var _header, _container, _content, _sidebar, _gatsbyHighlight, _pFirstChild, _p, _sharedStyles$fluid;
	
	/**
	 *  Variables and functions shared by styles of multiple components.
	 */
	var colors = {
	  dark: '#282c34',
	  darker: '#20232a',
	  text: '#1a1a1a',
	  subtle: '#6d6d6d',
	  subtleOnDark: '#999',
	  divider: '#ececec',
	  note: '#ffe564',
	  white: '#ffffff',
	  black: '#000000',
	  menu: '#f7f7f7',
	  primary: '#3085d6',
	  linkHighlight: 'rgba(187, 239, 253, 0.3)',
	  linkHighlightHover: 'rgba(187, 239, 253, 1)',
	  codeHighlight: 'rgba(255, 229, 100, 0.2)'
	};
	
	var SIZES = {
	  xsmall: { min: 0, max: 599 },
	  small: { min: 600, max: 779 },
	  medium: { min: 780, max: 979 },
	  large: { min: 980, max: 1279 },
	  xlarge: { min: 1280, max: 1339 },
	  xxlarge: { min: 1340, max: Infinity },
	
	  // Sidebar/nav related tweakpoints
	  largerSidebar: { min: 1100, max: 1339 },
	  sidebarFixed: { min: 2000, max: Infinity }
	};
	
	var media = {
	  between: function between(smallKey, largeKey) {
	    var excludeLarge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	    if (excludeLarge) {
	      return '@media (min-width: ' + SIZES[smallKey].min + 'px) and (max-width: ' + (SIZES[largeKey].min - 1) + 'px)';
	    }
	    if (SIZES[largeKey].max === Infinity) {
	      return '@media (min-width: ' + SIZES[smallKey].min + 'px)';
	    }
	    return '@media (min-width: ' + SIZES[smallKey].min + 'px) and (max-width: ' + SIZES[largeKey].max + 'px)';
	  },
	  greaterThan: function greaterThan(key) {
	    return '@media (min-width: ' + SIZES[key].min + 'px)';
	  },
	  lessThan: function lessThan(key) {
	    return '@media (max-width: ' + (SIZES[key].min - 1) + 'px)';
	  },
	  size: function size(key) {
	    var size = SIZES[key];
	
	    if (size.min === null) {
	      return media.lessThan(key);
	    } else if (size.max === null) {
	      return media.greaterThan(key);
	    }
	    return media.between(key, key);
	  }
	};
	
	var systemUIFont = '-apple-system, BlinkMacSystemFont,\n"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",\n"Fira Sans", "Droid Sans", "Helvetica Neue",\nsans-serif';
	
	var headerFont = '\'Raleway\', ' + systemUIFont;
	
	var fonts = {
	  brand: {
	    fontFamily: headerFont,
	    fontWeight: 700
	  }
	};
	
	// Shared styles are generally better as components,
	// Except when they must be used within nested CSS selectors.
	// This is the case for eg markdown content.
	var linkStyle = {
	  backgroundColor: colors.linkHighlight,
	  borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
	  color: colors.text,
	
	  ':hover': {
	    backgroundColor: colors.linkHighlightHover,
	    borderBottomColor: colors.text
	  }
	};
	
	var headerHeight = 50;
	var headerHeightLg = 60;
	
	var sharedStyles = {
	  link: linkStyle,
	  header: (_header = {
	    height: headerHeight
	  }, _header[media.greaterThan('large')] = {
	    height: headerHeightLg
	  }, _header),
	  articleLayout: {
	    container: (_container = {
	      display: 'flex',
	      minHeight: 'calc(100vh - 60px)'
	    }, _container[media.greaterThan('sidebarFixed')] = {
	      maxWidth: 840,
	      marginLeft: 'auto',
	      marginRight: 'auto'
	    }, _container),
	    content: (_content = {
	      marginTop: 30,
	      marginBottom: 120
	
	    }, _content[media.greaterThan('medium')] = {
	      marginTop: 40
	    }, _content),
	    sidebar: (_sidebar = {
	      display: 'flex',
	      flexDirection: 'column'
	
	    }, _sidebar[media.between('small', 'sidebarFixed')] = {
	      borderLeft: '1px solid #ececec',
	      marginLeft: 80
	    }, _sidebar[media.between('small', 'largerSidebar')] = {
	      flex: '0 0 200px',
	      marginLeft: 80
	    }, _sidebar[media.between('small', 'medium')] = {
	      marginLeft: 40
	    }, _sidebar[media.greaterThan('largerSidebar')] = {
	      flex: '0 0 300px'
	    }, _sidebar[media.greaterThan('sidebarFixed')] = {
	      position: 'fixed',
	      right: 0,
	      width: 300,
	      zIndex: 2
	    }, _sidebar),
	
	    editLink: {
	      color: colors.subtle,
	      borderColor: colors.divider,
	      transition: 'all 0.2s ease',
	      transitionPropery: 'color, border-color',
	      whiteSpace: 'nowrap',
	      borderBottomWidth: 1,
	      borderBottomStyle: 'solid',
	
	      ':hover': {
	        color: colors.text,
	        borderColor: colors.text
	      }
	    }
	  },
	
	  markdown: {
	    '& .gatsby-highlight': (_gatsbyHighlight = {
	      marginTop: 25,
	      marginLeft: -30,
	      marginRight: -30,
	      marginBottom: 25,
	      paddingLeft: 15,
	      paddingRight: 15
	
	    }, _gatsbyHighlight[media.lessThan('small')] = {
	      marginLeft: -20,
	      marginRight: -20,
	      borderRadius: 0
	    }, _gatsbyHighlight),
	
	    '& a:not(.anchor):not(.gatsby-resp-image-link)': linkStyle,
	
	    '& > p:first-child': (_pFirstChild = {
	      fontSize: '1.1em',
	      fontWeight: 300,
	      marginBottom: '1.8rem',
	      fontFamily: headerFont,
	      color: colors.subtle
	
	    }, _pFirstChild[media.greaterThan('xlarge')] = {
	      fontSize: '1.3em'
	    }, _pFirstChild['& a, & strong'] = {
	      fontWeight: 400
	    }, _pFirstChild),
	
	    '& p': (_p = {
	      marginTop: 20,
	      maxWidth: '42em',
	
	      '&:first-of-type': {
	        marginTop: 15
	      },
	
	      '&:first-child': {
	        marginTop: 0
	      }
	
	    }, _p[media.lessThan('large')] = {
	      marginTop: 15
	    }, _p),
	
	    '& h3 + p, & h3 + p:first-of-type': {
	      marginTop: 20
	    },
	
	    '& p > code, & li > code': {
	      background: colors.codeHighlight,
	      color: colors.text
	    },
	
	    '& p > code, & li > code, & p > a > code, & li > a > code': {
	      padding: '0 3px',
	      fontSize: '1em',
	      wordBreak: 'break-word'
	    },
	
	    '& hr': {
	      height: 1,
	      marginBottom: -1,
	      border: 'none',
	      borderBottom: '1px solid ' + colors.divider,
	      marginTop: 40,
	
	      ':first-child': {
	        marginTop: 0
	      }
	    },
	
	    '& h2': {
	      borderTop: '1px solid ' + colors.divider,
	      marginTop: 44,
	      paddingTop: 40,
	
	      ':first-child': {
	        borderTop: 0,
	        marginTop: 0,
	        paddingTop: 0
	      }
	    },
	
	    '& hr + h2': {
	      borderTop: 0,
	      marginTop: 0
	    },
	
	    '& h2 + h3, & h2 + h3:first-of-type': {
	      paddingTop: '0.75em'
	    },
	
	    '& ol, & ul': {
	      marginTop: 20,
	      color: colors.text,
	      paddingLeft: 20,
	
	      '& p, & p:first-of-type': {
	        marginTop: 0,
	        lineHeight: 1.2
	      },
	
	      '& li': {
	        marginTop: 15
	      },
	
	      '& ol, & ul': {
	        marginLeft: 20
	      }
	    },
	
	    '& img': {
	      maxWidth: '100%'
	    }
	  }
	};
	
	sharedStyles.fluid = (_sharedStyles$fluid = {
	  minHeight: 'calc(100vh - ' + headerHeight + 'px)',
	  marginTop: 50
	}, _sharedStyles$fluid[media.greaterThan('large')] = {
	  minHeight: 'calc(100vh - ' + headerHeightLg + 'px)',
	  marginTop: 60
	}, _sharedStyles$fluid);
	
	exports.colors = colors;
	exports.fonts = fonts;
	exports.media = media;
	exports.sharedStyles = sharedStyles;

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _siteConstants = __webpack_require__(6);
	
	exports.default = function (slug) {
	  return slug === null ? null : _siteConstants.urlRoot + '/' + slug.replace(/^\//, '');
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _slugify = __webpack_require__(105);
	
	var _slugify2 = _interopRequireDefault(_slugify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Helper method to locate the section containing the current URL/path.
	 * This method specifically works with the nav_*.yml format.
	 */
	var findSectionForPath = function findSectionForPath(pathname, sections) {
	  var activeSection = void 0;
	  var slugId = pathname.split('/').slice(-1)[0];
	  sections.forEach(function (section) {
	    var match = section.items.some(function (item) {
	      return slugId === (0, _slugify2.default)(item.id) || item.subitems && item.subitems.some(function (subitem) {
	        return slugId === (0, _slugify2.default)(subitem.id);
	      });
	    });
	    if (match) {
	      activeSection = section;
	    }
	  });
	
	  return activeSection;
	};
	
	exports.default = findSectionForPath;
	module.exports = exports['default'];

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var isItemActive = function isItemActive(location, item) {
	  var pathname = item.id !== 'index' && location.pathname.endsWith('/') ? location.pathname.substr(0, location.pathname.length - 1) : location.pathname;
	  return item.slug === pathname;
	};
	
	exports.default = isItemActive;
	module.exports = exports['default'];

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _slugify = __webpack_require__(485);
	
	var _slugify2 = _interopRequireDefault(_slugify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (string, directory) {
	  var filename = (0, _slugify2.default)(string);
	  if (filename === 'index') {
	    return directory ? '/' + directory + '/' : '/';
	  }
	  return directory ? '/' + directory + '/' + filename : filename;
	};
	
	module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=component---src-templates-docs-js-cfe427d7ccc111fc1cdd.js.map