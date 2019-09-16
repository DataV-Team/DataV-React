'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var Charts = _interopDefault(require('@jiaminghi/charts'));
var __chunk_1 = require('../chunk-eb62fe28.js');
require('../chunk-0d83f239.js');

var css = ".style_dv-charts-container__3djB5 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.style_dv-charts-container__3djB5 .style_charts-canvas-container__36Qhn {\n  width: 100%;\n  height: 100%;\n}\n";
__chunk_3.styleInject(css);

var Charts$1 = function Charts$$1(_ref) {
  var _ref$option = _ref.option,
      option = _ref$option === undefined ? {} : _ref$option;

  var _useAutoResize = __chunk_1.useAutoResize(initChart, onResize),
      domRef = _useAutoResize.domRef;

  var chartRef = React.useRef(null);

  var chartInstanceofRef = React.useRef(null);

  function initChart() {
    chartInstanceofRef.current = new Charts(chartRef.current);

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

  return React__default.createElement(
    'div',
    { className: 'dv-charts-container', ref: domRef },
    React__default.createElement('div', { className: 'charts-canvas-container', ref: chartRef })
  );
};

Charts$1.propTypes = {
  option: PropTypes.object

  // 指定 props 的默认值：
};Charts$1.defaultProps = {
  option: {}
};

module.exports = Charts$1;
//# sourceMappingURL=index.js.map
