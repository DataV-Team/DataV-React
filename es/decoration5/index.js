import React, { useMemo } from 'react';
import { s as styleInject, P as PropTypes } from '../style-inject.es-4766d9ed.js';
import '../index-edb6df58.js';
import '../_babelHelpers-8fa0f879.js';
import { u as useAutoResize } from '../autoResize-4f5dcf40.js';
import { c as classnames } from '../index-183d4825.js';
import { u as util_7 } from '../index-23816ac9.js';

var css = ".dv-decoration-5 {\n  width: 100%;\n  height: 100%;\n}\n";
styleInject(css);

var Decoration = function Decoration(_ref) {
  var className = _ref.className,
      style = _ref.style;

  var _useAutoResize = useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  function calcSVGData() {
    var line1Points = [[0, height * 0.2], [width * 0.18, height * 0.2], [width * 0.2, height * 0.4], [width * 0.25, height * 0.4], [width * 0.27, height * 0.6], [width * 0.72, height * 0.6], [width * 0.75, height * 0.4], [width * 0.8, height * 0.4], [width * 0.82, height * 0.2], [width, height * 0.2]];

    var line2Points = [[width * 0.3, height * 0.8], [width * 0.7, height * 0.8]];

    var line1Length = util_7(line1Points);
    var line2Length = util_7(line2Points);

    line1Points = line1Points.map(function (point) {
      return point.join(',');
    }).join(' ');
    line2Points = line2Points.map(function (point) {
      return point.join(',');
    }).join(' ');

    return { line1Points: line1Points, line2Points: line2Points, line1Length: line1Length, line2Length: line2Length };
  }

  var _useMemo = useMemo(calcSVGData, [width, height]),
      line1Points = _useMemo.line1Points,
      line2Points = _useMemo.line2Points,
      line1Length = _useMemo.line1Length,
      line2Length = _useMemo.line2Length;

  var classNames = useMemo(function () {
    return classnames('dv-decoration-5', className);
  }, [className]);

  return React.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React.createElement(
      'svg',
      { width: width, height: height },
      React.createElement(
        'polyline',
        {
          fill: 'transparent',
          stroke: '#3f96a5',
          strokeWidth: '3',
          points: line1Points
        },
        React.createElement('animate', {
          attributeName: 'stroke-dasharray',
          attributeType: 'XML',
          from: '0, ' + line1Length / 2 + ', 0, ' + line1Length / 2,
          to: '0, 0, ' + line1Length + ', 0',
          dur: '1.2s',
          begin: '0s',
          calcMode: 'spline',
          keyTimes: '0;1',
          keySplines: '0.4,1,0.49,0.98',
          repeatCount: 'indefinite'
        })
      ),
      React.createElement(
        'polyline',
        {
          fill: 'transparent',
          stroke: '#3f96a5',
          strokeWidth: '2',
          points: line2Points
        },
        React.createElement('animate', {
          attributeName: 'stroke-dasharray',
          attributeType: 'XML',
          from: '0, ' + line2Length / 2 + ', 0, ' + line2Length / 2,
          to: '0, 0, ' + line2Length + ', 0',
          dur: '1.2s',
          begin: '0s',
          calcMode: 'spline',
          keyTimes: '0;1',
          keySplines: '.4,1,.49,.98',
          repeatCount: 'indefinite'
        })
      )
    )
  );
};

Decoration.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

export default Decoration;
//# sourceMappingURL=index.js.map
