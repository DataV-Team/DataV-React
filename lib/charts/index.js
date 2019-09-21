'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('../chunk-23d8dc6e.js');
var React = require('react');
var React__default = _interopDefault(React);
var __chunk_5 = require('../chunk-84e855b8.js');
var __chunk_9 = require('../chunk-991b822f.js');
var __chunk_4 = require('../chunk-f7abfc0e.js');
require('../chunk-4cecce38.js');
require('../chunk-a66f1aee.js');
require('../chunk-a0fe3ee8.js');
require('../chunk-4df972f9.js');
require('../chunk-0d83f239.js');

var css = ".dv-charts-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-charts-container .charts-canvas-container {\n  width: 100%;\n  height: 100%;\n}\n";
__chunk_1.styleInject(css);

var Charts = function Charts(_ref) {
  var _ref$option = _ref.option,
      option = _ref$option === undefined ? {} : _ref$option,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_4.useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var chartRef = React.useRef(null);

  var chartInstanceofRef = React.useRef(null);

  React.useEffect(function () {
    chartInstanceofRef.current || (chartInstanceofRef.current = new __chunk_9.Chart(chartRef.current));

    chartInstanceofRef.current.setOption(option || {});
  }, [option]);

  React.useEffect(function () {
    chartInstanceofRef.current.resize();
  }, [width, height]);

  var classNames = React.useMemo(function () {
    return __chunk_5.classnames('dv-charts-container', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement('div', { className: 'charts-canvas-container', ref: chartRef })
  );
};

Charts.propTypes = {
  option: __chunk_1.PropTypes.object,
  className: __chunk_1.PropTypes.string,
  style: __chunk_1.PropTypes.object

  // 指定 props 的默认值：
};Charts.defaultProps = {
  option: {}
};

module.exports = Charts;
//# sourceMappingURL=index.js.map
