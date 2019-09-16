'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_4 = require('../chunk-7aa8c3ff.js');
var __chunk_5 = require('../chunk-74662e50.js');
var __chunk_2 = require('../chunk-0d83f239.js');

var defaultConfig = {
  /**
   * @description Capsule chart data
   * @type {Array<Object>}
   * @default data = []
   * @example data = [{ name: 'foo1', value: 100 }, { name: 'foo2', value: 100 }]
   */
  data: [],
  /**
   * @description Colors (hex|rgb|rgba|color keywords)
   * @type {Array<String>}
   * @default color = ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']
   * @example color = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
   */
  colors: ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293'],
  /**
   * @description Chart unit
   * @type {String}
   * @default unit = ''
   */
  unit: ''
};

var CapsuleChart = function CapsuleChart(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === undefined ? {} : _ref$config,
      className = _ref.className,
      style = _ref.style;

  var _useState = React.useState({
    mergedConfig: null,
    labelData: [],
    capsuleLength: []
  }),
      _useState2 = __chunk_2.slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      mergedConfig = _useState2$.mergedConfig,
      labelData = _useState2$.labelData,
      capsuleLength = _useState2$.capsuleLength,
      setState = _useState2[1];

  React.useEffect(function () {
    var mergedConfig = __chunk_5.util_2(__chunk_5.util_1(defaultConfig, true), config || {});

    var data = mergedConfig.data;


    if (!data.length) return;

    var capsuleValue = data.map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });

    var maxValue = Math.max.apply(Math, __chunk_2.toConsumableArray(capsuleValue));

    var oneFifth = maxValue / 5;

    setState({
      mergedConfig: mergedConfig,
      capsuleLength: capsuleValue.map(function (v) {
        return maxValue ? v / maxValue : 0;
      }),
      labelData: new Array(6).fill(0).map(function (v, i) {
        return Math.ceil(i * oneFifth);
      })
    });
  }, [config]);

  var classNames = React.useMemo(function () {
    return __chunk_4.classnames('dv-capsule-chart', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style },
    !!mergedConfig && React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement(
        'div',
        { className: 'label-column' },
        mergedConfig.data.map(function (_ref3) {
          var name = _ref3.name;
          return React__default.createElement(
            'div',
            { key: name },
            name
          );
        }),
        React__default.createElement(
          'div',
          null,
          '\xA0'
        )
      ),
      React__default.createElement(
        'div',
        { className: 'capsule-container' },
        capsuleLength.map(function (capsule, index) {
          return React__default.createElement(
            'div',
            { className: 'capsule-item', key: index },
            React__default.createElement('div', {
              style: {
                width: capsule * 100 + '%',
                backgroundColor: '' + mergedConfig.colors[index % mergedConfig.colors.length]
              }
            })
          );
        }),
        React__default.createElement(
          'div',
          { className: 'unit-label' },
          labelData.map(function (label, index) {
            return React__default.createElement(
              'div',
              { key: label + index },
              label
            );
          })
        )
      ),
      !!mergedConfig.unit && React__default.createElement(
        'div',
        { className: 'unit-text' },
        mergedConfig.unit
      )
    )
  );
};

CapsuleChart.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object

  // 指定 props 的默认值：
};CapsuleChart.defaultProps = {
  config: {}
};

module.exports = CapsuleChart;
//# sourceMappingURL=index.js.map
