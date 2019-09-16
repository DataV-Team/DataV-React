import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { deepMerge } from '@jiaminghi/charts/lib/util/index';
import { deepClone } from '@jiaminghi/c-render/lib/plugin/util';
import { a as useAutoResize, b as randomExtend, c as getPointDistance } from '../chunk-45917cce.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from '../chunk-0e3b7ae4.js';

var css = ".style_dv-flyline-chart__3DSXm {\n  display: flex;\n  flex-direction: column;\n  background-size: 100% 100%;\n}\n.style_dv-flyline-chart__3DSXm polyline {\n  transition: all 0.3s;\n}\n.style_dv-flyline-chart__3DSXm text {\n  text-anchor: middle;\n  dominant-baseline: middle;\n}\n";
styleInject(css);

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
  var _ref5 = slicedToArray(_ref, 2),
      sx = _ref5[0],
      sy = _ref5[1];

  var _ref4 = slicedToArray(_ref2, 2),
      ex = _ref4[0],
      ey = _ref4[1];

  var curvature = _ref3.curvature,
      k = _ref3.k;
  var mx = (sx + ex) / 2,
      my = (sy + ey) / 2;


  var distance = getPointDistance([sx, sy], [ex, ey]);

  var targetLength = distance / curvature;
  var disDived = targetLength / 2;

  var dx = mx,
      dy = my;


  do {
    dx += disDived;
    dy = my - k * mx + k * dx;
  } while (getPointDistance([mx, my], [dx, dy]) < targetLength);

  return [dx, dy];
}

