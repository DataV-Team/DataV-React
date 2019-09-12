import React, { useEffect, useState, useRef } from "react";

import PropTypes from "prop-types";

import { deepMerge } from "@jiaminghi/charts/lib/util/index";

import { deepClone } from "@jiaminghi/c-render/lib/plugin/util";

import useAutoResize from "../../use/autoResize";

import "./style.less";

const defaultConfig = {
  /**
   * @description Board header
   * @type {Array<String>}
   * @default header = []
   * @example header = ['column1', 'column2', 'column3']
   */
  header: [],
  /**
   * @description Board data
   * @type {Array<Array>}
   * @default data = []
   */
  data: [],
  /**
   * @description Row num
   * @type {Number}
   * @default rowNum = 5
   */
  rowNum: 5,
  /**
   * @description Header background color
   * @type {String}
   * @default headerBGC = '#00BAFF'
   */
  headerBGC: "#00BAFF",
  /**
   * @description Odd row background color
   * @type {String}
   * @default oddRowBGC = '#003B51'
   */
  oddRowBGC: "#003B51",
  /**
   * @description Even row background color
   * @type {String}
   * @default evenRowBGC = '#003B51'
   */
  evenRowBGC: "#0A2732",
  /**
   * @description Scroll wait time
   * @type {Number}
   * @default waitTime = 2000
   */
  waitTime: 2000,
  /**
   * @description Header height
   * @type {Number}
   * @default headerHeight = 35
   */
  headerHeight: 35,
  /**
   * @description Column width
   * @type {Array<Number>}
   * @default columnWidth = []
   */
  columnWidth: [],
  /**
   * @description Column align
   * @type {Array<String>}
   * @default align = []
   * @example align = ['left', 'center', 'right']
   */
  align: [],
  /**
   * @description Show index
   * @type {Boolean}
   * @default index = false
   */
  index: false,
  /**
   * @description Carousel type
   * @type {String}
   * @default carousel = 'single'
   * @example carousel = 'single' | 'page'
   */
  carousel: "single"
};

function calcHeaderData({ header, index }) {
  if (!header.length) {
    return [];
  }

  header = [...header];

  if (index) header.unshift("#");

  return header;
}

function calcRowsData({ data, index, headerBGC, rowNum }) {
  if (index) {
    data = data.map((row, i) => {
      row = [...row];

      const indexTag = `<span className="index" style="background-color: ${headerBGC};">${i +
        1}</spand>`;

      row.unshift(indexTag);

      return row;
    });
  }

  data = data.map((ceils, i) => ({ ceils, rowIndex: i }));

  const rowLength = data.length;

  if (rowLength > rowNum && rowLength < 2 * rowNum) {
    data = [...data, ...data];
  }

  return data.map((d, i) => ({ ...d, scroll: i }));
}

function calcAligns(mergedConfig, header) {
  const columnNum = header.length;

  let aligns = new Array(columnNum).fill("left");

  const { align } = mergedConfig;

  return deepMerge(aligns, align);
}

