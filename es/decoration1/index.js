import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { a as classnames } from '../chunk-84657507.js';
import { a as useAutoResize } from '../chunk-863fd33b.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from '../chunk-0e3b7ae4.js';
import '../chunk-f302ca2c.js';

var css = ".dv-decoration-1 {\n  width: 100%;\n  height: 100%;\n}\n.dv-decoration-1 svg {\n  transform-origin: left top;\n}\n";
styleInject(css);

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
    return [].concat(toConsumableArray(all), toConsumableArray(item));
  }, []);
}

var Decoration = function Decoration(_ref) {
  var className = _ref.className,
      style = _ref.style;

  var _useAutoResize = useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  function calcSVGData() {
    var points = getPoints();

    return {
      points: points,
      rects: [points[rowPoints * 2 - 1], points[rowPoints * 2 - 3]],
      svgScale: [width / svgWH[0], height / svgWH[1]]
    };
  }

  var _useMemo = useMemo(calcSVGData, [width, height]),
      svgScale = _useMemo.svgScale,
      points = _useMemo.points,
      rects = _useMemo.rects;

  var classNames = useMemo(function () {
    return classnames('dv-decoration-1', className);
  }, [className]);

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
      points.reduce(function (prev, point, i) {
        return Math.random() > 0.6 ? [].concat(toConsumableArray(prev), [React.createElement(
          'rect',
          {
            key: i,
            fill: '#fff',
            x: point[0] - halfPointSideLength,
            y: point[1] - halfPointSideLength,
            width: pointSideLength,
            height: pointSideLength
          },
          Math.random() > 0.6 && React.createElement('animate', {
            attributeName: 'fill',
            values: '#fff;transparent',
            dur: '1s',
            begin: Math.random() * 2,
            repeatCount: 'indefinite'
          })
        )]) : prev;
      }, []),
      !!rects[0] && React.createElement(
        'rect',
        {
          fill: '#0de7c2',
          x: rects[0][0] - pointSideLength,
          y: rects[0][1] - pointSideLength,
          width: pointSideLength * 2,
          height: pointSideLength * 2
        },
        React.createElement('animate', {
          attributeName: 'width',
          values: '0;' + pointSideLength * 2,
          dur: '2s',
          repeatCount: 'indefinite'
        }),
        React.createElement('animate', {
          attributeName: 'height',
          values: '0;' + pointSideLength * 2,
          dur: '2s',
          repeatCount: 'indefinite'
        }),
        React.createElement('animate', {
          attributeName: 'x',
          values: rects[0][0] + ';' + (rects[0][0] - pointSideLength),
          dur: '2s',
          repeatCount: 'indefinite'
        }),
        React.createElement('animate', {
          attributeName: 'y',
          values: rects[0][1] + ';' + (rects[0][1] - pointSideLength),
          dur: '2s',
          repeatCount: 'indefinite'
        })
      ),
      !!rects[1] && React.createElement(
        'rect',
        {
          fill: '#0de7c2',
          x: rects[1][0] - 40,
          y: rects[1][1] - pointSideLength,
          width: '40',
          height: pointSideLength * 2
        },
        React.createElement('animate', {
          attributeName: 'width',
          values: '0;40;0',
          dur: '2s',
          repeatCount: 'indefinite'
        }),
        React.createElement('animate', {
          attributeName: 'x',
          values: rects[1][0] + ';' + (rects[1][0] - 40) + ';' + rects[1][0],
          dur: '2s',
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
