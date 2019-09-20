'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_4 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_5 = require('../chunk-7aa8c3ff.js');
var __chunk_9 = require('../chunk-f0ee5f01.js');
var __chunk_3 = require('../chunk-a48cc30e.js');
require('../chunk-5ef77582.js');
require('../chunk-4d511055.js');
require('../chunk-313ce2cd.js');
require('../chunk-77a38e55.js');
require('../chunk-0d83f239.js');

var css = ".dv-charts-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-charts-container .charts-canvas-container {\n  width: 100%;\n  height: 100%;\n}\n";
__chunk_4.styleInject(css);

var Charts = function Charts(_ref) {
  var _ref$option = _ref.option,
      option = _ref$option === undefined ? {} : _ref$option,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_3.useAutoResize(initChart, onResize),
      domRef = _useAutoResize.domRef;

  var chartRef = React.useRef(null);

  var chartInstanceofRef = React.useRef(null);

  function initChart() {
    chartInstanceofRef.current = new __chunk_9.Chart(chartRef.current);

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
    return __chunk_5.classnames('dv-charts-container', className);
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
