import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { a as classnames } from '../chunk-84657507.js';
import { h as util_2, i as util_1 } from '../chunk-41d81e09.js';
import { a as useAutoResize, d as co } from '../chunk-d3494329.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from '../chunk-0e3b7ae4.js';

var css = ".dv-scroll-board {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n}\n.dv-scroll-board .text {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dv-scroll-board .header {\n  display: flex;\n  flex-direction: row;\n  font-size: 15px;\n}\n.dv-scroll-board .header .header-item {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all 0.3s;\n}\n.dv-scroll-board .rows {\n  overflow: hidden;\n}\n.dv-scroll-board .rows .row-item {\n  display: flex;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.dv-scroll-board .rows .ceil {\n  padding: 0 10px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dv-scroll-board .rows .index {\n  border-radius: 3px;\n  padding: 0px 3px;\n}\n";
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

function calcRows(_ref2) {
  var data = _ref2.data,
      index = _ref2.index,
      headerBGC = _ref2.headerBGC,
      rowNum = _ref2.rowNum;

  if (index) {
    data = data.map(function (row, i) {
      row = [].concat(toConsumableArray(row));

      var indexTag = '<span class="index" style="background-color: ' + headerBGC + ';">' + (i + 1) + '</span>';

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
  var _marked = /*#__PURE__*/regeneratorRuntime.mark(animation);

  var onClick = _ref3.onClick,
      config = _ref3.config,
      className = _ref3.className,
      style = _ref3.style;

  var _useAutoResize = useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = useState({
    mergedConfig: null,

    header: [],

    rows: [],

    widths: [],

    heights: [],

    aligns: []
  }),
      _useState2 = slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var mergedConfig = state.mergedConfig,
      header = state.header,
      rows = state.rows,
      widths = state.widths,
      heights = state.heights,
      aligns = state.aligns;


  var stateRef = useRef(_extends({}, state, {
    rowsData: [],
    avgHeight: 0,
    animationIndex: 0
  }));

  Object.assign(stateRef.current, state);

  function onResize() {
    if (!mergedConfig) return;

    var widths = calcWidths(mergedConfig, stateRef.current.rowsData);

    var heights = calcHeights(mergedConfig, header);

    var data = { widths: widths };

    heights !== undefined && Object.assign(data, { heights: heights });

    Object.assign(stateRef.current, data);
    setState(function (state) {
      return _extends({}, state, data);
    });
  }

  function calcData() {
    var mergedConfig = util_2(util_1(defaultConfig, true), config || {});

    var header = calcHeaderData(mergedConfig);

    var rows = calcRows(mergedConfig);

    var widths = calcWidths(mergedConfig, stateRef.current.rowsData);

    var heights = calcHeights(mergedConfig, header);

    var aligns = calcAligns(mergedConfig, header);

    var data = {
      mergedConfig: mergedConfig,
      header: header,
      rows: rows,
      widths: widths,
      aligns: aligns
    };

    heights !== undefined && Object.assign(data, { heights: heights });

    Object.assign(stateRef.current, data, { rowsData: rows });

    setState(function (state) {
      return _extends({}, state, data);
    });
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

    Object.assign(stateRef.current, { avgHeight: avgHeight });

    if (!onresize) {
      return new Array(data.length).fill(avgHeight);
    }
  }

  function animation() {
    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var _stateRef$current, avgHeight, animationIndex, _stateRef$current$mer, waitTime, carousel, rowNum, rowsData, rowLength, animationNum, rows, heights, back, newHeights;

    return regeneratorRuntime.wrap(function animation$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _stateRef$current = stateRef.current, avgHeight = _stateRef$current.avgHeight, animationIndex = _stateRef$current.animationIndex, _stateRef$current$mer = _stateRef$current.mergedConfig, waitTime = _stateRef$current$mer.waitTime, carousel = _stateRef$current$mer.carousel, rowNum = _stateRef$current$mer.rowNum, rowsData = _stateRef$current.rowsData;
            rowLength = rowsData.length;

            if (!start) {
              _context.next = 5;
              break;
            }

            _context.next = 5;
            return new Promise(function (resolve) {
              return setTimeout(resolve, waitTime);
            });

          case 5:
            animationNum = carousel === 'single' ? 1 : rowNum;
            rows = rowsData.slice(animationIndex);

            rows.push.apply(rows, toConsumableArray(rowsData.slice(0, animationIndex)));

            heights = new Array(rowLength).fill(avgHeight);

            setState(function (state) {
              return _extends({}, state, { rows: rows, heights: heights });
            });

            _context.next = 12;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 300);
            });

          case 12:

            animationIndex += animationNum;

            back = animationIndex - rowLength;

            if (back >= 0) animationIndex = back;

            newHeights = [].concat(toConsumableArray(heights));

            newHeights.splice.apply(newHeights, [0, animationNum].concat(toConsumableArray(new Array(animationNum).fill(0))));

            Object.assign(stateRef.current, { animationIndex: animationIndex });
            setState(function (state) {
              return _extends({}, state, { heights: newHeights });
            });

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked, this);
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
    var _marked2 = /*#__PURE__*/regeneratorRuntime.mark(loop);

    calcData();

    var start = true;

    function loop() {
      var _this = this;

      var _loop;

      return regeneratorRuntime.wrap(function loop$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                var waitTime;
                return regeneratorRuntime.wrap(function _loop$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        return _context2.delegateYield(animation(start), 't0', 1);

                      case 1:

                        start = false;

                        waitTime = stateRef.current.mergedConfig.waitTime;
                        _context2.next = 5;
                        return new Promise(function (resolve) {
                          return setTimeout(resolve, waitTime - 300);
                        });

                      case 5:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _loop, _this);
              });

            case 1:

              return _context3.delegateYield(_loop(), 't0', 3);

            case 3:
              _context3.next = 1;
              break;

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _marked2, this);
    }

    var _stateRef$current2 = stateRef.current,
        rowNum = _stateRef$current2.mergedConfig.rowNum,
        rowsData = _stateRef$current2.rows;


    var rowLength = rowsData.length;

    if (rowNum >= rowLength) return;

    var it = loop();

    co(it);

    return it.return;
  }, [config]);

  useEffect(onResize, [height]);

  var classNames = useMemo(function () {
    return classnames('dv-scroll-board', className);
  }, [className]);

  return React.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    !!header.length && !!mergedConfig && React.createElement(
      'div',
      {
        className: 'header',
        style: { backgroundColor: '' + mergedConfig.headerBGC }
      },
      header.map(function (headerItem, i) {
        return React.createElement('div', {
          className: 'header-item',
          key: headerItem + i,
          style: {
            height: mergedConfig.headerHeight + 'px',
            lineHeight: mergedConfig.headerHeight + 'px',
            width: widths[i] + 'px'
          },
          align: aligns[i],
          dangerouslySetInnerHTML: { __html: headerItem }
        });
      })
    ),
    !!mergedConfig && React.createElement(
      'div',
      {
        className: 'rows',
        style: {
          height: height - (header.length ? mergedConfig.headerHeight : 0) + 'px'
        }
      },
      rows.map(function (row, ri) {
        return React.createElement(
          'div',
          {
            className: 'row-item',
            key: row.toString() + row.scroll,
            style: {
              height: heights[ri] + 'px',
              lineHeight: heights[ri] + 'px',
              backgroundColor: '' + getBackgroundColor(row.rowIndex)
            }
          },
          row.ceils.map(function (ceil, ci) {
            return React.createElement('div', {
              className: 'ceil',
              key: ceil + ri + ci,
              style: { width: widths[ci] + 'px' },
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
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object

  // 指定 props 的默认值：
};ScrollBoard.defaultProps = {
  config: {}
};

export default ScrollBoard;
//# sourceMappingURL=index.js.map
