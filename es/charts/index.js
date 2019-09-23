import React, { useRef, useEffect, useMemo } from 'react';
import { s as styleInject, P as PropTypes } from '../style-inject.es-4766d9ed.js';
import '../index-edb6df58.js';
import '../_babelHelpers-8fa0f879.js';
import { u as useAutoResize } from '../autoResize-4f5dcf40.js';
import { c as classnames } from '../index-183d4825.js';
import '../index-23816ac9.js';
import '../index-8b5c3ecc.js';
import '../index-207528fb.js';
import { C as Charts$1 } from '../index-9fee2098.js';

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
    chartInstanceofRef.current || (chartInstanceofRef.current = new Charts$1(chartRef.current));

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
