'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var index$1 = require('@jiaminghi/charts/lib/util/index');
var util = require('@jiaminghi/c-render/lib/plugin/util');
var CRender = _interopDefault(require('@jiaminghi/c-render'));
var __chunk_2 = require('../chunk-0d83f239.js');

var css = ".style_dv-water-pond-level__2t6WR {\n  position: relative;\n}\n.style_dv-water-pond-level__2t6WR svg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n.style_dv-water-pond-level__2t6WR text {\n  font-size: 25px;\n  font-weight: bold;\n  text-anchor: middle;\n  dominant-baseline: middle;\n}\n.style_dv-water-pond-level__2t6WR ellipse,\n.style_dv-water-pond-level__2t6WR rect {\n  fill: none;\n  stroke-width: 3;\n}\n.style_dv-water-pond-level__2t6WR canvas {\n  margin-top: 8px;\n  margin-left: 8px;\n  width: calc(100% - 16px);\n  height: calc(100% - 16px);\n  box-sizing: border-box;\n}\n";
__chunk_3.styleInject(css);

var defaultConfig = {
  /**
   * @description Data
   * @type {Array<Number>}
   * @default data = []
   * @example data = [60, 40]
   */
  data: [],
  /**
   * @description Shape of wanter level pond
   * @type {String}
   * @default shape = 'rect'
   * @example shape = 'rect' | 'roundRect' | 'round'
   */
  shape: 'rect',
  /**
   * @description Water wave number
   * @type {Number}
   * @default waveNum = 3
   */
  waveNum: 3,
  /**
   * @description Water wave height (px)
   * @type {Number}
   * @default waveHeight = 40
   */
  waveHeight: 40,
  /**
   * @description Wave opacity
   * @type {Number}
   * @default waveOpacity = 0.4
   */
  waveOpacity: 0.4,
  /**
   * @description Colors (hex|rgb|rgba|color keywords)
   * @type {Array<String>}
   * @default colors = ['#00BAFF', '#3DE7C9']
   * @example colors = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
   */
  colors: ['#3DE7C9', '#00BAFF'],
  /**
   * @description Formatter
   * @type {String}
   * @default formatter = '{value}%'
   */
  formatter: '{value}%'
};

function drawed(_ref, _ref2) {
  var points = _ref.shape.points;
  var ctx = _ref2.ctx,
      area = _ref2.area;

  var firstPoint = points[0];
  var lastPoint = points.slice(-1)[0];

  var h = area[1];

  ctx.lineTo(lastPoint[0], h);
  ctx.lineTo(firstPoint[0], h);

  ctx.closePath();

  ctx.fill();
}

function mergeOffset(_ref3, _ref4) {
  var _ref6 = __chunk_2.slicedToArray(_ref3, 2),
      x = _ref6[0],
      y = _ref6[1];

  var _ref5 = __chunk_2.slicedToArray(_ref4, 2),
      ox = _ref5[0],
      oy = _ref5[1];

  return [x + ox, y + oy];
}

