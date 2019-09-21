(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.datav = {}),global.React));
}(this, (function (exports,React) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var reactIs_production_min = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
	60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118;function x(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function y(a){return x(a)===m}exports.typeOf=x;exports.AsyncMode=l;
	exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
	exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w)};exports.isAsyncMode=function(a){return y(a)||x(a)===l};exports.isConcurrentMode=y;exports.isContextConsumer=function(a){return x(a)===k};exports.isContextProvider=function(a){return x(a)===h};
	exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return x(a)===n};exports.isFragment=function(a){return x(a)===e};exports.isLazy=function(a){return x(a)===t};exports.isMemo=function(a){return x(a)===r};exports.isPortal=function(a){return x(a)===d};exports.isProfiler=function(a){return x(a)===g};exports.isStrictMode=function(a){return x(a)===f};exports.isSuspense=function(a){return x(a)===p};
	});

	unwrapExports(reactIs_production_min);
	var reactIs_production_min_1 = reactIs_production_min.typeOf;
	var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
	var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
	var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
	var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
	var reactIs_production_min_6 = reactIs_production_min.Element;
	var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
	var reactIs_production_min_8 = reactIs_production_min.Fragment;
	var reactIs_production_min_9 = reactIs_production_min.Lazy;
	var reactIs_production_min_10 = reactIs_production_min.Memo;
	var reactIs_production_min_11 = reactIs_production_min.Portal;
	var reactIs_production_min_12 = reactIs_production_min.Profiler;
	var reactIs_production_min_13 = reactIs_production_min.StrictMode;
	var reactIs_production_min_14 = reactIs_production_min.Suspense;
	var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
	var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
	var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
	var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
	var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
	var reactIs_production_min_20 = reactIs_production_min.isElement;
	var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
	var reactIs_production_min_22 = reactIs_production_min.isFragment;
	var reactIs_production_min_23 = reactIs_production_min.isLazy;
	var reactIs_production_min_24 = reactIs_production_min.isMemo;
	var reactIs_production_min_25 = reactIs_production_min.isPortal;
	var reactIs_production_min_26 = reactIs_production_min.isProfiler;
	var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
	var reactIs_production_min_28 = reactIs_production_min.isSuspense;

	var reactIs_development = createCommonjsModule(function (module, exports) {
	});

	unwrapExports(reactIs_development);
	var reactIs_development_1 = reactIs_development.typeOf;
	var reactIs_development_2 = reactIs_development.AsyncMode;
	var reactIs_development_3 = reactIs_development.ConcurrentMode;
	var reactIs_development_4 = reactIs_development.ContextConsumer;
	var reactIs_development_5 = reactIs_development.ContextProvider;
	var reactIs_development_6 = reactIs_development.Element;
	var reactIs_development_7 = reactIs_development.ForwardRef;
	var reactIs_development_8 = reactIs_development.Fragment;
	var reactIs_development_9 = reactIs_development.Lazy;
	var reactIs_development_10 = reactIs_development.Memo;
	var reactIs_development_11 = reactIs_development.Portal;
	var reactIs_development_12 = reactIs_development.Profiler;
	var reactIs_development_13 = reactIs_development.StrictMode;
	var reactIs_development_14 = reactIs_development.Suspense;
	var reactIs_development_15 = reactIs_development.isValidElementType;
	var reactIs_development_16 = reactIs_development.isAsyncMode;
	var reactIs_development_17 = reactIs_development.isConcurrentMode;
	var reactIs_development_18 = reactIs_development.isContextConsumer;
	var reactIs_development_19 = reactIs_development.isContextProvider;
	var reactIs_development_20 = reactIs_development.isElement;
	var reactIs_development_21 = reactIs_development.isForwardRef;
	var reactIs_development_22 = reactIs_development.isFragment;
	var reactIs_development_23 = reactIs_development.isLazy;
	var reactIs_development_24 = reactIs_development.isMemo;
	var reactIs_development_25 = reactIs_development.isPortal;
	var reactIs_development_26 = reactIs_development.isProfiler;
	var reactIs_development_27 = reactIs_development.isStrictMode;
	var reactIs_development_28 = reactIs_development.isSuspense;

	var reactIs = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_production_min;
	}
	});

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	function randomExtend(minNum, maxNum) {
	  if (arguments.length === 1) {
	    return parseInt(Math.random() * minNum + 1, 10);
	  } else {
	    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
	  }
	}

	/**
	 * @description                       将函数转成防抖动函数
	 * @param  {Function}                 需要转成防抖动函数的函数
	 * @param  {number}                   延迟时间（毫秒数）
	 * @param  {boolean}                  是否执行第一次
	 * @return {undefined}                无返回值
	 */
	function debounce(fn) {
	  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;
	  var runFirstFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	  var timer = null;

	  return function () {
	    // 清除定时器
	    clearTimeout(timer);

	    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	      rest[_key] = arguments[_key];
	    }

	    if (runFirstFn) {
	      fn.apply(this, rest);
	      runFirstFn = false;
	      return;
	    }

	    // 设置定时器
	    timer = setTimeout(fn.bind.apply(fn, [this].concat(rest)), delay);
	  };
	}

	function observerDomResize(dom, callback) {
	  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

	  var observer = new MutationObserver(callback);

	  observer.observe(dom, {
	    attributes: true,
	    attributeFilter: ['style'],
	    attributeOldValue: true
	  });

	  return observer;
	}

	function getPointDistance(pointOne, pointTwo) {
	  var minusX = Math.abs(pointOne[0] - pointTwo[0]);

	  var minusY = Math.abs(pointOne[1] - pointTwo[1]);

	  return Math.sqrt(minusX * minusX + minusY * minusY);
	}

	function co(gen) {
	  if (!gen || typeof gen.next !== 'function') return;

	  next(gen.next());

	  function next(ret) {
	    if (ret.done) return ret.value;

	    var value = ret.value;

	    if (value && !isPromise(value)) return next(gen.next());

	    if (value && isPromise(value)) return value.then(function () {
	      return next(gen.next());
	    });
	  }

	  function isPromise(obj) {
	    return typeof obj.then === 'function';
	  }
	}

	var asyncToGenerator = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new Promise(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }

	        if (info.done) {
	          resolve(value);
	        } else {
	          return Promise.resolve(value).then(function (value) {
	            step("next", value);
	          }, function (err) {
	            step("throw", err);
	          });
	        }
	      }

	      return step("next");
	    });
	  };
	};

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

	var slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};

	function useAutoResize(afterAutoResizeMixinInit, onResize) {
	  var _useState = React.useState({ width: 0, height: 0 }),
	      _useState2 = slicedToArray(_useState, 2),
	      state = _useState2[0],
	      setState = _useState2[1];

	  var domRef = React.useRef(null);
	  var domObserverRef = React.useRef(null);
	  var debounceSetWHFunRef = React.useRef(null);
	  var onResizeRef = React.useRef(onResize);

	  onResizeRef.current = onResize;

	  var setWH = React.useCallback(function () {
	    var resize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    var _domRef$current = domRef.current,
	        clientWidth = _domRef$current.clientWidth,
	        clientHeight = _domRef$current.clientHeight;


	    setState({ width: clientWidth, height: clientHeight });

	    if (typeof onResizeRef.current === 'function' && resize) {
	      onResizeRef.current();
	    }
	  }, []);

	  var bindDomResizeCallback = React.useCallback(function () {
	    domObserverRef.current = observerDomResize(domRef.current, debounceSetWHFunRef.current);

	    window.addEventListener('resize', debounceSetWHFunRef.current);
	  }, []);

	  var unbindDomResizeCallback = React.useCallback(function () {
	    var domObserver = domObserverRef.current;


	    domObserver.disconnect();
	    domObserver.takeRecords();
	    domObserverRef.current = null;

	    window.removeEventListener('resize', debounceSetWHFunRef.current);
	  }, []);

	  React.useEffect(function () {
	    debounceSetWHFunRef.current = debounce(setWH, 100);

	    debounceSetWHFunRef.current(false);

	    bindDomResizeCallback();

	    typeof afterAutoResizeMixinInit === 'function' && afterAutoResizeMixinInit();

	    // 组件销毁时，清除事件
	    return unbindDomResizeCallback;
	  }, []);

	  return _extends({}, state, { domRef: domRef });
	}

	function styleInject(css, ref) {
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

	var css = "#dv-full-screen-container {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n  transform-origin: left top;\n  z-index: 999;\n}\n";
	styleInject(css);

	var FullScreenContainer = function FullScreenContainer(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(afterAutoResizeMixinInit, function () {
	    return setAppScale(allWidth);
	  }),
	      domRef = _useAutoResize.domRef;

	  var _useState = React.useState({
	    allWidth: 0,
	    ready: false
	  }),
	      _useState2 = slicedToArray(_useState, 2),
	      _useState2$ = _useState2[0],
	      allWidth = _useState2$.allWidth,
	      ready = _useState2$.ready,
	      setState = _useState2[1];

	  function afterAutoResizeMixinInit() {
	    var _window$screen = window.screen,
	        width = _window$screen.width,
	        height = _window$screen.height;


	    Object.assign(domRef.current.style, {
	      width: width + 'px',
	      height: height + 'px'
	    });

	    setAppScale(width);

	    setState({ allWidth: width, ready: true });
	  }

	  var setAppScale = function setAppScale(allWidth) {
	    return domRef.current.style.transform = 'scale(' + document.body.clientWidth / allWidth + ')';
	  };

	  return React__default.createElement(
	    'div',
	    {
	      id: 'dv-full-screen-container',
	      className: className,
	      style: style,
	      ref: domRef
	    },
	    ready && children
	  );
	};

	FullScreenContainer.propTypes = {
	  children: propTypes.node,
	  className: propTypes.string,
	  style: propTypes.object
	};

	var classnames = createCommonjsModule(function (module) {
	/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
	});

	var css$1 = ".dv-loading {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.dv-loading .loading-tip {\n  font-size: 15px;\n}\n";
	styleInject(css$1);

	var Loading = function Loading(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      style = _ref.style;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-loading', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style },
	    React__default.createElement(
	      'svg',
	      { width: '50px', height: '50px' },
	      React__default.createElement(
	        'circle',
	        {
	          cx: '25',
	          cy: '25',
	          r: '20',
	          fill: 'transparent',
	          strokeWidth: '3',
	          strokeDasharray: '31.415, 31.415',
	          stroke: '#02bcfe',
	          strokeLinecap: 'round'
	        },
	        React__default.createElement('animateTransform', {
	          attributeName: 'transform',
	          type: 'rotate',
	          values: '0, 25 25;360, 25 25',
	          dur: '1.5s',
	          repeatCount: 'indefinite'
	        }),
	        React__default.createElement('animate', {
	          attributeName: 'stroke',
	          values: '#02bcfe;#3be6cb;#02bcfe',
	          dur: '3s',
	          repeatCount: 'indefinite'
	        })
	      ),
	      React__default.createElement(
	        'circle',
	        {
	          cx: '25',
	          cy: '25',
	          r: '10',
	          fill: 'transparent',
	          strokeWidth: '3',
	          strokeDasharray: '15.7, 15.7',
	          stroke: '#3be6cb',
	          strokeLinecap: 'round'
	        },
	        React__default.createElement('animateTransform', {
	          attributeName: 'transform',
	          type: 'rotate',
	          values: '360, 25 25;0, 25 25',
	          dur: '1.5s',
	          repeatCount: 'indefinite'
	        }),
	        React__default.createElement('animate', {
	          attributeName: 'stroke',
	          values: '#3be6cb;#02bcfe;#3be6cb',
	          dur: '3s',
	          repeatCount: 'indefinite'
	        })
	      )
	    ),
	    React__default.createElement(
	      'div',
	      { className: 'loading-tip' },
	      children
	    )
	  );
	};

	Loading.propTypes = {
	  children: propTypes.node,
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$2 = ".dv-border-box-1 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-1 .border {\n  position: absolute;\n  display: block;\n}\n.dv-border-box-1 .right-top {\n  right: 0px;\n  transform: rotateY(180deg);\n}\n.dv-border-box-1 .left-bottom {\n  bottom: 0px;\n  transform: rotateX(180deg);\n}\n.dv-border-box-1 .right-bottom {\n  right: 0px;\n  bottom: 0px;\n  transform: rotateX(180deg) rotateY(180deg);\n}\n.dv-border-box-1 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
	styleInject(css$2);

	var border = ['left-top', 'right-top', 'left-bottom', 'right-bottom'];

	var BorderBox = function BorderBox(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      style = _ref.style;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-border-box-1', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style },
	    border.map(function (borderName) {
	      return React__default.createElement(
	        'svg',
	        {
	          width: '150px',
	          height: '150px',
	          key: borderName,
	          className: borderName + ' border'
	        },
	        React__default.createElement(
	          'polygon',
	          {
	            fill: '#4fd2dd',
	            points: '6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63'
	          },
	          React__default.createElement('animate', {
	            attributeName: 'fill',
	            values: '#4fd2dd;#235fa7;#4fd2dd',
	            dur: '0.5s',
	            begin: '0s',
	            repeatCount: 'indefinite'
	          })
	        ),
	        React__default.createElement(
	          'polygon',
	          {
	            fill: '#235fa7',
	            points: '27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8'
	          },
	          React__default.createElement('animate', {
	            attributeName: 'fill',
	            values: '#235fa7;#4fd2dd;#235fa7',
	            dur: '0.5s',
	            begin: '0s',
	            repeatCount: 'indefinite'
	          })
	        ),
	        React__default.createElement(
	          'polygon',
	          {
	            fill: '#4fd2dd',
	            points: '9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54'
	          },
	          React__default.createElement('animate', {
	            attributeName: 'fill',
	            values: '#4fd2dd;#235fa7;transparent',
	            dur: '1s',
	            begin: '0s',
	            repeatCount: 'indefinite'
	          })
	        )
	      );
	    }),
	    React__default.createElement(
	      'div',
	      { className: 'border-box-content' },
	      children
	    )
	  );
	};

	BorderBox.propTypes = {
	  children: propTypes.node,
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$3 = ".dv-border-box-2 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-2 .dv-border-svg-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n.dv-border-box-2 .dv-border-svg-container polyline {\n  fill: none;\n  stroke-width: 1;\n}\n.dv-border-box-2 .dv-border-svg-container circle {\n  fill: #fff;\n}\n.dv-border-box-2 .dv-bb2-line1 {\n  stroke: #fff;\n}\n.dv-border-box-2 .dv-bb2-line2 {\n  stroke: rgba(255, 255, 255, 0.6);\n}\n.dv-border-box-2 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
	styleInject(css$3);

	var BorderBox$1 = function BorderBox(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-border-box-2', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      { className: 'dv-border-svg-container', width: width, height: height },
	      React__default.createElement('polyline', {
	        className: 'dv-bb2-line1',
	        points: '2, 2 ' + (width - 2) + ' ,2 ' + (width - 2) + ', ' + (height - 2) + ' 2, ' + (height - 2) + ' 2, 2'
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb2-line2',
	        points: '6, 6 ' + (width - 6) + ', 6 ' + (width - 6) + ', ' + (height - 6) + ' 6, ' + (height - 6) + ' 6, 6'
	      }),
	      React__default.createElement('circle', { cx: '11', cy: '11', r: '1' }),
	      React__default.createElement('circle', { cx: width - 11, cy: '11', r: '1' }),
	      React__default.createElement('circle', { cx: width - 11, cy: height - 11, r: '1' }),
	      React__default.createElement('circle', { cx: '11', cy: height - 11, r: '1' })
	    ),
	    React__default.createElement(
	      'div',
	      { className: 'border-box-content' },
	      children
	    )
	  );
	};

	BorderBox$1.propTypes = {
	  children: propTypes.node,
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$4 = ".dv-border-box-3 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-3 .dv-border-svg-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n.dv-border-box-3 .dv-border-svg-container polyline {\n  fill: none;\n  stroke: #2862b7;\n}\n.dv-border-box-3 .dv-bb3-line1 {\n  stroke-width: 3;\n}\n.dv-border-box-3 .dv-bb3-line2 {\n  stroke-width: 1;\n}\n.dv-border-box-3 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
	styleInject(css$4);

	var BorderBox$2 = function BorderBox(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-border-box-3', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      { className: 'dv-border-svg-container', width: width, height: height },
	      React__default.createElement('polyline', {
	        className: 'dv-bb3-line1',
	        points: '4, 4 ' + (width - 22) + ' ,4 ' + (width - 22) + ', ' + (height - 22) + ' 4, ' + (height - 22) + ' 4, 4'
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb3-line2',
	        points: '10, 10 ' + (width - 16) + ', 10 ' + (width - 16) + ', ' + (height - 16) + ' 10, ' + (height - 16) + ' 10, 10'
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb3-line2',
	        points: '16, 16 ' + (width - 10) + ', 16 ' + (width - 10) + ', ' + (height - 10) + ' 16, ' + (height - 10) + ' 16, 16'
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb3-line2',
	        points: '22, 22 ' + (width - 4) + ', 22 ' + (width - 4) + ', ' + (height - 4) + ' 22, ' + (height - 4) + ' 22, 22'
	      })
	    ),
	    React__default.createElement(
	      'div',
	      { className: 'border-box-content' },
	      children
	    )
	  );
	};

	BorderBox$2.propTypes = {
	  children: propTypes.node,
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$5 = ".dv-border-box-4 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-4 .dv-reverse {\n  transform: rotate(180deg);\n}\n.dv-border-box-4 .dv-border-svg-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n.dv-border-box-4 .dv-border-svg-container polyline {\n  fill: none;\n}\n.dv-border-box-4 .sred {\n  stroke: red;\n}\n.dv-border-box-4 .sblue {\n  stroke: rgba(0, 0, 255, 0.8);\n}\n.dv-border-box-4 .sw1 {\n  stroke-width: 1;\n}\n.dv-border-box-4 .sw3 {\n  stroke-width: 3px;\n  stroke-linecap: round;\n}\n.dv-border-box-4 .dv-bb4-line-1 {\n  stroke: red;\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-2 {\n  stroke: rgba(0, 0, 255, 0.8);\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-3 {\n  stroke: red;\n  stroke-width: 3px;\n  stroke-linecap: round;\n}\n.dv-border-box-4 .dv-bb4-line-4 {\n  stroke: red;\n  stroke-width: 3px;\n  stroke-linecap: round;\n}\n.dv-border-box-4 .dv-bb4-line-5 {\n  stroke: red;\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-6 {\n  stroke: rgba(0, 0, 255, 0.8);\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-7 {\n  stroke: rgba(0, 0, 255, 0.8);\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-8 {\n  stroke: rgba(0, 0, 255, 0.8);\n  stroke-width: 3px;\n  stroke-linecap: round;\n}\n.dv-border-box-4 .dv-bb4-line-9 {\n  stroke: red;\n  stroke-width: 3px;\n  stroke-linecap: round;\n  stroke-dasharray: 100 250;\n}\n.dv-border-box-4 .dv-bb4-line-10 {\n  stroke: rgba(0, 0, 255, 0.8);\n  stroke-width: 1;\n  stroke-dasharray: 80 270;\n}\n.dv-border-box-4 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
	styleInject(css$5);

	var BorderBox$3 = function BorderBox(_ref) {
	  var children = _ref.children,
	      _ref$reverse = _ref.reverse,
	      reverse = _ref$reverse === undefined ? false : _ref$reverse,
	      className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-border-box-4', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      {
	        className: 'dv-border-svg-container ' + (reverse && 'dv-reverse'),
	        width: width,
	        height: height
	      },
	      React__default.createElement('polyline', {
	        className: 'dv-bb4-line-1',
	        points: '145, ' + (height - 5) + ' 40, ' + (height - 5) + ' 10, ' + (height - 35) + '\n          10, 40 40, 5 150, 5 170, 20 ' + (width - 15) + ', 20'
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb4-line-2',
	        points: '245, ' + (height - 1) + ' 36, ' + (height - 1) + ' 14, ' + (height - 23) + '\n          14, ' + (height - 100)
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb4-line-3',
	        points: '7, ' + (height - 40) + ' 7, ' + (height - 75)
	      }),
	      React__default.createElement('polyline', { className: 'dv-bb4-line-4', points: '28, 24 13, 41 13, 64' }),
	      React__default.createElement('polyline', { className: 'dv-bb4-line-5', points: '5, 45 5, 140' }),
	      React__default.createElement('polyline', { className: 'dv-bb4-line-6', points: '14, 75 14, 180' }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb4-line-7',
	        points: '55, 11 147, 11 167, 26 250, 26'
	      }),
	      React__default.createElement('polyline', { className: 'dv-bb4-line-8', points: '158, 5 173, 16' }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb4-line-9',
	        points: '200, 17 ' + (width - 10) + ', 17'
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb4-line-10',
	        points: '385, 17 ' + (width - 10) + ', 17'
	      })
	    ),
	    React__default.createElement(
	      'div',
	      { className: 'border-box-content' },
	      children
	    )
	  );
	};

	BorderBox$3.propTypes = {
	  children: propTypes.node,
	  reverse: propTypes.bool,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};BorderBox$3.defaultProps = {
	  reverse: false
	};

	var css$6 = ".dv-border-box-5 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-5 .dv-reverse {\n  transform: rotate(180deg);\n}\n.dv-border-box-5 .dv-svg-container {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-5 .dv-svg-container polyline {\n  fill: none;\n}\n.dv-border-box-5 .dv-bb5-line-1 {\n  stroke-width: 1;\n  stroke: rgba(255, 255, 255, 0.35);\n}\n.dv-border-box-5 .dv-bb5-line-2 {\n  stroke: rgba(255, 255, 255, 0.2);\n}\n.dv-border-box-5 .dv-bb5-line-3,\n.dv-border-box-5 .dv-bb5-line-6 {\n  stroke-width: 5;\n  stroke: rgba(255, 255, 255, 0.15);\n}\n.dv-border-box-5 .dv-bb5-line-4,\n.dv-border-box-5 .dv-bb5-line-5 {\n  stroke-width: 2;\n  stroke: rgba(255, 255, 255, 0.15);\n}\n.dv-border-box-5 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
	styleInject(css$6);

	var BorderBox$4 = function BorderBox(_ref) {
	  var children = _ref.children,
	      _ref$reverse = _ref.reverse,
	      reverse = _ref$reverse === undefined ? false : _ref$reverse,
	      className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-border-box-5', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      {
	        className: 'dv-svg-container  ' + (reverse && 'dv-reverse'),
	        width: width,
	        height: height
	      },
	      React__default.createElement('polyline', {
	        className: 'dv-bb5-line-1',
	        points: '8, 5 ' + (width - 5) + ', 5 ' + (width - 5) + ', ' + (height - 100) + '\n          ' + (width - 100) + ', ' + (height - 5) + ' 8, ' + (height - 5) + ' 8, 5'
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb5-line-2',
	        points: '3, 5 ' + (width - 20) + ', 5 ' + (width - 20) + ', ' + (height - 60) + '\n          ' + (width - 74) + ', ' + (height - 5) + ' 3, ' + (height - 5) + ' 3, 5'
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb5-line-3',
	        points: '50, 13 ' + (width - 35) + ', 13'
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb5-line-4',
	        points: '15, 20 ' + (width - 35) + ', 20'
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb5-line-5',
	        points: '15, ' + (height - 20) + ' ' + (width - 110) + ', ' + (height - 20)
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb5-line-6',
	        points: '15, ' + (height - 13) + ' ' + (width - 110) + ', ' + (height - 13)
	      })
	    ),
	    React__default.createElement(
	      'div',
	      { className: 'border-box-content' },
	      children
	    )
	  );
	};

	BorderBox$4.propTypes = {
	  children: propTypes.node,
	  reverse: propTypes.bool,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};BorderBox$4.defaultProps = {
	  reverse: false
	};

	var css$7 = ".dv-border-box-6 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-6 .dv-svg-container {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-6 .dv-svg-container circle {\n  fill: gray;\n}\n.dv-border-box-6 .dv-svg-container polyline {\n  fill: none;\n  stroke-width: 1;\n  stroke: rgba(255, 255, 255, 0.35);\n}\n.dv-border-box-6 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
	styleInject(css$7);

	var BorderBox$5 = function BorderBox(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-border-box-6', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      { className: 'dv-svg-container', width: width, height: height },
	      React__default.createElement('circle', { cx: '5', cy: '5', r: '2' }),
	      React__default.createElement('circle', { cx: width - 5, cy: '5', r: '2' }),
	      React__default.createElement('circle', { cx: width - 5, cy: height - 5, r: '2' }),
	      React__default.createElement('circle', { cx: '5', cy: height - 5, r: '2' }),
	      React__default.createElement('polyline', { points: '10, 4 ' + (width - 10) + ', 4' }),
	      React__default.createElement('polyline', { points: '10, ' + (height - 4) + ' ' + (width - 10) + ', ' + (height - 4) }),
	      React__default.createElement('polyline', { points: '5, 70 5, ' + (height - 70) }),
	      React__default.createElement('polyline', { points: width - 5 + ', 70 ' + (width - 5) + ', ' + (height - 70) }),
	      React__default.createElement('polyline', { points: '3, 10, 3, 50' }),
	      React__default.createElement('polyline', { points: '7, 30 7, 80' }),
	      React__default.createElement('polyline', { points: width - 3 + ', 10 ' + (width - 3) + ', 50' }),
	      React__default.createElement('polyline', { points: width - 7 + ', 30 ' + (width - 7) + ', 80' }),
	      React__default.createElement('polyline', { points: '3, ' + (height - 10) + ' 3, ' + (height - 50) }),
	      React__default.createElement('polyline', { points: '7, ' + (height - 30) + ' 7, ' + (height - 80) }),
	      React__default.createElement('polyline', {
	        points: width - 3 + ', ' + (height - 10) + ' ' + (width - 3) + ', ' + (height - 50)
	      }),
	      React__default.createElement('polyline', {
	        points: width - 7 + ', ' + (height - 30) + ' ' + (width - 7) + ', ' + (height - 80)
	      })
	    ),
	    React__default.createElement(
	      'div',
	      { className: 'border-box-content' },
	      children
	    )
	  );
	};

	BorderBox$5.propTypes = {
	  children: propTypes.node,
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$8 = ".dv-border-box-7 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset 0 0 40px rgba(128, 128, 128, 0.3);\n  border: 1px solid rgba(128, 128, 128, 0.3);\n}\n.dv-border-box-7 .dv-svg-container {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-7 .dv-svg-container polyline {\n  fill: none;\n  stroke-linecap: round;\n}\n.dv-border-box-7 .dv-bb7-line-width-2 {\n  stroke: rgba(128, 128, 128, 0.3);\n  stroke-width: 2;\n}\n.dv-border-box-7 .dv-bb7-line-width-5 {\n  stroke: rgba(128, 128, 128, 0.5);\n  stroke-width: 5;\n}\n.dv-border-box-7 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
	styleInject(css$8);

	var BorderBox$6 = function BorderBox(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-border-box-7', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      { className: 'dv-svg-container', width: width, height: height },
	      React__default.createElement('polyline', { className: 'dv-bb7-line-width-2', points: '0, 25 0, 0 25, 0' }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb7-line-width-2',
	        points: width - 25 + ', 0 ' + width + ', 0 ' + width + ', 25'
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb7-line-width-2',
	        points: width - 25 + ', ' + height + ' ' + width + ', ' + height + ' ' + width + ', ' + (height - 25)
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb7-line-width-2',
	        points: '0, ' + (height - 25) + ' 0, ' + height + ' 25, ' + height
	      }),
	      React__default.createElement('polyline', { className: 'dv-bb7-line-width-5', points: '0, 10 0, 0 10, 0' }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb7-line-width-5',
	        points: width - 10 + ', 0 ' + width + ', 0 ' + width + ', 10'
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb7-line-width-5',
	        points: width - 10 + ', ' + height + ' ' + width + ', ' + height + ' ' + width + ', ' + (height - 10)
	      }),
	      React__default.createElement('polyline', {
	        className: 'dv-bb7-line-width-5',
	        points: '0, ' + (height - 10) + ' 0, ' + height + ' 10, ' + height
	      })
	    ),
	    React__default.createElement(
	      'div',
	      { className: 'border-box-content' },
	      children
	    )
	  );
	};

	BorderBox$6.propTypes = {
	  children: propTypes.node,
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$9 = ".dv-border-box-8 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-8 svg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n}\n.dv-border-box-8 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
	styleInject(css$9);

	var BorderBox$7 = function BorderBox(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var _useState = React.useState(function () {
	    var timestamp = Date.now();

	    return {
	      path: 'border-box-8-path-' + timestamp,
	      gradient: 'border-box-8-gradient-' + timestamp,
	      mask: 'border-box-8-mask-' + timestamp
	    };
	  }),
	      _useState2 = slicedToArray(_useState, 1),
	      _useState2$ = _useState2[0],
	      path = _useState2$.path,
	      gradient = _useState2$.gradient,
	      mask = _useState2$.mask;

	  var length = React.useMemo(function () {
	    return (width + height - 5) * 2;
	  }, [width, height]);

	  var classNames = React.useMemo(function () {
	    return classnames('dv-border-box-8', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      { className: 'dv-svg-container', width: width, height: height },
	      React__default.createElement(
	        'defs',
	        null,
	        React__default.createElement('path', {
	          id: path,
	          d: 'M2.5, 2.5 L' + (width - 2.5) + ', 2.5 L' + (width - 2.5) + ', ' + (height - 2.5) + ' L2.5, ' + (height - 2.5) + ' L2.5, 2.5',
	          fill: 'transparent'
	        }),
	        React__default.createElement(
	          'radialGradient',
	          { id: gradient, cx: '50%', cy: '50%', r: '50%' },
	          React__default.createElement('stop', { offset: '0%', stopColor: '#fff', stopOpacity: '1' }),
	          React__default.createElement('stop', { offset: '100%', stopColor: '#fff', stopOpacity: '0' })
	        ),
	        React__default.createElement(
	          'mask',
	          { id: mask },
	          React__default.createElement(
	            'circle',
	            { cx: '0', cy: '0', r: '150', fill: 'url(#' + gradient + ')' },
	            React__default.createElement('animateMotion', {
	              dur: '3s',
	              path: 'M2.5, 2.5 L' + (width - 2.5) + ', 2.5 L' + (width - 2.5) + ', ' + (height - 2.5) + ' L2.5, ' + (height - 2.5) + ' L2.5, 2.5',
	              rotate: 'auto',
	              repeatCount: 'indefinite'
	            })
	          )
	        )
	      ),
	      React__default.createElement('use', { stroke: '#235fa7', strokeWidth: '1', href: '#' + path }),
	      React__default.createElement(
	        'use',
	        {
	          stroke: '#4fd2dd',
	          strokeWidth: '3',
	          href: '#' + path,
	          mask: 'url(#' + mask + ')'
	        },
	        React__default.createElement('animate', {
	          attributeName: 'stroke-dasharray',
	          from: '0, ' + length,
	          to: length + ', 0',
	          dur: '3s',
	          repeatCount: 'indefinite'
	        })
	      )
	    ),
	    React__default.createElement(
	      'div',
	      { className: 'border-box-content' },
	      children
	    )
	  );
	};

	BorderBox$7.propTypes = {
	  children: propTypes.node,
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$a = ".dv-border-box-9 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-9 svg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n}\n.dv-border-box-9 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
	styleInject(css$a);

	var BorderBox$8 = function BorderBox(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var _useState = React.useState(function () {
	    var timestamp = Date.now();

	    return {
	      gradientId: 'border-box-9-gradient-' + timestamp,
	      maskId: 'border-box-9-mask-' + timestamp
	    };
	  }),
	      _useState2 = slicedToArray(_useState, 1),
	      _useState2$ = _useState2[0],
	      gradientId = _useState2$.gradientId,
	      maskId = _useState2$.maskId;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-border-box-9', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      { className: 'dv-svg-container', width: width, height: height },
	      React__default.createElement(
	        'defs',
	        null,
	        React__default.createElement(
	          'linearGradient',
	          { id: gradientId, x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
	          React__default.createElement('stop', { offset: '0%', stopColor: '#11eefd' }),
	          React__default.createElement('stop', { offset: '100%', stopColor: '#0078d2' })
	        ),
	        React__default.createElement(
	          'mask',
	          { id: maskId },
	          React__default.createElement('polyline', {
	            stroke: '#fff',
	            strokeWidth: '3',
	            fill: 'transparent',
	            points: '8, ' + height * 0.4 + ' 8, 3, ' + (width * 0.4 + 7) + ', 3'
	          }),
	          React__default.createElement('polyline', {
	            fill: '#fff',
	            points: '8, ' + height * 0.15 + ' 8, 3, ' + (width * 0.1 + 7) + ', 3\n                ' + width * 0.1 + ', 8 14, 8 14, ' + (height * 0.15 - 7) + '\n              '
	          }),
	          React__default.createElement('polyline', {
	            stroke: '#fff',
	            strokeWidth: '3',
	            fill: 'transparent',
	            points: width * 0.5 + ', 3 ' + (width - 3) + ', 3, ' + (width - 3) + ', ' + height * 0.25
	          }),
	          React__default.createElement('polyline', {
	            fill: '#fff',
	            points: '\n                ' + width * 0.52 + ', 3 ' + width * 0.58 + ', 3\n                ' + (width * 0.58 - 7) + ', 9 ' + (width * 0.52 + 7) + ', 9\n              '
	          }),
	          React__default.createElement('polyline', {
	            fill: '#fff',
	            points: '\n                ' + width * 0.9 + ', 3 ' + (width - 3) + ', 3 ' + (width - 3) + ', ' + height * 0.1 + '\n                ' + (width - 9) + ', ' + (height * 0.1 - 7) + ' ' + (width - 9) + ', 9 ' + (width * 0.9 + 7) + ', 9\n              '
	          }),
	          React__default.createElement('polyline', {
	            stroke: '#fff',
	            strokeWidth: '3',
	            fill: 'transparent',
	            points: '8, ' + height * 0.5 + ' 8, ' + (height - 3) + ' ' + (width * 0.3 + 7) + ', ' + (height - 3)
	          }),
	          React__default.createElement('polyline', {
	            fill: '#fff',
	            points: '\n                8, ' + height * 0.55 + ' 8, ' + height * 0.7 + '\n                2, ' + (height * 0.7 - 7) + ' 2, ' + (height * 0.55 + 7) + '\n              '
	          }),
	          React__default.createElement('polyline', {
	            stroke: '#fff',
	            strokeWidth: '3',
	            fill: 'transparent',
	            points: width * 0.35 + ', ' + (height - 3) + ' ' + (width - 3) + ', ' + (height - 3) + ' ' + (width - 3) + ', ' + height * 0.35
	          }),
	          React__default.createElement('polyline', {
	            fill: '#fff',
	            points: '\n                ' + width * 0.92 + ', ' + (height - 3) + ' ' + (width - 3) + ', ' + (height - 3) + ' ' + (width - 3) + ', ' + height * 0.8 + '\n                ' + (width - 9) + ', ' + (height * 0.8 + 7) + ' ' + (width - 9) + ', ' + (height - 9) + ' ' + (width * 0.92 + 7) + ', ' + (height - 9) + '\n              '
	          })
	        )
	      ),
	      React__default.createElement('rect', {
	        x: '0',
	        y: '0',
	        width: width,
	        height: height,
	        fill: 'url(#' + gradientId + ')',
	        mask: 'url(#' + maskId + ')'
	      })
	    ),
	    React__default.createElement(
	      'div',
	      { className: 'border-box-content' },
	      children
	    )
	  );
	};

	BorderBox$8.propTypes = {
	  children: propTypes.node,
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$b = ".dv-border-box-10 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset 0 0 25px 3px #1d48c4;\n  border-radius: 6px;\n}\n.dv-border-box-10 .border {\n  position: absolute;\n  display: block;\n}\n.dv-border-box-10 .right-top {\n  right: 0px;\n  transform: rotateY(180deg);\n}\n.dv-border-box-10 .left-bottom {\n  bottom: 0px;\n  transform: rotateX(180deg);\n}\n.dv-border-box-10 .right-bottom {\n  right: 0px;\n  bottom: 0px;\n  transform: rotateX(180deg) rotateY(180deg);\n}\n.dv-border-box-10 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
	styleInject(css$b);

	var border$1 = ['left-top', 'right-top', 'left-bottom', 'right-bottom'];

	var BorderBox$9 = function BorderBox(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      style = _ref.style;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-border-box-10', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style },
	    border$1.map(function (borderName) {
	      return React__default.createElement(
	        'svg',
	        {
	          width: '150px',
	          height: '150px',
	          key: borderName,
	          className: borderName + ' border'
	        },
	        React__default.createElement('polygon', {
	          fill: '#d3e1f8',
	          points: '40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3'
	        })
	      );
	    }),
	    React__default.createElement(
	      'div',
	      { className: 'border-box-content' },
	      children
	    )
	  );
	};

	BorderBox$9.propTypes = {
	  children: propTypes.node,
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$c = ".dv-decoration-1 {\n  width: 100%;\n  height: 100%;\n}\n.dv-decoration-1 svg {\n  transform-origin: left top;\n}\n";
	styleInject(css$c);

	var pointSideLength = 2.5;

	var halfPointSideLength = pointSideLength / 2;

	var svgWH = [200, 50];

	var rowNum = 4;

	var rowPoints = 20;

	function getPoints() {
	  var w = svgWH[0],
	      h = svgWH[1];


	  var horizontalGap = w / (rowPoints + 1);
	  var verticalGap = h / (rowNum + 1);

	  var points = new Array(rowNum).fill(0).map(function (foo, i) {
	    return new Array(rowPoints).fill(0).map(function (foo, j) {
	      return [horizontalGap * (j + 1), verticalGap * (i + 1)];
	    });
	  });

	  return points.reduce(function (all, item) {
	    return [].concat(toConsumableArray(all), toConsumableArray(item));
	  }, []);
	}

	var Decoration = function Decoration(_ref) {
	  var className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  function calcSVGData() {
	    var points = getPoints();

	    return {
	      points: points,
	      rects: [points[rowPoints * 2 - 1], points[rowPoints * 2 - 3]],
	      svgScale: [width / svgWH[0], height / svgWH[1]]
	    };
	  }

	  var _useMemo = React.useMemo(calcSVGData, [width, height]),
	      svgScale = _useMemo.svgScale,
	      points = _useMemo.points,
	      rects = _useMemo.rects;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-decoration-1', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      {
	        width: svgWH[0] + 'px',
	        height: svgWH[1] + 'px',
	        style: { transform: 'scale(' + svgScale[0] + ',' + svgScale[1] + ')' }
	      },
	      points.reduce(function (prev, point, i) {
	        return Math.random() > 0.6 ? [].concat(toConsumableArray(prev), [React__default.createElement(
	          'rect',
	          {
	            key: i,
	            fill: '#fff',
	            x: point[0] - halfPointSideLength,
	            y: point[1] - halfPointSideLength,
	            width: pointSideLength,
	            height: pointSideLength
	          },
	          Math.random() > 0.6 && React__default.createElement('animate', {
	            attributeName: 'fill',
	            values: '#fff;transparent',
	            dur: '1s',
	            begin: Math.random() * 2,
	            repeatCount: 'indefinite'
	          })
	        )]) : prev;
	      }, []),
	      !!rects[0] && React__default.createElement(
	        'rect',
	        {
	          fill: '#0de7c2',
	          x: rects[0][0] - pointSideLength,
	          y: rects[0][1] - pointSideLength,
	          width: pointSideLength * 2,
	          height: pointSideLength * 2
	        },
	        React__default.createElement('animate', {
	          attributeName: 'width',
	          values: '0;' + pointSideLength * 2,
	          dur: '2s',
	          repeatCount: 'indefinite'
	        }),
	        React__default.createElement('animate', {
	          attributeName: 'height',
	          values: '0;' + pointSideLength * 2,
	          dur: '2s',
	          repeatCount: 'indefinite'
	        }),
	        React__default.createElement('animate', {
	          attributeName: 'x',
	          values: rects[0][0] + ';' + (rects[0][0] - pointSideLength),
	          dur: '2s',
	          repeatCount: 'indefinite'
	        }),
	        React__default.createElement('animate', {
	          attributeName: 'y',
	          values: rects[0][1] + ';' + (rects[0][1] - pointSideLength),
	          dur: '2s',
	          repeatCount: 'indefinite'
	        })
	      ),
	      !!rects[1] && React__default.createElement(
	        'rect',
	        {
	          fill: '#0de7c2',
	          x: rects[1][0] - 40,
	          y: rects[1][1] - pointSideLength,
	          width: '40',
	          height: pointSideLength * 2
	        },
	        React__default.createElement('animate', {
	          attributeName: 'width',
	          values: '0;40;0',
	          dur: '2s',
	          repeatCount: 'indefinite'
	        }),
	        React__default.createElement('animate', {
	          attributeName: 'x',
	          values: rects[1][0] + ';' + (rects[1][0] - 40) + ';' + rects[1][0],
	          dur: '2s',
	          repeatCount: 'indefinite'
	        })
	      )
	    )
	  );
	};

	Decoration.propTypes = {
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$d = ".dv-decoration-2 {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n";
	styleInject(css$d);

	var Decoration$1 = function Decoration(_ref) {
	  var _ref$reverse = _ref.reverse,
	      reverse = _ref$reverse === undefined ? false : _ref$reverse,
	      className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  function calcSVGData() {
	    return reverse ? { w: 1, h: height, x: width / 2, y: 0 } : { w: width, h: 1, x: 0, y: height / 2 };
	  }

	  var _useMemo = React.useMemo(calcSVGData, [reverse, width, height]),
	      x = _useMemo.x,
	      y = _useMemo.y,
	      w = _useMemo.w,
	      h = _useMemo.h;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-decoration-2', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      { width: width + 'px', height: height + 'px' },
	      React__default.createElement(
	        'rect',
	        { x: x, y: y, width: w, height: h, fill: '#3faacb' },
	        React__default.createElement('animate', {
	          attributeName: reverse ? 'height' : 'width',
	          from: '0',
	          to: reverse ? height : width,
	          dur: '6s',
	          calcMode: 'spline',
	          keyTimes: '0;1',
	          keySplines: '.42,0,.58,1',
	          repeatCount: 'indefinite'
	        })
	      ),
	      React__default.createElement(
	        'rect',
	        { x: x, y: y, width: '1', height: '1', fill: '#fff' },
	        React__default.createElement('animate', {
	          attributeName: reverse ? 'y' : 'x',
	          from: '0',
	          to: reverse ? height : width,
	          dur: '6s',
	          calcMode: 'spline',
	          keyTimes: '0;1',
	          keySplines: '0.42,0,0.58,1',
	          repeatCount: 'indefinite'
	        })
	      )
	    )
	  );
	};

	Decoration$1.propTypes = {
	  reverse: propTypes.bool,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};Decoration$1.defaultProps = {
	  reverse: false
	};

	var css$e = ".dv-decoration-3 {\n  width: 100%;\n  height: 100%;\n}\n.dv-decoration-3 svg {\n  transform-origin: left top;\n}\n";
	styleInject(css$e);

	var pointSideLength$1 = 7;

	var svgWH$1 = [300, 35];

	var rowNum$1 = 2;

	var rowPoints$1 = 25;

	var halfPointSideLength$1 = pointSideLength$1 / 2;

	function getPoints$1() {
	  var w = svgWH$1[0],
	      h = svgWH$1[1];


	  var horizontalGap = w / (rowPoints$1 + 1);
	  var verticalGap = h / (rowNum$1 + 1);

	  var points = new Array(rowNum$1).fill(0).map(function (foo, i) {
	    return new Array(rowPoints$1).fill(0).map(function (foo, j) {
	      return [horizontalGap * (j + 1), verticalGap * (i + 1)];
	    });
	  });

	  return points.reduce(function (all, item) {
	    return [].concat(toConsumableArray(all), toConsumableArray(item));
	  }, []);
	}

	var Decoration$2 = function Decoration(_ref) {
	  var className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  function calcSVGData() {
	    return {
	      points: getPoints$1(),
	      svgScale: [width / svgWH$1[0], height / svgWH$1[1]]
	    };
	  }

	  var _useMemo = React.useMemo(calcSVGData, [width, height]),
	      svgScale = _useMemo.svgScale,
	      points = _useMemo.points;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-decoration-3', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      {
	        width: svgWH$1[0] + 'px',
	        height: svgWH$1[1] + 'px',
	        style: { transform: 'scale(' + svgScale[0] + ',' + svgScale[1] + ')' }
	      },
	      points.map(function (point, i) {
	        return React__default.createElement(
	          'rect',
	          {
	            key: i,
	            fill: '#7acaec',
	            x: point[0] - halfPointSideLength$1,
	            y: point[1] - halfPointSideLength$1,
	            width: pointSideLength$1,
	            height: pointSideLength$1
	          },
	          Math.random() > 0.6 && React__default.createElement('animate', {
	            attributeName: 'fill',
	            values: '#7acaec;transparent',
	            dur: Math.random() + 1 + 's',
	            begin: Math.random() * 2,
	            repeatCount: 'indefinite'
	          })
	        );
	      })
	    )
	  );
	};

	Decoration$2.propTypes = {
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$f = ".dv-decoration-4 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-decoration-4 .container {\n  display: flex;\n  overflow: hidden;\n  position: absolute;\n}\n.dv-decoration-4 .normal {\n  height: 0% !important;\n  animation: ani-height 3s ease-in-out infinite;\n  left: 50%;\n  margin-left: -2px;\n}\n.dv-decoration-4 .reverse {\n  width: 0% !important;\n  animation: ani-width 3s ease-in-out infinite;\n  top: 50%;\n  margin-top: -2px;\n}\n@keyframes ani-height {\n  70% {\n    height: 100%;\n  }\n  100% {\n    height: 100%;\n  }\n}\n@keyframes ani-width {\n  70% {\n    width: 100%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n";
	styleInject(css$f);

	var Decoration$3 = function Decoration(_ref) {
	  var _ref$reverse = _ref.reverse,
	      reverse = _ref$reverse === undefined ? false : _ref$reverse,
	      className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-decoration-4', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'div',
	      {
	        className: 'container ' + (reverse ? 'reverse' : 'normal'),
	        style: reverse ? { width: width + 'px', height: '5px' } : { width: '5px', height: height + 'px' }
	      },
	      React__default.createElement(
	        'svg',
	        { width: reverse ? width : 5, height: reverse ? 5 : height },
	        React__default.createElement('polyline', {
	          stroke: 'rgba(255, 255, 255, 0.3)',
	          points: reverse ? '0, 2.5 ' + width + ', 2.5' : '2.5, 0 2.5, ' + height
	        }),
	        React__default.createElement('polyline', {
	          className: 'bold-line',
	          stroke: 'rgba(255, 255, 255, 0.3)',
	          strokeWidth: '3',
	          strokeDasharray: '20, 80',
	          strokeDashoffset: '-30',
	          points: reverse ? '0, 2.5 ' + width + ', 2.5' : '2.5, 0 2.5, ' + height
	        })
	      )
	    )
	  );
	};

	Decoration$3.propTypes = {
	  reverse: propTypes.bool,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};Decoration$3.defaultProps = {
	  reverse: false
	};

	var interopRequireDefault$1 = createCommonjsModule(function (module) {
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	}

	module.exports = _interopRequireDefault;
	});

	unwrapExports(interopRequireDefault$1);

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  }
	}

	var arrayWithoutHoles = _arrayWithoutHoles;

	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}

	var iterableToArray = _iterableToArray;

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	var nonIterableSpread = _nonIterableSpread;

	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
	}

	var toConsumableArray$1 = _toConsumableArray;

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

	function _typeof(obj) {
	  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return _typeof2(obj);
	    };
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
	    };
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	});

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	var arrayWithHoles = _arrayWithHoles;

	function _iterableToArrayLimit(arr, i) {
	  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
	    return;
	  }

	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	var iterableToArrayLimit = _iterableToArrayLimit;

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}

	var nonIterableRest = _nonIterableRest;

	function _slicedToArray(arr, i) {
	  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
	}

	var slicedToArray$1 = _slicedToArray;

	var util = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deepClone = deepClone;
	exports.eliminateBlur = eliminateBlur;
	exports.checkPointIsInCircle = checkPointIsInCircle;
	exports.getTwoPointDistance = getTwoPointDistance;
	exports.checkPointIsInPolygon = checkPointIsInPolygon;
	exports.checkPointIsInSector = checkPointIsInSector;
	exports.checkPointIsNearPolyline = checkPointIsNearPolyline;
	exports.checkPointIsInRect = checkPointIsInRect;
	exports.getRotatePointPos = getRotatePointPos;
	exports.getScalePointPos = getScalePointPos;
	exports.getTranslatePointPos = getTranslatePointPos;
	exports.getDistanceBetweenPointAndLine = getDistanceBetweenPointAndLine;
	exports.getCircleRadianPoint = getCircleRadianPoint;
	exports.getRegularPolygonPoints = getRegularPolygonPoints;
	exports["default"] = void 0;

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);

	var _typeof2 = interopRequireDefault$1(_typeof_1);

	var abs = Math.abs,
	    sqrt = Math.sqrt,
	    sin = Math.sin,
	    cos = Math.cos,
	    max = Math.max,
	    min = Math.min,
	    PI = Math.PI;
	/**
	 * @description Clone an object or array
	 * @param {Object|Array} object Cloned object
	 * @param {Boolean} recursion   Whether to use recursive cloning
	 * @return {Object|Array} Clone object
	 */

	function deepClone(object) {
	  var recursion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  if (!object) return object;
	  var parse = JSON.parse,
	      stringify = JSON.stringify;
	  if (!recursion) return parse(stringify(object));
	  var clonedObj = object instanceof Array ? [] : {};

	  if (object && (0, _typeof2["default"])(object) === 'object') {
	    for (var key in object) {
	      if (object.hasOwnProperty(key)) {
	        if (object[key] && (0, _typeof2["default"])(object[key]) === 'object') {
	          clonedObj[key] = deepClone(object[key], true);
	        } else {
	          clonedObj[key] = object[key];
	        }
	      }
	    }
	  }

	  return clonedObj;
	}
	/**
	 * @description Eliminate line blur due to 1px line width
	 * @param {Array} points Line points
	 * @return {Array} Line points after processed
	 */


	function eliminateBlur(points) {
	  return points.map(function (_ref) {
	    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
	        x = _ref2[0],
	        y = _ref2[1];

	    return [parseInt(x) + 0.5, parseInt(y) + 0.5];
	  });
	}
	/**
	 * @description Check if the point is inside the circle
	 * @param {Array} point Postion of point
	 * @param {Number} rx   Circle x coordinate
	 * @param {Number} ry   Circle y coordinate
	 * @param {Number} r    Circle radius
	 * @return {Boolean} Result of check
	 */


	function checkPointIsInCircle(point, rx, ry, r) {
	  return getTwoPointDistance(point, [rx, ry]) <= r;
	}
	/**
	 * @description Get the distance between two points
	 * @param {Array} point1 point1
	 * @param {Array} point2 point2
	 * @return {Number} Distance between two points
	 */


	function getTwoPointDistance(_ref3, _ref4) {
	  var _ref5 = (0, _slicedToArray2["default"])(_ref3, 2),
	      xa = _ref5[0],
	      ya = _ref5[1];

	  var _ref6 = (0, _slicedToArray2["default"])(_ref4, 2),
	      xb = _ref6[0],
	      yb = _ref6[1];

	  var minusX = abs(xa - xb);
	  var minusY = abs(ya - yb);
	  return sqrt(minusX * minusX + minusY * minusY);
	}
	/**
	 * @description Check if the point is inside the polygon
	 * @param {Array} point  Postion of point
	 * @param {Array} points The points that makes up a polyline
	 * @return {Boolean} Result of check
	 */


	function checkPointIsInPolygon(point, polygon) {
	  var counter = 0;

	  var _point = (0, _slicedToArray2["default"])(point, 2),
	      x = _point[0],
	      y = _point[1];

	  var pointNum = polygon.length;

	  for (var i = 1, p1 = polygon[0]; i <= pointNum; i++) {
	    var p2 = polygon[i % pointNum];

	    if (x > min(p1[0], p2[0]) && x <= max(p1[0], p2[0])) {
	      if (y <= max(p1[1], p2[1])) {
	        if (p1[0] !== p2[0]) {
	          var xinters = (x - p1[0]) * (p2[1] - p1[1]) / (p2[0] - p1[0]) + p1[1];

	          if (p1[1] === p2[1] || y <= xinters) {
	            counter++;
	          }
	        }
	      }
	    }

	    p1 = p2;
	  }

	  return counter % 2 === 1;
	}
	/**
	 * @description Check if the point is inside the sector
	 * @param {Array} point       Postion of point
	 * @param {Number} rx         Sector x coordinate
	 * @param {Number} ry         Sector y coordinate
	 * @param {Number} r          Sector radius
	 * @param {Number} startAngle Sector start angle
	 * @param {Number} endAngle   Sector end angle
	 * @param {Boolean} clockWise Whether the sector angle is clockwise
	 * @return {Boolean} Result of check
	 */


	function checkPointIsInSector(point, rx, ry, r, startAngle, endAngle, clockWise) {
	  if (!point) return false;
	  if (getTwoPointDistance(point, [rx, ry]) > r) return false;

	  if (!clockWise) {
	    var _deepClone = deepClone([endAngle, startAngle]);

	    var _deepClone2 = (0, _slicedToArray2["default"])(_deepClone, 2);

	    startAngle = _deepClone2[0];
	    endAngle = _deepClone2[1];
	  }

	  var reverseBE = startAngle > endAngle;

	  if (reverseBE) {
	    var _ref7 = [endAngle, startAngle];
	    startAngle = _ref7[0];
	    endAngle = _ref7[1];
	  }

	  var minus = endAngle - startAngle;
	  if (minus >= PI * 2) return true;

	  var _point2 = (0, _slicedToArray2["default"])(point, 2),
	      x = _point2[0],
	      y = _point2[1];

	  var _getCircleRadianPoint = getCircleRadianPoint(rx, ry, r, startAngle),
	      _getCircleRadianPoint2 = (0, _slicedToArray2["default"])(_getCircleRadianPoint, 2),
	      bx = _getCircleRadianPoint2[0],
	      by = _getCircleRadianPoint2[1];

	  var _getCircleRadianPoint3 = getCircleRadianPoint(rx, ry, r, endAngle),
	      _getCircleRadianPoint4 = (0, _slicedToArray2["default"])(_getCircleRadianPoint3, 2),
	      ex = _getCircleRadianPoint4[0],
	      ey = _getCircleRadianPoint4[1];

	  var vPoint = [x - rx, y - ry];
	  var vBArm = [bx - rx, by - ry];
	  var vEArm = [ex - rx, ey - ry];
	  var reverse = minus > PI;

	  if (reverse) {
	    var _deepClone3 = deepClone([vEArm, vBArm]);

	    var _deepClone4 = (0, _slicedToArray2["default"])(_deepClone3, 2);

	    vBArm = _deepClone4[0];
	    vEArm = _deepClone4[1];
	  }

	  var inSector = isClockWise(vBArm, vPoint) && !isClockWise(vEArm, vPoint);
	  if (reverse) inSector = !inSector;
	  if (reverseBE) inSector = !inSector;
	  return inSector;
	}
	/**
	 * @description Determine if the point is in the clockwise direction of the vector
	 * @param {Array} vArm   Vector
	 * @param {Array} vPoint Point
	 * @return {Boolean} Result of check
	 */


	function isClockWise(vArm, vPoint) {
	  var _vArm = (0, _slicedToArray2["default"])(vArm, 2),
	      ax = _vArm[0],
	      ay = _vArm[1];

	  var _vPoint = (0, _slicedToArray2["default"])(vPoint, 2),
	      px = _vPoint[0],
	      py = _vPoint[1];

	  return -ay * px + ax * py > 0;
	}
	/**
	 * @description Check if the point is inside the polyline
	 * @param {Array} point      Postion of point
	 * @param {Array} polyline   The points that makes up a polyline
	 * @param {Number} lineWidth Polyline linewidth
	 * @return {Boolean} Result of check
	 */


	function checkPointIsNearPolyline(point, polyline, lineWidth) {
	  var halfLineWidth = lineWidth / 2;
	  var moveUpPolyline = polyline.map(function (_ref8) {
	    var _ref9 = (0, _slicedToArray2["default"])(_ref8, 2),
	        x = _ref9[0],
	        y = _ref9[1];

	    return [x, y - halfLineWidth];
	  });
	  var moveDownPolyline = polyline.map(function (_ref10) {
	    var _ref11 = (0, _slicedToArray2["default"])(_ref10, 2),
	        x = _ref11[0],
	        y = _ref11[1];

	    return [x, y + halfLineWidth];
	  });
	  var polygon = [].concat((0, _toConsumableArray2["default"])(moveUpPolyline), (0, _toConsumableArray2["default"])(moveDownPolyline.reverse()));
	  return checkPointIsInPolygon(point, polygon);
	}
	/**
	 * @description Check if the point is inside the rect
	 * @param {Array} point   Postion of point
	 * @param {Number} x      Rect start x coordinate
	 * @param {Number} y      Rect start y coordinate
	 * @param {Number} width  Rect width
	 * @param {Number} height Rect height
	 * @return {Boolean} Result of check
	 */


	function checkPointIsInRect(_ref12, x, y, width, height) {
	  var _ref13 = (0, _slicedToArray2["default"])(_ref12, 2),
	      px = _ref13[0],
	      py = _ref13[1];

	  if (px < x) return false;
	  if (py < y) return false;
	  if (px > x + width) return false;
	  if (py > y + height) return false;
	  return true;
	}
	/**
	 * @description Get the coordinates of the rotated point
	 * @param {Number} rotate Degree of rotation
	 * @param {Array} point   Postion of point
	 * @param {Array} origin  Rotation center
	 * @param {Array} origin  Rotation center
	 * @return {Number} Coordinates after rotation
	 */


	function getRotatePointPos() {
	  var rotate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var point = arguments.length > 1 ? arguments[1] : undefined;
	  var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
	  if (!point) return false;
	  if (rotate % 360 === 0) return point;

	  var _point3 = (0, _slicedToArray2["default"])(point, 2),
	      x = _point3[0],
	      y = _point3[1];

	  var _origin = (0, _slicedToArray2["default"])(origin, 2),
	      ox = _origin[0],
	      oy = _origin[1];

	  rotate *= PI / 180;
	  return [(x - ox) * cos(rotate) - (y - oy) * sin(rotate) + ox, (x - ox) * sin(rotate) + (y - oy) * cos(rotate) + oy];
	}
	/**
	 * @description Get the coordinates of the scaled point
	 * @param {Array} scale  Scale factor
	 * @param {Array} point  Postion of point
	 * @param {Array} origin Scale center
	 * @return {Number} Coordinates after scale
	 */


	function getScalePointPos() {
	  var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [1, 1];
	  var point = arguments.length > 1 ? arguments[1] : undefined;
	  var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
	  if (!point) return false;
	  if (scale === 1) return point;

	  var _point4 = (0, _slicedToArray2["default"])(point, 2),
	      x = _point4[0],
	      y = _point4[1];

	  var _origin2 = (0, _slicedToArray2["default"])(origin, 2),
	      ox = _origin2[0],
	      oy = _origin2[1];

	  var _scale = (0, _slicedToArray2["default"])(scale, 2),
	      xs = _scale[0],
	      ys = _scale[1];

	  var relativePosX = x - ox;
	  var relativePosY = y - oy;
	  return [relativePosX * xs + ox, relativePosY * ys + oy];
	}
	/**
	 * @description Get the coordinates of the scaled point
	 * @param {Array} translate Translation distance
	 * @param {Array} point     Postion of point
	 * @return {Number} Coordinates after translation
	 */


	function getTranslatePointPos(translate, point) {
	  if (!translate || !point) return false;

	  var _point5 = (0, _slicedToArray2["default"])(point, 2),
	      x = _point5[0],
	      y = _point5[1];

	  var _translate = (0, _slicedToArray2["default"])(translate, 2),
	      tx = _translate[0],
	      ty = _translate[1];

	  return [x + tx, y + ty];
	}
	/**
	 * @description Get the distance from the point to the line
	 * @param {Array} point     Postion of point
	 * @param {Array} lineBegin Line start position
	 * @param {Array} lineEnd   Line end position
	 * @return {Number} Distance between point and line
	 */


	function getDistanceBetweenPointAndLine(point, lineBegin, lineEnd) {
	  if (!point || !lineBegin || !lineEnd) return false;

	  var _point6 = (0, _slicedToArray2["default"])(point, 2),
	      x = _point6[0],
	      y = _point6[1];

	  var _lineBegin = (0, _slicedToArray2["default"])(lineBegin, 2),
	      x1 = _lineBegin[0],
	      y1 = _lineBegin[1];

	  var _lineEnd = (0, _slicedToArray2["default"])(lineEnd, 2),
	      x2 = _lineEnd[0],
	      y2 = _lineEnd[1];

	  var a = y2 - y1;
	  var b = x1 - x2;
	  var c = y1 * (x2 - x1) - x1 * (y2 - y1);
	  var molecule = abs(a * x + b * y + c);
	  var denominator = sqrt(a * a + b * b);
	  return molecule / denominator;
	}
	/**
	 * @description Get the coordinates of the specified radian on the circle
	 * @param {Number} x      Circle x coordinate
	 * @param {Number} y      Circle y coordinate
	 * @param {Number} radius Circle radius
	 * @param {Number} radian Specfied radian
	 * @return {Array} Postion of point
	 */


	function getCircleRadianPoint(x, y, radius, radian) {
	  return [x + cos(radian) * radius, y + sin(radian) * radius];
	}
	/**
	 * @description Get the points that make up a regular polygon
	 * @param {Number} x     X coordinate of the polygon inscribed circle
	 * @param {Number} y     Y coordinate of the polygon inscribed circle
	 * @param {Number} r     Radius of the polygon inscribed circle
	 * @param {Number} side  Side number
	 * @param {Number} minus Radian offset
	 * @return {Array} Points that make up a regular polygon
	 */


	function getRegularPolygonPoints(rx, ry, r, side) {
	  var minus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : PI * -0.5;
	  var radianGap = PI * 2 / side;
	  var radians = new Array(side).fill('').map(function (t, i) {
	    return i * radianGap + minus;
	  });
	  return radians.map(function (radian) {
	    return getCircleRadianPoint(rx, ry, r, radian);
	  });
	}

	var _default = {
	  deepClone: deepClone,
	  eliminateBlur: eliminateBlur,
	  checkPointIsInCircle: checkPointIsInCircle,
	  checkPointIsInPolygon: checkPointIsInPolygon,
	  checkPointIsInSector: checkPointIsInSector,
	  checkPointIsNearPolyline: checkPointIsNearPolyline,
	  getTwoPointDistance: getTwoPointDistance,
	  getRotatePointPos: getRotatePointPos,
	  getScalePointPos: getScalePointPos,
	  getTranslatePointPos: getTranslatePointPos,
	  getCircleRadianPoint: getCircleRadianPoint,
	  getRegularPolygonPoints: getRegularPolygonPoints,
	  getDistanceBetweenPointAndLine: getDistanceBetweenPointAndLine
	};
	exports["default"] = _default;
	});

	unwrapExports(util);
	var util_1 = util.deepClone;
	var util_2 = util.eliminateBlur;
	var util_3 = util.checkPointIsInCircle;
	var util_4 = util.getTwoPointDistance;
	var util_5 = util.checkPointIsInPolygon;
	var util_6 = util.checkPointIsInSector;
	var util_7 = util.checkPointIsNearPolyline;
	var util_8 = util.checkPointIsInRect;
	var util_9 = util.getRotatePointPos;
	var util_10 = util.getScalePointPos;
	var util_11 = util.getTranslatePointPos;
	var util_12 = util.getDistanceBetweenPointAndLine;
	var util_13 = util.getCircleRadianPoint;
	var util_14 = util.getRegularPolygonPoints;

	var util$2 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.filterNonNumber = filterNonNumber;
	exports.deepMerge = deepMerge;
	exports.mulAdd = mulAdd;
	exports.mergeSameStackData = mergeSameStackData;
	exports.getTwoPointDistance = getTwoPointDistance;
	exports.getLinearGradientColor = getLinearGradientColor;
	exports.getPolylineLength = getPolylineLength;
	exports.getPointToLineDistance = getPointToLineDistance;
	exports.initNeedSeries = initNeedSeries;
	exports.radianToAngle = radianToAngle;

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);

	var _typeof2 = interopRequireDefault$1(_typeof_1);



	function filterNonNumber(array) {
	  return array.filter(function (n) {
	    return typeof n === 'number';
	  });
	}

	function deepMerge(target, merged) {
	  for (var key in merged) {
	    target[key] = target[key] && (0, _typeof2["default"])(target[key]) === 'object' ? deepMerge(target[key], merged[key]) : target[key] = merged[key];
	  }

	  return target;
	}

	function mulAdd(nums) {
	  nums = filterNonNumber(nums);
	  return nums.reduce(function (all, num) {
	    return all + num;
	  }, 0);
	}

	function mergeSameStackData(item, series) {
	  var stack = item.stack;
	  if (!stack) return (0, _toConsumableArray2["default"])(item.data);
	  var stacks = series.filter(function (_ref) {
	    var s = _ref.stack;
	    return s === stack;
	  });
	  var index = stacks.findIndex(function (_ref2) {
	    var d = _ref2.data;
	    return d === item.data;
	  });
	  var datas = stacks.splice(0, index + 1).map(function (_ref3) {
	    var data = _ref3.data;
	    return data;
	  });
	  var dataLength = datas[0].length;
	  return new Array(dataLength).fill(0).map(function (foo, i) {
	    return mulAdd(datas.map(function (d) {
	      return d[i];
	    }));
	  });
	}

	function getTwoPointDistance(pointOne, pointTwo) {
	  var minusX = Math.abs(pointOne[0] - pointTwo[0]);
	  var minusY = Math.abs(pointOne[1] - pointTwo[1]);
	  return Math.sqrt(minusX * minusX + minusY * minusY);
	}

	function getLinearGradientColor(ctx, begin, end, color) {
	  if (!ctx || !begin || !end || !color.length) return;
	  var colors = color;
	  typeof colors === 'string' && (colors = [color, color]);
	  var linearGradientColor = ctx.createLinearGradient.apply(ctx, (0, _toConsumableArray2["default"])(begin).concat((0, _toConsumableArray2["default"])(end)));
	  var colorGap = 1 / (colors.length - 1);
	  colors.forEach(function (c, i) {
	    return linearGradientColor.addColorStop(colorGap * i, c);
	  });
	  return linearGradientColor;
	}

	function getPolylineLength(points) {
	  var lineSegments = new Array(points.length - 1).fill(0).map(function (foo, i) {
	    return [points[i], points[i + 1]];
	  });
	  var lengths = lineSegments.map(function (item) {
	    return getTwoPointDistance.apply(void 0, (0, _toConsumableArray2["default"])(item));
	  });
	  return mulAdd(lengths);
	}

	function getPointToLineDistance(point, linePointOne, linePointTwo) {
	  var a = getTwoPointDistance(point, linePointOne);
	  var b = getTwoPointDistance(point, linePointTwo);
	  var c = getTwoPointDistance(linePointOne, linePointTwo);
	  return 0.5 * Math.sqrt((a + b + c) * (a + b - c) * (a + c - b) * (b + c - a)) / c;
	}

	function initNeedSeries(series, config, type) {
	  series = series.filter(function (_ref4) {
	    var st = _ref4.type;
	    return st === type;
	  });
	  series = series.map(function (item) {
	    return deepMerge((0, util.deepClone)(config, true), item);
	  });
	  return series.filter(function (_ref5) {
	    var show = _ref5.show;
	    return show;
	  });
	}

	function radianToAngle(radian) {
	  return radian / Math.PI * 180;
	}
	});

	unwrapExports(util$2);
	var util_1$1 = util$2.filterNonNumber;
	var util_2$1 = util$2.deepMerge;
	var util_3$1 = util$2.mulAdd;
	var util_4$1 = util$2.mergeSameStackData;
	var util_5$1 = util$2.getTwoPointDistance;
	var util_6$1 = util$2.getLinearGradientColor;
	var util_7$1 = util$2.getPolylineLength;
	var util_8$1 = util$2.getPointToLineDistance;
	var util_9$1 = util$2.initNeedSeries;
	var util_10$1 = util$2.radianToAngle;

	var css$g = ".dv-decoration-5 {\n  width: 100%;\n  height: 100%;\n}\n";
	styleInject(css$g);

	var Decoration$4 = function Decoration(_ref) {
	  var className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  function calcSVGData() {
	    var line1Points = [[0, height * 0.2], [width * 0.18, height * 0.2], [width * 0.2, height * 0.4], [width * 0.25, height * 0.4], [width * 0.27, height * 0.6], [width * 0.72, height * 0.6], [width * 0.75, height * 0.4], [width * 0.8, height * 0.4], [width * 0.82, height * 0.2], [width, height * 0.2]];

	    var line2Points = [[width * 0.3, height * 0.8], [width * 0.7, height * 0.8]];

	    var line1Length = util_7$1(line1Points);
	    var line2Length = util_7$1(line2Points);

	    line1Points = line1Points.map(function (point) {
	      return point.join(',');
	    }).join(' ');
	    line2Points = line2Points.map(function (point) {
	      return point.join(',');
	    }).join(' ');

	    return { line1Points: line1Points, line2Points: line2Points, line1Length: line1Length, line2Length: line2Length };
	  }

	  var _useMemo = React.useMemo(calcSVGData, [width, height]),
	      line1Points = _useMemo.line1Points,
	      line2Points = _useMemo.line2Points,
	      line1Length = _useMemo.line1Length,
	      line2Length = _useMemo.line2Length;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-decoration-5', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      { width: width, height: height },
	      React__default.createElement(
	        'polyline',
	        {
	          fill: 'transparent',
	          stroke: '#3f96a5',
	          strokeWidth: '3',
	          points: line1Points
	        },
	        React__default.createElement('animate', {
	          attributeName: 'stroke-dasharray',
	          attributeType: 'XML',
	          from: '0, ' + line1Length / 2 + ', 0, ' + line1Length / 2,
	          to: '0, 0, ' + line1Length + ', 0',
	          dur: '1.2s',
	          begin: '0s',
	          calcMode: 'spline',
	          keyTimes: '0;1',
	          keySplines: '0.4,1,0.49,0.98',
	          repeatCount: 'indefinite'
	        })
	      ),
	      React__default.createElement(
	        'polyline',
	        {
	          fill: 'transparent',
	          stroke: '#3f96a5',
	          strokeWidth: '2',
	          points: line2Points
	        },
	        React__default.createElement('animate', {
	          attributeName: 'stroke-dasharray',
	          attributeType: 'XML',
	          from: '0, ' + line2Length / 2 + ', 0, ' + line2Length / 2,
	          to: '0, 0, ' + line2Length + ', 0',
	          dur: '1.2s',
	          begin: '0s',
	          calcMode: 'spline',
	          keyTimes: '0;1',
	          keySplines: '.4,1,.49,.98',
	          repeatCount: 'indefinite'
	        })
	      )
	    )
	  );
	};

	Decoration$4.propTypes = {
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$h = ".dv-decoration-6 {\n  width: 100%;\n  height: 100%;\n}\n.dv-decoration-6 svg {\n  transform-origin: left top;\n}\n";
	styleInject(css$h);

	var svgWH$2 = [300, 35];

	var rowNum$2 = 1;
	var rowPoints$2 = 40;

	var rectWidth = 7;
	var halfRectWidth = rectWidth / 2;

	function getPoints$2() {
	  var w = svgWH$2[0],
	      h = svgWH$2[1];


	  var horizontalGap = w / (rowPoints$2 + 1);
	  var verticalGap = h / (rowNum$2 + 1);

	  var points = new Array(rowNum$2).fill(0).map(function (foo, i) {
	    return new Array(rowPoints$2).fill(0).map(function (foo, j) {
	      return [horizontalGap * (j + 1), verticalGap * (i + 1)];
	    });
	  });

	  return points.reduce(function (all, item) {
	    return [].concat(toConsumableArray(all), toConsumableArray(item));
	  }, []);
	}

	function getData() {
	  var h = svgWH$2[1];


	  var heights = new Array(rowNum$2 * rowPoints$2).fill(0).map(function (foo) {
	    return Math.random() > 0.8 ? randomExtend(0.7 * h, h) : randomExtend(0.2 * h, 0.5 * h);
	  });

	  var minHeights = new Array(rowNum$2 * rowPoints$2).fill(0).map(function (foo, i) {
	    return heights[i] * Math.random();
	  });

	  var randoms = new Array(rowNum$2 * rowPoints$2).fill(0).map(function (foo) {
	    return Math.random() + 1.5;
	  });

	  return { heights: heights, minHeights: minHeights, randoms: randoms };
	}

	var Decoration$5 = function Decoration(_ref) {
	  var className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  function calcSVGData() {
	    return _extends({}, getData(), {
	      points: getPoints$2(),
	      svgScale: [width / svgWH$2[0], height / svgWH$2[1]]
	    });
	  }

	  var _useMemo = React.useMemo(calcSVGData, [width, height]),
	      points = _useMemo.points,
	      heights = _useMemo.heights,
	      minHeights = _useMemo.minHeights,
	      randoms = _useMemo.randoms,
	      svgScale = _useMemo.svgScale;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-decoration-6', className);
	  }, [[className]]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      {
	        width: svgWH$2[0] + 'px',
	        height: svgWH$2[1] + 'px',
	        style: { transform: 'scale(' + svgScale[0] + ',' + svgScale[1] + ')' }
	      },
	      points.map(function (point, i) {
	        return React__default.createElement(
	          'rect',
	          {
	            key: i,
	            fill: '#7acaec',
	            x: point[0] - halfRectWidth,
	            y: point[1] - heights[i] / 2,
	            width: rectWidth,
	            height: heights[i]
	          },
	          React__default.createElement('animate', {
	            attributeName: 'y',
	            values: point[1] - minHeights[i] / 2 + ';' + (point[1] - heights[i] / 2) + ';' + (point[1] - minHeights[i] / 2),
	            dur: randoms[i] + 's',
	            keyTimes: '0;0.5;1',
	            calcMode: 'spline',
	            keySplines: '0.42,0,0.58,1;0.42,0,0.58,1',
	            begin: '0s',
	            repeatCount: 'indefinite'
	          }),
	          React__default.createElement('animate', {
	            attributeName: 'height',
	            values: minHeights[i] + ';' + heights[i] + ';' + minHeights[i],
	            dur: randoms[i] + 's',
	            keyTimes: '0;0.5;1',
	            calcMode: 'spline',
	            keySplines: '0.42,0,0.58,1;0.42,0,0.58,1',
	            begin: '0s',
	            repeatCount: 'indefinite'
	          })
	        );
	      })
	    )
	  );
	};

	Decoration$5.propTypes = {
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$i = ".dv-decoration-7 {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n";
	styleInject(css$i);

	var Decoration$6 = function Decoration(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      style = _ref.style;

	  var classNames = React.useMemo(function () {
	    return classnames('dv-decoration-7', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style },
	    React__default.createElement(
	      'svg',
	      { width: '21px', height: '20px' },
	      React__default.createElement('polyline', {
	        strokeWidth: '4',
	        fill: 'transparent',
	        stroke: '#1dc1f5',
	        points: '10, 0 19, 10 10, 20'
	      }),
	      React__default.createElement('polyline', {
	        strokeWidth: '2',
	        fill: 'transparent',
	        stroke: '#1dc1f5',
	        points: '2, 0 11, 10 2, 20'
	      })
	    ),
	    children,
	    React__default.createElement(
	      'svg',
	      { width: '21px', height: '20px' },
	      React__default.createElement('polyline', {
	        strokeWidth: '4',
	        fill: 'transparent',
	        stroke: '#1dc1f5',
	        points: '11, 0 2, 10 11, 20'
	      }),
	      React__default.createElement('polyline', {
	        strokeWidth: '2',
	        fill: 'transparent',
	        stroke: '#1dc1f5',
	        points: '19, 0 10, 10 19, 20'
	      })
	    )
	  );
	};

	Decoration$6.propTypes = {
	  children: propTypes.node,
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$j = ".dv-decoration-8 {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n";
	styleInject(css$j);

	var Decoration$7 = function Decoration(_ref) {
	  var _ref$reverse = _ref.reverse,
	      reverse = _ref$reverse === undefined ? false : _ref$reverse,
	      className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var xPos = function xPos(pos) {
	    return !reverse ? pos : width - pos;
	  };

	  var _useMemo = React.useMemo(function () {
	    return [xPos(0) + ', 0 ' + xPos(30) + ', ' + height / 2, xPos(20) + ', 0 ' + xPos(50) + ', ' + height / 2 + ' ' + xPos(width) + ', ' + height / 2, xPos(0) + ', ' + (height - 3) + ', ' + xPos(200) + ', ' + (height - 3)];
	  }, [reverse, width, height]),
	      _useMemo2 = slicedToArray(_useMemo, 3),
	      pointsOne = _useMemo2[0],
	      pointsTwo = _useMemo2[1],
	      pointsThree = _useMemo2[2];

	  var classNames = React.useMemo(function () {
	    return classnames('dv-decoration-8', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      { width: width, height: height },
	      React__default.createElement('polyline', {
	        stroke: '#3f96a5',
	        strokeWidth: '2',
	        fill: 'transparent',
	        points: pointsOne
	      }),
	      React__default.createElement('polyline', {
	        stroke: '#3f96a5',
	        strokeWidth: '2',
	        fill: 'transparent',
	        points: pointsTwo
	      }),
	      React__default.createElement('polyline', {
	        stroke: '#3f96a5',
	        fill: 'transparent',
	        strokeWidth: '3',
	        points: pointsThree
	      })
	    )
	  );
	};

	Decoration$7.propTypes = {
	  reverse: propTypes.bool,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};Decoration$7.defaultProps = {
	  reverse: false
	};

	var css$k = ".dv-decoration-9 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dv-decoration-9 svg {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  transform-origin: left top;\n}\n";
	styleInject(css$k);

	var svgWH$3 = [100, 100];

	var Decoration$8 = function Decoration(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var polygonIdRef = React.useRef('decoration-9-polygon-' + Date.now());

	  var svgScale = React.useMemo(function () {
	    var w = svgWH$3[0],
	        h = svgWH$3[1];


	    return [width / w, height / h];
	  }, [width, height]);

	  var classNames = React.useMemo(function () {
	    return classnames('dv-decoration-9', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      {
	        width: svgWH$3[0] + 'px',
	        height: svgWH$3[1] + 'px',
	        style: { transform: 'scale(' + svgScale[0] + ',' + svgScale[1] + ')' }
	      },
	      React__default.createElement(
	        'defs',
	        null,
	        React__default.createElement('polygon', {
	          id: polygonIdRef.current,
	          points: '15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5'
	        })
	      ),
	      React__default.createElement(
	        'circle',
	        {
	          cx: '50',
	          cy: '50',
	          r: '45',
	          fill: 'transparent',
	          stroke: 'rgba(3, 166, 224, 0.5)',
	          strokeWidth: '10',
	          strokeDasharray: '80, 100, 30, 100'
	        },
	        React__default.createElement('animateTransform', {
	          attributeName: 'transform',
	          type: 'rotate',
	          values: '0 50 50;360 50 50',
	          dur: '3s',
	          repeatCount: 'indefinite'
	        })
	      ),
	      React__default.createElement(
	        'circle',
	        {
	          cx: '50',
	          cy: '50',
	          r: '45',
	          fill: 'transparent',
	          stroke: 'rgba(3, 166, 224, 0.8)',
	          strokeWidth: '6',
	          strokeDasharray: '50, 66, 100, 66'
	        },
	        React__default.createElement('animateTransform', {
	          attributeName: 'transform',
	          type: 'rotate',
	          values: '0 50 50;-360 50 50',
	          dur: '3s',
	          repeatCount: 'indefinite'
	        })
	      ),
	      React__default.createElement('circle', {
	        cx: '50',
	        cy: '50',
	        r: '38',
	        fill: 'transparent',
	        stroke: 'rgba(3, 166, 224, 0.2)',
	        strokeWidth: '1',
	        strokeDasharray: '5, 1'
	      }),
	      new Array(20).fill(0).map(function (foo, i) {
	        return React__default.createElement(
	          'use',
	          {
	            key: i,
	            href: '#' + polygonIdRef.current,
	            stroke: 'rgba(3, 166, 224, 0.6)',
	            fill: Math.random() > 0.4 ? 'transparent' : 'rgba(3, 166, 224, 0.8)'
	          },
	          React__default.createElement('animateTransform', {
	            attributeName: 'transform',
	            type: 'rotate',
	            values: '0 50 50;360 50 50',
	            dur: '3s',
	            begin: i * 0.15 + 's',
	            repeatCount: 'indefinite'
	          })
	        );
	      }),
	      React__default.createElement('circle', {
	        cx: '50',
	        cy: '50',
	        r: '26',
	        fill: 'transparent',
	        stroke: 'rgba(3, 166, 224, 0.2)',
	        strokeWidth: '1',
	        strokeDasharray: '5, 1'
	      })
	    ),
	    children
	  );
	};

	Decoration$8.propTypes = {
	  children: propTypes.node,
	  className: propTypes.string,
	  style: propTypes.object
	};

	var css$l = ".dv-decoration-10 {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n";
	styleInject(css$l);

	var Decoration$9 = function Decoration(_ref) {
	  var className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var _useRef$current = React.useRef({
	    animationId1: 'd10ani1' + Date.now(),
	    animationId2: 'd10ani2' + Date.now(),
	    animationId3: 'd10ani3' + Date.now(),
	    animationId4: 'd10ani4' + Date.now(),
	    animationId5: 'd10ani5' + Date.now(),
	    animationId6: 'd10ani6' + Date.now(),
	    animationId7: 'd10ani7' + Date.now()
	  }).current,
	      animationId1 = _useRef$current.animationId1,
	      animationId2 = _useRef$current.animationId2,
	      animationId3 = _useRef$current.animationId3,
	      animationId4 = _useRef$current.animationId4,
	      animationId5 = _useRef$current.animationId5,
	      animationId6 = _useRef$current.animationId6,
	      animationId7 = _useRef$current.animationId7;


	  var classNames = React.useMemo(function () {
	    return classnames('dv-decoration-10', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      { width: width, height: height },
	      React__default.createElement('polyline', {
	        stroke: 'rgba(0, 194, 255, 0.3)',
	        strokeWidth: '2',
	        points: '0, ' + height / 2 + ' ' + width + ', ' + height / 2
	      }),
	      React__default.createElement(
	        'polyline',
	        {
	          stroke: 'rgba(0, 194, 255, 1)',
	          strokeWidth: '2',
	          points: '5, ' + height / 2 + ' ' + (width * 0.2 - 3) + ', ' + height / 2,
	          strokeDasharray: '0, ' + width * 0.2,
	          fill: 'freeze'
	        },
	        React__default.createElement('animate', {
	          id: animationId2,
	          attributeName: 'stroke-dasharray',
	          values: '0, ' + width * 0.2 + ';' + width * 0.2 + ', 0;',
	          dur: '3s',
	          begin: animationId1 + '.end',
	          fill: 'freeze'
	        }),
	        React__default.createElement('animate', {
	          attributeName: 'stroke-dasharray',
	          values: width * 0.2 + ', 0;0, ' + width * 0.2,
	          dur: '0.01s',
	          begin: animationId7 + '.end',
	          fill: 'freeze'
	        })
	      ),
	      React__default.createElement(
	        'polyline',
	        {
	          stroke: 'rgba(0, 194, 255, 1)',
	          strokeWidth: '2',
	          points: width * 0.2 + 3 + ', ' + height / 2 + ' ' + (width * 0.8 - 3) + ', ' + height / 2,
	          strokeDasharray: '0, ' + width * 0.6
	        },
	        React__default.createElement('animate', {
	          id: animationId4,
	          attributeName: 'stroke-dasharray',
	          values: '0, ' + width * 0.6 + ';' + width * 0.6 + ', 0',
	          dur: '3s',
	          begin: animationId3 + '.end + 1s',
	          fill: 'freeze'
	        }),
	        React__default.createElement('animate', {
	          attributeName: 'stroke-dasharray',
	          values: width * 0.6 + ', 0;0, ' + width * 0.6,
	          dur: '0.01s',
	          begin: animationId7 + '.end',
	          fill: 'freeze'
	        })
	      ),
	      React__default.createElement(
	        'polyline',
	        {
	          stroke: 'rgba(0, 194, 255, 1)',
	          strokeWidth: '2',
	          points: width * 0.8 + 3 + ', ' + height / 2 + ' ' + (width - 5) + ', ' + height / 2,
	          'strke-dasharray': '0, ' + width * 0.2
	        },
	        React__default.createElement('animate', {
	          id: animationId6,
	          attributeName: 'stroke-dasharray',
	          values: '0, ' + width * 0.2 + ';' + width * 0.2 + ', 0',
	          dur: '3s',
	          begin: animationId5 + '.end + 1s',
	          fill: 'freeze'
	        }),
	        React__default.createElement('animate', {
	          attributeName: 'stroke-dasharray',
	          values: width * 0.2 + ', 0;0, ' + width * 0.3,
	          dur: '0.01s',
	          begin: animationId7 + '.end',
	          fill: 'freeze'
	        })
	      ),
	      React__default.createElement(
	        'circle',
	        { cx: '2', cy: height / 2, r: '2', fill: '#03709f' },
	        React__default.createElement('animate', {
	          id: animationId1,
	          attributeName: 'fill',
	          values: '#03709f;#00c2ff',
	          begin: '0s;' + animationId7 + '.end',
	          dur: '0.3s',
	          fill: 'freeze'
	        })
	      ),
	      React__default.createElement(
	        'circle',
	        { cx: width * 0.2, cy: height / 2, r: '2', fill: '#03709f' },
	        React__default.createElement('animate', {
	          id: animationId3,
	          attributeName: 'fill',
	          values: '#03709f;#00c2ff',
	          begin: animationId2 + '.end',
	          dur: '0.3s',
	          fill: 'freeze'
	        }),
	        React__default.createElement('animate', {
	          attributeName: 'fill',
	          values: '#03709f;#03709f',
	          dur: '0.01s',
	          begin: animationId7 + '.end',
	          fill: 'freeze'
	        })
	      ),
	      React__default.createElement(
	        'circle',
	        { cx: width * 0.8, cy: height / 2, r: '2', fill: '#03709f' },
	        React__default.createElement('animate', {
	          id: animationId5,
	          attributeName: 'fill',
	          values: '#03709f;#00c2ff',
	          begin: animationId4 + '.end',
	          dur: '0.3s',
	          fill: 'freeze'
	        }),
	        React__default.createElement('animate', {
	          attributeName: 'fill',
	          values: '#03709f;#03709f',
	          dur: '0.01s',
	          begin: animationId7 + '.end',
	          fill: 'freeze'
	        })
	      ),
	      React__default.createElement(
	        'circle',
	        { cx: width - 2, cy: height / 2, r: '2', fill: '#03709f' },
	        React__default.createElement('animate', {
	          id: animationId7,
	          attributeName: 'fill',
	          values: '#03709f;#00c2ff',
	          begin: animationId6 + '.end',
	          dur: '0.3s',
	          fill: 'freeze'
	        }),
	        React__default.createElement('animate', {
	          attributeName: 'fill',
	          values: '#03709f;#03709f',
	          dur: '0.01s',
	          begin: animationId7 + '.end',
	          fill: 'freeze'
	        })
	      )
	    )
	  );
	};

	Decoration$9.propTypes = {
	  className: propTypes.string,
	  style: propTypes.object
	};

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var classCallCheck$1 = _classCallCheck;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defineProperty$1 = _defineProperty;

	var keywords = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _default = new Map([['transparent', 'rgba(0,0,0,0)'], ['black', '#000000'], ['silver', '#C0C0C0'], ['gray', '#808080'], ['white', '#FFFFFF'], ['maroon', '#800000'], ['red', '#FF0000'], ['purple', '#800080'], ['fuchsia', '#FF00FF'], ['green', '#008000'], ['lime', '#00FF00'], ['olive', '#808000'], ['yellow', '#FFFF00'], ['navy', '#000080'], ['blue', '#0000FF'], ['teal', '#008080'], ['aqua', '#00FFFF'], ['aliceblue', '#f0f8ff'], ['antiquewhite', '#faebd7'], ['aquamarine', '#7fffd4'], ['azure', '#f0ffff'], ['beige', '#f5f5dc'], ['bisque', '#ffe4c4'], ['blanchedalmond', '#ffebcd'], ['blueviolet', '#8a2be2'], ['brown', '#a52a2a'], ['burlywood', '#deb887'], ['cadetblue', '#5f9ea0'], ['chartreuse', '#7fff00'], ['chocolate', '#d2691e'], ['coral', '#ff7f50'], ['cornflowerblue', '#6495ed'], ['cornsilk', '#fff8dc'], ['crimson', '#dc143c'], ['cyan', '#00ffff'], ['darkblue', '#00008b'], ['darkcyan', '#008b8b'], ['darkgoldenrod', '#b8860b'], ['darkgray', '#a9a9a9'], ['darkgreen', '#006400'], ['darkgrey', '#a9a9a9'], ['darkkhaki', '#bdb76b'], ['darkmagenta', '#8b008b'], ['darkolivegreen', '#556b2f'], ['darkorange', '#ff8c00'], ['darkorchid', '#9932cc'], ['darkred', '#8b0000'], ['darksalmon', '#e9967a'], ['darkseagreen', '#8fbc8f'], ['darkslateblue', '#483d8b'], ['darkslategray', '#2f4f4f'], ['darkslategrey', '#2f4f4f'], ['darkturquoise', '#00ced1'], ['darkviolet', '#9400d3'], ['deeppink', '#ff1493'], ['deepskyblue', '#00bfff'], ['dimgray', '#696969'], ['dimgrey', '#696969'], ['dodgerblue', '#1e90ff'], ['firebrick', '#b22222'], ['floralwhite', '#fffaf0'], ['forestgreen', '#228b22'], ['gainsboro', '#dcdcdc'], ['ghostwhite', '#f8f8ff'], ['gold', '#ffd700'], ['goldenrod', '#daa520'], ['greenyellow', '#adff2f'], ['grey', '#808080'], ['honeydew', '#f0fff0'], ['hotpink', '#ff69b4'], ['indianred', '#cd5c5c'], ['indigo', '#4b0082'], ['ivory', '#fffff0'], ['khaki', '#f0e68c'], ['lavender', '#e6e6fa'], ['lavenderblush', '#fff0f5'], ['lawngreen', '#7cfc00'], ['lemonchiffon', '#fffacd'], ['lightblue', '#add8e6'], ['lightcoral', '#f08080'], ['lightcyan', '#e0ffff'], ['lightgoldenrodyellow', '#fafad2'], ['lightgray', '#d3d3d3'], ['lightgreen', '#90ee90'], ['lightgrey', '#d3d3d3'], ['lightpink', '#ffb6c1'], ['lightsalmon', '#ffa07a'], ['lightseagreen', '#20b2aa'], ['lightskyblue', '#87cefa'], ['lightslategray', '#778899'], ['lightslategrey', '#778899'], ['lightsteelblue', '#b0c4de'], ['lightyellow', '#ffffe0'], ['limegreen', '#32cd32'], ['linen', '#faf0e6'], ['magenta', '#ff00ff'], ['mediumaquamarine', '#66cdaa'], ['mediumblue', '#0000cd'], ['mediumorchid', '#ba55d3'], ['mediumpurple', '#9370db'], ['mediumseagreen', '#3cb371'], ['mediumslateblue', '#7b68ee'], ['mediumspringgreen', '#00fa9a'], ['mediumturquoise', '#48d1cc'], ['mediumvioletred', '#c71585'], ['midnightblue', '#191970'], ['mintcream', '#f5fffa'], ['mistyrose', '#ffe4e1'], ['moccasin', '#ffe4b5'], ['navajowhite', '#ffdead'], ['oldlace', '#fdf5e6'], ['olivedrab', '#6b8e23'], ['orange', '#ffa500'], ['orangered', '#ff4500'], ['orchid', '#da70d6'], ['palegoldenrod', '#eee8aa'], ['palegreen', '#98fb98'], ['paleturquoise', '#afeeee'], ['palevioletred', '#db7093'], ['papayawhip', '#ffefd5'], ['peachpuff', '#ffdab9'], ['peru', '#cd853f'], ['pink', '#ffc0cb'], ['plum', '#dda0dd'], ['powderblue', '#b0e0e6'], ['rosybrown', '#bc8f8f'], ['royalblue', '#4169e1'], ['saddlebrown', '#8b4513'], ['salmon', '#fa8072'], ['sandybrown', '#f4a460'], ['seagreen', '#2e8b57'], ['seashell', '#fff5ee'], ['sienna', '#a0522d'], ['skyblue', '#87ceeb'], ['slateblue', '#6a5acd'], ['slategray', '#708090'], ['slategrey', '#708090'], ['snow', '#fffafa'], ['springgreen', '#00ff7f'], ['steelblue', '#4682b4'], ['tan', '#d2b48c'], ['thistle', '#d8bfd8'], ['tomato', '#ff6347'], ['turquoise', '#40e0d0'], ['violet', '#ee82ee'], ['wheat', '#f5deb3'], ['whitesmoke', '#f5f5f5'], ['yellowgreen', '#9acd32']]);

	exports["default"] = _default;
	});

	unwrapExports(keywords);

	var lib = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRgbValue = getRgbValue;
	exports.getRgbaValue = getRgbaValue;
	exports.getOpacity = getOpacity;
	exports.toRgb = toRgb;
	exports.toHex = toHex;
	exports.getColorFromRgbValue = getColorFromRgbValue;
	exports.darken = darken;
	exports.lighten = lighten;
	exports.fade = fade;
	exports["default"] = void 0;

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);

	var _keywords = interopRequireDefault$1(keywords);

	var hexReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	var rgbReg = /^(rgb|rgba|RGB|RGBA)/;
	var rgbaReg = /^(rgba|RGBA)/;
	/**
	 * @description Color validator
	 * @param {String} color Hex|Rgb|Rgba color or color keyword
	 * @return {String|Boolean} Valid color Or false
	 */

	function validator(color) {
	  var isHex = hexReg.test(color);
	  var isRgb = rgbReg.test(color);
	  if (isHex || isRgb) return color;
	  color = getColorByKeyword(color);

	  if (!color) {
	    console.error('Color: Invalid color!');
	    return false;
	  }

	  return color;
	}
	/**
	 * @description Get color by keyword
	 * @param {String} keyword Color keyword like red, green and etc.
	 * @return {String|Boolean} Hex or rgba color (Invalid keyword will return false)
	 */


	function getColorByKeyword(keyword) {
	  if (!keyword) {
	    console.error('getColorByKeywords: Missing parameters!');
	    return false;
	  }

	  if (!_keywords["default"].has(keyword)) return false;
	  return _keywords["default"].get(keyword);
	}
	/**
	 * @description Get the Rgb value of the color
	 * @param {String} color Hex|Rgb|Rgba color or color keyword
	 * @return {Array<Number>|Boolean} Rgb value of the color (Invalid input will return false)
	 */


	function getRgbValue(color) {
	  if (!color) {
	    console.error('getRgbValue: Missing parameters!');
	    return false;
	  }

	  color = validator(color);
	  if (!color) return false;
	  var isHex = hexReg.test(color);
	  var isRgb = rgbReg.test(color);
	  var lowerColor = color.toLowerCase();
	  if (isHex) return getRgbValueFromHex(lowerColor);
	  if (isRgb) return getRgbValueFromRgb(lowerColor);
	}
	/**
	 * @description Get the rgb value of the hex color
	 * @param {String} color Hex color
	 * @return {Array<Number>} Rgb value of the color
	 */


	function getRgbValueFromHex(color) {
	  color = color.replace('#', '');
	  if (color.length === 3) color = Array.from(color).map(function (hexNum) {
	    return hexNum + hexNum;
	  }).join('');
	  color = color.split('');
	  return new Array(3).fill(0).map(function (t, i) {
	    return parseInt("0x".concat(color[i * 2]).concat(color[i * 2 + 1]));
	  });
	}
	/**
	 * @description Get the rgb value of the rgb/rgba color
	 * @param {String} color Hex color
	 * @return {Array} Rgb value of the color
	 */


	function getRgbValueFromRgb(color) {
	  return color.replace(/rgb\(|rgba\(|\)/g, '').split(',').slice(0, 3).map(function (n) {
	    return parseInt(n);
	  });
	}
	/**
	 * @description Get the Rgba value of the color
	 * @param {String} color Hex|Rgb|Rgba color or color keyword
	 * @return {Array<Number>|Boolean} Rgba value of the color (Invalid input will return false)
	 */


	function getRgbaValue(color) {
	  if (!color) {
	    console.error('getRgbaValue: Missing parameters!');
	    return false;
	  }

	  var colorValue = getRgbValue(color);
	  if (!colorValue) return false;
	  colorValue.push(getOpacity(color));
	  return colorValue;
	}
	/**
	 * @description Get the opacity of color
	 * @param {String} color Hex|Rgb|Rgba color or color keyword
	 * @return {Number|Boolean} Color opacity (Invalid input will return false)
	 */


	function getOpacity(color) {
	  if (!color) {
	    console.error('getOpacity: Missing parameters!');
	    return false;
	  }

	  color = validator(color);
	  if (!color) return false;
	  var isRgba = rgbaReg.test(color);
	  if (!isRgba) return 1;
	  color = color.toLowerCase();
	  return Number(color.split(',').slice(-1)[0].replace(/[)|\s]/g, ''));
	}
	/**
	 * @description Convert color to Rgb|Rgba color
	 * @param {String} color   Hex|Rgb|Rgba color or color keyword
	 * @param {Number} opacity The opacity of color
	 * @return {String|Boolean} Rgb|Rgba color (Invalid input will return false)
	 */


	function toRgb(color, opacity) {
	  if (!color) {
	    console.error('toRgb: Missing parameters!');
	    return false;
	  }

	  var rgbValue = getRgbValue(color);
	  if (!rgbValue) return false;
	  var addOpacity = typeof opacity === 'number';
	  if (addOpacity) return 'rgba(' + rgbValue.join(',') + ",".concat(opacity, ")");
	  return 'rgb(' + rgbValue.join(',') + ')';
	}
	/**
	 * @description Convert color to Hex color
	 * @param {String} color Hex|Rgb|Rgba color or color keyword
	 * @return {String|Boolean} Hex color (Invalid input will return false)
	 */


	function toHex(color) {
	  if (!color) {
	    console.error('toHex: Missing parameters!');
	    return false;
	  }

	  if (hexReg.test(color)) return color;
	  color = getRgbValue(color);
	  if (!color) return false;
	  return '#' + color.map(function (n) {
	    return Number(n).toString(16);
	  }).map(function (n) {
	    return n === '0' ? '00' : n;
	  }).join('');
	}
	/**
	 * @description Get Color from Rgb|Rgba value
	 * @param {Array<Number>} value Rgb|Rgba color value
	 * @return {String|Boolean} Rgb|Rgba color (Invalid input will return false)
	 */


	function getColorFromRgbValue(value) {
	  if (!value) {
	    console.error('getColorFromRgbValue: Missing parameters!');
	    return false;
	  }

	  var valueLength = value.length;

	  if (valueLength !== 3 && valueLength !== 4) {
	    console.error('getColorFromRgbValue: Value is illegal!');
	    return false;
	  }

	  var color = valueLength === 3 ? 'rgb(' : 'rgba(';
	  color += value.join(',') + ')';
	  return color;
	}
	/**
	 * @description Deepen color
	 * @param {String} color Hex|Rgb|Rgba color or color keyword
	 * @return {Number} Percent of Deepen (1-100)
	 * @return {String|Boolean} Rgba color (Invalid input will return false)
	 */


	function darken(color) {
	  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	  if (!color) {
	    console.error('darken: Missing parameters!');
	    return false;
	  }

	  var rgbaValue = getRgbaValue(color);
	  if (!rgbaValue) return false;
	  rgbaValue = rgbaValue.map(function (v, i) {
	    return i === 3 ? v : v - Math.ceil(2.55 * percent);
	  }).map(function (v) {
	    return v < 0 ? 0 : v;
	  });
	  return getColorFromRgbValue(rgbaValue);
	}
	/**
	 * @description Brighten color
	 * @param {String} color Hex|Rgb|Rgba color or color keyword
	 * @return {Number} Percent of brighten (1-100)
	 * @return {String|Boolean} Rgba color (Invalid input will return false)
	 */


	function lighten(color) {
	  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	  if (!color) {
	    console.error('lighten: Missing parameters!');
	    return false;
	  }

	  var rgbaValue = getRgbaValue(color);
	  if (!rgbaValue) return false;
	  rgbaValue = rgbaValue.map(function (v, i) {
	    return i === 3 ? v : v + Math.ceil(2.55 * percent);
	  }).map(function (v) {
	    return v > 255 ? 255 : v;
	  });
	  return getColorFromRgbValue(rgbaValue);
	}
	/**
	 * @description Adjust color opacity
	 * @param {String} color   Hex|Rgb|Rgba color or color keyword
	 * @param {Number} Percent of opacity
	 * @return {String|Boolean} Rgba color (Invalid input will return false)
	 */


	function fade(color) {
	  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

	  if (!color) {
	    console.error('fade: Missing parameters!');
	    return false;
	  }

	  var rgbValue = getRgbValue(color);
	  if (!rgbValue) return false;
	  var rgbaValue = [].concat((0, _toConsumableArray2["default"])(rgbValue), [percent / 100]);
	  return getColorFromRgbValue(rgbaValue);
	}

	var _default = {
	  fade: fade,
	  toHex: toHex,
	  toRgb: toRgb,
	  darken: darken,
	  lighten: lighten,
	  getOpacity: getOpacity,
	  getRgbValue: getRgbValue,
	  getRgbaValue: getRgbaValue,
	  getColorFromRgbValue: getColorFromRgbValue
	};
	exports["default"] = _default;
	});

	unwrapExports(lib);
	var lib_1 = lib.getRgbValue;
	var lib_2 = lib.getRgbaValue;
	var lib_3 = lib.getOpacity;
	var lib_4 = lib.toRgb;
	var lib_5 = lib.toHex;
	var lib_6 = lib.getColorFromRgbValue;
	var lib_7 = lib.darken;
	var lib_8 = lib.lighten;
	var lib_9 = lib.fade;

	var bezierCurveToPolyline_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bezierCurveToPolyline = bezierCurveToPolyline;
	exports.getBezierCurveLength = getBezierCurveLength;
	exports["default"] = void 0;

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);

	var sqrt = Math.sqrt,
	    pow = Math.pow,
	    ceil = Math.ceil,
	    abs = Math.abs; // Initialize the number of points per curve

	var defaultSegmentPointsNum = 50;
	/**
	 * @example data structure of bezierCurve
	 * bezierCurve = [
	 *  // Starting point of the curve
	 *  [10, 10],
	 *  // BezierCurve segment data (controlPoint1, controlPoint2, endPoint)
	 *  [
	 *    [20, 20], [40, 20], [50, 10]
	 *  ],
	 *  ...
	 * ]
	 */

	/**
	 * @description               Abstract the curve as a polyline consisting of N points
	 * @param {Array} bezierCurve bezierCurve data
	 * @param {Number} precision  calculation accuracy. Recommended for 1-20. Default = 5
	 * @return {Object}           Calculation results and related data
	 * @return {Array}            Option.segmentPoints Point data that constitutes a polyline after calculation
	 * @return {Number}           Option.cycles Number of iterations
	 * @return {Number}           Option.rounds The number of recursions for the last iteration
	 */

	function abstractBezierCurveToPolyline(bezierCurve) {
	  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
	  var segmentsNum = bezierCurve.length - 1;
	  var startPoint = bezierCurve[0];
	  var endPoint = bezierCurve[segmentsNum][2];
	  var segments = bezierCurve.slice(1);
	  var getSegmentTPointFuns = segments.map(function (seg, i) {
	    var beginPoint = i === 0 ? startPoint : segments[i - 1][2];
	    return createGetBezierCurveTPointFun.apply(void 0, [beginPoint].concat((0, _toConsumableArray2["default"])(seg)));
	  }); // Initialize the curve to a polyline

	  var segmentPointsNum = new Array(segmentsNum).fill(defaultSegmentPointsNum);
	  var segmentPoints = getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum); // Calculate uniformly distributed points by iteratively

	  var result = calcUniformPointsByIteration(segmentPoints, getSegmentTPointFuns, segments, precision);
	  result.segmentPoints.push(endPoint);
	  return result;
	}
	/**
	 * @description  Generate a method for obtaining corresponding point by t according to curve data
	 * @param {Array} beginPoint    BezierCurve begin point. [x, y]
	 * @param {Array} controlPoint1 BezierCurve controlPoint1. [x, y]
	 * @param {Array} controlPoint2 BezierCurve controlPoint2. [x, y]
	 * @param {Array} endPoint      BezierCurve end point. [x, y]
	 * @return {Function} Expected function
	 */


	function createGetBezierCurveTPointFun(beginPoint, controlPoint1, controlPoint2, endPoint) {
	  return function (t) {
	    var tSubed1 = 1 - t;
	    var tSubed1Pow3 = pow(tSubed1, 3);
	    var tSubed1Pow2 = pow(tSubed1, 2);
	    var tPow3 = pow(t, 3);
	    var tPow2 = pow(t, 2);
	    return [beginPoint[0] * tSubed1Pow3 + 3 * controlPoint1[0] * t * tSubed1Pow2 + 3 * controlPoint2[0] * tPow2 * tSubed1 + endPoint[0] * tPow3, beginPoint[1] * tSubed1Pow3 + 3 * controlPoint1[1] * t * tSubed1Pow2 + 3 * controlPoint2[1] * tPow2 * tSubed1 + endPoint[1] * tPow3];
	  };
	}
	/**
	 * @description Get the distance between two points
	 * @param {Array} point1 BezierCurve begin point. [x, y]
	 * @param {Array} point2 BezierCurve controlPoint1. [x, y]
	 * @return {Number} Expected distance
	 */


	function getTwoPointDistance(_ref, _ref2) {
	  var _ref3 = (0, _slicedToArray2["default"])(_ref, 2),
	      ax = _ref3[0],
	      ay = _ref3[1];

	  var _ref4 = (0, _slicedToArray2["default"])(_ref2, 2),
	      bx = _ref4[0],
	      by = _ref4[1];

	  return sqrt(pow(ax - bx, 2) + pow(ay - by, 2));
	}
	/**
	 * @description Get the sum of the array of numbers
	 * @param {Array} nums An array of numbers
	 * @return {Number} Expected sum
	 */


	function getNumsSum(nums) {
	  return nums.reduce(function (sum, num) {
	    return sum + num;
	  }, 0);
	}
	/**
	 * @description Get the distance of multiple sets of points
	 * @param {Array} segmentPoints Multiple sets of point data
	 * @return {Array} Distance of multiple sets of point data
	 */


	function getSegmentPointsDistance(segmentPoints) {
	  return segmentPoints.map(function (points, i) {
	    return new Array(points.length - 1).fill(0).map(function (temp, j) {
	      return getTwoPointDistance(points[j], points[j + 1]);
	    });
	  });
	}
	/**
	 * @description Get the distance of multiple sets of points
	 * @param {Array} segmentPoints Multiple sets of point data
	 * @return {Array} Distance of multiple sets of point data
	 */


	function getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum) {
	  return getSegmentTPointFuns.map(function (getSegmentTPointFun, i) {
	    var tGap = 1 / segmentPointsNum[i];
	    return new Array(segmentPointsNum[i]).fill('').map(function (foo, j) {
	      return getSegmentTPointFun(j * tGap);
	    });
	  });
	}
	/**
	 * @description Get the sum of deviations between line segment and the average length
	 * @param {Array} segmentPointsDistance Segment length of polyline
	 * @param {Number} avgLength            Average length of the line segment
	 * @return {Number} Deviations
	 */


	function getAllDeviations(segmentPointsDistance, avgLength) {
	  return segmentPointsDistance.map(function (seg) {
	    return seg.map(function (s) {
	      return abs(s - avgLength);
	    });
	  }).map(function (seg) {
	    return getNumsSum(seg);
	  }).reduce(function (total, v) {
	    return total + v;
	  }, 0);
	}
	/**
	 * @description Calculate uniformly distributed points by iteratively
	 * @param {Array} segmentPoints        Multiple setd of points that make up a polyline
	 * @param {Array} getSegmentTPointFuns Functions of get a point on the curve with t
	 * @param {Array} segments             BezierCurve data
	 * @param {Number} precision           Calculation accuracy
	 * @return {Object} Calculation results and related data
	 * @return {Array}  Option.segmentPoints Point data that constitutes a polyline after calculation
	 * @return {Number} Option.cycles Number of iterations
	 * @return {Number} Option.rounds The number of recursions for the last iteration
	 */


	function calcUniformPointsByIteration(segmentPoints, getSegmentTPointFuns, segments, precision) {
	  // The number of loops for the current iteration
	  var rounds = 4; // Number of iterations

	  var cycles = 1;

	  var _loop = function _loop() {
	    // Recalculate the number of points per curve based on the last iteration data
	    var totalPointsNum = segmentPoints.reduce(function (total, seg) {
	      return total + seg.length;
	    }, 0); // Add last points of segment to calc exact segment length

	    segmentPoints.forEach(function (seg, i) {
	      return seg.push(segments[i][2]);
	    });
	    var segmentPointsDistance = getSegmentPointsDistance(segmentPoints);
	    var lineSegmentNum = segmentPointsDistance.reduce(function (total, seg) {
	      return total + seg.length;
	    }, 0);
	    var segmentlength = segmentPointsDistance.map(function (seg) {
	      return getNumsSum(seg);
	    });
	    var totalLength = getNumsSum(segmentlength);
	    var avgLength = totalLength / lineSegmentNum; // Check if precision is reached

	    var allDeviations = getAllDeviations(segmentPointsDistance, avgLength);
	    if (allDeviations <= precision) return "break";
	    totalPointsNum = ceil(avgLength / precision * totalPointsNum * 1.1);
	    var segmentPointsNum = segmentlength.map(function (length) {
	      return ceil(length / totalLength * totalPointsNum);
	    }); // Calculate the points after redistribution

	    segmentPoints = getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum);
	    totalPointsNum = segmentPoints.reduce(function (total, seg) {
	      return total + seg.length;
	    }, 0);
	    var segmentPointsForLength = JSON.parse(JSON.stringify(segmentPoints));
	    segmentPointsForLength.forEach(function (seg, i) {
	      return seg.push(segments[i][2]);
	    });
	    segmentPointsDistance = getSegmentPointsDistance(segmentPointsForLength);
	    lineSegmentNum = segmentPointsDistance.reduce(function (total, seg) {
	      return total + seg.length;
	    }, 0);
	    segmentlength = segmentPointsDistance.map(function (seg) {
	      return getNumsSum(seg);
	    });
	    totalLength = getNumsSum(segmentlength);
	    avgLength = totalLength / lineSegmentNum;
	    var stepSize = 1 / totalPointsNum / 10; // Recursively for each segment of the polyline

	    getSegmentTPointFuns.forEach(function (getSegmentTPointFun, i) {
	      var currentSegmentPointsNum = segmentPointsNum[i];
	      var t = new Array(currentSegmentPointsNum).fill('').map(function (foo, j) {
	        return j / segmentPointsNum[i];
	      }); // Repeated recursive offset

	      for (var r = 0; r < rounds; r++) {
	        var distance = getSegmentPointsDistance([segmentPoints[i]])[0];
	        var deviations = distance.map(function (d) {
	          return d - avgLength;
	        });
	        var offset = 0;

	        for (var j = 0; j < currentSegmentPointsNum; j++) {
	          if (j === 0) return;
	          offset += deviations[j - 1];
	          t[j] -= stepSize * offset;
	          if (t[j] > 1) t[j] = 1;
	          if (t[j] < 0) t[j] = 0;
	          segmentPoints[i][j] = getSegmentTPointFun(t[j]);
	        }
	      }
	    });
	    rounds *= 4;
	    cycles++;
	  };

	  do {
	    var _ret = _loop();

	    if (_ret === "break") break;
	  } while (rounds <= 1025);

	  segmentPoints = segmentPoints.reduce(function (all, seg) {
	    return all.concat(seg);
	  }, []);
	  return {
	    segmentPoints: segmentPoints,
	    cycles: cycles,
	    rounds: rounds
	  };
	}
	/**
	 * @description Get the polyline corresponding to the Bezier curve
	 * @param {Array} bezierCurve BezierCurve data
	 * @param {Number} precision  Calculation accuracy. Recommended for 1-20. Default = 5
	 * @return {Array|Boolean} Point data that constitutes a polyline after calculation (Invalid input will return false)
	 */


	function bezierCurveToPolyline(bezierCurve) {
	  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

	  if (!bezierCurve) {
	    console.error('bezierCurveToPolyline: Missing parameters!');
	    return false;
	  }

	  if (!(bezierCurve instanceof Array)) {
	    console.error('bezierCurveToPolyline: Parameter bezierCurve must be an array!');
	    return false;
	  }

	  if (typeof precision !== 'number') {
	    console.error('bezierCurveToPolyline: Parameter precision must be a number!');
	    return false;
	  }

	  var _abstractBezierCurveT = abstractBezierCurveToPolyline(bezierCurve, precision),
	      segmentPoints = _abstractBezierCurveT.segmentPoints;

	  return segmentPoints;
	}
	/**
	 * @description Get the bezier curve length
	 * @param {Array} bezierCurve bezierCurve data
	 * @param {Number} precision  calculation accuracy. Recommended for 5-10. Default = 5
	 * @return {Number|Boolean} BezierCurve length (Invalid input will return false)
	 */


	function getBezierCurveLength(bezierCurve) {
	  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

	  if (!bezierCurve) {
	    console.error('getBezierCurveLength: Missing parameters!');
	    return false;
	  }

	  if (!(bezierCurve instanceof Array)) {
	    console.error('getBezierCurveLength: Parameter bezierCurve must be an array!');
	    return false;
	  }

	  if (typeof precision !== 'number') {
	    console.error('getBezierCurveLength: Parameter precision must be a number!');
	    return false;
	  }

	  var _abstractBezierCurveT2 = abstractBezierCurveToPolyline(bezierCurve, precision),
	      segmentPoints = _abstractBezierCurveT2.segmentPoints; // Calculate the total length of the points that make up the polyline


	  var pointsDistance = getSegmentPointsDistance([segmentPoints])[0];
	  var length = getNumsSum(pointsDistance);
	  return length;
	}

	var _default = bezierCurveToPolyline;
	exports["default"] = _default;
	});

	unwrapExports(bezierCurveToPolyline_1);
	var bezierCurveToPolyline_2 = bezierCurveToPolyline_1.bezierCurveToPolyline;
	var bezierCurveToPolyline_3 = bezierCurveToPolyline_1.getBezierCurveLength;

	var polylineToBezierCurve_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);

	/**
	 * @description Abstract the polyline formed by N points into a set of bezier curve
	 * @param {Array} polyline A set of points that make up a polyline
	 * @param {Boolean} close  Closed curve
	 * @param {Number} offsetA Smoothness
	 * @param {Number} offsetB Smoothness
	 * @return {Array|Boolean} A set of bezier curve (Invalid input will return false)
	 */
	function polylineToBezierCurve(polyline) {
	  var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var offsetA = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.25;
	  var offsetB = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.25;

	  if (!(polyline instanceof Array)) {
	    console.error('polylineToBezierCurve: Parameter polyline must be an array!');
	    return false;
	  }

	  if (polyline.length <= 2) {
	    console.error('polylineToBezierCurve: Converting to a curve requires at least 3 points!');
	    return false;
	  }

	  var startPoint = polyline[0];
	  var bezierCurveLineNum = polyline.length - 1;
	  var bezierCurvePoints = new Array(bezierCurveLineNum).fill(0).map(function (foo, i) {
	    return [].concat((0, _toConsumableArray2["default"])(getBezierCurveLineControlPoints(polyline, i, close, offsetA, offsetB)), [polyline[i + 1]]);
	  });
	  if (close) closeBezierCurve(bezierCurvePoints, startPoint);
	  bezierCurvePoints.unshift(polyline[0]);
	  return bezierCurvePoints;
	}
	/**
	 * @description Get the control points of the Bezier curve
	 * @param {Array} polyline A set of points that make up a polyline
	 * @param {Number} index   The index of which get controls points's point in polyline
	 * @param {Boolean} close  Closed curve
	 * @param {Number} offsetA Smoothness
	 * @param {Number} offsetB Smoothness
	 * @return {Array} Control points
	 */


	function getBezierCurveLineControlPoints(polyline, index) {
	  var close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  var offsetA = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.25;
	  var offsetB = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.25;
	  var pointNum = polyline.length;
	  if (pointNum < 3 || index >= pointNum) return;
	  var beforePointIndex = index - 1;
	  if (beforePointIndex < 0) beforePointIndex = close ? pointNum + beforePointIndex : 0;
	  var afterPointIndex = index + 1;
	  if (afterPointIndex >= pointNum) afterPointIndex = close ? afterPointIndex - pointNum : pointNum - 1;
	  var afterNextPointIndex = index + 2;
	  if (afterNextPointIndex >= pointNum) afterNextPointIndex = close ? afterNextPointIndex - pointNum : pointNum - 1;
	  var pointBefore = polyline[beforePointIndex];
	  var pointMiddle = polyline[index];
	  var pointAfter = polyline[afterPointIndex];
	  var pointAfterNext = polyline[afterNextPointIndex];
	  return [[pointMiddle[0] + offsetA * (pointAfter[0] - pointBefore[0]), pointMiddle[1] + offsetA * (pointAfter[1] - pointBefore[1])], [pointAfter[0] - offsetB * (pointAfterNext[0] - pointMiddle[0]), pointAfter[1] - offsetB * (pointAfterNext[1] - pointMiddle[1])]];
	}
	/**
	 * @description Get the last curve of the closure
	 * @param {Array} bezierCurve A set of sub-curve
	 * @param {Array} startPoint  Start point
	 * @return {Array} The last curve for closure
	 */


	function closeBezierCurve(bezierCurve, startPoint) {
	  var firstSubCurve = bezierCurve[0];
	  var lastSubCurve = bezierCurve.slice(-1)[0];
	  bezierCurve.push([getSymmetryPoint(lastSubCurve[1], lastSubCurve[2]), getSymmetryPoint(firstSubCurve[0], startPoint), startPoint]);
	  return bezierCurve;
	}
	/**
	 * @description Get the symmetry point
	 * @param {Array} point       Symmetric point
	 * @param {Array} centerPoint Symmetric center
	 * @return {Array} Symmetric point
	 */


	function getSymmetryPoint(point, centerPoint) {
	  var _point = (0, _slicedToArray2["default"])(point, 2),
	      px = _point[0],
	      py = _point[1];

	  var _centerPoint = (0, _slicedToArray2["default"])(centerPoint, 2),
	      cx = _centerPoint[0],
	      cy = _centerPoint[1];

	  var minusX = cx - px;
	  var minusY = cy - py;
	  return [cx + minusX, cy + minusY];
	}

	var _default = polylineToBezierCurve;
	exports["default"] = _default;
	});

	unwrapExports(polylineToBezierCurve_1);

	var lib$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "bezierCurveToPolyline", {
	  enumerable: true,
	  get: function get() {
	    return bezierCurveToPolyline_1.bezierCurveToPolyline;
	  }
	});
	Object.defineProperty(exports, "getBezierCurveLength", {
	  enumerable: true,
	  get: function get() {
	    return bezierCurveToPolyline_1.getBezierCurveLength;
	  }
	});
	Object.defineProperty(exports, "polylineToBezierCurve", {
	  enumerable: true,
	  get: function get() {
	    return _polylineToBezierCurve["default"];
	  }
	});
	exports["default"] = void 0;



	var _polylineToBezierCurve = interopRequireDefault$1(polylineToBezierCurve_1);

	var _default = {
	  bezierCurveToPolyline: bezierCurveToPolyline_1.bezierCurveToPolyline,
	  getBezierCurveLength: bezierCurveToPolyline_1.getBezierCurveLength,
	  polylineToBezierCurve: _polylineToBezierCurve["default"]
	};
	exports["default"] = _default;
	});

	unwrapExports(lib$1);

	var canvas = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.drawPolylinePath = drawPolylinePath;
	exports.drawBezierCurvePath = drawBezierCurvePath;
	exports["default"] = void 0;

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);

	/**
	 * @description Draw a polyline path
	 * @param {Object} ctx        Canvas 2d context
	 * @param {Array} points      The points that makes up a polyline
	 * @param {Boolean} beginPath Whether to execute beginPath
	 * @param {Boolean} closePath Whether to execute closePath
	 * @return {Undefined} Void
	 */
	function drawPolylinePath(ctx, points) {
	  var beginPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  var closePath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  if (!ctx || points.length < 2) return false;
	  if (beginPath) ctx.beginPath();
	  points.forEach(function (point, i) {
	    return point && (i === 0 ? ctx.moveTo.apply(ctx, (0, _toConsumableArray2["default"])(point)) : ctx.lineTo.apply(ctx, (0, _toConsumableArray2["default"])(point)));
	  });
	  if (closePath) ctx.closePath();
	}
	/**
	 * @description Draw a bezier curve path
	 * @param {Object} ctx        Canvas 2d context
	 * @param {Array} points      The points that makes up a bezier curve
	 * @param {Array} moveTo      The point need to excute moveTo
	 * @param {Boolean} beginPath Whether to execute beginPath
	 * @param {Boolean} closePath Whether to execute closePath
	 * @return {Undefined} Void
	 */


	function drawBezierCurvePath(ctx, points) {
	  var moveTo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  var beginPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  var closePath = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	  if (!ctx || !points) return false;
	  if (beginPath) ctx.beginPath();
	  if (moveTo) ctx.moveTo.apply(ctx, (0, _toConsumableArray2["default"])(moveTo));
	  points.forEach(function (item) {
	    return item && ctx.bezierCurveTo.apply(ctx, (0, _toConsumableArray2["default"])(item[0]).concat((0, _toConsumableArray2["default"])(item[1]), (0, _toConsumableArray2["default"])(item[2])));
	  });
	  if (closePath) ctx.closePath();
	}

	var _default = {
	  drawPolylinePath: drawPolylinePath,
	  drawBezierCurvePath: drawBezierCurvePath
	};
	exports["default"] = _default;
	});

	unwrapExports(canvas);
	var canvas_1 = canvas.drawPolylinePath;
	var canvas_2 = canvas.drawBezierCurvePath;

	var graphs_1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.extendNewGraph = extendNewGraph;
	exports["default"] = exports.text = exports.bezierCurve = exports.smoothline = exports.polyline = exports.regPolygon = exports.sector = exports.arc = exports.ring = exports.rect = exports.ellipse = exports.circle = void 0;

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);

	var _bezierCurve2 = interopRequireDefault$1(lib$1);





	var polylineToBezierCurve = _bezierCurve2["default"].polylineToBezierCurve,
	    bezierCurveToPolyline = _bezierCurve2["default"].bezierCurveToPolyline;
	var circle = {
	  shape: {
	    rx: 0,
	    ry: 0,
	    r: 0
	  },
	  validator: function validator(_ref) {
	    var shape = _ref.shape;
	    var rx = shape.rx,
	        ry = shape.ry,
	        r = shape.r;

	    if (typeof rx !== 'number' || typeof ry !== 'number' || typeof r !== 'number') {
	      console.error('Circle shape configuration is abnormal!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref2, _ref3) {
	    var ctx = _ref2.ctx;
	    var shape = _ref3.shape;
	    ctx.beginPath();
	    var rx = shape.rx,
	        ry = shape.ry,
	        r = shape.r;
	    ctx.arc(rx, ry, r > 0 ? r : 0.01, 0, Math.PI * 2);
	    ctx.fill();
	    ctx.stroke();
	    ctx.closePath();
	  },
	  hoverCheck: function hoverCheck(position, _ref4) {
	    var shape = _ref4.shape;
	    var rx = shape.rx,
	        ry = shape.ry,
	        r = shape.r;
	    return (0, util.checkPointIsInCircle)(position, rx, ry, r);
	  },
	  setGraphCenter: function setGraphCenter(e, _ref5) {
	    var shape = _ref5.shape,
	        style = _ref5.style;
	    var rx = shape.rx,
	        ry = shape.ry;
	    style.graphCenter = [rx, ry];
	  },
	  move: function move(_ref6, _ref7) {
	    var movementX = _ref6.movementX,
	        movementY = _ref6.movementY;
	    var shape = _ref7.shape;
	    this.attr('shape', {
	      rx: shape.rx + movementX,
	      ry: shape.ry + movementY
	    });
	  }
	};
	exports.circle = circle;
	var ellipse = {
	  shape: {
	    rx: 0,
	    ry: 0,
	    hr: 0,
	    vr: 0
	  },
	  validator: function validator(_ref8) {
	    var shape = _ref8.shape;
	    var rx = shape.rx,
	        ry = shape.ry,
	        hr = shape.hr,
	        vr = shape.vr;

	    if (typeof rx !== 'number' || typeof ry !== 'number' || typeof hr !== 'number' || typeof vr !== 'number') {
	      console.error('Ellipse shape configuration is abnormal!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref9, _ref10) {
	    var ctx = _ref9.ctx;
	    var shape = _ref10.shape;
	    ctx.beginPath();
	    var rx = shape.rx,
	        ry = shape.ry,
	        hr = shape.hr,
	        vr = shape.vr;
	    ctx.ellipse(rx, ry, hr > 0 ? hr : 0.01, vr > 0 ? vr : 0.01, 0, 0, Math.PI * 2);
	    ctx.fill();
	    ctx.stroke();
	    ctx.closePath();
	  },
	  hoverCheck: function hoverCheck(position, _ref11) {
	    var shape = _ref11.shape;
	    var rx = shape.rx,
	        ry = shape.ry,
	        hr = shape.hr,
	        vr = shape.vr;
	    var a = Math.max(hr, vr);
	    var b = Math.min(hr, vr);
	    var c = Math.sqrt(a * a - b * b);
	    var leftFocusPoint = [rx - c, ry];
	    var rightFocusPoint = [rx + c, ry];
	    var distance = (0, util.getTwoPointDistance)(position, leftFocusPoint) + (0, util.getTwoPointDistance)(position, rightFocusPoint);
	    return distance <= 2 * a;
	  },
	  setGraphCenter: function setGraphCenter(e, _ref12) {
	    var shape = _ref12.shape,
	        style = _ref12.style;
	    var rx = shape.rx,
	        ry = shape.ry;
	    style.graphCenter = [rx, ry];
	  },
	  move: function move(_ref13, _ref14) {
	    var movementX = _ref13.movementX,
	        movementY = _ref13.movementY;
	    var shape = _ref14.shape;
	    this.attr('shape', {
	      rx: shape.rx + movementX,
	      ry: shape.ry + movementY
	    });
	  }
	};
	exports.ellipse = ellipse;
	var rect = {
	  shape: {
	    x: 0,
	    y: 0,
	    w: 0,
	    h: 0
	  },
	  validator: function validator(_ref15) {
	    var shape = _ref15.shape;
	    var x = shape.x,
	        y = shape.y,
	        w = shape.w,
	        h = shape.h;

	    if (typeof x !== 'number' || typeof y !== 'number' || typeof w !== 'number' || typeof h !== 'number') {
	      console.error('Rect shape configuration is abnormal!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref16, _ref17) {
	    var ctx = _ref16.ctx;
	    var shape = _ref17.shape;
	    ctx.beginPath();
	    var x = shape.x,
	        y = shape.y,
	        w = shape.w,
	        h = shape.h;
	    ctx.rect(x, y, w, h);
	    ctx.fill();
	    ctx.stroke();
	    ctx.closePath();
	  },
	  hoverCheck: function hoverCheck(position, _ref18) {
	    var shape = _ref18.shape;
	    var x = shape.x,
	        y = shape.y,
	        w = shape.w,
	        h = shape.h;
	    return (0, util.checkPointIsInRect)(position, x, y, w, h);
	  },
	  setGraphCenter: function setGraphCenter(e, _ref19) {
	    var shape = _ref19.shape,
	        style = _ref19.style;
	    var x = shape.x,
	        y = shape.y,
	        w = shape.w,
	        h = shape.h;
	    style.graphCenter = [x + w / 2, y + h / 2];
	  },
	  move: function move(_ref20, _ref21) {
	    var movementX = _ref20.movementX,
	        movementY = _ref20.movementY;
	    var shape = _ref21.shape;
	    this.attr('shape', {
	      x: shape.x + movementX,
	      y: shape.y + movementY
	    });
	  }
	};
	exports.rect = rect;
	var ring = {
	  shape: {
	    rx: 0,
	    ry: 0,
	    r: 0
	  },
	  validator: function validator(_ref22) {
	    var shape = _ref22.shape;
	    var rx = shape.rx,
	        ry = shape.ry,
	        r = shape.r;

	    if (typeof rx !== 'number' || typeof ry !== 'number' || typeof r !== 'number') {
	      console.error('Ring shape configuration is abnormal!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref23, _ref24) {
	    var ctx = _ref23.ctx;
	    var shape = _ref24.shape;
	    ctx.beginPath();
	    var rx = shape.rx,
	        ry = shape.ry,
	        r = shape.r;
	    ctx.arc(rx, ry, r > 0 ? r : 0.01, 0, Math.PI * 2);
	    ctx.stroke();
	    ctx.closePath();
	  },
	  hoverCheck: function hoverCheck(position, _ref25) {
	    var shape = _ref25.shape,
	        style = _ref25.style;
	    var rx = shape.rx,
	        ry = shape.ry,
	        r = shape.r;
	    var lineWidth = style.lineWidth;
	    var halfLineWidth = lineWidth / 2;
	    var minDistance = r - halfLineWidth;
	    var maxDistance = r + halfLineWidth;
	    var distance = (0, util.getTwoPointDistance)(position, [rx, ry]);
	    return distance >= minDistance && distance <= maxDistance;
	  },
	  setGraphCenter: function setGraphCenter(e, _ref26) {
	    var shape = _ref26.shape,
	        style = _ref26.style;
	    var rx = shape.rx,
	        ry = shape.ry;
	    style.graphCenter = [rx, ry];
	  },
	  move: function move(_ref27, _ref28) {
	    var movementX = _ref27.movementX,
	        movementY = _ref27.movementY;
	    var shape = _ref28.shape;
	    this.attr('shape', {
	      rx: shape.rx + movementX,
	      ry: shape.ry + movementY
	    });
	  }
	};
	exports.ring = ring;
	var arc = {
	  shape: {
	    rx: 0,
	    ry: 0,
	    r: 0,
	    startAngle: 0,
	    endAngle: 0,
	    clockWise: true
	  },
	  validator: function validator(_ref29) {
	    var shape = _ref29.shape;
	    var keys = ['rx', 'ry', 'r', 'startAngle', 'endAngle'];

	    if (keys.find(function (key) {
	      return typeof shape[key] !== 'number';
	    })) {
	      console.error('Arc shape configuration is abnormal!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref30, _ref31) {
	    var ctx = _ref30.ctx;
	    var shape = _ref31.shape;
	    ctx.beginPath();
	    var rx = shape.rx,
	        ry = shape.ry,
	        r = shape.r,
	        startAngle = shape.startAngle,
	        endAngle = shape.endAngle,
	        clockWise = shape.clockWise;
	    ctx.arc(rx, ry, r > 0 ? r : 0.001, startAngle, endAngle, !clockWise);
	    ctx.stroke();
	    ctx.closePath();
	  },
	  hoverCheck: function hoverCheck(position, _ref32) {
	    var shape = _ref32.shape,
	        style = _ref32.style;
	    var rx = shape.rx,
	        ry = shape.ry,
	        r = shape.r,
	        startAngle = shape.startAngle,
	        endAngle = shape.endAngle,
	        clockWise = shape.clockWise;
	    var lineWidth = style.lineWidth;
	    var halfLineWidth = lineWidth / 2;
	    var insideRadius = r - halfLineWidth;
	    var outsideRadius = r + halfLineWidth;
	    return !(0, util.checkPointIsInSector)(position, rx, ry, insideRadius, startAngle, endAngle, clockWise) && (0, util.checkPointIsInSector)(position, rx, ry, outsideRadius, startAngle, endAngle, clockWise);
	  },
	  setGraphCenter: function setGraphCenter(e, _ref33) {
	    var shape = _ref33.shape,
	        style = _ref33.style;
	    var rx = shape.rx,
	        ry = shape.ry;
	    style.graphCenter = [rx, ry];
	  },
	  move: function move(_ref34, _ref35) {
	    var movementX = _ref34.movementX,
	        movementY = _ref34.movementY;
	    var shape = _ref35.shape;
	    this.attr('shape', {
	      rx: shape.rx + movementX,
	      ry: shape.ry + movementY
	    });
	  }
	};
	exports.arc = arc;
	var sector = {
	  shape: {
	    rx: 0,
	    ry: 0,
	    r: 0,
	    startAngle: 0,
	    endAngle: 0,
	    clockWise: true
	  },
	  validator: function validator(_ref36) {
	    var shape = _ref36.shape;
	    var keys = ['rx', 'ry', 'r', 'startAngle', 'endAngle'];

	    if (keys.find(function (key) {
	      return typeof shape[key] !== 'number';
	    })) {
	      console.error('Sector shape configuration is abnormal!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref37, _ref38) {
	    var ctx = _ref37.ctx;
	    var shape = _ref38.shape;
	    ctx.beginPath();
	    var rx = shape.rx,
	        ry = shape.ry,
	        r = shape.r,
	        startAngle = shape.startAngle,
	        endAngle = shape.endAngle,
	        clockWise = shape.clockWise;
	    ctx.arc(rx, ry, r > 0 ? r : 0.01, startAngle, endAngle, !clockWise);
	    ctx.lineTo(rx, ry);
	    ctx.closePath();
	    ctx.stroke();
	    ctx.fill();
	  },
	  hoverCheck: function hoverCheck(position, _ref39) {
	    var shape = _ref39.shape;
	    var rx = shape.rx,
	        ry = shape.ry,
	        r = shape.r,
	        startAngle = shape.startAngle,
	        endAngle = shape.endAngle,
	        clockWise = shape.clockWise;
	    return (0, util.checkPointIsInSector)(position, rx, ry, r, startAngle, endAngle, clockWise);
	  },
	  setGraphCenter: function setGraphCenter(e, _ref40) {
	    var shape = _ref40.shape,
	        style = _ref40.style;
	    var rx = shape.rx,
	        ry = shape.ry;
	    style.graphCenter = [rx, ry];
	  },
	  move: function move(_ref41, _ref42) {
	    var movementX = _ref41.movementX,
	        movementY = _ref41.movementY;
	    var shape = _ref42.shape;
	    var rx = shape.rx,
	        ry = shape.ry;
	    this.attr('shape', {
	      rx: rx + movementX,
	      ry: ry + movementY
	    });
	  }
	};
	exports.sector = sector;
	var regPolygon = {
	  shape: {
	    rx: 0,
	    ry: 0,
	    r: 0,
	    side: 0
	  },
	  validator: function validator(_ref43) {
	    var shape = _ref43.shape;
	    var side = shape.side;
	    var keys = ['rx', 'ry', 'r', 'side'];

	    if (keys.find(function (key) {
	      return typeof shape[key] !== 'number';
	    })) {
	      console.error('RegPolygon shape configuration is abnormal!');
	      return false;
	    }

	    if (side < 3) {
	      console.error('RegPolygon at least trigon!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref44, _ref45) {
	    var ctx = _ref44.ctx;
	    var shape = _ref45.shape,
	        cache = _ref45.cache;
	    ctx.beginPath();
	    var rx = shape.rx,
	        ry = shape.ry,
	        r = shape.r,
	        side = shape.side;

	    if (!cache.points || cache.rx !== rx || cache.ry !== ry || cache.r !== r || cache.side !== side) {
	      var _points = (0, util.getRegularPolygonPoints)(rx, ry, r, side);

	      Object.assign(cache, {
	        points: _points,
	        rx: rx,
	        ry: ry,
	        r: r,
	        side: side
	      });
	    }

	    var points = cache.points;
	    (0, canvas.drawPolylinePath)(ctx, points);
	    ctx.closePath();
	    ctx.stroke();
	    ctx.fill();
	  },
	  hoverCheck: function hoverCheck(position, _ref46) {
	    var cache = _ref46.cache;
	    var points = cache.points;
	    return (0, util.checkPointIsInPolygon)(position, points);
	  },
	  setGraphCenter: function setGraphCenter(e, _ref47) {
	    var shape = _ref47.shape,
	        style = _ref47.style;
	    var rx = shape.rx,
	        ry = shape.ry;
	    style.graphCenter = [rx, ry];
	  },
	  move: function move(_ref48, _ref49) {
	    var movementX = _ref48.movementX,
	        movementY = _ref48.movementY;
	    var shape = _ref49.shape,
	        cache = _ref49.cache;
	    var rx = shape.rx,
	        ry = shape.ry;
	    cache.rx += movementX;
	    cache.ry += movementY;
	    this.attr('shape', {
	      rx: rx + movementX,
	      ry: ry + movementY
	    });
	    cache.points = cache.points.map(function (_ref50) {
	      var _ref51 = (0, _slicedToArray2["default"])(_ref50, 2),
	          x = _ref51[0],
	          y = _ref51[1];

	      return [x + movementX, y + movementY];
	    });
	  }
	};
	exports.regPolygon = regPolygon;
	var polyline = {
	  shape: {
	    points: [],
	    close: false
	  },
	  validator: function validator(_ref52) {
	    var shape = _ref52.shape;
	    var points = shape.points;

	    if (!(points instanceof Array)) {
	      console.error('Polyline points should be an array!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref53, _ref54) {
	    var ctx = _ref53.ctx;
	    var shape = _ref54.shape,
	        lineWidth = _ref54.style.lineWidth;
	    ctx.beginPath();
	    var points = shape.points,
	        close = shape.close;
	    if (lineWidth === 1) points = (0, util.eliminateBlur)(points);
	    (0, canvas.drawPolylinePath)(ctx, points);

	    if (close) {
	      ctx.closePath();
	      ctx.fill();
	      ctx.stroke();
	    } else {
	      ctx.stroke();
	    }
	  },
	  hoverCheck: function hoverCheck(position, _ref55) {
	    var shape = _ref55.shape,
	        style = _ref55.style;
	    var points = shape.points,
	        close = shape.close;
	    var lineWidth = style.lineWidth;

	    if (close) {
	      return (0, util.checkPointIsInPolygon)(position, points);
	    } else {
	      return (0, util.checkPointIsNearPolyline)(position, points, lineWidth);
	    }
	  },
	  setGraphCenter: function setGraphCenter(e, _ref56) {
	    var shape = _ref56.shape,
	        style = _ref56.style;
	    var points = shape.points;
	    style.graphCenter = points[0];
	  },
	  move: function move(_ref57, _ref58) {
	    var movementX = _ref57.movementX,
	        movementY = _ref57.movementY;
	    var shape = _ref58.shape;
	    var points = shape.points;
	    var moveAfterPoints = points.map(function (_ref59) {
	      var _ref60 = (0, _slicedToArray2["default"])(_ref59, 2),
	          x = _ref60[0],
	          y = _ref60[1];

	      return [x + movementX, y + movementY];
	    });
	    this.attr('shape', {
	      points: moveAfterPoints
	    });
	  }
	};
	exports.polyline = polyline;
	var smoothline = {
	  shape: {
	    points: [],
	    close: false
	  },
	  validator: function validator(_ref61) {
	    var shape = _ref61.shape;
	    var points = shape.points;

	    if (!(points instanceof Array)) {
	      console.error('Smoothline points should be an array!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref62, _ref63) {
	    var ctx = _ref62.ctx;
	    var shape = _ref63.shape,
	        cache = _ref63.cache;
	    var points = shape.points,
	        close = shape.close;

	    if (!cache.points || cache.points.toString() !== points.toString()) {
	      var _bezierCurve = polylineToBezierCurve(points, close);

	      var hoverPoints = bezierCurveToPolyline(_bezierCurve);
	      Object.assign(cache, {
	        points: (0, util.deepClone)(points, true),
	        bezierCurve: _bezierCurve,
	        hoverPoints: hoverPoints
	      });
	    }

	    var bezierCurve = cache.bezierCurve;
	    ctx.beginPath();
	    (0, canvas.drawBezierCurvePath)(ctx, bezierCurve.slice(1), bezierCurve[0]);

	    if (close) {
	      ctx.closePath();
	      ctx.fill();
	      ctx.stroke();
	    } else {
	      ctx.stroke();
	    }
	  },
	  hoverCheck: function hoverCheck(position, _ref64) {
	    var cache = _ref64.cache,
	        shape = _ref64.shape,
	        style = _ref64.style;
	    var hoverPoints = cache.hoverPoints;
	    var close = shape.close;
	    var lineWidth = style.lineWidth;

	    if (close) {
	      return (0, util.checkPointIsInPolygon)(position, hoverPoints);
	    } else {
	      return (0, util.checkPointIsNearPolyline)(position, hoverPoints, lineWidth);
	    }
	  },
	  setGraphCenter: function setGraphCenter(e, _ref65) {
	    var shape = _ref65.shape,
	        style = _ref65.style;
	    var points = shape.points;
	    style.graphCenter = points[0];
	  },
	  move: function move(_ref66, _ref67) {
	    var movementX = _ref66.movementX,
	        movementY = _ref66.movementY;
	    var shape = _ref67.shape,
	        cache = _ref67.cache;
	    var points = shape.points;
	    var moveAfterPoints = points.map(function (_ref68) {
	      var _ref69 = (0, _slicedToArray2["default"])(_ref68, 2),
	          x = _ref69[0],
	          y = _ref69[1];

	      return [x + movementX, y + movementY];
	    });
	    cache.points = moveAfterPoints;

	    var _cache$bezierCurve$ = (0, _slicedToArray2["default"])(cache.bezierCurve[0], 2),
	        fx = _cache$bezierCurve$[0],
	        fy = _cache$bezierCurve$[1];

	    var curves = cache.bezierCurve.slice(1);
	    cache.bezierCurve = [[fx + movementX, fy + movementY]].concat((0, _toConsumableArray2["default"])(curves.map(function (curve) {
	      return curve.map(function (_ref70) {
	        var _ref71 = (0, _slicedToArray2["default"])(_ref70, 2),
	            x = _ref71[0],
	            y = _ref71[1];

	        return [x + movementX, y + movementY];
	      });
	    })));
	    cache.hoverPoints = cache.hoverPoints.map(function (_ref72) {
	      var _ref73 = (0, _slicedToArray2["default"])(_ref72, 2),
	          x = _ref73[0],
	          y = _ref73[1];

	      return [x + movementX, y + movementY];
	    });
	    this.attr('shape', {
	      points: moveAfterPoints
	    });
	  }
	};
	exports.smoothline = smoothline;
	var bezierCurve = {
	  shape: {
	    points: [],
	    close: false
	  },
	  validator: function validator(_ref74) {
	    var shape = _ref74.shape;
	    var points = shape.points;

	    if (!(points instanceof Array)) {
	      console.error('BezierCurve points should be an array!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref75, _ref76) {
	    var ctx = _ref75.ctx;
	    var shape = _ref76.shape,
	        cache = _ref76.cache;
	    var points = shape.points,
	        close = shape.close;

	    if (!cache.points || cache.points.toString() !== points.toString()) {
	      var hoverPoints = bezierCurveToPolyline(points, 20);
	      Object.assign(cache, {
	        points: (0, util.deepClone)(points, true),
	        hoverPoints: hoverPoints
	      });
	    }

	    ctx.beginPath();
	    (0, canvas.drawBezierCurvePath)(ctx, points.slice(1), points[0]);

	    if (close) {
	      ctx.closePath();
	      ctx.fill();
	      ctx.stroke();
	    } else {
	      ctx.stroke();
	    }
	  },
	  hoverCheck: function hoverCheck(position, _ref77) {
	    var cache = _ref77.cache,
	        shape = _ref77.shape,
	        style = _ref77.style;
	    var hoverPoints = cache.hoverPoints;
	    var close = shape.close;
	    var lineWidth = style.lineWidth;

	    if (close) {
	      return (0, util.checkPointIsInPolygon)(position, hoverPoints);
	    } else {
	      return (0, util.checkPointIsNearPolyline)(position, hoverPoints, lineWidth);
	    }
	  },
	  setGraphCenter: function setGraphCenter(e, _ref78) {
	    var shape = _ref78.shape,
	        style = _ref78.style;
	    var points = shape.points;
	    style.graphCenter = points[0];
	  },
	  move: function move(_ref79, _ref80) {
	    var movementX = _ref79.movementX,
	        movementY = _ref79.movementY;
	    var shape = _ref80.shape,
	        cache = _ref80.cache;
	    var points = shape.points;

	    var _points$ = (0, _slicedToArray2["default"])(points[0], 2),
	        fx = _points$[0],
	        fy = _points$[1];

	    var curves = points.slice(1);
	    var bezierCurve = [[fx + movementX, fy + movementY]].concat((0, _toConsumableArray2["default"])(curves.map(function (curve) {
	      return curve.map(function (_ref81) {
	        var _ref82 = (0, _slicedToArray2["default"])(_ref81, 2),
	            x = _ref82[0],
	            y = _ref82[1];

	        return [x + movementX, y + movementY];
	      });
	    })));
	    cache.points = bezierCurve;
	    cache.hoverPoints = cache.hoverPoints.map(function (_ref83) {
	      var _ref84 = (0, _slicedToArray2["default"])(_ref83, 2),
	          x = _ref84[0],
	          y = _ref84[1];

	      return [x + movementX, y + movementY];
	    });
	    this.attr('shape', {
	      points: bezierCurve
	    });
	  }
	};
	exports.bezierCurve = bezierCurve;
	var text = {
	  shape: {
	    content: '',
	    position: [],
	    maxWidth: undefined,
	    rowGap: 0
	  },
	  validator: function validator(_ref85) {
	    var shape = _ref85.shape;
	    var content = shape.content,
	        position = shape.position,
	        rowGap = shape.rowGap;

	    if (typeof content !== 'string') {
	      console.error('Text content should be a string!');
	      return false;
	    }

	    if (!(position instanceof Array)) {
	      console.error('Text position should be an array!');
	      return false;
	    }

	    if (typeof rowGap !== 'number') {
	      console.error('Text rowGap should be a number!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref86, _ref87) {
	    var ctx = _ref86.ctx;
	    var shape = _ref87.shape;
	    var content = shape.content,
	        position = shape.position,
	        maxWidth = shape.maxWidth,
	        rowGap = shape.rowGap;
	    var textBaseline = ctx.textBaseline,
	        font = ctx.font;
	    var fontSize = parseInt(font.replace(/\D/g, ''));

	    var _position = position,
	        _position2 = (0, _slicedToArray2["default"])(_position, 2),
	        x = _position2[0],
	        y = _position2[1];

	    content = content.split('\n');
	    var rowNum = content.length;
	    var lineHeight = fontSize + rowGap;
	    var allHeight = rowNum * lineHeight - rowGap;
	    var offset = 0;

	    if (textBaseline === 'middle') {
	      offset = allHeight / 2;
	      y += fontSize / 2;
	    }

	    if (textBaseline === 'bottom') {
	      offset = allHeight;
	      y += fontSize;
	    }

	    position = new Array(rowNum).fill(0).map(function (foo, i) {
	      return [x, y + i * lineHeight - offset];
	    });
	    ctx.beginPath();
	    content.forEach(function (text, i) {
	      ctx.fillText.apply(ctx, [text].concat((0, _toConsumableArray2["default"])(position[i]), [maxWidth]));
	      ctx.strokeText.apply(ctx, [text].concat((0, _toConsumableArray2["default"])(position[i]), [maxWidth]));
	    });
	    ctx.closePath();
	  },
	  hoverCheck: function hoverCheck(position, _ref88) {
	    var shape = _ref88.shape,
	        style = _ref88.style;
	    return false;
	  },
	  setGraphCenter: function setGraphCenter(e, _ref89) {
	    var shape = _ref89.shape,
	        style = _ref89.style;
	    var position = shape.position;
	    style.graphCenter = (0, _toConsumableArray2["default"])(position);
	  },
	  move: function move(_ref90, _ref91) {
	    var movementX = _ref90.movementX,
	        movementY = _ref90.movementY;
	    var shape = _ref91.shape;

	    var _shape$position = (0, _slicedToArray2["default"])(shape.position, 2),
	        x = _shape$position[0],
	        y = _shape$position[1];

	    this.attr('shape', {
	      position: [x + movementX, y + movementY]
	    });
	  }
	};
	exports.text = text;
	var graphs = new Map([['circle', circle], ['ellipse', ellipse], ['rect', rect], ['ring', ring], ['arc', arc], ['sector', sector], ['regPolygon', regPolygon], ['polyline', polyline], ['smoothline', smoothline], ['bezierCurve', bezierCurve], ['text', text]]);
	var _default = graphs;
	/**
	 * @description Extend new graph
	 * @param {String} name   Name of Graph
	 * @param {Object} config Configuration of Graph
	 * @return {Undefined} Void
	 */

	exports["default"] = _default;

	function extendNewGraph(name, config) {
	  if (!name || !config) {
	    console.error('ExtendNewGraph Missing Parameters!');
	    return;
	  }

	  if (!config.shape) {
	    console.error('Required attribute of shape to extendNewGraph!');
	    return;
	  }

	  if (!config.validator) {
	    console.error('Required function of validator to extendNewGraph!');
	    return;
	  }

	  if (!config.draw) {
	    console.error('Required function of draw to extendNewGraph!');
	    return;
	  }

	  graphs.set(name, config);
	}
	});

	unwrapExports(graphs_1);
	var graphs_2 = graphs_1.extendNewGraph;
	var graphs_3 = graphs_1.text;
	var graphs_4 = graphs_1.bezierCurve;
	var graphs_5 = graphs_1.smoothline;
	var graphs_6 = graphs_1.polyline;
	var graphs_7 = graphs_1.regPolygon;
	var graphs_8 = graphs_1.sector;
	var graphs_9 = graphs_1.arc;
	var graphs_10 = graphs_1.ring;
	var graphs_11 = graphs_1.rect;
	var graphs_12 = graphs_1.ellipse;
	var graphs_13 = graphs_1.circle;

	var runtime_1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  Function("r", "regeneratorRuntime = r")(runtime);
	}
	});

	var regenerator = runtime_1;

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }

	  if (info.done) {
	    resolve(value);
	  } else {
	    Promise.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
	}

	var asyncToGenerator$1 = _asyncToGenerator;

	var style_class = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);

	var _classCallCheck2 = interopRequireDefault$1(classCallCheck$1);





	/**
	 * @description Class Style
	 * @param {Object} style  Style configuration
	 * @return {Style} Instance of Style
	 */
	var Style = function Style(style) {
	  (0, _classCallCheck2["default"])(this, Style);
	  this.colorProcessor(style);
	  var defaultStyle = {
	    /**
	     * @description Rgba value of graph fill color
	     * @type {Array}
	     * @default fill = [0, 0, 0, 1]
	     */
	    fill: [0, 0, 0, 1],

	    /**
	     * @description Rgba value of graph stroke color
	     * @type {Array}
	     * @default stroke = [0, 0, 0, 1]
	     */
	    stroke: [0, 0, 0, 0],

	    /**
	     * @description Opacity of graph
	     * @type {Number}
	     * @default opacity = 1
	     */
	    opacity: 1,

	    /**
	     * @description LineCap of Ctx
	     * @type {String}
	     * @default lineCap = null
	     * @example lineCap = 'butt'|'round'|'square'
	     */
	    lineCap: null,

	    /**
	     * @description Linejoin of Ctx
	     * @type {String}
	     * @default lineJoin = null
	     * @example lineJoin = 'round'|'bevel'|'miter'
	     */
	    lineJoin: null,

	    /**
	     * @description LineDash of Ctx
	     * @type {Array}
	     * @default lineDash = null
	     * @example lineDash = [10, 10]
	     */
	    lineDash: null,

	    /**
	     * @description LineDashOffset of Ctx
	     * @type {Number}
	     * @default lineDashOffset = null
	     * @example lineDashOffset = 10
	     */
	    lineDashOffset: null,

	    /**
	     * @description ShadowBlur of Ctx
	     * @type {Number}
	     * @default shadowBlur = 0
	     */
	    shadowBlur: 0,

	    /**
	     * @description Rgba value of graph shadow color
	     * @type {Array}
	     * @default shadowColor = [0, 0, 0, 0]
	     */
	    shadowColor: [0, 0, 0, 0],

	    /**
	     * @description ShadowOffsetX of Ctx
	     * @type {Number}
	     * @default shadowOffsetX = 0
	     */
	    shadowOffsetX: 0,

	    /**
	     * @description ShadowOffsetY of Ctx
	     * @type {Number}
	     * @default shadowOffsetY = 0
	     */
	    shadowOffsetY: 0,

	    /**
	     * @description LineWidth of Ctx
	     * @type {Number}
	     * @default lineWidth = 0
	     */
	    lineWidth: 0,

	    /**
	     * @description Center point of the graph
	     * @type {Array}
	     * @default graphCenter = null
	     * @example graphCenter = [10, 10]
	     */
	    graphCenter: null,

	    /**
	     * @description Graph scale
	     * @type {Array}
	     * @default scale = null
	     * @example scale = [1.5, 1.5]
	     */
	    scale: null,

	    /**
	     * @description Graph rotation degree
	     * @type {Number}
	     * @default rotate = null
	     * @example rotate = 10
	     */
	    rotate: null,

	    /**
	     * @description Graph translate distance
	     * @type {Array}
	     * @default translate = null
	     * @example translate = [10, 10]
	     */
	    translate: null,

	    /**
	     * @description Cursor status when hover
	     * @type {String}
	     * @default hoverCursor = 'pointer'
	     * @example hoverCursor = 'default'|'pointer'|'auto'|'crosshair'|'move'|'wait'|...
	     */
	    hoverCursor: 'pointer',

	    /**
	     * @description Font style of Ctx
	     * @type {String}
	     * @default fontStyle = 'normal'
	     * @example fontStyle = 'normal'|'italic'|'oblique'
	     */
	    fontStyle: 'normal',

	    /**
	     * @description Font varient of Ctx
	     * @type {String}
	     * @default fontVarient = 'normal'
	     * @example fontVarient = 'normal'|'small-caps'
	     */
	    fontVarient: 'normal',

	    /**
	     * @description Font weight of Ctx
	     * @type {String|Number}
	     * @default fontWeight = 'normal'
	     * @example fontWeight = 'normal'|'bold'|'bolder'|'lighter'|Number
	     */
	    fontWeight: 'normal',

	    /**
	     * @description Font size of Ctx
	     * @type {Number}
	     * @default fontSize = 10
	     */
	    fontSize: 10,

	    /**
	     * @description Font family of Ctx
	     * @type {String}
	     * @default fontFamily = 'Arial'
	     */
	    fontFamily: 'Arial',

	    /**
	     * @description TextAlign of Ctx
	     * @type {String}
	     * @default textAlign = 'center'
	     * @example textAlign = 'start'|'end'|'left'|'right'|'center'
	     */
	    textAlign: 'center',

	    /**
	     * @description TextBaseline of Ctx
	     * @type {String}
	     * @default textBaseline = 'middle'
	     * @example textBaseline = 'top'|'bottom'|'middle'|'alphabetic'|'hanging'
	     */
	    textBaseline: 'middle',

	    /**
	     * @description The color used to create the gradient
	     * @type {Array}
	     * @default gradientColor = null
	     * @example gradientColor = ['#000', '#111', '#222']
	     */
	    gradientColor: null,

	    /**
	     * @description Gradient type
	     * @type {String}
	     * @default gradientType = 'linear'
	     * @example gradientType = 'linear' | 'radial'
	     */
	    gradientType: 'linear',

	    /**
	     * @description Gradient params
	     * @type {Array}
	     * @default gradientParams = null
	     * @example gradientParams = [x0, y0, x1, y1] (Linear Gradient)
	     * @example gradientParams = [x0, y0, r0, x1, y1, r1] (Radial Gradient)
	     */
	    gradientParams: null,

	    /**
	     * @description When to use gradients
	     * @type {String}
	     * @default gradientWith = 'stroke'
	     * @example gradientWith = 'stroke' | 'fill'
	     */
	    gradientWith: 'stroke',

	    /**
	     * @description Gradient color stops
	     * @type {String}
	     * @default gradientStops = 'auto'
	     * @example gradientStops = 'auto' | [0, .2, .3, 1]
	     */
	    gradientStops: 'auto',

	    /**
	     * @description Extended color that supports animation transition
	     * @type {Array|Object}
	     * @default colors = null
	     * @example colors = ['#000', '#111', '#222', 'red' ]
	     * @example colors = { a: '#000', b: '#111' }
	     */
	    colors: null
	  };
	  Object.assign(this, defaultStyle, style);
	};
	/**
	 * @description Set colors to rgba value
	 * @param {Object} style style config
	 * @param {Boolean} reverse Whether to perform reverse operation
	 * @return {Undefined} Void
	 */


	exports["default"] = Style;

	Style.prototype.colorProcessor = function (style) {
	  var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var processor = reverse ? lib.getColorFromRgbValue : lib.getRgbaValue;
	  var colorProcessorKeys = ['fill', 'stroke', 'shadowColor'];
	  var allKeys = Object.keys(style);
	  var colorKeys = allKeys.filter(function (key) {
	    return colorProcessorKeys.find(function (k) {
	      return k === key;
	    });
	  });
	  colorKeys.forEach(function (key) {
	    return style[key] = processor(style[key]);
	  });
	  var gradientColor = style.gradientColor,
	      colors = style.colors;
	  if (gradientColor) style.gradientColor = gradientColor.map(function (c) {
	    return processor(c);
	  });

	  if (colors) {
	    var colorsKeys = Object.keys(colors);
	    colorsKeys.forEach(function (key) {
	      return colors[key] = processor(colors[key]);
	    });
	  }
	};
	/**
	 * @description Init graph style
	 * @param {Object} ctx Context of canvas
	 * @return {Undefined} Void
	 */


	Style.prototype.initStyle = function (ctx) {
	  initTransform(ctx, this);
	  initGraphStyle(ctx, this);
	  initGradient(ctx, this);
	};
	/**
	 * @description Init canvas transform
	 * @param {Object} ctx  Context of canvas
	 * @param {Style} style Instance of Style
	 * @return {Undefined} Void
	 */


	function initTransform(ctx, style) {
	  ctx.save();
	  var graphCenter = style.graphCenter,
	      rotate = style.rotate,
	      scale = style.scale,
	      translate = style.translate;
	  if (!(graphCenter instanceof Array)) return;
	  ctx.translate.apply(ctx, (0, _toConsumableArray2["default"])(graphCenter));
	  if (rotate) ctx.rotate(rotate * Math.PI / 180);
	  if (scale instanceof Array) ctx.scale.apply(ctx, (0, _toConsumableArray2["default"])(scale));
	  if (translate) ctx.translate.apply(ctx, (0, _toConsumableArray2["default"])(translate));
	  ctx.translate(-graphCenter[0], -graphCenter[1]);
	}

	var autoSetStyleKeys = ['lineCap', 'lineJoin', 'lineDashOffset', 'shadowOffsetX', 'shadowOffsetY', 'lineWidth', 'textAlign', 'textBaseline'];
	/**
	 * @description Set the style of canvas ctx
	 * @param {Object} ctx  Context of canvas
	 * @param {Style} style Instance of Style
	 * @return {Undefined} Void
	 */

	function initGraphStyle(ctx, style) {
	  var fill = style.fill,
	      stroke = style.stroke,
	      shadowColor = style.shadowColor,
	      opacity = style.opacity;
	  autoSetStyleKeys.forEach(function (key) {
	    if (key || typeof key === 'number') ctx[key] = style[key];
	  });
	  fill = (0, _toConsumableArray2["default"])(fill);
	  stroke = (0, _toConsumableArray2["default"])(stroke);
	  shadowColor = (0, _toConsumableArray2["default"])(shadowColor);
	  fill[3] *= opacity;
	  stroke[3] *= opacity;
	  shadowColor[3] *= opacity;
	  ctx.fillStyle = (0, lib.getColorFromRgbValue)(fill);
	  ctx.strokeStyle = (0, lib.getColorFromRgbValue)(stroke);
	  ctx.shadowColor = (0, lib.getColorFromRgbValue)(shadowColor);
	  var lineDash = style.lineDash,
	      shadowBlur = style.shadowBlur;

	  if (lineDash) {
	    lineDash = lineDash.map(function (v) {
	      return v >= 0 ? v : 0;
	    });
	    ctx.setLineDash(lineDash);
	  }

	  if (typeof shadowBlur === 'number') ctx.shadowBlur = shadowBlur > 0 ? shadowBlur : 0.001;
	  var fontStyle = style.fontStyle,
	      fontVarient = style.fontVarient,
	      fontWeight = style.fontWeight,
	      fontSize = style.fontSize,
	      fontFamily = style.fontFamily;
	  ctx.font = fontStyle + ' ' + fontVarient + ' ' + fontWeight + ' ' + fontSize + 'px' + ' ' + fontFamily;
	}
	/**
	 * @description Set the gradient color of canvas ctx
	 * @param {Object} ctx  Context of canvas
	 * @param {Style} style Instance of Style
	 * @return {Undefined} Void
	 */


	function initGradient(ctx, style) {
	  if (!gradientValidator(style)) return;
	  var gradientColor = style.gradientColor,
	      gradientParams = style.gradientParams,
	      gradientType = style.gradientType,
	      gradientWith = style.gradientWith,
	      gradientStops = style.gradientStops,
	      opacity = style.opacity;
	  gradientColor = gradientColor.map(function (color) {
	    var colorOpacity = color[3] * opacity;
	    var clonedColor = (0, _toConsumableArray2["default"])(color);
	    clonedColor[3] = colorOpacity;
	    return clonedColor;
	  });
	  gradientColor = gradientColor.map(function (c) {
	    return (0, lib.getColorFromRgbValue)(c);
	  });
	  if (gradientStops === 'auto') gradientStops = getAutoColorStops(gradientColor);
	  var gradient = ctx["create".concat(gradientType.slice(0, 1).toUpperCase() + gradientType.slice(1), "Gradient")].apply(ctx, (0, _toConsumableArray2["default"])(gradientParams));
	  gradientStops.forEach(function (stop, i) {
	    return gradient.addColorStop(stop, gradientColor[i]);
	  });
	  ctx["".concat(gradientWith, "Style")] = gradient;
	}
	/**
	 * @description Check if the gradient configuration is legal
	 * @param {Style} style Instance of Style
	 * @return {Boolean} Check Result
	 */


	function gradientValidator(style) {
	  var gradientColor = style.gradientColor,
	      gradientParams = style.gradientParams,
	      gradientType = style.gradientType,
	      gradientWith = style.gradientWith,
	      gradientStops = style.gradientStops;
	  if (!gradientColor || !gradientParams) return false;

	  if (gradientColor.length === 1) {
	    console.warn('The gradient needs to provide at least two colors');
	    return false;
	  }

	  if (gradientType !== 'linear' && gradientType !== 'radial') {
	    console.warn('GradientType only supports linear or radial, current value is ' + gradientType);
	    return false;
	  }

	  var gradientParamsLength = gradientParams.length;

	  if (gradientType === 'linear' && gradientParamsLength !== 4 || gradientType === 'radial' && gradientParamsLength !== 6) {
	    console.warn('The expected length of gradientParams is ' + (gradientType === 'linear' ? '4' : '6'));
	    return false;
	  }

	  if (gradientWith !== 'fill' && gradientWith !== 'stroke') {
	    console.warn('GradientWith only supports fill or stroke, current value is ' + gradientWith);
	    return false;
	  }

	  if (gradientStops !== 'auto' && !(gradientStops instanceof Array)) {
	    console.warn("gradientStops only supports 'auto' or Number Array ([0, .5, 1]), current value is " + gradientStops);
	    return false;
	  }

	  return true;
	}
	/**
	 * @description Get a uniform gradient color stop
	 * @param {Array} color Gradient color
	 * @return {Array} Gradient color stop
	 */


	function getAutoColorStops(color) {
	  var stopGap = 1 / (color.length - 1);
	  return color.map(function (foo, i) {
	    return stopGap * i;
	  });
	}
	/**
	 * @description Restore canvas ctx transform
	 * @param {Object} ctx  Context of canvas
	 * @return {Undefined} Void
	 */


	Style.prototype.restoreTransform = function (ctx) {
	  ctx.restore();
	};
	/**
	 * @description Update style data
	 * @param {Object} change Changed data
	 * @return {Undefined} Void
	 */


	Style.prototype.update = function (change) {
	  this.colorProcessor(change);
	  Object.assign(this, change);
	};
	/**
	 * @description Get the current style configuration
	 * @return {Object} Style configuration
	 */


	Style.prototype.getStyle = function () {
	  var clonedStyle = (0, util.deepClone)(this, true);
	  this.colorProcessor(clonedStyle, true);
	  return clonedStyle;
	};
	});

	unwrapExports(style_class);

	var curves = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = exports.easeInOutBounce = exports.easeOutBounce = exports.easeInBounce = exports.easeInOutElastic = exports.easeOutElastic = exports.easeInElastic = exports.easeInOutBack = exports.easeOutBack = exports.easeInBack = exports.easeInOutQuint = exports.easeOutQuint = exports.easeInQuint = exports.easeInOutQuart = exports.easeOutQuart = exports.easeInQuart = exports.easeInOutCubic = exports.easeOutCubic = exports.easeInCubic = exports.easeInOutQuad = exports.easeOutQuad = exports.easeInQuad = exports.easeInOutSine = exports.easeOutSine = exports.easeInSine = exports.linear = void 0;
	var linear = [[[0, 1], '', [0.33, 0.67]], [[1, 0], [0.67, 0.33]]];
	/**
	 * @description Sine
	 */

	exports.linear = linear;
	var easeInSine = [[[0, 1]], [[0.538, 0.564], [0.169, 0.912], [0.880, 0.196]], [[1, 0]]];
	exports.easeInSine = easeInSine;
	var easeOutSine = [[[0, 1]], [[0.444, 0.448], [0.169, 0.736], [0.718, 0.16]], [[1, 0]]];
	exports.easeOutSine = easeOutSine;
	var easeInOutSine = [[[0, 1]], [[0.5, 0.5], [0.2, 1], [0.8, 0]], [[1, 0]]];
	/**
	 * @description Quad
	 */

	exports.easeInOutSine = easeInOutSine;
	var easeInQuad = [[[0, 1]], [[0.550, 0.584], [0.231, 0.904], [0.868, 0.264]], [[1, 0]]];
	exports.easeInQuad = easeInQuad;
	var easeOutQuad = [[[0, 1]], [[0.413, 0.428], [0.065, 0.816], [0.760, 0.04]], [[1, 0]]];
	exports.easeOutQuad = easeOutQuad;
	var easeInOutQuad = [[[0, 1]], [[0.5, 0.5], [0.3, 0.9], [0.7, 0.1]], [[1, 0]]];
	/**
	 * @description Cubic
	 */

	exports.easeInOutQuad = easeInOutQuad;
	var easeInCubic = [[[0, 1]], [[0.679, 0.688], [0.366, 0.992], [0.992, 0.384]], [[1, 0]]];
	exports.easeInCubic = easeInCubic;
	var easeOutCubic = [[[0, 1]], [[0.321, 0.312], [0.008, 0.616], [0.634, 0.008]], [[1, 0]]];
	exports.easeOutCubic = easeOutCubic;
	var easeInOutCubic = [[[0, 1]], [[0.5, 0.5], [0.3, 1], [0.7, 0]], [[1, 0]]];
	/**
	 * @description Quart
	 */

	exports.easeInOutCubic = easeInOutCubic;
	var easeInQuart = [[[0, 1]], [[0.812, 0.74], [0.611, 0.988], [1.013, 0.492]], [[1, 0]]];
	exports.easeInQuart = easeInQuart;
	var easeOutQuart = [[[0, 1]], [[0.152, 0.244], [0.001, 0.448], [0.285, -0.02]], [[1, 0]]];
	exports.easeOutQuart = easeOutQuart;
	var easeInOutQuart = [[[0, 1]], [[0.5, 0.5], [0.4, 1], [0.6, 0]], [[1, 0]]];
	/**
	 * @description Quint
	 */

	exports.easeInOutQuart = easeInOutQuart;
	var easeInQuint = [[[0, 1]], [[0.857, 0.856], [0.714, 1], [1, 0.712]], [[1, 0]]];
	exports.easeInQuint = easeInQuint;
	var easeOutQuint = [[[0, 1]], [[0.108, 0.2], [0.001, 0.4], [0.214, -0.012]], [[1, 0]]];
	exports.easeOutQuint = easeOutQuint;
	var easeInOutQuint = [[[0, 1]], [[0.5, 0.5], [0.5, 1], [0.5, 0]], [[1, 0]]];
	/**
	 * @description Back
	 */

	exports.easeInOutQuint = easeInOutQuint;
	var easeInBack = [[[0, 1]], [[0.667, 0.896], [0.380, 1.184], [0.955, 0.616]], [[1, 0]]];
	exports.easeInBack = easeInBack;
	var easeOutBack = [[[0, 1]], [[0.335, 0.028], [0.061, 0.22], [0.631, -0.18]], [[1, 0]]];
	exports.easeOutBack = easeOutBack;
	var easeInOutBack = [[[0, 1]], [[0.5, 0.5], [0.4, 1.4], [0.6, -0.4]], [[1, 0]]];
	/**
	 * @description Elastic
	 */

	exports.easeInOutBack = easeInOutBack;
	var easeInElastic = [[[0, 1]], [[0.474, 0.964], [0.382, 0.988], [0.557, 0.952]], [[0.619, 1.076], [0.565, 1.088], [0.669, 1.08]], [[0.770, 0.916], [0.712, 0.924], [0.847, 0.904]], [[0.911, 1.304], [0.872, 1.316], [0.961, 1.34]], [[1, 0]]];
	exports.easeInElastic = easeInElastic;
	var easeOutElastic = [[[0, 1]], [[0.073, -0.32], [0.034, -0.328], [0.104, -0.344]], [[0.191, 0.092], [0.110, 0.06], [0.256, 0.08]], [[0.310, -0.076], [0.260, -0.068], [0.357, -0.076]], [[0.432, 0.032], [0.362, 0.028], [0.683, -0.004]], [[1, 0]]];
	exports.easeOutElastic = easeOutElastic;
	var easeInOutElastic = [[[0, 1]], [[0.210, 0.94], [0.167, 0.884], [0.252, 0.98]], [[0.299, 1.104], [0.256, 1.092], [0.347, 1.108]], [[0.5, 0.496], [0.451, 0.672], [0.548, 0.324]], [[0.696, -0.108], [0.652, -0.112], [0.741, -0.124]], [[0.805, 0.064], [0.756, 0.012], [0.866, 0.096]], [[1, 0]]];
	/**
	 * @description Bounce
	 */

	exports.easeInOutElastic = easeInOutElastic;
	var easeInBounce = [[[0, 1]], [[0.148, 1], [0.075, 0.868], [0.193, 0.848]], [[0.326, 1], [0.276, 0.836], [0.405, 0.712]], [[0.600, 1], [0.511, 0.708], [0.671, 0.348]], [[1, 0]]];
	exports.easeInBounce = easeInBounce;
	var easeOutBounce = [[[0, 1]], [[0.357, 0.004], [0.270, 0.592], [0.376, 0.252]], [[0.604, -0.004], [0.548, 0.312], [0.669, 0.184]], [[0.820, 0], [0.749, 0.184], [0.905, 0.132]], [[1, 0]]];
	exports.easeOutBounce = easeOutBounce;
	var easeInOutBounce = [[[0, 1]], [[0.102, 1], [0.050, 0.864], [0.117, 0.86]], [[0.216, 0.996], [0.208, 0.844], [0.227, 0.808]], [[0.347, 0.996], [0.343, 0.8], [0.480, 0.292]], [[0.635, 0.004], [0.511, 0.676], [0.656, 0.208]], [[0.787, 0], [0.760, 0.2], [0.795, 0.144]], [[0.905, -0.004], [0.899, 0.164], [0.944, 0.144]], [[1, 0]]];
	exports.easeInOutBounce = easeInOutBounce;

	var _default = new Map([['linear', linear], ['easeInSine', easeInSine], ['easeOutSine', easeOutSine], ['easeInOutSine', easeInOutSine], ['easeInQuad', easeInQuad], ['easeOutQuad', easeOutQuad], ['easeInOutQuad', easeInOutQuad], ['easeInCubic', easeInCubic], ['easeOutCubic', easeOutCubic], ['easeInOutCubic', easeInOutCubic], ['easeInQuart', easeInQuart], ['easeOutQuart', easeOutQuart], ['easeInOutQuart', easeInOutQuart], ['easeInQuint', easeInQuint], ['easeOutQuint', easeOutQuint], ['easeInOutQuint', easeInOutQuint], ['easeInBack', easeInBack], ['easeOutBack', easeOutBack], ['easeInOutBack', easeInOutBack], ['easeInElastic', easeInElastic], ['easeOutElastic', easeOutElastic], ['easeInOutElastic', easeInOutElastic], ['easeInBounce', easeInBounce], ['easeOutBounce', easeOutBounce], ['easeInOutBounce', easeInOutBounce]]);

	exports["default"] = _default;
	});

	unwrapExports(curves);
	var curves_1 = curves.easeInOutBounce;
	var curves_2 = curves.easeOutBounce;
	var curves_3 = curves.easeInBounce;
	var curves_4 = curves.easeInOutElastic;
	var curves_5 = curves.easeOutElastic;
	var curves_6 = curves.easeInElastic;
	var curves_7 = curves.easeInOutBack;
	var curves_8 = curves.easeOutBack;
	var curves_9 = curves.easeInBack;
	var curves_10 = curves.easeInOutQuint;
	var curves_11 = curves.easeOutQuint;
	var curves_12 = curves.easeInQuint;
	var curves_13 = curves.easeInOutQuart;
	var curves_14 = curves.easeOutQuart;
	var curves_15 = curves.easeInQuart;
	var curves_16 = curves.easeInOutCubic;
	var curves_17 = curves.easeOutCubic;
	var curves_18 = curves.easeInCubic;
	var curves_19 = curves.easeInOutQuad;
	var curves_20 = curves.easeOutQuad;
	var curves_21 = curves.easeInQuad;
	var curves_22 = curves.easeInOutSine;
	var curves_23 = curves.easeOutSine;
	var curves_24 = curves.easeInSine;
	var curves_25 = curves.linear;

	var lib$2 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.transition = transition;
	exports.injectNewCurve = injectNewCurve;
	exports["default"] = void 0;

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);

	var _typeof2 = interopRequireDefault$1(_typeof_1);

	var _curves = interopRequireDefault$1(curves);

	var defaultTransitionBC = 'linear';
	/**
	 * @description Get the N-frame animation state by the start and end state
	 *              of the animation and the easing curve
	 * @param {String|Array} tBC               Easing curve name or data
	 * @param {Number|Array|Object} startState Animation start state
	 * @param {Number|Array|Object} endState   Animation end state
	 * @param {Number} frameNum                Number of Animation frames
	 * @param {Boolean} deep                   Whether to use recursive mode
	 * @return {Array|Boolean} State of each frame of the animation (Invalid input will return false)
	 */

	function transition(tBC) {
	  var startState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var endState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	  var frameNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
	  var deep = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	  if (!checkParams.apply(void 0, arguments)) return false;

	  try {
	    // Get the transition bezier curve
	    var bezierCurve = getBezierCurve(tBC); // Get the progress of each frame state

	    var frameStateProgress = getFrameStateProgress(bezierCurve, frameNum); // If the recursion mode is not enabled or the state type is Number, the shallow state calculation is performed directly.

	    if (!deep || typeof endState === 'number') return getTransitionState(startState, endState, frameStateProgress);
	    return recursionTransitionState(startState, endState, frameStateProgress);
	  } catch (_unused) {
	    console.warn('Transition parameter may be abnormal!');
	    return [endState];
	  }
	}
	/**
	 * @description Check if the parameters are legal
	 * @param {String} tBC      Name of transition bezier curve
	 * @param {Any} startState  Transition start state
	 * @param {Any} endState    Transition end state
	 * @param {Number} frameNum Number of transition frames
	 * @return {Boolean} Is the parameter legal
	 */


	function checkParams(tBC) {
	  var startState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var endState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  var frameNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;

	  if (!tBC || startState === false || endState === false || !frameNum) {
	    console.error('transition: Missing Parameters!');
	    return false;
	  }

	  if ((0, _typeof2["default"])(startState) !== (0, _typeof2["default"])(endState)) {
	    console.error('transition: Inconsistent Status Types!');
	    return false;
	  }

	  var stateType = (0, _typeof2["default"])(endState);

	  if (stateType === 'string' || stateType === 'boolean' || !tBC.length) {
	    console.error('transition: Unsupported Data Type of State!');
	    return false;
	  }

	  if (!_curves["default"].has(tBC) && !(tBC instanceof Array)) {
	    console.warn('transition: Transition curve not found, default curve will be used!');
	  }

	  return true;
	}
	/**
	 * @description Get the transition bezier curve
	 * @param {String} tBC Name of transition bezier curve
	 * @return {Array} Bezier curve data
	 */


	function getBezierCurve(tBC) {
	  var bezierCurve = '';

	  if (_curves["default"].has(tBC)) {
	    bezierCurve = _curves["default"].get(tBC);
	  } else if (tBC instanceof Array) {
	    bezierCurve = tBC;
	  } else {
	    bezierCurve = _curves["default"].get(defaultTransitionBC);
	  }

	  return bezierCurve;
	}
	/**
	 * @description Get the progress of each frame state
	 * @param {Array} bezierCurve Transition bezier curve
	 * @param {Number} frameNum   Number of transition frames
	 * @return {Array} Progress of each frame state
	 */


	function getFrameStateProgress(bezierCurve, frameNum) {
	  var tMinus = 1 / (frameNum - 1);
	  var tState = new Array(frameNum).fill(0).map(function (t, i) {
	    return i * tMinus;
	  });
	  var frameState = tState.map(function (t) {
	    return getFrameStateFromT(bezierCurve, t);
	  });
	  return frameState;
	}
	/**
	 * @description Get the progress of the corresponding frame according to t
	 * @param {Array} bezierCurve Transition bezier curve
	 * @param {Number} t          Current frame t
	 * @return {Number} Progress of current frame
	 */


	function getFrameStateFromT(bezierCurve, t) {
	  var tBezierCurvePoint = getBezierCurvePointFromT(bezierCurve, t);
	  var bezierCurvePointT = getBezierCurvePointTFromReT(tBezierCurvePoint, t);
	  return getBezierCurveTState(tBezierCurvePoint, bezierCurvePointT);
	}
	/**
	 * @description Get the corresponding sub-curve according to t
	 * @param {Array} bezierCurve Transition bezier curve
	 * @param {Number} t          Current frame t
	 * @return {Array} Sub-curve of t
	 */


	function getBezierCurvePointFromT(bezierCurve, t) {
	  var lastIndex = bezierCurve.length - 1;
	  var begin = '',
	      end = '';
	  bezierCurve.findIndex(function (item, i) {
	    if (i === lastIndex) return;
	    begin = item;
	    end = bezierCurve[i + 1];
	    var currentMainPointX = begin[0][0];
	    var nextMainPointX = end[0][0];
	    return t >= currentMainPointX && t < nextMainPointX;
	  });
	  var p0 = begin[0];
	  var p1 = begin[2] || begin[0];
	  var p2 = end[1] || end[0];
	  var p3 = end[0];
	  return [p0, p1, p2, p3];
	}
	/**
	 * @description Get local t based on t and sub-curve
	 * @param {Array} bezierCurve Sub-curve
	 * @param {Number} t          Current frame t
	 * @return {Number} local t of sub-curve
	 */


	function getBezierCurvePointTFromReT(bezierCurve, t) {
	  var reBeginX = bezierCurve[0][0];
	  var reEndX = bezierCurve[3][0];
	  var xMinus = reEndX - reBeginX;
	  var tMinus = t - reBeginX;
	  return tMinus / xMinus;
	}
	/**
	 * @description Get the curve progress of t
	 * @param {Array} bezierCurve Sub-curve
	 * @param {Number} t          Current frame t
	 * @return {Number} Progress of current frame
	 */


	function getBezierCurveTState(_ref, t) {
	  var _ref2 = (0, _slicedToArray2["default"])(_ref, 4),
	      _ref2$ = (0, _slicedToArray2["default"])(_ref2[0], 2),
	      p0 = _ref2$[1],
	      _ref2$2 = (0, _slicedToArray2["default"])(_ref2[1], 2),
	      p1 = _ref2$2[1],
	      _ref2$3 = (0, _slicedToArray2["default"])(_ref2[2], 2),
	      p2 = _ref2$3[1],
	      _ref2$4 = (0, _slicedToArray2["default"])(_ref2[3], 2),
	      p3 = _ref2$4[1];

	  var pow = Math.pow;
	  var tMinus = 1 - t;
	  var result1 = p0 * pow(tMinus, 3);
	  var result2 = 3 * p1 * t * pow(tMinus, 2);
	  var result3 = 3 * p2 * pow(t, 2) * tMinus;
	  var result4 = p3 * pow(t, 3);
	  return 1 - (result1 + result2 + result3 + result4);
	}
	/**
	 * @description Get transition state according to frame progress
	 * @param {Any} startState   Transition start state
	 * @param {Any} endState     Transition end state
	 * @param {Array} frameState Frame state progress
	 * @return {Array} Transition frame state
	 */


	function getTransitionState(begin, end, frameState) {
	  var stateType = 'object';
	  if (typeof begin === 'number') stateType = 'number';
	  if (begin instanceof Array) stateType = 'array';
	  if (stateType === 'number') return getNumberTransitionState(begin, end, frameState);
	  if (stateType === 'array') return getArrayTransitionState(begin, end, frameState);
	  if (stateType === 'object') return getObjectTransitionState(begin, end, frameState);
	  return frameState.map(function (t) {
	    return end;
	  });
	}
	/**
	 * @description Get the transition data of the number type
	 * @param {Number} startState Transition start state
	 * @param {Number} endState   Transition end state
	 * @param {Array} frameState  Frame state progress
	 * @return {Array} Transition frame state
	 */


	function getNumberTransitionState(begin, end, frameState) {
	  var minus = end - begin;
	  return frameState.map(function (s) {
	    return begin + minus * s;
	  });
	}
	/**
	 * @description Get the transition data of the array type
	 * @param {Array} startState Transition start state
	 * @param {Array} endState   Transition end state
	 * @param {Array} frameState Frame state progress
	 * @return {Array} Transition frame state
	 */


	function getArrayTransitionState(begin, end, frameState) {
	  var minus = end.map(function (v, i) {
	    if (typeof v !== 'number') return false;
	    return v - begin[i];
	  });
	  return frameState.map(function (s) {
	    return minus.map(function (v, i) {
	      if (v === false) return end[i];
	      return begin[i] + v * s;
	    });
	  });
	}
	/**
	 * @description Get the transition data of the object type
	 * @param {Object} startState Transition start state
	 * @param {Object} endState   Transition end state
	 * @param {Array} frameState  Frame state progress
	 * @return {Array} Transition frame state
	 */


	function getObjectTransitionState(begin, end, frameState) {
	  var keys = Object.keys(end);
	  var beginValue = keys.map(function (k) {
	    return begin[k];
	  });
	  var endValue = keys.map(function (k) {
	    return end[k];
	  });
	  var arrayState = getArrayTransitionState(beginValue, endValue, frameState);
	  return arrayState.map(function (item) {
	    var frameData = {};
	    item.forEach(function (v, i) {
	      return frameData[keys[i]] = v;
	    });
	    return frameData;
	  });
	}
	/**
	 * @description Get the transition state data by recursion
	 * @param {Array|Object} startState Transition start state
	 * @param {Array|Object} endState   Transition end state
	 * @param {Array} frameState        Frame state progress
	 * @return {Array} Transition frame state
	 */


	function recursionTransitionState(begin, end, frameState) {
	  var state = getTransitionState(begin, end, frameState);

	  var _loop = function _loop(key) {
	    var bTemp = begin[key];
	    var eTemp = end[key];
	    if ((0, _typeof2["default"])(eTemp) !== 'object') return "continue";
	    var data = recursionTransitionState(bTemp, eTemp, frameState);
	    state.forEach(function (fs, i) {
	      return fs[key] = data[i];
	    });
	  };

	  for (var key in end) {
	    var _ret = _loop(key);

	    if (_ret === "continue") continue;
	  }

	  return state;
	}
	/**
	 * @description Inject new curve into curves as config
	 * @param {Any} key     The key of curve
	 * @param {Array} curve Bezier curve data
	 * @return {Undefined} No return
	 */


	function injectNewCurve(key, curve) {
	  if (!key || !curve) {
	    console.error('InjectNewCurve Missing Parameters!');
	    return;
	  }

	  _curves["default"].set(key, curve);
	}

	var _default = transition;
	exports["default"] = _default;
	});

	unwrapExports(lib$2);
	var lib_1$1 = lib$2.transition;
	var lib_2$1 = lib$2.injectNewCurve;

	var graph_class = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _regenerator = interopRequireDefault$1(regenerator);

	var _asyncToGenerator2 = interopRequireDefault$1(asyncToGenerator$1);

	var _typeof2 = interopRequireDefault$1(_typeof_1);

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);

	var _classCallCheck2 = interopRequireDefault$1(classCallCheck$1);

	var _style = interopRequireDefault$1(style_class);

	var _transition = interopRequireDefault$1(lib$2);



	/**
	 * @description Class Graph
	 * @param {Object} graph  Graph default configuration
	 * @param {Object} config Graph config
	 * @return {Graph} Instance of Graph
	 */
	var Graph = function Graph(graph, config) {
	  (0, _classCallCheck2["default"])(this, Graph);
	  config = (0, util.deepClone)(config, true);
	  var defaultConfig = {
	    /**
	     * @description Weather to render graph
	     * @type {Boolean}
	     * @default visible = true
	     */
	    visible: true,

	    /**
	     * @description Whether to enable drag
	     * @type {Boolean}
	     * @default drag = false
	     */
	    drag: false,

	    /**
	     * @description Whether to enable hover
	     * @type {Boolean}
	     * @default hover = false
	     */
	    hover: false,

	    /**
	     * @description Graph rendering index
	     *  Give priority to index high graph in rendering
	     * @type {Number}
	     * @example index = 1
	     */
	    index: 1,

	    /**
	     * @description Animation delay time(ms)
	     * @type {Number}
	     * @default animationDelay = 0
	     */
	    animationDelay: 0,

	    /**
	     * @description Number of animation frames
	     * @type {Number}
	     * @default animationFrame = 30
	     */
	    animationFrame: 30,

	    /**
	     * @description Animation dynamic curve (Supported by transition)
	     * @type {String}
	     * @default animationCurve = 'linear'
	     * @link https://github.com/jiaming743/Transition
	     */
	    animationCurve: 'linear',

	    /**
	     * @description Weather to pause graph animation
	     * @type {Boolean}
	     * @default animationPause = false
	     */
	    animationPause: false,

	    /**
	     * @description Rectangular hover detection zone
	     *  Use this method for hover detection first
	     * @type {Null|Array}
	     * @default hoverRect = null
	     * @example hoverRect = [0, 0, 100, 100] // [Rect start x, y, Rect width, height]
	     */
	    hoverRect: null,

	    /**
	     * @description Mouse enter event handler
	     * @type {Function|Null}
	     * @default mouseEnter = null
	     */
	    mouseEnter: null,

	    /**
	     * @description Mouse outer event handler
	     * @type {Function|Null}
	     * @default mouseOuter = null
	     */
	    mouseOuter: null,

	    /**
	     * @description Mouse click event handler
	     * @type {Function|Null}
	     * @default click = null
	     */
	    click: null
	  };
	  var configAbleNot = {
	    status: 'static',
	    animationRoot: [],
	    animationKeys: [],
	    animationFrameState: [],
	    cache: {}
	  };
	  if (!config.shape) config.shape = {};
	  if (!config.style) config.style = {};
	  var shape = Object.assign({}, graph.shape, config.shape);
	  Object.assign(defaultConfig, config, configAbleNot);
	  Object.assign(this, graph, defaultConfig);
	  this.shape = shape;
	  this.style = new _style["default"](config.style);
	  this.addedProcessor();
	};
	/**
	 * @description Processor of added
	 * @return {Undefined} Void
	 */


	exports["default"] = Graph;

	Graph.prototype.addedProcessor = function () {
	  if (typeof this.setGraphCenter === 'function') this.setGraphCenter(null, this); // The life cycle 'added"

	  if (typeof this.added === 'function') this.added(this);
	};
	/**
	 * @description Processor of draw
	 * @param {CRender} render Instance of CRender
	 * @param {Graph} graph    Instance of Graph
	 * @return {Undefined} Void
	 */


	Graph.prototype.drawProcessor = function (render, graph) {
	  var ctx = render.ctx;
	  graph.style.initStyle(ctx);
	  if (typeof this.beforeDraw === 'function') this.beforeDraw(this, render);
	  graph.draw(render, graph);
	  if (typeof this.drawed === 'function') this.drawed(this, render);
	  graph.style.restoreTransform(ctx);
	};
	/**
	 * @description Processor of hover check
	 * @param {Array} position Mouse Position
	 * @param {Graph} graph    Instance of Graph
	 * @return {Boolean} Result of hover check
	 */


	Graph.prototype.hoverCheckProcessor = function (position, _ref) {
	  var hoverRect = _ref.hoverRect,
	      style = _ref.style,
	      hoverCheck = _ref.hoverCheck;
	  var graphCenter = style.graphCenter,
	      rotate = style.rotate,
	      scale = style.scale,
	      translate = style.translate;

	  if (graphCenter) {
	    if (rotate) position = (0, util.getRotatePointPos)(-rotate, position, graphCenter);
	    if (scale) position = (0, util.getScalePointPos)(scale.map(function (s) {
	      return 1 / s;
	    }), position, graphCenter);
	    if (translate) position = (0, util.getTranslatePointPos)(translate.map(function (v) {
	      return v * -1;
	    }), position);
	  }

	  if (hoverRect) return util.checkPointIsInRect.apply(void 0, [position].concat((0, _toConsumableArray2["default"])(hoverRect)));
	  return hoverCheck(position, this);
	};
	/**
	 * @description Processor of move
	 * @param {Event} e Mouse movement event
	 * @return {Undefined} Void
	 */


	Graph.prototype.moveProcessor = function (e) {
	  this.move(e, this);
	  if (typeof this.beforeMove === 'function') this.beforeMove(e, this);
	  if (typeof this.setGraphCenter === 'function') this.setGraphCenter(e, this);
	  if (typeof this.moved === 'function') this.moved(e, this);
	};
	/**
	 * @description Update graph state
	 * @param {String} attrName Updated attribute name
	 * @param {Any} change      Updated value
	 * @return {Undefined} Void
	 */


	Graph.prototype.attr = function (attrName) {
	  var change = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
	  if (!attrName || change === undefined) return false;
	  var isObject = (0, _typeof2["default"])(this[attrName]) === 'object';
	  if (isObject) change = (0, util.deepClone)(change, true);
	  var render = this.render;

	  if (attrName === 'style') {
	    this.style.update(change);
	  } else if (isObject) {
	    Object.assign(this[attrName], change);
	  } else {
	    this[attrName] = change;
	  }

	  if (attrName === 'index') render.sortGraphsByIndex();
	  render.drawAllGraph();
	};
	/**
	 * @description Update graphics state (with animation)
	 *  Only shape and style attributes are supported
	 * @param {String} attrName Updated attribute name
	 * @param {Any} change      Updated value
	 * @param {Boolean} wait    Whether to store the animation waiting
	 *                          for the next animation request
	 * @return {Promise} Animation Promise
	 */


	Graph.prototype.animation =
	/*#__PURE__*/
	function () {
	  var _ref2 = (0, _asyncToGenerator2["default"])(
	  /*#__PURE__*/
	  _regenerator["default"].mark(function _callee2(attrName, change) {
	    var wait,
	        changeRoot,
	        changeKeys,
	        beforeState,
	        animationFrame,
	        animationCurve,
	        animationDelay,
	        animationFrameState,
	        render,
	        _args2 = arguments;
	    return _regenerator["default"].wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            wait = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;

	            if (!(attrName !== 'shape' && attrName !== 'style')) {
	              _context2.next = 4;
	              break;
	            }

	            console.error('Only supported shape and style animation!');
	            return _context2.abrupt("return");

	          case 4:
	            change = (0, util.deepClone)(change, true);
	            if (attrName === 'style') this.style.colorProcessor(change);
	            changeRoot = this[attrName];
	            changeKeys = Object.keys(change);
	            beforeState = {};
	            changeKeys.forEach(function (key) {
	              return beforeState[key] = changeRoot[key];
	            });
	            animationFrame = this.animationFrame, animationCurve = this.animationCurve, animationDelay = this.animationDelay;
	            animationFrameState = (0, _transition["default"])(animationCurve, beforeState, change, animationFrame, true);
	            this.animationRoot.push(changeRoot);
	            this.animationKeys.push(changeKeys);
	            this.animationFrameState.push(animationFrameState);

	            if (!wait) {
	              _context2.next = 17;
	              break;
	            }

	            return _context2.abrupt("return");

	          case 17:
	            if (!(animationDelay > 0)) {
	              _context2.next = 20;
	              break;
	            }

	            _context2.next = 20;
	            return delay(animationDelay);

	          case 20:
	            render = this.render;
	            return _context2.abrupt("return", new Promise(
	            /*#__PURE__*/
	            function () {
	              var _ref3 = (0, _asyncToGenerator2["default"])(
	              /*#__PURE__*/
	              _regenerator["default"].mark(function _callee(resolve) {
	                return _regenerator["default"].wrap(function _callee$(_context) {
	                  while (1) {
	                    switch (_context.prev = _context.next) {
	                      case 0:
	                        _context.next = 2;
	                        return render.launchAnimation();

	                      case 2:
	                        resolve();

	                      case 3:
	                      case "end":
	                        return _context.stop();
	                    }
	                  }
	                }, _callee);
	              }));

	              return function (_x3) {
	                return _ref3.apply(this, arguments);
	              };
	            }()));

	          case 22:
	          case "end":
	            return _context2.stop();
	        }
	      }
	    }, _callee2, this);
	  }));

	  return function (_x, _x2) {
	    return _ref2.apply(this, arguments);
	  };
	}();
	/**
	 * @description Extract the next frame of data from the animation queue
	 *              and update the graph state
	 * @return {Undefined} Void
	 */


	Graph.prototype.turnNextAnimationFrame = function (timeStamp) {
	  var animationDelay = this.animationDelay,
	      animationRoot = this.animationRoot,
	      animationKeys = this.animationKeys,
	      animationFrameState = this.animationFrameState,
	      animationPause = this.animationPause;
	  if (animationPause) return;
	  if (Date.now() - timeStamp < animationDelay) return;
	  animationRoot.forEach(function (root, i) {
	    animationKeys[i].forEach(function (key) {
	      root[key] = animationFrameState[i][0][key];
	    });
	  });
	  animationFrameState.forEach(function (stateItem, i) {
	    stateItem.shift();
	    var noFrame = stateItem.length === 0;
	    if (noFrame) animationRoot[i] = null;
	    if (noFrame) animationKeys[i] = null;
	  });
	  this.animationFrameState = animationFrameState.filter(function (state) {
	    return state.length;
	  });
	  this.animationRoot = animationRoot.filter(function (root) {
	    return root;
	  });
	  this.animationKeys = animationKeys.filter(function (keys) {
	    return keys;
	  });
	};
	/**
	 * @description Skip to the last frame of animation
	 * @return {Undefined} Void
	 */


	Graph.prototype.animationEnd = function () {
	  var animationFrameState = this.animationFrameState,
	      animationKeys = this.animationKeys,
	      animationRoot = this.animationRoot,
	      render = this.render;
	  animationRoot.forEach(function (root, i) {
	    var currentKeys = animationKeys[i];
	    var lastState = animationFrameState[i].pop();
	    currentKeys.forEach(function (key) {
	      return root[key] = lastState[key];
	    });
	  });
	  this.animationFrameState = [];
	  this.animationKeys = [];
	  this.animationRoot = [];
	  return render.drawAllGraph();
	};
	/**
	 * @description Pause animation behavior
	 * @return {Undefined} Void
	 */


	Graph.prototype.pauseAnimation = function () {
	  this.attr('animationPause', true);
	};
	/**
	 * @description Try animation behavior
	 * @return {Undefined} Void
	 */


	Graph.prototype.playAnimation = function () {
	  var render = this.render;
	  this.attr('animationPause', false);
	  return new Promise(
	  /*#__PURE__*/
	  function () {
	    var _ref4 = (0, _asyncToGenerator2["default"])(
	    /*#__PURE__*/
	    _regenerator["default"].mark(function _callee3(resolve) {
	      return _regenerator["default"].wrap(function _callee3$(_context3) {
	        while (1) {
	          switch (_context3.prev = _context3.next) {
	            case 0:
	              _context3.next = 2;
	              return render.launchAnimation();

	            case 2:
	              resolve();

	            case 3:
	            case "end":
	              return _context3.stop();
	          }
	        }
	      }, _callee3);
	    }));

	    return function (_x4) {
	      return _ref4.apply(this, arguments);
	    };
	  }());
	};
	/**
	 * @description Processor of delete
	 * @param {CRender} render Instance of CRender
	 * @return {Undefined} Void
	 */


	Graph.prototype.delProcessor = function (render) {
	  var _this = this;

	  var graphs = render.graphs;
	  var index = graphs.findIndex(function (graph) {
	    return graph === _this;
	  });
	  if (index === -1) return;
	  if (typeof this.beforeDelete === 'function') this.beforeDelete(this);
	  graphs.splice(index, 1, null);
	  if (typeof this.deleted === 'function') this.deleted(this);
	};
	/**
	 * @description Return a timed release Promise
	 * @param {Number} time Release time
	 * @return {Promise} A timed release Promise
	 */


	function delay(time) {
	  return new Promise(function (resolve) {
	    setTimeout(resolve, time);
	  });
	}
	});

	unwrapExports(graph_class);

	var crender_class = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _defineProperty2 = interopRequireDefault$1(defineProperty$1);

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);

	var _classCallCheck2 = interopRequireDefault$1(classCallCheck$1);

	var _color = interopRequireDefault$1(lib);

	var _bezierCurve = interopRequireDefault$1(lib$1);



	var _graphs = interopRequireDefault$1(graphs_1);

	var _graph = interopRequireDefault$1(graph_class);

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	/**
	 * @description           Class of CRender
	 * @param {Object} canvas Canvas DOM
	 * @return {CRender}      Instance of CRender
	 */
	var CRender = function CRender(canvas) {
	  (0, _classCallCheck2["default"])(this, CRender);

	  if (!canvas) {
	    console.error('CRender Missing parameters!');
	    return;
	  }

	  var ctx = canvas.getContext('2d');
	  var clientWidth = canvas.clientWidth,
	      clientHeight = canvas.clientHeight;
	  var area = [clientWidth, clientHeight];
	  canvas.setAttribute('width', clientWidth);
	  canvas.setAttribute('height', clientHeight);
	  /**
	   * @description Context of the canvas
	   * @type {Object}
	   * @example ctx = canvas.getContext('2d')
	   */

	  this.ctx = ctx;
	  /**
	   * @description Width and height of the canvas
	   * @type {Array}
	   * @example area = [300，100]
	   */

	  this.area = area;
	  /**
	   * @description Whether render is in animation rendering
	   * @type {Boolean}
	   * @example animationStatus = true|false
	   */

	  this.animationStatus = false;
	  /**
	   * @description Added graph
	   * @type {[Graph]}
	   * @example graphs = [Graph, Graph, ...]
	   */

	  this.graphs = [];
	  /**
	   * @description Color plugin
	   * @type {Object}
	   * @link https://github.com/jiaming743/color
	   */

	  this.color = _color["default"];
	  /**
	   * @description Bezier Curve plugin
	   * @type {Object}
	   * @link https://github.com/jiaming743/BezierCurve
	   */

	  this.bezierCurve = _bezierCurve["default"]; // bind event handler

	  canvas.addEventListener('mousedown', mouseDown.bind(this));
	  canvas.addEventListener('mousemove', mouseMove.bind(this));
	  canvas.addEventListener('mouseup', mouseUp.bind(this));
	};
	/**
	 * @description        Clear canvas drawing area
	 * @return {Undefined} Void
	 */


	exports["default"] = CRender;

	CRender.prototype.clearArea = function () {
	  var _this$ctx;

	  var area = this.area;

	  (_this$ctx = this.ctx).clearRect.apply(_this$ctx, [0, 0].concat((0, _toConsumableArray2["default"])(area)));
	};
	/**
	 * @description           Add graph to render
	 * @param {Object} config Graph configuration
	 * @return {Graph}        Graph instance
	 */


	CRender.prototype.add = function () {
	  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var name = config.name;

	  if (!name) {
	    console.error('add Missing parameters!');
	    return;
	  }

	  var graphConfig = _graphs["default"].get(name);

	  if (!graphConfig) {
	    console.warn('No corresponding graph configuration found!');
	    return;
	  }

	  var graph = new _graph["default"](graphConfig, config);
	  if (!graph.validator(graph)) return;
	  graph.render = this;
	  this.graphs.push(graph);
	  this.sortGraphsByIndex();
	  this.drawAllGraph();
	  return graph;
	};
	/**
	 * @description Sort the graph by index
	 * @return {Undefined} Void
	 */


	CRender.prototype.sortGraphsByIndex = function () {
	  var graphs = this.graphs;
	  graphs.sort(function (a, b) {
	    if (a.index > b.index) return 1;
	    if (a.index === b.index) return 0;
	    if (a.index < b.index) return -1;
	  });
	};
	/**
	 * @description         Delete graph in render
	 * @param {Graph} graph The graph to be deleted
	 * @return {Undefined}  Void
	 */


	CRender.prototype.delGraph = function (graph) {
	  if (typeof graph.delProcessor !== 'function') return;
	  graph.delProcessor(this);
	  this.graphs = this.graphs.filter(function (graph) {
	    return graph;
	  });
	  this.drawAllGraph();
	};
	/**
	 * @description        Delete all graph in render
	 * @return {Undefined} Void
	 */


	CRender.prototype.delAllGraph = function () {
	  var _this = this;

	  this.graphs.forEach(function (graph) {
	    return graph.delProcessor(_this);
	  });
	  this.graphs = this.graphs.filter(function (graph) {
	    return graph;
	  });
	  this.drawAllGraph();
	};
	/**
	 * @description        Draw all the graphs in the render
	 * @return {Undefined} Void
	 */


	CRender.prototype.drawAllGraph = function () {
	  var _this2 = this;

	  this.clearArea();
	  this.graphs.filter(function (graph) {
	    return graph && graph.visible;
	  }).forEach(function (graph) {
	    return graph.drawProcessor(_this2, graph);
	  });
	};
	/**
	 * @description      Animate the graph whose animation queue is not empty
	 *                   and the animationPause is equal to false
	 * @return {Promise} Animation Promise
	 */


	CRender.prototype.launchAnimation = function () {
	  var _this3 = this;

	  var animationStatus = this.animationStatus;
	  if (animationStatus) return;
	  this.animationStatus = true;
	  return new Promise(function (resolve) {
	    animation.call(_this3, function () {
	      _this3.animationStatus = false;
	      resolve();
	    }, Date.now());
	  });
	};
	/**
	 * @description Try to animate every graph
	 * @param {Function} callback Callback in animation end
	 * @param {Number} timeStamp  Time stamp of animation start
	 * @return {Undefined} Void
	 */


	function animation(callback, timeStamp) {
	  var graphs = this.graphs;

	  if (!animationAble(graphs)) {
	    callback();
	    return;
	  }

	  graphs.forEach(function (graph) {
	    return graph.turnNextAnimationFrame(timeStamp);
	  });
	  this.drawAllGraph();
	  requestAnimationFrame(animation.bind(this, callback, timeStamp));
	}
	/**
	 * @description Find if there are graph that can be animated
	 * @param {[Graph]} graphs
	 * @return {Boolean}
	 */


	function animationAble(graphs) {
	  return graphs.find(function (graph) {
	    return !graph.animationPause && graph.animationFrameState.length;
	  });
	}
	/**
	 * @description Handler of CRender mousedown event
	 * @return {Undefined} Void
	 */


	function mouseDown(e) {
	  var graphs = this.graphs;
	  var hoverGraph = graphs.find(function (graph) {
	    return graph.status === 'hover';
	  });
	  if (!hoverGraph) return;
	  hoverGraph.status = 'active';
	}
	/**
	 * @description Handler of CRender mousemove event
	 * @return {Undefined} Void
	 */


	function mouseMove(e) {
	  var offsetX = e.offsetX,
	      offsetY = e.offsetY;
	  var position = [offsetX, offsetY];
	  var graphs = this.graphs;
	  var activeGraph = graphs.find(function (graph) {
	    return graph.status === 'active' || graph.status === 'drag';
	  });

	  if (activeGraph) {
	    if (!activeGraph.drag) return;

	    if (typeof activeGraph.move !== 'function') {
	      console.error('No move method is provided, cannot be dragged!');
	      return;
	    }

	    activeGraph.moveProcessor(e);
	    activeGraph.status = 'drag';
	    return;
	  }

	  var hoverGraph = graphs.find(function (graph) {
	    return graph.status === 'hover';
	  });
	  var hoverAbleGraphs = graphs.filter(function (graph) {
	    return graph.hover && (typeof graph.hoverCheck === 'function' || graph.hoverRect);
	  });
	  var hoveredGraph = hoverAbleGraphs.find(function (graph) {
	    return graph.hoverCheckProcessor(position, graph);
	  });

	  if (hoveredGraph) {
	    document.body.style.cursor = hoveredGraph.style.hoverCursor;
	  } else {
	    document.body.style.cursor = 'default';
	  }

	  var hoverGraphMouseOuterIsFun = false,
	      hoveredGraphMouseEnterIsFun = false;
	  if (hoverGraph) hoverGraphMouseOuterIsFun = typeof hoverGraph.mouseOuter === 'function';
	  if (hoveredGraph) hoveredGraphMouseEnterIsFun = typeof hoveredGraph.mouseEnter === 'function';
	  if (!hoveredGraph && !hoverGraph) return;

	  if (!hoveredGraph && hoverGraph) {
	    if (hoverGraphMouseOuterIsFun) hoverGraph.mouseOuter(e, hoverGraph);
	    hoverGraph.status = 'static';
	    return;
	  }

	  if (hoveredGraph && hoveredGraph === hoverGraph) return;

	  if (hoveredGraph && !hoverGraph) {
	    if (hoveredGraphMouseEnterIsFun) hoveredGraph.mouseEnter(e, hoveredGraph);
	    hoveredGraph.status = 'hover';
	    return;
	  }

	  if (hoveredGraph && hoverGraph && hoveredGraph !== hoverGraph) {
	    if (hoverGraphMouseOuterIsFun) hoverGraph.mouseOuter(e, hoverGraph);
	    hoverGraph.status = 'static';
	    if (hoveredGraphMouseEnterIsFun) hoveredGraph.mouseEnter(e, hoveredGraph);
	    hoveredGraph.status = 'hover';
	  }
	}
	/**
	 * @description Handler of CRender mouseup event
	 * @return {Undefined} Void
	 */


	function mouseUp(e) {
	  var graphs = this.graphs;
	  var activeGraph = graphs.find(function (graph) {
	    return graph.status === 'active';
	  });
	  var dragGraph = graphs.find(function (graph) {
	    return graph.status === 'drag';
	  });
	  if (activeGraph && typeof activeGraph.click === 'function') activeGraph.click(e, activeGraph);
	  graphs.forEach(function (graph) {
	    return graph && (graph.status = 'static');
	  });
	  if (activeGraph) activeGraph.status = 'hover';
	  if (dragGraph) dragGraph.status = 'hover';
	}
	/**
	 * @description         Clone Graph
	 * @param {Graph} graph The target to be cloned
	 * @return {Graph}      Cloned graph
	 */


	CRender.prototype.clone = function (graph) {
	  var style = graph.style.getStyle();

	  var clonedGraph = _objectSpread({}, graph, {
	    style: style
	  });

	  delete clonedGraph.render;
	  clonedGraph = (0, util.deepClone)(clonedGraph, true);
	  return this.add(clonedGraph);
	};
	});

	unwrapExports(crender_class);

	var lib$3 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "CRender", {
	  enumerable: true,
	  get: function get() {
	    return _crender["default"];
	  }
	});
	Object.defineProperty(exports, "extendNewGraph", {
	  enumerable: true,
	  get: function get() {
	    return graphs_1.extendNewGraph;
	  }
	});
	exports["default"] = void 0;

	var _crender = interopRequireDefault$1(crender_class);



	var _default = _crender["default"];
	exports["default"] = _default;
	});

	var CRender = unwrapExports(lib$3);

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);









	var pie = {
	  shape: {
	    rx: 0,
	    ry: 0,
	    ir: 0,
	    or: 0,
	    startAngle: 0,
	    endAngle: 0,
	    clockWise: true
	  },
	  validator: function validator(_ref) {
	    var shape = _ref.shape;
	    var keys = ['rx', 'ry', 'ir', 'or', 'startAngle', 'endAngle'];

	    if (keys.find(function (key) {
	      return typeof shape[key] !== 'number';
	    })) {
	      console.error('Pie shape configuration is abnormal!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref2, _ref3) {
	    var ctx = _ref2.ctx;
	    var shape = _ref3.shape;
	    ctx.beginPath();
	    var rx = shape.rx,
	        ry = shape.ry,
	        ir = shape.ir,
	        or = shape.or,
	        startAngle = shape.startAngle,
	        endAngle = shape.endAngle,
	        clockWise = shape.clockWise;
	    rx = parseInt(rx) + 0.5;
	    ry = parseInt(ry) + 0.5;
	    ctx.arc(rx, ry, ir > 0 ? ir : 0, startAngle, endAngle, !clockWise);
	    var connectPoint1 = (0, util.getCircleRadianPoint)(rx, ry, or, endAngle).map(function (p) {
	      return parseInt(p) + 0.5;
	    });
	    var connectPoint2 = (0, util.getCircleRadianPoint)(rx, ry, ir, startAngle).map(function (p) {
	      return parseInt(p) + 0.5;
	    });
	    ctx.lineTo.apply(ctx, (0, _toConsumableArray2["default"])(connectPoint1));
	    ctx.arc(rx, ry, or > 0 ? or : 0, endAngle, startAngle, clockWise);
	    ctx.lineTo.apply(ctx, (0, _toConsumableArray2["default"])(connectPoint2));
	    ctx.closePath();
	    ctx.stroke();
	    ctx.fill();
	  }
	};
	var agArc = {
	  shape: {
	    rx: 0,
	    ry: 0,
	    r: 0,
	    startAngle: 0,
	    endAngle: 0,
	    gradientStartAngle: null,
	    gradientEndAngle: null
	  },
	  validator: function validator(_ref4) {
	    var shape = _ref4.shape;
	    var keys = ['rx', 'ry', 'r', 'startAngle', 'endAngle'];

	    if (keys.find(function (key) {
	      return typeof shape[key] !== 'number';
	    })) {
	      console.error('AgArc shape configuration is abnormal!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref5, _ref6) {
	    var ctx = _ref5.ctx;
	    var shape = _ref6.shape,
	        style = _ref6.style;
	    var gradient = style.gradient;
	    gradient = gradient.map(function (cv) {
	      return (0, lib.getColorFromRgbValue)(cv);
	    });

	    if (gradient.length === 1) {
	      gradient = [gradient[0], gradient[0]];
	    }

	    var gradientArcNum = gradient.length - 1;
	    var gradientStartAngle = shape.gradientStartAngle,
	        gradientEndAngle = shape.gradientEndAngle,
	        startAngle = shape.startAngle,
	        endAngle = shape.endAngle,
	        r = shape.r,
	        rx = shape.rx,
	        ry = shape.ry;
	    if (gradientStartAngle === null) gradientStartAngle = startAngle;
	    if (gradientEndAngle === null) gradientEndAngle = endAngle;
	    var angleGap = (gradientEndAngle - gradientStartAngle) / gradientArcNum;
	    if (angleGap === Math.PI * 2) angleGap = Math.PI * 2 - 0.001;

	    for (var i = 0; i < gradientArcNum; i++) {
	      ctx.beginPath();
	      var startPoint = (0, util.getCircleRadianPoint)(rx, ry, r, startAngle + angleGap * i);
	      var endPoint = (0, util.getCircleRadianPoint)(rx, ry, r, startAngle + angleGap * (i + 1));
	      var color = (0, util$2.getLinearGradientColor)(ctx, startPoint, endPoint, [gradient[i], gradient[i + 1]]);
	      var arcStartAngle = startAngle + angleGap * i;
	      var arcEndAngle = startAngle + angleGap * (i + 1);
	      var doBreak = false;

	      if (arcEndAngle > endAngle) {
	        arcEndAngle = endAngle;
	        doBreak = true;
	      }

	      ctx.arc(rx, ry, r, arcStartAngle, arcEndAngle);
	      ctx.strokeStyle = color;
	      ctx.stroke();
	      if (doBreak) break;
	    }
	  }
	};
	var numberText = {
	  shape: {
	    number: [],
	    content: '',
	    position: [0, 0],
	    toFixed: 0
	  },
	  validator: function validator(_ref7) {
	    var shape = _ref7.shape;
	    var number = shape.number,
	        content = shape.content,
	        position = shape.position;

	    if (!(number instanceof Array) || typeof content !== 'string' || !(position instanceof Array)) {
	      console.error('NumberText shape configuration is abnormal!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref8, _ref9) {
	    var ctx = _ref8.ctx;
	    var shape = _ref9.shape;
	    ctx.beginPath();
	    var number = shape.number,
	        content = shape.content,
	        position = shape.position,
	        toFixed = shape.toFixed;
	    var textSegments = content.split('{nt}');
	    var lastSegmentIndex = textSegments.length - 1;
	    var textString = '';
	    textSegments.forEach(function (t, i) {
	      var currentNumber = number[i];
	      if (i === lastSegmentIndex) currentNumber = '';
	      if (typeof currentNumber === 'number') currentNumber = currentNumber.toFixed(toFixed);
	      textString += t + (currentNumber || '');
	    });
	    ctx.closePath();
	    ctx.strokeText.apply(ctx, [textString].concat((0, _toConsumableArray2["default"])(position)));
	    ctx.fillText.apply(ctx, [textString].concat((0, _toConsumableArray2["default"])(position)));
	  }
	};
	var lineIcon = {
	  shape: {
	    x: 0,
	    y: 0,
	    w: 0,
	    h: 0
	  },
	  validator: function validator(_ref10) {
	    var shape = _ref10.shape;
	    var x = shape.x,
	        y = shape.y,
	        w = shape.w,
	        h = shape.h;

	    if (typeof x !== 'number' || typeof y !== 'number' || typeof w !== 'number' || typeof h !== 'number') {
	      console.error('lineIcon shape configuration is abnormal!');
	      return false;
	    }

	    return true;
	  },
	  draw: function draw(_ref11, _ref12) {
	    var ctx = _ref11.ctx;
	    var shape = _ref12.shape;
	    ctx.beginPath();
	    var x = shape.x,
	        y = shape.y,
	        w = shape.w,
	        h = shape.h;
	    var halfH = h / 2;
	    ctx.strokeStyle = ctx.fillStyle;
	    ctx.moveTo(x, y + halfH);
	    ctx.lineTo(x + w, y + halfH);
	    ctx.lineWidth = 1;
	    ctx.stroke();
	    ctx.beginPath();
	    var radius = halfH - 5 * 2;
	    if (radius <= 0) radius = 3;
	    ctx.arc(x + w / 2, y + halfH, radius, 0, Math.PI * 2);
	    ctx.lineWidth = 5;
	    ctx.stroke();
	    ctx.fillStyle = '#fff';
	    ctx.fill();
	  },
	  hoverCheck: function hoverCheck(position, _ref13) {
	    var shape = _ref13.shape;
	    var x = shape.x,
	        y = shape.y,
	        w = shape.w,
	        h = shape.h;
	    return (0, util.checkPointIsInRect)(position, x, y, w, h);
	  },
	  setGraphCenter: function setGraphCenter(e, _ref14) {
	    var shape = _ref14.shape,
	        style = _ref14.style;
	    var x = shape.x,
	        y = shape.y,
	        w = shape.w,
	        h = shape.h;
	    style.graphCenter = [x + w / 2, y + h / 2];
	  }
	};
	(0, lib$3.extendNewGraph)('pie', pie);
	(0, lib$3.extendNewGraph)('agArc', agArc);
	(0, lib$3.extendNewGraph)('numberText', numberText);
	(0, lib$3.extendNewGraph)('lineIcon', lineIcon);

	var color = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.colorConfig = void 0;
	var colorConfig = ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e062ae', '#e690d1', '#e7bcf3', '#9d96f5', '#8378ea', '#96bfff'];
	exports.colorConfig = colorConfig;
	});

	unwrapExports(color);
	var color_1 = color.colorConfig;

	var grid = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.gridConfig = void 0;
	var gridConfig = {
	  /**
	   * @description Grid left margin
	   * @type {String|Number}
	   * @default left = '10%'
	   * @example left = '10%' | 10
	   */
	  left: '10%',

	  /**
	   * @description Grid right margin
	   * @type {String|Number}
	   * @default right = '10%'
	   * @example right = '10%' | 10
	   */
	  right: '10%',

	  /**
	   * @description Grid top margin
	   * @type {String|Number}
	   * @default top = 60
	   * @example top = '10%' | 60
	   */
	  top: 60,

	  /**
	   * @description Grid bottom margin
	   * @type {String|Number}
	   * @default bottom = 60
	   * @example bottom = '10%' | 60
	   */
	  bottom: 60,

	  /**
	   * @description Grid default style configuration
	   * @type {Object}
	   * @default style = {Configuration Of Class Style}
	   */
	  style: {
	    fill: 'rgba(0, 0, 0, 0)'
	  },

	  /**
	   * @description Grid render level
	   * Priority rendering high level
	   * @type {Number}
	   * @default rLevel = -30
	   */
	  rLevel: -30,

	  /**
	   * @description Grid animation curve
	   * @type {String}
	   * @default animationCurve = 'easeOutCubic'
	   */
	  animationCurve: 'easeOutCubic',

	  /**
	   * @description Grid animation frame
	   * @type {Number}
	   * @default animationFrame = 50
	   */
	  animationFrame: 30
	};
	exports.gridConfig = gridConfig;
	});

	unwrapExports(grid);
	var grid_1 = grid.gridConfig;

	var axis = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.yAxisConfig = exports.xAxisConfig = void 0;
	var xAxisConfig = {
	  /**
	   * @description Axis name
	   * @type {String}
	   * @default name = ''
	   */
	  name: '',

	  /**
	   * @description Whether to display this axis
	   * @type {Boolean}
	   * @default show = true
	   */
	  show: true,

	  /**
	   * @description Axis position
	   * @type {String}
	   * @default position = 'bottom'
	   * @example position = 'bottom' | 'top'
	   */
	  position: 'bottom',

	  /**
	   * @description Name gap
	   * @type {Number}
	   * @default nameGap = 15
	   */
	  nameGap: 15,

	  /**
	   * @description Name location
	   * @type {String}
	   * @default nameLocation = 'end'
	   * @example nameLocation = 'end' | 'center' | 'start'
	   */
	  nameLocation: 'end',

	  /**
	   * @description Name default style configuration
	   * @type {Object}
	   * @default style = {Configuration Of Class Style}
	   */
	  nameTextStyle: {
	    fill: '#333',
	    fontSize: 10
	  },

	  /**
	   * @description Axis min value
	   * @type {String|Number}
	   * @default min = '20%'
	   * @example min = '20%' | 0
	   */
	  min: '20%',

	  /**
	   * @description Axis max value
	   * @type {String|Number}
	   * @default max = '20%'
	   * @example max = '20%' | 0
	   */
	  max: '20%',

	  /**
	   * @description Axis value interval
	   * @type {Number}
	   * @default interval = null
	   * @example interval = 100
	   */
	  interval: null,

	  /**
	   * @description Min interval
	   * @type {Number}
	   * @default minInterval = null
	   * @example minInterval = 1
	   */
	  minInterval: null,

	  /**
	   * @description Max interval
	   * @type {Number}
	   * @default maxInterval = null
	   * @example maxInterval = 100
	   */
	  maxInterval: null,

	  /**
	   * @description Boundary gap
	   * @type {Boolean}
	   * @default boundaryGap = null
	   * @example boundaryGap = true
	   */
	  boundaryGap: null,

	  /**
	   * @description Axis split number
	   * @type {Number}
	   * @default splitNumber = 5
	   */
	  splitNumber: 5,

	  /**
	   * @description Axis line configuration
	   * @type {Object}
	   */
	  axisLine: {
	    /**
	     * @description Whether to display axis line
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Axis line default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      stroke: '#333',
	      lineWidth: 1
	    }
	  },

	  /**
	   * @description Axis tick configuration
	   * @type {Object}
	   */
	  axisTick: {
	    /**
	     * @description Whether to display axis tick
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Axis tick default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      stroke: '#333',
	      lineWidth: 1
	    }
	  },

	  /**
	   * @description Axis label configuration
	   * @type {Object}
	   */
	  axisLabel: {
	    /**
	     * @description Whether to display axis label
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Axis label formatter
	     * @type {String|Function}
	     * @default formatter = null
	     * @example formatter = '{value}件'
	     * @example formatter = (dataItem) => (dataItem.value)
	     */
	    formatter: null,

	    /**
	     * @description Axis label default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      fill: '#333',
	      fontSize: 10,
	      rotate: 0
	    }
	  },

	  /**
	   * @description Axis split line configuration
	   * @type {Object}
	   */
	  splitLine: {
	    /**
	     * @description Whether to display axis split line
	     * @type {Boolean}
	     * @default show = false
	     */
	    show: false,

	    /**
	     * @description Axis split line default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      stroke: '#d4d4d4',
	      lineWidth: 1
	    }
	  },

	  /**
	   * @description X axis render level
	   * Priority rendering high level
	   * @type {Number}
	   * @default rLevel = -20
	   */
	  rLevel: -20,

	  /**
	   * @description X axis animation curve
	   * @type {String}
	   * @default animationCurve = 'easeOutCubic'
	   */
	  animationCurve: 'easeOutCubic',

	  /**
	   * @description X axis animation frame
	   * @type {Number}
	   * @default animationFrame = 50
	   */
	  animationFrame: 50
	};
	exports.xAxisConfig = xAxisConfig;
	var yAxisConfig = {
	  /**
	   * @description Axis name
	   * @type {String}
	   * @default name = ''
	   */
	  name: '',

	  /**
	   * @description Whether to display this axis
	   * @type {Boolean}
	   * @default show = true
	   */
	  show: true,

	  /**
	   * @description Axis position
	   * @type {String}
	   * @default position = 'left'
	   * @example position = 'left' | 'right'
	   */
	  position: 'left',

	  /**
	   * @description Name gap
	   * @type {Number}
	   * @default nameGap = 15
	   */
	  nameGap: 15,

	  /**
	   * @description Name location
	   * @type {String}
	   * @default nameLocation = 'end'
	   * @example nameLocation = 'end' | 'center' | 'start'
	   */
	  nameLocation: 'end',

	  /**
	   * @description name default style configuration
	   * @type {Object}
	   * @default style = {Configuration Of Class Style}
	   */
	  nameTextStyle: {
	    fill: '#333',
	    fontSize: 10
	  },

	  /**
	   * @description Axis min value
	   * @type {String|Number}
	   * @default min = '20%'
	   * @example min = '20%' | 0
	   */
	  min: '20%',

	  /**
	   * @description Axis max value
	   * @type {String|Number}
	   * @default max = '20%'
	   * @example max = '20%' | 0
	   */
	  max: '20%',

	  /**
	   * @description Axis value interval
	   * @type {Number}
	   * @default interval = null
	   * @example interval = 100
	   */
	  interval: null,

	  /**
	   * @description Min interval
	   * @type {Number}
	   * @default minInterval = null
	   * @example minInterval = 1
	   */
	  minInterval: null,

	  /**
	   * @description Max interval
	   * @type {Number}
	   * @default maxInterval = null
	   * @example maxInterval = 100
	   */
	  maxInterval: null,

	  /**
	   * @description Boundary gap
	   * @type {Boolean}
	   * @default boundaryGap = null
	   * @example boundaryGap = true
	   */
	  boundaryGap: null,

	  /**
	   * @description Axis split number
	   * @type {Number}
	   * @default splitNumber = 5
	   */
	  splitNumber: 5,

	  /**
	   * @description Axis line configuration
	   * @type {Object}
	   */
	  axisLine: {
	    /**
	     * @description Whether to display axis line
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Axis line default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      stroke: '#333',
	      lineWidth: 1
	    }
	  },

	  /**
	   * @description Axis tick configuration
	   * @type {Object}
	   */
	  axisTick: {
	    /**
	     * @description Whether to display axis tick
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Axis tick default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      stroke: '#333',
	      lineWidth: 1
	    }
	  },

	  /**
	   * @description Axis label configuration
	   * @type {Object}
	   */
	  axisLabel: {
	    /**
	     * @description Whether to display axis label
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Axis label formatter
	     * @type {String|Function}
	     * @default formatter = null
	     * @example formatter = '{value}件'
	     * @example formatter = (dataItem) => (dataItem.value)
	     */
	    formatter: null,

	    /**
	     * @description Axis label default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      fill: '#333',
	      fontSize: 10,
	      rotate: 0
	    }
	  },

	  /**
	   * @description Axis split line configuration
	   * @type {Object}
	   */
	  splitLine: {
	    /**
	     * @description Whether to display axis split line
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Axis split line default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      stroke: '#d4d4d4',
	      lineWidth: 1
	    }
	  },

	  /**
	   * @description Y axis render level
	   * Priority rendering high level
	   * @type {Number}
	   * @default rLevel = -20
	   */
	  rLevel: -20,

	  /**
	   * @description Y axis animation curve
	   * @type {String}
	   * @default animationCurve = 'easeOutCubic'
	   */
	  animationCurve: 'easeOutCubic',

	  /**
	   * @description Y axis animation frame
	   * @type {Number}
	   * @default animationFrame = 50
	   */
	  animationFrame: 50
	};
	exports.yAxisConfig = yAxisConfig;
	});

	unwrapExports(axis);
	var axis_1 = axis.yAxisConfig;
	var axis_2 = axis.xAxisConfig;

	var title = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.titleConfig = void 0;
	var titleConfig = {
	  /**
	   * @description Whether to display title
	   * @type {Boolean}
	   * @default show = true
	   */
	  show: true,

	  /**
	   * @description Title text
	   * @type {String}
	   * @default text = ''
	   */
	  text: '',

	  /**
	   * @description Title offset
	   * @type {Array}
	   * @default offset = [0, -20]
	   */
	  offset: [0, -20],

	  /**
	   * @description Title default style configuration
	   * @type {Object}
	   * @default style = {Configuration Of Class Style}
	   */
	  style: {
	    fill: '#333',
	    fontSize: 17,
	    fontWeight: 'bold',
	    textAlign: 'center',
	    textBaseline: 'bottom'
	  },

	  /**
	   * @description Title render level
	   * Priority rendering high level
	   * @type {Number}
	   * @default rLevel = 20
	   */
	  rLevel: 20,

	  /**
	   * @description Title animation curve
	   * @type {String}
	   * @default animationCurve = 'easeOutCubic'
	   */
	  animationCurve: 'easeOutCubic',

	  /**
	   * @description Title animation frame
	   * @type {Number}
	   * @default animationFrame = 50
	   */
	  animationFrame: 50
	};
	exports.titleConfig = titleConfig;
	});

	unwrapExports(title);
	var title_1 = title.titleConfig;

	var line = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.lineConfig = void 0;
	var lineConfig = {
	  /**
	   * @description Whether to display this line chart
	   * @type {Boolean}
	   * @default show = true
	   */
	  show: true,

	  /**
	   * @description Legend name
	   * @type {String}
	   * @default name = ''
	   */
	  name: '',

	  /**
	   * @description Data stacking
	   * The data value of the series element of the same stack
	   * will be superimposed (the latter value will be superimposed on the previous value)
	   * @type {String}
	   * @default stack = ''
	   */
	  stack: '',

	  /**
	   * @description Smooth line
	   * @type {Boolean}
	   * @default smooth = false
	   */
	  smooth: false,

	  /**
	   * @description Line x axis index
	   * @type {Number}
	   * @default xAxisIndex = 0
	   * @example xAxisIndex = 0 | 1
	   */
	  xAxisIndex: 0,

	  /**
	   * @description Line y axis index
	   * @type {Number}
	   * @default yAxisIndex = 0
	   * @example yAxisIndex = 0 | 1
	   */
	  yAxisIndex: 0,

	  /**
	   * @description Line chart data
	   * @type {Array}
	   * @default data = []
	   * @example data = [100, 200, 300]
	   */
	  data: [],

	  /**
	   * @description Line default style configuration
	   * @type {Object}
	   * @default style = {Configuration Of Class Style}
	   */
	  lineStyle: {
	    lineWidth: 1
	  },

	  /**
	   * @description Line point configuration
	   * @type {Object}
	   */
	  linePoint: {
	    /**
	     * @description Whether to display line point
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Line point radius
	     * @type {Number}
	     * @default radius = 2
	     */
	    radius: 2,

	    /**
	     * @description Line point default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      fill: '#fff',
	      lineWidth: 1
	    }
	  },

	  /**
	   * @description Line area configuration
	   * @type {Object}
	   */
	  lineArea: {
	    /**
	     * @description Whether to display line area
	     * @type {Boolean}
	     * @default show = false
	     */
	    show: false,

	    /**
	     * @description Line area gradient color (Hex|rgb|rgba)
	     * @type {Array}
	     * @default gradient = []
	     */
	    gradient: [],

	    /**
	     * @description Line area style default configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      opacity: 0.5
	    }
	  },

	  /**
	   * @description Line label configuration
	   * @type {Object}
	   */
	  label: {
	    /**
	     * @description Whether to display line label
	     * @type {Boolean}
	     * @default show = false
	     */
	    show: false,

	    /**
	     * @description Line label position
	     * @type {String}
	     * @default position = 'top'
	     * @example position = 'top' | 'center' | 'bottom'
	     */
	    position: 'top',

	    /**
	     * @description Line label offset
	     * @type {Array}
	     * @default offset = [0, -10]
	     */
	    offset: [0, -10],

	    /**
	     * @description Line label formatter
	     * @type {String|Function}
	     * @default formatter = null
	     * @example formatter = '{value}件'
	     * @example formatter = (dataItem) => (dataItem.value)
	     */
	    formatter: null,

	    /**
	     * @description Line label default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      fontSize: 10
	    }
	  },

	  /**
	   * @description Line chart render level
	   * Priority rendering high level
	   * @type {Number}
	   * @default rLevel = 10
	   */
	  rLevel: 10,

	  /**
	   * @description Line animation curve
	   * @type {String}
	   * @default animationCurve = 'easeOutCubic'
	   */
	  animationCurve: 'easeOutCubic',

	  /**
	   * @description Line animation frame
	   * @type {Number}
	   * @default animationFrame = 50
	   */
	  animationFrame: 50
	};
	exports.lineConfig = lineConfig;
	});

	unwrapExports(line);
	var line_1 = line.lineConfig;

	var bar = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.barConfig = void 0;
	var barConfig = {
	  /**
	   * @description Whether to display this bar chart
	   * @type {Boolean}
	   * @default show = true
	   */
	  show: true,

	  /**
	   * @description Legend name
	   * @type {String}
	   * @default name = ''
	   */
	  name: '',

	  /**
	   * @description Data stacking
	   * The data value of the series element of the same stack
	   * will be superimposed (the latter value will be superimposed on the previous value)
	   * @type {String}
	   * @default stack = ''
	   */
	  stack: '',

	  /**
	   * @description Bar shape type
	   * @type {String}
	   * @default shapeType = 'normal'
	   * @example shapeType = 'normal' | 'leftEchelon' | 'rightEchelon'
	   */
	  shapeType: 'normal',

	  /**
	   * @description Echelon bar sharpness offset
	   * @type {Number}
	   * @default echelonOffset = 10
	   */
	  echelonOffset: 10,

	  /**
	   * @description Bar width
	   * This property should be set on the last 'bar' series
	   * in this coordinate system to take effect and will be in effect
	   * for all 'bar' series in this coordinate system
	   * @type {String|Number}
	   * @default barWidth = 'auto'
	   * @example barWidth = 'auto' | '10%' | 20
	   */
	  barWidth: 'auto',

	  /**
	   * @description Bar gap
	   * This property should be set on the last 'bar' series
	   * in this coordinate system to take effect and will be in effect
	   * for all 'bar' series in this coordinate system
	   * @type {String|Number}
	   * @default barGap = '30%'
	   * @example barGap = '30%' | 30
	   */
	  barGap: '30%',

	  /**
	   * @description Bar category gap
	   * This property should be set on the last 'bar' series
	   * in this coordinate system to take effect and will be in effect
	   * for all 'bar' series in this coordinate system
	   * @type {String|Number}
	   * @default barCategoryGap = '20%'
	   * @example barCategoryGap = '20%' | 20
	   */
	  barCategoryGap: '20%',

	  /**
	   * @description Bar x axis index
	   * @type {Number}
	   * @default xAxisIndex = 0
	   * @example xAxisIndex = 0 | 1
	   */
	  xAxisIndex: 0,

	  /**
	   * @description Bar y axis index
	   * @type {Number}
	   * @default yAxisIndex = 0
	   * @example yAxisIndex = 0 | 1
	   */
	  yAxisIndex: 0,

	  /**
	   * @description Bar chart data
	   * @type {Array}
	   * @default data = []
	   * @example data = [100, 200, 300]
	   */
	  data: [],

	  /**
	   * @description Background bar configuration
	   * @type {Object}
	   */
	  backgroundBar: {
	    /**
	     * @description Whether to display background bar
	     * @type {Boolean}
	     * @default show = false
	     */
	    show: false,

	    /**
	     * @description Background bar width
	     * @type {String|Number}
	     * @default width = 'auto'
	     * @example width = 'auto' | '30%' | 30
	     */
	    width: 'auto',

	    /**
	     * @description Background bar default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      fill: 'rgba(200, 200, 200, .4)'
	    }
	  },

	  /**
	   * @description Bar label configuration
	   * @type {Object}
	   */
	  label: {
	    /**
	     * @description Whether to display bar label
	     * @type {Boolean}
	     * @default show = false
	     */
	    show: false,

	    /**
	     * @description Bar label position
	     * @type {String}
	     * @default position = 'top'
	     * @example position = 'top' | 'center' | 'bottom'
	     */
	    position: 'top',

	    /**
	     * @description Bar label offset
	     * @type {Array}
	     * @default offset = [0, -10]
	     */
	    offset: [0, -10],

	    /**
	     * @description Bar label formatter
	     * @type {String|Function}
	     * @default formatter = null
	     * @example formatter = '{value}件'
	     * @example formatter = (dataItem) => (dataItem.value)
	     */
	    formatter: null,

	    /**
	     * @description Bar label default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      fontSize: 10
	    }
	  },

	  /**
	   * @description Bar gradient configuration
	   * @type {Object}
	   */
	  gradient: {
	    /**
	     * @description Gradient color (Hex|rgb|rgba)
	     * @type {Array}
	     * @default color = []
	     */
	    color: [],

	    /**
	     * @description Local gradient
	     * @type {Boolean}
	     * @default local = true
	     */
	    local: true
	  },

	  /**
	   * @description Bar style default configuration
	   * @type {Object}
	   * @default style = {Configuration Of Class Style}
	   */
	  barStyle: {},

	  /**
	   * @description Bar chart render level
	   * Priority rendering high level
	   * @type {Number}
	   * @default rLevel = 0
	   */
	  rLevel: 0,

	  /**
	   * @description Bar animation curve
	   * @type {String}
	   * @default animationCurve = 'easeOutCubic'
	   */
	  animationCurve: 'easeOutCubic',

	  /**
	   * @description Bar animation frame
	   * @type {Number}
	   * @default animationFrame = 50
	   */
	  animationFrame: 50
	};
	exports.barConfig = barConfig;
	});

	unwrapExports(bar);
	var bar_1 = bar.barConfig;

	var pie$1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pieConfig = void 0;
	var pieConfig = {
	  /**
	   * @description Whether to display this pie chart
	   * @type {Boolean}
	   * @default show = true
	   */
	  show: true,

	  /**
	   * @description Legend name
	   * @type {String}
	   * @default name = ''
	   */
	  name: '',

	  /**
	   * @description Radius of pie
	   * @type {String|Number}
	   * @default radius = '50%'
	   * @example radius = '50%' | 100
	   */
	  radius: '50%',

	  /**
	   * @description Center point of pie
	   * @type {Array}
	   * @default center = ['50%','50%']
	   * @example center = ['50%','50%'] | [100, 100]
	   */
	  center: ['50%', '50%'],

	  /**
	   * @description Pie chart start angle
	   * @type {Number}
	   * @default startAngle = -Math.PI / 2
	   * @example startAngle = -Math.PI
	   */
	  startAngle: -Math.PI / 2,

	  /**
	   * @description Whether to enable rose type
	   * @type {Boolean}
	   * @default roseType = false
	   */
	  roseType: false,

	  /**
	   * @description Automatic sorting in rose type
	   * @type {Boolean}
	   * @default roseSort = true
	   */
	  roseSort: true,

	  /**
	   * @description Rose radius increasing
	   * @type {String|Number}
	   * @default roseIncrement = 'auto'
	   * @example roseIncrement = 'auto' | '10%' | 10
	   */
	  roseIncrement: 'auto',

	  /**
	   * @description Pie chart data
	   * @type {Array}
	   * @default data = []
	   */
	  data: [],

	  /**
	   * @description Pie inside label configuration
	   * @type {Object}
	   */
	  insideLabel: {
	    /**
	     * @description Whether to display inside label
	     * @type {Boolean}
	     * @default show = false
	     */
	    show: false,

	    /**
	     * @description Label formatter
	     * @type {String|Function}
	     * @default formatter = '{percent}%'
	     * @example formatter = '${name}-{value}-{percent}%'
	     * @example formatter = (dataItem) => (dataItem.name)
	     */
	    formatter: '{percent}%',

	    /**
	     * @description Label default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      fontSize: 10,
	      fill: '#fff',
	      textAlign: 'center',
	      textBaseline: 'middle'
	    }
	  },

	  /**
	   * @description Pie Outside label configuration
	   * @type {Object}
	   */
	  outsideLabel: {
	    /**
	     * @description Whether to display outside label
	     * @type {Boolean}
	     * @default show = false
	     */
	    show: true,

	    /**
	     * @description Label formatter
	     * @type {String|Function}
	     * @default formatter = '{name}'
	     * @example formatter = '${name}-{value}-{percent}%'
	     * @example formatter = (dataItem) => (dataItem.name)
	     */
	    formatter: '{name}',

	    /**
	     * @description Label default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      fontSize: 11
	    },

	    /**
	     * @description Gap beteen label line bended place and pie
	     * @type {String|Number}
	     * @default labelLineBendGap = '20%'
	     * @example labelLineBendGap = '20%' | 20
	     */
	    labelLineBendGap: '20%',

	    /**
	     * @description Label line end length
	     * @type {Number}
	     * @default labelLineEndLength = 50
	     */
	    labelLineEndLength: 50,

	    /**
	     * @description Label line default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    labelLineStyle: {
	      lineWidth: 1
	    }
	  },

	  /**
	   * @description Pie default style configuration
	   * @type {Object}
	   * @default style = {Configuration Of Class Style}
	   */
	  pieStyle: {},

	  /**
	   * @description Percentage fractional precision
	   * @type {Number}
	   * @default percentToFixed = 0
	   */
	  percentToFixed: 0,

	  /**
	   * @description Pie chart render level
	   * Priority rendering high level
	   * @type {Number}
	   * @default rLevel = 10
	   */
	  rLevel: 10,

	  /**
	   * @description Animation delay gap
	   * @type {Number}
	   * @default animationDelayGap = 60
	   */
	  animationDelayGap: 60,

	  /**
	   * @description Pie animation curve
	   * @type {String}
	   * @default animationCurve = 'easeOutCubic'
	   */
	  animationCurve: 'easeOutCubic',

	  /**
	   * @description Pie start animation curve
	   * @type {String}
	   * @default startAnimationCurve = 'easeOutBack'
	   */
	  startAnimationCurve: 'easeOutBack',

	  /**
	   * @description Pie animation frame
	   * @type {Number}
	   * @default animationFrame = 50
	   */
	  animationFrame: 50
	};
	exports.pieConfig = pieConfig;
	});

	unwrapExports(pie$1);
	var pie_1 = pie$1.pieConfig;

	var radarAxis = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.radarAxisConfig = void 0;
	var radarAxisConfig = {
	  /**
	   * @description Whether to display this radar axis
	   * @type {Boolean}
	   * @default show = true
	   */
	  show: true,

	  /**
	   * @description Center point of radar axis
	   * @type {Array}
	   * @default center = ['50%','50%']
	   * @example center = ['50%','50%'] | [100, 100]
	   */
	  center: ['50%', '50%'],

	  /**
	   * @description Radius of radar axis
	   * @type {String|Number}
	   * @default radius = '65%'
	   * @example radius = '65%' | 100
	   */
	  radius: '65%',

	  /**
	   * @description Radar axis start angle
	   * @type {Number}
	   * @default startAngle = -Math.PI / 2
	   * @example startAngle = -Math.PI
	   */
	  startAngle: -Math.PI / 2,

	  /**
	   * @description Radar axis split number
	   * @type {Number}
	   * @default splitNum = 5
	   */
	  splitNum: 5,

	  /**
	   * @description Whether to enable polygon radar axis
	   * @type {Boolean}
	   * @default polygon = false
	   */
	  polygon: false,

	  /**
	   * @description Axis label configuration
	   * @type {Object}
	   */
	  axisLabel: {
	    /**
	     * @description Whether to display axis label
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Label gap between label and radar axis
	     * @type {Number}
	     * @default labelGap = 15
	     */
	    labelGap: 15,

	    /**
	     * @description Label color (Hex|rgb|rgba), will cover style.fill
	     * @type {Array}
	     * @default color = []
	     */
	    color: [],

	    /**
	     * @description Axis label default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      fill: '#333'
	    }
	  },

	  /**
	   * @description Axis line configuration
	   * @type {Object}
	   */
	  axisLine: {
	    /**
	     * @description Whether to display axis line
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Line color (Hex|rgb|rgba), will cover style.stroke
	     * @type {Array}
	     * @default color = []
	     */
	    color: [],

	    /**
	     * @description Axis label default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      stroke: '#999',
	      lineWidth: 1
	    }
	  },

	  /**
	   * @description Split line configuration
	   * @type {Object}
	   */
	  splitLine: {
	    /**
	     * @description Whether to display split line
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Line color (Hex|rgb|rgba), will cover style.stroke
	     * @type {Array}
	     * @default color = []
	     */
	    color: [],

	    /**
	     * @description Split line default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      stroke: '#d4d4d4',
	      lineWidth: 1
	    }
	  },

	  /**
	   * @description Split area configuration
	   * @type {Object}
	   */
	  splitArea: {
	    /**
	     * @description Whether to display split area
	     * @type {Boolean}
	     * @default show = false
	     */
	    show: false,

	    /**
	     * @description Area color (Hex|rgb|rgba), will cover style.stroke
	     * @type {Array}
	     * @default color = []
	     */
	    color: ['#f5f5f5', '#e6e6e6'],

	    /**
	     * @description Split area default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {}
	  },

	  /**
	   * @description Bar chart render level
	   * Priority rendering high level
	   * @type {Number}
	   * @default rLevel = -10
	   */
	  rLevel: -10,

	  /**
	   * @description Radar axis animation curve
	   * @type {String}
	   * @default animationCurve = 'easeOutCubic'
	   */
	  animationCurve: 'easeOutCubic',

	  /**
	   * @description Radar axis animation frame
	   * @type {Number}
	   * @default animationFrame = 50
	   */
	  animationFrane: 50
	};
	exports.radarAxisConfig = radarAxisConfig;
	});

	unwrapExports(radarAxis);
	var radarAxis_1 = radarAxis.radarAxisConfig;

	var radar = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.radarConfig = void 0;
	var radarConfig = {
	  /**
	   * @description Whether to display this radar
	   * @type {Boolean}
	   * @default show = true
	   */
	  show: true,

	  /**
	   * @description Legend name
	   * @type {String}
	   * @default name = ''
	   */
	  name: '',

	  /**
	   * @description Radar chart data
	   * @type {Array}
	   * @default data = []
	   * @example data = [100, 200, 300]
	   */
	  data: [],

	  /**
	   * @description Radar default style configuration
	   * @type {Object}
	   * @default style = {Configuration Of Class Style}
	   */
	  radarStyle: {
	    lineWidth: 1
	  },

	  /**
	   * @description Radar point configuration
	   * @type {Object}
	   */
	  point: {
	    /**
	     * @description Whether to display radar point
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Point radius
	     * @type {Number}
	     * @default radius = 2
	     */
	    radius: 2,

	    /**
	     * @description Radar point default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      fill: '#fff'
	    }
	  },

	  /**
	   * @description Radar label configuration
	   * @type {Object}
	   */
	  label: {
	    /**
	     * @description Whether to display radar label
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Label position offset
	     * @type {Array}
	     * @default offset = [0, 0]
	     */
	    offset: [0, 0],

	    /**
	     * @description Label gap between label and radar
	     * @type {Number}
	     * @default labelGap = 5
	     */
	    labelGap: 5,

	    /**
	     * @description Label formatter
	     * @type {String|Function}
	     * @default formatter = null
	     * @example formatter = 'Score-{value}'
	     * @example formatter = (label) => (label)
	     */
	    formatter: null,

	    /**
	     * @description Radar label default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      fontSize: 10
	    }
	  },

	  /**
	   * @description Radar chart render level
	   * Priority rendering high level
	   * @type {Number}
	   * @default rLevel = 10
	   */
	  rLevel: 10,

	  /**
	   * @description Radar animation curve
	   * @type {String}
	   * @default animationCurve = 'easeOutCubic'
	   */
	  animationCurve: 'easeOutCubic',

	  /**
	   * @description Radar animation frame
	   * @type {Number}
	   * @default animationFrame = 50
	   */
	  animationFrane: 50
	};
	exports.radarConfig = radarConfig;
	});

	unwrapExports(radar);
	var radar_1 = radar.radarConfig;

	var gauge = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.gaugeConfig = void 0;
	var gaugeConfig = {
	  /**
	   * @description Whether to display this gauge
	   * @type {Boolean}
	   * @default show = true
	   */
	  show: true,

	  /**
	   * @description Legend name
	   * @type {String}
	   * @default name = ''
	   */
	  name: '',

	  /**
	   * @description Radius of gauge
	   * @type {String|Number}
	   * @default radius = '60%'
	   * @example radius = '60%' | 100
	   */
	  radius: '60%',

	  /**
	   * @description Center point of gauge
	   * @type {Array}
	   * @default center = ['50%','50%']
	   * @example center = ['50%','50%'] | [100, 100]
	   */
	  center: ['50%', '50%'],

	  /**
	   * @description Gauge start angle
	   * @type {Number}
	   * @default startAngle = -(Math.PI / 4) * 5
	   * @example startAngle = -Math.PI
	   */
	  startAngle: -(Math.PI / 4) * 5,

	  /**
	   * @description Gauge end angle
	   * @type {Number}
	   * @default endAngle = Math.PI / 4
	   * @example endAngle = 0
	   */
	  endAngle: Math.PI / 4,

	  /**
	   * @description Gauge min value
	   * @type {Number}
	   * @default min = 0
	   */
	  min: 0,

	  /**
	   * @description Gauge max value
	   * @type {Number}
	   * @default max = 100
	   */
	  max: 100,

	  /**
	   * @description Gauge split number
	   * @type {Number}
	   * @default splitNum = 5
	   */
	  splitNum: 5,

	  /**
	   * @description Gauge arc line width
	   * @type {Number}
	   * @default arcLineWidth = 15
	   */
	  arcLineWidth: 15,

	  /**
	   * @description Gauge chart data
	   * @type {Array}
	   * @default data = []
	   */
	  data: [],

	  /**
	   * @description Data item arc default style configuration
	   * @type {Object}
	   * @default dataItemStyle = {Configuration Of Class Style}
	   */
	  dataItemStyle: {},

	  /**
	   * @description Axis tick configuration
	   * @type {Object}
	   */
	  axisTick: {
	    /**
	     * @description Whether to display axis tick
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Axis tick length
	     * @type {Number}
	     * @default tickLength = 6
	     */
	    tickLength: 6,

	    /**
	     * @description Axis tick default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      stroke: '#999',
	      lineWidth: 1
	    }
	  },

	  /**
	   * @description Axis label configuration
	   * @type {Object}
	   */
	  axisLabel: {
	    /**
	     * @description Whether to display axis label
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Axis label data (Can be calculated automatically)
	     * @type {Array}
	     * @default data = [Number...]
	     */
	    data: [],

	    /**
	     * @description Axis label formatter
	     * @type {String|Function}
	     * @default formatter = null
	     * @example formatter = '{value}%'
	     * @example formatter = (labelItem) => (labelItem.value)
	     */
	    formatter: null,

	    /**
	     * @description Axis label gap between label and axis tick
	     * @type {String|Function}
	     * @default labelGap = 5
	     */
	    labelGap: 5,

	    /**
	     * @description Axis label default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {}
	  },

	  /**
	   * @description Gauge pointer configuration
	   * @type {Object}
	   */
	  pointer: {
	    /**
	     * @description Whether to display pointer
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Pointer value index of data
	     * @type {Number}
	     * @default valueIndex = 0 (pointer.value = data[0].value)
	     */
	    valueIndex: 0,

	    /**
	     * @description Pointer default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      scale: [1, 1],
	      fill: '#fb7293'
	    }
	  },

	  /**
	   * @description Data item arc detail configuration
	   * @type {Object}
	   */
	  details: {
	    /**
	     * @description Whether to display details
	     * @type {Boolean}
	     * @default show = false
	     */
	    show: false,

	    /**
	     * @description Details formatter
	     * @type {String|Function}
	     * @default formatter = null
	     * @example formatter = '{value}%'
	     * @example formatter = '{name}%'
	     * @example formatter = (dataItem) => (dataItem.value)
	     */
	    formatter: null,

	    /**
	     * @description Details position offset
	     * @type {Array}
	     * @default offset = [0, 0]
	     * @example offset = [10, 10]
	     */
	    offset: [0, 0],

	    /**
	     * @description Value fractional precision
	     * @type {Number}
	     * @default valueToFixed = 0
	     */
	    valueToFixed: 0,

	    /**
	     * @description Details position
	     * @type {String}
	     * @default position = 'center'
	     * @example position = 'start' | 'center' | 'end'
	     */
	    position: 'center',

	    /**
	     * @description Details default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      fontSize: 20,
	      fontWeight: 'bold',
	      textAlign: 'center',
	      textBaseline: 'middle'
	    }
	  },

	  /**
	   * @description Gauge background arc configuration
	   * @type {Object}
	   */
	  backgroundArc: {
	    /**
	     * @description Whether to display background arc
	     * @type {Boolean}
	     * @default show = true
	     */
	    show: true,

	    /**
	     * @description Background arc default style configuration
	     * @type {Object}
	     * @default style = {Configuration Of Class Style}
	     */
	    style: {
	      stroke: '#e0e0e0'
	    }
	  },

	  /**
	   * @description Gauge chart render level
	   * Priority rendering high level
	   * @type {Number}
	   * @default rLevel = 10
	   */
	  rLevel: 10,

	  /**
	   * @description Gauge animation curve
	   * @type {String}
	   * @default animationCurve = 'easeOutCubic'
	   */
	  animationCurve: 'easeOutCubic',

	  /**
	   * @description Gauge animation frame
	   * @type {Number}
	   * @default animationFrame = 50
	   */
	  animationFrame: 50
	};
	exports.gaugeConfig = gaugeConfig;
	});

	unwrapExports(gauge);
	var gauge_1 = gauge.gaugeConfig;

	var legend = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.legendConfig = void 0;
	var legendConfig = {
	  /**
	   * @description Whether to display legend
	   * @type {Boolean}
	   * @default show = true
	   */
	  show: true,

	  /**
	   * @description Legend orient
	   * @type {String}
	   * @default orient = 'horizontal'
	   * @example orient = 'horizontal' | 'vertical'
	   */
	  orient: 'horizontal',

	  /**
	   * @description Legend left
	   * @type {String|Number}
	   * @default left = 'auto'
	   * @example left = 'auto' | '10%' | 10
	   */
	  left: 'auto',

	  /**
	   * @description Legend right
	   * @type {String|Number}
	   * @default right = 'auto'
	   * @example right = 'auto' | '10%' | 10
	   */
	  right: 'auto',

	  /**
	   * @description Legend top
	   * @type {String|Number}
	   * @default top = 'auto'
	   * @example top = 'auto' | '10%' | 10
	   */
	  top: 'auto',

	  /**
	   * @description Legend bottom
	   * @type {String|Number}
	   * @default bottom = 'auto'
	   * @example bottom = 'auto' | '10%' | 10
	   */
	  bottom: 'auto',

	  /**
	   * @description Legend item gap
	   * @type {Number}
	   * @default itemGap = 10
	   */
	  itemGap: 10,

	  /**
	   * @description Icon width
	   * @type {Number}
	   * @default iconWidth = 25
	   */
	  iconWidth: 25,

	  /**
	   * @description Icon height
	   * @type {Number}
	   * @default iconHeight = 10
	   */
	  iconHeight: 10,

	  /**
	   * @description Whether legend is optional
	   * @type {Boolean}
	   * @default selectAble = true
	   */
	  selectAble: true,

	  /**
	   * @description Legend data
	   * @type {Array}
	   * @default data = []
	   */
	  data: [],

	  /**
	   * @description Legend text default style configuration
	   * @type {Object}
	   * @default style = {Configuration Of Class Style}
	   */
	  textStyle: {
	    fontFamily: 'Arial',
	    fontSize: 13,
	    fill: '#000'
	  },

	  /**
	   * @description Legend icon default style configuration
	   * @type {Object}
	   * @default style = {Configuration Of Class Style}
	   */
	  iconStyle: {},

	  /**
	   * @description Legend text unselected default style configuration
	   * @type {Object}
	   * @default style = {Configuration Of Class Style}
	   */
	  textUnselectedStyle: {
	    fontFamily: 'Arial',
	    fontSize: 13,
	    fill: '#999'
	  },

	  /**
	   * @description Legend icon unselected default style configuration
	   * @type {Object}
	   * @default style = {Configuration Of Class Style}
	   */
	  iconUnselectedStyle: {
	    fill: '#999'
	  },

	  /**
	   * @description Legend render level
	   * Priority rendering high level
	   * @type {Number}
	   * @default rLevel = 20
	   */
	  rLevel: 20,

	  /**
	   * @description Legend animation curve
	   * @type {String}
	   * @default animationCurve = 'easeOutCubic'
	   */
	  animationCurve: 'easeOutCubic',

	  /**
	   * @description Legend animation frame
	   * @type {Number}
	   * @default animationFrame = 50
	   */
	  animationFrame: 50
	};
	exports.legendConfig = legendConfig;
	});

	unwrapExports(legend);
	var legend_1 = legend.legendConfig;

	var config = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.changeDefaultConfig = changeDefaultConfig;
	Object.defineProperty(exports, "colorConfig", {
	  enumerable: true,
	  get: function get() {
	    return color.colorConfig;
	  }
	});
	Object.defineProperty(exports, "gridConfig", {
	  enumerable: true,
	  get: function get() {
	    return grid.gridConfig;
	  }
	});
	Object.defineProperty(exports, "xAxisConfig", {
	  enumerable: true,
	  get: function get() {
	    return axis.xAxisConfig;
	  }
	});
	Object.defineProperty(exports, "yAxisConfig", {
	  enumerable: true,
	  get: function get() {
	    return axis.yAxisConfig;
	  }
	});
	Object.defineProperty(exports, "titleConfig", {
	  enumerable: true,
	  get: function get() {
	    return title.titleConfig;
	  }
	});
	Object.defineProperty(exports, "lineConfig", {
	  enumerable: true,
	  get: function get() {
	    return line.lineConfig;
	  }
	});
	Object.defineProperty(exports, "barConfig", {
	  enumerable: true,
	  get: function get() {
	    return bar.barConfig;
	  }
	});
	Object.defineProperty(exports, "pieConfig", {
	  enumerable: true,
	  get: function get() {
	    return pie$1.pieConfig;
	  }
	});
	Object.defineProperty(exports, "radarAxisConfig", {
	  enumerable: true,
	  get: function get() {
	    return radarAxis.radarAxisConfig;
	  }
	});
	Object.defineProperty(exports, "radarConfig", {
	  enumerable: true,
	  get: function get() {
	    return radar.radarConfig;
	  }
	});
	Object.defineProperty(exports, "gaugeConfig", {
	  enumerable: true,
	  get: function get() {
	    return gauge.gaugeConfig;
	  }
	});
	Object.defineProperty(exports, "legendConfig", {
	  enumerable: true,
	  get: function get() {
	    return legend.legendConfig;
	  }
	});
	exports.keys = void 0;

























	var allConfig = {
	  colorConfig: color.colorConfig,
	  gridConfig: grid.gridConfig,
	  xAxisConfig: axis.xAxisConfig,
	  yAxisConfig: axis.yAxisConfig,
	  titleConfig: title.titleConfig,
	  lineConfig: line.lineConfig,
	  barConfig: bar.barConfig,
	  pieConfig: pie$1.pieConfig,
	  radarAxisConfig: radarAxis.radarAxisConfig,
	  radarConfig: radar.radarConfig,
	  gaugeConfig: gauge.gaugeConfig,
	  legendConfig: legend.legendConfig
	  /**
	   * @description Change default configuration
	   * @param {String} key          Configuration key
	   * @param {Object|Array} config Your config
	   * @return {Undefined} No return
	   */

	};

	function changeDefaultConfig(key, config) {
	  if (!allConfig["".concat(key, "Config")]) {
	    console.warn('Change default config Error - Invalid key!');
	    return;
	  }

	  (0, util$2.deepMerge)(allConfig["".concat(key, "Config")], config);
	}

	var keys = ['color', 'title', 'legend', 'xAxis', 'yAxis', 'grid', 'radarAxis', 'line', 'bar', 'pie', 'radar', 'gauge'];
	exports.keys = keys;
	});

	unwrapExports(config);
	var config_1 = config.changeDefaultConfig;
	var config_2 = config.keys;

	var mergeColor_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mergeColor = mergeColor;







	function mergeColor(chart) {
	  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var defaultColor = (0, util.deepClone)(config.colorConfig, true);
	  var color = option.color,
	      series = option.series;
	  if (!series) series = [];
	  if (!color) color = [];
	  option.color = color = (0, util$2.deepMerge)(defaultColor, color);
	  if (!series.length) return;
	  var colorNum = color.length;
	  series.forEach(function (item, i) {
	    if (item.color) return;
	    item.color = color[i % colorNum];
	  });
	  var pies = series.filter(function (_ref) {
	    var type = _ref.type;
	    return type === 'pie';
	  });
	  pies.forEach(function (pie) {
	    return pie.data.forEach(function (di, i) {
	      return di.color = color[i % colorNum];
	    });
	  });
	  var gauges = series.filter(function (_ref2) {
	    var type = _ref2.type;
	    return type === 'gauge';
	  });
	  gauges.forEach(function (gauge) {
	    return gauge.data.forEach(function (di, i) {
	      return di.color = color[i % colorNum];
	    });
	  });
	}
	});

	unwrapExports(mergeColor_1);
	var mergeColor_2 = mergeColor_1.mergeColor;

	var updater_class = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.doUpdate = doUpdate;
	exports.Updater = void 0;

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);

	var _typeof2 = interopRequireDefault$1(_typeof_1);

	var _classCallCheck2 = interopRequireDefault$1(classCallCheck$1);

	var Updater = function Updater(config, series) {
	  (0, _classCallCheck2["default"])(this, Updater);
	  var chart = config.chart,
	      key = config.key,
	      getGraphConfig = config.getGraphConfig;

	  if (typeof getGraphConfig !== 'function') {
	    console.warn('Updater need function getGraphConfig!');
	    return;
	  }

	  if (!chart[key]) this.graphs = chart[key] = [];
	  Object.assign(this, config);
	  this.update(series);
	};

	exports.Updater = Updater;

	Updater.prototype.update = function (series) {
	  var _this = this;

	  var graphs = this.graphs,
	      beforeUpdate = this.beforeUpdate;
	  delRedundanceGraph(this, series);
	  if (!series.length) return;
	  var beforeUpdateType = (0, _typeof2["default"])(beforeUpdate);
	  series.forEach(function (seriesItem, i) {
	    if (beforeUpdateType === 'function') beforeUpdate(graphs, seriesItem, i, _this);
	    var cache = graphs[i];

	    if (cache) {
	      changeGraphs(cache, seriesItem, i, _this);
	    } else {
	      addGraphs(graphs, seriesItem, i, _this);
	    }
	  });
	};

	function delRedundanceGraph(updater, series) {
	  var graphs = updater.graphs,
	      render = updater.chart.render;
	  var cacheGraphNum = graphs.length;
	  var needGraphNum = series.length;

	  if (cacheGraphNum > needGraphNum) {
	    var needDelGraphs = graphs.splice(needGraphNum);
	    needDelGraphs.forEach(function (item) {
	      return item.forEach(function (g) {
	        return render.delGraph(g);
	      });
	    });
	  }
	}

	function changeGraphs(cache, seriesItem, i, updater) {
	  var getGraphConfig = updater.getGraphConfig,
	      render = updater.chart.render,
	      beforeChange = updater.beforeChange;
	  var configs = getGraphConfig(seriesItem, updater);
	  balanceGraphsNum(cache, configs, render);
	  cache.forEach(function (graph, j) {
	    var config = configs[j];
	    if (typeof beforeChange === 'function') beforeChange(graph, config);
	    updateGraphConfigByKey(graph, config);
	  });
	}

	function balanceGraphsNum(graphs, graphConfig, render) {
	  var cacheGraphNum = graphs.length;
	  var needGraphNum = graphConfig.length;

	  if (needGraphNum > cacheGraphNum) {
	    var lastCacheGraph = graphs.slice(-1)[0];
	    var needAddGraphNum = needGraphNum - cacheGraphNum;
	    var needAddGraphs = new Array(needAddGraphNum).fill(0).map(function (foo) {
	      return render.clone(lastCacheGraph);
	    });
	    graphs.push.apply(graphs, (0, _toConsumableArray2["default"])(needAddGraphs));
	  } else if (needGraphNum < cacheGraphNum) {
	    var needDelCache = graphs.splice(needGraphNum);
	    needDelCache.forEach(function (g) {
	      return render.delGraph(g);
	    });
	  }
	}

	function addGraphs(graphs, seriesItem, i, updater) {
	  var getGraphConfig = updater.getGraphConfig,
	      getStartGraphConfig = updater.getStartGraphConfig,
	      chart = updater.chart;
	  var render = chart.render;
	  var startConfigs = null;
	  if (typeof getStartGraphConfig === 'function') startConfigs = getStartGraphConfig(seriesItem, updater);
	  var configs = getGraphConfig(seriesItem, updater);
	  if (!configs.length) return;

	  if (startConfigs) {
	    graphs[i] = startConfigs.map(function (config) {
	      return render.add(config);
	    });
	    graphs[i].forEach(function (graph, i) {
	      var config = configs[i];
	      updateGraphConfigByKey(graph, config);
	    });
	  } else {
	    graphs[i] = configs.map(function (config) {
	      return render.add(config);
	    });
	  }

	  var afterAddGraph = updater.afterAddGraph;
	  if (typeof afterAddGraph === 'function') afterAddGraph(graphs[i]);
	}

	function updateGraphConfigByKey(graph, config) {
	  var keys = Object.keys(config);
	  keys.forEach(function (key) {
	    if (key === 'shape' || key === 'style') {
	      graph.animation(key, config[key], true);
	    } else {
	      graph[key] = config[key];
	    }
	  });
	}

	function doUpdate() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      chart = _ref.chart,
	      series = _ref.series,
	      key = _ref.key,
	      getGraphConfig = _ref.getGraphConfig,
	      getStartGraphConfig = _ref.getStartGraphConfig,
	      beforeChange = _ref.beforeChange,
	      beforeUpdate = _ref.beforeUpdate,
	      afterAddGraph = _ref.afterAddGraph;

	  if (chart[key]) {
	    chart[key].update(series);
	  } else {
	    chart[key] = new Updater({
	      chart: chart,
	      key: key,
	      getGraphConfig: getGraphConfig,
	      getStartGraphConfig: getStartGraphConfig,
	      beforeChange: beforeChange,
	      beforeUpdate: beforeUpdate,
	      afterAddGraph: afterAddGraph
	    }, series);
	  }
	}
	});

	unwrapExports(updater_class);
	var updater_class_1 = updater_class.doUpdate;
	var updater_class_2 = updater_class.Updater;

	var title_1$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.title = title;

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);









	function title(chart) {
	  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var title = [];

	  if (option.title) {
	    title[0] = (0, util$2.deepMerge)((0, util.deepClone)(config.titleConfig, true), option.title);
	  }

	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: title,
	    key: 'title',
	    getGraphConfig: getTitleConfig
	  });
	}

	function getTitleConfig(titleItem, updater) {
	  var animationCurve = config.titleConfig.animationCurve,
	      animationFrame = config.titleConfig.animationFrame,
	      rLevel = config.titleConfig.rLevel;
	  var shape = getTitleShape(titleItem, updater);
	  var style = getTitleStyle(titleItem);
	  return [{
	    name: 'text',
	    index: rLevel,
	    visible: titleItem.show,
	    animationCurve: animationCurve,
	    animationFrame: animationFrame,
	    shape: shape,
	    style: style
	  }];
	}

	function getTitleShape(titleItem, updater) {
	  var offset = titleItem.offset,
	      text = titleItem.text;
	  var _updater$chart$gridAr = updater.chart.gridArea,
	      x = _updater$chart$gridAr.x,
	      y = _updater$chart$gridAr.y,
	      w = _updater$chart$gridAr.w;

	  var _offset = (0, _slicedToArray2["default"])(offset, 2),
	      ox = _offset[0],
	      oy = _offset[1];

	  return {
	    content: text,
	    position: [x + w / 2 + ox, y + oy]
	  };
	}

	function getTitleStyle(titleItem) {
	  var style = titleItem.style;
	  return style;
	}
	});

	unwrapExports(title_1$1);
	var title_2 = title_1$1.title;

	var grid_1$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.grid = grid;

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);

	var _defineProperty2 = interopRequireDefault$1(defineProperty$1);









	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function grid(chart) {
	  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var grid = option.grid;
	  grid = (0, util$2.deepMerge)((0, util.deepClone)(config.gridConfig, true), grid || {});
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: [grid],
	    key: 'grid',
	    getGraphConfig: getGridConfig
	  });
	}

	function getGridConfig(gridItem, updater) {
	  var animationCurve = gridItem.animationCurve,
	      animationFrame = gridItem.animationFrame,
	      rLevel = gridItem.rLevel;
	  var shape = getGridShape(gridItem, updater);
	  var style = getGridStyle(gridItem);
	  updater.chart.gridArea = _objectSpread({}, shape);
	  return [{
	    name: 'rect',
	    index: rLevel,
	    animationCurve: animationCurve,
	    animationFrame: animationFrame,
	    shape: shape,
	    style: style
	  }];
	}

	function getGridShape(gridItem, updater) {
	  var _updater$chart$render = (0, _slicedToArray2["default"])(updater.chart.render.area, 2),
	      w = _updater$chart$render[0],
	      h = _updater$chart$render[1];

	  var left = getNumberValue(gridItem.left, w);
	  var right = getNumberValue(gridItem.right, w);
	  var top = getNumberValue(gridItem.top, h);
	  var bottom = getNumberValue(gridItem.bottom, h);
	  var width = w - left - right;
	  var height = h - top - bottom;
	  return {
	    x: left,
	    y: top,
	    w: width,
	    h: height
	  };
	}

	function getNumberValue(val, all) {
	  if (typeof val === 'number') return val;
	  if (typeof val !== 'string') return 0;
	  return all * parseInt(val) / 100;
	}

	function getGridStyle(gridItem) {
	  var style = gridItem.style;
	  return style;
	}
	});

	unwrapExports(grid_1$1);
	var grid_2 = grid_1$1.grid;

	var axis_1$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.axis = axis;

	var _typeof2 = interopRequireDefault$1(_typeof_1);

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);

	var _defineProperty2 = interopRequireDefault$1(defineProperty$1);

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);









	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	var axisConfig = {
	  xAxisConfig: config.xAxisConfig,
	  yAxisConfig: config.yAxisConfig
	};
	var abs = Math.abs,
	    pow = Math.pow;

	function axis(chart) {
	  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var xAxis = option.xAxis,
	      yAxis = option.yAxis,
	      series = option.series;
	  var allAxis = [];

	  if (xAxis && yAxis && series) {
	    allAxis = getAllAxis(xAxis, yAxis);
	    allAxis = mergeDefaultAxisConfig(allAxis);
	    allAxis = allAxis.filter(function (_ref) {
	      var show = _ref.show;
	      return show;
	    });
	    allAxis = mergeDefaultBoundaryGap(allAxis);
	    allAxis = calcAxisLabelData(allAxis, series);
	    allAxis = setAxisPosition(allAxis);
	    allAxis = calcAxisLinePosition(allAxis, chart);
	    allAxis = calcAxisTickPosition(allAxis, chart);
	    allAxis = calcAxisNamePosition(allAxis, chart);
	    allAxis = calcSplitLinePosition(allAxis, chart);
	  }

	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: allAxis,
	    key: 'axisLine',
	    getGraphConfig: getLineConfig
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: allAxis,
	    key: 'axisTick',
	    getGraphConfig: getTickConfig
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: allAxis,
	    key: 'axisLabel',
	    getGraphConfig: getLabelConfig
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: allAxis,
	    key: 'axisName',
	    getGraphConfig: getNameConfig
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: allAxis,
	    key: 'splitLine',
	    getGraphConfig: getSplitLineConfig
	  });
	  chart.axisData = allAxis;
	}

	function getAllAxis(xAxis, yAxis) {
	  var allXAxis = [],
	      allYAxis = [];

	  if (xAxis instanceof Array) {
	    var _allXAxis;

	    (_allXAxis = allXAxis).push.apply(_allXAxis, (0, _toConsumableArray2["default"])(xAxis));
	  } else {
	    allXAxis.push(xAxis);
	  }

	  if (yAxis instanceof Array) {
	    var _allYAxis;

	    (_allYAxis = allYAxis).push.apply(_allYAxis, (0, _toConsumableArray2["default"])(yAxis));
	  } else {
	    allYAxis.push(yAxis);
	  }

	  allXAxis.splice(2);
	  allYAxis.splice(2);
	  allXAxis = allXAxis.map(function (axis, i) {
	    return _objectSpread({}, axis, {
	      index: i,
	      axis: 'x'
	    });
	  });
	  allYAxis = allYAxis.map(function (axis, i) {
	    return _objectSpread({}, axis, {
	      index: i,
	      axis: 'y'
	    });
	  });
	  return [].concat((0, _toConsumableArray2["default"])(allXAxis), (0, _toConsumableArray2["default"])(allYAxis));
	}

	function mergeDefaultAxisConfig(allAxis) {
	  var xAxis = allAxis.filter(function (_ref2) {
	    var axis = _ref2.axis;
	    return axis === 'x';
	  });
	  var yAxis = allAxis.filter(function (_ref3) {
	    var axis = _ref3.axis;
	    return axis === 'y';
	  });
	  xAxis = xAxis.map(function (axis) {
	    return (0, util$2.deepMerge)((0, util.deepClone)(config.xAxisConfig), axis);
	  });
	  yAxis = yAxis.map(function (axis) {
	    return (0, util$2.deepMerge)((0, util.deepClone)(config.yAxisConfig), axis);
	  });
	  return [].concat((0, _toConsumableArray2["default"])(xAxis), (0, _toConsumableArray2["default"])(yAxis));
	}

	function mergeDefaultBoundaryGap(allAxis) {
	  var valueAxis = allAxis.filter(function (_ref4) {
	    var data = _ref4.data;
	    return data === 'value';
	  });
	  var labelAxis = allAxis.filter(function (_ref5) {
	    var data = _ref5.data;
	    return data !== 'value';
	  });
	  valueAxis.forEach(function (axis) {
	    if (typeof axis.boundaryGap === 'boolean') return;
	    axis.boundaryGap = false;
	  });
	  labelAxis.forEach(function (axis) {
	    if (typeof axis.boundaryGap === 'boolean') return;
	    axis.boundaryGap = true;
	  });
	  return [].concat((0, _toConsumableArray2["default"])(valueAxis), (0, _toConsumableArray2["default"])(labelAxis));
	}

	function calcAxisLabelData(allAxis, series) {
	  var valueAxis = allAxis.filter(function (_ref6) {
	    var data = _ref6.data;
	    return data === 'value';
	  });
	  var labelAxis = allAxis.filter(function (_ref7) {
	    var data = _ref7.data;
	    return data instanceof Array;
	  });
	  valueAxis = calcValueAxisLabelData(valueAxis, series);
	  labelAxis = calcLabelAxisLabelData(labelAxis);
	  return [].concat((0, _toConsumableArray2["default"])(valueAxis), (0, _toConsumableArray2["default"])(labelAxis));
	}

	function calcValueAxisLabelData(valueAxis, series) {
	  return valueAxis.map(function (axis) {
	    var minMaxValue = getValueAxisMaxMinValue(axis, series);

	    var _getTrueMinMax = getTrueMinMax(axis, minMaxValue),
	        _getTrueMinMax2 = (0, _slicedToArray2["default"])(_getTrueMinMax, 2),
	        min = _getTrueMinMax2[0],
	        max = _getTrueMinMax2[1];

	    var interval = getValueInterval(min, max, axis);
	    var formatter = axis.axisLabel.formatter;
	    var label = [];

	    if (minMaxValue[0] === minMaxValue[1]) {
	      label = minMaxValue;
	    } else if (min < 0 && max > 0) {
	      label = getValueAxisLabelFromZero(min, max, interval);
	    } else {
	      label = getValueAxisLabelFromMin(min, max, interval);
	    }

	    label = label.map(function (l) {
	      return parseFloat(l.toFixed(2));
	    });
	    return _objectSpread({}, axis, {
	      maxValue: label.slice(-1)[0],
	      minValue: label[0],
	      label: getAfterFormatterLabel(label, formatter)
	    });
	  });
	}

	function getValueAxisMaxMinValue(axis, series) {
	  series = series.filter(function (_ref8) {
	    var show = _ref8.show,
	        type = _ref8.type;
	    if (show === false) return false;
	    if (type === 'pie') return false;
	    return true;
	  });
	  if (series.length === 0) return [0, 0];
	  var index = axis.index,
	      axisType = axis.axis;
	  series = mergeStackData(series);
	  var axisName = axisType + 'Axis';
	  var valueSeries = series.filter(function (s) {
	    return s[axisName] === index;
	  });
	  if (!valueSeries.length) valueSeries = series;
	  return getSeriesMinMaxValue(valueSeries);
	}

	function getSeriesMinMaxValue(series) {
	  if (!series) return;
	  var minValue = Math.min.apply(Math, (0, _toConsumableArray2["default"])(series.map(function (_ref9) {
	    var data = _ref9.data;
	    return Math.min.apply(Math, (0, _toConsumableArray2["default"])((0, util$2.filterNonNumber)(data)));
	  })));
	  var maxValue = Math.max.apply(Math, (0, _toConsumableArray2["default"])(series.map(function (_ref10) {
	    var data = _ref10.data;
	    return Math.max.apply(Math, (0, _toConsumableArray2["default"])((0, util$2.filterNonNumber)(data)));
	  })));
	  return [minValue, maxValue];
	}

	function mergeStackData(series) {
	  var seriesCloned = (0, util.deepClone)(series, true);
	  series.forEach(function (item, i) {
	    var data = (0, util$2.mergeSameStackData)(item, series);
	    seriesCloned[i].data = data;
	  });
	  return seriesCloned;
	}

	function getTrueMinMax(_ref11, _ref12) {
	  var min = _ref11.min,
	      max = _ref11.max,
	      axis = _ref11.axis;

	  var _ref13 = (0, _slicedToArray2["default"])(_ref12, 2),
	      minValue = _ref13[0],
	      maxValue = _ref13[1];

	  var minType = (0, _typeof2["default"])(min),
	      maxType = (0, _typeof2["default"])(max);

	  if (!testMinMaxType(min)) {
	    min = axisConfig[axis + 'AxisConfig'].min;
	    minType = 'string';
	  }

	  if (!testMinMaxType(max)) {
	    max = axisConfig[axis + 'AxisConfig'].max;
	    maxType = 'string';
	  }

	  if (minType === 'string') {
	    min = parseInt(minValue - abs(minValue * parseFloat(min) / 100));
	    var lever = getValueLever(min);
	    min = parseFloat((min / lever - 0.1).toFixed(1)) * lever;
	  }

	  if (maxType === 'string') {
	    max = parseInt(maxValue + abs(maxValue * parseFloat(max) / 100));

	    var _lever = getValueLever(max);

	    max = parseFloat((max / _lever + 0.1).toFixed(1)) * _lever;
	  }

	  return [min, max];
	}

	function getValueLever(value) {
	  var valueString = abs(value).toString();
	  var valueLength = valueString.length;
	  var firstZeroIndex = valueString.replace(/0*$/g, '').indexOf('0');
	  var pow10Num = valueLength - 1;
	  if (firstZeroIndex !== -1) pow10Num -= firstZeroIndex;
	  return pow(10, pow10Num);
	}

	function testMinMaxType(val) {
	  var valType = (0, _typeof2["default"])(val);
	  var isValidString = valType === 'string' && /^\d+%$/.test(val);
	  var isValidNumber = valType === 'number';
	  return isValidString || isValidNumber;
	}

	function getValueAxisLabelFromZero(min, max, interval) {
	  var negative = [],
	      positive = [];
	  var currentNegative = 0,
	      currentPositive = 0;

	  do {
	    negative.push(currentNegative -= interval);
	  } while (currentNegative > min);

	  do {
	    positive.push(currentPositive += interval);
	  } while (currentPositive < max);

	  return [].concat((0, _toConsumableArray2["default"])(negative.reverse()), [0], (0, _toConsumableArray2["default"])(positive));
	}

	function getValueAxisLabelFromMin(min, max, interval) {
	  var label = [min],
	      currentValue = min;

	  do {
	    label.push(currentValue += interval);
	  } while (currentValue < max);

	  return label;
	}

	function getAfterFormatterLabel(label, formatter) {
	  if (!formatter) return label;
	  if (typeof formatter === 'string') label = label.map(function (l) {
	    return formatter.replace('{value}', l);
	  });
	  if (typeof formatter === 'function') label = label.map(function (value, index) {
	    return formatter({
	      value: value,
	      index: index
	    });
	  });
	  return label;
	}

	function calcLabelAxisLabelData(labelAxis) {
	  return labelAxis.map(function (axis) {
	    var data = axis.data,
	        formatter = axis.axisLabel.formatter;
	    return _objectSpread({}, axis, {
	      label: getAfterFormatterLabel(data, formatter)
	    });
	  });
	}

	function getValueInterval(min, max, axis) {
	  var interval = axis.interval,
	      minInterval = axis.minInterval,
	      maxInterval = axis.maxInterval,
	      splitNumber = axis.splitNumber,
	      axisType = axis.axis;
	  var config$$1 = axisConfig[axisType + 'AxisConfig'];
	  if (typeof interval !== 'number') interval = config$$1.interval;
	  if (typeof minInterval !== 'number') minInterval = config$$1.minInterval;
	  if (typeof maxInterval !== 'number') maxInterval = config$$1.maxInterval;
	  if (typeof splitNumber !== 'number') splitNumber = config$$1.splitNumber;
	  if (typeof interval === 'number') return interval;
	  var valueInterval = parseInt((max - min) / (splitNumber - 1));
	  if (valueInterval.toString().length > 1) valueInterval = parseInt(valueInterval.toString().replace(/\d$/, '0'));
	  if (valueInterval === 0) valueInterval = 1;
	  if (typeof minInterval === 'number' && valueInterval < minInterval) return minInterval;
	  if (typeof maxInterval === 'number' && valueInterval > maxInterval) return maxInterval;
	  return valueInterval;
	}

	function setAxisPosition(allAxis) {
	  var xAxis = allAxis.filter(function (_ref14) {
	    var axis = _ref14.axis;
	    return axis === 'x';
	  });
	  var yAxis = allAxis.filter(function (_ref15) {
	    var axis = _ref15.axis;
	    return axis === 'y';
	  });
	  if (xAxis[0] && !xAxis[0].position) xAxis[0].position = config.xAxisConfig.position;

	  if (xAxis[1] && !xAxis[1].position) {
	    xAxis[1].position = xAxis[0].position === 'bottom' ? 'top' : 'bottom';
	  }

	  if (yAxis[0] && !yAxis[0].position) yAxis[0].position = config.yAxisConfig.position;

	  if (yAxis[1] && !yAxis[1].position) {
	    yAxis[1].position = yAxis[0].position === 'left' ? 'right' : 'left';
	  }

	  return [].concat((0, _toConsumableArray2["default"])(xAxis), (0, _toConsumableArray2["default"])(yAxis));
	}

	function calcAxisLinePosition(allAxis, chart) {
	  var _chart$gridArea = chart.gridArea,
	      x = _chart$gridArea.x,
	      y = _chart$gridArea.y,
	      w = _chart$gridArea.w,
	      h = _chart$gridArea.h;
	  allAxis = allAxis.map(function (axis) {
	    var position = axis.position;
	    var linePosition = [];

	    if (position === 'left') {
	      linePosition = [[x, y], [x, y + h]].reverse();
	    } else if (position === 'right') {
	      linePosition = [[x + w, y], [x + w, y + h]].reverse();
	    } else if (position === 'top') {
	      linePosition = [[x, y], [x + w, y]];
	    } else if (position === 'bottom') {
	      linePosition = [[x, y + h], [x + w, y + h]];
	    }

	    return _objectSpread({}, axis, {
	      linePosition: linePosition
	    });
	  });
	  return allAxis;
	}

	function calcAxisTickPosition(allAxis, chart) {
	  return allAxis.map(function (axisItem) {
	    var axis = axisItem.axis,
	        linePosition = axisItem.linePosition,
	        position = axisItem.position,
	        label = axisItem.label,
	        boundaryGap = axisItem.boundaryGap;
	    if (typeof boundaryGap !== 'boolean') boundaryGap = axisConfig[axis + 'AxisConfig'].boundaryGap;
	    var labelNum = label.length;

	    var _linePosition = (0, _slicedToArray2["default"])(linePosition, 2),
	        _linePosition$ = (0, _slicedToArray2["default"])(_linePosition[0], 2),
	        startX = _linePosition$[0],
	        startY = _linePosition$[1],
	        _linePosition$2 = (0, _slicedToArray2["default"])(_linePosition[1], 2),
	        endX = _linePosition$2[0],
	        endY = _linePosition$2[1];

	    var gapLength = axis === 'x' ? endX - startX : endY - startY;
	    var gap = gapLength / (boundaryGap ? labelNum : labelNum - 1);
	    var tickPosition = new Array(labelNum).fill(0).map(function (foo, i) {
	      if (axis === 'x') {
	        return [startX + gap * (boundaryGap ? i + 0.5 : i), startY];
	      }

	      return [startX, startY + gap * (boundaryGap ? i + 0.5 : i)];
	    });
	    var tickLinePosition = getTickLinePosition(axis, boundaryGap, position, tickPosition, gap);
	    return _objectSpread({}, axisItem, {
	      tickPosition: tickPosition,
	      tickLinePosition: tickLinePosition,
	      tickGap: gap
	    });
	  });
	}

	function getTickLinePosition(axisType, boundaryGap, position, tickPosition, gap) {
	  var index = axisType === 'x' ? 1 : 0;
	  var plus = 5;
	  if (axisType === 'x' && position === 'top') plus = -5;
	  if (axisType === 'y' && position === 'left') plus = -5;
	  var tickLinePosition = tickPosition.map(function (lineStart) {
	    var lineEnd = (0, util.deepClone)(lineStart);
	    lineEnd[index] += plus;
	    return [(0, util.deepClone)(lineStart), lineEnd];
	  });
	  if (!boundaryGap) return tickLinePosition;
	  index = axisType === 'x' ? 0 : 1;
	  plus = gap / 2;
	  tickLinePosition.forEach(function (_ref16) {
	    var _ref17 = (0, _slicedToArray2["default"])(_ref16, 2),
	        lineStart = _ref17[0],
	        lineEnd = _ref17[1];

	    lineStart[index] += plus;
	    lineEnd[index] += plus;
	  });
	  return tickLinePosition;
	}

	function calcAxisNamePosition(allAxis, chart) {
	  return allAxis.map(function (axisItem) {
	    var nameGap = axisItem.nameGap,
	        nameLocation = axisItem.nameLocation,
	        position = axisItem.position,
	        linePosition = axisItem.linePosition;

	    var _linePosition2 = (0, _slicedToArray2["default"])(linePosition, 2),
	        lineStart = _linePosition2[0],
	        lineEnd = _linePosition2[1];

	    var namePosition = (0, _toConsumableArray2["default"])(lineStart);
	    if (nameLocation === 'end') namePosition = (0, _toConsumableArray2["default"])(lineEnd);

	    if (nameLocation === 'center') {
	      namePosition[0] = (lineStart[0] + lineEnd[0]) / 2;
	      namePosition[1] = (lineStart[1] + lineEnd[1]) / 2;
	    }

	    var index = 0;
	    if (position === 'top' && nameLocation === 'center') index = 1;
	    if (position === 'bottom' && nameLocation === 'center') index = 1;
	    if (position === 'left' && nameLocation !== 'center') index = 1;
	    if (position === 'right' && nameLocation !== 'center') index = 1;
	    var plus = nameGap;
	    if (position === 'top' && nameLocation !== 'end') plus *= -1;
	    if (position === 'left' && nameLocation !== 'start') plus *= -1;
	    if (position === 'bottom' && nameLocation === 'start') plus *= -1;
	    if (position === 'right' && nameLocation === 'end') plus *= -1;
	    namePosition[index] += plus;
	    return _objectSpread({}, axisItem, {
	      namePosition: namePosition
	    });
	  });
	}

	function calcSplitLinePosition(allAxis, chart) {
	  var _chart$gridArea2 = chart.gridArea,
	      w = _chart$gridArea2.w,
	      h = _chart$gridArea2.h;
	  return allAxis.map(function (axisItem) {
	    var tickLinePosition = axisItem.tickLinePosition,
	        position = axisItem.position,
	        boundaryGap = axisItem.boundaryGap;
	    var index = 0,
	        plus = w;
	    if (position === 'top' || position === 'bottom') index = 1;
	    if (position === 'top' || position === 'bottom') plus = h;
	    if (position === 'right' || position === 'bottom') plus *= -1;
	    var splitLinePosition = tickLinePosition.map(function (_ref18) {
	      var _ref19 = (0, _slicedToArray2["default"])(_ref18, 1),
	          startPoint = _ref19[0];

	      var endPoint = (0, _toConsumableArray2["default"])(startPoint);
	      endPoint[index] += plus;
	      return [(0, _toConsumableArray2["default"])(startPoint), endPoint];
	    });
	    if (!boundaryGap) splitLinePosition.shift();
	    return _objectSpread({}, axisItem, {
	      splitLinePosition: splitLinePosition
	    });
	  });
	}

	function getLineConfig(axisItem) {
	  var animationCurve = axisItem.animationCurve,
	      animationFrame = axisItem.animationFrame,
	      rLevel = axisItem.rLevel;
	  return [{
	    name: 'polyline',
	    index: rLevel,
	    visible: axisItem.axisLine.show,
	    animationCurve: animationCurve,
	    animationFrame: animationFrame,
	    shape: getLineShape(axisItem),
	    style: getLineStyle(axisItem)
	  }];
	}

	function getLineShape(axisItem) {
	  var linePosition = axisItem.linePosition;
	  return {
	    points: linePosition
	  };
	}

	function getLineStyle(axisItem) {
	  return axisItem.axisLine.style;
	}

	function getTickConfig(axisItem) {
	  var animationCurve = axisItem.animationCurve,
	      animationFrame = axisItem.animationFrame,
	      rLevel = axisItem.rLevel;
	  var shapes = getTickShapes(axisItem);
	  var style = getTickStyle(axisItem);
	  return shapes.map(function (shape) {
	    return {
	      name: 'polyline',
	      index: rLevel,
	      visible: axisItem.axisTick.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: shape,
	      style: style
	    };
	  });
	}

	function getTickShapes(axisItem) {
	  var tickLinePosition = axisItem.tickLinePosition;
	  return tickLinePosition.map(function (points) {
	    return {
	      points: points
	    };
	  });
	}

	function getTickStyle(axisItem) {
	  return axisItem.axisTick.style;
	}

	function getLabelConfig(axisItem) {
	  var animationCurve = axisItem.animationCurve,
	      animationFrame = axisItem.animationFrame,
	      rLevel = axisItem.rLevel;
	  var shapes = getLabelShapes(axisItem);
	  var styles = getLabelStyle(axisItem, shapes);
	  return shapes.map(function (shape, i) {
	    return {
	      name: 'text',
	      index: rLevel,
	      visible: axisItem.axisLabel.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: shape,
	      style: styles[i],
	      setGraphCenter: function setGraphCenter() {
	        return void 0;
	      }
	    };
	  });
	}

	function getLabelShapes(axisItem) {
	  var label = axisItem.label,
	      tickPosition = axisItem.tickPosition,
	      position = axisItem.position;
	  return tickPosition.map(function (point, i) {
	    return {
	      position: getLabelRealPosition(point, position),
	      content: label[i].toString()
	    };
	  });
	}

	function getLabelRealPosition(points, position) {
	  var index = 0,
	      plus = 10;
	  if (position === 'top' || position === 'bottom') index = 1;
	  if (position === 'top' || position === 'left') plus = -10;
	  points = (0, util.deepClone)(points);
	  points[index] += plus;
	  return points;
	}

	function getLabelStyle(axisItem, shapes) {
	  var position = axisItem.position;
	  var style = axisItem.axisLabel.style;
	  var align = getAxisLabelRealAlign(position);
	  style = (0, util$2.deepMerge)(align, style);
	  var styles = shapes.map(function (_ref20) {
	    var position = _ref20.position;
	    return _objectSpread({}, style, {
	      graphCenter: position
	    });
	  });
	  return styles;
	}

	function getAxisLabelRealAlign(position) {
	  if (position === 'left') return {
	    textAlign: 'right',
	    textBaseline: 'middle'
	  };
	  if (position === 'right') return {
	    textAlign: 'left',
	    textBaseline: 'middle'
	  };
	  if (position === 'top') return {
	    textAlign: 'center',
	    textBaseline: 'bottom'
	  };
	  if (position === 'bottom') return {
	    textAlign: 'center',
	    textBaseline: 'top'
	  };
	}

	function getNameConfig(axisItem) {
	  var animationCurve = axisItem.animationCurve,
	      animationFrame = axisItem.animationFrame,
	      rLevel = axisItem.rLevel;
	  return [{
	    name: 'text',
	    index: rLevel,
	    animationCurve: animationCurve,
	    animationFrame: animationFrame,
	    shape: getNameShape(axisItem),
	    style: getNameStyle(axisItem)
	  }];
	}

	function getNameShape(axisItem) {
	  var name = axisItem.name,
	      namePosition = axisItem.namePosition;
	  return {
	    content: name,
	    position: namePosition
	  };
	}

	function getNameStyle(axisItem) {
	  var nameLocation = axisItem.nameLocation,
	      position = axisItem.position,
	      style = axisItem.nameTextStyle;
	  var align = getNameRealAlign(position, nameLocation);
	  return (0, util$2.deepMerge)(align, style);
	}

	function getNameRealAlign(position, location) {
	  if (position === 'top' && location === 'start' || position === 'bottom' && location === 'start' || position === 'left' && location === 'center') return {
	    textAlign: 'right',
	    textBaseline: 'middle'
	  };
	  if (position === 'top' && location === 'end' || position === 'bottom' && location === 'end' || position === 'right' && location === 'center') return {
	    textAlign: 'left',
	    textBaseline: 'middle'
	  };
	  if (position === 'top' && location === 'center' || position === 'left' && location === 'end' || position === 'right' && location === 'end') return {
	    textAlign: 'center',
	    textBaseline: 'bottom'
	  };
	  if (position === 'bottom' && location === 'center' || position === 'left' && location === 'start' || position === 'right' && location === 'start') return {
	    textAlign: 'center',
	    textBaseline: 'top'
	  };
	}

	function getSplitLineConfig(axisItem) {
	  var animationCurve = axisItem.animationCurve,
	      animationFrame = axisItem.animationFrame,
	      rLevel = axisItem.rLevel;
	  var shapes = getSplitLineShapes(axisItem);
	  var style = getSplitLineStyle(axisItem);
	  return shapes.map(function (shape) {
	    return {
	      name: 'polyline',
	      index: rLevel,
	      visible: axisItem.splitLine.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: shape,
	      style: style
	    };
	  });
	}

	function getSplitLineShapes(axisItem) {
	  var splitLinePosition = axisItem.splitLinePosition;
	  return splitLinePosition.map(function (points) {
	    return {
	      points: points
	    };
	  });
	}

	function getSplitLineStyle(axisItem) {
	  return axisItem.splitLine.style;
	}
	});

	unwrapExports(axis_1$1);
	var axis_2$1 = axis_1$1.axis;

	var line_1$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.line = line;

	var _typeof2 = interopRequireDefault$1(_typeof_1);

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);

	var _defineProperty2 = interopRequireDefault$1(defineProperty$1);





	var _bezierCurve = interopRequireDefault$1(lib$1);



	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	var polylineToBezierCurve = _bezierCurve["default"].polylineToBezierCurve,
	    getBezierCurveLength = _bezierCurve["default"].getBezierCurveLength;

	function line(chart) {
	  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var xAxis = option.xAxis,
	      yAxis = option.yAxis,
	      series = option.series;
	  var lines = [];

	  if (xAxis && yAxis && series) {
	    lines = (0, util$2.initNeedSeries)(series, config.lineConfig, 'line');
	    lines = calcLinesPosition(lines, chart);
	  }

	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: lines,
	    key: 'lineArea',
	    getGraphConfig: getLineAreaConfig,
	    getStartGraphConfig: getStartLineAreaConfig,
	    beforeUpdate: beforeUpdateLineAndArea,
	    beforeChange: beforeChangeLineAndArea
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: lines,
	    key: 'line',
	    getGraphConfig: getLineConfig,
	    getStartGraphConfig: getStartLineConfig,
	    beforeUpdate: beforeUpdateLineAndArea,
	    beforeChange: beforeChangeLineAndArea
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: lines,
	    key: 'linePoint',
	    getGraphConfig: getPointConfig,
	    getStartGraphConfig: getStartPointConfig
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: lines,
	    key: 'lineLabel',
	    getGraphConfig: getLabelConfig
	  });
	}

	function calcLinesPosition(lines, chart) {
	  var axisData = chart.axisData;
	  return lines.map(function (lineItem) {
	    var lineData = (0, util$2.mergeSameStackData)(lineItem, lines);
	    lineData = mergeNonNumber(lineItem, lineData);
	    var lineAxis = getLineAxis(lineItem, axisData);
	    var linePosition = getLinePosition(lineData, lineAxis);
	    var lineFillBottomPos = getLineFillBottomPos(lineAxis);
	    return _objectSpread({}, lineItem, {
	      linePosition: linePosition.filter(function (p) {
	        return p;
	      }),
	      lineFillBottomPos: lineFillBottomPos
	    });
	  });
	}

	function mergeNonNumber(lineItem, lineData) {
	  var data = lineItem.data;
	  return lineData.map(function (v, i) {
	    return typeof data[i] === 'number' ? v : null;
	  });
	}

	function getLineAxis(line, axisData) {
	  var xAxisIndex = line.xAxisIndex,
	      yAxisIndex = line.yAxisIndex;
	  var xAxis = axisData.find(function (_ref) {
	    var axis = _ref.axis,
	        index = _ref.index;
	    return axis === 'x' && index === xAxisIndex;
	  });
	  var yAxis = axisData.find(function (_ref2) {
	    var axis = _ref2.axis,
	        index = _ref2.index;
	    return axis === 'y' && index === yAxisIndex;
	  });
	  return [xAxis, yAxis];
	}

	function getLinePosition(lineData, lineAxis) {
	  var valueAxisIndex = lineAxis.findIndex(function (_ref3) {
	    var data = _ref3.data;
	    return data === 'value';
	  });
	  var valueAxis = lineAxis[valueAxisIndex];
	  var labelAxis = lineAxis[1 - valueAxisIndex];
	  var linePosition = valueAxis.linePosition,
	      axis = valueAxis.axis;
	  var tickPosition = labelAxis.tickPosition;
	  var tickNum = tickPosition.length;
	  var valueAxisPosIndex = axis === 'x' ? 0 : 1;
	  var valueAxisStartPos = linePosition[0][valueAxisPosIndex];
	  var valueAxisEndPos = linePosition[1][valueAxisPosIndex];
	  var valueAxisPosMinus = valueAxisEndPos - valueAxisStartPos;
	  var maxValue = valueAxis.maxValue,
	      minValue = valueAxis.minValue;
	  var valueMinus = maxValue - minValue;
	  var position = new Array(tickNum).fill(0).map(function (foo, i) {
	    var v = lineData[i];
	    if (typeof v !== 'number') return null;
	    var valuePercent = (v - minValue) / valueMinus;
	    if (valueMinus === 0) valuePercent = 0;
	    return valuePercent * valueAxisPosMinus + valueAxisStartPos;
	  });
	  return position.map(function (vPos, i) {
	    if (i >= tickNum || typeof vPos !== 'number') return null;
	    var pos = [vPos, tickPosition[i][1 - valueAxisPosIndex]];
	    if (valueAxisPosIndex === 0) return pos;
	    pos.reverse();
	    return pos;
	  });
	}

	function getLineFillBottomPos(lineAxis) {
	  var valueAxis = lineAxis.find(function (_ref4) {
	    var data = _ref4.data;
	    return data === 'value';
	  });
	  var axis = valueAxis.axis,
	      linePosition = valueAxis.linePosition,
	      minValue = valueAxis.minValue,
	      maxValue = valueAxis.maxValue;
	  var changeIndex = axis === 'x' ? 0 : 1;
	  var changeValue = linePosition[0][changeIndex];

	  if (minValue < 0 && maxValue > 0) {
	    var valueMinus = maxValue - minValue;
	    var posMinus = Math.abs(linePosition[0][changeIndex] - linePosition[1][changeIndex]);
	    var offset = Math.abs(minValue) / valueMinus * posMinus;
	    if (axis === 'y') offset *= -1;
	    changeValue += offset;
	  }

	  return {
	    changeIndex: changeIndex,
	    changeValue: changeValue
	  };
	}

	function getLineAreaConfig(lineItem) {
	  var animationCurve = lineItem.animationCurve,
	      animationFrame = lineItem.animationFrame,
	      lineFillBottomPos = lineItem.lineFillBottomPos,
	      rLevel = lineItem.rLevel;
	  return [{
	    name: getLineGraphName(lineItem),
	    index: rLevel,
	    animationCurve: animationCurve,
	    animationFrame: animationFrame,
	    visible: lineItem.lineArea.show,
	    lineFillBottomPos: lineFillBottomPos,
	    shape: getLineAndAreaShape(lineItem),
	    style: getLineAreaStyle(lineItem),
	    drawed: lineAreaDrawed
	  }];
	}

	function getLineAndAreaShape(lineItem) {
	  var linePosition = lineItem.linePosition;
	  return {
	    points: linePosition
	  };
	}

	function getLineAreaStyle(lineItem) {
	  var lineArea = lineItem.lineArea,
	      color = lineItem.color;
	  var gradient = lineArea.gradient,
	      style = lineArea.style;
	  var fillColor = [style.fill || color];
	  var gradientColor = (0, util$2.deepMerge)(fillColor, gradient);
	  if (gradientColor.length === 1) gradientColor.push(gradientColor[0]);
	  var gradientParams = getGradientParams(lineItem);
	  style = _objectSpread({}, style, {
	    stroke: 'rgba(0, 0, 0, 0)'
	  });
	  return (0, util$2.deepMerge)({
	    gradientColor: gradientColor,
	    gradientParams: gradientParams,
	    gradientType: 'linear',
	    gradientWith: 'fill'
	  }, style);
	}

	function getGradientParams(lineItem) {
	  var lineFillBottomPos = lineItem.lineFillBottomPos,
	      linePosition = lineItem.linePosition;
	  var changeIndex = lineFillBottomPos.changeIndex,
	      changeValue = lineFillBottomPos.changeValue;
	  var mainPos = linePosition.map(function (p) {
	    return p[changeIndex];
	  });
	  var maxPos = Math.max.apply(Math, (0, _toConsumableArray2["default"])(mainPos));
	  var minPos = Math.min.apply(Math, (0, _toConsumableArray2["default"])(mainPos));
	  var beginPos = maxPos;
	  if (changeIndex === 1) beginPos = minPos;

	  if (changeIndex === 1) {
	    return [0, beginPos, 0, changeValue];
	  } else {
	    return [beginPos, 0, changeValue, 0];
	  }
	}

	function lineAreaDrawed(_ref5, _ref6) {
	  var lineFillBottomPos = _ref5.lineFillBottomPos,
	      shape = _ref5.shape;
	  var ctx = _ref6.ctx;
	  var points = shape.points;
	  var changeIndex = lineFillBottomPos.changeIndex,
	      changeValue = lineFillBottomPos.changeValue;
	  var linePoint1 = (0, _toConsumableArray2["default"])(points[points.length - 1]);
	  var linePoint2 = (0, _toConsumableArray2["default"])(points[0]);
	  linePoint1[changeIndex] = changeValue;
	  linePoint2[changeIndex] = changeValue;
	  ctx.lineTo.apply(ctx, (0, _toConsumableArray2["default"])(linePoint1));
	  ctx.lineTo.apply(ctx, (0, _toConsumableArray2["default"])(linePoint2));
	  ctx.closePath();
	  ctx.fill();
	}

	function getStartLineAreaConfig(lineItem) {
	  var config$$1 = getLineAreaConfig(lineItem)[0];

	  var style = _objectSpread({}, config$$1.style);

	  style.opacity = 0;
	  config$$1.style = style;
	  return [config$$1];
	}

	function beforeUpdateLineAndArea(graphs, lineItem, i, updater) {
	  var cache = graphs[i];
	  if (!cache) return;
	  var currentName = getLineGraphName(lineItem);
	  var render = updater.chart.render;
	  var name = cache[0].name;
	  var delAll = currentName !== name;
	  if (!delAll) return;
	  cache.forEach(function (g) {
	    return render.delGraph(g);
	  });
	  graphs[i] = null;
	}

	function beforeChangeLineAndArea(graph, config$$1) {
	  var points = config$$1.shape.points;
	  var graphPoints = graph.shape.points;
	  var graphPointsNum = graphPoints.length;
	  var pointsNum = points.length;

	  if (pointsNum > graphPointsNum) {
	    var lastPoint = graphPoints.slice(-1)[0];
	    var newAddPoints = new Array(pointsNum - graphPointsNum).fill(0).map(function (foo) {
	      return (0, _toConsumableArray2["default"])(lastPoint);
	    });
	    graphPoints.push.apply(graphPoints, (0, _toConsumableArray2["default"])(newAddPoints));
	  } else if (pointsNum < graphPointsNum) {
	    graphPoints.splice(pointsNum);
	  }
	}

	function getLineConfig(lineItem) {
	  var animationCurve = lineItem.animationCurve,
	      animationFrame = lineItem.animationFrame,
	      rLevel = lineItem.rLevel;
	  return [{
	    name: getLineGraphName(lineItem),
	    index: rLevel + 1,
	    animationCurve: animationCurve,
	    animationFrame: animationFrame,
	    shape: getLineAndAreaShape(lineItem),
	    style: getLineStyle(lineItem)
	  }];
	}

	function getLineGraphName(lineItem) {
	  var smooth = lineItem.smooth;
	  return smooth ? 'smoothline' : 'polyline';
	}

	function getLineStyle(lineItem) {
	  var lineStyle = lineItem.lineStyle,
	      color = lineItem.color,
	      smooth = lineItem.smooth,
	      linePosition = lineItem.linePosition;
	  var lineLength = getLineLength(linePosition, smooth);
	  return (0, util$2.deepMerge)({
	    stroke: color,
	    lineDash: [lineLength, 0]
	  }, lineStyle);
	}

	function getLineLength(points) {
	  var smooth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  if (!smooth) return (0, util$2.getPolylineLength)(points);
	  var curve = polylineToBezierCurve(points);
	  return getBezierCurveLength(curve);
	}

	function getStartLineConfig(lineItem) {
	  var lineDash = lineItem.lineStyle.lineDash;
	  var config$$1 = getLineConfig(lineItem)[0];
	  var realLineDash = config$$1.style.lineDash;

	  if (lineDash) {
	    realLineDash = [0, 0];
	  } else {
	    realLineDash = (0, _toConsumableArray2["default"])(realLineDash).reverse();
	  }

	  config$$1.style.lineDash = realLineDash;
	  return [config$$1];
	}

	function getPointConfig(lineItem) {
	  var animationCurve = lineItem.animationCurve,
	      animationFrame = lineItem.animationFrame,
	      rLevel = lineItem.rLevel;
	  var shapes = getPointShapes(lineItem);
	  var style = getPointStyle(lineItem);
	  return shapes.map(function (shape) {
	    return {
	      name: 'circle',
	      index: rLevel + 2,
	      visible: lineItem.linePoint.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: shape,
	      style: style
	    };
	  });
	}

	function getPointShapes(lineItem) {
	  var linePosition = lineItem.linePosition,
	      radius = lineItem.linePoint.radius;
	  return linePosition.map(function (_ref7) {
	    var _ref8 = (0, _slicedToArray2["default"])(_ref7, 2),
	        rx = _ref8[0],
	        ry = _ref8[1];

	    return {
	      r: radius,
	      rx: rx,
	      ry: ry
	    };
	  });
	}

	function getPointStyle(lineItem) {
	  var color = lineItem.color,
	      style = lineItem.linePoint.style;
	  return (0, util$2.deepMerge)({
	    stroke: color
	  }, style);
	}

	function getStartPointConfig(lineItem) {
	  var configs = getPointConfig(lineItem);
	  configs.forEach(function (config$$1) {
	    config$$1.shape.r = 0.1;
	  });
	  return configs;
	}

	function getLabelConfig(lineItem) {
	  var animationCurve = lineItem.animationCurve,
	      animationFrame = lineItem.animationFrame,
	      rLevel = lineItem.rLevel;
	  var shapes = getLabelShapes(lineItem);
	  var style = getLabelStyle(lineItem);
	  return shapes.map(function (shape, i) {
	    return {
	      name: 'text',
	      index: rLevel + 3,
	      visible: lineItem.label.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: shape,
	      style: style
	    };
	  });
	}

	function getLabelShapes(lineItem) {
	  var contents = formatterLabel(lineItem);
	  var position = getLabelPosition(lineItem);
	  return contents.map(function (content, i) {
	    return {
	      content: content,
	      position: position[i]
	    };
	  });
	}

	function getLabelPosition(lineItem) {
	  var linePosition = lineItem.linePosition,
	      lineFillBottomPos = lineItem.lineFillBottomPos,
	      label = lineItem.label;
	  var position = label.position,
	      offset = label.offset;
	  var changeIndex = lineFillBottomPos.changeIndex,
	      changeValue = lineFillBottomPos.changeValue;
	  return linePosition.map(function (pos) {
	    if (position === 'bottom') {
	      pos = (0, _toConsumableArray2["default"])(pos);
	      pos[changeIndex] = changeValue;
	    }

	    if (position === 'center') {
	      var bottom = (0, _toConsumableArray2["default"])(pos);
	      bottom[changeIndex] = changeValue;
	      pos = getCenterLabelPoint(pos, bottom);
	    }

	    return getOffsetedPoint(pos, offset);
	  });
	}

	function getOffsetedPoint(_ref9, _ref10) {
	  var _ref11 = (0, _slicedToArray2["default"])(_ref9, 2),
	      x = _ref11[0],
	      y = _ref11[1];

	  var _ref12 = (0, _slicedToArray2["default"])(_ref10, 2),
	      ox = _ref12[0],
	      oy = _ref12[1];

	  return [x + ox, y + oy];
	}

	function getCenterLabelPoint(_ref13, _ref14) {
	  var _ref15 = (0, _slicedToArray2["default"])(_ref13, 2),
	      ax = _ref15[0],
	      ay = _ref15[1];

	  var _ref16 = (0, _slicedToArray2["default"])(_ref14, 2),
	      bx = _ref16[0],
	      by = _ref16[1];

	  return [(ax + bx) / 2, (ay + by) / 2];
	}

	function formatterLabel(lineItem) {
	  var data = lineItem.data,
	      formatter = lineItem.label.formatter;
	  data = data.filter(function (d) {
	    return typeof d === 'number';
	  }).map(function (d) {
	    return d.toString();
	  });
	  if (!formatter) return data;
	  var type = (0, _typeof2["default"])(formatter);
	  if (type === 'string') return data.map(function (d) {
	    return formatter.replace('{value}', d);
	  });
	  if (type === 'function') return data.map(function (value, index) {
	    return formatter({
	      value: value,
	      index: index
	    });
	  });
	  return data;
	}

	function getLabelStyle(lineItem) {
	  var color = lineItem.color,
	      style = lineItem.label.style;
	  return (0, util$2.deepMerge)({
	    fill: color
	  }, style);
	}
	});

	unwrapExports(line_1$1);
	var line_2 = line_1$1.line;

	var bar_1$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bar = bar;

	var _typeof2 = interopRequireDefault$1(_typeof_1);

	var _defineProperty2 = interopRequireDefault$1(defineProperty$1);

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);









	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function bar(chart) {
	  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var xAxis = option.xAxis,
	      yAxis = option.yAxis,
	      series = option.series;
	  var bars = [];

	  if (xAxis && yAxis && series) {
	    bars = (0, util$2.initNeedSeries)(series, config.barConfig, 'bar');
	    bars = setBarAxis(bars, chart);
	    bars = setBarPositionData(bars, chart);
	    bars = calcBarsPosition(bars, chart);
	  }

	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: bars.slice(-1),
	    key: 'backgroundBar',
	    getGraphConfig: getBackgroundBarConfig
	  });
	  bars.reverse();
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: bars,
	    key: 'bar',
	    getGraphConfig: getBarConfig,
	    getStartGraphConfig: getStartBarConfig,
	    beforeUpdate: beforeUpdateBar
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: bars,
	    key: 'barLabel',
	    getGraphConfig: getLabelConfig
	  });
	}

	function setBarAxis(bars, chart) {
	  var axisData = chart.axisData;
	  bars.forEach(function (bar) {
	    var xAxisIndex = bar.xAxisIndex,
	        yAxisIndex = bar.yAxisIndex;
	    if (typeof xAxisIndex !== 'number') xAxisIndex = 0;
	    if (typeof yAxisIndex !== 'number') yAxisIndex = 0;
	    var xAxis = axisData.find(function (_ref) {
	      var axis = _ref.axis,
	          index = _ref.index;
	      return "".concat(axis).concat(index) === "x".concat(xAxisIndex);
	    });
	    var yAxis = axisData.find(function (_ref2) {
	      var axis = _ref2.axis,
	          index = _ref2.index;
	      return "".concat(axis).concat(index) === "y".concat(yAxisIndex);
	    });
	    var axis = [xAxis, yAxis];
	    var valueAxisIndex = axis.findIndex(function (_ref3) {
	      var data = _ref3.data;
	      return data === 'value';
	    });
	    bar.valueAxis = axis[valueAxisIndex];
	    bar.labelAxis = axis[1 - valueAxisIndex];
	  });
	  return bars;
	}

	function setBarPositionData(bars, chart) {
	  var labelBarGroup = groupBarByLabelAxis(bars);
	  labelBarGroup.forEach(function (group) {
	    setBarIndex(group);
	    setBarNum(group);
	    setBarCategoryWidth(group, chart);
	    setBarWidthAndGap(group);
	    setBarAllWidthAndGap(group);
	  });
	  return bars;
	}

	function setBarIndex(bars) {
	  var stacks = getBarStack(bars);
	  stacks = stacks.map(function (stack) {
	    return {
	      stack: stack,
	      index: -1
	    };
	  });
	  var currentIndex = 0;
	  bars.forEach(function (bar) {
	    var stack = bar.stack;

	    if (!stack) {
	      bar.barIndex = currentIndex;
	      currentIndex++;
	    } else {
	      var stackData = stacks.find(function (_ref4) {
	        var s = _ref4.stack;
	        return s === stack;
	      });

	      if (stackData.index === -1) {
	        stackData.index = currentIndex;
	        currentIndex++;
	      }

	      bar.barIndex = stackData.index;
	    }
	  });
	}

	function groupBarByLabelAxis(bars) {
	  var labelAxis = bars.map(function (_ref5) {
	    var _ref5$labelAxis = _ref5.labelAxis,
	        axis = _ref5$labelAxis.axis,
	        index = _ref5$labelAxis.index;
	    return axis + index;
	  });
	  labelAxis = (0, _toConsumableArray2["default"])(new Set(labelAxis));
	  return labelAxis.map(function (axisIndex) {
	    return bars.filter(function (_ref6) {
	      var _ref6$labelAxis = _ref6.labelAxis,
	          axis = _ref6$labelAxis.axis,
	          index = _ref6$labelAxis.index;
	      return axis + index === axisIndex;
	    });
	  });
	}

	function getBarStack(bars) {
	  var stacks = [];
	  bars.forEach(function (_ref7) {
	    var stack = _ref7.stack;
	    if (stack) stacks.push(stack);
	  });
	  return (0, _toConsumableArray2["default"])(new Set(stacks));
	}

	function setBarNum(bars) {
	  var barNum = (0, _toConsumableArray2["default"])(new Set(bars.map(function (_ref8) {
	    var barIndex = _ref8.barIndex;
	    return barIndex;
	  }))).length;
	  bars.forEach(function (bar) {
	    return bar.barNum = barNum;
	  });
	}

	function setBarCategoryWidth(bars) {
	  var lastBar = bars.slice(-1)[0];
	  var barCategoryGap = lastBar.barCategoryGap,
	      tickGap = lastBar.labelAxis.tickGap;
	  var barCategoryWidth = 0;

	  if (typeof barCategoryGap === 'number') {
	    barCategoryWidth = barCategoryGap;
	  } else {
	    barCategoryWidth = (1 - parseInt(barCategoryGap) / 100) * tickGap;
	  }

	  bars.forEach(function (bar) {
	    return bar.barCategoryWidth = barCategoryWidth;
	  });
	}

	function setBarWidthAndGap(bars) {
	  var _bars$slice$ = bars.slice(-1)[0],
	      barCategoryWidth = _bars$slice$.barCategoryWidth,
	      barWidth = _bars$slice$.barWidth,
	      barGap = _bars$slice$.barGap,
	      barNum = _bars$slice$.barNum;
	  var widthAndGap = [];

	  if (typeof barWidth === 'number' || barWidth !== 'auto') {
	    widthAndGap = getBarWidthAndGapWithPercentOrNumber(barCategoryWidth, barWidth, barGap, barNum);
	  } else if (barWidth === 'auto') {
	    widthAndGap = getBarWidthAndGapWidthAuto(barCategoryWidth, barWidth, barGap, barNum);
	  }

	  var _widthAndGap = widthAndGap,
	      _widthAndGap2 = (0, _slicedToArray2["default"])(_widthAndGap, 2),
	      width = _widthAndGap2[0],
	      gap = _widthAndGap2[1];

	  bars.forEach(function (bar) {
	    bar.barWidth = width;
	    bar.barGap = gap;
	  });
	}

	function getBarWidthAndGapWithPercentOrNumber(barCategoryWidth, barWidth, barGap) {
	  var width = 0,
	      gap = 0;

	  if (typeof barWidth === 'number') {
	    width = barWidth;
	  } else {
	    width = parseInt(barWidth) / 100 * barCategoryWidth;
	  }

	  if (typeof barGap === 'number') {
	    gap = barGap;
	  } else {
	    gap = parseInt(barGap) / 100 * width;
	  }

	  return [width, gap];
	}

	function getBarWidthAndGapWidthAuto(barCategoryWidth, barWidth, barGap, barNum) {
	  var width = 0,
	      gap = 0;
	  var barItemWidth = barCategoryWidth / barNum;

	  if (typeof barGap === 'number') {
	    gap = barGap;
	    width = barItemWidth - gap;
	  } else {
	    var percent = 10 + parseInt(barGap) / 10;

	    if (percent === 0) {
	      width = barItemWidth * 2;
	      gap = -width;
	    } else {
	      width = barItemWidth / percent * 10;
	      gap = barItemWidth - width;
	    }
	  }

	  return [width, gap];
	}

	function setBarAllWidthAndGap(bars) {
	  var _bars$slice$2 = bars.slice(-1)[0],
	      barGap = _bars$slice$2.barGap,
	      barWidth = _bars$slice$2.barWidth,
	      barNum = _bars$slice$2.barNum;
	  var barAllWidthAndGap = (barGap + barWidth) * barNum - barGap;
	  bars.forEach(function (bar) {
	    return bar.barAllWidthAndGap = barAllWidthAndGap;
	  });
	}

	function calcBarsPosition(bars, chart) {
	  bars = calcBarValueAxisCoordinate(bars);
	  bars = calcBarLabelAxisCoordinate(bars);
	  bars = eliminateNullBarLabelAxis(bars);
	  bars = keepSameNumBetweenBarAndData(bars);
	  return bars;
	}

	function calcBarLabelAxisCoordinate(bars) {
	  return bars.map(function (bar) {
	    var labelAxis = bar.labelAxis,
	        barAllWidthAndGap = bar.barAllWidthAndGap,
	        barGap = bar.barGap,
	        barWidth = bar.barWidth,
	        barIndex = bar.barIndex;
	    var tickGap = labelAxis.tickGap,
	        tickPosition = labelAxis.tickPosition,
	        axis = labelAxis.axis;
	    var coordinateIndex = axis === 'x' ? 0 : 1;
	    var barLabelAxisPos = tickPosition.map(function (tick, i) {
	      var barCategoryStartPos = tickPosition[i][coordinateIndex] - tickGap / 2;
	      var barItemsStartPos = barCategoryStartPos + (tickGap - barAllWidthAndGap) / 2;
	      return barItemsStartPos + (barIndex + 0.5) * barWidth + barIndex * barGap;
	    });
	    return _objectSpread({}, bar, {
	      barLabelAxisPos: barLabelAxisPos
	    });
	  });
	}

	function calcBarValueAxisCoordinate(bars) {
	  return bars.map(function (bar) {
	    var data = (0, util$2.mergeSameStackData)(bar, bars);
	    data = eliminateNonNumberData(bar, data);
	    var _bar$valueAxis = bar.valueAxis,
	        axis = _bar$valueAxis.axis,
	        minValue = _bar$valueAxis.minValue,
	        maxValue = _bar$valueAxis.maxValue,
	        linePosition = _bar$valueAxis.linePosition;
	    var startPos = getValuePos(minValue, maxValue, minValue < 0 ? 0 : minValue, linePosition, axis);
	    var endPos = data.map(function (v) {
	      return getValuePos(minValue, maxValue, v, linePosition, axis);
	    });
	    var barValueAxisPos = endPos.map(function (p) {
	      return [startPos, p];
	    });
	    return _objectSpread({}, bar, {
	      barValueAxisPos: barValueAxisPos
	    });
	  });
	}

	function eliminateNonNumberData(barItem, barData) {
	  var data = barItem.data;
	  return barData.map(function (v, i) {
	    return typeof data[i] === 'number' ? v : null;
	  }).filter(function (d) {
	    return d !== null;
	  });
	}

	function eliminateNullBarLabelAxis(bars) {
	  return bars.map(function (bar) {
	    var barLabelAxisPos = bar.barLabelAxisPos,
	        data = bar.data;
	    data.forEach(function (d, i) {
	      if (typeof d === 'number') return;
	      barLabelAxisPos[i] = null;
	    });
	    return _objectSpread({}, bar, {
	      barLabelAxisPos: barLabelAxisPos.filter(function (p) {
	        return p !== null;
	      })
	    });
	  });
	}

	function keepSameNumBetweenBarAndData(bars) {
	  bars.forEach(function (bar) {
	    var data = bar.data,
	        barLabelAxisPos = bar.barLabelAxisPos,
	        barValueAxisPos = bar.barValueAxisPos;
	    var dataNum = data.filter(function (d) {
	      return typeof d === 'number';
	    }).length;
	    var axisPosNum = barLabelAxisPos.length;

	    if (axisPosNum > dataNum) {
	      barLabelAxisPos.splice(dataNum);
	      barValueAxisPos.splice(dataNum);
	    }
	  });
	  return bars;
	}

	function getValuePos(min, max, value, linePosition, axis) {
	  if (typeof value !== 'number') return null;
	  var valueMinus = max - min;
	  var coordinateIndex = axis === 'x' ? 0 : 1;
	  var posMinus = linePosition[1][coordinateIndex] - linePosition[0][coordinateIndex];
	  var percent = (value - min) / valueMinus;
	  if (valueMinus === 0) percent = 0;
	  var pos = percent * posMinus;
	  return pos + linePosition[0][coordinateIndex];
	}

	function getBackgroundBarConfig(barItem) {
	  var animationCurve = barItem.animationCurve,
	      animationFrame = barItem.animationFrame,
	      rLevel = barItem.rLevel;
	  var shapes = getBackgroundBarShapes(barItem);
	  var style = getBackgroundBarStyle(barItem);
	  return shapes.map(function (shape) {
	    return {
	      name: 'rect',
	      index: rLevel,
	      visible: barItem.backgroundBar.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: shape,
	      style: style
	    };
	  });
	}

	function getBackgroundBarShapes(barItem) {
	  var labelAxis = barItem.labelAxis,
	      valueAxis = barItem.valueAxis;
	  var tickPosition = labelAxis.tickPosition;
	  var axis = valueAxis.axis,
	      linePosition = valueAxis.linePosition;
	  var width = getBackgroundBarWidth(barItem);
	  var haltWidth = width / 2;
	  var posIndex = axis === 'x' ? 0 : 1;
	  var centerPos = tickPosition.map(function (p) {
	    return p[1 - posIndex];
	  });
	  var _ref9 = [linePosition[0][posIndex], linePosition[1][posIndex]],
	      start = _ref9[0],
	      end = _ref9[1];
	  return centerPos.map(function (center) {
	    if (axis === 'x') {
	      return {
	        x: start,
	        y: center - haltWidth,
	        w: end - start,
	        h: width
	      };
	    } else {
	      return {
	        x: center - haltWidth,
	        y: end,
	        w: width,
	        h: start - end
	      };
	    }
	  });
	}

	function getBackgroundBarWidth(barItem) {
	  var barAllWidthAndGap = barItem.barAllWidthAndGap,
	      barCategoryWidth = barItem.barCategoryWidth,
	      backgroundBar = barItem.backgroundBar;
	  var width = backgroundBar.width;
	  if (typeof width === 'number') return width;
	  if (width === 'auto') return barAllWidthAndGap;
	  return parseInt(width) / 100 * barCategoryWidth;
	}

	function getBackgroundBarStyle(barItem) {
	  return barItem.backgroundBar.style;
	}

	function getBarConfig(barItem) {
	  var barLabelAxisPos = barItem.barLabelAxisPos,
	      animationCurve = barItem.animationCurve,
	      animationFrame = barItem.animationFrame,
	      rLevel = barItem.rLevel;
	  var name = getBarName(barItem);
	  return barLabelAxisPos.map(function (foo, i) {
	    return {
	      name: name,
	      index: rLevel,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getBarShape(barItem, i),
	      style: getBarStyle(barItem, i)
	    };
	  });
	}

	function getBarName(barItem) {
	  var shapeType = barItem.shapeType;
	  if (shapeType === 'leftEchelon' || shapeType === 'rightEchelon') return 'polyline';
	  return 'rect';
	}

	function getBarShape(barItem, i) {
	  var shapeType = barItem.shapeType;

	  if (shapeType === 'leftEchelon') {
	    return getLeftEchelonShape(barItem, i);
	  } else if (shapeType === 'rightEchelon') {
	    return getRightEchelonShape(barItem, i);
	  } else {
	    return getNormalBarShape(barItem, i);
	  }
	}

	function getLeftEchelonShape(barItem, i) {
	  var barValueAxisPos = barItem.barValueAxisPos,
	      barLabelAxisPos = barItem.barLabelAxisPos,
	      barWidth = barItem.barWidth,
	      echelonOffset = barItem.echelonOffset;

	  var _barValueAxisPos$i = (0, _slicedToArray2["default"])(barValueAxisPos[i], 2),
	      start = _barValueAxisPos$i[0],
	      end = _barValueAxisPos$i[1];

	  var labelAxisPos = barLabelAxisPos[i];
	  var halfWidth = barWidth / 2;
	  var valueAxis = barItem.valueAxis.axis;
	  var points = [];

	  if (valueAxis === 'x') {
	    points[0] = [end, labelAxisPos - halfWidth];
	    points[1] = [end, labelAxisPos + halfWidth];
	    points[2] = [start, labelAxisPos + halfWidth];
	    points[3] = [start + echelonOffset, labelAxisPos - halfWidth];
	    if (end - start < echelonOffset) points.splice(3, 1);
	  } else {
	    points[0] = [labelAxisPos - halfWidth, end];
	    points[1] = [labelAxisPos + halfWidth, end];
	    points[2] = [labelAxisPos + halfWidth, start];
	    points[3] = [labelAxisPos - halfWidth, start - echelonOffset];
	    if (start - end < echelonOffset) points.splice(3, 1);
	  }

	  return {
	    points: points,
	    close: true
	  };
	}

	function getRightEchelonShape(barItem, i) {
	  var barValueAxisPos = barItem.barValueAxisPos,
	      barLabelAxisPos = barItem.barLabelAxisPos,
	      barWidth = barItem.barWidth,
	      echelonOffset = barItem.echelonOffset;

	  var _barValueAxisPos$i2 = (0, _slicedToArray2["default"])(barValueAxisPos[i], 2),
	      start = _barValueAxisPos$i2[0],
	      end = _barValueAxisPos$i2[1];

	  var labelAxisPos = barLabelAxisPos[i];
	  var halfWidth = barWidth / 2;
	  var valueAxis = barItem.valueAxis.axis;
	  var points = [];

	  if (valueAxis === 'x') {
	    points[0] = [end, labelAxisPos + halfWidth];
	    points[1] = [end, labelAxisPos - halfWidth];
	    points[2] = [start, labelAxisPos - halfWidth];
	    points[3] = [start + echelonOffset, labelAxisPos + halfWidth];
	    if (end - start < echelonOffset) points.splice(2, 1);
	  } else {
	    points[0] = [labelAxisPos + halfWidth, end];
	    points[1] = [labelAxisPos - halfWidth, end];
	    points[2] = [labelAxisPos - halfWidth, start];
	    points[3] = [labelAxisPos + halfWidth, start - echelonOffset];
	    if (start - end < echelonOffset) points.splice(2, 1);
	  }

	  return {
	    points: points,
	    close: true
	  };
	}

	function getNormalBarShape(barItem, i) {
	  var barValueAxisPos = barItem.barValueAxisPos,
	      barLabelAxisPos = barItem.barLabelAxisPos,
	      barWidth = barItem.barWidth;

	  var _barValueAxisPos$i3 = (0, _slicedToArray2["default"])(barValueAxisPos[i], 2),
	      start = _barValueAxisPos$i3[0],
	      end = _barValueAxisPos$i3[1];

	  var labelAxisPos = barLabelAxisPos[i];
	  var valueAxis = barItem.valueAxis.axis;
	  var shape = {};

	  if (valueAxis === 'x') {
	    shape.x = start;
	    shape.y = labelAxisPos - barWidth / 2;
	    shape.w = end - start;
	    shape.h = barWidth;
	  } else {
	    shape.x = labelAxisPos - barWidth / 2;
	    shape.y = end;
	    shape.w = barWidth;
	    shape.h = start - end;
	  }

	  return shape;
	}

	function getBarStyle(barItem, i) {
	  var barStyle = barItem.barStyle,
	      gradient = barItem.gradient,
	      color = barItem.color;
	  var fillColor = [barStyle.fill || color];
	  var gradientColor = (0, util$2.deepMerge)(fillColor, gradient.color);
	  if (gradientColor.length === 1) gradientColor.push(gradientColor[0]);
	  var gradientParams = getGradientParams(barItem, i);
	  return (0, util$2.deepMerge)({
	    gradientColor: gradientColor,
	    gradientParams: gradientParams,
	    gradientType: 'linear',
	    gradientWith: 'fill'
	  }, barStyle);
	}

	function getGradientParams(barItem, i) {
	  var barValueAxisPos = barItem.barValueAxisPos,
	      barLabelAxisPos = barItem.barLabelAxisPos,
	      data = barItem.data;
	  var _barItem$valueAxis = barItem.valueAxis,
	      linePosition = _barItem$valueAxis.linePosition,
	      axis = _barItem$valueAxis.axis;

	  var _barValueAxisPos$i4 = (0, _slicedToArray2["default"])(barValueAxisPos[i], 2),
	      start = _barValueAxisPos$i4[0],
	      end = _barValueAxisPos$i4[1];

	  var labelAxisPos = barLabelAxisPos[i];
	  var value = data[i];

	  var _linePosition = (0, _slicedToArray2["default"])(linePosition, 2),
	      lineStart = _linePosition[0],
	      lineEnd = _linePosition[1];

	  var valueAxisIndex = axis === 'x' ? 0 : 1;
	  var endPos = end;

	  if (!barItem.gradient.local) {
	    endPos = value < 0 ? lineStart[valueAxisIndex] : lineEnd[valueAxisIndex];
	  }

	  if (axis === 'y') {
	    return [labelAxisPos, endPos, labelAxisPos, start];
	  } else {
	    return [endPos, labelAxisPos, start, labelAxisPos];
	  }
	}

	function getStartBarConfig(barItem) {
	  var configs = getBarConfig(barItem);
	  var shapeType = barItem.shapeType;
	  configs.forEach(function (config$$1) {
	    var shape = config$$1.shape;

	    if (shapeType === 'leftEchelon') {
	      shape = getStartLeftEchelonShape(shape, barItem);
	    } else if (shapeType === 'rightEchelon') {
	      shape = getStartRightEchelonShape(shape, barItem);
	    } else {
	      shape = getStartNormalBarShape(shape, barItem);
	    }

	    config$$1.shape = shape;
	  });
	  return configs;
	}

	function getStartLeftEchelonShape(shape, barItem) {
	  var axis = barItem.valueAxis.axis;
	  shape = (0, util.deepClone)(shape);
	  var _shape = shape,
	      points = _shape.points;
	  var index = axis === 'x' ? 0 : 1;
	  var start = points[2][index];
	  points.forEach(function (point) {
	    return point[index] = start;
	  });
	  return shape;
	}

	function getStartRightEchelonShape(shape, barItem) {
	  var axis = barItem.valueAxis.axis;
	  shape = (0, util.deepClone)(shape);
	  var _shape2 = shape,
	      points = _shape2.points;
	  var index = axis === 'x' ? 0 : 1;
	  var start = points[2][index];
	  points.forEach(function (point) {
	    return point[index] = start;
	  });
	  return shape;
	}

	function getStartNormalBarShape(shape, barItem) {
	  var axis = barItem.valueAxis.axis;
	  var x = shape.x,
	      y = shape.y,
	      w = shape.w,
	      h = shape.h;

	  if (axis === 'x') {
	    w = 0;
	  } else {
	    y = y + h;
	    h = 0;
	  }

	  return {
	    x: x,
	    y: y,
	    w: w,
	    h: h
	  };
	}

	function beforeUpdateBar(graphs, barItem, i, updater) {
	  var render = updater.chart.render;
	  var name = getBarName(barItem);

	  if (graphs[i] && graphs[i][0].name !== name) {
	    graphs[i].forEach(function (g) {
	      return render.delGraph(g);
	    });
	    graphs[i] = null;
	  }
	}

	function getLabelConfig(barItem) {
	  var animationCurve = barItem.animationCurve,
	      animationFrame = barItem.animationFrame,
	      rLevel = barItem.rLevel;
	  var shapes = getLabelShapes(barItem);
	  var style = getLabelStyle(barItem);
	  return shapes.map(function (shape) {
	    return {
	      name: 'text',
	      index: rLevel,
	      visible: barItem.label.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: shape,
	      style: style
	    };
	  });
	}

	function getLabelShapes(barItem) {
	  var contents = getFormatterLabels(barItem);
	  var position = getLabelsPosition(barItem);
	  return position.map(function (pos, i) {
	    return {
	      position: pos,
	      content: contents[i]
	    };
	  });
	}

	function getFormatterLabels(barItem) {
	  var data = barItem.data,
	      label = barItem.label;
	  var formatter = label.formatter;
	  data = data.filter(function (d) {
	    return typeof d === 'number';
	  }).map(function (d) {
	    return d.toString();
	  });
	  if (!formatter) return data;
	  var type = (0, _typeof2["default"])(formatter);
	  if (type === 'string') return data.map(function (d) {
	    return formatter.replace('{value}', d);
	  });
	  if (type === 'function') return data.map(function (d, i) {
	    return formatter({
	      value: d,
	      index: i
	    });
	  });
	  return data;
	}

	function getLabelsPosition(barItem) {
	  var label = barItem.label,
	      barValueAxisPos = barItem.barValueAxisPos,
	      barLabelAxisPos = barItem.barLabelAxisPos;
	  var position = label.position,
	      offset = label.offset;
	  var axis = barItem.valueAxis.axis;
	  return barValueAxisPos.map(function (_ref10, i) {
	    var _ref11 = (0, _slicedToArray2["default"])(_ref10, 2),
	        start = _ref11[0],
	        end = _ref11[1];

	    var labelAxisPos = barLabelAxisPos[i];
	    var pos = [end, labelAxisPos];

	    if (position === 'bottom') {
	      pos = [start, labelAxisPos];
	    }

	    if (position === 'center') {
	      pos = [(start + end) / 2, labelAxisPos];
	    }

	    if (axis === 'y') pos.reverse();
	    return getOffsetedPoint(pos, offset);
	  });
	}

	function getOffsetedPoint(_ref12, _ref13) {
	  var _ref14 = (0, _slicedToArray2["default"])(_ref12, 2),
	      x = _ref14[0],
	      y = _ref14[1];

	  var _ref15 = (0, _slicedToArray2["default"])(_ref13, 2),
	      ox = _ref15[0],
	      oy = _ref15[1];

	  return [x + ox, y + oy];
	}

	function getLabelStyle(barItem) {
	  var color = barItem.color,
	      style = barItem.label.style,
	      gc = barItem.gradient.color;
	  if (gc.length) color = gc[0];
	  style = (0, util$2.deepMerge)({
	    fill: color
	  }, style);
	  return style;
	}
	});

	unwrapExports(bar_1$1);
	var bar_2 = bar_1$1.bar;

	var pie_1$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pie = pie;

	var _defineProperty2 = interopRequireDefault$1(defineProperty$1);

	var _typeof2 = interopRequireDefault$1(_typeof_1);

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);









	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function pie(chart) {
	  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var series = option.series;
	  if (!series) series = [];
	  var pies = (0, util$2.initNeedSeries)(series, pie$1.pieConfig, 'pie');
	  pies = calcPiesCenter(pies, chart);
	  pies = calcPiesRadius(pies, chart);
	  pies = calcRosePiesRadius(pies, chart);
	  pies = calcPiesPercent(pies);
	  pies = calcPiesAngle(pies, chart);
	  pies = calcPiesInsideLabelPos(pies);
	  pies = calcPiesEdgeCenterPos(pies);
	  pies = calcPiesOutSideLabelPos(pies);
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: pies,
	    key: 'pie',
	    getGraphConfig: getPieConfig,
	    getStartGraphConfig: getStartPieConfig,
	    beforeChange: beforeChangePie
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: pies,
	    key: 'pieInsideLabel',
	    getGraphConfig: getInsideLabelConfig
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: pies,
	    key: 'pieOutsideLabelLine',
	    getGraphConfig: getOutsideLabelLineConfig,
	    getStartGraphConfig: getStartOutsideLabelLineConfig
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: pies,
	    key: 'pieOutsideLabel',
	    getGraphConfig: getOutsideLabelConfig,
	    getStartGraphConfig: getStartOutsideLabelConfig
	  });
	}

	function calcPiesCenter(pies, chart) {
	  var area = chart.render.area;
	  pies.forEach(function (pie) {
	    var center = pie.center;
	    center = center.map(function (pos, i) {
	      if (typeof pos === 'number') return pos;
	      return parseInt(pos) / 100 * area[i];
	    });
	    pie.center = center;
	  });
	  return pies;
	}

	function calcPiesRadius(pies, chart) {
	  var maxRadius = Math.min.apply(Math, (0, _toConsumableArray2["default"])(chart.render.area)) / 2;
	  pies.forEach(function (pie) {
	    var radius = pie.radius,
	        data = pie.data;
	    radius = getNumberRadius(radius, maxRadius);
	    data.forEach(function (item) {
	      var itemRadius = item.radius;
	      if (!itemRadius) itemRadius = radius;
	      itemRadius = getNumberRadius(itemRadius, maxRadius);
	      item.radius = itemRadius;
	    });
	    pie.radius = radius;
	  });
	  return pies;
	}

	function getNumberRadius(radius, maxRadius) {
	  if (!(radius instanceof Array)) radius = [0, radius];
	  radius = radius.map(function (r) {
	    if (typeof r === 'number') return r;
	    return parseInt(r) / 100 * maxRadius;
	  });
	  return radius;
	}

	function calcRosePiesRadius(pies, chart) {
	  var rosePie = pies.filter(function (_ref) {
	    var roseType = _ref.roseType;
	    return roseType;
	  });
	  rosePie.forEach(function (pie) {
	    var radius = pie.radius,
	        data = pie.data,
	        roseSort = pie.roseSort;
	    var roseIncrement = getRoseIncrement(pie);
	    var dataCopy = (0, _toConsumableArray2["default"])(data);
	    data = sortData(data);
	    data.forEach(function (item, i) {
	      item.radius[1] = radius[1] - roseIncrement * i;
	    });

	    if (roseSort) {
	      data.reverse();
	    } else {
	      pie.data = dataCopy;
	    }

	    pie.roseIncrement = roseIncrement;
	  });
	  return pies;
	}

	function sortData(data) {
	  return data.sort(function (_ref2, _ref3) {
	    var a = _ref2.value;
	    var b = _ref3.value;
	    if (a === b) return 0;
	    if (a > b) return -1;
	    if (a < b) return 1;
	  });
	}

	function getRoseIncrement(pie) {
	  var radius = pie.radius,
	      roseIncrement = pie.roseIncrement;
	  if (typeof roseIncrement === 'number') return roseIncrement;

	  if (roseIncrement === 'auto') {
	    var data = pie.data;
	    var allRadius = data.reduce(function (all, _ref4) {
	      var radius = _ref4.radius;
	      return [].concat((0, _toConsumableArray2["default"])(all), (0, _toConsumableArray2["default"])(radius));
	    }, []);
	    var minRadius = Math.min.apply(Math, (0, _toConsumableArray2["default"])(allRadius));
	    var maxRadius = Math.max.apply(Math, (0, _toConsumableArray2["default"])(allRadius));
	    return (maxRadius - minRadius) * 0.6 / (data.length - 1 || 1);
	  }

	  return parseInt(roseIncrement) / 100 * radius[1];
	}

	function calcPiesPercent(pies) {
	  pies.forEach(function (pie) {
	    var data = pie.data,
	        percentToFixed = pie.percentToFixed;
	    var sum = getDataSum(data);
	    data.forEach(function (item) {
	      var value = item.value;
	      item.percent = parseFloat((value / sum * 100).toFixed(percentToFixed));
	    });
	    var percentSumNoLast = (0, util$2.mulAdd)(data.slice(0, -1).map(function (_ref5) {
	      var percent = _ref5.percent;
	      return percent;
	    }));
	    data.slice(-1)[0].percent = 100 - percentSumNoLast;
	  });
	  return pies;
	}

	function getDataSum(data) {
	  return (0, util$2.mulAdd)(data.map(function (_ref6) {
	    var value = _ref6.value;
	    return value;
	  }));
	}

	function calcPiesAngle(pies) {
	  pies.forEach(function (pie) {
	    var start = pie.startAngle,
	        data = pie.data;
	    data.forEach(function (item, i) {
	      var _getDataAngle = getDataAngle(data, i),
	          _getDataAngle2 = (0, _slicedToArray2["default"])(_getDataAngle, 2),
	          startAngle = _getDataAngle2[0],
	          endAngle = _getDataAngle2[1];

	      item.startAngle = start + startAngle;
	      item.endAngle = start + endAngle;
	    });
	  });
	  return pies;
	}

	function getDataAngle(data, i) {
	  var fullAngle = Math.PI * 2;
	  var needAddData = data.slice(0, i + 1);
	  var percentSum = (0, util$2.mulAdd)(needAddData.map(function (_ref7) {
	    var percent = _ref7.percent;
	    return percent;
	  }));
	  var percent = data[i].percent;
	  var startPercent = percentSum - percent;
	  return [fullAngle * startPercent / 100, fullAngle * percentSum / 100];
	}

	function calcPiesInsideLabelPos(pies) {
	  pies.forEach(function (pieItem) {
	    var data = pieItem.data;
	    data.forEach(function (item) {
	      item.insideLabelPos = getPieInsideLabelPos(pieItem, item);
	    });
	  });
	  return pies;
	}

	function getPieInsideLabelPos(pieItem, dataItem) {
	  var center = pieItem.center;

	  var startAngle = dataItem.startAngle,
	      endAngle = dataItem.endAngle,
	      _dataItem$radius = (0, _slicedToArray2["default"])(dataItem.radius, 2),
	      ir = _dataItem$radius[0],
	      or = _dataItem$radius[1];

	  var radius = (ir + or) / 2;
	  var angle = (startAngle + endAngle) / 2;
	  return util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([radius, angle]));
	}

	function calcPiesEdgeCenterPos(pies) {
	  pies.forEach(function (pie) {
	    var data = pie.data,
	        center = pie.center;
	    data.forEach(function (item) {
	      var startAngle = item.startAngle,
	          endAngle = item.endAngle,
	          radius = item.radius;
	      var centerAngle = (startAngle + endAngle) / 2;

	      var pos = util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([radius[1], centerAngle]));

	      item.edgeCenterPos = pos;
	    });
	  });
	  return pies;
	}

	function calcPiesOutSideLabelPos(pies) {
	  pies.forEach(function (pieItem) {
	    var leftPieDataItems = getLeftOrRightPieDataItems(pieItem);
	    var rightPieDataItems = getLeftOrRightPieDataItems(pieItem, false);
	    leftPieDataItems = sortPiesFromTopToBottom(leftPieDataItems);
	    rightPieDataItems = sortPiesFromTopToBottom(rightPieDataItems);
	    addLabelLineAndAlign(leftPieDataItems, pieItem);
	    addLabelLineAndAlign(rightPieDataItems, pieItem, false);
	  });
	  return pies;
	}

	function getLabelLineBendRadius(pieItem) {
	  var labelLineBendGap = pieItem.outsideLabel.labelLineBendGap;
	  var maxRadius = getPieMaxRadius(pieItem);

	  if (typeof labelLineBendGap !== 'number') {
	    labelLineBendGap = parseInt(labelLineBendGap) / 100 * maxRadius;
	  }

	  return labelLineBendGap + maxRadius;
	}

	function getPieMaxRadius(pieItem) {
	  var data = pieItem.data;
	  var radius = data.map(function (_ref8) {
	    var _ref8$radius = (0, _slicedToArray2["default"])(_ref8.radius, 2),
	        foo = _ref8$radius[0],
	        r = _ref8$radius[1];

	    return r;
	  });
	  return Math.max.apply(Math, (0, _toConsumableArray2["default"])(radius));
	}

	function getLeftOrRightPieDataItems(pieItem) {
	  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	  var data = pieItem.data,
	      center = pieItem.center;
	  var centerXPos = center[0];
	  return data.filter(function (_ref9) {
	    var edgeCenterPos = _ref9.edgeCenterPos;
	    var xPos = edgeCenterPos[0];
	    if (left) return xPos <= centerXPos;
	    return xPos > centerXPos;
	  });
	}

	function sortPiesFromTopToBottom(dataItem) {
	  dataItem.sort(function (_ref10, _ref11) {
	    var _ref10$edgeCenterPos = (0, _slicedToArray2["default"])(_ref10.edgeCenterPos, 2),
	        t = _ref10$edgeCenterPos[0],
	        ay = _ref10$edgeCenterPos[1];

	    var _ref11$edgeCenterPos = (0, _slicedToArray2["default"])(_ref11.edgeCenterPos, 2),
	        tt = _ref11$edgeCenterPos[0],
	        by = _ref11$edgeCenterPos[1];

	    if (ay > by) return 1;
	    if (ay < by) return -1;
	    if (ay === by) return 0;
	  });
	  return dataItem;
	}

	function addLabelLineAndAlign(dataItem, pieItem) {
	  var left = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  var center = pieItem.center,
	      outsideLabel = pieItem.outsideLabel;
	  var radius = getLabelLineBendRadius(pieItem);
	  dataItem.forEach(function (item) {
	    var edgeCenterPos = item.edgeCenterPos,
	        startAngle = item.startAngle,
	        endAngle = item.endAngle;
	    var labelLineEndLength = outsideLabel.labelLineEndLength;
	    var angle = (startAngle + endAngle) / 2;

	    var bendPoint = util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([radius, angle]));

	    var endPoint = (0, _toConsumableArray2["default"])(bendPoint);
	    endPoint[0] += labelLineEndLength * (left ? -1 : 1);
	    item.labelLine = [edgeCenterPos, bendPoint, endPoint];
	    item.labelLineLength = (0, util$2.getPolylineLength)(item.labelLine);
	    item.align = {
	      textAlign: 'left',
	      textBaseline: 'middle'
	    };
	    if (left) item.align.textAlign = 'right';
	  });
	}

	function getPieConfig(pieItem) {
	  var data = pieItem.data,
	      animationCurve = pieItem.animationCurve,
	      animationFrame = pieItem.animationFrame,
	      rLevel = pieItem.rLevel;
	  return data.map(function (foo, i) {
	    return {
	      name: 'pie',
	      index: rLevel,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getPieShape(pieItem, i),
	      style: getPieStyle(pieItem, i)
	    };
	  });
	}

	function getStartPieConfig(pieItem) {
	  var animationDelayGap = pieItem.animationDelayGap,
	      startAnimationCurve = pieItem.startAnimationCurve;
	  var configs = getPieConfig(pieItem);
	  configs.forEach(function (config, i) {
	    config.animationCurve = startAnimationCurve;
	    config.animationDelay = i * animationDelayGap;
	    config.shape.or = config.shape.ir;
	  });
	  return configs;
	}

	function beforeChangePie(graph) {
	  graph.animationDelay = 0;
	}

	function getPieShape(pieItem, i) {
	  var center = pieItem.center,
	      data = pieItem.data;
	  var dataItem = data[i];
	  var radius = dataItem.radius,
	      startAngle = dataItem.startAngle,
	      endAngle = dataItem.endAngle;
	  return {
	    startAngle: startAngle,
	    endAngle: endAngle,
	    ir: radius[0],
	    or: radius[1],
	    rx: center[0],
	    ry: center[1]
	  };
	}

	function getPieStyle(pieItem, i) {
	  var pieStyle = pieItem.pieStyle,
	      data = pieItem.data;
	  var dataItem = data[i];
	  var color = dataItem.color;
	  return (0, util$2.deepMerge)({
	    fill: color
	  }, pieStyle);
	}

	function getInsideLabelConfig(pieItem) {
	  var animationCurve = pieItem.animationCurve,
	      animationFrame = pieItem.animationFrame,
	      data = pieItem.data,
	      rLevel = pieItem.rLevel;
	  return data.map(function (foo, i) {
	    return {
	      name: 'text',
	      index: rLevel,
	      visible: pieItem.insideLabel.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getInsideLabelShape(pieItem, i),
	      style: getInsideLabelStyle(pieItem, i)
	    };
	  });
	}

	function getInsideLabelShape(pieItem, i) {
	  var insideLabel = pieItem.insideLabel,
	      data = pieItem.data;
	  var formatter = insideLabel.formatter;
	  var dataItem = data[i];
	  var formatterType = (0, _typeof2["default"])(formatter);
	  var label = '';

	  if (formatterType === 'string') {
	    label = formatter.replace('{name}', dataItem.name);
	    label = label.replace('{percent}', dataItem.percent);
	    label = label.replace('{value}', dataItem.value);
	  }

	  if (formatterType === 'function') {
	    label = formatter(dataItem);
	  }

	  return {
	    content: label,
	    position: dataItem.insideLabelPos
	  };
	}

	function getInsideLabelStyle(pieItem, i) {
	  var style = pieItem.insideLabel.style;
	  return style;
	}

	function getOutsideLabelLineConfig(pieItem) {
	  var animationCurve = pieItem.animationCurve,
	      animationFrame = pieItem.animationFrame,
	      data = pieItem.data,
	      rLevel = pieItem.rLevel;
	  return data.map(function (foo, i) {
	    return {
	      name: 'polyline',
	      index: rLevel,
	      visible: pieItem.outsideLabel.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getOutsideLabelLineShape(pieItem, i),
	      style: getOutsideLabelLineStyle(pieItem, i)
	    };
	  });
	}

	function getStartOutsideLabelLineConfig(pieItem) {
	  var data = pieItem.data;
	  var configs = getOutsideLabelLineConfig(pieItem);
	  configs.forEach(function (config, i) {
	    config.style.lineDash = [0, data[i].labelLineLength];
	  });
	  return configs;
	}

	function getOutsideLabelLineShape(pieItem, i) {
	  var data = pieItem.data;
	  var dataItem = data[i];
	  return {
	    points: dataItem.labelLine
	  };
	}

	function getOutsideLabelLineStyle(pieItem, i) {
	  var outsideLabel = pieItem.outsideLabel,
	      data = pieItem.data;
	  var labelLineStyle = outsideLabel.labelLineStyle;
	  var color = data[i].color;
	  return (0, util$2.deepMerge)({
	    stroke: color,
	    lineDash: [data[i].labelLineLength, 0]
	  }, labelLineStyle);
	}

	function getOutsideLabelConfig(pieItem) {
	  var animationCurve = pieItem.animationCurve,
	      animationFrame = pieItem.animationFrame,
	      data = pieItem.data,
	      rLevel = pieItem.rLevel;
	  return data.map(function (foo, i) {
	    return {
	      name: 'text',
	      index: rLevel,
	      visible: pieItem.outsideLabel.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getOutsideLabelShape(pieItem, i),
	      style: getOutsideLabelStyle(pieItem, i)
	    };
	  });
	}

	function getStartOutsideLabelConfig(pieItem) {
	  var data = pieItem.data;
	  var configs = getOutsideLabelConfig(pieItem);
	  configs.forEach(function (config, i) {
	    config.shape.position = data[i].labelLine[1];
	  });
	  return configs;
	}

	function getOutsideLabelShape(pieItem, i) {
	  var outsideLabel = pieItem.outsideLabel,
	      data = pieItem.data;
	  var formatter = outsideLabel.formatter;
	  var _data$i = data[i],
	      labelLine = _data$i.labelLine,
	      name = _data$i.name,
	      percent = _data$i.percent,
	      value = _data$i.value;
	  var formatterType = (0, _typeof2["default"])(formatter);
	  var label = '';

	  if (formatterType === 'string') {
	    label = formatter.replace('{name}', name);
	    label = label.replace('{percent}', percent);
	    label = label.replace('{value}', value);
	  }

	  if (formatterType === 'function') {
	    label = formatter(data[i]);
	  }

	  return {
	    content: label,
	    position: labelLine[2]
	  };
	}

	function getOutsideLabelStyle(pieItem, i) {
	  var outsideLabel = pieItem.outsideLabel,
	      data = pieItem.data;
	  var _data$i2 = data[i],
	      color = _data$i2.color,
	      align = _data$i2.align;
	  var style = outsideLabel.style;
	  return (0, util$2.deepMerge)(_objectSpread({
	    fill: color
	  }, align), style);
	}
	});

	unwrapExports(pie_1$1);
	var pie_2 = pie_1$1.pie;

	var radarAxis_1$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.radarAxis = radarAxis;

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);

	var _defineProperty2 = interopRequireDefault$1(defineProperty$1);

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);









	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function radarAxis(chart) {
	  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var radar = option.radar;
	  var radarAxis = [];

	  if (radar) {
	    radarAxis = mergeRadarAxisDefaultConfig(radar);
	    radarAxis = calcRadarAxisCenter(radarAxis, chart);
	    radarAxis = calcRadarAxisRingRadius(radarAxis, chart);
	    radarAxis = calcRadarAxisLinePosition(radarAxis);
	    radarAxis = calcRadarAxisAreaRadius(radarAxis);
	    radarAxis = calcRadarAxisLabelPosition(radarAxis);
	    radarAxis = [radarAxis];
	  }

	  var radarAxisForUpdate = radarAxis;
	  if (radarAxis.length && !radarAxis[0].show) radarAxisForUpdate = [];
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: radarAxisForUpdate,
	    key: 'radarAxisSplitArea',
	    getGraphConfig: getSplitAreaConfig,
	    beforeUpdate: beforeUpdateSplitArea,
	    beforeChange: beforeChangeSplitArea
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: radarAxisForUpdate,
	    key: 'radarAxisSplitLine',
	    getGraphConfig: getSplitLineConfig,
	    beforeUpdate: beforeUpdateSplitLine,
	    beforeChange: beforeChangeSplitLine
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: radarAxisForUpdate,
	    key: 'radarAxisLine',
	    getGraphConfig: getAxisLineConfig
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: radarAxisForUpdate,
	    key: 'radarAxisLable',
	    getGraphConfig: getAxisLabelConfig
	  });
	  chart.radarAxis = radarAxis[0];
	}

	function mergeRadarAxisDefaultConfig(radar) {
	  return (0, util$2.deepMerge)((0, util.deepClone)(config.radarAxisConfig), radar);
	}

	function calcRadarAxisCenter(radarAxis, chart) {
	  var area = chart.render.area;
	  var center = radarAxis.center;
	  radarAxis.centerPos = center.map(function (v, i) {
	    if (typeof v === 'number') return v;
	    return parseInt(v) / 100 * area[i];
	  });
	  return radarAxis;
	}

	function calcRadarAxisRingRadius(radarAxis, chart) {
	  var area = chart.render.area;
	  var splitNum = radarAxis.splitNum,
	      radius = radarAxis.radius;
	  var maxRadius = Math.min.apply(Math, (0, _toConsumableArray2["default"])(area)) / 2;
	  if (typeof radius !== 'number') radius = parseInt(radius) / 100 * maxRadius;
	  var splitGap = radius / splitNum;
	  radarAxis.ringRadius = new Array(splitNum).fill(0).map(function (foo, i) {
	    return splitGap * (i + 1);
	  });
	  radarAxis.radius = radius;
	  return radarAxis;
	}

	function calcRadarAxisLinePosition(radarAxis) {
	  var indicator = radarAxis.indicator,
	      centerPos = radarAxis.centerPos,
	      radius = radarAxis.radius,
	      startAngle = radarAxis.startAngle;
	  var fullAngle = Math.PI * 2;
	  var indicatorNum = indicator.length;
	  var indicatorGap = fullAngle / indicatorNum;
	  var angles = new Array(indicatorNum).fill(0).map(function (foo, i) {
	    return indicatorGap * i + startAngle;
	  });
	  radarAxis.axisLineAngles = angles;
	  radarAxis.axisLinePosition = angles.map(function (g) {
	    return util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(centerPos).concat([radius, g]));
	  });
	  return radarAxis;
	}

	function calcRadarAxisAreaRadius(radarAxis) {
	  var ringRadius = radarAxis.ringRadius;
	  var subRadius = ringRadius[0] / 2;
	  radarAxis.areaRadius = ringRadius.map(function (r) {
	    return r - subRadius;
	  });
	  return radarAxis;
	}

	function calcRadarAxisLabelPosition(radarAxis) {
	  var axisLineAngles = radarAxis.axisLineAngles,
	      centerPos = radarAxis.centerPos,
	      radius = radarAxis.radius,
	      axisLabel = radarAxis.axisLabel;
	  radius += axisLabel.labelGap;
	  radarAxis.axisLabelPosition = axisLineAngles.map(function (angle) {
	    return util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(centerPos).concat([radius, angle]));
	  });
	  return radarAxis;
	}

	function getSplitAreaConfig(radarAxis) {
	  var areaRadius = radarAxis.areaRadius,
	      polygon = radarAxis.polygon,
	      animationCurve = radarAxis.animationCurve,
	      animationFrame = radarAxis.animationFrame,
	      rLevel = radarAxis.rLevel;
	  var name = polygon ? 'regPolygon' : 'ring';
	  return areaRadius.map(function (foo, i) {
	    return {
	      name: name,
	      index: rLevel,
	      visible: radarAxis.splitArea.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getSplitAreaShape(radarAxis, i),
	      style: getSplitAreaStyle(radarAxis, i)
	    };
	  });
	}

	function getSplitAreaShape(radarAxis, i) {
	  var polygon = radarAxis.polygon,
	      areaRadius = radarAxis.areaRadius,
	      indicator = radarAxis.indicator,
	      centerPos = radarAxis.centerPos;
	  var indicatorNum = indicator.length;
	  var shape = {
	    rx: centerPos[0],
	    ry: centerPos[1],
	    r: areaRadius[i]
	  };
	  if (polygon) shape.side = indicatorNum;
	  return shape;
	}

	function getSplitAreaStyle(radarAxis, i) {
	  var splitArea = radarAxis.splitArea,
	      ringRadius = radarAxis.ringRadius,
	      axisLineAngles = radarAxis.axisLineAngles,
	      polygon = radarAxis.polygon,
	      centerPos = radarAxis.centerPos;
	  var color = splitArea.color,
	      style = splitArea.style;
	  style = _objectSpread({
	    fill: 'rgba(0, 0, 0, 0)'
	  }, style);
	  var lineWidth = ringRadius[0] - 0;

	  if (polygon) {
	    var point1 = util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(centerPos).concat([ringRadius[0], axisLineAngles[0]]));

	    var point2 = util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(centerPos).concat([ringRadius[0], axisLineAngles[1]]));

	    lineWidth = (0, util$2.getPointToLineDistance)(centerPos, point1, point2);
	  }

	  style = (0, util$2.deepMerge)((0, util.deepClone)(style, true), {
	    lineWidth: lineWidth
	  });
	  if (!color.length) return style;
	  var colorNum = color.length;
	  return (0, util$2.deepMerge)(style, {
	    stroke: color[i % colorNum]
	  });
	}

	function beforeUpdateSplitArea(graphs, radarAxis, i, updater) {
	  var cache = graphs[i];
	  if (!cache) return;
	  var render = updater.chart.render;
	  var polygon = radarAxis.polygon;
	  var name = cache[0].name;
	  var currentName = polygon ? 'regPolygon' : 'ring';
	  var delAll = currentName !== name;
	  if (!delAll) return;
	  cache.forEach(function (g) {
	    return render.delGraph(g);
	  });
	  graphs[i] = null;
	}

	function beforeChangeSplitArea(graph, config$$1) {
	  var side = config$$1.shape.side;
	  if (typeof side !== 'number') return;
	  graph.shape.side = side;
	}

	function getSplitLineConfig(radarAxis) {
	  var ringRadius = radarAxis.ringRadius,
	      polygon = radarAxis.polygon,
	      animationCurve = radarAxis.animationCurve,
	      animationFrame = radarAxis.animationFrame,
	      rLevel = radarAxis.rLevel;
	  var name = polygon ? 'regPolygon' : 'ring';
	  return ringRadius.map(function (foo, i) {
	    return {
	      name: name,
	      index: rLevel,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      visible: radarAxis.splitLine.show,
	      shape: getSplitLineShape(radarAxis, i),
	      style: getSplitLineStyle(radarAxis, i)
	    };
	  });
	}

	function getSplitLineShape(radarAxis, i) {
	  var ringRadius = radarAxis.ringRadius,
	      centerPos = radarAxis.centerPos,
	      indicator = radarAxis.indicator,
	      polygon = radarAxis.polygon;
	  var shape = {
	    rx: centerPos[0],
	    ry: centerPos[1],
	    r: ringRadius[i]
	  };
	  var indicatorNum = indicator.length;
	  if (polygon) shape.side = indicatorNum;
	  return shape;
	}

	function getSplitLineStyle(radarAxis, i) {
	  var splitLine = radarAxis.splitLine;
	  var color = splitLine.color,
	      style = splitLine.style;
	  style = _objectSpread({
	    fill: 'rgba(0, 0, 0, 0)'
	  }, style);
	  if (!color.length) return style;
	  var colorNum = color.length;
	  return (0, util$2.deepMerge)(style, {
	    stroke: color[i % colorNum]
	  });
	}

	function beforeUpdateSplitLine(graphs, radarAxis, i, updater) {
	  var cache = graphs[i];
	  if (!cache) return;
	  var render = updater.chart.render;
	  var polygon = radarAxis.polygon;
	  var name = cache[0].name;
	  var currenName = polygon ? 'regPolygon' : 'ring';
	  var delAll = currenName !== name;
	  if (!delAll) return;
	  cache.forEach(function (g) {
	    return render.delGraph(g);
	  });
	  graphs[i] = null;
	}

	function beforeChangeSplitLine(graph, config$$1) {
	  var side = config$$1.shape.side;
	  if (typeof side !== 'number') return;
	  graph.shape.side = side;
	}

	function getAxisLineConfig(radarAxis) {
	  var axisLinePosition = radarAxis.axisLinePosition,
	      animationCurve = radarAxis.animationCurve,
	      animationFrame = radarAxis.animationFrame,
	      rLevel = radarAxis.rLevel;
	  return axisLinePosition.map(function (foo, i) {
	    return {
	      name: 'polyline',
	      index: rLevel,
	      visible: radarAxis.axisLine.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getAxisLineShape(radarAxis, i),
	      style: getAxisLineStyle(radarAxis, i)
	    };
	  });
	}

	function getAxisLineShape(radarAxis, i) {
	  var centerPos = radarAxis.centerPos,
	      axisLinePosition = radarAxis.axisLinePosition;
	  var points = [centerPos, axisLinePosition[i]];
	  return {
	    points: points
	  };
	}

	function getAxisLineStyle(radarAxis, i) {
	  var axisLine = radarAxis.axisLine;
	  var color = axisLine.color,
	      style = axisLine.style;
	  if (!color.length) return style;
	  var colorNum = color.length;
	  return (0, util$2.deepMerge)(style, {
	    stroke: color[i % colorNum]
	  });
	}

	function getAxisLabelConfig(radarAxis) {
	  var axisLabelPosition = radarAxis.axisLabelPosition,
	      animationCurve = radarAxis.animationCurve,
	      animationFrame = radarAxis.animationFrame,
	      rLevel = radarAxis.rLevel;
	  return axisLabelPosition.map(function (foo, i) {
	    return {
	      name: 'text',
	      index: rLevel,
	      visible: radarAxis.axisLabel.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getAxisLableShape(radarAxis, i),
	      style: getAxisLableStyle(radarAxis, i)
	    };
	  });
	}

	function getAxisLableShape(radarAxis, i) {
	  var axisLabelPosition = radarAxis.axisLabelPosition,
	      indicator = radarAxis.indicator;
	  return {
	    content: indicator[i].name,
	    position: axisLabelPosition[i]
	  };
	}

	function getAxisLableStyle(radarAxis, i) {
	  var axisLabel = radarAxis.axisLabel,
	      _radarAxis$centerPos = (0, _slicedToArray2["default"])(radarAxis.centerPos, 2),
	      x = _radarAxis$centerPos[0],
	      y = _radarAxis$centerPos[1],
	      axisLabelPosition = radarAxis.axisLabelPosition;

	  var color = axisLabel.color,
	      style = axisLabel.style;

	  var _axisLabelPosition$i = (0, _slicedToArray2["default"])(axisLabelPosition[i], 2),
	      labelXpos = _axisLabelPosition$i[0],
	      labelYPos = _axisLabelPosition$i[1];

	  var textAlign = labelXpos > x ? 'left' : 'right';
	  var textBaseline = labelYPos > y ? 'top' : 'bottom';
	  style = (0, util$2.deepMerge)({
	    textAlign: textAlign,
	    textBaseline: textBaseline
	  }, style);
	  if (!color.length) return style;
	  var colorNum = color.length;
	  return (0, util$2.deepMerge)(style, {
	    fill: color[i % colorNum]
	  });
	}
	});

	unwrapExports(radarAxis_1$1);
	var radarAxis_2 = radarAxis_1$1.radarAxis;

	var radar_1$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.radar = radar;

	var _defineProperty2 = interopRequireDefault$1(defineProperty$1);

	var _typeof2 = interopRequireDefault$1(_typeof_1);

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);











	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function radar(chart) {
	  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var series = option.series;
	  if (!series) series = [];
	  var radars = (0, util$2.initNeedSeries)(series, config.radarConfig, 'radar');
	  radars = calcRadarPosition(radars, chart);
	  radars = calcRadarLabelPosition(radars, chart);
	  radars = calcRadarLabelAlign(radars, chart);
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: radars,
	    key: 'radar',
	    getGraphConfig: getRadarConfig,
	    getStartGraphConfig: getStartRadarConfig,
	    beforeChange: beforeChangeRadar
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: radars,
	    key: 'radarPoint',
	    getGraphConfig: getPointConfig,
	    getStartGraphConfig: getStartPointConfig
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: radars,
	    key: 'radarLabel',
	    getGraphConfig: getLabelConfig
	  });
	}

	function calcRadarPosition(radars, chart) {
	  var radarAxis = chart.radarAxis;
	  if (!radarAxis) return [];
	  var indicator = radarAxis.indicator,
	      axisLineAngles = radarAxis.axisLineAngles,
	      radius = radarAxis.radius,
	      centerPos = radarAxis.centerPos;
	  radars.forEach(function (radarItem) {
	    var data = radarItem.data;
	    radarItem.dataRadius = [];
	    radarItem.radarPosition = indicator.map(function (_ref, i) {
	      var max = _ref.max,
	          min = _ref.min;
	      var v = data[i];
	      if (typeof max !== 'number') max = v;
	      if (typeof min !== 'number') min = 0;
	      if (typeof v !== 'number') v = min;
	      var dataRadius = (v - min) / (max - min) * radius;
	      radarItem.dataRadius[i] = dataRadius;
	      return util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(centerPos).concat([dataRadius, axisLineAngles[i]]));
	    });
	  });
	  return radars;
	}

	function calcRadarLabelPosition(radars, chart) {
	  var radarAxis = chart.radarAxis;
	  if (!radarAxis) return [];
	  var centerPos = radarAxis.centerPos,
	      axisLineAngles = radarAxis.axisLineAngles;
	  radars.forEach(function (radarItem) {
	    var dataRadius = radarItem.dataRadius,
	        label = radarItem.label;
	    var labelGap = label.labelGap;
	    radarItem.labelPosition = dataRadius.map(function (r, i) {
	      return util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(centerPos).concat([r + labelGap, axisLineAngles[i]]));
	    });
	  });
	  return radars;
	}

	function calcRadarLabelAlign(radars, chart) {
	  var radarAxis = chart.radarAxis;
	  if (!radarAxis) return [];

	  var _radarAxis$centerPos = (0, _slicedToArray2["default"])(radarAxis.centerPos, 2),
	      x = _radarAxis$centerPos[0],
	      y = _radarAxis$centerPos[1];

	  radars.forEach(function (radarItem) {
	    var labelPosition = radarItem.labelPosition;
	    var labelAlign = labelPosition.map(function (_ref2) {
	      var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
	          lx = _ref3[0],
	          ly = _ref3[1];

	      var textAlign = lx > x ? 'left' : 'right';
	      var textBaseline = ly > y ? 'top' : 'bottom';
	      return {
	        textAlign: textAlign,
	        textBaseline: textBaseline
	      };
	    });
	    radarItem.labelAlign = labelAlign;
	  });
	  return radars;
	}

	function getRadarConfig(radarItem) {
	  var animationCurve = radarItem.animationCurve,
	      animationFrame = radarItem.animationFrame,
	      rLevel = radarItem.rLevel;
	  return [{
	    name: 'polyline',
	    index: rLevel,
	    animationCurve: animationCurve,
	    animationFrame: animationFrame,
	    shape: getRadarShape(radarItem),
	    style: getRadarStyle(radarItem)
	  }];
	}

	function getStartRadarConfig(radarItem, updater) {
	  var centerPos = updater.chart.radarAxis.centerPos;
	  var config$$1 = getRadarConfig(radarItem)[0];
	  var pointNum = config$$1.shape.points.length;
	  var points = new Array(pointNum).fill(0).map(function (foo) {
	    return (0, _toConsumableArray2["default"])(centerPos);
	  });
	  config$$1.shape.points = points;
	  return [config$$1];
	}

	function getRadarShape(radarItem) {
	  var radarPosition = radarItem.radarPosition;
	  return {
	    points: radarPosition,
	    close: true
	  };
	}

	function getRadarStyle(radarItem) {
	  var radarStyle = radarItem.radarStyle,
	      color = radarItem.color;
	  var colorRgbaValue = (0, lib.getRgbaValue)(color);
	  colorRgbaValue[3] = 0.5;
	  var radarDefaultColor = {
	    stroke: color,
	    fill: (0, lib.getColorFromRgbValue)(colorRgbaValue)
	  };
	  return (0, util$2.deepMerge)(radarDefaultColor, radarStyle);
	}

	function beforeChangeRadar(graph, _ref4) {
	  var shape = _ref4.shape;
	  var graphPoints = graph.shape.points;
	  var graphPointsNum = graphPoints.length;
	  var pointsNum = shape.points.length;

	  if (pointsNum > graphPointsNum) {
	    var lastPoint = graphPoints.slice(-1)[0];
	    var newAddPoints = new Array(pointsNum - graphPointsNum).fill(0).map(function (foo) {
	      return (0, _toConsumableArray2["default"])(lastPoint);
	    });
	    graphPoints.push.apply(graphPoints, (0, _toConsumableArray2["default"])(newAddPoints));
	  } else if (pointsNum < graphPointsNum) {
	    graphPoints.splice(pointsNum);
	  }
	}

	function getPointConfig(radarItem) {
	  var radarPosition = radarItem.radarPosition,
	      animationCurve = radarItem.animationCurve,
	      animationFrame = radarItem.animationFrame,
	      rLevel = radarItem.rLevel;
	  return radarPosition.map(function (foo, i) {
	    return {
	      name: 'circle',
	      index: rLevel,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      visible: radarItem.point.show,
	      shape: getPointShape(radarItem, i),
	      style: getPointStyle(radarItem, i)
	    };
	  });
	}

	function getStartPointConfig(radarItem) {
	  var configs = getPointConfig(radarItem);
	  configs.forEach(function (config$$1) {
	    return config$$1.shape.r = 0.01;
	  });
	  return configs;
	}

	function getPointShape(radarItem, i) {
	  var radarPosition = radarItem.radarPosition,
	      point = radarItem.point;
	  var radius = point.radius;
	  var position = radarPosition[i];
	  return {
	    rx: position[0],
	    ry: position[1],
	    r: radius
	  };
	}

	function getPointStyle(radarItem, i) {
	  var point = radarItem.point,
	      color = radarItem.color;
	  var style = point.style;
	  return (0, util$2.deepMerge)({
	    stroke: color
	  }, style);
	}

	function getLabelConfig(radarItem) {
	  var labelPosition = radarItem.labelPosition,
	      animationCurve = radarItem.animationCurve,
	      animationFrame = radarItem.animationFrame,
	      rLevel = radarItem.rLevel;
	  return labelPosition.map(function (foo, i) {
	    return {
	      name: 'text',
	      index: rLevel,
	      visible: radarItem.label.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getLabelShape(radarItem, i),
	      style: getLabelStyle(radarItem, i)
	    };
	  });
	}

	function getLabelShape(radarItem, i) {
	  var labelPosition = radarItem.labelPosition,
	      label = radarItem.label,
	      data = radarItem.data;
	  var offset = label.offset,
	      formatter = label.formatter;
	  var position = mergePointOffset(labelPosition[i], offset);
	  var labelText = data[i] ? data[i].toString() : '0';
	  var formatterType = (0, _typeof2["default"])(formatter);
	  if (formatterType === 'string') labelText = formatter.replace('{value}', labelText);
	  if (formatterType === 'function') labelText = formatter(labelText);
	  return {
	    content: labelText,
	    position: position
	  };
	}

	function mergePointOffset(_ref5, _ref6) {
	  var _ref7 = (0, _slicedToArray2["default"])(_ref5, 2),
	      x = _ref7[0],
	      y = _ref7[1];

	  var _ref8 = (0, _slicedToArray2["default"])(_ref6, 2),
	      ox = _ref8[0],
	      oy = _ref8[1];

	  return [x + ox, y + oy];
	}

	function getLabelStyle(radarItem, i) {
	  var label = radarItem.label,
	      color = radarItem.color,
	      labelAlign = radarItem.labelAlign;
	  var style = label.style;

	  var defaultColorAndAlign = _objectSpread({
	    fill: color
	  }, labelAlign[i]);

	  return (0, util$2.deepMerge)(defaultColorAndAlign, style);
	}
	});

	unwrapExports(radar_1$1);
	var radar_2 = radar_1$1.radar;

	var gauge_1$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.gauge = gauge$$1;

	var _defineProperty2 = interopRequireDefault$1(defineProperty$1);

	var _typeof2 = interopRequireDefault$1(_typeof_1);

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);

	var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray$1);











	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function gauge$$1(chart) {
	  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var series = option.series;
	  if (!series) series = [];
	  var gauges = (0, util$2.initNeedSeries)(series, gauge.gaugeConfig, 'gauge');
	  gauges = calcGaugesCenter(gauges, chart);
	  gauges = calcGaugesRadius(gauges, chart);
	  gauges = calcGaugesDataRadiusAndLineWidth(gauges, chart);
	  gauges = calcGaugesDataAngles(gauges, chart);
	  gauges = calcGaugesDataGradient(gauges, chart);
	  gauges = calcGaugesAxisTickPosition(gauges, chart);
	  gauges = calcGaugesLabelPositionAndAlign(gauges, chart);
	  gauges = calcGaugesLabelData(gauges, chart);
	  gauges = calcGaugesDetailsPosition(gauges, chart);
	  gauges = calcGaugesDetailsContent(gauges, chart);
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: gauges,
	    key: 'gaugeAxisTick',
	    getGraphConfig: getAxisTickConfig
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: gauges,
	    key: 'gaugeAxisLabel',
	    getGraphConfig: getAxisLabelConfig
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: gauges,
	    key: 'gaugeBackgroundArc',
	    getGraphConfig: getBackgroundArcConfig,
	    getStartGraphConfig: getStartBackgroundArcConfig
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: gauges,
	    key: 'gaugeArc',
	    getGraphConfig: getArcConfig,
	    getStartGraphConfig: getStartArcConfig,
	    beforeChange: beforeChangeArc
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: gauges,
	    key: 'gaugePointer',
	    getGraphConfig: getPointerConfig,
	    getStartGraphConfig: getStartPointerConfig
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: gauges,
	    key: 'gaugeDetails',
	    getGraphConfig: getDetailsConfig
	  });
	}

	function calcGaugesCenter(gauges, chart) {
	  var area = chart.render.area;
	  gauges.forEach(function (gaugeItem) {
	    var center = gaugeItem.center;
	    center = center.map(function (pos, i) {
	      if (typeof pos === 'number') return pos;
	      return parseInt(pos) / 100 * area[i];
	    });
	    gaugeItem.center = center;
	  });
	  return gauges;
	}

	function calcGaugesRadius(gauges, chart) {
	  var area = chart.render.area;
	  var maxRadius = Math.min.apply(Math, (0, _toConsumableArray2["default"])(area)) / 2;
	  gauges.forEach(function (gaugeItem) {
	    var radius = gaugeItem.radius;

	    if (typeof radius !== 'number') {
	      radius = parseInt(radius) / 100 * maxRadius;
	    }

	    gaugeItem.radius = radius;
	  });
	  return gauges;
	}

	function calcGaugesDataRadiusAndLineWidth(gauges, chart) {
	  var area = chart.render.area;
	  var maxRadius = Math.min.apply(Math, (0, _toConsumableArray2["default"])(area)) / 2;
	  gauges.forEach(function (gaugeItem) {
	    var radius = gaugeItem.radius,
	        data = gaugeItem.data,
	        arcLineWidth = gaugeItem.arcLineWidth;
	    data.forEach(function (item) {
	      var arcRadius = item.radius,
	          lineWidth = item.lineWidth;
	      if (!arcRadius) arcRadius = radius;
	      if (typeof arcRadius !== 'number') arcRadius = parseInt(arcRadius) / 100 * maxRadius;
	      item.radius = arcRadius;
	      if (!lineWidth) lineWidth = arcLineWidth;
	      item.lineWidth = lineWidth;
	    });
	  });
	  return gauges;
	}

	function calcGaugesDataAngles(gauges, chart) {
	  gauges.forEach(function (gaugeItem) {
	    var startAngle = gaugeItem.startAngle,
	        endAngle = gaugeItem.endAngle,
	        data = gaugeItem.data,
	        min = gaugeItem.min,
	        max = gaugeItem.max;
	    var angleMinus = endAngle - startAngle;
	    var valueMinus = max - min;
	    data.forEach(function (item) {
	      var value = item.value;
	      var itemAngle = Math.abs((value - min) / valueMinus * angleMinus);
	      item.startAngle = startAngle;
	      item.endAngle = startAngle + itemAngle;
	    });
	  });
	  return gauges;
	}

	function calcGaugesDataGradient(gauges, chart) {
	  gauges.forEach(function (gaugeItem) {
	    var data = gaugeItem.data;
	    data.forEach(function (item) {
	      var color = item.color,
	          gradient = item.gradient;
	      if (!gradient || !gradient.length) gradient = color;
	      if (!(gradient instanceof Array)) gradient = [gradient];
	      item.gradient = gradient;
	    });
	  });
	  return gauges;
	}

	function calcGaugesAxisTickPosition(gauges, chart) {
	  gauges.forEach(function (gaugeItem) {
	    var startAngle = gaugeItem.startAngle,
	        endAngle = gaugeItem.endAngle,
	        splitNum = gaugeItem.splitNum,
	        center = gaugeItem.center,
	        radius = gaugeItem.radius,
	        arcLineWidth = gaugeItem.arcLineWidth,
	        axisTick = gaugeItem.axisTick;
	    var tickLength = axisTick.tickLength,
	        lineWidth = axisTick.style.lineWidth;
	    var angles = endAngle - startAngle;
	    var outerRadius = radius - arcLineWidth / 2;
	    var innerRadius = outerRadius - tickLength;
	    var angleGap = angles / (splitNum - 1);
	    var arcLength = 2 * Math.PI * radius * angles / (Math.PI * 2);
	    var offset = Math.ceil(lineWidth / 2) / arcLength * angles;
	    gaugeItem.tickAngles = [];
	    gaugeItem.tickInnerRadius = [];
	    gaugeItem.tickPosition = new Array(splitNum).fill(0).map(function (foo, i) {
	      var angle = startAngle + angleGap * i;
	      if (i === 0) angle += offset;
	      if (i === splitNum - 1) angle -= offset;
	      gaugeItem.tickAngles[i] = angle;
	      gaugeItem.tickInnerRadius[i] = innerRadius;
	      return [util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([outerRadius, angle])), util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([innerRadius, angle]))];
	    });
	  });
	  return gauges;
	}

	function calcGaugesLabelPositionAndAlign(gauges, chart) {
	  gauges.forEach(function (gaugeItem) {
	    var center = gaugeItem.center,
	        tickInnerRadius = gaugeItem.tickInnerRadius,
	        tickAngles = gaugeItem.tickAngles,
	        labelGap = gaugeItem.axisLabel.labelGap;
	    var position = tickAngles.map(function (angle, i) {
	      return util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([tickInnerRadius[i] - labelGap, tickAngles[i]]));
	    });
	    var align = position.map(function (_ref) {
	      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
	          x = _ref2[0],
	          y = _ref2[1];

	      return {
	        textAlign: x > center[0] ? 'right' : 'left',
	        textBaseline: y > center[1] ? 'bottom' : 'top'
	      };
	    });
	    gaugeItem.labelPosition = position;
	    gaugeItem.labelAlign = align;
	  });
	  return gauges;
	}

	function calcGaugesLabelData(gauges, chart) {
	  gauges.forEach(function (gaugeItem) {
	    var axisLabel = gaugeItem.axisLabel,
	        min = gaugeItem.min,
	        max = gaugeItem.max,
	        splitNum = gaugeItem.splitNum;
	    var data = axisLabel.data,
	        formatter = axisLabel.formatter;
	    var valueGap = (max - min) / (splitNum - 1);
	    var value = new Array(splitNum).fill(0).map(function (foo, i) {
	      return parseInt(min + valueGap * i);
	    });
	    var formatterType = (0, _typeof2["default"])(formatter);
	    data = (0, util$2.deepMerge)(value, data).map(function (v, i) {
	      var label = v;

	      if (formatterType === 'string') {
	        label = formatter.replace('{value}', v);
	      }

	      if (formatterType === 'function') {
	        label = formatter({
	          value: v,
	          index: i
	        });
	      }

	      return label;
	    });
	    axisLabel.data = data;
	  });
	  return gauges;
	}

	function calcGaugesDetailsPosition(gauges, chart) {
	  gauges.forEach(function (gaugeItem) {
	    var data = gaugeItem.data,
	        details = gaugeItem.details,
	        center = gaugeItem.center;
	    var position = details.position,
	        offset = details.offset;
	    var detailsPosition = data.map(function (_ref3) {
	      var startAngle = _ref3.startAngle,
	          endAngle = _ref3.endAngle,
	          radius = _ref3.radius;
	      var point = null;

	      if (position === 'center') {
	        point = center;
	      } else if (position === 'start') {
	        point = util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([radius, startAngle]));
	      } else if (position === 'end') {
	        point = util.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([radius, endAngle]));
	      }

	      return getOffsetedPoint(point, offset);
	    });
	    gaugeItem.detailsPosition = detailsPosition;
	  });
	  return gauges;
	}

	function calcGaugesDetailsContent(gauges, chart) {
	  gauges.forEach(function (gaugeItem) {
	    var data = gaugeItem.data,
	        details = gaugeItem.details;
	    var formatter = details.formatter;
	    var formatterType = (0, _typeof2["default"])(formatter);
	    var contents = data.map(function (dataItem) {
	      var content = dataItem.value;

	      if (formatterType === 'string') {
	        content = formatter.replace('{value}', '{nt}');
	        content = content.replace('{name}', dataItem.name);
	      }

	      if (formatterType === 'function') content = formatter(dataItem);
	      return content.toString();
	    });
	    gaugeItem.detailsContent = contents;
	  });
	  return gauges;
	}

	function getOffsetedPoint(_ref4, _ref5) {
	  var _ref6 = (0, _slicedToArray2["default"])(_ref4, 2),
	      x = _ref6[0],
	      y = _ref6[1];

	  var _ref7 = (0, _slicedToArray2["default"])(_ref5, 2),
	      ox = _ref7[0],
	      oy = _ref7[1];

	  return [x + ox, y + oy];
	}

	function getAxisTickConfig(gaugeItem) {
	  var tickPosition = gaugeItem.tickPosition,
	      animationCurve = gaugeItem.animationCurve,
	      animationFrame = gaugeItem.animationFrame,
	      rLevel = gaugeItem.rLevel;
	  return tickPosition.map(function (foo, i) {
	    return {
	      name: 'polyline',
	      index: rLevel,
	      visible: gaugeItem.axisTick.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getAxisTickShape(gaugeItem, i),
	      style: getAxisTickStyle(gaugeItem, i)
	    };
	  });
	}

	function getAxisTickShape(gaugeItem, i) {
	  var tickPosition = gaugeItem.tickPosition;
	  return {
	    points: tickPosition[i]
	  };
	}

	function getAxisTickStyle(gaugeItem, i) {
	  var style = gaugeItem.axisTick.style;
	  return style;
	}

	function getAxisLabelConfig(gaugeItem) {
	  var labelPosition = gaugeItem.labelPosition,
	      animationCurve = gaugeItem.animationCurve,
	      animationFrame = gaugeItem.animationFrame,
	      rLevel = gaugeItem.rLevel;
	  return labelPosition.map(function (foo, i) {
	    return {
	      name: 'text',
	      index: rLevel,
	      visible: gaugeItem.axisLabel.show,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getAxisLabelShape(gaugeItem, i),
	      style: getAxisLabelStyle(gaugeItem, i)
	    };
	  });
	}

	function getAxisLabelShape(gaugeItem, i) {
	  var labelPosition = gaugeItem.labelPosition,
	      data = gaugeItem.axisLabel.data;
	  return {
	    content: data[i].toString(),
	    position: labelPosition[i]
	  };
	}

	function getAxisLabelStyle(gaugeItem, i) {
	  var labelAlign = gaugeItem.labelAlign,
	      axisLabel = gaugeItem.axisLabel;
	  var style = axisLabel.style;
	  return (0, util$2.deepMerge)(_objectSpread({}, labelAlign[i]), style);
	}

	function getBackgroundArcConfig(gaugeItem) {
	  var animationCurve = gaugeItem.animationCurve,
	      animationFrame = gaugeItem.animationFrame,
	      rLevel = gaugeItem.rLevel;
	  return [{
	    name: 'arc',
	    index: rLevel,
	    visible: gaugeItem.backgroundArc.show,
	    animationCurve: animationCurve,
	    animationFrame: animationFrame,
	    shape: getGaugeBackgroundArcShape(gaugeItem),
	    style: getGaugeBackgroundArcStyle(gaugeItem)
	  }];
	}

	function getGaugeBackgroundArcShape(gaugeItem) {
	  var startAngle = gaugeItem.startAngle,
	      endAngle = gaugeItem.endAngle,
	      center = gaugeItem.center,
	      radius = gaugeItem.radius;
	  return {
	    rx: center[0],
	    ry: center[1],
	    r: radius,
	    startAngle: startAngle,
	    endAngle: endAngle
	  };
	}

	function getGaugeBackgroundArcStyle(gaugeItem) {
	  var backgroundArc = gaugeItem.backgroundArc,
	      arcLineWidth = gaugeItem.arcLineWidth;
	  var style = backgroundArc.style;
	  return (0, util$2.deepMerge)({
	    lineWidth: arcLineWidth
	  }, style);
	}

	function getStartBackgroundArcConfig(gaugeItem) {
	  var config = getBackgroundArcConfig(gaugeItem)[0];

	  var shape = _objectSpread({}, config.shape);

	  shape.endAngle = config.shape.startAngle;
	  config.shape = shape;
	  return [config];
	}

	function getArcConfig(gaugeItem) {
	  var data = gaugeItem.data,
	      animationCurve = gaugeItem.animationCurve,
	      animationFrame = gaugeItem.animationFrame,
	      rLevel = gaugeItem.rLevel;
	  return data.map(function (foo, i) {
	    return {
	      name: 'agArc',
	      index: rLevel,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getGaugeArcShape(gaugeItem, i),
	      style: getGaugeArcStyle(gaugeItem, i)
	    };
	  });
	}

	function getGaugeArcShape(gaugeItem, i) {
	  var data = gaugeItem.data,
	      center = gaugeItem.center,
	      gradientEndAngle = gaugeItem.endAngle;
	  var _data$i = data[i],
	      radius = _data$i.radius,
	      startAngle = _data$i.startAngle,
	      endAngle = _data$i.endAngle,
	      localGradient = _data$i.localGradient;
	  if (localGradient) gradientEndAngle = endAngle;
	  return {
	    rx: center[0],
	    ry: center[1],
	    r: radius,
	    startAngle: startAngle,
	    endAngle: endAngle,
	    gradientEndAngle: gradientEndAngle
	  };
	}

	function getGaugeArcStyle(gaugeItem, i) {
	  var data = gaugeItem.data,
	      dataItemStyle = gaugeItem.dataItemStyle;
	  var _data$i2 = data[i],
	      lineWidth = _data$i2.lineWidth,
	      gradient = _data$i2.gradient;
	  gradient = gradient.map(function (c) {
	    return (0, lib.getRgbaValue)(c);
	  });
	  return (0, util$2.deepMerge)({
	    lineWidth: lineWidth,
	    gradient: gradient
	  }, dataItemStyle);
	}

	function getStartArcConfig(gaugeItem) {
	  var configs = getArcConfig(gaugeItem);
	  configs.map(function (config) {
	    var shape = _objectSpread({}, config.shape);

	    shape.endAngle = config.shape.startAngle;
	    config.shape = shape;
	  });
	  return configs;
	}

	function beforeChangeArc(graph, config) {
	  var graphGradient = graph.style.gradient;
	  var cacheNum = graphGradient.length;
	  var needNum = config.style.gradient.length;

	  if (cacheNum > needNum) {
	    graphGradient.splice(needNum);
	  } else {
	    var last = graphGradient.slice(-1)[0];
	    graphGradient.push.apply(graphGradient, (0, _toConsumableArray2["default"])(new Array(needNum - cacheNum).fill(0).map(function (foo) {
	      return (0, _toConsumableArray2["default"])(last);
	    })));
	  }
	}

	function getPointerConfig(gaugeItem) {
	  var animationCurve = gaugeItem.animationCurve,
	      animationFrame = gaugeItem.animationFrame,
	      center = gaugeItem.center,
	      rLevel = gaugeItem.rLevel;
	  return [{
	    name: 'polyline',
	    index: rLevel,
	    visible: gaugeItem.pointer.show,
	    animationCurve: animationCurve,
	    animationFrame: animationFrame,
	    shape: getPointerShape(gaugeItem),
	    style: getPointerStyle(gaugeItem),
	    setGraphCenter: function setGraphCenter(foo, graph) {
	      graph.style.graphCenter = center;
	    }
	  }];
	}

	function getPointerShape(gaugeItem) {
	  var center = gaugeItem.center;
	  return {
	    points: getPointerPoints(center),
	    close: true
	  };
	}

	function getPointerStyle(gaugeItem) {
	  var startAngle = gaugeItem.startAngle,
	      endAngle = gaugeItem.endAngle,
	      min = gaugeItem.min,
	      max = gaugeItem.max,
	      data = gaugeItem.data,
	      pointer = gaugeItem.pointer,
	      center = gaugeItem.center;
	  var valueIndex = pointer.valueIndex,
	      style = pointer.style;
	  var value = data[valueIndex] ? data[valueIndex].value : 0;
	  var angle = (value - min) / (max - min) * (endAngle - startAngle) + startAngle + Math.PI / 2;
	  return (0, util$2.deepMerge)({
	    rotate: (0, util$2.radianToAngle)(angle),
	    scale: [1, 1],
	    graphCenter: center
	  }, style);
	}

	function getPointerPoints(_ref8) {
	  var _ref9 = (0, _slicedToArray2["default"])(_ref8, 2),
	      x = _ref9[0],
	      y = _ref9[1];

	  var point1 = [x, y - 40];
	  var point2 = [x + 5, y];
	  var point3 = [x, y + 10];
	  var point4 = [x - 5, y];
	  return [point1, point2, point3, point4];
	}

	function getStartPointerConfig(gaugeItem) {
	  var startAngle = gaugeItem.startAngle;
	  var config = getPointerConfig(gaugeItem)[0];
	  config.style.rotate = (0, util$2.radianToAngle)(startAngle + Math.PI / 2);
	  return [config];
	}

	function getDetailsConfig(gaugeItem) {
	  var detailsPosition = gaugeItem.detailsPosition,
	      animationCurve = gaugeItem.animationCurve,
	      animationFrame = gaugeItem.animationFrame,
	      rLevel = gaugeItem.rLevel;
	  var visible = gaugeItem.details.show;
	  return detailsPosition.map(function (foo, i) {
	    return {
	      name: 'numberText',
	      index: rLevel,
	      visible: visible,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getDetailsShape(gaugeItem, i),
	      style: getDetailsStyle(gaugeItem, i)
	    };
	  });
	}

	function getDetailsShape(gaugeItem, i) {
	  var detailsPosition = gaugeItem.detailsPosition,
	      detailsContent = gaugeItem.detailsContent,
	      data = gaugeItem.data,
	      details = gaugeItem.details;
	  var position = detailsPosition[i];
	  var content = detailsContent[i];
	  var dataValue = data[i].value;
	  var toFixed = details.valueToFixed;
	  return {
	    number: [dataValue],
	    content: content,
	    position: position,
	    toFixed: toFixed
	  };
	}

	function getDetailsStyle(gaugeItem, i) {
	  var details = gaugeItem.details,
	      data = gaugeItem.data;
	  var style = details.style;
	  var color = data[i].color;
	  return (0, util$2.deepMerge)({
	    fill: color
	  }, style);
	}
	});

	unwrapExports(gauge_1$1);
	var gauge_2 = gauge_1$1.gauge;

	var legend_1$1 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.legend = legend;

	var _defineProperty2 = interopRequireDefault$1(defineProperty$1);

	var _slicedToArray2 = interopRequireDefault$1(slicedToArray$1);

	var _typeof2 = interopRequireDefault$1(_typeof_1);









	function legend(chart) {
	  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var legend = option.legend;

	  if (legend) {
	    legend = (0, util$2.deepMerge)((0, util.deepClone)(config.legendConfig, true), legend);
	    legend = initLegendData(legend);
	    legend = filterInvalidData(legend, option, chart);
	    legend = calcLegendTextWidth(legend, chart);
	    legend = calcLegendPosition(legend, chart);
	    legend = [legend];
	  } else {
	    legend = [];
	  }

	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: legend,
	    key: 'legendIcon',
	    getGraphConfig: getIconConfig
	  });
	  (0, updater_class.doUpdate)({
	    chart: chart,
	    series: legend,
	    key: 'legendText',
	    getGraphConfig: getTextConfig
	  });
	}

	function initLegendData(legend) {
	  var data = legend.data;
	  legend.data = data.map(function (item) {
	    var itemType = (0, _typeof2["default"])(item);

	    if (itemType === 'string') {
	      return {
	        name: item
	      };
	    } else if (itemType === 'object') {
	      return item;
	    }

	    return {
	      name: ''
	    };
	  });
	  return legend;
	}

	function filterInvalidData(legend, option, chart) {
	  var series = option.series;
	  var legendStatus = chart.legendStatus;
	  var data = legend.data.filter(function (item) {
	    var name = item.name;
	    var result = series.find(function (_ref) {
	      var sn = _ref.name;
	      return name === sn;
	    });
	    if (!result) return false;
	    if (!item.color) item.color = result.color;
	    if (!item.icon) item.icon = result.type;
	    return item;
	  });
	  if (!legendStatus || legendStatus.length !== legend.data.length) legendStatus = new Array(legend.data.length).fill(true);
	  data.forEach(function (item, i) {
	    return item.status = legendStatus[i];
	  });
	  legend.data = data;
	  chart.legendStatus = legendStatus;
	  return legend;
	}

	function calcLegendTextWidth(legend, chart) {
	  var ctx = chart.render.ctx;
	  var data = legend.data,
	      textStyle = legend.textStyle,
	      textUnselectedStyle = legend.textUnselectedStyle;
	  data.forEach(function (item) {
	    var status = item.status,
	        name = item.name;
	    item.textWidth = getTextWidth(ctx, name, status ? textStyle : textUnselectedStyle);
	  });
	  return legend;
	}

	function getTextWidth(ctx, text, style) {
	  ctx.font = getFontConfig(style);
	  return ctx.measureText(text).width;
	}

	function getFontConfig(style) {
	  var fontFamily = style.fontFamily,
	      fontSize = style.fontSize;
	  return "".concat(fontSize, "px ").concat(fontFamily);
	}

	function calcLegendPosition(legend, chart) {
	  var orient = legend.orient;

	  if (orient === 'vertical') {
	    calcVerticalPosition(legend, chart);
	  } else {
	    calcHorizontalPosition(legend, chart);
	  }

	  return legend;
	}

	function calcHorizontalPosition(legend, chart) {
	  var iconHeight = legend.iconHeight,
	      itemGap = legend.itemGap;
	  var lines = calcDefaultHorizontalPosition(legend, chart);
	  var xOffsets = lines.map(function (line) {
	    return getHorizontalXOffset(line, legend, chart);
	  });
	  var yOffset = getHorizontalYOffset(legend, chart);
	  var align = {
	    textAlign: 'left',
	    textBaseline: 'middle'
	  };
	  lines.forEach(function (line, i) {
	    return line.forEach(function (item) {
	      var iconPosition = item.iconPosition,
	          textPosition = item.textPosition;
	      var xOffset = xOffsets[i];
	      var realYOffset = yOffset + i * (itemGap + iconHeight);
	      item.iconPosition = mergeOffset(iconPosition, [xOffset, realYOffset]);
	      item.textPosition = mergeOffset(textPosition, [xOffset, realYOffset]);
	      item.align = align;
	    });
	  });
	}

	function calcDefaultHorizontalPosition(legend, chart) {
	  var data = legend.data,
	      iconWidth = legend.iconWidth;
	  var w = chart.render.area[0];
	  var startIndex = 0;
	  var lines = [[]];
	  data.forEach(function (item, i) {
	    var beforeWidth = getBeforeWidth(startIndex, i, legend);
	    var endXPos = beforeWidth + iconWidth + 5 + item.textWidth;

	    if (endXPos >= w) {
	      startIndex = i;
	      beforeWidth = getBeforeWidth(startIndex, i, legend);
	      lines.push([]);
	    }

	    item.iconPosition = [beforeWidth, 0];
	    item.textPosition = [beforeWidth + iconWidth + 5, 0];
	    lines.slice(-1)[0].push(item);
	  });
	  return lines;
	}

	function getBeforeWidth(startIndex, currentIndex, legend) {
	  var data = legend.data,
	      iconWidth = legend.iconWidth,
	      itemGap = legend.itemGap;
	  var beforeItem = data.slice(startIndex, currentIndex);
	  return (0, util$2.mulAdd)(beforeItem.map(function (_ref2) {
	    var textWidth = _ref2.textWidth;
	    return textWidth;
	  })) + (currentIndex - startIndex) * (itemGap + 5 + iconWidth);
	}

	function getHorizontalXOffset(data, legend, chart) {
	  var left = legend.left,
	      right = legend.right,
	      iconWidth = legend.iconWidth,
	      itemGap = legend.itemGap;
	  var w = chart.render.area[0];
	  var dataNum = data.length;
	  var allWidth = (0, util$2.mulAdd)(data.map(function (_ref3) {
	    var textWidth = _ref3.textWidth;
	    return textWidth;
	  })) + dataNum * (5 + iconWidth) + (dataNum - 1) * itemGap;
	  var horizontal = [left, right].findIndex(function (pos) {
	    return pos !== 'auto';
	  });

	  if (horizontal === -1) {
	    return (w - allWidth) / 2;
	  } else if (horizontal === 0) {
	    if (typeof left === 'number') return left;
	    return parseInt(left) / 100 * w;
	  } else {
	    if (typeof right !== 'number') right = parseInt(right) / 100 * w;
	    return w - (allWidth + right);
	  }
	}

	function getHorizontalYOffset(legend, chart) {
	  var top = legend.top,
	      bottom = legend.bottom,
	      iconHeight = legend.iconHeight;
	  var h = chart.render.area[1];
	  var vertical = [top, bottom].findIndex(function (pos) {
	    return pos !== 'auto';
	  });
	  var halfIconHeight = iconHeight / 2;

	  if (vertical === -1) {
	    var _chart$gridArea = chart.gridArea,
	        y = _chart$gridArea.y,
	        height = _chart$gridArea.h;
	    return y + height + 45 - halfIconHeight;
	  } else if (vertical === 0) {
	    if (typeof top === 'number') return top - halfIconHeight;
	    return parseInt(top) / 100 * h - halfIconHeight;
	  } else {
	    if (typeof bottom !== 'number') bottom = parseInt(bottom) / 100 * h;
	    return h - bottom - halfIconHeight;
	  }
	}

	function mergeOffset(_ref4, _ref5) {
	  var _ref6 = (0, _slicedToArray2["default"])(_ref4, 2),
	      x = _ref6[0],
	      y = _ref6[1];

	  var _ref7 = (0, _slicedToArray2["default"])(_ref5, 2),
	      ox = _ref7[0],
	      oy = _ref7[1];

	  return [x + ox, y + oy];
	}

	function calcVerticalPosition(legend, chart) {
	  var _getVerticalXOffset = getVerticalXOffset(legend, chart),
	      _getVerticalXOffset2 = (0, _slicedToArray2["default"])(_getVerticalXOffset, 2),
	      isRight = _getVerticalXOffset2[0],
	      xOffset = _getVerticalXOffset2[1];

	  var yOffset = getVerticalYOffset(legend, chart);
	  calcDefaultVerticalPosition(legend, isRight);
	  var align = {
	    textAlign: 'left',
	    textBaseline: 'middle'
	  };
	  legend.data.forEach(function (item) {
	    var textPosition = item.textPosition,
	        iconPosition = item.iconPosition;
	    item.textPosition = mergeOffset(textPosition, [xOffset, yOffset]);
	    item.iconPosition = mergeOffset(iconPosition, [xOffset, yOffset]);
	    item.align = align;
	  });
	}

	function getVerticalXOffset(legend, chart) {
	  var left = legend.left,
	      right = legend.right;
	  var w = chart.render.area[0];
	  var horizontal = [left, right].findIndex(function (pos) {
	    return pos !== 'auto';
	  });

	  if (horizontal === -1) {
	    return [true, w - 10];
	  } else {
	    var offset = [left, right][horizontal];
	    if (typeof offset !== 'number') offset = parseInt(offset) / 100 * w;
	    return [Boolean(horizontal), offset];
	  }
	}

	function getVerticalYOffset(legend, chart) {
	  var iconHeight = legend.iconHeight,
	      itemGap = legend.itemGap,
	      data = legend.data,
	      top = legend.top,
	      bottom = legend.bottom;
	  var h = chart.render.area[1];
	  var dataNum = data.length;
	  var allHeight = dataNum * iconHeight + (dataNum - 1) * itemGap;
	  var vertical = [top, bottom].findIndex(function (pos) {
	    return pos !== 'auto';
	  });

	  if (vertical === -1) {
	    return (h - allHeight) / 2;
	  } else {
	    var offset = [top, bottom][vertical];
	    if (typeof offset !== 'number') offset = parseInt(offset) / 100 * h;
	    if (vertical === 1) offset = h - offset - allHeight;
	    return offset;
	  }
	}

	function calcDefaultVerticalPosition(legend, isRight) {
	  var data = legend.data,
	      iconWidth = legend.iconWidth,
	      iconHeight = legend.iconHeight,
	      itemGap = legend.itemGap;
	  var halfIconHeight = iconHeight / 2;
	  data.forEach(function (item, i) {
	    var textWidth = item.textWidth;
	    var yPos = (iconHeight + itemGap) * i + halfIconHeight;
	    var iconXPos = isRight ? 0 - iconWidth : 0;
	    var textXpos = isRight ? iconXPos - 5 - textWidth : iconWidth + 5;
	    item.iconPosition = [iconXPos, yPos];
	    item.textPosition = [textXpos, yPos];
	  });
	}

	function getIconConfig(legendItem, updater) {
	  var data = legendItem.data,
	      selectAble = legendItem.selectAble,
	      animationCurve = legendItem.animationCurve,
	      animationFrame = legendItem.animationFrame,
	      rLevel = legendItem.rLevel;
	  return data.map(function (item, i) {
	    return (0, _defineProperty2["default"])({
	      name: item.icon === 'line' ? 'lineIcon' : 'rect',
	      index: rLevel,
	      visible: legendItem.show,
	      hover: selectAble,
	      click: selectAble,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getIconShape(legendItem, i),
	      style: getIconStyle(legendItem, i)
	    }, "click", createClickCallBack(legendItem, i, updater));
	  });
	}

	function getIconShape(legendItem, i) {
	  var data = legendItem.data,
	      iconWidth = legendItem.iconWidth,
	      iconHeight = legendItem.iconHeight;

	  var _data$i$iconPosition = (0, _slicedToArray2["default"])(data[i].iconPosition, 2),
	      x = _data$i$iconPosition[0],
	      y = _data$i$iconPosition[1];

	  var halfIconHeight = iconHeight / 2;
	  return {
	    x: x,
	    y: y - halfIconHeight,
	    w: iconWidth,
	    h: iconHeight
	  };
	}

	function getIconStyle(legendItem, i) {
	  var data = legendItem.data,
	      iconStyle = legendItem.iconStyle,
	      iconUnselectedStyle = legendItem.iconUnselectedStyle;
	  var _data$i = data[i],
	      status = _data$i.status,
	      color = _data$i.color;
	  var style = status ? iconStyle : iconUnselectedStyle;
	  return (0, util$2.deepMerge)({
	    fill: color
	  }, style);
	}

	function getTextConfig(legendItem, updater) {
	  var data = legendItem.data,
	      selectAble = legendItem.selectAble,
	      animationCurve = legendItem.animationCurve,
	      animationFrame = legendItem.animationFrame,
	      rLevel = legendItem.rLevel;
	  return data.map(function (foo, i) {
	    return {
	      name: 'text',
	      index: rLevel,
	      visible: legendItem.show,
	      hover: selectAble,
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      hoverRect: getTextHoverRect(legendItem, i),
	      shape: getTextShape(legendItem, i),
	      style: getTextStyle(legendItem, i),
	      click: createClickCallBack(legendItem, i, updater)
	    };
	  });
	}

	function getTextShape(legendItem, i) {
	  var _legendItem$data$i = legendItem.data[i],
	      textPosition = _legendItem$data$i.textPosition,
	      name = _legendItem$data$i.name;
	  return {
	    content: name,
	    position: textPosition
	  };
	}

	function getTextStyle(legendItem, i) {
	  var textStyle = legendItem.textStyle,
	      textUnselectedStyle = legendItem.textUnselectedStyle;
	  var _legendItem$data$i2 = legendItem.data[i],
	      status = _legendItem$data$i2.status,
	      align = _legendItem$data$i2.align;
	  var style = status ? textStyle : textUnselectedStyle;
	  return (0, util$2.deepMerge)((0, util.deepClone)(style, true), align);
	}

	function getTextHoverRect(legendItem, i) {
	  var textStyle = legendItem.textStyle,
	      textUnselectedStyle = legendItem.textUnselectedStyle;

	  var _legendItem$data$i3 = legendItem.data[i],
	      status = _legendItem$data$i3.status,
	      _legendItem$data$i3$t = (0, _slicedToArray2["default"])(_legendItem$data$i3.textPosition, 2),
	      x = _legendItem$data$i3$t[0],
	      y = _legendItem$data$i3$t[1],
	      textWidth = _legendItem$data$i3.textWidth;

	  var style = status ? textStyle : textUnselectedStyle;
	  var fontSize = style.fontSize;
	  return [x, y - fontSize / 2, textWidth, fontSize];
	}

	function createClickCallBack(legendItem, index, updater) {
	  var name = legendItem.data[index].name;
	  return function () {
	    var _updater$chart = updater.chart,
	        legendStatus = _updater$chart.legendStatus,
	        option = _updater$chart.option;
	    var status = !legendStatus[index];
	    var change = option.series.find(function (_ref9) {
	      var sn = _ref9.name;
	      return sn === name;
	    });
	    change.show = status;
	    legendStatus[index] = status;
	    updater.chart.setOption(option);
	  };
	}
	});

	unwrapExports(legend_1$1);
	var legend_2 = legend_1$1.legend;

	var core = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "mergeColor", {
	  enumerable: true,
	  get: function get() {
	    return mergeColor_1.mergeColor;
	  }
	});
	Object.defineProperty(exports, "title", {
	  enumerable: true,
	  get: function get() {
	    return title_1$1.title;
	  }
	});
	Object.defineProperty(exports, "grid", {
	  enumerable: true,
	  get: function get() {
	    return grid_1$1.grid;
	  }
	});
	Object.defineProperty(exports, "axis", {
	  enumerable: true,
	  get: function get() {
	    return axis_1$1.axis;
	  }
	});
	Object.defineProperty(exports, "line", {
	  enumerable: true,
	  get: function get() {
	    return line_1$1.line;
	  }
	});
	Object.defineProperty(exports, "bar", {
	  enumerable: true,
	  get: function get() {
	    return bar_1$1.bar;
	  }
	});
	Object.defineProperty(exports, "pie", {
	  enumerable: true,
	  get: function get() {
	    return pie_1$1.pie;
	  }
	});
	Object.defineProperty(exports, "radarAxis", {
	  enumerable: true,
	  get: function get() {
	    return radarAxis_1$1.radarAxis;
	  }
	});
	Object.defineProperty(exports, "radar", {
	  enumerable: true,
	  get: function get() {
	    return radar_1$1.radar;
	  }
	});
	Object.defineProperty(exports, "gauge", {
	  enumerable: true,
	  get: function get() {
	    return gauge_1$1.gauge;
	  }
	});
	Object.defineProperty(exports, "legend", {
	  enumerable: true,
	  get: function get() {
	    return legend_1$1.legend;
	  }
	});
	});

	unwrapExports(core);

	var charts_class = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _typeof2 = interopRequireDefault$1(_typeof_1);

	var _classCallCheck2 = interopRequireDefault$1(classCallCheck$1);



	var _cRender = interopRequireDefault$1(lib$3);





	var Charts = function Charts(dom) {
	  (0, _classCallCheck2["default"])(this, Charts);

	  if (!dom) {
	    console.error('Charts Missing parameters!');
	    return false;
	  }

	  var clientWidth = dom.clientWidth,
	      clientHeight = dom.clientHeight;
	  var canvas = document.createElement('canvas');
	  canvas.setAttribute('width', clientWidth);
	  canvas.setAttribute('height', clientHeight);
	  dom.appendChild(canvas);
	  var attribute = {
	    container: dom,
	    canvas: canvas,
	    render: new _cRender["default"](canvas),
	    option: null
	  };
	  Object.assign(this, attribute);
	};
	/**
	 * @description Set chart option
	 * @param {Object} option Chart option
	 * @return {Undefined} No return
	 */


	exports["default"] = Charts;

	Charts.prototype.setOption = function (option) {
	  if (!option || (0, _typeof2["default"])(option) !== 'object') {
	    console.error('setOption Missing parameters!');
	    return false;
	  }

	  var optionCloned = (0, util.deepClone)(option, true);
	  (0, core.mergeColor)(this, optionCloned);
	  (0, core.grid)(this, optionCloned);
	  (0, core.axis)(this, optionCloned);
	  (0, core.radarAxis)(this, optionCloned);
	  (0, core.title)(this, optionCloned);
	  (0, core.bar)(this, optionCloned);
	  (0, core.line)(this, optionCloned);
	  (0, core.pie)(this, optionCloned);
	  (0, core.radar)(this, optionCloned);
	  (0, core.gauge)(this, optionCloned);
	  (0, core.legend)(this, optionCloned);
	  this.option = option;
	  this.render.launchAnimation(); // console.warn(this)
	};
	/**
	 * @description Resize chart
	 * @return {Undefined} No return
	 */


	Charts.prototype.resize = function () {
	  var container = this.container,
	      canvas = this.canvas,
	      render = this.render,
	      option = this.option;
	  var clientWidth = container.clientWidth,
	      clientHeight = container.clientHeight;
	  canvas.setAttribute('width', clientWidth);
	  canvas.setAttribute('height', clientHeight);
	  render.area = [clientWidth, clientHeight];
	  this.setOption(option);
	};
	});

	unwrapExports(charts_class);

	var lib$4 = createCommonjsModule(function (module, exports) {



	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "changeDefaultConfig", {
	  enumerable: true,
	  get: function get() {
	    return config.changeDefaultConfig;
	  }
	});
	exports["default"] = void 0;

	var _charts = interopRequireDefault$1(charts_class);



	var _default = _charts["default"];
	exports["default"] = _default;
	});

	var Charts = unwrapExports(lib$4);

	var css$m = ".dv-charts-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-charts-container .charts-canvas-container {\n  width: 100%;\n  height: 100%;\n}\n";
	styleInject(css$m);

	var Charts$1 = function Charts$$1(_ref) {
	  var _ref$option = _ref.option,
	      option = _ref$option === undefined ? {} : _ref$option,
	      className = _ref.className,
	      style = _ref.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var chartRef = React.useRef(null);

	  var chartInstanceofRef = React.useRef(null);

	  React.useEffect(function () {
	    chartInstanceofRef.current || (chartInstanceofRef.current = new Charts(chartRef.current));

	    chartInstanceofRef.current.setOption(option || {});
	  }, [option]);

	  React.useEffect(function () {
	    chartInstanceofRef.current.resize();
	  }, [width, height]);

	  var classNames = React.useMemo(function () {
	    return classnames('dv-charts-container', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement('div', { className: 'charts-canvas-container', ref: chartRef })
	  );
	};

	Charts$1.propTypes = {
	  option: propTypes.object,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};Charts$1.defaultProps = {
	  option: {}
	};

	var css$n = ".dv-digital-flop canvas {\n  width: 100%;\n  height: 100%;\n}\n";
	styleInject(css$n);

	var defaultConfig = {
	  /**
	   * @description Number for digital flop
	   * @type {Array<Number>}
	   * @default number = []
	   * @example number = [10]
	   */
	  number: [],
	  /**
	   * @description Content formatter
	   * @type {String}
	   * @default content = ''
	   * @example content = '{nt}个'
	   */
	  content: '',
	  /**
	   * @description Number toFixed
	   * @type {Number}
	   * @default toFixed = 0
	   */
	  toFixed: 0,
	  /**
	   * @description Text align
	   * @type {String}
	   * @default textAlign = 'center'
	   * @example textAlign = 'center' | 'left' | 'right'
	   */
	  textAlign: 'center',
	  /**
	   * @description Text style configuration
	   * @type {Object} {CRender Class Style}
	   */
	  style: {
	    fontSize: 30,
	    fill: '#3de7c9'
	  },
	  /**
	   * @description CRender animationCurve
	   * @type {String}
	   * @default animationCurve = 'easeOutCubic'
	   */
	  animationCurve: 'easeOutCubic',
	  /**
	   * @description CRender animationFrame
	   * @type {String}
	   * @default animationFrame = 50
	   */
	  animationFrame: 50
	};

	var DigitalFlop = function DigitalFlop(_ref) {
	  var _ref$config = _ref.config,
	      config = _ref$config === undefined ? {} : _ref$config,
	      className = _ref.className,
	      style = _ref.style;

	  var domRef = React.useRef(null);
	  var rendererRef = React.useRef(null);
	  var graphRef = React.useRef(null);

	  var mergedConfigRef = React.useRef(null);

	  var mountedRef = React.useRef(true);

	  function init() {
	    rendererRef.current = new CRender(domRef.current);

	    mergedConfigRef.current = getMergedConfig();

	    graphRef.current = getGraph();
	  }

	  var getMergedConfig = function getMergedConfig() {
	    return util_2$1(util_1(defaultConfig, true), config || {});
	  };

	  function getGraph() {
	    var _mergedConfigRef$curr = mergedConfigRef.current,
	        animationCurve = _mergedConfigRef$curr.animationCurve,
	        animationFrame = _mergedConfigRef$curr.animationFrame;


	    return rendererRef.current.add({
	      name: 'numberText',
	      animationCurve: animationCurve,
	      animationFrame: animationFrame,
	      shape: getShape(),
	      style: getStyle()
	    });
	  }

	  function getShape() {
	    var _mergedConfigRef$curr2 = mergedConfigRef.current,
	        number = _mergedConfigRef$curr2.number,
	        content = _mergedConfigRef$curr2.content,
	        toFixed = _mergedConfigRef$curr2.toFixed,
	        textAlign = _mergedConfigRef$curr2.textAlign;

	    var _rendererRef$current$ = slicedToArray(rendererRef.current.area, 2),
	        w = _rendererRef$current$[0],
	        h = _rendererRef$current$[1];

	    var position = [w / 2, h / 2];

	    if (textAlign === 'left') position[0] = 0;
	    if (textAlign === 'right') position[0] = w;

	    return { number: number, content: content, toFixed: toFixed, position: position };
	  }

	  function getStyle() {
	    var _mergedConfigRef$curr3 = mergedConfigRef.current,
	        style = _mergedConfigRef$curr3.style,
	        textAlign = _mergedConfigRef$curr3.textAlign;


	    return util_2$1(style, {
	      textAlign: textAlign,
	      textBaseline: 'middle'
	    });
	  }

	  React.useEffect(init, []);

	  function update() {
	    var mergedConfig = mergedConfigRef.current = getMergedConfig();
	    var graph = graphRef.current;

	    var shape = getShape();

	    var cacheNum = graph.shape.number.length;
	    var shapeNum = shape.number.length;

	    cacheNum !== shapeNum && (graph.shape.number = shape.number);

	    var animationCurve = mergedConfig.animationCurve,
	        animationFrame = mergedConfig.animationFrame;


	    Object.assign(graph, { animationCurve: animationCurve, animationFrame: animationFrame });

	    graph.animation('style', getStyle(), true);
	    graph.animation('shape', shape);
	  }

	  React.useEffect(function () {
	    !mountedRef.current && update();

	    return function () {
	      mountedRef.current = false;
	    };
	  }, [config]);

	  var classNames = React.useMemo(function () {
	    return classnames('dv-digital-flop', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style },
	    React__default.createElement('canvas', { ref: domRef })
	  );
	};

	DigitalFlop.propTypes = {
	  config: propTypes.object,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};DigitalFlop.defaultProps = {
	  config: {}
	};

	var css$o = ".dv-active-ring-chart {\n  position: relative;\n}\n.dv-active-ring-chart .active-ring-chart-container {\n  width: 100%;\n  height: 100%;\n}\n.dv-active-ring-chart .active-ring-info {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.dv-active-ring-chart .active-ring-info .dv-digital-flop {\n  width: 100px;\n  height: 30px;\n}\n.dv-active-ring-chart .active-ring-info .active-ring-name {\n  width: 100px;\n  height: 30px;\n  color: #fff;\n  text-align: center;\n  vertical-align: middle;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n";
	styleInject(css$o);

	var defaultConfig$1 = {
	  /**
	   * @description Ring radius
	   * @type {String|Number}
	   * @default radius = '50%'
	   * @example radius = '50%' | 100
	   */
	  radius: '50%',
	  /**
	   * @description Active ring radius
	   * @type {String|Number}
	   * @default activeRadius = '55%'
	   * @example activeRadius = '55%' | 110
	   */
	  activeRadius: '55%',
	  /**
	   * @description Ring data
	   * @type {Array<Object>}
	   * @default data = [{ name: '', value: 0 }]
	   */
	  data: [{ name: '', value: 0 }],
	  /**
	   * @description Ring line width
	   * @type {Number}
	   * @default lineWidth = 20
	   */
	  lineWidth: 20,
	  /**
	   * @description Active time gap (ms)
	   * @type {Number}
	   * @default activeTimeGap = 3000
	   */
	  activeTimeGap: 3000,
	  /**
	   * @description Ring color (hex|rgb|rgba|color keywords)
	   * @type {Array<String>}
	   * @default color = [Charts Default Color]
	   * @example color = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
	   */
	  color: [],
	  /**
	   * @description Digital flop style
	   * @type {Object}
	   */
	  digitalFlopStyle: {
	    fontSize: 25,
	    fill: '#fff'
	  },
	  /**
	   * @description CRender animationCurve
	   * @type {String}
	   * @default animationCurve = 'easeOutCubic'
	   */
	  animationCurve: 'easeOutCubic',
	  /**
	   * @description CRender animationFrame
	   * @type {String}
	   * @default animationFrame = 50
	   */
	  animationFrame: 50
	};

	var ActiveRingChart = function ActiveRingChart(_ref) {
	  var _ref$config = _ref.config,
	      config = _ref$config === undefined ? {} : _ref$config,
	      className = _ref.className,
	      style = _ref.style;

	  var _useState = React.useState({
	    activeIndex: 0,
	    mergedConfig: null
	  }),
	      _useState2 = slicedToArray(_useState, 2),
	      _useState2$ = _useState2[0],
	      activeIndex = _useState2$.activeIndex,
	      mergedConfig = _useState2$.mergedConfig,
	      setState = _useState2[1];

	  var domRef = React.useRef(null);
	  var chartRef = React.useRef(null);

	  var digitalFlop = React.useMemo(function () {
	    if (!mergedConfig) return {};

	    var digitalFlopStyle = mergedConfig.digitalFlopStyle,
	        data = mergedConfig.data;


	    var value = data.map(function (_ref2) {
	      var value = _ref2.value;
	      return value;
	    });

	    var sum = value.reduce(function (all, v) {
	      return all + v;
	    }, 0);

	    var percent = parseInt(value[activeIndex] / sum * 100);

	    return { content: '{nt}%', number: [percent], style: digitalFlopStyle };
	  }, [mergedConfig, activeIndex]);

	  var ringName = React.useMemo(function () {
	    return !mergedConfig ? '' : mergedConfig.data[activeIndex].name;
	  }, [mergedConfig, activeIndex]);

	  var fontSize = React.useMemo(function () {
	    return !mergedConfig ? {} : { fontSize: mergedConfig.digitalFlopStyle.fontSize + 'px' };
	  }, [mergedConfig]);

	  function getRingOption(mergedConfig) {
	    var radius = getRealRadius(mergedConfig);

	    var newMergedConfig = _extends({}, mergedConfig, {
	      data: mergedConfig.data.map(function (item) {
	        return _extends({}, item, { radius: radius });
	      })
	    });

	    return {
	      series: [_extends({
	        type: 'pie'
	      }, newMergedConfig, {
	        outsideLabel: {
	          show: false
	        }
	      })],
	      color: newMergedConfig.color
	    };
	  }

	  function getRealRadius(_ref3) {
	    var radius = _ref3.radius,
	        activeRadius = _ref3.activeRadius,
	        lineWidth = _ref3.lineWidth;
	    var active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	    var maxRadius = Math.min.apply(Math, toConsumableArray(chartRef.current.render.area)) / 2;

	    var halfLineWidth = lineWidth / 2;

	    var realRadius = active ? activeRadius : radius;

	    if (typeof realRadius !== 'number') {
	      realRadius = parseInt(realRadius) / 100 * maxRadius;
	    }

	    var insideRadius = realRadius - halfLineWidth;
	    var outSideRadius = realRadius + halfLineWidth;

	    return [insideRadius, outSideRadius];
	  }

	  function getOption(mergedConfig, activeIndex) {
	    var radius = getRealRadius(mergedConfig);
	    var active = getRealRadius(mergedConfig, true);

	    var option = getRingOption(mergedConfig);

	    option = _extends({}, option, {
	      series: option.series.reduce(function (prev, serie, index$$1) {
	        return index$$1 !== 0 ? [].concat(toConsumableArray(prev), [serie]) : [].concat(toConsumableArray(prev), [_extends({}, serie, {
	          data: serie.data.map(function (item, i) {
	            return _extends({}, item, {
	              radius: i === activeIndex ? active : radius
	            });
	          })
	        })]);
	      }, [])
	    });

	    return option;
	  }

	  React.useEffect(function () {
	    var _marked = /*#__PURE__*/regeneratorRuntime.mark(loop);

	    // 第一次时初始化
	    chartRef.current || (chartRef.current = new Charts(domRef.current));

	    var mergedConfig = util_2$1(util_1(defaultConfig$1, true), config || {});

	    chartRef.current.setOption(getRingOption(mergedConfig));

	    var activeIndex = 0;

	    setState({ mergedConfig: mergedConfig, activeIndex: activeIndex });

	    function loop() {
	      var _this = this;

	      var _loop;

	      return regeneratorRuntime.wrap(function loop$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
	                var option, _option$series$, activeTimeGap, data;

	                return regeneratorRuntime.wrap(function _loop$(_context) {
	                  while (1) {
	                    switch (_context.prev = _context.next) {
	                      case 0:
	                        option = getOption(mergedConfig, activeIndex);


	                        chartRef.current.setOption(option);

	                        _option$series$ = option.series[0], activeTimeGap = _option$series$.activeTimeGap, data = _option$series$.data;
	                        _context.next = 5;
	                        return new Promise(function (resolve) {
	                          return setTimeout(resolve, activeTimeGap);
	                        });

	                      case 5:

	                        activeIndex += 1;

	                        if (activeIndex >= data.length) {
	                          activeIndex = 0;
	                        }

	                        setState(function (state) {
	                          return _extends({}, state, { activeIndex: activeIndex });
	                        });

	                      case 8:
	                      case 'end':
	                        return _context.stop();
	                    }
	                  }
	                }, _loop, _this);
	              });

	            case 1:

	              return _context2.delegateYield(_loop(), 't0', 3);

	            case 3:
	              _context2.next = 1;
	              break;

	            case 5:
	            case 'end':
	              return _context2.stop();
	          }
	        }
	      }, _marked, this);
	    }

	    var it = loop();

	    co(it);

	    return function () {
	      return it.return();
	    };
	  }, [config]);

	  var classNames = React.useMemo(function () {
	    return classnames('dv-active-ring-chart', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style },
	    React__default.createElement('div', { className: 'active-ring-chart-container', ref: domRef }),
	    React__default.createElement(
	      'div',
	      { className: 'active-ring-info' },
	      React__default.createElement(DigitalFlop, { config: digitalFlop }),
	      React__default.createElement(
	        'div',
	        { className: 'active-ring-name', style: fontSize },
	        ringName
	      )
	    )
	  );
	};

	ActiveRingChart.propTypes = {
	  config: propTypes.object,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};ActiveRingChart.defaultProps = {
	  config: {}
	};

	var css$p = ".dv-capsule-chart {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  padding: 10px;\n  color: #fff;\n}\n.dv-capsule-chart .label-column {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding-right: 10px;\n  text-align: right;\n  font-size: 12px;\n}\n.dv-capsule-chart .label-column div {\n  height: 20px;\n  line-height: 20px;\n}\n.dv-capsule-chart .capsule-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.dv-capsule-chart .capsule-item {\n  box-shadow: 0 0 3px #999;\n  height: 10px;\n  margin: 5px 0px;\n  border-radius: 5px;\n}\n.dv-capsule-chart .capsule-item div {\n  height: 8px;\n  margin-top: 1px;\n  border-radius: 5px;\n  transition: all 0.3s;\n}\n.dv-capsule-chart .unit-label {\n  height: 20px;\n  font-size: 12px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.dv-capsule-chart .unit-text {\n  text-align: right;\n  display: flex;\n  align-items: flex-end;\n  font-size: 12px;\n  line-height: 20px;\n  margin-left: 10px;\n}\n";
	styleInject(css$p);

	var defaultConfig$2 = {
	  /**
	   * @description Capsule chart data
	   * @type {Array<Object>}
	   * @default data = []
	   * @example data = [{ name: 'foo1', value: 100 }, { name: 'foo2', value: 100 }]
	   */
	  data: [],
	  /**
	   * @description Colors (hex|rgb|rgba|color keywords)
	   * @type {Array<String>}
	   * @default color = ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']
	   * @example color = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
	   */
	  colors: ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293'],
	  /**
	   * @description Chart unit
	   * @type {String}
	   * @default unit = ''
	   */
	  unit: ''
	};

	var CapsuleChart = function CapsuleChart(_ref) {
	  var _ref$config = _ref.config,
	      config = _ref$config === undefined ? {} : _ref$config,
	      className = _ref.className,
	      style = _ref.style;

	  var _useState = React.useState({
	    mergedConfig: null,
	    labelData: [],
	    capsuleLength: []
	  }),
	      _useState2 = slicedToArray(_useState, 2),
	      _useState2$ = _useState2[0],
	      mergedConfig = _useState2$.mergedConfig,
	      labelData = _useState2$.labelData,
	      capsuleLength = _useState2$.capsuleLength,
	      setState = _useState2[1];

	  React.useEffect(function () {
	    var mergedConfig = util_2$1(util_1(defaultConfig$2, true), config || {});

	    var data = mergedConfig.data;


	    if (!data.length) return;

	    var capsuleValue = data.map(function (_ref2) {
	      var value = _ref2.value;
	      return value;
	    });

	    var maxValue = Math.max.apply(Math, toConsumableArray(capsuleValue));

	    var oneFifth = maxValue / 5;

	    setState({
	      mergedConfig: mergedConfig,
	      capsuleLength: capsuleValue.map(function (v) {
	        return maxValue ? v / maxValue : 0;
	      }),
	      labelData: new Array(6).fill(0).map(function (v, i) {
	        return Math.ceil(i * oneFifth);
	      })
	    });
	  }, [config]);

	  var classNames = React.useMemo(function () {
	    return classnames('dv-capsule-chart', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style },
	    !!mergedConfig && React__default.createElement(
	      React__default.Fragment,
	      null,
	      React__default.createElement(
	        'div',
	        { className: 'label-column' },
	        mergedConfig.data.map(function (_ref3) {
	          var name = _ref3.name;
	          return React__default.createElement(
	            'div',
	            { key: name },
	            name
	          );
	        }),
	        React__default.createElement(
	          'div',
	          null,
	          '\xA0'
	        )
	      ),
	      React__default.createElement(
	        'div',
	        { className: 'capsule-container' },
	        capsuleLength.map(function (capsule, index$$1) {
	          return React__default.createElement(
	            'div',
	            { className: 'capsule-item', key: index$$1 },
	            React__default.createElement('div', {
	              style: {
	                width: capsule * 100 + '%',
	                backgroundColor: '' + mergedConfig.colors[index$$1 % mergedConfig.colors.length]
	              }
	            })
	          );
	        }),
	        React__default.createElement(
	          'div',
	          { className: 'unit-label' },
	          labelData.map(function (label, index$$1) {
	            return React__default.createElement(
	              'div',
	              { key: label + index$$1 },
	              label
	            );
	          })
	        )
	      ),
	      !!mergedConfig.unit && React__default.createElement(
	        'div',
	        { className: 'unit-text' },
	        mergedConfig.unit
	      )
	    )
	  );
	};

	CapsuleChart.propTypes = {
	  config: propTypes.object,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};CapsuleChart.defaultProps = {
	  config: {}
	};

	var css$q = ".dv-water-pond-level {\n  position: relative;\n}\n.dv-water-pond-level svg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n.dv-water-pond-level text {\n  font-size: 25px;\n  font-weight: bold;\n  text-anchor: middle;\n  dominant-baseline: middle;\n}\n.dv-water-pond-level ellipse,\n.dv-water-pond-level rect {\n  fill: none;\n  stroke-width: 3;\n}\n.dv-water-pond-level canvas {\n  margin-top: 8px;\n  margin-left: 8px;\n  width: calc(100% - 16px);\n  height: calc(100% - 16px);\n  box-sizing: border-box;\n}\n";
	styleInject(css$q);

	var defaultConfig$3 = {
	  /**
	   * @description Data
	   * @type {Array<Number>}
	   * @default data = []
	   * @example data = [60, 40]
	   */
	  data: [],
	  /**
	   * @description Shape of wanter level pond
	   * @type {String}
	   * @default shape = 'rect'
	   * @example shape = 'rect' | 'roundRect' | 'round'
	   */
	  shape: 'rect',
	  /**
	   * @description Water wave number
	   * @type {Number}
	   * @default waveNum = 3
	   */
	  waveNum: 3,
	  /**
	   * @description Water wave height (px)
	   * @type {Number}
	   * @default waveHeight = 40
	   */
	  waveHeight: 40,
	  /**
	   * @description Wave opacity
	   * @type {Number}
	   * @default waveOpacity = 0.4
	   */
	  waveOpacity: 0.4,
	  /**
	   * @description Colors (hex|rgb|rgba|color keywords)
	   * @type {Array<String>}
	   * @default colors = ['#00BAFF', '#3DE7C9']
	   * @example colors = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
	   */
	  colors: ['#3DE7C9', '#00BAFF'],
	  /**
	   * @description Formatter
	   * @type {String}
	   * @default formatter = '{value}%'
	   */
	  formatter: '{value}%'
	};

	function drawed(_ref, _ref2) {
	  var points = _ref.shape.points;
	  var ctx = _ref2.ctx,
	      area = _ref2.area;

	  var firstPoint = points[0];
	  var lastPoint = points.slice(-1)[0];

	  var h = area[1];

	  ctx.lineTo(lastPoint[0], h);
	  ctx.lineTo(firstPoint[0], h);

	  ctx.closePath();

	  ctx.fill();
	}

	function mergeOffset(_ref3, _ref4) {
	  var _ref6 = slicedToArray(_ref3, 2),
	      x = _ref6[0],
	      y = _ref6[1];

	  var _ref5 = slicedToArray(_ref4, 2),
	      ox = _ref5[0],
	      oy = _ref5[1];

	  return [x + ox, y + oy];
	}

	var WaterLevelPond = function WaterLevelPond(_ref7) {
	  var animationWave = function () {
	    var _ref12 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	      var repeat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	      var waves, renderer, animation, w;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              waves = wavesRef.current;
	              renderer = rendererRef.current;
	              animation = animationRef.current;

	              if (!animation) {
	                _context.next = 5;
	                break;
	              }

	              return _context.abrupt('return');

	            case 5:

	              animationRef.current = true;

	              w = renderer.area[0];


	              waves.forEach(function (graph) {
	                graph.attr('style', { translate: [0, 0] });

	                graph.animation('style', {
	                  translate: [w, 0]
	                }, true);
	              });

	              _context.next = 10;
	              return renderer.launchAnimation();

	            case 10:

	              animationRef.current = false;

	              if (renderer.graphs.length) {
	                _context.next = 13;
	                break;
	              }

	              return _context.abrupt('return');

	            case 13:

	              animationWave(repeat + 1);

	            case 14:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));

	    return function animationWave() {
	      return _ref12.apply(this, arguments);
	    };
	  }();

	  var config = _ref7.config,
	      className = _ref7.className,
	      style = _ref7.style;

	  var _useState = React.useState({
	    mergedConfig: {},

	    svgBorderGradient: [],

	    details: ''
	  }),
	      _useState2 = slicedToArray(_useState, 2),
	      _useState2$ = _useState2[0],
	      mergedConfig = _useState2$.mergedConfig,
	      svgBorderGradient = _useState2$.svgBorderGradient,
	      details = _useState2$.details,
	      setState = _useState2[1];

	  var gradientId = React.useRef('water-level-pond-' + Date.now()).current;

	  var wavesRef = React.useRef([]);

	  var rendererRef = React.useRef(null);
	  var renderer = rendererRef.current;

	  var animationRef = React.useRef(false);

	  var domRef = React.useRef(null);

	  var radius = React.useMemo(function () {
	    var shape = mergedConfig.shape;


	    if (shape === 'round') return '50%';

	    if (shape === 'rect') return '0';

	    if (shape === 'roundRect') return '10px';

	    return '0';
	  }, [mergedConfig.shape]);

	  var shape = React.useMemo(function () {
	    var shape = mergedConfig.shape;


	    return !shape ? 'rect' : shape;
	  }, [mergedConfig.shape]);

	  function init() {
	    rendererRef.current = new CRender(domRef.current);

	    if (!config) return;

	    calcData();
	  }

	  function calcData() {
	    var mergedConfig = util_2$1(util_1(defaultConfig$3, true), config);

	    var svgBorderGradient = calcSvgBorderGradient(mergedConfig);

	    var details = calcDetails(mergedConfig);

	    setState({ mergedConfig: mergedConfig, svgBorderGradient: svgBorderGradient, details: details });

	    addWave(mergedConfig);

	    animationWave();
	  }

	  function calcSvgBorderGradient(_ref8) {
	    var colors = _ref8.colors;

	    var colorNum = colors.length;

	    var colorOffsetGap = 100 / (colorNum - 1);

	    return colors.map(function (c, i) {
	      return [colorOffsetGap * i, c];
	    });
	  }

	  function calcDetails(_ref9) {
	    var data = _ref9.data,
	        formatter = _ref9.formatter;

	    if (!data.length) {
	      return '';
	    }

	    var maxValue = Math.max.apply(Math, toConsumableArray(data));

	    return formatter.replace('{value}', maxValue);
	  }

	  function addWave(mergedConfig) {
	    var shapes = getWaveShapes(mergedConfig);
	    var style = getWaveStyle(mergedConfig);

	    wavesRef.current = shapes.map(function (shape) {
	      return rendererRef.current.add({
	        name: 'smoothline',
	        animationFrame: 300,
	        shape: shape,
	        style: style,
	        drawed: drawed
	      });
	    });
	  }

	  function getWaveShapes(_ref10) {
	    var waveNum = _ref10.waveNum,
	        waveHeight = _ref10.waveHeight,
	        data = _ref10.data;

	    var _rendererRef$current$ = slicedToArray(rendererRef.current.area, 2),
	        w = _rendererRef$current$[0],
	        h = _rendererRef$current$[1];

	    var pointsNum = waveNum * 4 + 4;

	    var pointXGap = w / waveNum / 2;

	    return data.map(function (v) {
	      var points = new Array(pointsNum).fill(0).map(function (foo, j) {
	        var x = w - pointXGap * j;

	        var startY = (1 - v / 100) * h;

	        var y = j % 2 === 0 ? startY : startY - waveHeight;

	        return [x, y];
	      });

	      points = points.map(function (p) {
	        return mergeOffset(p, [pointXGap * 2, 0]);
	      });

	      return { points: points };
	    });
	  }

	  function getWaveStyle(_ref11) {
	    var colors = _ref11.colors,
	        waveOpacity = _ref11.waveOpacity;

	    var h = rendererRef.current.area[1];

	    return {
	      gradientColor: colors,
	      gradientType: 'linear',
	      gradientParams: [0, 0, 0, h],
	      gradientWith: 'fill',
	      opacity: waveOpacity,
	      translate: [0, 0]
	    };
	  }

	  React.useEffect(function () {
	    init();

	    return function () {
	      rendererRef.current.delAllGraph();

	      wavesRef.current = [];
	    };
	  }, []);

	  React.useEffect(function () {
	    rendererRef.current.delAllGraph();

	    wavesRef.current = [];

	    setTimeout(calcData, 0);
	  }, [config]);

	  var classNames = React.useMemo(function () {
	    return classnames('dv-water-pond-level', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style },
	    !!renderer && React__default.createElement(
	      'svg',
	      null,
	      React__default.createElement(
	        'defs',
	        null,
	        React__default.createElement(
	          'linearGradient',
	          { id: gradientId, x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
	          svgBorderGradient.map(function (lc) {
	            return React__default.createElement('stop', { key: lc[0], offset: lc[0], stopColor: lc[1] });
	          })
	        )
	      ),
	      React__default.createElement(
	        'text',
	        {
	          stroke: 'url(#' + gradientId + ')',
	          fill: 'url(#' + gradientId + ')',
	          x: renderer.area[0] / 2 + 8,
	          y: renderer.area[1] / 2 + 8
	        },
	        details
	      ),
	      !shape || shape === 'round' ? React__default.createElement('ellipse', {
	        cx: renderer.area[0] / 2 + 8,
	        cy: renderer.area[1] / 2 + 8,
	        rx: renderer.area[0] / 2 + 5,
	        ry: renderer.area[1] / 2 + 5,
	        stroke: 'url(#' + gradientId + ')'
	      }) : React__default.createElement('rect', {
	        x: '2',
	        y: '2',
	        rx: shape === 'roundRect' ? 10 : 0,
	        ry: shape === 'roundRect' ? 10 : 0,
	        width: renderer.area[0] + 12,
	        height: renderer.area[1] + 12,
	        stroke: 'url(#' + gradientId + ')'
	      })
	    ),
	    React__default.createElement('canvas', { ref: domRef, style: { borderRadius: '' + radius } })
	  );
	};

	WaterLevelPond.propTypes = {
	  config: propTypes.object,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};WaterLevelPond.defaultProps = {
	  config: {}
	};

	var css$r = ".dv-percent-pond {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.dv-percent-pond svg {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n}\n.dv-percent-pond polyline {\n  transition: all 0.3s;\n}\n.dv-percent-pond text {\n  font-size: 25px;\n  font-weight: bold;\n  text-anchor: middle;\n  dominant-baseline: middle;\n}\n";
	styleInject(css$r);

	var defaultConfig$4 = {
	  /**
	   * @description Value
	   * @type {Number}
	   * @default value = 0
	   */
	  value: 0,
	  /**
	   * @description Colors (hex|rgb|rgba|color keywords)
	   * @type {Array<String>}
	   * @default colors = ['#00BAFF', '#3DE7C9']
	   * @example colors = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
	   */
	  colors: ['#3DE7C9', '#00BAFF'],
	  /**
	   * @description Border width
	   * @type {Number}
	   * @default borderWidth = 3
	   */
	  borderWidth: 3,
	  /**
	   * @description Gap between border and pond
	   * @type {Number}
	   * @default borderGap = 3
	   */
	  borderGap: 3,
	  /**
	   * @description Line dash
	   * @type {Array<Number>}
	   * @default lineDash = [5, 1]
	   */
	  lineDash: [5, 1],
	  /**
	   * @description Text color
	   * @type {String}
	   * @default textColor = '#fff'
	   */
	  textColor: '#fff',
	  /**
	   * @description Border radius
	   * @type {Number}
	   * @default borderRadius = 5
	   */
	  borderRadius: 5,
	  /**
	   * @description Local Gradient
	   * @type {Boolean}
	   * @default localGradient = false
	   * @example localGradient = false | true
	   */
	  localGradient: false,
	  /**
	   * @description Formatter
	   * @type {String}
	   * @default formatter = '{value}%'
	   */
	  formatter: '{value}%'
	};

	var PercentPond = function PercentPond(_ref) {
	  var _ref$config = _ref.config,
	      config = _ref$config === undefined ? {} : _ref$config,
	      className = _ref.className,
	      style = _ref.style;

	  var domRef = React.useRef(null);

	  var _useRef$current = React.useRef({
	    gradientId1: 'percent-pond-gradientId1-' + Date.now(),
	    gradientId2: 'percent-pond-gradientId2-' + Date.now()
	  }).current,
	      gradientId1 = _useRef$current.gradientId1,
	      gradientId2 = _useRef$current.gradientId2;

	  var _useState = React.useState({
	    width: 0,
	    height: 0,

	    mergedConfig: null
	  }),
	      _useState2 = slicedToArray(_useState, 2),
	      _useState2$ = _useState2[0],
	      width = _useState2$.width,
	      height = _useState2$.height,
	      mergedConfig = _useState2$.mergedConfig,
	      setState = _useState2[1];

	  var rectWidth = React.useMemo(function () {
	    if (!mergedConfig) return 0;

	    var borderWidth = mergedConfig.borderWidth;


	    return width - borderWidth;
	  }, [mergedConfig, width]);

	  var rectHeight = React.useMemo(function () {
	    if (!mergedConfig) return 0;

	    var borderWidth = mergedConfig.borderWidth;


	    return height - borderWidth;
	  }, [mergedConfig, height]);

	  var points = React.useMemo(function () {
	    var halfHeight = height / 2;

	    if (!mergedConfig) return '0, ' + halfHeight + ' 0, ' + halfHeight;

	    var borderWidth = mergedConfig.borderWidth,
	        borderGap = mergedConfig.borderGap,
	        value = mergedConfig.value;


	    var polylineLength = (width - (borderWidth + borderGap) * 2) / 100 * value;

	    return '\n      ' + (borderWidth + borderGap) + ', ' + halfHeight + '\n      ' + (borderWidth + borderGap + polylineLength) + ', ' + (halfHeight + 0.001) + '\n    ';
	  }, [mergedConfig, width, height]);

	  var polylineWidth = React.useMemo(function () {
	    if (!mergedConfig) return 0;

	    var borderWidth = mergedConfig.borderWidth,
	        borderGap = mergedConfig.borderGap;


	    return height - (borderWidth + borderGap) * 2;
	  }, [mergedConfig, height]);

	  var linearGradient = React.useMemo(function () {
	    if (!mergedConfig) return [];

	    var colors = mergedConfig.colors;


	    var colorNum = colors.length;

	    var colorOffsetGap = 100 / (colorNum - 1);

	    return colors.map(function (c, i) {
	      return [colorOffsetGap * i, c];
	    });
	  }, [mergedConfig]);

	  var polylineGradient = React.useMemo(function () {
	    if (!mergedConfig) return gradientId2;

	    if (mergedConfig.localGradient) return gradientId1;

	    return gradientId2;
	  }, [gradientId1, gradientId2, mergedConfig]);

	  var gradient2XPos = React.useMemo(function () {
	    if (!mergedConfig) return '100%';

	    var value = mergedConfig.value;


	    return 200 - value + '%';
	  }, [mergedConfig]);

	  var details = React.useMemo(function () {
	    if (!mergedConfig) return '';

	    var value = mergedConfig.value,
	        formatter = mergedConfig.formatter;


	    return formatter.replace('{value}', value);
	  }, [mergedConfig]);

	  function update() {
	    var _domRef$current = domRef.current,
	        width = _domRef$current.clientWidth,
	        height = _domRef$current.clientHeight;


	    if (!config) {
	      setState(function (state) {
	        return _extends({}, state, { width: width, height: height });
	      });

	      return;
	    }

	    setState({
	      width: width,
	      height: height,
	      mergedConfig: util_2$1(util_1(defaultConfig$4, true), config || {})
	    });
	  }

	  React.useEffect(update, [config]);

	  var classNames = React.useMemo(function () {
	    return classnames('dv-percent-pond', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      null,
	      React__default.createElement(
	        'defs',
	        null,
	        React__default.createElement(
	          'linearGradient',
	          { id: gradientId1, x1: '0%', y1: '0%', x2: '100%', y2: '0%' },
	          linearGradient.map(function (lc) {
	            return React__default.createElement('stop', { key: lc[0], offset: lc[0] + '%', stopColor: lc[1] });
	          })
	        ),
	        React__default.createElement(
	          'linearGradient',
	          {
	            id: gradientId2,
	            x1: '0%',
	            y1: '0%',
	            x2: gradient2XPos,
	            y2: '0%'
	          },
	          linearGradient.map(function (lc) {
	            return React__default.createElement('stop', { key: lc[0], offset: lc[0] + '%', stopColor: lc[1] });
	          })
	        )
	      ),
	      React__default.createElement('rect', {
	        x: mergedConfig ? mergedConfig.borderWidth / 2 : '0',
	        y: mergedConfig ? mergedConfig.borderWidth / 2 : '0',
	        rx: mergedConfig ? mergedConfig.borderRadius : '0',
	        ry: mergedConfig ? mergedConfig.borderRadius : '0',
	        fill: 'transparent',
	        strokeWidth: mergedConfig ? mergedConfig.borderWidth : '0',
	        stroke: 'url(#' + gradientId1 + ')',
	        width: rectWidth > 0 ? rectWidth : 0,
	        height: rectHeight > 0 ? rectHeight : 0
	      }),
	      React__default.createElement('polyline', {
	        strokeWidth: polylineWidth,
	        strokeDasharray: mergedConfig ? mergedConfig.lineDash.join(',') : '0',
	        stroke: 'url(#' + polylineGradient + ')',
	        points: points
	      }),
	      React__default.createElement(
	        'text',
	        {
	          stroke: mergedConfig ? mergedConfig.textColor : '#fff',
	          fill: mergedConfig ? mergedConfig.textColor : '#fff',
	          x: width / 2,
	          y: height / 2
	        },
	        details
	      )
	    )
	  );
	};

	PercentPond.propTypes = {
	  config: propTypes.object,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};PercentPond.defaultProps = {
	  config: {}
	};

	var css$s = ".dv-flyline-chart {\n  display: flex;\n  flex-direction: column;\n  background-size: 100% 100%;\n}\n.dv-flyline-chart polyline {\n  transition: all 0.3s;\n}\n.dv-flyline-chart text {\n  text-anchor: middle;\n  dominant-baseline: middle;\n}\n";
	styleInject(css$s);

	var defaultConfig$5 = {
	  /**
	   * @description Flyline chart center point
	   * @type {Array<Number>}
	   * @default centerPoint = [0, 0]
	   */
	  centerPoint: [0, 0],
	  /**
	   * @description Flyline start points
	   * @type {Array<Array<Number>>}
	   * @default points = []
	   * @example points = [[10, 10], [100, 100]]
	   */
	  points: [],
	  /**
	   * @description Flyline width
	   * @type {Number}
	   * @default lineWidth = 1
	   */
	  lineWidth: 1,
	  /**
	   * @description Orbit color
	   * @type {String}
	   * @default orbitColor = 'rgba(103, 224, 227, .2)'
	   */
	  orbitColor: 'rgba(103, 224, 227, .2)',
	  /**
	   * @description Flyline color
	   * @type {String}
	   * @default orbitColor = '#ffde93'
	   */
	  flylineColor: '#ffde93',
	  /**
	   * @description K value
	   * @type {Number}
	   * @default k = -0.5
	   * @example k = -1 ~ 1
	   */
	  k: -0.5,
	  /**
	   * @description Flyline curvature
	   * @type {Number}
	   * @default curvature = 5
	   */
	  curvature: 5,
	  /**
	   * @description Flyline radius
	   * @type {Number}
	   * @default flylineRadius = 100
	   */
	  flylineRadius: 100,
	  /**
	   * @description Flyline animation duration
	   * @type {Array<Number>}
	   * @default duration = [20, 30]
	   */
	  duration: [20, 30],
	  /**
	   * @description Relative points position
	   * @type {Boolean}
	   * @default relative = true
	   */
	  relative: true,
	  /**
	   * @description Back ground image url
	   * @type {String}
	   * @default bgImgUrl = ''
	   * @example bgImgUrl = './img/bg.jpg'
	   */
	  bgImgUrl: '',
	  /**
	   * @description Text configuration
	   * @type {Object}
	   */
	  text: {
	    /**
	     * @description Text offset
	     * @type {Array<Number>}
	     * @default offset = [0, 15]
	     */
	    offset: [0, 15],
	    /**
	     * @description Text color
	     * @type {String}
	     * @default color = '#ffdb5c'
	     */
	    color: '#ffdb5c',
	    /**
	     * @description Text font size
	     * @type {Number}
	     * @default fontSize = 12
	     */
	    fontSize: 12
	  },
	  /**
	   * @description Halo configuration
	   * @type {Object}
	   */
	  halo: {
	    /**
	     * @description Weather to show halo
	     * @type {Boolean}
	     * @default show = true
	     * @example show = true | false
	     */
	    show: true,
	    /**
	     * @description Halo animation duration (10 = 1s)
	     * @type {Number}
	     * @default duration = 30
	     */
	    duration: 30,
	    /**
	     * @description Halo color
	     * @type {String}
	     * @default color = '#fb7293'
	     */
	    color: '#fb7293',
	    /**
	     * @description Halo max radius
	     * @type {Number}
	     * @default radius = 120
	     */
	    radius: 120
	  },
	  /**
	   * @description Center point img configuration
	   * @type {Object}
	   */
	  centerPointImg: {
	    /**
	     * @description Center point img width
	     * @type {Number}
	     * @default width = 40
	     */
	    width: 40,
	    /**
	     * @description Center point img height
	     * @type {Number}
	     * @default height = 40
	     */
	    height: 40,
	    /**
	     * @description Center point img url
	     * @type {String}
	     * @default url = ''
	     */
	    url: ''
	  },
	  /**
	   * @description Points img configuration
	   * @type {Object}
	   * @default radius = 120
	   */
	  pointsImg: {
	    /**
	     * @description Points img width
	     * @type {Number}
	     * @default width = 15
	     */
	    width: 15,
	    /**
	     * @description Points img height
	     * @type {Number}
	     * @default height = 15
	     */
	    height: 15,
	    /**
	     * @description Points img url
	     * @type {String}
	     * @default url = ''
	     */
	    url: ''
	  }
	};

	function getControlPoint(_ref, _ref2, _ref3) {
	  var _ref5 = slicedToArray(_ref, 2),
	      sx = _ref5[0],
	      sy = _ref5[1];

	  var _ref4 = slicedToArray(_ref2, 2),
	      ex = _ref4[0],
	      ey = _ref4[1];

	  var curvature = _ref3.curvature,
	      k = _ref3.k;
	  var mx = (sx + ex) / 2,
	      my = (sy + ey) / 2;


	  var distance = getPointDistance([sx, sy], [ex, ey]);

	  var targetLength = distance / curvature;
	  var disDived = targetLength / 2;

	  var dx = mx,
	      dy = my;


	  do {
	    dx += disDived;
	    dy = my - k * mx + k * dx;
	  } while (getPointDistance([mx, my], [dx, dy]) < targetLength);

	  return [dx, dy];
	}

	var FlyLineChart = function FlyLineChart(_ref6) {
	  var _ref6$config = _ref6.config,
	      config = _ref6$config === undefined ? {} : _ref6$config,
	      _ref6$dev = _ref6.dev,
	      dev = _ref6$dev === undefined ? false : _ref6$dev,
	      className = _ref6.className,
	      style = _ref6.style;

	  var _useAutoResize = useAutoResize(calcData, calcData),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var _useRef$current = React.useRef({
	    unique: Math.random(),
	    gradientId: 'gradient-id-' + Date.now(),
	    gradient2Id: 'gradient2-id-' + Date.now()
	  }).current,
	      unique = _useRef$current.unique,
	      gradientId = _useRef$current.gradientId,
	      gradient2Id = _useRef$current.gradient2Id;

	  var _useState = React.useState({
	    mergedConfig: null,
	    paths: [],
	    lengths: [],
	    times: [],
	    texts: []
	  }),
	      _useState2 = slicedToArray(_useState, 2),
	      _useState2$ = _useState2[0],
	      mergedConfig = _useState2$.mergedConfig,
	      paths = _useState2$.paths,
	      lengths = _useState2$.lengths,
	      times = _useState2$.times,
	      texts = _useState2$.texts,
	      setState = _useState2[1];

	  var pathRef = React.useRef([]);

	  function calcData() {
	    var mergedConfig = getMergedConfig();

	    var paths = createFlylinePaths(mergedConfig);

	    var lengths = paths.map(function (foo, i) {
	      return pathRef.current[i][0].getTotalLength();
	    });

	    var duration = mergedConfig.duration,
	        points = mergedConfig.points;


	    var times = points.map(function (foo) {
	      return randomExtend.apply(undefined, toConsumableArray(duration)) / 10;
	    });

	    var texts = points.map(function (_ref7) {
	      var text = _ref7.text;
	      return text;
	    });

	    setState({ mergedConfig: mergedConfig, paths: paths, lengths: lengths, times: times, texts: texts });
	  }

	  function getMergedConfig() {
	    var mergedConfig = util_2$1(util_1(defaultConfig$5, true), config || {});

	    mergedConfig.points = mergedConfig.points.map(function (item) {
	      if (Array.isArray(item)) {
	        return { position: item, text: '' };
	      }

	      return item;
	    });

	    return mergedConfig;
	  }

	  function createFlylinePaths(mergedConfig) {
	    var centerPoint = mergedConfig.centerPoint,
	        relative = mergedConfig.relative;

	    var points = mergedConfig.points.map(function (_ref8) {
	      var position = _ref8.position;
	      return position;
	    });

	    if (relative) {
	      centerPoint = [width * centerPoint[0], height * centerPoint[1]];
	      points = points.map(function (_ref9) {
	        var _ref10 = slicedToArray(_ref9, 2),
	            x = _ref10[0],
	            y = _ref10[1];

	        return [width * x, height * y];
	      });
	    }

	    return points.map(function (point) {
	      var controlPoint = getControlPoint(centerPoint, point, mergedConfig);

	      return [point, controlPoint, centerPoint];
	    });
	  }

	  var consoleClickPos = React.useCallback(function (_ref11) {
	    var offsetX = _ref11.offsetX,
	        offsetY = _ref11.offsetY;

	    if (!dev) return;

	    var relativeX = (offsetX / width).toFixed(2);
	    var relativeY = (offsetY / height).toFixed(2);

	    console.warn('dv-flyline-chart DEV: \n Click Position is [' + offsetX + ', ' + offsetY + '] \n Relative Position is [' + relativeX + ', ' + relativeY + ']');
	  }, [width, height, dev]);

	  React.useEffect(calcData, [config]);

	  var classNames = React.useMemo(function () {
	    return classnames('dv-flyline-chart', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    {
	      className: classNames,
	      ref: domRef,
	      style: _extends({
	        backgroundImage: 'url(' + (mergedConfig ? mergedConfig.bgImgUrl : '') + ')'
	      }, style),
	      onClick: consoleClickPos
	    },
	    !!mergedConfig && React__default.createElement(
	      'svg',
	      { width: width, height: height },
	      React__default.createElement(
	        'defs',
	        null,
	        React__default.createElement(
	          'radialGradient',
	          { id: gradientId, cx: '50%', cy: '50%', r: '50%' },
	          React__default.createElement('stop', { offset: '0%', stopColor: '#fff', stopOpacity: '1' }),
	          React__default.createElement('stop', { offset: '100%', stopColor: '#fff', stopOpacity: '0' })
	        ),
	        React__default.createElement(
	          'radialGradient',
	          { id: gradient2Id, cx: '50%', cy: '50%', r: '50%' },
	          React__default.createElement('stop', { offset: '0%', stopColor: '#fff', stopOpacity: '0' }),
	          React__default.createElement('stop', { offset: '100%', stopColor: '#fff', stopOpacity: '1' })
	        ),
	        !!paths[0] && React__default.createElement(
	          'circle',
	          {
	            id: 'circle' + paths[0].toString(),
	            cx: paths[0][2][0],
	            cy: paths[0][2][1]
	          },
	          React__default.createElement('animate', {
	            attributeName: 'r',
	            values: '1;' + mergedConfig.halo.radius,
	            dur: mergedConfig.halo.duration / 10 + 's',
	            repeatCount: 'indefinite'
	          }),
	          React__default.createElement('animate', {
	            attributeName: 'opacity',
	            values: '1;0',
	            dur: mergedConfig.halo.duration / 10 + 's',
	            repeatCount: 'indefinite'
	          })
	        )
	      ),
	      !!paths[0] && React__default.createElement('image', {
	        href: mergedConfig.centerPointImg.url,
	        width: mergedConfig.centerPointImg.width,
	        height: mergedConfig.centerPointImg.height,
	        x: paths[0][2][0] - mergedConfig.centerPointImg.width / 2,
	        y: paths[0][2][1] - mergedConfig.centerPointImg.height / 2
	      }),
	      React__default.createElement(
	        'mask',
	        { id: 'maskhalo' + paths[0].toString() },
	        !!paths[0] && React__default.createElement('use', {
	          href: '#circle' + paths[0].toString(),
	          fill: 'url(#' + gradient2Id + ')'
	        })
	      ),
	      !!paths[0] && mergedConfig.halo.show && React__default.createElement('use', {
	        href: '#circle' + paths[0].toString(),
	        fill: mergedConfig.halo.color,
	        mask: 'url(#maskhalo' + paths[0].toString() + ')'
	      }),
	      paths.map(function (path, i) {
	        return React__default.createElement(
	          'g',
	          { key: i },
	          React__default.createElement(
	            'defs',
	            null,
	            React__default.createElement('path', {
	              id: 'path' + path.toString(),
	              ref: function ref(e) {
	                return pathRef.current[i] = e;
	              },
	              d: 'M' + path[0].toString() + ' Q' + path[1].toString() + ' ' + path[2].toString(),
	              fill: 'transparent'
	            })
	          ),
	          React__default.createElement('use', {
	            href: '#path' + path.toString(),
	            strokeWidth: mergedConfig.lineWidth,
	            stroke: mergedConfig.orbitColor
	          }),
	          lengths[i] && React__default.createElement(
	            'use',
	            {
	              href: '#path' + path.toString(),
	              strokeWidth: mergedConfig.lineWidth,
	              stroke: mergedConfig.flylineColor,
	              mask: 'url(#mask' + unique + path.toString() + ')'
	            },
	            React__default.createElement('animate', {
	              attributeName: 'stroke-dasharray',
	              from: '0, ' + lengths[i],
	              to: lengths[i] + ', 0',
	              dur: times[i] || 0,
	              repeatCount: 'indefinite'
	            })
	          ),
	          React__default.createElement(
	            'mask',
	            { id: 'mask' + unique + path.toString() },
	            React__default.createElement(
	              'circle',
	              {
	                cx: '0',
	                cy: '0',
	                r: mergedConfig.flylineRadius,
	                fill: 'url(#' + gradientId + ')'
	              },
	              React__default.createElement('animateMotion', {
	                dur: times[i] || 0,
	                path: 'M' + path[0].toString() + ' Q' + path[1].toString() + ' ' + path[2].toString(),
	                rotate: 'auto',
	                repeatCount: 'indefinite'
	              })
	            )
	          ),
	          React__default.createElement('image', {
	            href: mergedConfig.pointsImg.url,
	            width: mergedConfig.pointsImg.width,
	            height: mergedConfig.pointsImg.height,
	            x: path[0][0] - mergedConfig.pointsImg.width / 2,
	            y: path[0][1] - mergedConfig.pointsImg.height / 2
	          }),
	          React__default.createElement(
	            'text',
	            {
	              style: { fontSize: mergedConfig.text.fontSize + 'px' },
	              fill: mergedConfig.text.color,
	              x: path[0][0] + mergedConfig.text.offset[0],
	              y: path[0][1] + mergedConfig.text.offset[1]
	            },
	            texts[i]
	          )
	        );
	      })
	    )
	  );
	};

	FlyLineChart.propTypes = {
	  config: propTypes.object,
	  dev: propTypes.bool,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};FlyLineChart.defaultProps = {
	  config: {},
	  dev: false
	};

	var css$t = ".dv-conical-column-chart {\n  width: 100%;\n  height: 100%;\n}\n.dv-conical-column-chart text {\n  text-anchor: middle;\n}\n";
	styleInject(css$t);

	var defaultConfig$6 = {
	  /**
	   * @description Chart data
	   * @type {Array<Object>}
	   * @default data = []
	   */
	  data: [],
	  /**
	   * @description Chart img
	   * @type {Array<String>}
	   * @default img = []
	   */
	  img: [],
	  /**
	   * @description Chart font size
	   * @type {Number}
	   * @default fontSize = 12
	   */
	  fontSize: 12,
	  /**
	   * @description Img side length
	   * @type {Number}
	   * @default imgSideLength = 30
	   */
	  imgSideLength: 30,
	  /**
	   * @description Column color
	   * @type {String}
	   * @default columnColor = 'rgba(0, 194, 255, 0.4)'
	   */
	  columnColor: 'rgba(0, 194, 255, 0.4)',
	  /**
	   * @description Text color
	   * @type {String}
	   * @default textColor = '#fff'
	   */
	  textColor: '#fff',
	  /**
	   * @description Show value
	   * @type {Boolean}
	   * @default showValue = false
	   */
	  showValue: false
	};

	function getData$1(mergedConfig) {
	  var data = mergedConfig.data;


	  data = util_1(data, true);

	  data.sort(function (_ref, _ref2) {
	    var a = _ref.value;
	    var b = _ref2.value;

	    if (a > b) return -1;
	    if (a < b) return 1;
	    if (a === b) return 0;
	  });

	  var max = data[0] ? data[0].value : 10;

	  data = data.map(function (item) {
	    return _extends({}, item, {
	      percent: item.value / max
	    });
	  });

	  return data;
	}

	var ConicalColumnChart = function ConicalColumnChart(_ref3) {
	  var _ref3$config = _ref3.config,
	      config = _ref3$config === undefined ? {} : _ref3$config,
	      className = _ref3.className,
	      style = _ref3.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var _useMemo = React.useMemo(calcData, [config, width, height]),
	      mergedConfig = _useMemo.mergedConfig,
	      column = _useMemo.column;

	  function calcData() {
	    var mergedConfig = util_2$1(util_1(defaultConfig$6, true), config || {});

	    mergedConfig.data = getData$1(mergedConfig);

	    return { mergedConfig: mergedConfig, column: getColumn(mergedConfig) };
	  }

	  function getColumn(mergedConfig) {
	    var imgSideLength = mergedConfig.imgSideLength,
	        fontSize = mergedConfig.fontSize,
	        data = mergedConfig.data;


	    var itemNum = data.length;
	    var gap = width / (itemNum + 1);

	    var useAbleHeight = height - imgSideLength - fontSize - 5;
	    var svgBottom = height - fontSize - 5;

	    return data.map(function (item, i) {
	      var percent = item.percent;


	      var middleXPos = gap * (i + 1);
	      var leftXPos = gap * i;
	      var rightXpos = gap * (i + 2);

	      var middleYPos = svgBottom - useAbleHeight * percent;
	      var controlYPos = useAbleHeight * percent * 0.6 + middleYPos;

	      var d = '\n        M' + leftXPos + ', ' + svgBottom + '\n        Q' + middleXPos + ', ' + controlYPos + ' ' + middleXPos + ',' + middleYPos + '\n        M' + middleXPos + ',' + middleYPos + '\n        Q' + middleXPos + ', ' + controlYPos + ' ' + rightXpos + ',' + svgBottom + '\n        L' + leftXPos + ', ' + svgBottom + '\n        Z\n      ';

	      var textY = (svgBottom + middleYPos) / 2 + fontSize / 2;

	      return _extends({}, item, {
	        d: d,
	        x: middleXPos,
	        y: middleYPos,
	        textY: textY
	      });
	    });
	  }

	  var classNames = React.useMemo(function () {
	    return classnames('dv-conical-column-chart', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    React__default.createElement(
	      'svg',
	      { width: width, height: height },
	      column.map(function (item, i) {
	        return React__default.createElement(
	          'g',
	          { key: i },
	          React__default.createElement('path', { d: item.d, fill: mergedConfig.columnColor }),
	          React__default.createElement(
	            'text',
	            {
	              style: { fontSize: mergedConfig.fontSize + 'px' },
	              fill: mergedConfig.textColor,
	              x: item.x,
	              y: height - 4
	            },
	            item.name
	          ),
	          !!mergedConfig.img.length && React__default.createElement('image', {
	            href: mergedConfig.img[i % mergedConfig.img.length],
	            width: mergedConfig.imgSideLength,
	            height: mergedConfig.imgSideLength,
	            x: item.x - mergedConfig.imgSideLength / 2,
	            y: item.y - mergedConfig.imgSideLength
	          }),
	          mergedConfig.showValue && React__default.createElement(
	            'text',
	            {
	              style: { fontSize: mergedConfig.fontSize + 'px' },
	              fill: mergedConfig.textColor,
	              x: item.x,
	              y: item.textY
	            },
	            item.value
	          )
	        );
	      })
	    )
	  );
	};

	ConicalColumnChart.propTypes = {
	  config: propTypes.object,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};ConicalColumnChart.defaultProps = {
	  config: {}
	};

	var css$u = ".dv-scroll-board {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n}\n.dv-scroll-board .text {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dv-scroll-board .header {\n  display: flex;\n  flex-direction: row;\n  font-size: 15px;\n}\n.dv-scroll-board .header .header-item {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all 0.3s;\n}\n.dv-scroll-board .rows {\n  overflow: hidden;\n}\n.dv-scroll-board .rows .row-item {\n  display: flex;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.dv-scroll-board .rows .ceil {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dv-scroll-board .rows .index {\n  border-radius: 3px;\n  padding: 0px 3px;\n}\n";
	styleInject(css$u);

	var defaultConfig$7 = {
	  /**
	   * @description Board header
	   * @type {Array<String>}
	   * @default header = []
	   * @example header = ['column1', 'column2', 'column3']
	   */
	  header: [],
	  /**
	   * @description Board data
	   * @type {Array<Array>}
	   * @default data = []
	   */
	  data: [],
	  /**
	   * @description Row num
	   * @type {Number}
	   * @default rowNum = 5
	   */
	  rowNum: 5,
	  /**
	   * @description Header background color
	   * @type {String}
	   * @default headerBGC = '#00BAFF'
	   */
	  headerBGC: '#00BAFF',
	  /**
	   * @description Odd row background color
	   * @type {String}
	   * @default oddRowBGC = '#003B51'
	   */
	  oddRowBGC: '#003B51',
	  /**
	   * @description Even row background color
	   * @type {String}
	   * @default evenRowBGC = '#003B51'
	   */
	  evenRowBGC: '#0A2732',
	  /**
	   * @description Scroll wait time
	   * @type {Number}
	   * @default waitTime = 2000
	   */
	  waitTime: 2000,
	  /**
	   * @description Header height
	   * @type {Number}
	   * @default headerHeight = 35
	   */
	  headerHeight: 35,
	  /**
	   * @description Column width
	   * @type {Array<Number>}
	   * @default columnWidth = []
	   */
	  columnWidth: [],
	  /**
	   * @description Column align
	   * @type {Array<String>}
	   * @default align = []
	   * @example align = ['left', 'center', 'right']
	   */
	  align: [],
	  /**
	   * @description Show index
	   * @type {Boolean}
	   * @default index = false
	   */
	  index: false,
	  /**
	   * @description Carousel type
	   * @type {String}
	   * @default carousel = 'single'
	   * @example carousel = 'single' | 'page'
	   */
	  carousel: 'single'
	};

	function calcHeaderData(_ref) {
	  var header = _ref.header,
	      index$$1 = _ref.index;

	  if (!header.length) {
	    return [];
	  }

	  header = [].concat(toConsumableArray(header));

	  if (index$$1) header.unshift('#');

	  return header;
	}

	function calcRows(_ref2) {
	  var data = _ref2.data,
	      index$$1 = _ref2.index,
	      headerBGC = _ref2.headerBGC,
	      rowNum = _ref2.rowNum;

	  if (index$$1) {
	    data = data.map(function (row, i) {
	      row = [].concat(toConsumableArray(row));

	      var indexTag = '<span class="index" style="background-color: ' + headerBGC + ';">' + (i + 1) + '</span>';

	      row.unshift(indexTag);

	      return row;
	    });
	  }

	  data = data.map(function (ceils, i) {
	    return { ceils: ceils, rowIndex: i };
	  });

	  var rowLength = data.length;

	  if (rowLength > rowNum && rowLength < 2 * rowNum) {
	    data = [].concat(toConsumableArray(data), toConsumableArray(data));
	  }

	  return data.map(function (d, i) {
	    return _extends({}, d, { scroll: i });
	  });
	}

	function calcAligns(mergedConfig, header) {
	  var columnNum = header.length;

	  var aligns = new Array(columnNum).fill('left');

	  var align = mergedConfig.align;


	  return util_2$1(aligns, align);
	}

	var ScrollBoard = function ScrollBoard(_ref3) {
	  var _marked = /*#__PURE__*/regeneratorRuntime.mark(animation);

	  var onClick = _ref3.onClick,
	      config = _ref3.config,
	      className = _ref3.className,
	      style = _ref3.style;

	  var _useAutoResize = useAutoResize(),
	      width = _useAutoResize.width,
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var _useState = React.useState({
	    mergedConfig: null,

	    header: [],

	    rows: [],

	    widths: [],

	    heights: [],

	    aligns: []
	  }),
	      _useState2 = slicedToArray(_useState, 2),
	      state = _useState2[0],
	      setState = _useState2[1];

	  var mergedConfig = state.mergedConfig,
	      header = state.header,
	      rows = state.rows,
	      widths = state.widths,
	      heights = state.heights,
	      aligns = state.aligns;


	  var stateRef = React.useRef(_extends({}, state, {
	    rowsData: [],
	    avgHeight: 0,
	    animationIndex: 0
	  }));

	  Object.assign(stateRef.current, state);

	  function onResize() {
	    if (!mergedConfig) return;

	    var widths = calcWidths(mergedConfig, stateRef.current.rowsData);

	    var heights = calcHeights(mergedConfig, header);

	    var data = { widths: widths, heights: heights };

	    Object.assign(stateRef.current, data);
	    setState(function (state) {
	      return _extends({}, state, data);
	    });
	  }

	  function calcData() {
	    var mergedConfig = util_2$1(util_1(defaultConfig$7, true), config || {});

	    var header = calcHeaderData(mergedConfig);

	    var rows = calcRows(mergedConfig);

	    var widths = calcWidths(mergedConfig, stateRef.current.rowsData);

	    var heights = calcHeights(mergedConfig, header);

	    var aligns = calcAligns(mergedConfig, header);

	    var data = {
	      mergedConfig: mergedConfig,
	      header: header,
	      rows: rows,
	      widths: widths,
	      aligns: aligns,
	      heights: heights
	    };

	    Object.assign(stateRef.current, data, { rowsData: rows });

	    setState(function (state) {
	      return _extends({}, state, data);
	    });
	  }

	  function calcWidths(_ref4, rowsData) {
	    var columnWidth = _ref4.columnWidth,
	        header = _ref4.header;

	    var usedWidth = columnWidth.reduce(function (all, w) {
	      return all + w;
	    }, 0);

	    var columnNum = 0;
	    if (rowsData[0]) {
	      columnNum = rowsData[0].ceils.length;
	    } else if (header.length) {
	      columnNum = header.length;
	    }

	    var avgWidth = (width - usedWidth) / (columnNum - columnWidth.length);

	    var widths = new Array(columnNum).fill(avgWidth);

	    return util_2$1(widths, columnWidth);
	  }

	  function calcHeights(_ref5, header) {
	    var headerHeight = _ref5.headerHeight,
	        rowNum = _ref5.rowNum,
	        data = _ref5.data;

	    var allHeight = height;

	    if (header.length) allHeight -= headerHeight;

	    var avgHeight = allHeight / rowNum;

	    Object.assign(stateRef.current, { avgHeight: avgHeight });

	    return new Array(data.length).fill(avgHeight);
	  }

	  function animation() {
	    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var _stateRef$current, avgHeight, animationIndex, _stateRef$current$mer, waitTime, carousel, rowNum, rowsData, rowLength, animationNum, rows, heights, back, newHeights;

	    return regeneratorRuntime.wrap(function animation$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _stateRef$current = stateRef.current, avgHeight = _stateRef$current.avgHeight, animationIndex = _stateRef$current.animationIndex, _stateRef$current$mer = _stateRef$current.mergedConfig, waitTime = _stateRef$current$mer.waitTime, carousel = _stateRef$current$mer.carousel, rowNum = _stateRef$current$mer.rowNum, rowsData = _stateRef$current.rowsData;
	            rowLength = rowsData.length;

	            if (!start) {
	              _context.next = 5;
	              break;
	            }

	            _context.next = 5;
	            return new Promise(function (resolve) {
	              return setTimeout(resolve, waitTime);
	            });

	          case 5:
	            animationNum = carousel === 'single' ? 1 : rowNum;
	            rows = rowsData.slice(animationIndex);

	            rows.push.apply(rows, toConsumableArray(rowsData.slice(0, animationIndex)));

	            heights = new Array(rowLength).fill(avgHeight);

	            setState(function (state) {
	              return _extends({}, state, { rows: rows, heights: heights });
	            });

	            _context.next = 12;
	            return new Promise(function (resolve) {
	              return setTimeout(resolve, 300);
	            });

	          case 12:

	            animationIndex += animationNum;

	            back = animationIndex - rowLength;

	            if (back >= 0) animationIndex = back;

	            newHeights = [].concat(toConsumableArray(heights));

	            newHeights.splice.apply(newHeights, [0, animationNum].concat(toConsumableArray(new Array(animationNum).fill(0))));

	            Object.assign(stateRef.current, { animationIndex: animationIndex });
	            setState(function (state) {
	              return _extends({}, state, { heights: newHeights });
	            });

	          case 19:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _marked, this);
	  }

	  function emitEvent(ri, ci, row, ceil) {
	    var ceils = row.ceils,
	        rowIndex = row.rowIndex;


	    onClick && onClick({ row: ceils, ceil: ceil, rowIndex: rowIndex, columnIndex: ci });
	  }

	  var getBackgroundColor = function getBackgroundColor(rowIndex) {
	    return mergedConfig[rowIndex % 2 === 0 ? 'evenRowBGC' : 'oddRowBGC'];
	  };

	  React.useEffect(function () {
	    var _marked2 = /*#__PURE__*/regeneratorRuntime.mark(loop);

	    calcData();

	    var start = true;

	    function loop() {
	      var _this = this;

	      var _loop;

	      return regeneratorRuntime.wrap(function loop$(_context3) {
	        while (1) {
	          switch (_context3.prev = _context3.next) {
	            case 0:
	              _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
	                var waitTime;
	                return regeneratorRuntime.wrap(function _loop$(_context2) {
	                  while (1) {
	                    switch (_context2.prev = _context2.next) {
	                      case 0:
	                        return _context2.delegateYield(animation(start), 't0', 1);

	                      case 1:

	                        start = false;

	                        waitTime = stateRef.current.mergedConfig.waitTime;
	                        _context2.next = 5;
	                        return new Promise(function (resolve) {
	                          return setTimeout(resolve, waitTime - 300);
	                        });

	                      case 5:
	                      case 'end':
	                        return _context2.stop();
	                    }
	                  }
	                }, _loop, _this);
	              });

	            case 1:

	              return _context3.delegateYield(_loop(), 't0', 3);

	            case 3:
	              _context3.next = 1;
	              break;

	            case 5:
	            case 'end':
	              return _context3.stop();
	          }
	        }
	      }, _marked2, this);
	    }

	    var _stateRef$current2 = stateRef.current,
	        rowNum = _stateRef$current2.mergedConfig.rowNum,
	        rowsData = _stateRef$current2.rows;


	    var rowLength = rowsData.length;

	    if (rowNum >= rowLength) return;

	    var it = loop();

	    co(it);

	    return function () {
	      return it.return();
	    };
	  }, [config, domRef.current]);

	  React.useEffect(onResize, [width, height, domRef.current]);

	  var classNames = React.useMemo(function () {
	    return classnames('dv-scroll-board', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    !!header.length && !!mergedConfig && React__default.createElement(
	      'div',
	      {
	        className: 'header',
	        style: { backgroundColor: '' + mergedConfig.headerBGC }
	      },
	      header.map(function (headerItem, i) {
	        return React__default.createElement('div', {
	          className: 'header-item',
	          key: headerItem + i,
	          style: {
	            height: mergedConfig.headerHeight + 'px',
	            lineHeight: mergedConfig.headerHeight + 'px',
	            width: widths[i] + 'px'
	          },
	          align: aligns[i],
	          dangerouslySetInnerHTML: { __html: headerItem }
	        });
	      })
	    ),
	    !!mergedConfig && React__default.createElement(
	      'div',
	      {
	        className: 'rows',
	        style: {
	          height: height - (header.length ? mergedConfig.headerHeight : 0) + 'px'
	        }
	      },
	      rows.map(function (row, ri) {
	        return React__default.createElement(
	          'div',
	          {
	            className: 'row-item',
	            key: row.toString() + row.scroll,
	            style: {
	              height: heights[ri] + 'px',
	              lineHeight: heights[ri] + 'px',
	              backgroundColor: '' + getBackgroundColor(row.rowIndex)
	            }
	          },
	          row.ceils.map(function (ceil, ci) {
	            return React__default.createElement('div', {
	              className: 'ceil',
	              key: ceil + ri + ci,
	              style: { width: widths[ci] + 'px' },
	              align: aligns[ci],
	              dangerouslySetInnerHTML: { __html: ceil },
	              onClick: function onClick() {
	                return emitEvent(ri, ci, row, ceil);
	              }
	            });
	          })
	        );
	      })
	    )
	  );
	};

	ScrollBoard.propTypes = {
	  config: propTypes.object,
	  onClick: propTypes.func,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};ScrollBoard.defaultProps = {
	  config: {}
	};

	var css$v = ".dv-scroll-ranking-board {\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  overflow: hidden;\n}\n.dv-scroll-ranking-board .row-item {\n  transition: all 0.3s;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n}\n.dv-scroll-ranking-board .ranking-info {\n  display: flex;\n  width: 100%;\n  font-size: 13px;\n}\n.dv-scroll-ranking-board .ranking-info .rank {\n  width: 40px;\n  color: #1370fb;\n}\n.dv-scroll-ranking-board .ranking-info .info-name {\n  flex: 1;\n}\n.dv-scroll-ranking-board .ranking-column {\n  border-bottom: 2px solid rgba(19, 112, 251, 0.5);\n  margin-top: 5px;\n}\n.dv-scroll-ranking-board .ranking-column .inside-column {\n  position: relative;\n  height: 6px;\n  background-color: #1370fb;\n  margin-bottom: 2px;\n  border-radius: 1px;\n  overflow: hidden;\n}\n.dv-scroll-ranking-board .ranking-column .shine {\n  position: absolute;\n  left: 0%;\n  top: 2px;\n  height: 2px;\n  width: 50px;\n  transform: translateX(-100%);\n  background: radial-gradient(#28f8ff 5%, transparent 80%);\n  animation: shine 3s ease-in-out infinite alternate;\n}\n@keyframes shine {\n  80% {\n    left: 0%;\n    transform: translateX(-100%);\n  }\n  100% {\n    left: 100%;\n    transform: translateX(0%);\n  }\n}\n";
	styleInject(css$v);

	var defaultConfig$8 = {
	  /**
	   * @description Board data
	   * @type {Array<Object>}
	   * @default data = []
	   */
	  data: [],
	  /**
	   * @description Row num
	   * @type {Number}
	   * @default rowNum = 5
	   */
	  rowNum: 5,
	  /**
	   * @description Scroll wait time
	   * @type {Number}
	   * @default waitTime = 2000
	   */
	  waitTime: 2000,
	  /**
	   * @description Carousel type
	   * @type {String}
	   * @default carousel = 'single'
	   * @example carousel = 'single' | 'page'
	   */
	  carousel: 'single',
	  /**
	   * @description Value unit
	   * @type {String}
	   * @default unit = ''
	   * @example unit = 'ton'
	   */
	  unit: ''
	};

	function calcRows$1(_ref) {
	  var data = _ref.data,
	      rowNum = _ref.rowNum;

	  data.sort(function (_ref2, _ref3) {
	    var a = _ref2.value;
	    var b = _ref3.value;

	    if (a > b) return -1;
	    if (a < b) return 1;
	    if (a === b) return 0;
	  });

	  var value = data.map(function (_ref4) {
	    var value = _ref4.value;
	    return value;
	  });

	  var max = Math.max.apply(Math, toConsumableArray(value)) || 0;

	  data = data.map(function (row, i) {
	    return _extends({}, row, {
	      ranking: i + 1,
	      percent: row.value / max * 100
	    });
	  });

	  var rowLength = data.length;

	  if (rowLength > rowNum && rowLength < 2 * rowNum) {
	    data = [].concat(toConsumableArray(data), toConsumableArray(data));
	  }

	  data = data.map(function (d, i) {
	    return _extends({}, d, { scroll: i });
	  });

	  return data;
	}

	var ScrollRankingBoard = function ScrollRankingBoard(_ref5) {
	  var _marked = /*#__PURE__*/regeneratorRuntime.mark(animation);

	  var config = _ref5.config,
	      className = _ref5.className,
	      style = _ref5.style;

	  var _useAutoResize = useAutoResize(),
	      height = _useAutoResize.height,
	      domRef = _useAutoResize.domRef;

	  var _useState = React.useState({
	    mergedConfig: null,

	    rows: [],

	    heights: []
	  }),
	      _useState2 = slicedToArray(_useState, 2),
	      state = _useState2[0],
	      setState = _useState2[1];

	  var mergedConfig = state.mergedConfig,
	      rows = state.rows,
	      heights = state.heights;


	  var stateRef = React.useRef(_extends({}, state, { avgHeight: 0, animationIndex: 0 }));
	  var heightRef = React.useRef(height);

	  Object.assign(stateRef.current, state);

	  function onResize() {
	    var onresize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    if (!mergedConfig) return;

	    var heights = calcHeights(mergedConfig, onresize);

	    heights !== undefined && setState(function (state) {
	      return _extends({}, state, { heights: heights });
	    });
	  }

	  function calcData() {
	    var mergedConfig = util_2$1(util_1(defaultConfig$8, true), config || {});

	    var rows = calcRows$1(mergedConfig);

	    var heights = calcHeights(mergedConfig);

	    var data = { mergedConfig: mergedConfig, rows: rows };

	    heights !== undefined && Object.assign(data, { heights: heights });

	    Object.assign(stateRef.current, data);

	    setState(function (state) {
	      return _extends({}, state, data);
	    });
	  }

	  function calcHeights(_ref6) {
	    var rowNum = _ref6.rowNum,
	        data = _ref6.data;
	    var onresize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	    var avgHeight = height / rowNum;

	    Object.assign(stateRef.current, { avgHeight: avgHeight });

	    if (!onresize) {
	      return new Array(data.length).fill(avgHeight);
	    }
	  }

	  function animation() {
	    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var _stateRef$current, avgHeight, animationIndex, mergedConfig, rowsData, waitTime, carousel, rowNum, rowLength, animationNum, rows, back;

	    return regeneratorRuntime.wrap(function animation$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _stateRef$current = stateRef.current, avgHeight = _stateRef$current.avgHeight, animationIndex = _stateRef$current.animationIndex, mergedConfig = _stateRef$current.mergedConfig, rowsData = _stateRef$current.rows;
	            waitTime = mergedConfig.waitTime, carousel = mergedConfig.carousel, rowNum = mergedConfig.rowNum;
	            rowLength = rowsData.length;

	            if (!start) {
	              _context.next = 6;
	              break;
	            }

	            _context.next = 6;
	            return new Promise(function (resolve) {
	              return setTimeout(resolve, waitTime);
	            });

	          case 6:
	            animationNum = carousel === 'single' ? 1 : rowNum;
	            rows = rowsData.slice(animationIndex);

	            rows.push.apply(rows, toConsumableArray(rowsData.slice(0, animationIndex)));

	            setState(function (state) {
	              return _extends({}, state, {
	                rows: rows,
	                heights: new Array(rowLength).fill(avgHeight)
	              });
	            });

	            _context.next = 12;
	            return new Promise(function (resolve) {
	              return setTimeout(resolve, 300);
	            });

	          case 12:

	            animationIndex += animationNum;

	            back = animationIndex - rowLength;

	            if (back >= 0) animationIndex = back;

	            Object.assign(stateRef.current, { animationIndex: animationIndex });

	            setState(function (state) {
	              var _ref7;

	              return _extends({}, state, {
	                heights: (_ref7 = [].concat(toConsumableArray(state.heights))).splice.apply(_ref7, [0, animationNum].concat(toConsumableArray(new Array(animationNum).fill(0))))
	              });
	            });

	          case 17:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _marked, this);
	  }

	  React.useEffect(function () {
	    var _marked2 = /*#__PURE__*/regeneratorRuntime.mark(loop);

	    calcData();

	    var start = true;

	    function loop() {
	      var _this = this;

	      var _loop;

	      return regeneratorRuntime.wrap(function loop$(_context3) {
	        while (1) {
	          switch (_context3.prev = _context3.next) {
	            case 0:
	              _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
	                var waitTime;
	                return regeneratorRuntime.wrap(function _loop$(_context2) {
	                  while (1) {
	                    switch (_context2.prev = _context2.next) {
	                      case 0:
	                        return _context2.delegateYield(animation(start), 't0', 1);

	                      case 1:

	                        start = false;

	                        waitTime = stateRef.current.mergedConfig.waitTime;
	                        _context2.next = 5;
	                        return new Promise(function (resolve) {
	                          return setTimeout(resolve, waitTime - 300);
	                        });

	                      case 5:
	                      case 'end':
	                        return _context2.stop();
	                    }
	                  }
	                }, _loop, _this);
	              });

	            case 1:

	              return _context3.delegateYield(_loop(), 't0', 3);

	            case 3:
	              _context3.next = 1;
	              break;

	            case 5:
	            case 'end':
	              return _context3.stop();
	          }
	        }
	      }, _marked2, this);
	    }

	    var _stateRef$current2 = stateRef.current,
	        rowNum = _stateRef$current2.mergedConfig.rowNum,
	        rowsData = _stateRef$current2.rows;


	    var rowLength = rowsData.length;

	    if (rowNum >= rowLength) return;

	    var it = loop();

	    co(it);

	    return function () {
	      return it.return();
	    };
	  }, [config]);

	  React.useEffect(function () {
	    if (heightRef.current === 0 && height !== 0) {
	      onResize();

	      heightRef.current = height;
	    } else {
	      onResize(true);
	    }
	  }, [height]);

	  var classNames = React.useMemo(function () {
	    return classnames('dv-scroll-ranking-board', className);
	  }, [className]);

	  return React__default.createElement(
	    'div',
	    { className: classNames, style: style, ref: domRef },
	    rows.map(function (item, i) {
	      return React__default.createElement(
	        'div',
	        {
	          className: 'row-item',
	          key: item.toString() + item.scroll,
	          style: { height: heights[i] + 'px' }
	        },
	        React__default.createElement(
	          'div',
	          { className: 'ranking-info' },
	          React__default.createElement(
	            'div',
	            { className: 'rank' },
	            'No.',
	            item.ranking
	          ),
	          React__default.createElement(
	            'div',
	            { className: 'info-name' },
	            item.name
	          ),
	          React__default.createElement(
	            'div',
	            { className: 'ranking-value' },
	            item.value + mergedConfig.unit
	          )
	        ),
	        React__default.createElement(
	          'div',
	          { className: 'ranking-column' },
	          React__default.createElement(
	            'div',
	            {
	              className: 'inside-column',
	              style: { width: item.percent + '%' }
	            },
	            React__default.createElement('div', { className: 'shine' })
	          )
	        )
	      );
	    })
	  );
	};

	ScrollRankingBoard.propTypes = {
	  config: propTypes.object,
	  className: propTypes.string,
	  style: propTypes.object

	  // 指定 props 的默认值：
	};ScrollRankingBoard.defaultProps = {
	  config: {}
	};

	/**
	 * IMPORT COMPONENTS
	 */

	exports.FullScreenContainer = FullScreenContainer;
	exports.Loading = Loading;
	exports.BorderBox1 = BorderBox;
	exports.BorderBox2 = BorderBox$1;
	exports.BorderBox3 = BorderBox$2;
	exports.BorderBox4 = BorderBox$3;
	exports.BorderBox5 = BorderBox$4;
	exports.BorderBox6 = BorderBox$5;
	exports.BorderBox7 = BorderBox$6;
	exports.BorderBox8 = BorderBox$7;
	exports.BorderBox9 = BorderBox$8;
	exports.BorderBox10 = BorderBox$9;
	exports.Decoration1 = Decoration;
	exports.Decoration2 = Decoration$1;
	exports.Decoration3 = Decoration$2;
	exports.Decoration4 = Decoration$3;
	exports.Decoration5 = Decoration$4;
	exports.Decoration6 = Decoration$5;
	exports.Decoration7 = Decoration$6;
	exports.Decoration8 = Decoration$7;
	exports.Decoration9 = Decoration$8;
	exports.Decoration10 = Decoration$9;
	exports.Charts = Charts$1;
	exports.ActiveRingChart = ActiveRingChart;
	exports.CapsuleChart = CapsuleChart;
	exports.WaterLevelPond = WaterLevelPond;
	exports.PercentPond = PercentPond;
	exports.FlylineChart = FlyLineChart;
	exports.ConicalColumnChart = ConicalColumnChart;
	exports.DigitalFlop = DigitalFlop;
	exports.ScrollBoard = ScrollBoard;
	exports.ScrollRankingBoard = ScrollRankingBoard;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
