import React, { useRef, useEffect } from "react";

import PropTypes from "prop-types";

import Chart from "@jiaminghi/charts";

import useAutoResize from "../../use/autoResize";

import "./style.less";

const Charts = ({ option = {} }) => {
  const { domRef } = useAutoResize(initChart, onResize);

  const chartRef = useRef(null);

  const chartInstanceofRef = useRef(null);

  function initChart() {
    chartInstanceofRef.current = new Chart(chartRef.current);

    if (!option) return;

    chartInstanceofRef.current.setOption(option);
  }

  function onResize() {
    const chart = chartInstanceofRef.current;

    if (!chart) return;

    chart.resize();
  }

  useEffect(() => {
    let newOption = option;
    const chart = chartInstanceofRef.current;

    if (!chart) return;

    if (!newOption) newOption = {};

    chart.setOption(newOption);
  }, [option]);

  return (
    <div className="dv-charts-container" ref={domRef}>
      <div className="charts-canvas-container" ref={chartRef} />
    </div>
  );
};

Charts.propTypes = {
  option: PropTypes.object
};

// 指定 props 的默认值：
Charts.defaultProps = {
  option: {}
};

export default Charts;
