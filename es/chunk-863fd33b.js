import { useState, useCallback, useEffect, useRef } from 'react';
import { a as debounce, b as observerDomResize } from './chunk-f302ca2c.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from './chunk-0e3b7ae4.js';

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

export { useAutoResize as a };
//# sourceMappingURL=chunk-863fd33b.js.map