const ScrollBoard = ({ onClick, config }) => {
  const { width, height, domRef } = useAutoResize(calcData, onResize);

  const [state, setState] = useState({
    mergedConfig: null,

    header: [],

    rowsData: [],

    rows: [],

    widths: [],

    heights: [],

    avgHeight: 0,

    aligns: [],

    animationIndex: 0
  });

  const {
    mergedConfig,
    header,
    rowsData,
    rows,
    widths,
    heights,
    aligns
  } = state;

  const timerRef = useRef(null);
  const stateRef = useRef(state);

  stateRef.current = state;

  function onResize() {
    if (!mergedConfig) return;

    const widths = calcWidths(mergedConfig, rowsData);

    const heightData = calcHeights(mergedConfig, header);

    setState(state => ({ ...state, widths, ...heightData }));
  }

  function calcData() {
    const mergedConfig = deepMerge(
      deepClone(defaultConfig, true),
      config || {}
    );

    const header = calcHeaderData(mergedConfig);

    const rowsData = calcRowsData(mergedConfig);

    const widths = calcWidths(mergedConfig, rowsData);

    const heightData = calcHeights(mergedConfig, header);

    const aligns = calcAligns(mergedConfig, header);

    setState(state => ({
      ...state,
      mergedConfig,
      header,
      rowsData,
      rows: [...rowsData],
      widths,
      ...heightData,
      aligns
    }));

    animation(true);
  }

  function calcWidths({ columnWidth, header }, rowsData) {
    const usedWidth = columnWidth.reduce((all, w) => all + w, 0);

    let columnNum = 0;
    if (rowsData[0]) {
      columnNum = rowsData[0].ceils.length;
    } else if (header.length) {
      columnNum = header.length;
    }

    const avgWidth = (width - usedWidth) / (columnNum - columnWidth.length);

    const widths = new Array(columnNum).fill(avgWidth);

    return deepMerge(widths, columnWidth);
  }

  function calcHeights(
    { headerHeight, rowNum, data },
    header,
    onresize = false
  ) {
    let allHeight = height;

    if (header.length) allHeight -= headerHeight;

    const avgHeight = allHeight / rowNum;

    return onresize
      ? { avgHeight }
      : { avgHeight, heights: new Array(data.length).fill(avgHeight) };
  }

  async function animation(start = false) {
    let {
      avgHeight,
      animationIndex,
      mergedConfig: { waitTime, carousel, rowNum },
      rowsData
    } = stateRef.current;

    const rowLength = rowsData.length;

    if (rowNum >= rowLength) return;

    if (start) await new Promise(resolve => setTimeout(resolve, waitTime));

    const animationNum = carousel === "single" ? 1 : rowNum;

    let rows = rowsData.slice(animationIndex);
    rows.push(...rowsData.slice(0, animationIndex));

    setState(state => ({
      ...state,
      rows,
      heights: new Array(rowLength).fill(avgHeight)
    }));

    await new Promise(resolve => setTimeout(resolve, 300));

    animationIndex += animationNum;

    const back = animationIndex - rowLength;
    if (back >= 0) animationIndex = back;

    setState(state => ({
      ...state,
      animationIndex,
      heights: [...state.heights].splice(
        0,
        animationNum,
        ...new Array(animationNum).fill(0)
      )
    }));

    timerRef.current = setTimeout(animation, waitTime - 300);
  }

  function emitEvent(ri, ci, row, ceil) {
    const { ceils, rowIndex } = row;

    onClick && onClick({ row: ceils, ceil, rowIndex, columnIndex: ci });
  }

  useEffect(() => {
    calcData();

    return () => clearTimeout(timerRef.current);
  }, [config]);

  return (
    <div className="dv-scroll-board" ref={domRef}>
      {!!header.length && !!mergedConfig && (
        <div
          className="header"
          style={`background-color: ${mergedConfig.headerBGC};`}
        >
          {header.map((headerItem, i) => (
            <div
              className="header-item"
              key={headerItem + i}
              style={`
                    height: ${mergedConfig.headerHeight}px;
                    line-height: ${mergedConfig.headerHeight}px;
                    width: ${widths[i]}px;
                  `}
              align={aligns[i]}
              dangerouslySetInnerHTML={{ __html: headerItem }}
            />
          ))}
        </div>
      )}

      {!!mergedConfig && (
        <div
          className="rows"
          style={`height: ${height -
            (header.length ? mergedConfig.headerHeight : 0)}px;`}
        >
          {rows.map((row, ri) => (
            <div
              className="row-item"
              key={row.toString() + row.scroll}
              style={`
                    height: ${heights[ri]}px;
                    line-height: ${heights[ri]}px;
                    background-color: ${
                      mergedConfig[
                        row.rowIndex % 2 === 0 ? "evenRowBGC" : "oddRowBGC"
                      ]
                    };
                  `}
            >
              {row.ceils.map((ceil, ci) => (
                <div
                  className="ceil"
                  key={ceil + ri + ci}
                  style={`width: ${widths[ci]}px;`}
                  align={aligns[ci]}
                  dangerouslySetInnerHTML={{ __html: ceil }}
                  onClick={() => emitEvent(ri, ci, row, ceil)}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ScrollBoard.propTypes = {
  config: PropTypes.object
};

// 指定 props 的默认值：
ScrollBoard.defaultProps = {
  config: {}
};

export default ScrollBoard;
