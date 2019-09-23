import React, { useRef, useState, useMemo, useEffect } from 'react';
import { s as styleInject, P as PropTypes } from '../style-inject.es-4766d9ed.js';
import { s as slicedToArray, _ as _extends } from '../_babelHelpers-8fa0f879.js';
import { c as classnames } from '../index-183d4825.js';
import { e as util_2, f as util_1 } from '../index-23816ac9.js';

var css = ".dv-percent-pond {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.dv-percent-pond svg {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n}\n.dv-percent-pond polyline {\n  transition: all 0.3s;\n}\n.dv-percent-pond text {\n  font-size: 25px;\n  font-weight: bold;\n  text-anchor: middle;\n  dominant-baseline: middle;\n}\n";
styleInject(css);

var defaultConfig = {
  /**
   * @description Value
   * @type {Number}
   * @default value = 0
   */
  value: 0,
  /**
   * @description Colors (hex|rgb|rgba|color keywords)
   * @type {Array<String>}
   * @default colors = ['#00BAFF', '#3DE7C9']
   * @example colors = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
   */
  colors: ['#3DE7C9', '#00BAFF'],
  /**
   * @description Border width
   * @type {Number}
   * @default borderWidth = 3
   */
  borderWidth: 3,
  /**
   * @description Gap between border and pond
   * @type {Number}
   * @default borderGap = 3
   */
  borderGap: 3,
  /**
   * @description Line dash
   * @type {Array<Number>}
   * @default lineDash = [5, 1]
   */
  lineDash: [5, 1],
  /**
   * @description Text color
   * @type {String}
   * @default textColor = '#fff'
   */
  textColor: '#fff',
  /**
   * @description Border radius
   * @type {Number}
   * @default borderRadius = 5
   */
  borderRadius: 5,
  /**
   * @description Local Gradient
   * @type {Boolean}
   * @default localGradient = false
   * @example localGradient = false | true
   */
  localGradient: false,
  /**
   * @description Formatter
   * @type {String}
   * @default formatter = '{value}%'
   */
  formatter: '{value}%'
};

