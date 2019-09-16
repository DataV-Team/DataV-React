'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_4 = require('../chunk-7aa8c3ff.js');
var __chunk_1 = require('../chunk-eb62fe28.js');
require('../chunk-0d83f239.js');

var css = ".style_dv-border-box-2__3FzMd {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.style_dv-border-box-2__3FzMd .style_dv-border-svg-container__1628i {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n.style_dv-border-box-2__3FzMd .style_dv-border-svg-container__1628i polyline {\n  fill: none;\n  stroke-width: 1;\n}\n.style_dv-border-box-2__3FzMd .style_dv-border-svg-container__1628i circle {\n  fill: #fff;\n}\n.style_dv-border-box-2__3FzMd .style_dv-bb2-line1__3ZsBN {\n  stroke: #fff;\n}\n.style_dv-border-box-2__3FzMd .style_dv-bb2-line2__gXkBv {\n  stroke: rgba(255, 255, 255, 0.6);\n}\n.style_dv-border-box-2__3FzMd .style_border-box-content__15l8N {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
__chunk_3.styleInject(css);

var BorderBox = function BorderBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_1.useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var classNames = React.useMemo(function () {
    return __chunk_4.classnames('dv-border-box-2', className);
  }, className);

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
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

module.exports = BorderBox;
//# sourceMappingURL=index.js.map
