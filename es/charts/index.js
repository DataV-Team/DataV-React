import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Charts from '@jiaminghi/charts';
import { a as useAutoResize } from '../chunk-45917cce.js';
import '../chunk-0e3b7ae4.js';

var css = ".style_dv-charts-container__3djB5 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.style_dv-charts-container__3djB5 .style_charts-canvas-container__36Qhn {\n  width: 100%;\n  height: 100%;\n}\n";
styleInject(css);

var Charts$1 = function Charts$$1(_ref) {
  var _ref$option = _ref.option,
      option = _ref$option === undefined ? {} : _ref$option;

  var _useAutoResize = useAutoResize(initChart, onResize),
      domRef = _useAutoResize.domRef;

  var chartRef = useRef(null);

  var chartInstanceofRef = useRef(null);

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

  useEffect(function () {
    var newOption = option;
    var chart = chartInstanceofRef.current;

    if (!chart) return;

    if (!newOption) newOption = {};

    chart.setOption(newOption);
  }, [option]);

  return React.createElement(
    'div',
    { className: 'dv-charts-container', ref: domRef },
    React.createElement('div', { className: 'charts-canvas-container', ref: chartRef })
  );
};

Charts$1.propTypes = {
  option: PropTypes.object

  // 指定 props 的默认值：
};Charts$1.defaultProps = {
  option: {}
};

export default Charts$1;
//# sourceMappingURL=index.js.map
