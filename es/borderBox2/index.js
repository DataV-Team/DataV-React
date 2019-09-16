import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { a as classnames } from '../chunk-84657507.js';
import { a as useAutoResize } from '../chunk-45917cce.js';
import '../chunk-0e3b7ae4.js';

var css = ".style_dv-border-box-2__3FzMd {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.style_dv-border-box-2__3FzMd .style_dv-border-svg-container__1628i {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n.style_dv-border-box-2__3FzMd .style_dv-border-svg-container__1628i polyline {\n  fill: none;\n  stroke-width: 1;\n}\n.style_dv-border-box-2__3FzMd .style_dv-border-svg-container__1628i circle {\n  fill: #fff;\n}\n.style_dv-border-box-2__3FzMd .style_dv-bb2-line1__3ZsBN {\n  stroke: #fff;\n}\n.style_dv-border-box-2__3FzMd .style_dv-bb2-line2__gXkBv {\n  stroke: rgba(255, 255, 255, 0.6);\n}\n.style_dv-border-box-2__3FzMd .style_border-box-content__15l8N {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
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
    return classnames('dv-border-box-2', className);
  }, className);

  return React.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React.createElement(
      'svg',
      { className: 'dv-border-svg-container', width: width, height: height },
      React.createElement('polyline', {
        className: 'dv-bb2-line1',
        points: '2, 2 ' + (width - 2) + ' ,2 ' + (width - 2) + ', ' + (height - 2) + ' 2, ' + (height - 2) + ' 2, 2'
      }),
      React.createElement('polyline', {
        className: 'dv-bb2-line2',
        points: '6, 6 ' + (width - 6) + ', 6 ' + (width - 6) + ', ' + (height - 6) + ' 6, ' + (height - 6) + ' 6, 6'
      }),
      React.createElement('circle', { cx: '11', cy: '11', r: '1' }),
      React.createElement('circle', { cx: width - 11, cy: '11', r: '1' }),
      React.createElement('circle', { cx: width - 11, cy: height - 11, r: '1' }),
      React.createElement('circle', { cx: '11', cy: height - 11, r: '1' })
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
