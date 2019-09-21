import { a as styleInject, b as PropTypes } from '../chunk-0e6a3972.js';
import React, { useRef, useEffect, useMemo } from 'react';
import { a as classnames } from '../chunk-d9c8014f.js';
import { a as Chart } from '../chunk-31522730.js';
import { a as useAutoResize } from '../chunk-5d4646c1.js';
import '../chunk-5c43ede6.js';
import '../chunk-a820968d.js';
import '../chunk-960dcff1.js';
import '../chunk-b33d3196.js';
import '../chunk-0e3b7ae4.js';

var css = ".dv-charts-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-charts-container .charts-canvas-container {\n  width: 100%;\n  height: 100%;\n}\n";
styleInject(css);

var Charts = function Charts(_ref) {
  var _ref$option = _ref.option,
      option = _ref$option === undefined ? {} : _ref$option,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var chartRef = useRef(null);

  var chartInstanceofRef = useRef(null);

  useEffect(function () {
    chartInstanceofRef.current || (chartInstanceofRef.current = new Chart(chartRef.current));

    chartInstanceofRef.current.setOption(option || {});
  }, [option]);

  useEffect(function () {
    chartInstanceofRef.current.resize();
  }, [width, height]);

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
