import { a as styleInject, b as PropTypes } from '../chunk-0e6a3972.js';
import React, { useMemo } from 'react';
import { a as classnames } from '../chunk-d9c8014f.js';

var css = ".dv-decoration-7 {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n";
styleInject(css);

var Decoration = function Decoration(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var classNames = useMemo(function () {
    return classnames('dv-decoration-7', className);
  }, [className]);

  return React.createElement(
    'div',
    { className: classNames, style: style },
    React.createElement(
      'svg',
      { width: '21px', height: '20px' },
      React.createElement('polyline', {
        strokeWidth: '4',
        fill: 'transparent',
        stroke: '#1dc1f5',
        points: '10, 0 19, 10 10, 20'
      }),
      React.createElement('polyline', {
        strokeWidth: '2',
        fill: 'transparent',
        stroke: '#1dc1f5',
        points: '2, 0 11, 10 2, 20'
      })
    ),
    children,
    React.createElement(
      'svg',
      { width: '21px', height: '20px' },
      React.createElement('polyline', {
        strokeWidth: '4',
        fill: 'transparent',
        stroke: '#1dc1f5',
        points: '11, 0 2, 10 11, 20'
      }),
      React.createElement('polyline', {
        strokeWidth: '2',
        fill: 'transparent',
        stroke: '#1dc1f5',
        points: '19, 0 10, 10 19, 20'
      })
    )
  );
};

Decoration.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Decoration;
//# sourceMappingURL=index.js.map
