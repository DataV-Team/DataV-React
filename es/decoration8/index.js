import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { a as classnames } from '../chunk-84657507.js';
import { a as useAutoResize } from '../chunk-45917cce.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from '../chunk-0e3b7ae4.js';

var css = ".style_dv-decoration-8__1VKhs {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n";
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

  var xPos = function xPos(pos) {
    return !reverse ? pos : width - pos;
  };

  var _useMemo = useMemo(function () {
    return [xPos(0) + ', 0 ' + xPos(30) + ', ' + height / 2, xPos(20) + ', 0 ' + xPos(50) + ', ' + height / 2 + ' ' + xPos(width) + ', ' + height / 2, xPos(0) + ', ' + (height - 3) + ', ' + xPos(200) + ', ' + (height - 3)];
  }, [reverse, width, height]),
      _useMemo2 = slicedToArray(_useMemo, 3),
      pointsOne = _useMemo2[0],
      pointsTwo = _useMemo2[1],
      pointsThree = _useMemo2[2];

  var classNames = useMemo(function () {
    return classnames('dv-decoration-8', className);
  }, className);

  return React.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React.createElement(
      'svg',
      { width: width, height: height },
      React.createElement('polyline', {
        stroke: '#3f96a5',
        strokeWidth: '2',
        fill: 'transparent',
        points: pointsOne
      }),
      React.createElement('polyline', {
        stroke: '#3f96a5',
        strokeWidth: '2',
        fill: 'transparent',
        points: pointsTwo
      }),
      React.createElement('polyline', {
        stroke: '#3f96a5',
        fill: 'transparent',
        strokeWidth: '3',
        points: pointsThree
      })
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
