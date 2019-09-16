import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { j as util_2, k as util_1 } from '../chunk-5dad6e83.js';
import { a as useAutoResize } from '../chunk-45917cce.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from '../chunk-0e3b7ae4.js';

var css = ".style_dv-scroll-board__2NwCo {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n}\n.style_dv-scroll-board__2NwCo .style_text__7EIBe {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.style_dv-scroll-board__2NwCo .style_header__uEJat {\n  display: flex;\n  flex-direction: row;\n  font-size: 15px;\n}\n.style_dv-scroll-board__2NwCo .style_header__uEJat .style_header-item__2l0ty {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all 0.3s;\n}\n.style_dv-scroll-board__2NwCo .style_rows__1lKgD {\n  overflow: hidden;\n}\n.style_dv-scroll-board__2NwCo .style_rows__1lKgD .style_row-item__16zdv {\n  display: flex;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.style_dv-scroll-board__2NwCo .style_rows__1lKgD .style_ceil__LnLbS {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.style_dv-scroll-board__2NwCo .style_rows__1lKgD .style_index__jidhL {\n  border-radius: 3px;\n  padding: 0px 3px;\n}\n";
styleInject(css);

var defaultConfig = {
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
  headerBGC: '#00BAFF',
  /**
   * @description Odd row background color
   * @type {String}
   * @default oddRowBGC = '#003B51'
   */
  oddRowBGC: '#003B51',
  /**
   * @description Even row background color
   * @type {String}
   * @default evenRowBGC = '#003B51'
   */
  evenRowBGC: '#0A2732',
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
  carousel: 'single'
};

function calcHeaderData(_ref) {
  var header = _ref.header,
      index = _ref.index;

  if (!header.length) {
    return [];
  }

  header = [].concat(toConsumableArray(header));

  if (index) header.unshift('#');

  return header;
}

function calcRowsData(_ref2) {
  var data = _ref2.data,
      index = _ref2.index,
      headerBGC = _ref2.headerBGC,
      rowNum = _ref2.rowNum;

  if (index) {
    data = data.map(function (row, i) {
      row = [].concat(toConsumableArray(row));

      var indexTag = '<span className="index" style="background-color: ' + headerBGC + ';">' + (i + 1) + '</spand>';

      row.unshift(indexTag);

      return row;
    });
  }

  data = data.map(function (ceils, i) {
    return { ceils: ceils, rowIndex: i };
  });

  var rowLength = data.length;

  if (rowLength > rowNum && rowLength < 2 * rowNum) {
    data = [].concat(toConsumableArray(data), toConsumableArray(data));
  }

  return data.map(function (d, i) {
    return _extends({}, d, { scroll: i });
  });
}

function calcAligns(mergedConfig, header) {
  var columnNum = header.length;

  var aligns = new Array(columnNum).fill('left');

  var align = mergedConfig.align;


  return util_2(aligns, align);
}

