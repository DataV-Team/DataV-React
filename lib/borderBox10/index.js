'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('../style-inject.es-df9d6d42.js');
var index$1 = require('../index-6753d2bc.js');

var css = ".dv-border-box-10 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset 0 0 25px 3px #1d48c4;\n  border-radius: 6px;\n}\n.dv-border-box-10 .border {\n  position: absolute;\n  display: block;\n}\n.dv-border-box-10 .right-top {\n  right: 0px;\n  transform: rotateY(180deg);\n}\n.dv-border-box-10 .left-bottom {\n  bottom: 0px;\n  transform: rotateX(180deg);\n}\n.dv-border-box-10 .right-bottom {\n  right: 0px;\n  bottom: 0px;\n  transform: rotateX(180deg) rotateY(180deg);\n}\n.dv-border-box-10 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
styleInject_es.styleInject(css);

var border = ['left-top', 'right-top', 'left-bottom', 'right-bottom'];

var BorderBox = function BorderBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var classNames = React.useMemo(function () {
    return index$1.classnames('dv-border-box-10', className);
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
        React__default.createElement('polygon', {
          fill: '#d3e1f8',
          points: '40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3'
        })
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
  children: styleInject_es.PropTypes.node,
  className: styleInject_es.PropTypes.string,
  style: styleInject_es.PropTypes.object
};

module.exports = BorderBox;
//# sourceMappingURL=index.js.map
