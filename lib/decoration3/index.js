'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var __chunk_1 = require('../chunk-eb62fe28.js');
var __chunk_2 = require('../chunk-0d83f239.js');

var css = ".style_dv-decoration-3__MVfo5 {\n  width: 100%;\n  height: 100%;\n}\n.style_dv-decoration-3__MVfo5 svg {\n  transform-origin: left top;\n}\n";
__chunk_3.styleInject(css);

var pointSideLength = 7;

var svgWH = [300, 35];

var rowNum = 2;

var rowPoints = 25;

var halfPointSideLength = pointSideLength / 2;

function getPoints() {
  var w = svgWH[0],
      h = svgWH[1];


  var horizontalGap = w / (rowPoints + 1);
  var verticalGap = h / (rowNum + 1);

  var points = new Array(rowNum).fill(0).map(function (foo, i) {
    return new Array(rowPoints).fill(0).map(function (foo, j) {
      return [horizontalGap * (j + 1), verticalGap * (i + 1)];
    });
  });

  return points.reduce(function (all, item) {
    return [].concat(__chunk_2.toConsumableArray(all), __chunk_2.toConsumableArray(item));
  }, []);
}

var index = (function () {
  var _useAutoResize = __chunk_1.useAutoResize(calcSVGData, calcSVGData),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = React.useState({
    svgScale: [1, 1],
    points: []
  }),
      _useState2 = __chunk_2.slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      svgScale = _useState2$.svgScale,
      points = _useState2$.points,
      setState = _useState2[1];

  function calcSVGData() {
    setState({
      points: getPoints(),
      svgScale: [width / svgWH[0], height / svgWH[1]]
    });
  }

  return React__default.createElement(
    'div',
    { className: 'dv-decoration-3', ref: domRef },
    React__default.createElement(
      'svg',
      {
        width: svgWH[0] + 'px',
        height: svgWH[1] + 'px',
        style: 'transform:scale(' + svgScale[0] + ',' + svgScale[1] + ');'
      },
      points.map(function (point, i) {
        return React__default.createElement(
          'rect',
          {
            key: i,
            fill: '#7acaec',
            x: point[0] - halfPointSideLength,
            y: point[1] - halfPointSideLength,
            width: pointSideLength,
            height: pointSideLength
          },
          Math.random() > 0.6 && React__default.createElement('animate', {
            attributeName: 'fill',
            values: '#7acaec;transparent',
            dur: Math.random() + 1 + 's',
            begin: Math.random() * 2,
            repeatCount: 'indefinite'
          })
        );
      })
    )
  );
});

module.exports = index;
//# sourceMappingURL=index.js.map
