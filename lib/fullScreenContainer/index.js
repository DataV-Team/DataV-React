'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_1 = require('../chunk-eb62fe28.js');
var __chunk_2 = require('../chunk-0d83f239.js');

var css = "#style_dv-full-screen-container__31S-J {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n  transform-origin: left top;\n  z-index: 999;\n}\n";
__chunk_3.styleInject(css);

var FullScreenContainer = function FullScreenContainer(_ref) {
  var children = _ref.children;

  var _useAutoResize = __chunk_1.useAutoResize(afterAutoResizeMixinInit, function () {
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
    { id: 'dv-full-screen-container', ref: domRef },
    ready && children
  );
};

FullScreenContainer.propTypes = {
  children: PropTypes.node
};

module.exports = FullScreenContainer;
//# sourceMappingURL=index.js.map