var PercentPond = function PercentPond(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === undefined ? {} : _ref$config,
      className = _ref.className,
      style = _ref.style;

  var domRef = useRef(null);

  var _useRef$current = useRef({
    gradientId1: 'percent-pond-gradientId1-' + Date.now(),
    gradientId2: 'percent-pond-gradientId2-' + Date.now()
  }).current,
      gradientId1 = _useRef$current.gradientId1,
      gradientId2 = _useRef$current.gradientId2;

  var _useState = useState({
    width: 0,
    height: 0,

    mergedConfig: null
  }),
      _useState2 = slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      width = _useState2$.width,
      height = _useState2$.height,
      mergedConfig = _useState2$.mergedConfig,
      setState = _useState2[1];

  var rectWidth = useMemo(function () {
    if (!mergedConfig) return 0;

    var borderWidth = mergedConfig.borderWidth;


    return width - borderWidth;
  }, [mergedConfig, width]);

  var rectHeight = useMemo(function () {
    if (!mergedConfig) return 0;

    var borderWidth = mergedConfig.borderWidth;


    return height - borderWidth;
  }, [mergedConfig, height]);

  var points = useMemo(function () {
    var halfHeight = height / 2;

    if (!mergedConfig) return '0, ' + halfHeight + ' 0, ' + halfHeight;

    var borderWidth = mergedConfig.borderWidth,
        borderGap = mergedConfig.borderGap,
        value = mergedConfig.value;


    var polylineLength = (width - (borderWidth + borderGap) * 2) / 100 * value;

    return '\n      ' + (borderWidth + borderGap) + ', ' + halfHeight + '\n      ' + (borderWidth + borderGap + polylineLength) + ', ' + (halfHeight + 0.001) + '\n    ';
  }, [mergedConfig, width, height]);

  var polylineWidth = useMemo(function () {
    if (!mergedConfig) return 0;

    var borderWidth = mergedConfig.borderWidth,
        borderGap = mergedConfig.borderGap;


    return height - (borderWidth + borderGap) * 2;
  }, [mergedConfig, height]);

  var linearGradient = useMemo(function () {
    if (!mergedConfig) return [];

    var colors = mergedConfig.colors;


    var colorNum = colors.length;

    var colorOffsetGap = 100 / (colorNum - 1);

    return colors.map(function (c, i) {
      return [colorOffsetGap * i, c];
    });
  }, [mergedConfig]);

  var polylineGradient = useMemo(function () {
    if (!mergedConfig) return gradientId2;

    if (mergedConfig.localGradient) return gradientId1;

    return gradientId2;
  }, [gradientId1, gradientId2, mergedConfig]);

  var gradient2XPos = useMemo(function () {
    if (!mergedConfig) return '100%';

    var value = mergedConfig.value;


    return 200 - value + '%';
  }, [mergedConfig]);

  var details = useMemo(function () {
    if (!mergedConfig) return '';

    var value = mergedConfig.value,
        formatter = mergedConfig.formatter;


    return formatter.replace('{value}', value);
  }, [mergedConfig]);

  function update() {
    var _domRef$current = domRef.current,
        width = _domRef$current.clientWidth,
        height = _domRef$current.clientHeight;


    if (!config) {
      setState(function (state) {
        return _extends({}, state, { width: width, height: height });
      });

      return;
    }

    setState({
      width: width,
      height: height,
      mergedConfig: util_2(util_1(defaultConfig, true), config || {})
    });
  }

  useEffect(update, [config]);

  var classNames = useMemo(function () {
    return classnames('dv-percent-pond', className);
  }, [className]);

  return React.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React.createElement(
      'svg',
      null,
      React.createElement(
        'defs',
        null,
        React.createElement(
          'linearGradient',
          { id: gradientId1, x1: '0%', y1: '0%', x2: '100%', y2: '0%' },
          linearGradient.map(function (lc) {
            return React.createElement('stop', { key: lc[0], offset: lc[0] + '%', stopColor: lc[1] });
          })
        ),
        React.createElement(
          'linearGradient',
          {
            id: gradientId2,
            x1: '0%',
            y1: '0%',
            x2: gradient2XPos,
            y2: '0%'
          },
          linearGradient.map(function (lc) {
            return React.createElement('stop', { key: lc[0], offset: lc[0] + '%', stopColor: lc[1] });
          })
        )
      ),
      React.createElement('rect', {
        x: mergedConfig ? mergedConfig.borderWidth / 2 : '0',
        y: mergedConfig ? mergedConfig.borderWidth / 2 : '0',
        rx: mergedConfig ? mergedConfig.borderRadius : '0',
        ry: mergedConfig ? mergedConfig.borderRadius : '0',
        fill: 'transparent',
        strokeWidth: mergedConfig ? mergedConfig.borderWidth : '0',
        stroke: 'url(#' + gradientId1 + ')',
        width: rectWidth > 0 ? rectWidth : 0,
        height: rectHeight > 0 ? rectHeight : 0
      }),
      React.createElement('polyline', {
        strokeWidth: polylineWidth,
        strokeDasharray: mergedConfig ? mergedConfig.lineDash.join(',') : '0',
        stroke: 'url(#' + polylineGradient + ')',
        points: points
      }),
      React.createElement(
        'text',
        {
          stroke: mergedConfig ? mergedConfig.textColor : '#fff',
          fill: mergedConfig ? mergedConfig.textColor : '#fff',
          x: width / 2,
          y: height / 2
        },
        details
      )
    )
  );
};

PercentPond.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object

  // 指定 props 的默认值：
};PercentPond.defaultProps = {
  config: {}
};

export default PercentPond;
//# sourceMappingURL=index.js.map
