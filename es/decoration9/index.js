import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useState, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { a as classnames } from '../chunk-84657507.js';
import { a as useAutoResize } from '../chunk-45917cce.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from '../chunk-0e3b7ae4.js';

var css = ".dv-decoration-9 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dv-decoration-9 svg {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  transform-origin: left top;\n}\n";
styleInject(css);

var svgWH = [100, 100];

var Decoration = function Decoration(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = useAutoResize(calcScale, calcScale),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = useState([1, 1]),
      _useState2 = slicedToArray(_useState, 2),
      svgScale = _useState2[0],
      setSvgScale = _useState2[1];

  var polygonIdRef = useRef('decoration-9-polygon-' + Date.now());

  function calcScale() {
    var w = svgWH[0],
        h = svgWH[1];


    setSvgScale([width / w, height / h]);
  }

  var classNames = useMemo(function () {
    return classnames('dv-decoration-9', className);
  }, [className]);

  return React.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React.createElement(
      'svg',
      {
        width: svgWH[0] + 'px',
        height: svgWH[1] + 'px',
        style: { transform: 'scale(' + svgScale[0] + ',' + svgScale[1] + ')' }
      },
      React.createElement(
        'defs',
        null,
        React.createElement('polygon', {
          id: polygonIdRef.current,
          points: '15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5'
        })
      ),
      React.createElement(
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
        React.createElement('animateTransform', {
          attributeName: 'transform',
          type: 'rotate',
          values: '0 50 50;360 50 50',
          dur: '3s',
          repeatCount: 'indefinite'
        })
      ),
      React.createElement(
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
        React.createElement('animateTransform', {
          attributeName: 'transform',
          type: 'rotate',
          values: '0 50 50;-360 50 50',
          dur: '3s',
          repeatCount: 'indefinite'
        })
      ),
      React.createElement('circle', {
        cx: '50',
        cy: '50',
        r: '38',
        fill: 'transparent',
        stroke: 'rgba(3, 166, 224, 0.2)',
        strokeWidth: '1',
        strokeDasharray: '5, 1'
      }),
      new Array(20).fill(0).map(function (foo, i) {
        return React.createElement(
          'use',
          {
            key: i,
            href: '#' + polygonIdRef.current,
            stroke: 'rgba(3, 166, 224, 0.6)',
            fill: Math.random() > 0.4 ? 'transparent' : 'rgba(3, 166, 224, 0.8)'
          },
          React.createElement('animateTransform', {
            attributeName: 'transform',
            type: 'rotate',
            values: '0 50 50;360 50 50',
            dur: '3s',
            begin: i * 0.15 + 's',
            repeatCount: 'indefinite'
          })
        );
      }),
      React.createElement('circle', {
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

export default Decoration;
//# sourceMappingURL=index.js.map
