import React, { useMemo } from 'react';
import { s as styleInject, P as PropTypes } from '../style-inject.es-4766d9ed.js';
import '../index-edb6df58.js';
import { _ as _extends } from '../_babelHelpers-8fa0f879.js';
import { u as useAutoResize } from '../autoResize-4f5dcf40.js';
import { c as classnames } from '../index-183d4825.js';
import { e as util_2, f as util_1 } from '../index-23816ac9.js';

var css = ".dv-conical-column-chart {\n  width: 100%;\n  height: 100%;\n}\n.dv-conical-column-chart text {\n  text-anchor: middle;\n}\n";
styleInject(css);

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


  data = util_1(data, true);

  data.sort(function (_ref, _ref2) {
    var a = _ref.value;
    var b = _ref2.value;

    if (a > b) return -1;
    if (a < b) return 1;
    if (a === b) return 0;
  });

  var max = data[0] ? data[0].value : 10;

  data = data.map(function (item) {
    return _extends({}, item, {
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

  var _useAutoResize = useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useMemo = useMemo(calcData, [config, width, height]),
      mergedConfig = _useMemo.mergedConfig,
      column = _useMemo.column;

  function calcData() {
    var mergedConfig = util_2(util_1(defaultConfig, true), config || {});

    mergedConfig.data = getData(mergedConfig);

    return { mergedConfig: mergedConfig, column: getColumn(mergedConfig) };
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

      return _extends({}, item, {
        d: d,
        x: middleXPos,
        y: middleYPos,
        textY: textY
      });
    });
  }

  var classNames = useMemo(function () {
    return classnames('dv-conical-column-chart', className);
  }, [className]);

  return React.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React.createElement(
      'svg',
      { width: width, height: height },
      column.map(function (item, i) {
        return React.createElement(
          'g',
          { key: i },
          React.createElement('path', { d: item.d, fill: mergedConfig.columnColor }),
          React.createElement(
            'text',
            {
              style: { fontSize: mergedConfig.fontSize + 'px' },
              fill: mergedConfig.textColor,
              x: item.x,
              y: height - 4
            },
            item.name
          ),
          !!mergedConfig.img.length && React.createElement('image', {
            href: mergedConfig.img[i % mergedConfig.img.length],
            width: mergedConfig.imgSideLength,
            height: mergedConfig.imgSideLength,
            x: item.x - mergedConfig.imgSideLength / 2,
            y: item.y - mergedConfig.imgSideLength
          }),
          mergedConfig.showValue && React.createElement(
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

export default ConicalColumnChart;
//# sourceMappingURL=index.js.map
