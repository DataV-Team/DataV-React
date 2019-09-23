'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('../style-inject.es-df9d6d42.js');
require('../index-d2e18b0b.js');
var _babelHelpers = require('../_babelHelpers-9aeb3ceb.js');
var autoResize = require('../autoResize-5f6fa80f.js');
var index$1 = require('../index-6753d2bc.js');

var css = ".dv-border-box-8 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-8 svg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n}\n.dv-border-box-8 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
styleInject_es.styleInject(css);

var BorderBox = function BorderBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = autoResize.useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var _useState = React.useState(function () {
    var timestamp = Date.now();

    return {
      path: 'border-box-8-path-' + timestamp,
      gradient: 'border-box-8-gradient-' + timestamp,
      mask: 'border-box-8-mask-' + timestamp
    };
  }),
      _useState2 = _babelHelpers.slicedToArray(_useState, 1),
      _useState2$ = _useState2[0],
      path = _useState2$.path,
      gradient = _useState2$.gradient,
      mask = _useState2$.mask;

  var length = React.useMemo(function () {
    return (width + height - 5) * 2;
  }, [width, height]);

  var classNames = React.useMemo(function () {
    return index$1.classnames('dv-border-box-8', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React__default.createElement(
      'svg',
      { className: 'dv-svg-container', width: width, height: height },
      React__default.createElement(
        'defs',
        null,
        React__default.createElement('path', {
          id: path,
          d: 'M2.5, 2.5 L' + (width - 2.5) + ', 2.5 L' + (width - 2.5) + ', ' + (height - 2.5) + ' L2.5, ' + (height - 2.5) + ' L2.5, 2.5',
          fill: 'transparent'
        }),
        React__default.createElement(
          'radialGradient',
          { id: gradient, cx: '50%', cy: '50%', r: '50%' },
          React__default.createElement('stop', { offset: '0%', stopColor: '#fff', stopOpacity: '1' }),
          React__default.createElement('stop', { offset: '100%', stopColor: '#fff', stopOpacity: '0' })
        ),
        React__default.createElement(
          'mask',
          { id: mask },
          React__default.createElement(
            'circle',
            { cx: '0', cy: '0', r: '150', fill: 'url(#' + gradient + ')' },
            React__default.createElement('animateMotion', {
              dur: '3s',
              path: 'M2.5, 2.5 L' + (width - 2.5) + ', 2.5 L' + (width - 2.5) + ', ' + (height - 2.5) + ' L2.5, ' + (height - 2.5) + ' L2.5, 2.5',
              rotate: 'auto',
              repeatCount: 'indefinite'
            })
          )
        )
      ),
      React__default.createElement('use', { stroke: '#235fa7', strokeWidth: '1', href: '#' + path }),
      React__default.createElement(
        'use',
        {
          stroke: '#4fd2dd',
          strokeWidth: '3',
          href: '#' + path,
          mask: 'url(#' + mask + ')'
        },
        React__default.createElement('animate', {
          attributeName: 'stroke-dasharray',
          from: '0, ' + length,
          to: length + ', 0',
          dur: '3s',
          repeatCount: 'indefinite'
        })
      )
    ),
    React__default.createElement(
      'div',
      { className: 'border-box-content' },
      children
    )
  );
};

BorderBox.propTypes = {
  children: styleInject_es.PropTypes.node,
  className: styleInject_es.PropTypes.string,
  style: styleInject_es.PropTypes.object
};

module.exports = BorderBox;
//# sourceMappingURL=index.js.map
