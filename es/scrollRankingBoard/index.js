import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { deepMerge } from '@jiaminghi/charts/lib/util/index';
import { deepClone } from '@jiaminghi/c-render/lib/plugin/util';
import { a as useAutoResize } from '../chunk-45917cce.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from '../chunk-0e3b7ae4.js';

var css = ".style_dv-scroll-ranking-board__2sxK9 {\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  overflow: hidden;\n}\n.style_dv-scroll-ranking-board__2sxK9 .style_row-item__2F63d {\n  transition: all 0.3s;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n}\n.style_dv-scroll-ranking-board__2sxK9 .style_ranking-info__aY8Zw {\n  display: flex;\n  width: 100%;\n  font-size: 13px;\n}\n.style_dv-scroll-ranking-board__2sxK9 .style_ranking-info__aY8Zw .style_rank__VMjYD {\n  width: 40px;\n  color: #1370fb;\n}\n.style_dv-scroll-ranking-board__2sxK9 .style_ranking-info__aY8Zw .style_info-name__xXAXO {\n  flex: 1;\n}\n.style_dv-scroll-ranking-board__2sxK9 .style_ranking-column__aXA8y {\n  border-bottom: 2px solid rgba(19, 112, 251, 0.5);\n  margin-top: 5px;\n}\n.style_dv-scroll-ranking-board__2sxK9 .style_ranking-column__aXA8y .style_inside-column__1ppBs {\n  position: relative;\n  height: 6px;\n  background-color: #1370fb;\n  margin-bottom: 2px;\n  border-radius: 1px;\n  overflow: hidden;\n}\n.style_dv-scroll-ranking-board__2sxK9 .style_ranking-column__aXA8y .style_shine__Hc0qI {\n  position: absolute;\n  left: 0%;\n  top: 2px;\n  height: 2px;\n  width: 50px;\n  transform: translateX(-100%);\n  background: radial-gradient(#28f8ff 5%, transparent 80%);\n  animation: style_shine__Hc0qI 3s ease-in-out infinite alternate;\n}\n@keyframes style_shine__Hc0qI {\n  80% {\n    left: 0%;\n    transform: translateX(-100%);\n  }\n  100% {\n    left: 100%;\n    transform: translateX(0%);\n  }\n}\n";
styleInject(css);

var defaultConfig = {
  /**
   * @description Board data
   * @type {Array<Object>}
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
   * @description Scroll wait time
   * @type {Number}
   * @default waitTime = 2000
   */
  waitTime: 2000,
  /**
   * @description Carousel type
   * @type {String}
   * @default carousel = 'single'
   * @example carousel = 'single' | 'page'
   */
  carousel: 'single',
  /**
   * @description Value unit
   * @type {String}
   * @default unit = ''
   * @example unit = 'ton'
   */
  unit: ''
};

function calcRowsData(_ref) {
  var data = _ref.data,
      rowNum = _ref.rowNum;

  data.sort(function (_ref2, _ref3) {
    var a = _ref2.value;
    var b = _ref3.value;

    if (a > b) return -1;
    if (a < b) return 1;
    if (a === b) return 0;
  });

  var value = data.map(function (_ref4) {
    var value = _ref4.value;
    return value;
  });

  var max = Math.max.apply(Math, toConsumableArray(value)) || 0;

  data = data.map(function (row, i) {
    return _extends({}, row, {
      ranking: i + 1,
      percent: row.value / max * 100
    });
  });

  var rowLength = data.length;

  if (rowLength > rowNum && rowLength < 2 * rowNum) {
    data = [].concat(toConsumableArray(data), toConsumableArray(data));
  }

  data = data.map(function (d, i) {
    return _extends({}, d, { scroll: i });
  });

  return data;
}

