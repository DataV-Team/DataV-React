'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('../chunk-23d8dc6e.js');
var React = require('react');
var React__default = _interopDefault(React);
var __chunk_5 = require('../chunk-84e855b8.js');
var __chunk_4 = require('../chunk-f7abfc0e.js');
require('../chunk-4df972f9.js');
require('../chunk-0d83f239.js');

var css = ".dv-border-box-2 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-2 .dv-border-svg-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n.dv-border-box-2 .dv-border-svg-container polyline {\n  fill: none;\n  stroke-width: 1;\n}\n.dv-border-box-2 .dv-border-svg-container circle {\n  fill: #fff;\n}\n.dv-border-box-2 .dv-bb2-line1 {\n  stroke: #fff;\n}\n.dv-border-box-2 .dv-bb2-line2 {\n  stroke: rgba(255, 255, 255, 0.6);\n}\n.dv-border-box-2 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
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
    return __chunk_5.classnames('dv-border-box-2', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      { className: 'dv-border-svg-container', width: width, height: height },
      React__default.createElement('polyline', {
        className: 'dv-bb2-line1',
        points: '2, 2 ' + (width - 2) + ' ,2 ' + (width - 2) + ', ' + (height - 2) + ' 2, ' + (height - 2) + ' 2, 2'
      }),
      React__default.createElement('polyline', {
        className: 'dv-bb2-line2',
        points: '6, 6 ' + (width - 6) + ', 6 ' + (width - 6) + ', ' + (height - 6) + ' 6, ' + (height - 6) + ' 6, 6'
      }),
      React__default.createElement('circle', { cx: '11', cy: '11', r: '1' }),
      React__default.createElement('circle', { cx: width - 11, cy: '11', r: '1' }),
      React__default.createElement('circle', { cx: width - 11, cy: height - 11, r: '1' }),
      React__default.createElement('circle', { cx: '11', cy: height - 11, r: '1' })
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
