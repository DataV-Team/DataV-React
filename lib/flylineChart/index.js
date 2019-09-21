'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('../chunk-23d8dc6e.js');
var React = require('react');
var React__default = _interopDefault(React);
var __chunk_5 = require('../chunk-84e855b8.js');
var __chunk_6 = require('../chunk-4cecce38.js');
var __chunk_4 = require('../chunk-f7abfc0e.js');
var __chunk_2 = require('../chunk-4df972f9.js');
var __chunk_3 = require('../chunk-0d83f239.js');

var css = ".dv-flyline-chart {\n  display: flex;\n  flex-direction: column;\n  background-size: 100% 100%;\n}\n.dv-flyline-chart polyline {\n  transition: all 0.3s;\n}\n.dv-flyline-chart text {\n  text-anchor: middle;\n  dominant-baseline: middle;\n}\n";
__chunk_1.styleInject(css);

var defaultConfig = {
  /**
   * @description Flyline chart center point
   * @type {Array<Number>}
   * @default centerPoint = [0, 0]
   */
  centerPoint: [0, 0],
  /**
   * @description Flyline start points
   * @type {Array<Array<Number>>}
   * @default points = []
   * @example points = [[10, 10], [100, 100]]
   */
  points: [],
  /**
   * @description Flyline width
   * @type {Number}
   * @default lineWidth = 1
   */
  lineWidth: 1,
  /**
   * @description Orbit color
   * @type {String}
   * @default orbitColor = 'rgba(103, 224, 227, .2)'
   */
  orbitColor: 'rgba(103, 224, 227, .2)',
  /**
   * @description Flyline color
   * @type {String}
   * @default orbitColor = '#ffde93'
   */
  flylineColor: '#ffde93',
  /**
   * @description K value
   * @type {Number}
   * @default k = -0.5
   * @example k = -1 ~ 1
   */
  k: -0.5,
  /**
   * @description Flyline curvature
   * @type {Number}
   * @default curvature = 5
   */
  curvature: 5,
  /**
   * @description Flyline radius
   * @type {Number}
   * @default flylineRadius = 100
   */
  flylineRadius: 100,
  /**
   * @description Flyline animation duration
   * @type {Array<Number>}
   * @default duration = [20, 30]
   */
  duration: [20, 30],
  /**
   * @description Relative points position
   * @type {Boolean}
   * @default relative = true
   */
  relative: true,
  /**
   * @description Back ground image url
   * @type {String}
   * @default bgImgUrl = ''
   * @example bgImgUrl = './img/bg.jpg'
   */
  bgImgUrl: '',
  /**
   * @description Text configuration
   * @type {Object}
   */
  text: {
    /**
     * @description Text offset
     * @type {Array<Number>}
     * @default offset = [0, 15]
     */
    offset: [0, 15],
    /**
     * @description Text color
     * @type {String}
     * @default color = '#ffdb5c'
     */
    color: '#ffdb5c',
    /**
     * @description Text font size
     * @type {Number}
     * @default fontSize = 12
     */
    fontSize: 12
  },
  /**
   * @description Halo configuration
   * @type {Object}
   */
  halo: {
    /**
     * @description Weather to show halo
     * @type {Boolean}
     * @default show = true
     * @example show = true | false
     */
    show: true,
    /**
     * @description Halo animation duration (10 = 1s)
     * @type {Number}
     * @default duration = 30
     */
    duration: 30,
    /**
     * @description Halo color
     * @type {String}
     * @default color = '#fb7293'
     */
    color: '#fb7293',
    /**
     * @description Halo max radius
     * @type {Number}
     * @default radius = 120
     */
    radius: 120
  },
  /**
   * @description Center point img configuration
   * @type {Object}
   */
  centerPointImg: {
    /**
     * @description Center point img width
     * @type {Number}
     * @default width = 40
     */
    width: 40,
    /**
     * @description Center point img height
     * @type {Number}
     * @default height = 40
     */
    height: 40,
    /**
     * @description Center point img url
     * @type {String}
     * @default url = ''
     */
    url: ''
  },
  /**
   * @description Points img configuration
   * @type {Object}
   * @default radius = 120
   */
  pointsImg: {
    /**
     * @description Points img width
     * @type {Number}
     * @default width = 15
     */
    width: 15,
    /**
     * @description Points img height
     * @type {Number}
     * @default height = 15
     */
    height: 15,
    /**
     * @description Points img url
     * @type {String}
     * @default url = ''
     */
    url: ''
  }
};

