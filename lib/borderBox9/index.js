'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_1 = require('../chunk-eb62fe28.js');
var __chunk_2 = require('../chunk-0d83f239.js');

var css = ".style_dv-border-box-9__1CLZw {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.style_dv-border-box-9__1CLZw svg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n}\n.style_dv-border-box-9__1CLZw .style_border-box-content__2rrpN {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
__chunk_3.styleInject(css);

var BorderBox = function BorderBox(_ref) {
  var children = _ref.children;

  var _useAutoResize = __chunk_1.useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = React.useState(function () {
    var timestamp = Date.now();

    return {
      gradientId: 'border-box-9-gradient-' + timestamp,
      maskId: 'border-box-9-mask-' + timestamp
    };
  }),
      _useState2 = __chunk_2.slicedToArray(_useState, 1),
      _useState2$ = _useState2[0],
      gradientId = _useState2$.gradientId,
      maskId = _useState2$.maskId;

  return React__default.createElement(
    'div',
    { className: 'dv-border-box-9', ref: domRef },
    React__default.createElement(
      'svg',
      { className: 'dv-svg-container', width: width, height: height },
      React__default.createElement(
        'defs',
        null,
        React__default.createElement(
          'linearGradient',
          { id: gradientId, x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
          React__default.createElement('stop', { offset: '0%', stopColor: '#11eefd' }),
          React__default.createElement('stop', { offset: '100%', stopColor: '#0078d2' })
        ),
        React__default.createElement(
          'mask',
          { id: maskId },
          React__default.createElement('polyline', {
            stroke: '#fff',
            strokeWidth: '3',
            fill: 'transparent',
            points: '8, ' + height * 0.4 + ' 8, 3, ' + (width * 0.4 + 7) + ', 3'
          }),
          React__default.createElement('polyline', {
            fill: '#fff',
            points: '8, ' + height * 0.15 + ' 8, 3, ' + (width * 0.1 + 7) + ', 3\n                ' + width * 0.1 + ', 8 14, 8 14, ' + (height * 0.15 - 7) + '\n              '
          }),
          React__default.createElement('polyline', {
            stroke: '#fff',
            strokeWidth: '3',
            fill: 'transparent',
            points: width * 0.5 + ', 3 ' + (width - 3) + ', 3, ' + (width - 3) + ', ' + height * 0.25
          }),
          React__default.createElement('polyline', {
            fill: '#fff',
            points: '\n                ' + width * 0.52 + ', 3 ' + width * 0.58 + ', 3\n                ' + (width * 0.58 - 7) + ', 9 ' + (width * 0.52 + 7) + ', 9\n              '
          }),
          React__default.createElement('polyline', {
            fill: '#fff',
            points: '\n                ' + width * 0.9 + ', 3 ' + (width - 3) + ', 3 ' + (width - 3) + ', ' + height * 0.1 + '\n                ' + (width - 9) + ', ' + (height * 0.1 - 7) + ' ' + (width - 9) + ', 9 ' + (width * 0.9 + 7) + ', 9\n              '
          }),
          React__default.createElement('polyline', {
            stroke: '#fff',
            strokeWidth: '3',
            fill: 'transparent',
            points: '8, ' + height * 0.5 + ' 8, ' + (height - 3) + ' ' + (width * 0.3 + 7) + ', ' + (height - 3)
          }),
          React__default.createElement('polyline', {
            fill: '#fff',
            points: '\n                8, ' + height * 0.55 + ' 8, ' + height * 0.7 + '\n                2, ' + (height * 0.7 - 7) + ' 2, ' + (height * 0.55 + 7) + '\n              '
          }),
          React__default.createElement('polyline', {
            stroke: '#fff',
            strokeWidth: '3',
            fill: 'transparent',
            points: width * 0.35 + ', ' + (height - 3) + ' ' + (width - 3) + ', ' + (height - 3) + ' ' + (width - 3) + ', ' + height * 0.35
          }),
          React__default.createElement('polyline', {
            fill: '#fff',
            points: '\n                ' + width * 0.92 + ', ' + (height - 3) + ' ' + (width - 3) + ', ' + (height - 3) + ' ' + (width - 3) + ', ' + height * 0.8 + '\n                ' + (width - 9) + ', ' + (height * 0.8 + 7) + ' ' + (width - 9) + ', ' + (height - 9) + ' ' + (width * 0.92 + 7) + ', ' + (height - 9) + '\n              '
          })
        )
      ),
      React__default.createElement('rect', {
        x: '0',
        y: '0',
        width: width,
        height: height,
        fill: 'url(#' + gradientId + ')',
        mask: 'url(#' + maskId + ')'
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
  children: PropTypes.node
};

module.exports = BorderBox;
//# sourceMappingURL=index.js.map
