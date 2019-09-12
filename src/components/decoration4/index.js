import React from "react";

import PropTypes from "prop-types";

import useAutoResize from "../../use/autoResize";

import "./style.less";

const Decoration = ({ reverse = false }) => {
  const { width, height, domRef } = useAutoResize();

  return (
    <div className="dv-decoration-4" ref={domRef}>
      <div
        className={`container ${reverse ? "reverse" : "normal"}`}
        style={
          reverse
            ? `width:${width}px;height:5px`
            : `width:5px;height:${height}px;`
        }
      >
        <svg width={reverse ? width : 5} height={reverse ? 5 : height}>
          <polyline
            stroke="rgba(255, 255, 255, 0.3)"
            points={reverse ? `0, 2.5 ${width}, 2.5` : `2.5, 0 2.5, ${height}`}
          />
          <polyline
            className="bold-line"
            stroke="rgba(255, 255, 255, 0.3)"
            stroke-width="3"
            stroke-dasharray="20, 80"
            stroke-dashoffset="-30"
            points={reverse ? `0, 2.5 ${width}, 2.5` : `2.5, 0 2.5, ${height}`}
          />
        </svg>
      </div>
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
