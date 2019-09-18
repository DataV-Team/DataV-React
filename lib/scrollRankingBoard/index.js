'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_4 = require('../chunk-7aa8c3ff.js');
var __chunk_5 = require('../chunk-74662e50.js');
var __chunk_1 = require('../chunk-d58196f4.js');
var __chunk_2 = require('../chunk-0d83f239.js');

var css = ".dv-scroll-ranking-board {\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  overflow: hidden;\n}\n.dv-scroll-ranking-board .row-item {\n  transition: all 0.3s;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n}\n.dv-scroll-ranking-board .ranking-info {\n  display: flex;\n  width: 100%;\n  font-size: 13px;\n}\n.dv-scroll-ranking-board .ranking-info .rank {\n  width: 40px;\n  color: #1370fb;\n}\n.dv-scroll-ranking-board .ranking-info .info-name {\n  flex: 1;\n}\n.dv-scroll-ranking-board .ranking-column {\n  border-bottom: 2px solid rgba(19, 112, 251, 0.5);\n  margin-top: 5px;\n}\n.dv-scroll-ranking-board .ranking-column .inside-column {\n  position: relative;\n  height: 6px;\n  background-color: #1370fb;\n  margin-bottom: 2px;\n  border-radius: 1px;\n  overflow: hidden;\n}\n.dv-scroll-ranking-board .ranking-column .shine {\n  position: absolute;\n  left: 0%;\n  top: 2px;\n  height: 2px;\n  width: 50px;\n  transform: translateX(-100%);\n  background: radial-gradient(#28f8ff 5%, transparent 80%);\n  animation: shine 3s ease-in-out infinite alternate;\n}\n@keyframes shine {\n  80% {\n    left: 0%;\n    transform: translateX(-100%);\n  }\n  100% {\n    left: 100%;\n    transform: translateX(0%);\n  }\n}\n";
__chunk_3.styleInject(css);

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

function calcRows(_ref) {
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

  var max = Math.max.apply(Math, __chunk_2.toConsumableArray(value)) || 0;

  data = data.map(function (row, i) {
    return __chunk_2._extends({}, row, {
      ranking: i + 1,
      percent: row.value / max * 100
    });
  });

  var rowLength = data.length;

  if (rowLength > rowNum && rowLength < 2 * rowNum) {
    data = [].concat(__chunk_2.toConsumableArray(data), __chunk_2.toConsumableArray(data));
  }

  data = data.map(function (d, i) {
    return __chunk_2._extends({}, d, { scroll: i });
  });

  return data;
}

var ScrollRankingBoard = function ScrollRankingBoard(_ref5) {
  var _marked = /*#__PURE__*/regeneratorRuntime.mark(animation);

  var config = _ref5.config,
      className = _ref5.className,
      style = _ref5.style;

  var _useAutoResize = __chunk_1.useAutoResize(),
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = React.useState({
    mergedConfig: null,

    rows: [],

    heights: []
  }),
      _useState2 = __chunk_2.slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var mergedConfig = state.mergedConfig,
      rows = state.rows,
      heights = state.heights;


  var stateRef = React.useRef(__chunk_2._extends({}, state, { avgHeight: 0, animationIndex: 0 }));
  var heightRef = React.useRef(height);

  Object.assign(stateRef.current, state);

  function onResize() {
    var onresize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!mergedConfig) return;

    var heights = calcHeights(mergedConfig, onresize);

    heights !== undefined && setState(function (state) {
      return __chunk_2._extends({}, state, { heights: heights });
    });
  }

  function calcData() {
    var mergedConfig = __chunk_5.util_2(__chunk_5.util_1(defaultConfig, true), config || {});

    var rows = calcRows(mergedConfig);

    var heights = calcHeights(mergedConfig);

    var data = { mergedConfig: mergedConfig, rows: rows };

    heights !== undefined && Object.assign(data, { heights: heights });

    Object.assign(stateRef.current, data);

    setState(function (state) {
      return __chunk_2._extends({}, state, data);
    });
  }

  function calcHeights(_ref6) {
    var rowNum = _ref6.rowNum,
        data = _ref6.data;
    var onresize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var avgHeight = height / rowNum;

    Object.assign(stateRef.current, { avgHeight: avgHeight });

    if (!onresize) {
      return new Array(data.length).fill(avgHeight);
    }
  }

  function animation() {
    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var _stateRef$current, avgHeight, animationIndex, mergedConfig, rowsData, waitTime, carousel, rowNum, rowLength, animationNum, rows, back;

    return regeneratorRuntime.wrap(function animation$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _stateRef$current = stateRef.current, avgHeight = _stateRef$current.avgHeight, animationIndex = _stateRef$current.animationIndex, mergedConfig = _stateRef$current.mergedConfig, rowsData = _stateRef$current.rows;
            waitTime = mergedConfig.waitTime, carousel = mergedConfig.carousel, rowNum = mergedConfig.rowNum;
            rowLength = rowsData.length;

            if (!start) {
              _context.next = 6;
              break;
            }

            _context.next = 6;
            return new Promise(function (resolve) {
              return setTimeout(resolve, waitTime);
            });

          case 6:
            animationNum = carousel === 'single' ? 1 : rowNum;
            rows = rowsData.slice(animationIndex);

            rows.push.apply(rows, __chunk_2.toConsumableArray(rowsData.slice(0, animationIndex)));

            setState(function (state) {
              return __chunk_2._extends({}, state, {
                rows: rows,
                heights: new Array(rowLength).fill(avgHeight)
              });
            });

            _context.next = 12;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 300);
            });

          case 12:

            animationIndex += animationNum;

            back = animationIndex - rowLength;

            if (back >= 0) animationIndex = back;

            Object.assign(stateRef.current, { animationIndex: animationIndex });

            setState(function (state) {
              var _ref7;

              return __chunk_2._extends({}, state, {
                heights: (_ref7 = [].concat(__chunk_2.toConsumableArray(state.heights))).splice.apply(_ref7, [0, animationNum].concat(__chunk_2.toConsumableArray(new Array(animationNum).fill(0))))
              });
            });

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  React.useEffect(function () {
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

    __chunk_1.co(it);

    return it.return;
  }, [config]);

  React.useEffect(function () {
    if (heightRef.current === 0 && height !== 0) {
      onResize();

      heightRef.current = height;
    } else {
      onResize(true);
    }
  }, [height]);

  var classNames = React.useMemo(function () {
    return __chunk_4.classnames('dv-scroll-ranking-board', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    rows.map(function (item, i) {
      return React__default.createElement(
        'div',
        {
          className: 'row-item',
          key: item.toString() + item.scroll,
          style: { height: heights[i] + 'px' }
        },
        React__default.createElement(
          'div',
          { className: 'ranking-info' },
          React__default.createElement(
            'div',
            { className: 'rank' },
            'No.',
            item.ranking
          ),
          React__default.createElement(
            'div',
            { className: 'info-name' },
            item.name
          ),
          React__default.createElement(
            'div',
            { className: 'ranking-value' },
            item.value + mergedConfig.unit
          )
        ),
        React__default.createElement(
          'div',
          { className: 'ranking-column' },
          React__default.createElement(
            'div',
            {
              className: 'inside-column',
              style: { width: item.percent + '%' }
            },
            React__default.createElement('div', { className: 'shine' })
          )
        )
      );
    })
  );
};

ScrollRankingBoard.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object

  // 指定 props 的默认值：
};ScrollRankingBoard.defaultProps = {
  config: {}
};

module.exports = ScrollRankingBoard;
//# sourceMappingURL=index.js.map
