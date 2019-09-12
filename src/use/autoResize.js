import { useState, useCallback, useEffect, useRef } from "react";
import { debounce, observerDomResize } from "../util/index";

export default function useAutoResize(afterAutoResizeMixinInit, onResize) {
  const [state, setState] = useState({ width: 0, height: 0 });

  const domRef = useRef(null);
  const domObserverRef = useRef(null);
  const debounceSetWHFunRef = useRef(null);
  const onResizeRef = useRef(onResize);

  onResizeRef.current = onResize;

  const setWH = useCallback((resize = true) => {
    const { clientWidth, clientHeight } = domRef.current;

    setState({ width: clientWidth, height: clientHeight });

    if (typeof onResizeRef.current === "function" && resize)
      onResizeRef.current();
  }, []);

  const bindDomResizeCallback = useCallback(() => {
    domObserverRef.current = observerDomResize(
      domRef.current,
      debounceSetWHFunRef.current
    );

    window.addEventListener("resize", debounceSetWHFunRef.current);
  }, []);

  const unbindDomResizeCallback = useCallback(() => {
    const { current: domObserver } = domObserverRef;

    domObserver.disconnect();
    domObserver.takeRecords();
    domObserver = null;

    window.removeEventListener("resize", debounceSetWHFunRef.current);
  }, []);

  useEffect(() => {
    debounceSetWHFunRef.current = debounce(setWH, 100);

    debounceSetWHFunRef.current(false);

    bindDomResizeCallback();

    typeof afterAutoResizeMixinInit === "function" &&
      afterAutoResizeMixinInit();

    // 组件销毁时，清除事件
    return unbindDomResizeCallback;
  }, []);

  return { ...state, domRef };
}
