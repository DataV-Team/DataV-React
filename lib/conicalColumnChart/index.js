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

var css = ".dv-conical-column-chart {\n  width: 100%;\n  height: 100%;\n}\n.dv-conical-column-chart text {\n  text-anchor: middle;\n}\n";
__chunk_3.styleInject(css);

var defaultConfig = {
  /**
   * @description Chart data
   * @type {Array<Object>}
   * @default data = []
   */
  data: [],
  /**
   * @description Chart img
   * @type {Array<String>}
   * @default img = []
   */
  img: [],
  /**
   * @description Chart font size
   * @type {Number}
   * @default fontSize = 12
   */
  fontSize: 12,
  /**
   * @description Img side length
   * @type {Number}
   * @default imgSideLength = 30
   */
  imgSideLength: 30,
  /**
   * @description Column color
   * @type {String}
   * @default columnColor = 'rgba(0, 194, 255, 0.4)'
   */
  columnColor: 'rgba(0, 194, 255, 0.4)',
  /**
   * @description Text color
   * @type {String}
   * @default textColor = '#fff'
   */
  textColor: '#fff',
  /**
   * @description Show value
   * @type {Boolean}
   * @default showValue = false
   */
  showValue: false
};

function getData(mergedConfig) {
  var data = mergedConfig.data;


  data = __chunk_5.util_1(data, true);

  data.sort(function (_ref, _ref2) {
    var a = _ref.value;
    var b = _ref2.value;

    if (a > b) return -1;
    if (a < b) return 1;
    if (a === b) return 0;
  });

  var max = data[0] ? data[0].value : 10;

  data = data.map(function (item) {
    return __chunk_2._extends({}, item, {
      percent: item.value / max
    });
  });

  return data;
}

var ConicalColumnChart = function ConicalColumnChart(_ref3) {
  var _ref3$config = _ref3.config,
      config = _ref3$config === undefined ? {} : _ref3$config,
      className = _ref3.className,
      style = _ref3.style;

  var _useAutoResize = __chunk_1.useAutoResize(calcData, calcData),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = React.useState({
    mergedConfig: null,

    column: []
  }),
      _useState2 = __chunk_2.slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      mergedConfig = _useState2$.mergedConfig,
      column = _useState2$.column,
      setState = _useState2[1];

  function calcData() {
    var mergedConfig = __chunk_5.util_2(__chunk_5.util_1(defaultConfig, true), config || {});

    mergedConfig.data = getData(mergedConfig);

    setState({ mergedConfig: mergedConfig, column: getColumn(mergedConfig) });
  }

  function getColumn(mergedConfig) {
    var imgSideLength = mergedConfig.imgSideLength,
        fontSize = mergedConfig.fontSize,
        data = mergedConfig.data;


    var itemNum = data.length;
    var gap = width / (itemNum + 1);

    var useAbleHeight = height - imgSideLength - fontSize - 5;
    var svgBottom = height - fontSize - 5;

    return data.map(function (item, i) {
      var percent = item.percent;


      var middleXPos = gap * (i + 1);
      var leftXPos = gap * i;
      var rightXpos = gap * (i + 2);

      var middleYPos = svgBottom - useAbleHeight * percent;
      var controlYPos = useAbleHeight * percent * 0.6 + middleYPos;

      var d = '\n        M' + leftXPos + ', ' + svgBottom + '\n        Q' + middleXPos + ', ' + controlYPos + ' ' + middleXPos + ',' + middleYPos + '\n        M' + middleXPos + ',' + middleYPos + '\n        Q' + middleXPos + ', ' + controlYPos + ' ' + rightXpos + ',' + svgBottom + '\n        L' + leftXPos + ', ' + svgBottom + '\n        Z\n      ';

      var textY = (svgBottom + middleYPos) / 2 + fontSize / 2;

      return __chunk_2._extends({}, item, {
        d: d,
        x: middleXPos,
        y: middleYPos,
        textY: textY
      });
    });
  }

  React.useEffect(calcData, [config]);

  var classNames = React.useMemo(function () {
    return __chunk_4.classnames('dv-conical-column-chart', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      { width: width, height: height },
      column.map(function (item, i) {
        return React__default.createElement(
          'g',
          { key: i },
          React__default.createElement('path', { d: item.d, fill: mergedConfig.columnColor }),
          React__default.createElement(
            'text',
            {
              style: { fontSize: mergedConfig.fontSize + 'px' },
              fill: mergedConfig.textColor,
              x: item.x,
              y: height - 4
            },
            item.name
          ),
          !!mergedConfig.img.length && React__default.createElement('image', {
            href: mergedConfig.img[i % mergedConfig.img.length],
            width: mergedConfig.imgSideLength,
            height: mergedConfig.imgSideLength,
            x: item.x - mergedConfig.imgSideLength / 2,
            y: item.y - mergedConfig.imgSideLength
          }),
          mergedConfig.showValue && React__default.createElement(
            'text',
            {
              style: { fontSize: mergedConfig.fontSize + 'px' },
              fill: mergedConfig.textColor,
              x: item.x,
              y: item.textY
            },
            item.value
          )
        );
      })
    )
  );
};

ConicalColumnChart.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object

  // 指定 props 的默认值：
};ConicalColumnChart.defaultProps = {
  config: {}
};

module.exports = ConicalColumnChart;
//# sourceMappingURL=index.js.map
