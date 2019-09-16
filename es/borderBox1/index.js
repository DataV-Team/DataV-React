import { a as styleInject } from '../chunk-80bd9449.js';
import React from 'react';
import PropTypes from 'prop-types';

var css = ".style_dv-border-box-1__VsS-M {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.style_dv-border-box-1__VsS-M .style_border__33xOM {\n  position: absolute;\n  display: block;\n}\n.style_dv-border-box-1__VsS-M .style_right-top__2fn9S {\n  right: 0px;\n  transform: rotateY(180deg);\n}\n.style_dv-border-box-1__VsS-M .style_left-bottom__1QhnE {\n  bottom: 0px;\n  transform: rotateX(180deg);\n}\n.style_dv-border-box-1__VsS-M .style_right-bottom__2yum9 {\n  right: 0px;\n  bottom: 0px;\n  transform: rotateX(180deg) rotateY(180deg);\n}\n.style_dv-border-box-1__VsS-M .style_border-box-content__z50KH {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
styleInject(css);

var border = ['left-top', 'right-top', 'left-bottom', 'right-bottom'];

var BorderBox = function BorderBox(_ref) {
  var children = _ref.children;

  return React.createElement(
    'div',
    { className: 'dv-border-box-1' },
    border.map(function (borderName) {
      return React.createElement(
        'svg',
        {
          width: '150px',
          height: '150px',
          key: borderName,
          className: borderName + ' border'
        },
        React.createElement(
          'polygon',
          {
            fill: '#4fd2dd',
            points: '6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63'
          },
          React.createElement('animate', {
            attributeName: 'fill',
            values: '#4fd2dd;#235fa7;#4fd2dd',
            dur: '0.5s',
            begin: '0s',
            repeatCount: 'indefinite'
          })
        ),
        React.createElement(
          'polygon',
          {
            fill: '#235fa7',
            points: '27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8'
          },
          React.createElement('animate', {
            attributeName: 'fill',
            values: '#235fa7;#4fd2dd;#235fa7',
            dur: '0.5s',
            begin: '0s',
            repeatCount: 'indefinite'
          })
        ),
        React.createElement(
          'polygon',
          {
            fill: '#4fd2dd',
            points: '9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54'
          },
          React.createElement('animate', {
            attributeName: 'fill',
            values: '#4fd2dd;#235fa7;transparent',
            dur: '1s',
            begin: '0s',
            repeatCount: 'indefinite'
          })
        )
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
