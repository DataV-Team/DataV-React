'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_4 = require('../chunk-7aa8c3ff.js');
var __chunk_8 = require('../chunk-ece06e70.js');
var __chunk_1 = require('../chunk-eb62fe28.js');
require('../chunk-74662e50.js');
require('../chunk-da636201.js');
require('../chunk-0a828f61.js');
require('../chunk-0d83f239.js');

var css = ".dv-charts-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-charts-container .charts-canvas-container {\n  width: 100%;\n  height: 100%;\n}\n";
__chunk_3.styleInject(css);

var Charts = function Charts(_ref) {
  var _ref$option = _ref.option,
      option = _ref$option === undefined ? {} : _ref$option,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_1.useAutoResize(initChart, onResize),
      domRef = _useAutoResize.domRef;

  var chartRef = React.useRef(null);

  var chartInstanceofRef = React.useRef(null);

  function initChart() {
    chartInstanceofRef.current = new __chunk_8.Chart(chartRef.current);

    if (!option) return;

    chartInstanceofRef.current.setOption(option);
  }

  function onResize() {
    var chart = chartInstanceofRef.current;

    if (!chart) return;

    chart.resize();
  }

  React.useEffect(function () {
    var newOption = option;
    var chart = chartInstanceofRef.current;

    if (!chart) return;

    if (!newOption) newOption = {};

    chart.setOption(newOption);
  }, [option]);

  var classNames = React.useMemo(function () {
    return __chunk_4.classnames('dv-charts-container', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement('div', { className: 'charts-canvas-container', ref: chartRef })
  );
};

Charts.propTypes = {
  option: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object

  // 指定 props 的默认值：
};Charts.defaultProps = {
  option: {}
};

module.exports = Charts;
//# sourceMappingURL=index.js.map
