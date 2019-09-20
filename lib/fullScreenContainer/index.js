'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_4 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_3 = require('../chunk-a48cc30e.js');
var __chunk_2 = require('../chunk-0d83f239.js');
require('../chunk-77a38e55.js');

var css = "#dv-full-screen-container {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n  transform-origin: left top;\n  z-index: 999;\n}\n";
__chunk_4.styleInject(css);

var FullScreenContainer = function FullScreenContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_3.useAutoResize(afterAutoResizeMixinInit, function () {
    return setAppScale(allWidth);
  }),
      domRef = _useAutoResize.domRef;

  var _useState = React.useState({
    allWidth: 0,
    ready: false
  }),
      _useState2 = __chunk_2.slicedToArray(_useState, 2),
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
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

module.exports = FullScreenContainer;
//# sourceMappingURL=index.js.map
