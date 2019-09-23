'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('../style-inject.es-df9d6d42.js');
var index = require('../index-6753d2bc.js');

var css = ".dv-loading {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.dv-loading .loading-tip {\n  font-size: 15px;\n}\n";
styleInject_es.styleInject(css);

var Loading = function Loading(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var classNames = React.useMemo(function () {
    return index.classnames('dv-loading', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style },
    React__default.createElement(
      'svg',
      { width: '50px', height: '50px' },
      React__default.createElement(
        'circle',
        {
          cx: '25',
          cy: '25',
          r: '20',
          fill: 'transparent',
          strokeWidth: '3',
          strokeDasharray: '31.415, 31.415',
          stroke: '#02bcfe',
          strokeLinecap: 'round'
        },
        React__default.createElement('animateTransform', {
          attributeName: 'transform',
          type: 'rotate',
          values: '0, 25 25;360, 25 25',
          dur: '1.5s',
          repeatCount: 'indefinite'
        }),
        React__default.createElement('animate', {
          attributeName: 'stroke',
          values: '#02bcfe;#3be6cb;#02bcfe',
          dur: '3s',
          repeatCount: 'indefinite'
        })
      ),
      React__default.createElement(
        'circle',
        {
          cx: '25',
          cy: '25',
          r: '10',
          fill: 'transparent',
          strokeWidth: '3',
          strokeDasharray: '15.7, 15.7',
          stroke: '#3be6cb',
          strokeLinecap: 'round'
        },
        React__default.createElement('animateTransform', {
          attributeName: 'transform',
          type: 'rotate',
          values: '360, 25 25;0, 25 25',
          dur: '1.5s',
          repeatCount: 'indefinite'
        }),
        React__default.createElement('animate', {
          attributeName: 'stroke',
          values: '#3be6cb;#02bcfe;#3be6cb',
          dur: '3s',
          repeatCount: 'indefinite'
        })
      )
    ),
    React__default.createElement(
      'div',
      { className: 'loading-tip' },
      children
    )
  );
};

Loading.propTypes = {
  children: styleInject_es.PropTypes.node,
  className: styleInject_es.PropTypes.string,
  style: styleInject_es.PropTypes.object
};

module.exports = Loading;
//# sourceMappingURL=index.js.map
