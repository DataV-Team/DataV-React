'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_4 = require('../chunk-7aa8c3ff.js');
var __chunk_1 = require('../chunk-eb62fe28.js');
require('../chunk-0d83f239.js');

var css = ".style_dv-decoration-10__KWIf9 {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n";
__chunk_3.styleInject(css);

var Decoration = function Decoration(_ref) {
  var className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_1.useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useRef = React.useRef({
    animationId1: 'd10ani1' + Date.now(),
    animationId2: 'd10ani2' + Date.now(),
    animationId3: 'd10ani3' + Date.now(),
    animationId4: 'd10ani4' + Date.now(),
    animationId5: 'd10ani5' + Date.now(),
    animationId6: 'd10ani6' + Date.now(),
    animationId7: 'd10ani7' + Date.now()
  }),
      _useRef$current = _useRef.current,
      animationId1 = _useRef$current.animationId1,
      animationId2 = _useRef$current.animationId2,
      animationId3 = _useRef$current.animationId3,
      animationId4 = _useRef$current.animationId4,
      animationId5 = _useRef$current.animationId5,
      animationId6 = _useRef$current.animationId6,
      animationId7 = _useRef$current.animationId7;

  var classNames = React.useMemo(function () {
    return __chunk_4.classnames('dv-decoration-10', className);
  }, className);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      { width: width, height: height },
      React__default.createElement('polyline', {
        stroke: 'rgba(0, 194, 255, 0.3)',
        strokeWidth: '2',
        points: '0, ' + height / 2 + ' ' + width + ', ' + height / 2
      }),
      React__default.createElement(
        'polyline',
        {
          stroke: 'rgba(0, 194, 255, 1)',
          strokeWidth: '2',
          points: '5, ' + height / 2 + ' ' + (width * 0.2 - 3) + ', ' + height / 2,
          strokeDasharray: '0, ' + width * 0.2,
          fill: 'freeze'
        },
        React__default.createElement('animate', {
          id: animationId2,
          attributeName: 'stroke-dasharray',
          values: '0, ' + width * 0.2 + ';' + width * 0.2 + ', 0;',
          dur: '3s',
          begin: animationId1 + '.end',
          fill: 'freeze'
        }),
        React__default.createElement('animate', {
          attributeName: 'stroke-dasharray',
          values: width * 0.2 + ', 0;0, ' + width * 0.2,
          dur: '0.01s',
          begin: animationId7 + '.end',
          fill: 'freeze'
        })
      ),
      React__default.createElement(
        'polyline',
        {
          stroke: 'rgba(0, 194, 255, 1)',
          strokeWidth: '2',
          points: width * 0.2 + 3 + ', ' + height / 2 + ' ' + (width * 0.8 - 3) + ', ' + height / 2,
          strokeDasharray: '0, ' + width * 0.6
        },
        React__default.createElement('animate', {
          id: animationId4,
          attributeName: 'stroke-dasharray',
          values: '0, ' + width * 0.6 + ';' + width * 0.6 + ', 0',
          dur: '3s',
          begin: animationId3 + '.end + 1s',
          fill: 'freeze'
        }),
        React__default.createElement('animate', {
          attributeName: 'stroke-dasharray',
          values: width * 0.6 + ', 0;0, ' + width * 0.6,
          dur: '0.01s',
          begin: animationId7 + '.end',
          fill: 'freeze'
        })
      ),
      React__default.createElement(
        'polyline',
        {
          stroke: 'rgba(0, 194, 255, 1)',
          strokeWidth: '2',
          points: width * 0.8 + 3 + ', ' + height / 2 + ' ' + (width - 5) + ', ' + height / 2,
          'strke-dasharray': '0, ' + width * 0.2
        },
        React__default.createElement('animate', {
          id: animationId6,
          attributeName: 'stroke-dasharray',
          values: '0, ' + width * 0.2 + ';' + width * 0.2 + ', 0',
          dur: '3s',
          begin: animationId5 + '.end + 1s',
          fill: 'freeze'
        }),
        React__default.createElement('animate', {
          attributeName: 'stroke-dasharray',
          values: width * 0.2 + ', 0;0, ' + width * 0.3,
          dur: '0.01s',
          begin: animationId7 + '.end',
          fill: 'freeze'
        })
      ),
      React__default.createElement(
        'circle',
        { cx: '2', cy: height / 2, r: '2', fill: '#03709f' },
        React__default.createElement('animate', {
          id: animationId1,
          attributeName: 'fill',
          values: '#03709f;#00c2ff',
          begin: '0s;' + animationId7 + '.end',
          dur: '0.3s',
          fill: 'freeze'
        })
      ),
      React__default.createElement(
        'circle',
        { cx: width * 0.2, cy: height / 2, r: '2', fill: '#03709f' },
        React__default.createElement('animate', {
          id: animationId3,
          attributeName: 'fill',
          values: '#03709f;#00c2ff',
          begin: animationId2 + '.end',
          dur: '0.3s',
          fill: 'freeze'
        }),
        React__default.createElement('animate', {
          attributeName: 'fill',
          values: '#03709f;#03709f',
          dur: '0.01s',
          begin: animationId7 + '.end',
          fill: 'freeze'
        })
      ),
      React__default.createElement(
        'circle',
        { cx: width * 0.8, cy: height / 2, r: '2', fill: '#03709f' },
        React__default.createElement('animate', {
          id: animationId5,
          attributeName: 'fill',
          values: '#03709f;#00c2ff',
          begin: animationId4 + '.end',
          dur: '0.3s',
          fill: 'freeze'
        }),
        React__default.createElement('animate', {
          attributeName: 'fill',
          values: '#03709f;#03709f',
          dur: '0.01s',
          begin: animationId7 + '.end',
          fill: 'freeze'
        })
      ),
      React__default.createElement(
        'circle',
        { cx: width - 2, cy: height / 2, r: '2', fill: '#03709f' },
        React__default.createElement('animate', {
          id: animationId7,
          attributeName: 'fill',
          values: '#03709f;#00c2ff',
          begin: animationId6 + '.end',
          dur: '0.3s',
          fill: 'freeze'
        }),
        React__default.createElement('animate', {
          attributeName: 'fill',
          values: '#03709f;#03709f',
          dur: '0.01s',
          begin: animationId7 + '.end',
          fill: 'freeze'
        })
      )
    )
  );
};

Decoration.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

module.exports = Decoration;
//# sourceMappingURL=index.js.map
