import { useState, useCallback, useEffect, useRef } from 'react';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from './chunk-0e3b7ae4.js';

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

function useAutoResize(afterAutoResizeMixinInit, onResize) {
  var _useState = useState({ width: 0, height: 0 }),
      _useState2 = slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var domRef = useRef(null);
  var domObserverRef = useRef(null);
  var debounceSetWHFunRef = useRef(null);
  var onResizeRef = useRef(onResize);

  onResizeRef.current = onResize;

  var setWH = useCallback(function () {
    var resize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var _domRef$current = domRef.current,
        clientWidth = _domRef$current.clientWidth,
        clientHeight = _domRef$current.clientHeight;


    setState({ width: clientWidth, height: clientHeight });

    if (typeof onResizeRef.current === 'function' && resize) {
      onResizeRef.current();
    }
  }, []);

  var bindDomResizeCallback = useCallback(function () {
    domObserverRef.current = observerDomResize(domRef.current, debounceSetWHFunRef.current);

    window.addEventListener('resize', debounceSetWHFunRef.current);
  }, []);

  var unbindDomResizeCallback = useCallback(function () {
    var domObserver = domObserverRef.current;


    domObserver.disconnect();
    domObserver.takeRecords();
    domObserverRef.current = null;

    window.removeEventListener('resize', debounceSetWHFunRef.current);
  }, []);

  useEffect(function () {
    debounceSetWHFunRef.current = debounce(setWH, 100);

    debounceSetWHFunRef.current(false);

    bindDomResizeCallback();

    typeof afterAutoResizeMixinInit === 'function' && afterAutoResizeMixinInit();

    // 组件销毁时，清除事件
    return unbindDomResizeCallback;
  }, []);

  return _extends({}, state, { domRef: domRef });
}

export { useAutoResize as a, randomExtend as b, getPointDistance as c, co as d };
//# sourceMappingURL=chunk-d3494329.js.map
