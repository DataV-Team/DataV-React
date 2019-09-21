'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('../chunk-23d8dc6e.js');
var React = require('react');
var React__default = _interopDefault(React);
var __chunk_5 = require('../chunk-84e855b8.js');
var __chunk_4 = require('../chunk-f7abfc0e.js');
require('../chunk-4df972f9.js');
require('../chunk-0d83f239.js');

var css = ".dv-border-box-7 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset 0 0 40px rgba(128, 128, 128, 0.3);\n  border: 1px solid rgba(128, 128, 128, 0.3);\n}\n.dv-border-box-7 .dv-svg-container {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-7 .dv-svg-container polyline {\n  fill: none;\n  stroke-linecap: round;\n}\n.dv-border-box-7 .dv-bb7-line-width-2 {\n  stroke: rgba(128, 128, 128, 0.3);\n  stroke-width: 2;\n}\n.dv-border-box-7 .dv-bb7-line-width-5 {\n  stroke: rgba(128, 128, 128, 0.5);\n  stroke-width: 5;\n}\n.dv-border-box-7 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
__chunk_1.styleInject(css);

var BorderBox = function BorderBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_4.useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var classNames = React.useMemo(function () {
    return __chunk_5.classnames('dv-border-box-7', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      { className: 'dv-svg-container', width: width, height: height },
      React__default.createElement('polyline', { className: 'dv-bb7-line-width-2', points: '0, 25 0, 0 25, 0' }),
      React__default.createElement('polyline', {
        className: 'dv-bb7-line-width-2',
        points: width - 25 + ', 0 ' + width + ', 0 ' + width + ', 25'
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb7-line-width-2',
        points: width - 25 + ', ' + height + ' ' + width + ', ' + height + ' ' + width + ', ' + (height - 25)
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb7-line-width-2',
        points: '0, ' + (height - 25) + ' 0, ' + height + ' 25, ' + height
      }),
      React__default.createElement('polyline', { className: 'dv-bb7-line-width-5', points: '0, 10 0, 0 10, 0' }),
      React__default.createElement('polyline', {
        className: 'dv-bb7-line-width-5',
        points: width - 10 + ', 0 ' + width + ', 0 ' + width + ', 10'
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb7-line-width-5',
        points: width - 10 + ', ' + height + ' ' + width + ', ' + height + ' ' + width + ', ' + (height - 10)
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb7-line-width-5',
        points: '0, ' + (height - 10) + ' 0, ' + height + ' 10, ' + height
      })
    ),
    React__default.createElement(
      'div',
      { className: 'border-box-content' },
      children
    )
  );
};

BorderBox.propTypes = {
  children: __chunk_1.PropTypes.node,
  className: __chunk_1.PropTypes.string,
  style: __chunk_1.PropTypes.object
};

module.exports = BorderBox;
//# sourceMappingURL=index.js.map
