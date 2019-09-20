'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_4 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_5 = require('../chunk-7aa8c3ff.js');
var __chunk_3 = require('../chunk-a48cc30e.js');
require('../chunk-77a38e55.js');
require('../chunk-0d83f239.js');

var css = ".dv-border-box-6 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-6 .dv-svg-container {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-6 .dv-svg-container circle {\n  fill: gray;\n}\n.dv-border-box-6 .dv-svg-container polyline {\n  fill: none;\n  stroke-width: 1;\n  stroke: rgba(255, 255, 255, 0.35);\n}\n.dv-border-box-6 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
__chunk_4.styleInject(css);

var BorderBox = function BorderBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_3.useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var classNames = React.useMemo(function () {
    return __chunk_5.classnames('dv-border-box-6', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      { className: 'dv-svg-container', width: width, height: height },
      React__default.createElement('circle', { cx: '5', cy: '5', r: '2' }),
      React__default.createElement('circle', { cx: width - 5, cy: '5', r: '2' }),
      React__default.createElement('circle', { cx: width - 5, cy: height - 5, r: '2' }),
      React__default.createElement('circle', { cx: '5', cy: height - 5, r: '2' }),
      React__default.createElement('polyline', { points: '10, 4 ' + (width - 10) + ', 4' }),
      React__default.createElement('polyline', { points: '10, ' + (height - 4) + ' ' + (width - 10) + ', ' + (height - 4) }),
      React__default.createElement('polyline', { points: '5, 70 5, ' + (height - 70) }),
      React__default.createElement('polyline', { points: width - 5 + ', 70 ' + (width - 5) + ', ' + (height - 70) }),
      React__default.createElement('polyline', { points: '3, 10, 3, 50' }),
      React__default.createElement('polyline', { points: '7, 30 7, 80' }),
      React__default.createElement('polyline', { points: width - 3 + ', 10 ' + (width - 3) + ', 50' }),
      React__default.createElement('polyline', { points: width - 7 + ', 30 ' + (width - 7) + ', 80' }),
      React__default.createElement('polyline', { points: '3, ' + (height - 10) + ' 3, ' + (height - 50) }),
      React__default.createElement('polyline', { points: '7, ' + (height - 30) + ' 7, ' + (height - 80) }),
      React__default.createElement('polyline', {
        points: width - 3 + ', ' + (height - 10) + ' ' + (width - 3) + ', ' + (height - 50)
      }),
      React__default.createElement('polyline', {
        points: width - 7 + ', ' + (height - 30) + ' ' + (width - 7) + ', ' + (height - 80)
      })
    ),
    React__default.createElement(
      'div',
      { className: 'border-box-content' },
      children
    )
  );
};

BorderBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

module.exports = BorderBox;
//# sourceMappingURL=index.js.map
