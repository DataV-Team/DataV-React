import React from "react";

import useAutoResize from "../../use/autoResize";

import "./style.less";

export default ({ children }) => {
  const { width, height, domRef } = useAutoResize();

  return (
    <div className="dv-border-box-6" ref={domRef}>
      <svg className="dv-svg-container" width={width} height={height}>
        <circle cx="5" cy="5" r="2" />
        <circle cx={width - 5} cy="5" r="2" />
        <circle cx={width - 5} cy={height - 5} r="2" />
        <circle cx="5" cy={height - 5} r="2" />
        <polyline points={`10, 4 ${width - 10}, 4`} />
        <polyline points={`10, ${height - 4} ${width - 10}, ${height - 4}`} />
        <polyline points={`5, 70 5, ${height - 70}`} />
        <polyline points={`${width - 5}, 70 ${width - 5}, ${height - 70}`} />
        <polyline points={`3, 10, 3, 50`} />
        <polyline points={`7, 30 7, 80`} />
        <polyline points={`${width - 3}, 10 ${width - 3}, 50`} />
        <polyline points={`${width - 7}, 30 ${width - 7}, 80`} />
        <polyline points={`3, ${height - 10} 3, ${height - 50}`} />
        <polyline points={`7, ${height - 30} 7, ${height - 80}`} />
        <polyline
          points={`${width - 3}, ${height - 10} ${width - 3}, ${height - 50}`}
        />
        <polyline
          points={`${width - 7}, ${height - 30} ${width - 7}, ${height - 80}`}
        />
      </svg>

      <div className="border-box-content">{children}</div>
    </div>
  );
};
