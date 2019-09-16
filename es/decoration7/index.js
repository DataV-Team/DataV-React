import { a as styleInject } from '../chunk-80bd9449.js';
import React from 'react';
import PropTypes from 'prop-types';

var css = ".style_dv-decoration-7__ebGDg {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n";
styleInject(css);

var Decoration = function Decoration(_ref) {
  var children = _ref.children;

  return React.createElement(
    'div',
    { className: 'dv-decoration-7' },
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
  children: PropTypes.node
};

export default Decoration;
//# sourceMappingURL=index.js.map
