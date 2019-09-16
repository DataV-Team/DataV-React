'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_4 = require('../chunk-7aa8c3ff.js');
var __chunk_1 = require('../chunk-eb62fe28.js');
require('../chunk-0d83f239.js');

var css = ".style_dv-border-box-5__xsaeu {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.style_dv-border-box-5__xsaeu .style_dv-reverse__rMXpn {\n  transform: rotate(180deg);\n}\n.style_dv-border-box-5__xsaeu .style_dv-svg-container__1h9F2 {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n.style_dv-border-box-5__xsaeu .style_dv-svg-container__1h9F2 polyline {\n  fill: none;\n}\n.style_dv-border-box-5__xsaeu .style_dv-bb5-line-1__DjtE9 {\n  stroke-width: 1;\n  stroke: rgba(255, 255, 255, 0.35);\n}\n.style_dv-border-box-5__xsaeu .style_dv-bb5-line-2__1k8HT {\n  stroke: rgba(255, 255, 255, 0.2);\n}\n.style_dv-border-box-5__xsaeu .style_dv-bb5-line-3__2cOdP,\n.style_dv-border-box-5__xsaeu .style_dv-bb5-line-6__2_9IR {\n  stroke-width: 5;\n  stroke: rgba(255, 255, 255, 0.15);\n}\n.style_dv-border-box-5__xsaeu .style_dv-bb5-line-4__65Jci,\n.style_dv-border-box-5__xsaeu .style_dv-bb5-line-5__rA5Yp {\n  stroke-width: 2;\n  stroke: rgba(255, 255, 255, 0.15);\n}\n.style_dv-border-box-5__xsaeu .style_border-box-content__2uz7p {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
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
    return __chunk_4.classnames('dv-border-box-5', className);
  }, className);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      {
        className: 'dv-svg-container  ' + (reverse && 'dv-reverse'),
        width: width,
        height: height
      },
      React__default.createElement('polyline', {
        className: 'dv-bb5-line-1',
        points: '8, 5 ' + (width - 5) + ', 5 ' + (width - 5) + ', ' + (height - 100) + '\n          ' + (width - 100) + ', ' + (height - 5) + ' 8, ' + (height - 5) + ' 8, 5'
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb5-line-2',
        points: '3, 5 ' + (width - 20) + ', 5 ' + (width - 20) + ', ' + (height - 60) + '\n          ' + (width - 74) + ', ' + (height - 5) + ' 3, ' + (height - 5) + ' 3, 5'
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb5-line-3',
        points: '50, 13 ' + (width - 35) + ', 13'
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb5-line-4',
        points: '15, 20 ' + (width - 35) + ', 20'
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb5-line-5',
        points: '15, ' + (height - 20) + ' ' + (width - 110) + ', ' + (height - 20)
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb5-line-6',
        points: '15, ' + (height - 13) + ' ' + (width - 110) + ', ' + (height - 13)
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
