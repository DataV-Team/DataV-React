import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { a as classnames } from '../chunk-84657507.js';
import { a as Chart } from '../chunk-6748d18c.js';
import { a as useAutoResize } from '../chunk-d3494329.js';
import '../chunk-41d81e09.js';
import '../chunk-345ae3c3.js';
import '../chunk-57209535.js';
import '../chunk-0e3b7ae4.js';

var css = ".dv-charts-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-charts-container .charts-canvas-container {\n  width: 100%;\n  height: 100%;\n}\n";
styleInject(css);

var Charts = function Charts(_ref) {
  var _ref$option = _ref.option,
      option = _ref$option === undefined ? {} : _ref$option,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = useAutoResize(initChart, onResize),
      domRef = _useAutoResize.domRef;

  var chartRef = useRef(null);

  var chartInstanceofRef = useRef(null);

  function initChart() {
    chartInstanceofRef.current = new Chart(chartRef.current);

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

  var classNames = useMemo(function () {
    return classnames('dv-charts-container', className);
  }, [className]);

  return React.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React.createElement('div', { className: 'charts-canvas-container', ref: chartRef })
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

export default Charts;
//# sourceMappingURL=index.js.map
