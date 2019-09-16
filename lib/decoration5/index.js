'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var util = require('@jiaminghi/charts/lib/util');
var __chunk_1 = require('../chunk-eb62fe28.js');
var __chunk_2 = require('../chunk-0d83f239.js');

var css = ".style_dv-decoration-5__22hlk {\n  width: 100%;\n  height: 100%;\n}\n";
__chunk_3.styleInject(css);

var index = (function () {
  var _useAutoResize = __chunk_1.useAutoResize(calcSVGData, calcSVGData),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = React.useState({
    line1Points: '',
    line2Points: '',
    line1Length: 0,
    line2Length: 0
  }),
      _useState2 = __chunk_2.slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      line1Points = _useState2$.line1Points,
      line2Points = _useState2$.line2Points,
      line1Length = _useState2$.line1Length,
      line2Length = _useState2$.line2Length,
      setState = _useState2[1];

  function calcSVGData() {
    var line1Points = [[0, height * 0.2], [width * 0.18, height * 0.2], [width * 0.2, height * 0.4], [width * 0.25, height * 0.4], [width * 0.27, height * 0.6], [width * 0.72, height * 0.6], [width * 0.75, height * 0.4], [width * 0.8, height * 0.4], [width * 0.82, height * 0.2], [width, height * 0.2]];

    var line2Points = [[width * 0.3, height * 0.8], [width * 0.7, height * 0.8]];

    var line1Length = util.getPolylineLength(line1Points);
    var line2Length = util.getPolylineLength(line2Points);

    line1Points = line1Points.map(function (point) {
      return point.join(',');
    }).join(' ');
    line2Points = line2Points.map(function (point) {
      return point.join(',');
    }).join(' ');

    setState({ line1Points: line1Points, line2Points: line2Points, line1Length: line1Length, line2Length: line2Length });
  }

  return React__default.createElement(
    'div',
    { className: 'dv-decoration-5', ref: domRef },
    React__default.createElement(
      'svg',
      { width: width, height: height },
      React__default.createElement(
        'polyline',
        {
          fill: 'transparent',
          stroke: '#3f96a5',
          strokeWidth: '3',
          points: line1Points
        },
        React__default.createElement('animate', {
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
      React__default.createElement(
        'polyline',
        {
          fill: 'transparent',
          stroke: '#3f96a5',
          strokeWidth: '2',
          points: line2Points
        },
        React__default.createElement('animate', {
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

module.exports = index;
//# sourceMappingURL=index.js.map