var ScrollRankingBoard = function ScrollRankingBoard(_ref5) {
  var animation = function () {
    var _ref7 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var _stateRef$current, avgHeight, animationIndex, mergedConfig, rowsData, animation, waitTime, carousel, rowNum, rowLength, animationNum, rows, back;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _stateRef$current = stateRef.current, avgHeight = _stateRef$current.avgHeight, animationIndex = _stateRef$current.animationIndex, mergedConfig = _stateRef$current.mergedConfig, rowsData = _stateRef$current.rowsData, animation = _stateRef$current.animation;
              waitTime = mergedConfig.waitTime, carousel = mergedConfig.carousel, rowNum = mergedConfig.rowNum;
              rowLength = rowsData.length;

              if (!(rowNum >= rowLength)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt('return');

            case 5:
              if (!start) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return new Promise(function (resolve) {
                return setTimeout(resolve, waitTime);
              });

            case 8:
              animationNum = carousel === 'single' ? 1 : rowNum;
              rows = rowsData.slice(animationIndex);

              rows.push.apply(rows, toConsumableArray(rowsData.slice(0, animationIndex)));

              setState(function (state) {
                return _extends({}, state, {
                  rows: rows,
                  heights: new Array(rowLength).fill(avgHeight)
                });
              });

              _context.next = 14;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 300);
              });

            case 14:

              animationIndex += animationNum;

              back = animationIndex - rowLength;

              if (back >= 0) animationIndex = back;

              setState(function (state) {
                var _ref8;

                return _extends({}, state, {
                  animationIndex: animationIndex,
                  heights: (_ref8 = [].concat(toConsumableArray(state.heights))).splice.apply(_ref8, [0, animationNum].concat(toConsumableArray(new Array(animationNum).fill(0))))
                });
              });

              timerRef.current = setTimeout(animation, waitTime - 300);

            case 19:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function animation() {
      return _ref7.apply(this, arguments);
    };
  }();

  var config = _ref5.config;

  var _useAutoResize = useAutoResize(calcData, onResize),
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = useState({
    mergedConfig: null,

    rowsData: [],

    rows: [],

    avgHeight: 0,

    heights: [],

    animationIndex: 0
  }),
      _useState2 = slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var mergedConfig = state.mergedConfig,
      rows = state.rows,
      heights = state.heights;


  var timerRef = useRef(null);
  var stateRef = useRef(state);

  stateRef.current = state;

  function onResize() {
    if (!mergedConfig) return;

    calcHeights(true);
  }

  function calcData() {
    var mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {});

    var rowsData = calcRowsData(mergedConfig);

    var heightData = calcHeights(mergedConfig);

    setState(function (state) {
      return _extends({}, state, {
        mergedConfig: mergedConfig,
        rowsData: rowsData,
        rows: [].concat(toConsumableArray(rowsData))
      }, heightData);
    });

    animation(true);
  }

  function calcHeights(_ref6) {
    var rowNum = _ref6.rowNum,
        data = _ref6.data;
    var onresize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var avgHeight = height / rowNum;

    if (onresize) {
      return { avgHeight: avgHeight };
    }

    return { avgHeight: avgHeight, heights: new Array(data.length).fill(avgHeight) };
  }

  useEffect(function () {
    calcData();

    return function () {
      return clearTimeout(timerRef.current);
    };
  }, [config]);

  return React.createElement(
    'div',
    { className: 'dv-scroll-ranking-board', ref: domRef },
    rows.map(function (item, i) {
      return React.createElement(
        'div',
        {
          className: 'row-item',
          key: item.toString() + item.scroll,
          style: 'height: ' + heights[i] + 'px;'
        },
        React.createElement(
          'div',
          { className: 'ranking-info' },
          React.createElement(
            'div',
            { className: 'rank' },
            'No.',
            item.ranking
          ),
          React.createElement(
            'div',
            { className: 'info-name' },
            item.name
          ),
          React.createElement(
            'div',
            { className: 'ranking-value' },
            item.value + mergedConfig.unit
          )
        ),
        React.createElement(
          'div',
          { className: 'ranking-column' },
          React.createElement(
            'div',
            { className: 'inside-column', style: 'width: ' + item.percent + '%;' },
            React.createElement('div', { className: 'shine' })
          )
        )
      );
    })
  );
};

ScrollRankingBoard.propTypes = {
  config: PropTypes.object

  // 指定 props 的默认值：
};ScrollRankingBoard.defaultProps = {
  config: {}
};

export default ScrollRankingBoard;
//# sourceMappingURL=index.js.map
