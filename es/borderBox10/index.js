import { a as styleInject } from '../chunk-80bd9449.js';
import React from 'react';
import PropTypes from 'prop-types';

var css = ".style_dv-border-box-10__MbDVF {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset 0 0 25px 3px #1d48c4;\n  border-radius: 6px;\n}\n.style_dv-border-box-10__MbDVF .style_border__3s1iM {\n  position: absolute;\n  display: block;\n}\n.style_dv-border-box-10__MbDVF .style_right-top__2up64 {\n  right: 0px;\n  transform: rotateY(180deg);\n}\n.style_dv-border-box-10__MbDVF .style_left-bottom__2fEcS {\n  bottom: 0px;\n  transform: rotateX(180deg);\n}\n.style_dv-border-box-10__MbDVF .style_right-bottom__2Foph {\n  right: 0px;\n  bottom: 0px;\n  transform: rotateX(180deg) rotateY(180deg);\n}\n.style_dv-border-box-10__MbDVF .style_border-box-content__3qyuK {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
styleInject(css);

var border = ['left-top', 'right-top', 'left-bottom', 'right-bottom'];

var BorderBox = function BorderBox(_ref) {
  var children = _ref.children;
  return React.createElement(
    'div',
    { className: 'dv-border-box-10' },
    border.map(function (borderName) {
      return React.createElement(
        'svg',
        {
          width: '150px',
          height: '150px',
          key: borderName,
          className: borderName + ' border'
        },
        React.createElement('polygon', {
          fill: '#d3e1f8',
          points: '40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3'
        })
      );
    }),
    React.createElement(
      'div',
      { className: 'border-box-content' },
      children
    )
  );
};

BorderBox.propTypes = {
  children: PropTypes.node
};

export default BorderBox;
//# sourceMappingURL=index.js.map
