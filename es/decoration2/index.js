import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { a as useAutoResize } from '../chunk-45917cce.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from '../chunk-0e3b7ae4.js';

var css = ".style_dv-decoration-2__373JB {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n";
styleInject(css);

var Decoration = function Decoration(_ref) {
  var _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse;

  var _useAutoResize = useAutoResize(calcSVGData, calcSVGData),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = useState({ x: 0, y: 0, w: 0, h: 0 }),
      _useState2 = slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      x = _useState2$.x,
      y = _useState2$.y,
      w = _useState2$.w,
      h = _useState2$.h,
      setState = _useState2[1];

  function calcSVGData() {
    setState(reverse ? { w: 1, h: height, x: width / 2, y: 0 } : { w: width, h: 1, x: 0, y: height / 2 });
  }

  useEffect(calcSVGData, [reverse]);

  return React.createElement(
    'div',
    { className: 'dv-decoration-2', ref: domRef },
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
  reverse: PropTypes.bool

  // 指定 props 的默认值：
};Decoration.defaultProps = {
  reverse: false
};

export default Decoration;
//# sourceMappingURL=index.js.map
