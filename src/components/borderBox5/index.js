import React from "react";

import PropTypes from "prop-types";

import useAutoResize from "../../use/autoResize";

import "./style.less";

const BorderBox = ({ children, reverse = false }) => {
  const { width, height, domRef } = useAutoResize();

  return (
    <div className="dv-border-box-5" ref={domRef}>
      <svg
        className={`dv-svg-container  ${reverse && "dv-reverse"}`}
        width={width}
        height={height}
      >
        <polyline
          className="dv-bb5-line-1"
          points={`8, 5 ${width - 5}, 5 ${width - 5}, ${height - 100}
          ${width - 100}, ${height - 5} 8, ${height - 5} 8, 5`}
        />
        <polyline
          className="dv-bb5-line-2"
          points={`3, 5 ${width - 20}, 5 ${width - 20}, ${height - 60}
          ${width - 74}, ${height - 5} 3, ${height - 5} 3, 5`}
        />
        <polyline
          className="dv-bb5-line-3"
          points={`50, 13 ${width - 35}, 13`}
        />
        <polyline
          className="dv-bb5-line-4"
          points={`15, 20 ${width - 35}, 20`}
        />
        <polyline
          className="dv-bb5-line-5"
          points={`15, ${height - 20} ${width - 110}, ${height - 20}`}
        />
        <polyline
          className="dv-bb5-line-6"
          points={`15, ${height - 13} ${width - 110}, ${height - 13}`}
        />
      </svg>

      <div className="border-box-content">{children}</div>
    </div>
  );
};

BorderBox.propTypes = {
  reverse: PropTypes.bool
};

// 指定 props 的默认值：
BorderBox.defaultProps = {
  reverse: false
};

export default BorderBox;
