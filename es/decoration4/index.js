import { a as styleInject } from '../chunk-80bd9449.js';
import React from 'react';
import PropTypes from 'prop-types';
import { a as useAutoResize } from '../chunk-45917cce.js';
import '../chunk-0e3b7ae4.js';

var css = ".style_dv-decoration-4__Eadez {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.style_dv-decoration-4__Eadez .style_container__1twl- {\n  display: flex;\n  overflow: hidden;\n  position: absolute;\n}\n.style_dv-decoration-4__Eadez .style_normal__2l1Fz {\n  height: 0% !important;\n  animation: style_ani-height__3ubtD 3s ease-in-out infinite;\n  left: 50%;\n  margin-left: -2px;\n}\n.style_dv-decoration-4__Eadez .style_reverse__3hqVY {\n  width: 0% !important;\n  animation: style_ani-width__19LJB 3s ease-in-out infinite;\n  top: 50%;\n  margin-top: -2px;\n}\n@keyframes style_ani-height__3ubtD {\n  70% {\n    height: 100%;\n  }\n  100% {\n    height: 100%;\n  }\n}\n@keyframes style_ani-width__19LJB {\n  70% {\n    width: 100%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n";
styleInject(css);

var Decoration = function Decoration(_ref) {
  var _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse;

  var _useAutoResize = useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  return React.createElement(
    'div',
    { className: 'dv-decoration-4', ref: domRef },
    React.createElement(
      'div',
      {
        className: 'container ' + (reverse ? 'reverse' : 'normal'),
        style: reverse ? 'width:' + width + 'px;height:5px' : 'width:5px;height:' + height + 'px;'
      },
      React.createElement(
        'svg',
        { width: reverse ? width : 5, height: reverse ? 5 : height },
        React.createElement('polyline', {
          stroke: 'rgba(255, 255, 255, 0.3)',
          points: reverse ? '0, 2.5 ' + width + ', 2.5' : '2.5, 0 2.5, ' + height
        }),
        React.createElement('polyline', {
          className: 'bold-line',
          stroke: 'rgba(255, 255, 255, 0.3)',
          strokeWidth: '3',
          strokeDasharray: '20, 80',
          strokeDashoffset: '-30',
          points: reverse ? '0, 2.5 ' + width + ', 2.5' : '2.5, 0 2.5, ' + height
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
