import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { a as classnames } from '../chunk-84657507.js';
import { a as useAutoResize } from '../chunk-45917cce.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from '../chunk-0e3b7ae4.js';

var css = ".style_dv-border-box-8__1JEs_ {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.style_dv-border-box-8__1JEs_ svg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n}\n.style_dv-border-box-8__1JEs_ .style_border-box-content__1DpFD {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
styleInject(css);

var BorderBox = function BorderBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = useState(function () {
    var timestamp = Date.now();

    return {
      path: 'border-box-8-path-' + timestamp,
      gradient: 'border-box-8-gradient-' + timestamp,
      mask: 'border-box-8-mask-' + timestamp
    };
  }),
      _useState2 = slicedToArray(_useState, 1),
      _useState2$ = _useState2[0],
      path = _useState2$.path,
      gradient = _useState2$.gradient,
      mask = _useState2$.mask;

  var length = useMemo(function () {
    return (width + height - 5) * 2;
  }, [width, height]);

  var classNames = useMemo(function () {
    return classnames('dv-border-box-8', className);
  }, className);

  return React.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React.createElement(
      'svg',
      { className: 'dv-svg-container', width: width, height: height },
      React.createElement(
        'defs',
        null,
        React.createElement('path', {
          id: path,
          d: 'M2.5, 2.5 L' + (width - 2.5) + ', 2.5 L' + (width - 2.5) + ', ' + (height - 2.5) + ' L2.5, ' + (height - 2.5) + ' L2.5, 2.5',
          fill: 'transparent'
        }),
        React.createElement(
          'radialGradient',
          { id: gradient, cx: '50%', cy: '50%', r: '50%' },
          React.createElement('stop', { offset: '0%', stopColor: '#fff', stopOpacity: '1' }),
          React.createElement('stop', { offset: '100%', stopColor: '#fff', stopOpacity: '0' })
        ),
        React.createElement(
          'mask',
          { id: mask },
          React.createElement(
            'circle',
            { cx: '0', cy: '0', r: '150', fill: 'url(#' + gradient + ')' },
            React.createElement('animateMotion', {
              dur: '3s',
              path: 'M2.5, 2.5 L' + (width - 2.5) + ', 2.5 L' + (width - 2.5) + ', ' + (height - 2.5) + ' L2.5, ' + (height - 2.5) + ' L2.5, 2.5',
              rotate: 'auto',
              repeatCount: 'indefinite'
            })
          )
        )
      ),
      React.createElement('use', { stroke: '#235fa7', strokeWidth: '1', href: '#' + path }),
      React.createElement(
        'use',
        {
          stroke: '#4fd2dd',
          strokeWidth: '3',
          href: '#' + path,
          mask: 'url(#' + mask + ')'
        },
        React.createElement('animate', {
          attributeName: 'stroke-dasharray',
          from: '0, ' + length,
          to: length + ', 0',
          dur: '3s',
          repeatCount: 'indefinite'
        })
      )
    ),
    React.createElement(
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

export default BorderBox;
//# sourceMappingURL=index.js.map
