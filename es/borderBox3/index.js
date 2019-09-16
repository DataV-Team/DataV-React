import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { a as classnames } from '../chunk-84657507.js';
import { a as useAutoResize } from '../chunk-45917cce.js';
import '../chunk-0e3b7ae4.js';

var css = ".style_dv-border-box-3__2cbFa {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.style_dv-border-box-3__2cbFa .style_dv-border-svg-container__3PAzM {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n.style_dv-border-box-3__2cbFa .style_dv-border-svg-container__3PAzM polyline {\n  fill: none;\n  stroke: #2862b7;\n}\n.style_dv-border-box-3__2cbFa .style_dv-bb3-line1__2VMLv {\n  stroke-width: 3;\n}\n.style_dv-border-box-3__2cbFa .style_dv-bb3-line2__474N_ {\n  stroke-width: 1;\n}\n.style_dv-border-box-3__2cbFa .style_border-box-content__2fpRt {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
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
    return classnames('dv-border-box-3', className);
  }, className);

  return React.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React.createElement(
      'svg',
      { className: 'dv-border-svg-container', width: width, height: height },
      React.createElement('polyline', {
        className: 'dv-bb3-line1',
        points: '4, 4 ' + (width - 22) + ' ,4 ' + (width - 22) + ', ' + (height - 22) + ' 4, ' + (height - 22) + ' 4, 4'
      }),
      React.createElement('polyline', {
        className: 'dv-bb3-line2',
        points: '10, 10 ' + (width - 16) + ', 10 ' + (width - 16) + ', ' + (height - 16) + ' 10, ' + (height - 16) + ' 10, 10'
      }),
      React.createElement('polyline', {
        className: 'dv-bb3-line2',
        points: '16, 16 ' + (width - 10) + ', 16 ' + (width - 10) + ', ' + (height - 10) + ' 16, ' + (height - 10) + ' 16, 16'
      }),
      React.createElement('polyline', {
        className: 'dv-bb3-line2',
        points: '22, 22 ' + (width - 4) + ', 22 ' + (width - 4) + ', ' + (height - 4) + ' 22, ' + (height - 4) + ' 22, 22'
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