function getControlPoint(_ref, _ref2, _ref3) {
  var _ref5 = __chunk_3.slicedToArray(_ref, 2),
      sx = _ref5[0],
      sy = _ref5[1];

  var _ref4 = __chunk_3.slicedToArray(_ref2, 2),
      ex = _ref4[0],
      ey = _ref4[1];

  var curvature = _ref3.curvature,
      k = _ref3.k;
  var mx = (sx + ex) / 2,
      my = (sy + ey) / 2;


  var distance = __chunk_2.getPointDistance([sx, sy], [ex, ey]);

  var targetLength = distance / curvature;
  var disDived = targetLength / 2;

  var dx = mx,
      dy = my;


  do {
    dx += disDived;
    dy = my - k * mx + k * dx;
  } while (__chunk_2.getPointDistance([mx, my], [dx, dy]) < targetLength);

  return [dx, dy];
}

var FlyLineChart = function FlyLineChart(_ref6) {
  var _ref6$config = _ref6.config,
      config = _ref6$config === undefined ? {} : _ref6$config,
      _ref6$dev = _ref6.dev,
      dev = _ref6$dev === undefined ? false : _ref6$dev,
      className = _ref6.className,
      style = _ref6.style;

  var _useAutoResize = __chunk_4.useAutoResize(calcData, calcData),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useRef$current = React.useRef({
    unique: Math.random(),
    gradientId: 'gradient-id-' + Date.now(),
    gradient2Id: 'gradient2-id-' + Date.now()
  }).current,
      unique = _useRef$current.unique,
      gradientId = _useRef$current.gradientId,
      gradient2Id = _useRef$current.gradient2Id;

  var _useState = React.useState({
    mergedConfig: null,
    paths: [],
    lengths: [],
    times: [],
    texts: []
  }),
      _useState2 = __chunk_3.slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      mergedConfig = _useState2$.mergedConfig,
      paths = _useState2$.paths,
      lengths = _useState2$.lengths,
      times = _useState2$.times,
      texts = _useState2$.texts,
      setState = _useState2[1];

  var pathRef = React.useRef([]);

  function calcData() {
    var mergedConfig = getMergedConfig();

    var paths = createFlylinePaths(mergedConfig);

    var lengths = paths.map(function (foo, i) {
      return pathRef.current[i][0].getTotalLength();
    });

    var duration = mergedConfig.duration,
        points = mergedConfig.points;


    var times = points.map(function (foo) {
      return __chunk_2.randomExtend.apply(undefined, __chunk_3.toConsumableArray(duration)) / 10;
    });

    var texts = points.map(function (_ref7) {
      var text = _ref7.text;
      return text;
    });

    setState({ mergedConfig: mergedConfig, paths: paths, lengths: lengths, times: times, texts: texts });
  }

  function getMergedConfig() {
    var mergedConfig = __chunk_6.util_2(__chunk_6.util_1(defaultConfig, true), config || {});

    mergedConfig.points = mergedConfig.points.map(function (item) {
      if (Array.isArray(item)) {
        return { position: item, text: '' };
      }

      return item;
    });

    return mergedConfig;
  }

  function createFlylinePaths(mergedConfig) {
    var centerPoint = mergedConfig.centerPoint,
        relative = mergedConfig.relative;

    var points = mergedConfig.points.map(function (_ref8) {
      var position = _ref8.position;
      return position;
    });

    if (relative) {
      centerPoint = [width * centerPoint[0], height * centerPoint[1]];
      points = points.map(function (_ref9) {
        var _ref10 = __chunk_3.slicedToArray(_ref9, 2),
            x = _ref10[0],
            y = _ref10[1];

        return [width * x, height * y];
      });
    }

    return points.map(function (point) {
      var controlPoint = getControlPoint(centerPoint, point, mergedConfig);

      return [point, controlPoint, centerPoint];
    });
  }

  var consoleClickPos = React.useCallback(function (_ref11) {
    var offsetX = _ref11.offsetX,
        offsetY = _ref11.offsetY;

    if (!dev) return;

    var relativeX = (offsetX / width).toFixed(2);
    var relativeY = (offsetY / height).toFixed(2);

    console.warn('dv-flyline-chart DEV: \n Click Position is [' + offsetX + ', ' + offsetY + '] \n Relative Position is [' + relativeX + ', ' + relativeY + ']');
  }, [width, height, dev]);

  React.useEffect(calcData, [config]);

  var classNames = React.useMemo(function () {
    return __chunk_5.classnames('dv-flyline-chart', className);
  }, [className]);

  return React__default.createElement(
    'div',
    {
      className: classNames,
      ref: domRef,
      style: __chunk_3._extends({
        backgroundImage: 'url(' + (mergedConfig ? mergedConfig.bgImgUrl : '') + ')'
      }, style),
      onClick: consoleClickPos
    },
    !!mergedConfig && React__default.createElement(
      'svg',
      { width: width, height: height },
      React__default.createElement(
        'defs',
        null,
        React__default.createElement(
          'radialGradient',
          { id: gradientId, cx: '50%', cy: '50%', r: '50%' },
          React__default.createElement('stop', { offset: '0%', stopColor: '#fff', stopOpacity: '1' }),
          React__default.createElement('stop', { offset: '100%', stopColor: '#fff', stopOpacity: '0' })
        ),
        React__default.createElement(
          'radialGradient',
          { id: gradient2Id, cx: '50%', cy: '50%', r: '50%' },
          React__default.createElement('stop', { offset: '0%', stopColor: '#fff', stopOpacity: '0' }),
          React__default.createElement('stop', { offset: '100%', stopColor: '#fff', stopOpacity: '1' })
        ),
        !!paths[0] && React__default.createElement(
          'circle',
          {
            id: 'circle' + paths[0].toString(),
            cx: paths[0][2][0],
            cy: paths[0][2][1]
          },
          React__default.createElement('animate', {
            attributeName: 'r',
            values: '1;' + mergedConfig.halo.radius,
            dur: mergedConfig.halo.duration / 10 + 's',
            repeatCount: 'indefinite'
          }),
          React__default.createElement('animate', {
            attributeName: 'opacity',
            values: '1;0',
            dur: mergedConfig.halo.duration / 10 + 's',
            repeatCount: 'indefinite'
          })
        )
      ),
      !!paths[0] && React__default.createElement('image', {
        href: mergedConfig.centerPointImg.url,
        width: mergedConfig.centerPointImg.width,
        height: mergedConfig.centerPointImg.height,
        x: paths[0][2][0] - mergedConfig.centerPointImg.width / 2,
        y: paths[0][2][1] - mergedConfig.centerPointImg.height / 2
      }),
      React__default.createElement(
        'mask',
        { id: 'maskhalo' + paths[0].toString() },
        !!paths[0] && React__default.createElement('use', {
          href: '#circle' + paths[0].toString(),
          fill: 'url(#' + gradient2Id + ')'
        })
      ),
      !!paths[0] && mergedConfig.halo.show && React__default.createElement('use', {
        href: '#circle' + paths[0].toString(),
        fill: mergedConfig.halo.color,
        mask: 'url(#maskhalo' + paths[0].toString() + ')'
      }),
      paths.map(function (path, i) {
        return React__default.createElement(
          'g',
          { key: i },
          React__default.createElement(
            'defs',
            null,
            React__default.createElement('path', {
              id: 'path' + path.toString(),
              ref: function ref(e) {
                return pathRef.current[i] = e;
              },
              d: 'M' + path[0].toString() + ' Q' + path[1].toString() + ' ' + path[2].toString(),
              fill: 'transparent'
            })
          ),
          React__default.createElement('use', {
            href: '#path' + path.toString(),
            strokeWidth: mergedConfig.lineWidth,
            stroke: mergedConfig.orbitColor
          }),
          lengths[i] && React__default.createElement(
            'use',
            {
              href: '#path' + path.toString(),
              strokeWidth: mergedConfig.lineWidth,
              stroke: mergedConfig.flylineColor,
              mask: 'url(#mask' + unique + path.toString() + ')'
            },
            React__default.createElement('animate', {
              attributeName: 'stroke-dasharray',
              from: '0, ' + lengths[i],
              to: lengths[i] + ', 0',
              dur: times[i] || 0,
              repeatCount: 'indefinite'
            })
          ),
          React__default.createElement(
            'mask',
            { id: 'mask' + unique + path.toString() },
            React__default.createElement(
              'circle',
              {
                cx: '0',
                cy: '0',
                r: mergedConfig.flylineRadius,
                fill: 'url(#' + gradientId + ')'
              },
              React__default.createElement('animateMotion', {
                dur: times[i] || 0,
                path: 'M' + path[0].toString() + ' Q' + path[1].toString() + ' ' + path[2].toString(),
                rotate: 'auto',
                repeatCount: 'indefinite'
              })
            )
          ),
          React__default.createElement('image', {
            href: mergedConfig.pointsImg.url,
            width: mergedConfig.pointsImg.width,
            height: mergedConfig.pointsImg.height,
            x: path[0][0] - mergedConfig.pointsImg.width / 2,
            y: path[0][1] - mergedConfig.pointsImg.height / 2
          }),
          React__default.createElement(
            'text',
            {
              style: { fontSize: mergedConfig.text.fontSize + 'px' },
              fill: mergedConfig.text.color,
              x: path[0][0] + mergedConfig.text.offset[0],
              y: path[0][1] + mergedConfig.text.offset[1]
            },
            texts[i]
          )
        );
      })
    )
  );
};

FlyLineChart.propTypes = {
  config: __chunk_1.PropTypes.object,
  dev: __chunk_1.PropTypes.bool,
  className: __chunk_1.PropTypes.string,
  style: __chunk_1.PropTypes.object

  // 指定 props 的默认值：
};FlyLineChart.defaultProps = {
  config: {},
  dev: false
};

module.exports = FlyLineChart;
//# sourceMappingURL=index.js.map
