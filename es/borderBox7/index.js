import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { a as classnames } from '../chunk-84657507.js';
import { a as useAutoResize } from '../chunk-45917cce.js';
import '../chunk-0e3b7ae4.js';

var css = ".style_dv-border-box-7__35ihC {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset 0 0 40px rgba(128, 128, 128, 0.3);\n  border: 1px solid rgba(128, 128, 128, 0.3);\n}\n.style_dv-border-box-7__35ihC .style_dv-svg-container__2WwLM {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n.style_dv-border-box-7__35ihC .style_dv-svg-container__2WwLM polyline {\n  fill: none;\n  stroke-linecap: round;\n}\n.style_dv-border-box-7__35ihC .style_dv-bb7-line-width-2__3fX5i {\n  stroke: rgba(128, 128, 128, 0.3);\n  stroke-width: 2;\n}\n.style_dv-border-box-7__35ihC .style_dv-bb7-line-width-5__1c2RL {\n  stroke: rgba(128, 128, 128, 0.5);\n  stroke-width: 5;\n}\n.style_dv-border-box-7__35ihC .style_border-box-content__JLZS8 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
styleInject(css);

var BorderBox = function BorderBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;

  var _useAutoResize = useAutoResize(),
      width = _useAutoResize.width,
      height = _useAutoResize.height,
      domRef = _useAutoResize.domRef;

  var classNames = useMemo(function () {
    return classnames('dv-border-box-7', className);
  }, className);

  return React.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React.createElement(
      'svg',
      { className: 'dv-svg-container', width: width, height: height },
      React.createElement('polyline', { className: 'dv-bb7-line-width-2', points: '0, 25 0, 0 25, 0' }),
      React.createElement('polyline', {
        className: 'dv-bb7-line-width-2',
        points: width - 25 + ', 0 ' + width + ', 0 ' + width + ', 25'
      }),
      React.createElement('polyline', {
        className: 'dv-bb7-line-width-2',
        points: width - 25 + ', ' + height + ' ' + width + ', ' + height + ' ' + width + ', ' + (height - 25)
      }),
      React.createElement('polyline', {
        className: 'dv-bb7-line-width-2',
        points: '0, ' + (height - 25) + ' 0, ' + height + ' 25, ' + height
      }),
      React.createElement('polyline', { className: 'dv-bb7-line-width-5', points: '0, 10 0, 0 10, 0' }),
      React.createElement('polyline', {
        className: 'dv-bb7-line-width-5',
        points: width - 10 + ', 0 ' + width + ', 0 ' + width + ', 10'
      }),
      React.createElement('polyline', {
        className: 'dv-bb7-line-width-5',
        points: width - 10 + ', ' + height + ' ' + width + ', ' + height + ' ' + width + ', ' + (height - 10)
      }),
      React.createElement('polyline', {
        className: 'dv-bb7-line-width-5',
        points: '0, ' + (height - 10) + ' 0, ' + height + ' 10, ' + height
      })
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
