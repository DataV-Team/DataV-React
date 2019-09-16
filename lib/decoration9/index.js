'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_4 = require('../chunk-7aa8c3ff.js');
var __chunk_1 = require('../chunk-eb62fe28.js');
var __chunk_2 = require('../chunk-0d83f239.js');

var css = ".style_dv-decoration-9__2h2sy {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.style_dv-decoration-9__2h2sy svg {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  transform-origin: left top;\n}\n";
__chunk_3.styleInject(css);

var svgWH = [100, 100];

var Decoration = function Decoration(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = __chunk_1.useAutoResize(calcScale, calcScale),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = React.useState([1, 1]),
      _useState2 = __chunk_2.slicedToArray(_useState, 2),
      svgScale = _useState2[0],
      setSvgScale = _useState2[1];

  var polygonIdRef = React.useRef('decoration-9-polygon-' + Date.now());

  function calcScale() {
    var w = svgWH[0],
        h = svgWH[1];


    setSvgScale([width / w, height / h]);
  }

  var classNames = React.useMemo(function () {
    return __chunk_4.classnames('dv-decoration-9', className);
  }, className);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      {
        width: svgWH[0] + 'px',
        height: svgWH[1] + 'px',
        style: { transform: 'scale(' + svgScale[0] + ',' + svgScale[1] + ')' }
      },
      React__default.createElement(
        'defs',
        null,
        React__default.createElement('polygon', {
          id: polygonIdRef.current,
          points: '15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5'
        })
      ),
      React__default.createElement(
        'circle',
        {
          cx: '50',
          cy: '50',
          r: '45',
          fill: 'transparent',
          stroke: 'rgba(3, 166, 224, 0.5)',
          strokeWidth: '10',
          strokeDasharray: '80, 100, 30, 100'
        },
        React__default.createElement('animateTransform', {
          attributeName: 'transform',
          type: 'rotate',
          values: '0 50 50;360 50 50',
          dur: '3s',
          repeatCount: 'indefinite'
        })
      ),
      React__default.createElement(
        'circle',
        {
          cx: '50',
          cy: '50',
          r: '45',
          fill: 'transparent',
          stroke: 'rgba(3, 166, 224, 0.8)',
          strokeWidth: '6',
          strokeDasharray: '50, 66, 100, 66'
        },
        React__default.createElement('animateTransform', {
          attributeName: 'transform',
          type: 'rotate',
          values: '0 50 50;-360 50 50',
          dur: '3s',
          repeatCount: 'indefinite'
        })
      ),
      React__default.createElement('circle', {
        cx: '50',
        cy: '50',
        r: '38',
        fill: 'transparent',
        stroke: 'rgba(3, 166, 224, 0.2)',
        strokeWidth: '1',
        strokeDasharray: '5, 1'
      }),
      new Array(20).fill(0).map(function (foo, i) {
        return React__default.createElement(
          'use',
          {
            key: i,
            href: '#' + polygonIdRef.current,
            stroke: 'rgba(3, 166, 224, 0.6)',
            fill: Math.random() > 0.4 ? 'transparent' : 'rgba(3, 166, 224, 0.8)'
          },
          React__default.createElement('animateTransform', {
            attributeName: 'transform',
            type: 'rotate',
            values: '0 50 50;360 50 50',
            dur: '3s',
            begin: i * 0.15 + 's',
            repeatCount: 'indefinite'
          })
        );
      }),
      React__default.createElement('circle', {
        cx: '50',
        cy: '50',
        r: '26',
        fill: 'transparent',
        stroke: 'rgba(3, 166, 224, 0.2)',
        strokeWidth: '1',
        strokeDasharray: '5, 1'
      })
    ),
    children
  );
};

Decoration.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

module.exports = Decoration;
//# sourceMappingURL=index.js.map
