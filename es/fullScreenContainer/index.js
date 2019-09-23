import React, { useState } from 'react';
import { s as styleInject, P as PropTypes } from '../style-inject.es-4766d9ed.js';
import '../index-edb6df58.js';
import { s as slicedToArray } from '../_babelHelpers-8fa0f879.js';
import { u as useAutoResize } from '../autoResize-4f5dcf40.js';

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

  var _useState = useState({
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

  return React.createElement(
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
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default FullScreenContainer;
//# sourceMappingURL=index.js.map
