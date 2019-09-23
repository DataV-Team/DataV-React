'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('../style-inject.es-df9d6d42.js');
var _babelHelpers = require('../_babelHelpers-9aeb3ceb.js');
var index$1 = require('../index-6753d2bc.js');
var index$2 = require('../index-18149766.js');

var css = ".dv-capsule-chart {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  padding: 10px;\n  color: #fff;\n}\n.dv-capsule-chart .label-column {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding-right: 10px;\n  text-align: right;\n  font-size: 12px;\n}\n.dv-capsule-chart .label-column div {\n  height: 20px;\n  line-height: 20px;\n}\n.dv-capsule-chart .capsule-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.dv-capsule-chart .capsule-item {\n  box-shadow: 0 0 3px #999;\n  height: 10px;\n  margin: 5px 0px;\n  border-radius: 5px;\n}\n.dv-capsule-chart .capsule-item div {\n  height: 8px;\n  margin-top: 1px;\n  border-radius: 5px;\n  transition: all 0.3s;\n}\n.dv-capsule-chart .unit-label {\n  height: 20px;\n  font-size: 12px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.dv-capsule-chart .unit-text {\n  text-align: right;\n  display: flex;\n  align-items: flex-end;\n  font-size: 12px;\n  line-height: 20px;\n  margin-left: 10px;\n}\n";
styleInject_es.styleInject(css);

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
      _useState2 = _babelHelpers.slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      mergedConfig = _useState2$.mergedConfig,
      labelData = _useState2$.labelData,
      capsuleLength = _useState2$.capsuleLength,
      setState = _useState2[1];

  React.useEffect(function () {
    var mergedConfig = index$2.util_2(index$2.util_1(defaultConfig, true), config || {});

    var data = mergedConfig.data;


    if (!data.length) return;

    var capsuleValue = data.map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });

    var maxValue = Math.max.apply(Math, _babelHelpers.toConsumableArray(capsuleValue));

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
    return index$1.classnames('dv-capsule-chart', className);
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
  config: styleInject_es.PropTypes.object,
  className: styleInject_es.PropTypes.string,
  style: styleInject_es.PropTypes.object

  // 指定 props 的默认值：
};CapsuleChart.defaultProps = {
  config: {}
};

module.exports = CapsuleChart;
//# sourceMappingURL=index.js.map
