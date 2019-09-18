import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { a as useAutoResize } from '../chunk-d3494329.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from '../chunk-0e3b7ae4.js';

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
