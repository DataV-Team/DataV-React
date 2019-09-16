'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_4 = require('../chunk-7aa8c3ff.js');
var __chunk_1 = require('../chunk-eb62fe28.js');
require('../chunk-0d83f239.js');

var css = ".dv-decoration-4 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-decoration-4 .container {\n  display: flex;\n  overflow: hidden;\n  position: absolute;\n}\n.dv-decoration-4 .normal {\n  height: 0% !important;\n  animation: ani-height 3s ease-in-out infinite;\n  left: 50%;\n  margin-left: -2px;\n}\n.dv-decoration-4 .reverse {\n  width: 0% !important;\n  animation: ani-width 3s ease-in-out infinite;\n  top: 50%;\n  margin-top: -2px;\n}\n@keyframes ani-height {\n  70% {\n    height: 100%;\n  }\n  100% {\n    height: 100%;\n  }\n}\n@keyframes ani-width {\n  70% {\n    width: 100%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n";
__chunk_3.styleInject(css);

var Decoration = function Decoration(_ref) {
  var _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_1.useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var classNames = React.useMemo(function () {
    return __chunk_4.classnames('dv-decoration-4', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'div',
      {
        className: 'container ' + (reverse ? 'reverse' : 'normal'),
        style: reverse ? { width: width + 'px', height: '5px' } : { width: '5px', height: height + 'px' }
      },
      React__default.createElement(
        'svg',
        { width: reverse ? width : 5, height: reverse ? 5 : height },
        React__default.createElement('polyline', {
          stroke: 'rgba(255, 255, 255, 0.3)',
          points: reverse ? '0, 2.5 ' + width + ', 2.5' : '2.5, 0 2.5, ' + height
        }),
        React__default.createElement('polyline', {
          className: 'bold-line',
          stroke: 'rgba(255, 255, 255, 0.3)',
          strokeWidth: '3',
          strokeDasharray: '20, 80',
          strokeDashoffset: '-30',
          points: reverse ? '0, 2.5 ' + width + ', 2.5' : '2.5, 0 2.5, ' + height
        })
      )
    )
  );
};

Decoration.propTypes = {
  reverse: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object

  // 指定 props 的默认值：
};Decoration.defaultProps = {
  reverse: false
};

module.exports = Decoration;
//# sourceMappingURL=index.js.map
