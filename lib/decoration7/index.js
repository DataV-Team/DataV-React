'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_4 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_5 = require('../chunk-7aa8c3ff.js');

var css = ".dv-decoration-7 {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n";
__chunk_4.styleInject(css);

var Decoration = function Decoration(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var classNames = React.useMemo(function () {
    return __chunk_5.classnames('dv-decoration-7', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style },
    React__default.createElement(
      'svg',
      { width: '21px', height: '20px' },
      React__default.createElement('polyline', {
        strokeWidth: '4',
        fill: 'transparent',
        stroke: '#1dc1f5',
        points: '10, 0 19, 10 10, 20'
      }),
      React__default.createElement('polyline', {
        strokeWidth: '2',
        fill: 'transparent',
        stroke: '#1dc1f5',
        points: '2, 0 11, 10 2, 20'
      })
    ),
    children,
    React__default.createElement(
      'svg',
      { width: '21px', height: '20px' },
      React__default.createElement('polyline', {
        strokeWidth: '4',
        fill: 'transparent',
        stroke: '#1dc1f5',
        points: '11, 0 2, 10 11, 20'
      }),
      React__default.createElement('polyline', {
        strokeWidth: '2',
        fill: 'transparent',
        stroke: '#1dc1f5',
        points: '19, 0 10, 10 19, 20'
      })
    )
  );
};

Decoration.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

module.exports = Decoration;
//# sourceMappingURL=index.js.map
