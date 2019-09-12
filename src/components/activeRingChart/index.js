import React, { useRef, useState, useEffect, useMemo } from "react";

import PropTypes from "prop-types";

import Charts from "@jiaminghi/charts";

import DvDigitalFlop from "../digitalFlop";

import { deepMerge } from "@jiaminghi/charts/lib/util/index";

import { deepClone } from "@jiaminghi/c-render/lib/plugin/util";

import "./style.less";

const defaultConfig = {
  /**
   * @description Ring radius
   * @type {String|Number}
   * @default radius = '50%'
   * @example radius = '50%' | 100
   */
  radius: "50%",
  /**
   * @description Active ring radius
   * @type {String|Number}
   * @default activeRadius = '55%'
   * @example activeRadius = '55%' | 110
   */
  activeRadius: "55%",
  /**
   * @description Ring data
   * @type {Array<Object>}
   * @default data = [{ name: '', value: 0 }]
   */
  data: [{ name: "", value: 0 }],
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
    fill: "#fff"
  },
  /**
   * @description CRender animationCurve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: "easeOutCubic",
  /**
   * @description CRender animationFrame
   * @type {String}
   * @default animationFrame = 50
   */
  animationFrame: 50
};

const ActiveRingChart = ({ config = {} }) => {
  const [{ activeIndex, mergedConfig }, setState] = useState({
    activeIndex: 0,
    mergedConfig: null
  });

  const domRef = useRef(null);
  const chartRef = useRef(null);
  const timerRef = useRef(null);

  const digitalFlop = useMemo(() => {
    if (!mergedConfig) return {};

    const { digitalFlopStyle, data } = mergedConfig;

    const value = data.map(({ value }) => value);

    const sum = value.reduce((all, v) => all + v, 0);

    const percent = parseInt((value[activeIndex] / sum) * 100);

    return { content: "{nt}%", number: [percent], style: digitalFlopStyle };
  }, [mergedConfig, activeIndex]);

  const ringName = useMemo(
    () => (!mergedConfig ? "" : mergedConfig.data[activeIndex].name),
    [mergedConfig, activeIndex]
  );

  const fontSize = useMemo(
    () =>
      !mergedConfig
        ? ""
        : `font-size: ${mergedConfig.digitalFlopStyle.fontSize}px;`,
    [mergedConfig]
  );

  function getRingOption() {
    const radius = getRealRadius(mergedConfig);

    const newMergedConfig = {
      ...mergedConfig,
      data: mergedConfig.data.map(item => ({ ...item, radius }))
    };

    return {
      series: [
        {
          type: "pie",
          ...newMergedConfig,
          outsideLabel: {
            show: false
          }
        }
      ],
      color: newMergedConfig.color
    };
  }

  function getRealRadius(active = false) {
    const maxRadius = Math.min(...chartRef.current.render.area) / 2;

    const halfLineWidth = lineWidth / 2;

    let realRadius = active ? activeRadius : radius;

    if (typeof realRadius !== "number")
      realRadius = (parseInt(realRadius) / 100) * maxRadius;

    const insideRadius = realRadius - halfLineWidth;
    const outSideRadius = realRadius + halfLineWidth;

    return [insideRadius, outSideRadius];
  }

  function ringAnimation() {
    const radius = getRealRadius();
    const active = getRealRadius(true);

    const option = getRingOption();

    const data = option.series[0].data.map((item, i) => ({
      ...item,
      radius: i === activeIndex ? active : radius
    }));

    chartRef.current.setOption(option);

    const { activeTimeGap } = option.series[0];

    timerRef.current = setTimeout(foo => {
      const newActiveIndex = activeIndex + 1;

      if (newActiveIndex >= data.length) {
        newActiveIndex = 0;
      }

      setState(state => ({ ...state, activeIndex: newActiveIndex }));
    }, activeTimeGap);
  }

  useEffect(() => {
    // 第一次时初始化
    chartRef.current || (chartRef.current = new Charts(domRef.current));

    const mergedConfig = deepMerge(
      deepClone(defaultConfig, true),
      config || {}
    );

    chartRef.current.setOption(getRingOption(mergedConfig));

    setState({ mergedConfig, activeIndex: 0 });

    return () => clearTimeout(timerRef.current);
  }, [config]);

  useEffect(ringAnimation, [activeIndex, mergedConfig]);

  return (
    <div className="dv-active-ring-chart">
      <div className="active-ring-chart-container" ref={domRef} />
      <div className="active-ring-info">
        <DvDigitalFlop config={digitalFlop} />
        <div className="active-ring-name" style={fontSize}>
          {ringName}
        </div>
      </div>
    </div>
  );
};

ActiveRingChart.propTypes = {
  config: PropTypes.object
};

// 指定 props 的默认值：
ActiveRingChart.defaultProps = {
  config: {}
};

export default ActiveRingChart;
