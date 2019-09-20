'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_4 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_5 = require('../chunk-7aa8c3ff.js');

var css = ".dv-border-box-1 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-1 .border {\n  position: absolute;\n  display: block;\n}\n.dv-border-box-1 .right-top {\n  right: 0px;\n  transform: rotateY(180deg);\n}\n.dv-border-box-1 .left-bottom {\n  bottom: 0px;\n  transform: rotateX(180deg);\n}\n.dv-border-box-1 .right-bottom {\n  right: 0px;\n  bottom: 0px;\n  transform: rotateX(180deg) rotateY(180deg);\n}\n.dv-border-box-1 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
__chunk_4.styleInject(css);

var border = ['left-top', 'right-top', 'left-bottom', 'right-bottom'];

var BorderBox = function BorderBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var classNames = React.useMemo(function () {
    return __chunk_5.classnames('dv-border-box-1', className);
  }, [className]);

  return React__default.createElement(
    'div',
    { className: classNames, style: style },
    border.map(function (borderName) {
      return React__default.createElement(
        'svg',
        {
          width: '150px',
          height: '150px',
          key: borderName,
          className: borderName + ' border'
        },
        React__default.createElement(
          'polygon',
          {
            fill: '#4fd2dd',
            points: '6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63'
          },
          React__default.createElement('animate', {
            attributeName: 'fill',
            values: '#4fd2dd;#235fa7;#4fd2dd',
            dur: '0.5s',
            begin: '0s',
            repeatCount: 'indefinite'
          })
        ),
        React__default.createElement(
          'polygon',
          {
            fill: '#235fa7',
            points: '27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8'
          },
          React__default.createElement('animate', {
            attributeName: 'fill',
            values: '#235fa7;#4fd2dd;#235fa7',
            dur: '0.5s',
            begin: '0s',
            repeatCount: 'indefinite'
          })
        ),
        React__default.createElement(
          'polygon',
          {
            fill: '#4fd2dd',
            points: '9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54'
          },
          React__default.createElement('animate', {
            attributeName: 'fill',
            values: '#4fd2dd;#235fa7;transparent',
            dur: '1s',
            begin: '0s',
            repeatCount: 'indefinite'
          })
        )
      );
    }),
    React__default.createElement(
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

module.exports = BorderBox;
//# sourceMappingURL=index.js.map
