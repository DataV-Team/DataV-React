'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_4 = require('../chunk-7aa8c3ff.js');

var css = ".style_dv-loading__1Un5F {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.style_dv-loading__1Un5F .style_loading-tip__1AFth {\n  font-size: 15px;\n}\n";
__chunk_3.styleInject(css);

var Loading = function Loading(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var classNames = React.useMemo(function () {
    return __chunk_4.classnames('dv-loading', className);
  }, className);

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
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

module.exports = Loading;
//# sourceMappingURL=index.js.map
