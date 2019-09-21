'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('../chunk-23d8dc6e.js');
var React = require('react');
var React__default = _interopDefault(React);
var __chunk_4 = require('../chunk-f7abfc0e.js');
var __chunk_3 = require('../chunk-0d83f239.js');
require('../chunk-4df972f9.js');

var css = "#dv-full-screen-container {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n  transform-origin: left top;\n  z-index: 999;\n}\n";
__chunk_1.styleInject(css);

var FullScreenContainer = function FullScreenContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_4.useAutoResize(afterAutoResizeMixinInit, function () {
    return setAppScale(allWidth);
  }),
      domRef = _useAutoResize.domRef;

  var _useState = React.useState({
    allWidth: 0,
    ready: false
  }),
      _useState2 = __chunk_3.slicedToArray(_useState, 2),
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
  children: __chunk_1.PropTypes.node,
  className: __chunk_1.PropTypes.string,
  style: __chunk_1.PropTypes.object
};

module.exports = FullScreenContainer;
//# sourceMappingURL=index.js.map
