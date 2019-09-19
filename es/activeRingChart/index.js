import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { a as classnames } from '../chunk-84657507.js';
import { a as Chart } from '../chunk-93c11e7c.js';
import DvDigitalFlop from '../digitalFlop/index.js';
import { h as util_2, i as util_1 } from '../chunk-41d81e09.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from '../chunk-0e3b7ae4.js';
import '../chunk-e9d8b894.js';
import '../chunk-ea5efeaf.js';

var css = ".dv-active-ring-chart {\n  position: relative;\n}\n.dv-active-ring-chart .active-ring-chart-container {\n  width: 100%;\n  height: 100%;\n}\n.dv-active-ring-chart .active-ring-info {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.dv-active-ring-chart .active-ring-info .dv-digital-flop {\n  width: 100px;\n  height: 30px;\n}\n.dv-active-ring-chart .active-ring-info .active-ring-name {\n  width: 100px;\n  height: 30px;\n  color: #fff;\n  text-align: center;\n  vertical-align: middle;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n";
styleInject(css);

var defaultConfig = {
  /**
   * @description Ring radius
   * @type {String|Number}
   * @default radius = '50%'
   * @example radius = '50%' | 100
   */
  radius: '50%',
  /**
   * @description Active ring radius
   * @type {String|Number}
   * @default activeRadius = '55%'
   * @example activeRadius = '55%' | 110
   */
  activeRadius: '55%',
  /**
   * @description Ring data
   * @type {Array<Object>}
   * @default data = [{ name: '', value: 0 }]
   */
  data: [{ name: '', value: 0 }],
  /**
   * @description Ring line width
   * @type {Number}
   * @default lineWidth = 20
   */
  lineWidth: 20,
  /**
   * @description Active time gap (ms)
   * @type {Number}
   * @default activeTimeGap = 3000
   */
  activeTimeGap: 3000,
  /**
   * @description Ring color (hex|rgb|rgba|color keywords)
   * @type {Array<String>}
   * @default color = [Charts Default Color]
   * @example color = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
   */
  color: [],
  /**
   * @description Digital flop style
   * @type {Object}
   */
  digitalFlopStyle: {
    fontSize: 25,
    fill: '#fff'
  },
  /**
   * @description CRender animationCurve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: 'easeOutCubic',
  /**
   * @description CRender animationFrame
   * @type {String}
   * @default animationFrame = 50
   */
  animationFrame: 50
};

var ActiveRingChart = function ActiveRingChart(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === undefined ? {} : _ref$config,
      className = _ref.className,
      style = _ref.style;

  var _useState = useState({
    activeIndex: 0,
    mergedConfig: null
  }),
      _useState2 = slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      activeIndex = _useState2$.activeIndex,
      mergedConfig = _useState2$.mergedConfig,
      setState = _useState2[1];

  var domRef = useRef(null);
  var chartRef = useRef(null);
  var timerRef = useRef(null);

  var digitalFlop = useMemo(function () {
    if (!mergedConfig) return {};

    var digitalFlopStyle = mergedConfig.digitalFlopStyle,
        data = mergedConfig.data;


    var value = data.map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });

    var sum = value.reduce(function (all, v) {
      return all + v;
    }, 0);

    var percent = parseInt(value[activeIndex] / sum * 100);

    return { content: '{nt}%', number: [percent], style: digitalFlopStyle };
  }, [mergedConfig, activeIndex]);

  var ringName = useMemo(function () {
    return !mergedConfig ? '' : mergedConfig.data[activeIndex].name;
  }, [mergedConfig, activeIndex]);

  var fontSize = useMemo(function () {
    return !mergedConfig ? {} : { fontSize: mergedConfig.digitalFlopStyle.fontSize + 'px' };
  }, [mergedConfig]);

  function getRingOption(mergedConfig) {
    var radius = getRealRadius(mergedConfig);

    var newMergedConfig = _extends({}, mergedConfig, {
      data: mergedConfig.data.map(function (item) {
        return _extends({}, item, { radius: radius });
      })
    });

    return {
      series: [_extends({
        type: 'pie'
      }, newMergedConfig, {
        outsideLabel: {
          show: false
        }
      })],
      color: newMergedConfig.color
    };
  }

  function getRealRadius(_ref3) {
    var radius = _ref3.radius,
        activeRadius = _ref3.activeRadius,
        lineWidth = _ref3.lineWidth;
    var active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var maxRadius = Math.min.apply(Math, toConsumableArray(chartRef.current.render.area)) / 2;

    var halfLineWidth = lineWidth / 2;

    var realRadius = active ? activeRadius : radius;

    if (typeof realRadius !== 'number') {
      realRadius = parseInt(realRadius) / 100 * maxRadius;
    }

    var insideRadius = realRadius - halfLineWidth;
    var outSideRadius = realRadius + halfLineWidth;

    return [insideRadius, outSideRadius];
  }

  function ringAnimation() {
    var radius = getRealRadius(mergedConfig);
    var active = getRealRadius(mergedConfig, true);

    var option = getRingOption(mergedConfig);

    var data = option.series[0].data.map(function (item, i) {
      return _extends({}, item, {
        radius: i === activeIndex ? active : radius
      });
    });

    chartRef.current.setOption(option);

    var activeTimeGap = option.series[0].activeTimeGap;


    timerRef.current = setTimeout(function (foo) {
      var newActiveIndex = activeIndex + 1;

      if (newActiveIndex >= data.length) {
        newActiveIndex = 0;
      }

      setState(function (state) {
        return _extends({}, state, { activeIndex: newActiveIndex });
      });
    }, activeTimeGap);
  }

  useEffect(function () {
    // 第一次时初始化
    chartRef.current || (chartRef.current = new Chart(domRef.current));

    var mergedConfig = util_2(util_1(defaultConfig, true), config || {});

    chartRef.current.setOption(getRingOption(mergedConfig));

    setState({ mergedConfig: mergedConfig, activeIndex: 0 });

    return function () {
      return clearTimeout(timerRef.current);
    };
  }, [config]);

  useEffect(ringAnimation, [activeIndex, mergedConfig]);

  var classNames = useMemo(function () {
    return classnames('dv-active-ring-chart', className);
  }, [className]);

  return React.createElement(
    'div',
    { className: classNames, style: style },
    React.createElement('div', { className: 'active-ring-chart-container', ref: domRef }),
    React.createElement(
      'div',
      { className: 'active-ring-info' },
      React.createElement(DvDigitalFlop, { config: digitalFlop }),
      React.createElement(
        'div',
        { className: 'active-ring-name', style: fontSize },
        ringName
      )
    )
  );
};

ActiveRingChart.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object

  // 指定 props 的默认值：
};ActiveRingChart.defaultProps = {
  config: {}
};

export default ActiveRingChart;
//# sourceMappingURL=index.js.map
