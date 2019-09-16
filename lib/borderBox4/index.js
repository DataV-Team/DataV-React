'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_4 = require('../chunk-7aa8c3ff.js');
var __chunk_1 = require('../chunk-eb62fe28.js');
require('../chunk-0d83f239.js');

var css = ".dv-border-box-4 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-4 .dv-reverse {\n  transform: rotate(180deg);\n}\n.dv-border-box-4 .dv-border-svg-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n.dv-border-box-4 .dv-border-svg-container polyline {\n  fill: none;\n}\n.dv-border-box-4 .sred {\n  stroke: red;\n}\n.dv-border-box-4 .sblue {\n  stroke: rgba(0, 0, 255, 0.8);\n}\n.dv-border-box-4 .sw1 {\n  stroke-width: 1;\n}\n.dv-border-box-4 .sw3 {\n  stroke-width: 3px;\n  stroke-linecap: round;\n}\n.dv-border-box-4 .dv-bb4-line-1 {\n  stroke: red;\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-2 {\n  stroke: rgba(0, 0, 255, 0.8);\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-3 {\n  stroke: red;\n  stroke-width: 3px;\n  stroke-linecap: round;\n}\n.dv-border-box-4 .dv-bb4-line-4 {\n  stroke: red;\n  stroke-width: 3px;\n  stroke-linecap: round;\n}\n.dv-border-box-4 .dv-bb4-line-5 {\n  stroke: red;\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-6 {\n  stroke: rgba(0, 0, 255, 0.8);\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-7 {\n  stroke: rgba(0, 0, 255, 0.8);\n  stroke-width: 1;\n}\n.dv-border-box-4 .dv-bb4-line-8 {\n  stroke: rgba(0, 0, 255, 0.8);\n  stroke-width: 3px;\n  stroke-linecap: round;\n}\n.dv-border-box-4 .dv-bb4-line-9 {\n  stroke: red;\n  stroke-width: 3px;\n  stroke-linecap: round;\n  stroke-dasharray: 100 250;\n}\n.dv-border-box-4 .dv-bb4-line-10 {\n  stroke: rgba(0, 0, 255, 0.8);\n  stroke-width: 1;\n  stroke-dasharray: 80 270;\n}\n.dv-border-box-4 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
__chunk_3.styleInject(css);

var BorderBox = function BorderBox(_ref) {
  var children = _ref.children,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_1.useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var classNames = React.useMemo(function () {
    return __chunk_4.classnames('dv-border-box-4', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      {
        className: 'dv-border-svg-container ' + (reverse && 'dv-reverse'),
        width: width,
        height: height
      },
      React__default.createElement('polyline', {
        className: 'dv-bb4-line-1',
        points: '145, ' + (height - 5) + ' 40, ' + (height - 5) + ' 10, ' + (height - 35) + '\n          10, 40 40, 5 150, 5 170, 20 ' + (width - 15) + ', 20'
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb4-line-2',
        points: '245, ' + (height - 1) + ' 36, ' + (height - 1) + ' 14, ' + (height - 23) + '\n          14, ' + (height - 100)
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb4-line-3',
        points: '7, ' + (height - 40) + ' 7, ' + (height - 75)
      }),
      React__default.createElement('polyline', { className: 'dv-bb4-line-4', points: '28, 24 13, 41 13, 64' }),
      React__default.createElement('polyline', { className: 'dv-bb4-line-5', points: '5, 45 5, 140' }),
      React__default.createElement('polyline', { className: 'dv-bb4-line-6', points: '14, 75 14, 180' }),
      React__default.createElement('polyline', {
        className: 'dv-bb4-line-7',
        points: '55, 11 147, 11 167, 26 250, 26'
      }),
      React__default.createElement('polyline', { className: 'dv-bb4-line-8', points: '158, 5 173, 16' }),
      React__default.createElement('polyline', {
        className: 'dv-bb4-line-9',
        points: '200, 17 ' + (width - 10) + ', 17'
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb4-line-10',
        points: '385, 17 ' + (width - 10) + ', 17'
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
  reverse: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object

  // 指定 props 的默认值：
};BorderBox.defaultProps = {
  reverse: false
};

module.exports = BorderBox;
//# sourceMappingURL=index.js.map
