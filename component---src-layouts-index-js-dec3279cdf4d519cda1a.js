webpackJsonp([114276838955818,60335399758886],{

/***/ 81:
/***/ (function(module, exports) {

	module.exports = {"layoutContext":{}}

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(183);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _layoutIndex = __webpack_require__(81);
	
	var _layoutIndex2 = _interopRequireDefault(_layoutIndex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return Glamor.createElement(_index2.default, _extends({}, props, _layoutIndex2.default));
	};
	
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (typeof Array.from === 'function' ?
	  Array.from :
	  __webpack_require__(158)
	);


/***/ }),

/***/ 158:
/***/ (function(module, exports) {

	// Production steps of ECMA-262, Edition 6, 22.1.2.1
	// Reference: http://www.ecma-international.org/ecma-262/6.0/#sec-array.from
	module.exports = (function() {
	  var isCallable = function(fn) {
	    return typeof fn === 'function';
	  };
	  var toInteger = function (value) {
	    var number = Number(value);
	    if (isNaN(number)) { return 0; }
	    if (number === 0 || !isFinite(number)) { return number; }
	    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
	  };
	  var maxSafeInteger = Math.pow(2, 53) - 1;
	  var toLength = function (value) {
	    var len = toInteger(value);
	    return Math.min(Math.max(len, 0), maxSafeInteger);
	  };
	  var iteratorProp = function(value) {
	    if(value != null) {
	      if(['string','number','boolean','symbol'].indexOf(typeof value) > -1){
	        return Symbol.iterator;
	      } else if (
	        (typeof Symbol !== 'undefined') &&
	        ('iterator' in Symbol) &&
	        (Symbol.iterator in value)
	      ) {
	        return Symbol.iterator;
	      }
	      // Support "@@iterator" placeholder, Gecko 27 to Gecko 35
	      else if ('@@iterator' in value) {
	        return '@@iterator';
	      }
	    }
	  };
	  var getMethod = function(O, P) {
	    // Assert: IsPropertyKey(P) is true.
	    if (O != null && P != null) {
	      // Let func be GetV(O, P).
	      var func = O[P];
	      // ReturnIfAbrupt(func).
	      // If func is either undefined or null, return undefined.
	      if(func == null) {
	        return void 0;
	      }
	      // If IsCallable(func) is false, throw a TypeError exception.
	      if (!isCallable(func)) {
	        throw new TypeError(func + ' is not a function');
	      }
	      return func;
	    }
	  };
	  var iteratorStep = function(iterator) {
	    // Let result be IteratorNext(iterator).
	    // ReturnIfAbrupt(result).
	    var result = iterator.next();
	    // Let done be IteratorComplete(result).
	    // ReturnIfAbrupt(done).
	    var done = Boolean(result.done);
	    // If done is true, return false.
	    if(done) {
	      return false;
	    }
	    // Return result.
	    return result;
	  };
	
	  // The length property of the from method is 1.
	  return function from(items /*, mapFn, thisArg */ ) {
	    'use strict';
	
	    // 1. Let C be the this value.
	    var C = this;
	
	    // 2. If mapfn is undefined, let mapping be false.
	    var mapFn = arguments.length > 1 ? arguments[1] : void 0;
	
	    var T;
	    if (typeof mapFn !== 'undefined') {
	      // 3. else
	      //   a. If IsCallable(mapfn) is false, throw a TypeError exception.
	      if (!isCallable(mapFn)) {
	        throw new TypeError(
	          'Array.from: when provided, the second argument must be a function'
	        );
	      }
	
	      //   b. If thisArg was supplied, let T be thisArg; else let T
	      //      be undefined.
	      if (arguments.length > 2) {
	        T = arguments[2];
	      }
	      //   c. Let mapping be true (implied by mapFn)
	    }
	
	    var A, k;
	
	    // 4. Let usingIterator be GetMethod(items, @@iterator).
	    // 5. ReturnIfAbrupt(usingIterator).
	    var usingIterator = getMethod(items, iteratorProp(items));
	
	    // 6. If usingIterator is not undefined, then
	    if (usingIterator !== void 0) {
	      // a. If IsConstructor(C) is true, then
	      //   i. Let A be the result of calling the [[Construct]]
	      //      internal method of C with an empty argument list.
	      // b. Else,
	      //   i. Let A be the result of the abstract operation ArrayCreate
	      //      with argument 0.
	      // c. ReturnIfAbrupt(A).
	      A = isCallable(C) ? Object(new C()) : [];
	
	      // d. Let iterator be GetIterator(items, usingIterator).
	      var iterator = usingIterator.call(items);
	
	      // e. ReturnIfAbrupt(iterator).
	      if (iterator == null) {
	        throw new TypeError(
	          'Array.from requires an array-like or iterable object'
	        );
	      }
	
	      // f. Let k be 0.
	      k = 0;
	
	      // g. Repeat
	      var next, nextValue;
	      while (true) {
	        // i. Let Pk be ToString(k).
	        // ii. Let next be IteratorStep(iterator).
	        // iii. ReturnIfAbrupt(next).
	        next = iteratorStep(iterator);
	
	        // iv. If next is false, then
	        if (!next) {
	
	          // 1. Let setStatus be Set(A, "length", k, true).
	          // 2. ReturnIfAbrupt(setStatus).
	          A.length = k;
	
	          // 3. Return A.
	          return A;
	        }
	        // v. Let nextValue be IteratorValue(next).
	        // vi. ReturnIfAbrupt(nextValue)
	        nextValue = next.value;
	
	        // vii. If mapping is true, then
	        //   1. Let mappedValue be Call(mapfn, T, «nextValue, k»).
	        //   2. If mappedValue is an abrupt completion, return
	        //      IteratorClose(iterator, mappedValue).
	        //   3. Let mappedValue be mappedValue.[[value]].
	        // viii. Else, let mappedValue be nextValue.
	        // ix.  Let defineStatus be the result of
	        //      CreateDataPropertyOrThrow(A, Pk, mappedValue).
	        // x. [TODO] If defineStatus is an abrupt completion, return
	        //    IteratorClose(iterator, defineStatus).
	        if (mapFn) {
	          A[k] = mapFn.call(T, nextValue, k);
	        }
	        else {
	          A[k] = nextValue;
	        }
	        // xi. Increase k by 1.
	        k++;
	      }
	      // 7. Assert: items is not an Iterable so assume it is
	      //    an array-like object.
	    } else {
	
	      // 8. Let arrayLike be ToObject(items).
	      var arrayLike = Object(items);
	
	      // 9. ReturnIfAbrupt(items).
	      if (items == null) {
	        throw new TypeError(
	          'Array.from requires an array-like object - not null or undefined'
	        );
	      }
	
	      // 10. Let len be ToLength(Get(arrayLike, "length")).
	      // 11. ReturnIfAbrupt(len).
	      var len = toLength(arrayLike.length);
	
	      // 12. If IsConstructor(C) is true, then
	      //     a. Let A be Construct(C, «len»).
	      // 13. Else
	      //     a. Let A be ArrayCreate(len).
	      // 14. ReturnIfAbrupt(A).
	      A = isCallable(C) ? Object(new C(len)) : new Array(len);
	
	      // 15. Let k be 0.
	      k = 0;
	      // 16. Repeat, while k < len… (also steps a - h)
	      var kValue;
	      while (k < len) {
	        kValue = arrayLike[k];
	        if (mapFn) {
	          A[k] = mapFn.call(T, kValue, k);
	        }
	        else {
	          A[k] = kValue;
	        }
	        k++;
	      }
	      // 17. Let setStatus be Set(A, "length", len, true).
	      // 18. ReturnIfAbrupt(setStatus).
	      A.length = len;
	      // 19. Return A.
	    }
	    return A;
	  };
	})();


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

/***/ 486:
/***/ (function(module, exports) {

	/*! https://mths.be/includes v0.2.0 by @mathias */
	if (!String.prototype.includes) {
		(function() {
			'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
			var toString = {}.toString;
			var defineProperty = (function() {
				// IE 8 only supports `Object.defineProperty` on DOM elements
				try {
					var object = {};
					var $defineProperty = Object.defineProperty;
					var result = $defineProperty(object, object, object) && $defineProperty;
				} catch(error) {}
				return result;
			}());
			var indexOf = ''.indexOf;
			var includes = function(search) {
				if (this == null) {
					throw TypeError();
				}
				var string = String(this);
				if (search && toString.call(search) == '[object RegExp]') {
					throw TypeError();
				}
				var stringLength = string.length;
				var searchString = String(search);
				var searchLength = searchString.length;
				var position = arguments.length > 1 ? arguments[1] : undefined;
				// `ToInteger`
				var pos = position ? Number(position) : 0;
				if (pos != pos) { // better `isNaN`
					pos = 0;
				}
				var start = Math.min(Math.max(pos, 0), stringLength);
				// Avoid the `indexOf` call if no match is possible
				if (searchLength + start > stringLength) {
					return false;
				}
				return indexOf.call(string, searchString, pos) != -1;
			};
			if (defineProperty) {
				defineProperty(String.prototype, 'includes', {
					'value': includes,
					'configurable': true,
					'writable': true
				});
			} else {
				String.prototype.includes = includes;
			}
		}());
	}


/***/ }),

/***/ 487:
/***/ (function(module, exports) {

	/*! http://mths.be/repeat v0.2.0 by @mathias */
	if (!String.prototype.repeat) {
		(function() {
			'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
			var defineProperty = (function() {
				// IE 8 only supports `Object.defineProperty` on DOM elements
				try {
					var object = {};
					var $defineProperty = Object.defineProperty;
					var result = $defineProperty(object, object, object) && $defineProperty;
				} catch(error) {}
				return result;
			}());
			var repeat = function(count) {
				if (this == null) {
					throw TypeError();
				}
				var string = String(this);
				// `ToInteger`
				var n = count ? Number(count) : 0;
				if (n != n) { // better `isNaN`
					n = 0;
				}
				// Account for out-of-bounds indices
				if (n < 0 || n == Infinity) {
					throw RangeError();
				}
				var result = '';
				while (n) {
					if (n % 2 == 1) {
						result += string;
					}
					if (n > 1) {
						string += string;
					}
					n >>= 1;
				}
				return result;
			};
			if (defineProperty) {
				defineProperty(String.prototype, 'repeat', {
					'value': repeat,
					'configurable': true,
					'writable': true
				});
			} else {
				String.prototype.repeat = repeat;
			}
		}());
	}


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

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ExternalLinkSvg = function ExternalLinkSvg(_ref) {
	  var _ref$cssProps = _ref.cssProps,
	      cssProps = _ref$cssProps === undefined ? {} : _ref$cssProps;
	  return Glamor.createElement(
	    "svg",
	    {
	      x: "0px",
	      y: "0px",
	      viewBox: "0 0 100 100",
	      width: 15,
	      height: 15,
	      css: cssProps },
	    Glamor.createElement("path", {
	      fill: "currentColor",
	      d: "\n      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,\n      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\n    "
	    }),
	    Glamor.createElement("polygon", {
	      fill: "currentColor",
	      points: "\n      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,\n      14.9 62.8,22.9 71.5,22.9\n      "
	    })
	  );
	};
	
	exports.default = ExternalLinkSvg;
	module.exports = exports["default"];
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

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _theme = __webpack_require__(3);
	
	var _ExternalLinkSvg = __webpack_require__(102);
	
	var _ExternalLinkSvg2 = _interopRequireDefault(_ExternalLinkSvg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ExternalFooterLink = function ExternalFooterLink(_ref) {
	  var children = _ref.children,
	      href = _ref.href,
	      target = _ref.target,
	      rel = _ref.rel;
	  return Glamor.createElement(
	    'a',
	    {
	      css: {
	        lineHeight: 2,
	        ':hover': {
	          color: _theme.colors.primary
	        }
	      },
	      href: href,
	      target: target,
	      rel: rel },
	    children,
	    Glamor.createElement(_ExternalLinkSvg2.default, {
	      cssProps: {
	        verticalAlign: -2,
	        display: 'inline-block',
	        marginLeft: 5,
	        color: _theme.colors.subtle
	      }
	    })
	  );
	};
	
	exports.default = ExternalFooterLink;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _gatsbyLink = __webpack_require__(23);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _theme = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FooterLink = function FooterLink(_ref) {
	  var children = _ref.children,
	      target = _ref.target,
	      to = _ref.to;
	  return Glamor.createElement(
	    _gatsbyLink2.default,
	    {
	      css: {
	        lineHeight: 2,
	        ':hover': {
	          color: _theme.colors.primary
	        }
	      },
	      to: to,
	      target: target },
	    children
	  );
	};
	
	exports.default = FooterLink;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _theme = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FooterNav = function FooterNav(_ref) {
	  var _ref2;
	
	  var children = _ref.children;
	  return Glamor.createElement(
	    'div',
	    {
	      css: (_ref2 = {
	        display: 'flex',
	        flexDirection: 'column',
	        alignItems: 'flex-start',
	        width: '50%',
	        paddingTop: 40
	
	      }, _ref2[_theme.media.size('sidebarFixed')] = {
	        paddingTop: 0,
	        width: '25%'
	      }, _ref2) },
	    Glamor.createElement(
	      'div',
	      {
	        css: {
	          display: 'inline-flex',
	          flexDirection: 'column'
	        } },
	      children
	    )
	  );
	};
	
	exports.default = FooterNav;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Container = __webpack_require__(12);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _MetaTitle = __webpack_require__(63);
	
	var _MetaTitle2 = _interopRequireDefault(_MetaTitle);
	
	var _theme = __webpack_require__(3);
	
	var _navSections = __webpack_require__(103);
	
	var _navSections2 = _interopRequireDefault(_navSections);
	
	var _siteConstants = __webpack_require__(6);
	
	var _FooterLink = __webpack_require__(169);
	
	var _FooterLink2 = _interopRequireDefault(_FooterLink);
	
	var _FooterNav = __webpack_require__(170);
	
	var _FooterNav2 = _interopRequireDefault(_FooterNav);
	
	var _ExternalFooterLink = __webpack_require__(168);
	
	var _ExternalFooterLink2 = _interopRequireDefault(_ExternalFooterLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Footer = function Footer(_ref) {
	  var _ref2, _ref3, _ref4, _ref5;
	
	  var _ref$layoutHasSidebar = _ref.layoutHasSidebar,
	      layoutHasSidebar = _ref$layoutHasSidebar === undefined ? false : _ref$layoutHasSidebar;
	  return Glamor.createElement(
	    'footer',
	    {
	      css: (_ref2 = {
	        backgroundColor: _theme.colors.darker,
	        color: _theme.colors.white,
	        paddingTop: 10,
	        paddingBottom: 50
	
	      }, _ref2[_theme.media.size('sidebarFixed')] = {
	        paddingTop: 40
	      }, _ref2) },
	    Glamor.createElement(
	      _Container2.default,
	      null,
	      Glamor.createElement(
	        'div',
	        {
	          css: (_ref3 = {
	            display: 'flex',
	            flexDirection: 'row',
	            flexWrap: 'wrap'
	
	          }, _ref3[_theme.media.between('small', 'medium')] = {
	            paddingRight: layoutHasSidebar ? 240 : null
	          }, _ref3[_theme.media.between('large', 'largerSidebar')] = {
	            paddingRight: layoutHasSidebar ? 280 : null
	          }, _ref3[_theme.media.between('largerSidebar', 'sidebarFixed', true)] = {
	            paddingRight: layoutHasSidebar ? 380 : null
	          }, _ref3) },
	        Glamor.createElement(
	          'div',
	          {
	            css: (_ref4 = {
	              flexWrap: 'wrap',
	              display: 'flex'
	
	            }, _ref4[_theme.media.lessThan('large')] = {
	              width: '100%'
	            }, _ref4[_theme.media.greaterThan('xlarge')] = {
	              width: 'calc(100% / 3 * 2)',
	              paddingLeft: 40
	            }, _ref4) },
	          Glamor.createElement(
	            _FooterNav2.default,
	            { layoutHasSidebar: layoutHasSidebar },
	            Glamor.createElement(
	              _MetaTitle2.default,
	              { onDark: true },
	              'Docs'
	            ),
	            _navSections2.default.map(function (section) {
	              var url = section[0];
	              var title = section[1];
	              return Glamor.createElement(
	                _FooterLink2.default,
	                { key: url, to: url },
	                title
	              );
	            })
	          ),
	          Glamor.createElement(
	            _FooterNav2.default,
	            { layoutHasSidebar: layoutHasSidebar },
	            Glamor.createElement(
	              _MetaTitle2.default,
	              { onDark: true },
	              'Useful links'
	            ),
	            Glamor.createElement(
	              _ExternalFooterLink2.default,
	              {
	                href: _siteConstants.githubOrgURL,
	                target: '_blank',
	                rel: 'noopener' },
	              'MicroFeedback on GitHub'
	            ),
	            Glamor.createElement(
	              _ExternalFooterLink2.default,
	              { href: _siteConstants.githubURL, target: '_blank', rel: 'noopener' },
	              'Website Source'
	            )
	          ),
	          Glamor.createElement(_FooterNav2.default, { layoutHasSidebar: layoutHasSidebar })
	        ),
	        Glamor.createElement(
	          'section',
	          {
	            css: (_ref5 = {
	              paddingTop: 40,
	              display: 'block !important' }, _ref5[_theme.media.greaterThan('xlarge')] = {
	              width: 'calc(100% / 3)',
	              order: -1
	            }, _ref5[_theme.media.greaterThan('large')] = {
	              order: -1,
	              width: layoutHasSidebar ? null : 'calc(100% / 3)'
	            }, _ref5[_theme.media.lessThan('large')] = {
	              textAlign: 'center',
	              width: '100%',
	              paddingTop: 40
	            }, _ref5) },
	          Glamor.createElement(
	            'p',
	            {
	              css: {
	                color: _theme.colors.subtleOnDark,
	                paddingTop: 15,
	                fontSize: '0.875em'
	              } },
	            'Copyright \xA9 ',
	            new Date().getFullYear() + ' ',
	            Glamor.createElement(
	              'a',
	              {
	                css: {
	                  ':hover': {
	                    color: _theme.colors.primary
	                  }
	                },
	                href: _siteConstants.copyrightOwnerURL,
	                target: '_blank',
	                rel: 'noopener noreferrer'
	              },
	              _siteConstants.copyrightOwner
	            )
	          )
	        )
	      )
	    )
	  );
	};
	
	exports.default = Footer;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _style, _activeStyle, _activeAfterStyle;
	
	var _gatsbyLink = __webpack_require__(23);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _theme = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var style = (_style = {
	  display: 'flex',
	  flexDirection: 'row',
	  alignItems: 'center',
	  color: _theme.colors.text,
	  textAlign: 'center',
	  transition: 'color 0.2s ease-out',
	  paddingLeft: 15,
	  paddingRight: 15,
	  fontWeight: 300,
	  ':hover': {
	    color: _theme.colors.primary
	  },
	  ':focus': {
	    outline: 0,
	    backgroundColor: _theme.colors.menu,
	    color: _theme.colors.subtle
	  }
	
	}, _style[_theme.media.size('xsmall')] = {
	  paddingLeft: 8,
	  paddingRight: 8
	}, _style[_theme.media.between('small', 'medium')] = {
	  paddingLeft: 10,
	  paddingRight: 10
	}, _style[_theme.media.lessThan('small')] = {
	  fontSize: '4vw'
	}, _style[_theme.media.greaterThan('xlarge')] = {
	  paddingLeft: 20,
	  paddingRight: 20,
	  fontSize: 18
	}, _style);
	
	var activeStyle = (_activeStyle = {
	  color: _theme.colors.text
	
	}, _activeStyle[_theme.media.greaterThan('small')] = {
	  position: 'relative'
	}, _activeStyle);
	
	var activeAfterStyle = (_activeAfterStyle = {}, _activeAfterStyle[_theme.media.greaterThan('small')] = {
	  position: 'absolute',
	  bottom: -1,
	  height: 4,
	  background: _theme.colors.text,
	  left: 0,
	  right: 0,
	  zIndex: 1
	}, _activeAfterStyle);
	
	var HeaderLink = function HeaderLink(_ref) {
	  var isActive = _ref.isActive,
	      title = _ref.title,
	      to = _ref.to;
	  return Glamor.createElement(
	    _gatsbyLink2.default,
	    { css: [style, isActive && activeStyle], to: to },
	    title,
	    isActive && Glamor.createElement('span', { css: activeAfterStyle })
	  );
	};
	
	exports.default = HeaderLink;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(23);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _Container = __webpack_require__(12);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _ExternalLinkSvg = __webpack_require__(102);
	
	var _ExternalLinkSvg2 = _interopRequireDefault(_ExternalLinkSvg);
	
	var _logo = __webpack_require__(492);
	
	var _logo2 = _interopRequireDefault(_logo);
	
	var _theme = __webpack_require__(3);
	
	var _siteConstants = __webpack_require__(6);
	
	var _navSections = __webpack_require__(103);
	
	var _navSections2 = _interopRequireDefault(_navSections);
	
	var _HeaderLink = __webpack_require__(172);
	
	var _HeaderLink2 = _interopRequireDefault(_HeaderLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PAD = 30;
	
	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);
	
	  function Header(props, context) {
	    _classCallCheck(this, Header);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleScroll = function () {
	      _this.setState({ topOfPage: window.scrollY < PAD });
	    };
	
	    var topOfPage = void 0;
	    if (typeof window === 'undefined') {
	      topOfPage = false;
	    } else {
	      topOfPage = window.scrollY < PAD;
	    }
	    _this.state = {
	      topOfPage: topOfPage
	    };
	    return _this;
	  }
	
	  Header.prototype.componentDidMount = function componentDidMount() {
	    var disappearingBorder = this.props.disappearingBorder;
	
	    if (disappearingBorder) {
	      window.addEventListener('scroll', this.handleScroll);
	    }
	  };
	
	  Header.prototype.componentWillUnmount = function componentWillUnmount() {
	    var disappearingBorder = this.props.disappearingBorder;
	
	    if (disappearingBorder) {
	      window.removeEventListener('scroll', this.handleScroll);
	    }
	  };
	  // eslint-disable-next-line no-undef
	
	
	  Header.prototype.render = function render() {
	    var _ref, _extends2, _ref2, _ref3;
	
	    var _props = this.props,
	        location = _props.location,
	        disappearingBorder = _props.disappearingBorder;
	    var topOfPage = this.state.topOfPage;
	
	    var showBoxShadow = disappearingBorder ? !topOfPage : true;
	    return Glamor.createElement(
	      'header',
	      {
	        css: [{
	          backgroundColor: _theme.colors.white,
	          color: _theme.colors.black,
	          position: 'fixed',
	          zIndex: 1,
	          width: '100%',
	          top: 0,
	          left: 0
	        }, showBoxShadow && { boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px' }] },
	      Glamor.createElement(
	        _Container2.default,
	        null,
	        Glamor.createElement(
	          'div',
	          {
	            css: _extends({
	              display: 'flex',
	              flexDirection: 'row',
	              alignItems: 'center'
	            }, _theme.sharedStyles.header) },
	          Glamor.createElement(
	            _gatsbyLink2.default,
	            {
	              css: (_ref = {
	                display: 'flex',
	                marginRight: 10,
	                height: '100%',
	                alignItems: 'center',
	                color: _theme.colors.text,
	
	                ':focus': {
	                  outline: 0
	                },
	
	                ':hover': {
	                  color: _theme.colors.primary
	                }
	
	              }, _ref[_theme.media.lessThan('small')] = {
	                flex: '0 0 auto'
	              }, _ref),
	              to: '/' },
	            Glamor.createElement('img', {
	              css: { marginBottom: 0 },
	              src: _logo2.default,
	              alt: 'MicroFeedback logo',
	              height: '30'
	            }),
	            Glamor.createElement(
	              'span',
	              {
	                css: _extends((_extends2 = {
	                  color: 'inherit',
	                  marginLeft: 10,
	                  fontWeight: 700,
	                  fontSize: 20,
	                  lineHeight: '20px'
	                }, _extends2[_theme.media.lessThan('large')] = {
	                  fontSize: 16,
	                  marginTop: 1
	                }, _extends2[_theme.media.lessThan('small')] = {
	                  // Visually hidden
	                  position: 'absolute',
	                  overflow: 'hidden',
	                  clip: 'rect(0 0 0 0)',
	                  height: 1,
	                  width: 1,
	                  margin: -1,
	                  padding: 0,
	                  border: 0
	                }, _extends2), _theme.fonts.brand) },
	              _siteConstants.name
	            )
	          ),
	          Glamor.createElement(
	            'nav',
	            {
	              css: (_ref2 = {
	                display: 'flex',
	                flexDirection: 'row',
	                alignItems: 'stretch',
	                overflowX: 'auto',
	                overflowY: 'hidden',
	                WebkitOverflowScrolling: 'touch',
	                height: '100%',
	                width: '60%'
	
	              }, _ref2[_theme.media.size('xsmall')] = {
	                flexGrow: '1',
	                width: 'auto'
	              }, _ref2[_theme.media.greaterThan('xlarge')] = {
	                width: null
	              }, _ref2) },
	            _navSections2.default.map(function (section) {
	              var url = section[0];
	              var title = section[1];
	              return Glamor.createElement(_HeaderLink2.default, {
	                key: url,
	                isActive: location.pathname.includes(url),
	                title: title,
	                to: url
	              });
	            })
	          ),
	          Glamor.createElement(
	            'div',
	            {
	              css: (_ref3 = {}, _ref3[_theme.media.lessThan('medium')] = {
	                display: 'none'
	              }, _ref3[_theme.media.greaterThan('large')] = {
	                width: 'calc(100% / 6)'
	              }, _ref3) },
	            Glamor.createElement(
	              'a',
	              {
	                css: {
	                  padding: '5px 10px',
	                  marginLeft: 10,
	                  whiteSpace: 'nowrap',
	                  float: 'right',
	                  fontSize: '0.824em',
	
	                  ':hover': {
	                    color: _theme.colors.primary
	                  },
	
	                  ':focus': {
	                    outline: 0,
	                    backgroundColor: _theme.colors.menu,
	                    borderRadius: 15
	                  }
	                },
	                href: _siteConstants.githubOrgURL,
	                target: '_blank',
	                rel: 'noopener noreferrer' },
	              'GitHub',
	              Glamor.createElement(_ExternalLinkSvg2.default, {
	                cssProps: {
	                  marginLeft: 5,
	                  verticalAlign: -2,
	                  color: _theme.colors.subtle
	                }
	              })
	            )
	          )
	        )
	      )
	    );
	  };
	
	  return Header;
	}(_react2.default.Component);
	
	exports.default = Header;
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

/***/ 266:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Glamor) {'use strict';
	
	exports.__esModule = true;
	
	__webpack_require__(157);
	
	__webpack_require__(486);
	
	__webpack_require__(487);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Flex = __webpack_require__(18);
	
	var _Flex2 = _interopRequireDefault(_Flex);
	
	var _Footer = __webpack_require__(171);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Header = __webpack_require__(173);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _siteConstants = __webpack_require__(6);
	
	__webpack_require__(186);
	
	__webpack_require__(266);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Polyfills for IE
	
	
	// Import global styles
	
	
	var microfeedback = void 0;
	if (typeof window !== 'undefined') {
	  microfeedback = __webpack_require__(95);
	}
	
	var Template = function (_Component) {
	  _inherits(Template, _Component);
	
	  function Template() {
	    _classCallCheck(this, Template);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Template.prototype.componentDidMount = function componentDidMount() {
	    this.microfeedback = microfeedback({
	      url: _siteConstants.microfeedbackURL
	    });
	  };
	
	  Template.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.microfeedback.destroy();
	  };
	
	  Template.prototype.render = function render() {
	    var _props = this.props,
	        children = _props.children,
	        location = _props.location;
	
	    var layoutHasSidebar = location.pathname !== '/';
	
	    return Glamor.createElement(
	      'div',
	      {
	        css: {
	          display: 'flex',
	          flexDirection: 'column'
	        } },
	      Glamor.createElement(_Header2.default, { location: location, disappearingBorder: !layoutHasSidebar }),
	      Glamor.createElement(
	        _Flex2.default,
	        {
	          direction: 'column',
	          shrink: '0',
	          grow: '1',
	          valign: 'stretch',
	          css: {
	            flex: '1 0 auto'
	          } },
	        children()
	      ),
	      Glamor.createElement(_Footer2.default, { layoutHasSidebar: layoutHasSidebar })
	    );
	  };
	
	  return Template;
	}(_react.Component);
	
	exports.default = Template;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiAQ8BJyry5zhLAAAEaElEQVRYw7WYS0xcVRjHf3Pv5ZYJFGFGHgMzdBAmChg1aQcxODStBowFahtAV5Cy0WA0rjouTBOxXTSFBKyhxiaaYOPCpIzBSmJjMIKNRsUYwkNjWxpY9EGtmBYGpswcF5eBmemdJ/Q7m/v48v9/53znfI8DD1kMiamdYS9DLLIEZJDNYUZ4Yzv4u7HQhpM8AMbkE+oJdUwGyMNJGwV0x0FQov0QvMXLdHEdh/qnLasyrcJnP5gbSIeeldwF9Zpx2jDlmB/wnWeYYWppTc5yN1AFuIrsHSaPcU7xSYKQIQnFZ5wzeewdriJN82ji4GepoxmoLbS6M6dkPyL6kP2ZU1Z3bSE0U8fZROB7seKkTylryRqXBAkMSWSNl7X0KU6s9MaDPwk4qDdbetR7iYAHh3rP0lNvdgCnYlsPxdQUmz2J2R4+D7Onpti2jhJl7a04qCnOuWhIGh6BMAjTxZpiB9YwX8ibj6soFJonzvx7QCS35TZkpXSppPI7xXuVKw8SHGWZRuV81+0jqcIDrD6xpHSO3Aw0cCn8hwZa1pKca/XdXdYC8GX4DP4BSguv9C/v2oL5APjVtdJnL+TfXeOX0M/DgNWdyt7R+2Z1a4gb0k01rqLMyeTALeKIeF3o7bjMKVfRc6Fh0ALYO2IHhdChiKfF+2JCCHFOl0D22zugYJOgneOqaTAx8EdEg/hcXBeaDAj9M2PyfKC2AevhepoZm3dPfAc+xgFa2Y0xrqZ399c2ETwM/eRR1qT4YtmdLmpEr7gsIiXaDBRfWVMeH2szqOUWaeWBtGjW5PMir+IiO4nNGkjzVtwa2q8RXAB8JQEdtR08zkEO82T0xBeNAJ8dBgEJFhmT/bl6avv4lC6eSRoewJ87Ji9qBEuMyoF0PaXv6eAYf7CWAkEgfVRegtjGrTLBBJ/wAq8l6YNNkSCDvX7JG/lDppOP2AXc5AtaaaAvJAgnALxS68/QCLJ53i/fjlQw0sablK+/rXCJd6jjbcbwJkQgL7j82RrBK4A6K0UoGBD4I75d5TSNtHCOG3EXRr0GTZoPRsjDOCPdj34SQuU/vuFbKjnEIZ5CikZw3zidxw/BVydVpca58LO4U/wk1sRLMU53QdRoijDOVZU6gfVdVIFj/vJvXlvkIkkxa+MbfIYB/QRrHG+c/5tfg6964XqHGBB/iT0ppU0tXFs2+fQTjknYhJwSQeaUq6g6vO5ONWXqp9HQlLme9HOA3Nk7+1YtbFl2/l7+bv7d5fCkv/1lywPOd9NMn2Lp2doyScLS06c049abWh1O6s1mT2qVKQJhEGZPvdlJnf7aBYtfU8rFb45O8RsmvYBtS+V7McRuQk6x1QbkZLxNprVQHz6sFkrzRUgTOBm3CZxMsgkMbtqQNnYwahs7GL+NjRoug434zxxXh2x3Kr3lvhL/owEjSCvygjprnDFNNc2/56vmGMOcTvROIlK6sdC+cZXwY8RVQjuWuFcJCRL3s5+vQi5DGhilMzWbt1v+B1Sd+FLL6YdPAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTE0VDE3OjM5OjQyKzA4OjAwFKXjigAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0xNFQxNzozOTo0MiswODowMGX4WzYAAAAASUVORK5CYII="

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = [['/getting-started/', 'Getting Started'], ['/backends/', 'Backends'], ['/ui-components/', 'UI Components']];
	module.exports = exports['default'];

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _glamor = __webpack_require__(77);
	
	var _theme = __webpack_require__(3);
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * @emails react-core
	 * 
	 */
	
	var prismColors = {
	  char: '#D8DEE9',
	  comment: '#999999',
	  keyword: '#c5a5c5',
	  lineHighlight: '#14161a',
	  primitive: '#5a9bcf',
	  string: '#8dc891',
	  variable: '#d7deea',
	  boolean: '#ff8b50',
	  punctuation: '#5FB3B3',
	  tag: '#fc929e',
	  function: '#79b6f2',
	  className: '#FAC863',
	  method: '#6699CC',
	  operator: '#fc929e'
	};
	
	_glamor.css.global('.gatsby-highlight', {
	  background: _theme.colors.dark,
	  color: _theme.colors.white,
	  borderRadius: 10,
	  overflow: 'auto',
	  tabSize: '1.5em'
	});
	
	_glamor.css.global('\n.gatsby-highlight code[class*="gatsby-code-"],\n.gatsby-highlight pre[class*="gatsby-code-"],\n.gatsby-highlight pre.prism-code', {
	  height: 'auto !important',
	  margin: '1rem',
	  fontSize: 14,
	  lineHeight: '20px',
	  whiteSpace: 'pre-wrap',
	  wordBreak: 'break-word'
	});
	
	_glamor.css.global('.gatsby-highlight + .gatsby-highlight', {
	  marginTop: 20
	});
	
	_glamor.css.global('.gatsby-highlight-code-line', {
	  backgroundColor: prismColors.lineHighlight,
	  display: 'block',
	  margin: '-0.125rem calc(-1rem - 15px)',
	  padding: '0.125rem calc(1rem + 15px)'
	});
	
	_glamor.css.global('.token.attr-name', {
	  color: prismColors.keyword
	});
	
	_glamor.css.global('\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata', {
	  color: prismColors.comment
	});
	
	_glamor.css.global('\n.token.property,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol,\n.token.deleted', {
	  color: prismColors.primitive
	});
	
	_glamor.css.global('.token.boolean', {
	  color: prismColors.boolean
	});
	
	_glamor.css.global('.token.tag', {
	  color: prismColors.tag
	});
	
	_glamor.css.global('.token.string', {
	  color: prismColors.string
	});
	
	_glamor.css.global('.token.punctuation', {
	  color: prismColors.punctuation
	});
	
	_glamor.css.global('\n.token.selector,\n.token.char,\n.token.builtin,\n.token.inserted', {
	  color: prismColors.char
	});
	
	_glamor.css.global('.token.function', {
	  color: prismColors.function
	});
	
	_glamor.css.global('\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable', {
	  color: prismColors.variable
	});
	
	_glamor.css.global('.token.attr-value', {
	  color: prismColors.string
	});
	
	_glamor.css.global('.token.keyword', {
	  color: prismColors.keyword
	});
	
	_glamor.css.global('\n.token.atrule,\n.token.class-name', {
	  color: prismColors.className
	});
	
	_glamor.css.global('.token.important', {
	  fontWeight: 400
	});
	
	_glamor.css.global('.token.bold', {
	  fontWeight: 700
	});
	_glamor.css.global('.token.italic', {
	  fontStyle: 'italic'
	});
	
	_glamor.css.global('.token.entity', {
	  cursor: 'help'
	});
	
	_glamor.css.global('.namespace', {
	  opacity: 0.7
	});

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

/***/ })

});
//# sourceMappingURL=component---src-layouts-index-js-dec3279cdf4d519cda1a.js.map