var FlyLineChart = function FlyLineChart(_ref6) {
  var _ref6$config = _ref6.config,
      config = _ref6$config === undefined ? {} : _ref6$config,
      _ref6$dev = _ref6.dev,
      dev = _ref6$dev === undefined ? false : _ref6$dev;

  var _useAutoResize = useAutoResize(calcData, calcData),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useRef$current = useRef({
    unique: Math.random(),
    gradientId: 'gradient-id-' + Date.now(),
    gradient2Id: 'gradient2-id-' + Date.now()
  }).current,
      unique = _useRef$current.unique,
      gradientId = _useRef$current.gradientId,
      gradient2Id = _useRef$current.gradient2Id;

  var _useState = useState({
    mergedConfig: null,
    paths: [],
    lengths: [],
    times: [],
    texts: []
  }),
      _useState2 = slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      mergedConfig = _useState2$.mergedConfig,
      paths = _useState2$.paths,
      lengths = _useState2$.lengths,
      times = _useState2$.times,
      texts = _useState2$.texts,
      setState = _useState2[1];

  var pathRef = useRef([]);

  function calcData() {
    var mergedConfig = getMergedConfig();

    var paths = createFlylinePaths(mergedConfig);

    var lengths = paths.map(function (foo, i) {
      return pathRef.current[i][0].getTotalLength();
    });

    var duration = mergedConfig.duration,
        points = mergedConfig.points;


    var times = points.map(function (foo) {
      return randomExtend.apply(undefined, toConsumableArray(duration)) / 10;
    });

    var texts = points.map(function (_ref7) {
      var text = _ref7.text;
      return text;
    });

    setState({ mergedConfig: mergedConfig, paths: paths, lengths: lengths, times: times, texts: texts });
  }

  function getMergedConfig() {
    var mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {});

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
        var _ref10 = slicedToArray(_ref9, 2),
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

  var consoleClickPos = useCallback(function (_ref11) {
    var offsetX = _ref11.offsetX,
        offsetY = _ref11.offsetY;

    if (!dev) return;

    var relativeX = (offsetX / width).toFixed(2);
    var relativeY = (offsetY / height).toFixed(2);

    console.warn('dv-flyline-chart DEV: \n Click Position is [' + offsetX + ', ' + offsetY + '] \n Relative Position is [' + relativeX + ', ' + relativeY + ']');
  }, [width, height, dev]);

  useEffect(calcData, [config]);

  return React.createElement(
    'div',
    {
      className: 'dv-flyline-chart',
      ref: domRef,
      style: 'background-image: url(' + (mergedConfig ? mergedConfig.bgImgUrl : '') + ')',
      onClick: consoleClickPos
    },
    !!mergedConfig && React.createElement(
      'svg',
      { width: width, height: height },
      React.createElement(
        'defs',
        null,
        React.createElement(
          'radialGradient',
          { id: gradientId, cx: '50%', cy: '50%', r: '50%' },
          React.createElement('stop', { offset: '0%', stopColor: '#fff', stopOpacity: '1' }),
          React.createElement('stop', { offset: '100%', stopColor: '#fff', stopOpacity: '0' })
        ),
        React.createElement(
          'radialGradient',
          { id: gradient2Id, cx: '50%', cy: '50%', r: '50%' },
          React.createElement('stop', { offset: '0%', stopColor: '#fff', stopOpacity: '0' }),
          React.createElement('stop', { offset: '100%', stopColor: '#fff', stopOpacity: '1' })
        ),
        !!paths[0] && React.createElement(
          'circle',
          {
            id: 'circle' + paths[0].toString(),
            cx: paths[0][2][0],
            cy: paths[0][2][1]
          },
          React.createElement('animate', {
            attributeName: 'r',
            values: '1;' + mergedConfig.halo.radius,
            dur: mergedConfig.halo.duration / 10 + 's',
            repeatCount: 'indefinite'
          }),
          React.createElement('animate', {
            attributeName: 'opacity',
            values: '1;0',
            dur: mergedConfig.halo.duration / 10 + 's',
            repeatCount: 'indefinite'
          })
        )
      ),
      !!paths[0] && React.createElement('image', {
        href: mergedConfig.centerPointImg.url,
        width: mergedConfig.centerPointImg.width,
        height: mergedConfig.centerPointImg.height,
        x: paths[0][2][0] - mergedConfig.centerPointImg.width / 2,
        y: paths[0][2][1] - mergedConfig.centerPointImg.height / 2
      }),
      React.createElement(
        'mask',
        { id: 'maskhalo' + paths[0].toString() },
        !!paths[0] && React.createElement('use', {
          href: '#circle' + paths[0].toString(),
          fill: 'url(#' + gradient2Id + ')'
        })
      ),
      !!paths[0] && mergedConfig.halo.show && React.createElement('use', {
        href: '#circle' + paths[0].toString(),
        fill: mergedConfig.halo.color,
        mask: 'url(#maskhalo' + paths[0].toString() + ')'
      }),
      paths.map(function (path, i) {
        return React.createElement(
          'g',
          { key: i },
          React.createElement(
            'defs',
            null,
            React.createElement('path', {
              id: 'path' + path.toString(),
              ref: function ref(e) {
                return pathRef.current[i] = e;
              },
              d: 'M' + path[0].toString() + ' Q' + path[1].toString() + ' ' + path[2].toString(),
              fill: 'transparent'
            })
          ),
          React.createElement('use', {
            href: '#path' + path.toString(),
            strokeWidth: mergedConfig.lineWidth,
            stroke: mergedConfig.orbitColor
          }),
          lengths[i] && React.createElement(
            'use',
            {
              href: '#path' + path.toString(),
              strokeWidth: mergedConfig.lineWidth,
              stroke: mergedConfig.flylineColor,
              mask: 'url(#mask' + unique + path.toString() + ')'
            },
            React.createElement('animate', {
              attributeName: 'stroke-dasharray',
              from: '0, ' + lengths[i],
              to: lengths[i] + ', 0',
              dur: times[i] || 0,
              repeatCount: 'indefinite'
            })
          ),
          React.createElement(
            'mask',
            { id: 'mask' + unique + path.toString() },
            React.createElement(
              'circle',
              {
                cx: '0',
                cy: '0',
                r: mergedConfig.flylineRadius,
                fill: 'url(#' + gradientId + ')'
              },
              React.createElement('animateMotion', {
                dur: times[i] || 0,
                path: 'M' + path[0].toString() + ' Q' + path[1].toString() + ' ' + path[2].toString(),
                rotate: 'auto',
                repeatCount: 'indefinite'
              })
            )
          ),
          React.createElement('image', {
            href: mergedConfig.pointsImg.url,
            width: mergedConfig.pointsImg.width,
            height: mergedConfig.pointsImg.height,
            x: path[0][0] - mergedConfig.pointsImg.width / 2,
            y: path[0][1] - mergedConfig.pointsImg.height / 2
          }),
          React.createElement(
            'text',
            {
              style: 'fontSize:' + mergedConfig.text.fontSize + 'px;',
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
  config: PropTypes.object,
  dev: PropTypes.bool

  // 指定 props 的默认值：
};FlyLineChart.defaultProps = {
  config: {},
  dev: false
};

export default FlyLineChart;
//# sourceMappingURL=index.js.map
