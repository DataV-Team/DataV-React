import React, { useMemo } from 'react';
import { s as styleInject, P as PropTypes } from '../style-inject.es-4766d9ed.js';
import '../index-edb6df58.js';
import '../_babelHelpers-8fa0f879.js';
import { u as useAutoResize } from '../autoResize-4f5dcf40.js';
import { c as classnames } from '../index-183d4825.js';

var css = ".dv-decoration-2 {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n";
styleInject(css);

var Decoration = function Decoration(_ref) {
  var _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  function calcSVGData() {
    return reverse ? { w: 1, h: height, x: width / 2, y: 0 } : { w: width, h: 1, x: 0, y: height / 2 };
  }

  var _useMemo = useMemo(calcSVGData, [reverse, width, height]),
      x = _useMemo.x,
      y = _useMemo.y,
      w = _useMemo.w,
      h = _useMemo.h;

  var classNames = useMemo(function () {
    return classnames('dv-decoration-2', className);
  }, [className]);

  return React.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React.createElement(
      'svg',
      { width: width + 'px', height: height + 'px' },
      React.createElement(
        'rect',
        { x: x, y: y, width: w, height: h, fill: '#3faacb' },
        React.createElement('animate', {
          attributeName: reverse ? 'height' : 'width',
          from: '0',
          to: reverse ? height : width,
          dur: '6s',
          calcMode: 'spline',
          keyTimes: '0;1',
          keySplines: '.42,0,.58,1',
          repeatCount: 'indefinite'
        })
      ),
      React.createElement(
        'rect',
        { x: x, y: y, width: '1', height: '1', fill: '#fff' },
        React.createElement('animate', {
          attributeName: reverse ? 'y' : 'x',
          from: '0',
          to: reverse ? height : width,
          dur: '6s',
          calcMode: 'spline',
          keyTimes: '0;1',
          keySplines: '0.42,0,0.58,1',
          repeatCount: 'indefinite'
        })
      )
    )
  );
};

Decoration.propTypes = {
  reverse: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object

  // 指定 props 的默认值：
};Decoration.defaultProps = {
  reverse: false
};

export default Decoration;
//# sourceMappingURL=index.js.map
