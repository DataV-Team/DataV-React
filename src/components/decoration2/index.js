import React, { useState, useEffect, useCallback } from "react";

import PropTypes from "prop-types";

import useAutoResize from "../../use/autoResize";

import "./style.less";

const Decoration = ({ reverse = false }) => {
  const { width, height, domRef } = useAutoResize(calcSVGData, calcSVGData);

  const [{ x, y, w, h }, setState] = useState({ x: 0, y: 0, w: 0, h: 0 });

  const calcSVGData = useCallback(() => {
    setState(
      reverse
        ? { w: 1, h: height, x: width / 2, y: 0 }
        : { w: width, h: 1, x: 0, y: height / 2 }
    );
  }, [reverse, width, height]);

  useEffect(calcSVGData, [reverse]);

  return (
    <div className="dv-decoration-2" ref={domRef}>
      <svg width={`${width}px`} height={`${height}px`}>
        <rect x={x} y={y} width={w} height={h} fill="#3faacb">
          <animate
            attributeName={reverse ? "height" : "width"}
            from="0"
            to={reverse ? height : width}
            dur="6s"
            calcMode="spline"
            keyTimes="0;1"
            keySplines=".42,0,.58,1"
            repeatCount="indefinite"
          />
        </rect>

        <rect x={x} y={y} width="1" height="1" fill="#fff">
          <animate
            attributeName={reverse ? "y" : "x"}
            from="0"
            to={reverse ? height : width}
            dur="6s"
            calcMode="spline"
            keyTimes="0;1"
            keySplines="0.42,0,0.58,1"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};

Decoration.propTypes = {
  reverse: PropTypes.bool
};

// 指定 props 的默认值：
Decoration.defaultProps = {
  reverse: false
};

export default Decoration;
