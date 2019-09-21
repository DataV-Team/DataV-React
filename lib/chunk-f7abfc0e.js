'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var __chunk_2 = require('./chunk-4df972f9.js');
var __chunk_3 = require('./chunk-0d83f239.js');

function useAutoResize(afterAutoResizeMixinInit, onResize) {
  var _useState = React.useState({ width: 0, height: 0 }),
      _useState2 = __chunk_3.slicedToArray(_useState, 2),
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
    domObserverRef.current = __chunk_2.observerDomResize(domRef.current, debounceSetWHFunRef.current);

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
    debounceSetWHFunRef.current = __chunk_2.debounce(setWH, 100);

    debounceSetWHFunRef.current(false);

    bindDomResizeCallback();

    typeof afterAutoResizeMixinInit === 'function' && afterAutoResizeMixinInit();

    // 组件销毁时，清除事件
    return unbindDomResizeCallback;
  }, []);

  return __chunk_3._extends({}, state, { domRef: domRef });
}

exports.useAutoResize = useAutoResize;
//# sourceMappingURL=chunk-f7abfc0e.js.map
