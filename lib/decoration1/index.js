'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var __chunk_1 = require('../chunk-eb62fe28.js');
var __chunk_2 = require('../chunk-0d83f239.js');

var css = ".style_dv-decoration-1__137QM {\n  width: 100%;\n  height: 100%;\n}\n.style_dv-decoration-1__137QM svg {\n  transform-origin: left top;\n}\n";
__chunk_3.styleInject(css);

var pointSideLength = 2.5;

var halfPointSideLength = pointSideLength / 2;

var svgWH = [200, 50];

var rowNum = 4;

var rowPoints = 20;

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

    points: [],

    rects: []
  }),
      _useState2 = __chunk_2.slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      svgScale = _useState2$.svgScale,
      points = _useState2$.points,
      rects = _useState2$.rects,
      setState = _useState2[1];

  function calcSVGData() {
    var points = getPoints();

    setState({
      points: points,
      rects: [points[rowPoints * 2 - 1], points[rowPoints * 2 - 3]],
      svgScale: [width / svgWH[0], height / svgWH[1]]
    });
  }

  return React__default.createElement(
    'div',
    { className: 'dv-decoration-1', ref: domRef },
    React__default.createElement(
      'svg',
      {
        width: svgWH[0] + 'px',
        height: svgWH[1] + 'px',
        style: 'transform:scale(' + svgScale[0] + ',' + svgScale[1] + ');'
      },
      points.reduce(function (prev, point, i) {
        return Math.random() > 0.6 ? [].concat(__chunk_2.toConsumableArray(prev), [React__default.createElement(
          'rect',
          {
            key: i,
            fill: '#fff',
            x: point[0] - halfPointSideLength,
            y: point[1] - halfPointSideLength,
            width: pointSideLength,
            height: pointSideLength
          },
          Math.random() > 0.6 && React__default.createElement('animate', {
            attributeName: 'fill',
            values: '#fff;transparent',
            dur: '1s',
            begin: Math.random() * 2,
            repeatCount: 'indefinite'
          })
        )]) : prev;
      }, []),
      !!rects[0] && React__default.createElement(
        'rect',
        {
          fill: '#0de7c2',
          x: rects[0][0] - pointSideLength,
          y: rects[0][1] - pointSideLength,
          width: pointSideLength * 2,
          height: pointSideLength * 2
        },
        React__default.createElement('animate', {
          attributeName: 'width',
          values: '0;' + pointSideLength * 2,
          dur: '2s',
          repeatCount: 'indefinite'
        }),
        React__default.createElement('animate', {
          attributeName: 'height',
          values: '0;' + pointSideLength * 2,
          dur: '2s',
          repeatCount: 'indefinite'
        }),
        React__default.createElement('animate', {
          attributeName: 'x',
          values: rects[0][0] + ';' + (rects[0][0] - pointSideLength),
          dur: '2s',
          repeatCount: 'indefinite'
        }),
        React__default.createElement('animate', {
          attributeName: 'y',
          values: rects[0][1] + ';' + (rects[0][1] - pointSideLength),
          dur: '2s',
          repeatCount: 'indefinite'
        })
      ),
      !!rects[1] && React__default.createElement(
        'rect',
        {
          fill: '#0de7c2',
          x: rects[1][0] - 40,
          y: rects[1][1] - pointSideLength,
          width: '40',
          height: pointSideLength * 2
        },
        React__default.createElement('animate', {
          attributeName: 'width',
          values: '0;40;0',
          dur: '2s',
          repeatCount: 'indefinite'
        }),
        React__default.createElement('animate', {
          attributeName: 'x',
          values: rects[1][0] + ';' + (rects[1][0] - 40) + ';' + rects[1][0],
          dur: '2s',
          repeatCount: 'indefinite'
        })
      )
    )
  );
});

module.exports = index;
//# sourceMappingURL=index.js.map
