'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_4 = require('../chunk-7aa8c3ff.js');
var __chunk_1 = require('../chunk-d58196f4.js');
var __chunk_2 = require('../chunk-0d83f239.js');

var css = ".dv-decoration-6 {\n  width: 100%;\n  height: 100%;\n}\n.dv-decoration-6 svg {\n  transform-origin: left top;\n}\n";
__chunk_3.styleInject(css);

var svgWH = [300, 35];

var rowNum = 1;
var rowPoints = 40;

var rectWidth = 7;
var halfRectWidth = rectWidth / 2;

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

function getData() {
  var h = svgWH[1];


  var heights = new Array(rowNum * rowPoints).fill(0).map(function (foo) {
    return Math.random() > 0.8 ? __chunk_1.randomExtend(0.7 * h, h) : __chunk_1.randomExtend(0.2 * h, 0.5 * h);
  });

  var minHeights = new Array(rowNum * rowPoints).fill(0).map(function (foo, i) {
    return heights[i] * Math.random();
  });

  var randoms = new Array(rowNum * rowPoints).fill(0).map(function (foo) {
    return Math.random() + 1.5;
  });

  return { heights: heights, minHeights: minHeights, randoms: randoms };
}

var Decoration = function Decoration(_ref) {
  var className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_1.useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  function calcSVGData() {
    return __chunk_2._extends({}, getData(), {
      points: getPoints(),
      svgScale: [width / svgWH[0], height / svgWH[1]]
    });
  }

  var _useMemo = React.useMemo(calcSVGData, [width, height]),
      points = _useMemo.points,
      heights = _useMemo.heights,
      minHeights = _useMemo.minHeights,
      randoms = _useMemo.randoms,
      svgScale = _useMemo.svgScale;

  var classNames = React.useMemo(function () {
    return __chunk_4.classnames('dv-decoration-6', className);
  }, [[className]]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      {
        width: svgWH[0] + 'px',
        height: svgWH[1] + 'px',
        style: { transform: 'scale(' + svgScale[0] + ',' + svgScale[1] + ')' }
      },
      points.map(function (point, i) {
        return React__default.createElement(
          'rect',
          {
            key: i,
            fill: '#7acaec',
            x: point[0] - halfRectWidth,
            y: point[1] - heights[i] / 2,
            width: rectWidth,
            height: heights[i]
          },
          React__default.createElement('animate', {
            attributeName: 'y',
            values: point[1] - minHeights[i] / 2 + ';' + (point[1] - heights[i] / 2) + ';' + (point[1] - minHeights[i] / 2),
            dur: randoms[i] + 's',
            keyTimes: '0;0.5;1',
            calcMode: 'spline',
            keySplines: '0.42,0,0.58,1;0.42,0,0.58,1',
            begin: '0s',
            repeatCount: 'indefinite'
          }),
          React__default.createElement('animate', {
            attributeName: 'height',
            values: minHeights[i] + ';' + heights[i] + ';' + minHeights[i],
            dur: randoms[i] + 's',
            keyTimes: '0;0.5;1',
            calcMode: 'spline',
            keySplines: '0.42,0,0.58,1;0.42,0,0.58,1',
            begin: '0s',
            repeatCount: 'indefinite'
          })
        );
      })
    )
  );
};

Decoration.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

module.exports = Decoration;
//# sourceMappingURL=index.js.map
