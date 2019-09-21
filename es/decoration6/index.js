import { a as styleInject, b as PropTypes } from '../chunk-0e6a3972.js';
import React, { useMemo } from 'react';
import { a as classnames } from '../chunk-d9c8014f.js';
import { a as useAutoResize } from '../chunk-5d4646c1.js';
import { c as randomExtend } from '../chunk-b33d3196.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from '../chunk-0e3b7ae4.js';

var css = ".dv-decoration-6 {\n  width: 100%;\n  height: 100%;\n}\n.dv-decoration-6 svg {\n  transform-origin: left top;\n}\n";
styleInject(css);

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
    return [].concat(toConsumableArray(all), toConsumableArray(item));
  }, []);
}

function getData() {
  var h = svgWH[1];


  var heights = new Array(rowNum * rowPoints).fill(0).map(function (foo) {
    return Math.random() > 0.8 ? randomExtend(0.7 * h, h) : randomExtend(0.2 * h, 0.5 * h);
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

  var _useAutoResize = useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  function calcSVGData() {
    return _extends({}, getData(), {
      points: getPoints(),
      svgScale: [width / svgWH[0], height / svgWH[1]]
    });
  }

  var _useMemo = useMemo(calcSVGData, [width, height]),
      points = _useMemo.points,
      heights = _useMemo.heights,
      minHeights = _useMemo.minHeights,
      randoms = _useMemo.randoms,
      svgScale = _useMemo.svgScale;

  var classNames = useMemo(function () {
    return classnames('dv-decoration-6', className);
  }, [[className]]);

  return React.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React.createElement(
      'svg',
      {
        width: svgWH[0] + 'px',
        height: svgWH[1] + 'px',
        style: { transform: 'scale(' + svgScale[0] + ',' + svgScale[1] + ')' }
      },
      points.map(function (point, i) {
        return React.createElement(
          'rect',
          {
            key: i,
            fill: '#7acaec',
            x: point[0] - halfRectWidth,
            y: point[1] - heights[i] / 2,
            width: rectWidth,
            height: heights[i]
          },
          React.createElement('animate', {
            attributeName: 'y',
            values: point[1] - minHeights[i] / 2 + ';' + (point[1] - heights[i] / 2) + ';' + (point[1] - minHeights[i] / 2),
            dur: randoms[i] + 's',
            keyTimes: '0;0.5;1',
            calcMode: 'spline',
            keySplines: '0.42,0,0.58,1;0.42,0,0.58,1',
            begin: '0s',
            repeatCount: 'indefinite'
          }),
          React.createElement('animate', {
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

export default Decoration;
//# sourceMappingURL=index.js.map