var WaterLevelPond = function WaterLevelPond(_ref7) {
  var animationWave = function () {
    var _ref12 = __chunk_2.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var repeat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var waves, renderer, animation, w;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              waves = wavesRef.current;
              renderer = rendererRef.current;
              animation = animationRef.current;

              if (!animation) {
                _context.next = 5;
                break;
              }

              return _context.abrupt('return');

            case 5:

              animationRef.current = true;

              w = renderer.area[0];


              waves.forEach(function (graph) {
                graph.attr('style', { translate: [0, 0] });

                graph.animation('style', {
                  translate: [w, 0]
                }, true);
              });

              _context.next = 10;
              return renderer.launchAnimation();

            case 10:

              animationRef.current = false;

              if (renderer.graphs.length) {
                _context.next = 13;
                break;
              }

              return _context.abrupt('return');

            case 13:

              animationWave(repeat + 1);

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function animationWave() {
      return _ref12.apply(this, arguments);
    };
  }();

  var config = _ref7.config;

  var _useState = React.useState({
    mergedConfig: {},

    svgBorderGradient: [],

    details: ''
  }),
      _useState2 = __chunk_2.slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      mergedConfig = _useState2$.mergedConfig,
      svgBorderGradient = _useState2$.svgBorderGradient,
      details = _useState2$.details,
      setState = _useState2[1];

  var gradientId = React.useRef('water-level-pond-' + Date.now()).current;

  var wavesRef = React.useRef([]);

  var rendererRef = React.useRef(null);
  var renderer = rendererRef.current;

  var animationRef = React.useRef(false);

  var domRef = React.useRef(null);

  var radius = React.useMemo(function () {
    var shape = mergedConfig.shape;


    if (shape === 'round') return '50%';

    if (shape === 'rect') return '0';

    if (shape === 'roundRect') return '10px';

    return '0';
  }, [mergedConfig.shape]);

  var shape = React.useMemo(function () {
    var shape = mergedConfig.shape;


    return !shape ? 'rect' : shape;
  }, [mergedConfig.shape]);

  function init() {
    rendererRef.current = new CRender(domRef.current);

    if (!config) return;

    calcData();
  }

  function calcData() {
    var mergedConfig = index$1.deepMerge(util.deepClone(defaultConfig, true), config);

    var svgBorderGradient = calcSvgBorderGradient(mergedConfig);

    var details = calcDetails(mergedConfig);

    setState({ mergedConfig: mergedConfig, svgBorderGradient: svgBorderGradient, details: details });

    addWave();

    animationWave();
  }

  function calcSvgBorderGradient(_ref8) {
    var colors = _ref8.colors;

    var colorNum = colors.length;

    var colorOffsetGap = 100 / (colorNum - 1);

    return colors.map(function (c, i) {
      return [colorOffsetGap * i, c];
    });
  }

  function calcDetails(_ref9) {
    var data = _ref9.data,
        formatter = _ref9.formatter;

    if (!data.length) {
      return '';
    }

    var maxValue = Math.max.apply(Math, __chunk_2.toConsumableArray(data));

    return formatter.replace('{value}', maxValue);
  }

  function addWave(mergedConfig) {
    var shapes = getWaveShapes(mergedConfig);
    var style = getWaveStyle(mergedConfig);

    wavesRef.current = shapes.map(function (shape) {
      return rendererRef.current.add({
        name: 'smoothline',
        animationFrame: 300,
        shape: shape,
        style: style,
        drawed: drawed
      });
    });
  }

  function getWaveShapes(_ref10) {
    var waveNum = _ref10.waveNum,
        waveHeight = _ref10.waveHeight,
        data = _ref10.data;

    var _rendererRef$current$ = __chunk_2.slicedToArray(rendererRef.current.area, 2),
        w = _rendererRef$current$[0],
        h = _rendererRef$current$[1];

    var pointsNum = waveNum * 4 + 4;

    var pointXGap = w / waveNum / 2;

    return data.map(function (v) {
      var points = new Array(pointsNum).fill(0).map(function (foo, j) {
        var x = w - pointXGap * j;

        var startY = (1 - v / 100) * h;

        var y = j % 2 === 0 ? startY : startY - waveHeight;

        return [x, y];
      });

      points = points.map(function (p) {
        return mergeOffset(p, [pointXGap * 2, 0]);
      });

      return { points: points };
    });
  }

  function getWaveStyle(_ref11) {
    var colors = _ref11.colors,
        waveOpacity = _ref11.waveOpacity;

    var h = rendererRef.current.area[1];

    return {
      gradientColor: colors,
      gradientType: 'linear',
      gradientParams: [0, 0, 0, h],
      gradientWith: 'fill',
      opacity: waveOpacity,
      translate: [0, 0]
    };
  }

  React.useEffect(function () {
    init();

    return function () {
      rendererRef.current.delAllGraph();

      wavesRef.current = [];
    };
  }, []);

  React.useEffect(function () {
    rendererRef.current.delAllGraph();

    wavesRef.current = [];

    setTimeout(calcData, 0);
  }, [config]);

  return React__default.createElement(
    'div',
    { className: 'dv-water-pond-level' },
    !!renderer && React__default.createElement(
      'svg',
      null,
      React__default.createElement(
        'defs',
        null,
        React__default.createElement(
          'linearGradient',
          { id: gradientId, x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
          svgBorderGradient.map(function (lc) {
            return React__default.createElement('stop', { key: lc[0], offset: lc[0], stopColor: lc[1] });
          })
        )
      ),
      React__default.createElement(
        'text',
        {
          stroke: 'url(#' + gradientId + ')',
          fill: 'url(#' + gradientId + ')',
          x: renderer.area[0] / 2 + 8,
          y: renderer.area[1] / 2 + 8
        },
        details
      ),
      !shape || shape === 'round' ? React__default.createElement('ellipse', {
        cx: renderer.area[0] / 2 + 8,
        cy: renderer.area[1] / 2 + 8,
        rx: renderer.area[0] / 2 + 5,
        ry: renderer.area[1] / 2 + 5,
        stroke: 'url(#' + gradientId + ')'
      }) : React__default.createElement('rect', {
        x: '2',
        y: '2',
        rx: shape === 'roundRect' ? 10 : 0,
        ry: shape === 'roundRect' ? 10 : 0,
        width: renderer.area[0] + 12,
        height: renderer.area[1] + 12,
        stroke: 'url(#' + gradientId + ')'
      })
    ),
    React__default.createElement('canvas', { ref: domRef, style: 'border-radius: ' + radius + ';' })
  );
};

WaterLevelPond.propTypes = {
  config: PropTypes.object

  // 指定 props 的默认值：
};WaterLevelPond.defaultProps = {
  config: {}
};

module.exports = WaterLevelPond;
//# sourceMappingURL=index.js.map
