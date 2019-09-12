import React, { useState } from "react";

import useAutoResize from "../../use/autoResize";

import "./style.less";

export default ({ children }) => {
  const { domRef } = useAutoResize(afterAutoResizeMixinInit, onResize);

  const [{ allWidth, ready }, setState] = useState({
    allWidth: 0,
    ready: false
  });

  function afterAutoResizeMixinInit() {
    const { width, height } = window.screen;

    Object.assign(domRef.current.style, {
      width: `${width}px`,
      height: `${height}px`
    });

    setAppScale(width);

    setState({ allWidth: width, ready: true });
  }

  const setAppScale = allWidth =>
    (domRef.current.style.transform = `scale(${document.body.clientWidth /
      allWidth})`);

  const onResize = () => setAppScale(allWidth);

  return (
    <div id="dv-full-screen-container" ref={domRef}>
      {ready && children}
    </div>
  );
};
