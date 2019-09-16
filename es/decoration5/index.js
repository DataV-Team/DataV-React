import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useState } from 'react';
import { getPolylineLength } from '@jiaminghi/charts/lib/util';
import { a as useAutoResize } from '../chunk-45917cce.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from '../chunk-0e3b7ae4.js';

var css = ".style_dv-decoration-5__22hlk {\n  width: 100%;\n  height: 100%;\n}\n";
styleInject(css);

var index = (function () {
  var _useAutoResize = useAutoResize(calcSVGData, calcSVGData),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = useState({
    line1Points: '',
    line2Points: '',
    line1Length: 0,
    line2Length: 0
  }),
      _useState2 = slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      line1Points = _useState2$.line1Points,
      line2Points = _useState2$.line2Points,
      line1Length = _useState2$.line1Length,
      line2Length = _useState2$.line2Length,
      setState = _useState2[1];

  function calcSVGData() {
    var line1Points = [[0, height * 0.2], [width * 0.18, height * 0.2], [width * 0.2, height * 0.4], [width * 0.25, height * 0.4], [width * 0.27, height * 0.6], [width * 0.72, height * 0.6], [width * 0.75, height * 0.4], [width * 0.8, height * 0.4], [width * 0.82, height * 0.2], [width, height * 0.2]];

    var line2Points = [[width * 0.3, height * 0.8], [width * 0.7, height * 0.8]];

    var line1Length = getPolylineLength(line1Points);
    var line2Length = getPolylineLength(line2Points);

    line1Points = line1Points.map(function (point) {
      return point.join(',');
    }).join(' ');
    line2Points = line2Points.map(function (point) {
      return point.join(',');
    }).join(' ');

    setState({ line1Points: line1Points, line2Points: line2Points, line1Length: line1Length, line2Length: line2Length });
  }

  return React.createElement(
    'div',
    { className: 'dv-decoration-5', ref: domRef },
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
});

export default index;
//# sourceMappingURL=index.js.map
