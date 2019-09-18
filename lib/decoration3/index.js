'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_4 = require('../chunk-7aa8c3ff.js');
var __chunk_1 = require('../chunk-d58196f4.js');
var __chunk_2 = require('../chunk-0d83f239.js');

var css = ".dv-decoration-3 {\n  width: 100%;\n  height: 100%;\n}\n.dv-decoration-3 svg {\n  transform-origin: left top;\n}\n";
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

var Decoration = function Decoration(_ref) {
  var className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_1.useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  function calcSVGData() {
    return {
      points: getPoints(),
      svgScale: [width / svgWH[0], height / svgWH[1]]
    };
  }

  var _useMemo = React.useMemo(calcSVGData, [width, height]),
      svgScale = _useMemo.svgScale,
      points = _useMemo.points;

  var classNames = React.useMemo(function () {
    return __chunk_4.classnames('dv-decoration-3', className);
  }, [className]);

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
};

Decoration.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

module.exports = Decoration;
//# sourceMappingURL=index.js.map