var ScrollBoard = function ScrollBoard(_ref3) {
  var animation = function () {
    var _ref6 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var _stateRef$current, avgHeight, animationIndex, _stateRef$current$mer, waitTime, carousel, rowNum, rowsData, rowLength, animationNum, rows, back;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _stateRef$current = stateRef.current, avgHeight = _stateRef$current.avgHeight, animationIndex = _stateRef$current.animationIndex, _stateRef$current$mer = _stateRef$current.mergedConfig, waitTime = _stateRef$current$mer.waitTime, carousel = _stateRef$current$mer.carousel, rowNum = _stateRef$current$mer.rowNum, rowsData = _stateRef$current.rowsData;
              rowLength = rowsData.length;

              if (!(rowNum >= rowLength)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt('return');

            case 4:
              if (!start) {
                _context.next = 7;
                break;
              }

              _context.next = 7;
              return new Promise(function (resolve) {
                return setTimeout(resolve, waitTime);
              });

            case 7:
              animationNum = carousel === 'single' ? 1 : rowNum;
              rows = rowsData.slice(animationIndex);

              rows.push.apply(rows, toConsumableArray(rowsData.slice(0, animationIndex)));

              setState(function (state) {
                return _extends({}, state, {
                  rows: rows,
                  heights: new Array(rowLength).fill(avgHeight)
                });
              });

              _context.next = 13;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 300);
              });

            case 13:

              animationIndex += animationNum;

              back = animationIndex - rowLength;

              if (back >= 0) animationIndex = back;

              setState(function (state) {
                var _ref7;

                return _extends({}, state, {
                  animationIndex: animationIndex,
                  heights: (_ref7 = [].concat(toConsumableArray(state.heights))).splice.apply(_ref7, [0, animationNum].concat(toConsumableArray(new Array(animationNum).fill(0))))
                });
              });

              timerRef.current = setTimeout(animation, waitTime - 300);

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function animation() {
      return _ref6.apply(this, arguments);
    };
  }();

  var onClick = _ref3.onClick,
      config = _ref3.config;

  var _useAutoResize = useAutoResize(calcData, onResize),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = useState({
    mergedConfig: null,

    header: [],

    rowsData: [],

    rows: [],

    widths: [],

    heights: [],

    avgHeight: 0,

    aligns: [],

    animationIndex: 0
  }),
      _useState2 = slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var mergedConfig = state.mergedConfig,
      header = state.header,
      rowsData = state.rowsData,
      rows = state.rows,
      widths = state.widths,
      heights = state.heights,
      aligns = state.aligns;


  var timerRef = useRef(null);
  var stateRef = useRef(state);

  stateRef.current = state;

  function onResize() {
    if (!mergedConfig) return;

    var widths = calcWidths(mergedConfig, rowsData);

    var heightData = calcHeights(mergedConfig, header);

    setState(function (state) {
      return _extends({}, state, { widths: widths }, heightData);
    });
  }

  function calcData() {
    var mergedConfig = util_2(util_1(defaultConfig, true), config || {});

    var header = calcHeaderData(mergedConfig);

    var rowsData = calcRowsData(mergedConfig);

    var widths = calcWidths(mergedConfig, rowsData);

    var heightData = calcHeights(mergedConfig, header);

    var aligns = calcAligns(mergedConfig, header);

    setState(function (state) {
      return _extends({}, state, {
        mergedConfig: mergedConfig,
        header: header,
        rowsData: rowsData,
        rows: [].concat(toConsumableArray(rowsData)),
        widths: widths
      }, heightData, {
        aligns: aligns
      });
    });

    animation(true);
  }

  function calcWidths(_ref4, rowsData) {
    var columnWidth = _ref4.columnWidth,
        header = _ref4.header;

    var usedWidth = columnWidth.reduce(function (all, w) {
      return all + w;
    }, 0);

    var columnNum = 0;
    if (rowsData[0]) {
      columnNum = rowsData[0].ceils.length;
    } else if (header.length) {
      columnNum = header.length;
    }

    var avgWidth = (width - usedWidth) / (columnNum - columnWidth.length);

    var widths = new Array(columnNum).fill(avgWidth);

    return util_2(widths, columnWidth);
  }

  function calcHeights(_ref5, header) {
    var headerHeight = _ref5.headerHeight,
        rowNum = _ref5.rowNum,
        data = _ref5.data;
    var onresize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var allHeight = height;

    if (header.length) allHeight -= headerHeight;

    var avgHeight = allHeight / rowNum;

    return onresize ? { avgHeight: avgHeight } : { avgHeight: avgHeight, heights: new Array(data.length).fill(avgHeight) };
  }

  function emitEvent(ri, ci, row, ceil) {
    var ceils = row.ceils,
        rowIndex = row.rowIndex;


    onClick && onClick({ row: ceils, ceil: ceil, rowIndex: rowIndex, columnIndex: ci });
  }

  var getBackgroundColor = function getBackgroundColor(rowIndex) {
    return mergedConfig[rowIndex % 2 === 0 ? 'evenRowBGC' : 'oddRowBGC'];
  };

  useEffect(function () {
    calcData();

    return function () {
      return clearTimeout(timerRef.current);
    };
  }, [config]);

  return React.createElement(
    'div',
    { className: 'dv-scroll-board', ref: domRef },
    !!header.length && !!mergedConfig && React.createElement(
      'div',
      {
        className: 'header',
        style: 'background-color: ' + mergedConfig.headerBGC + ';'
      },
      header.map(function (headerItem, i) {
        return React.createElement('div', {
          className: 'header-item',
          key: headerItem + i,
          style: '\n                    height: ' + mergedConfig.headerHeight + 'px;\n                    line-height: ' + mergedConfig.headerHeight + 'px;\n                    width: ' + widths[i] + 'px;\n                  ',
          align: aligns[i],
          dangerouslySetInnerHTML: { __html: headerItem }
        });
      })
    ),
    !!mergedConfig && React.createElement(
      'div',
      {
        className: 'rows',
        style: 'height: ' + (height - (header.length ? mergedConfig.headerHeight : 0)) + 'px;'
      },
      rows.map(function (row, ri) {
        return React.createElement(
          'div',
          {
            className: 'row-item',
            key: row.toString() + row.scroll,
            style: '\n                    height: ' + heights[ri] + 'px;\n                    line-height: ' + heights[ri] + 'px;\n                    background-color: ' + getBackgroundColor(row.rowIndex) + ';\n                  '
          },
          row.ceils.map(function (ceil, ci) {
            return React.createElement('div', {
              className: 'ceil',
              key: ceil + ri + ci,
              style: 'width: ' + widths[ci] + 'px;',
              align: aligns[ci],
              dangerouslySetInnerHTML: { __html: ceil },
              onClick: function onClick() {
                return emitEvent(ri, ci, row, ceil);
              }
            });
          })
        );
      })
    )
  );
};

ScrollBoard.propTypes = {
  config: PropTypes.object,
  onClick: PropTypes.func

  // 指定 props 的默认值：
};ScrollBoard.defaultProps = {
  config: {}
};

export default ScrollBoard;
//# sourceMappingURL=index.js.map
