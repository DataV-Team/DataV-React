import React, { useMemo } from 'react';
import { s as styleInject, P as PropTypes } from '../style-inject.es-4766d9ed.js';
import '../index-edb6df58.js';
import '../_babelHelpers-8fa0f879.js';
import { u as useAutoResize } from '../autoResize-4f5dcf40.js';
import { c as classnames } from '../index-183d4825.js';

var css = ".dv-border-box-2 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-2 .dv-border-svg-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n.dv-border-box-2 .dv-border-svg-container polyline {\n  fill: none;\n  stroke-width: 1;\n}\n.dv-border-box-2 .dv-border-svg-container circle {\n  fill: #fff;\n}\n.dv-border-box-2 .dv-bb2-line1 {\n  stroke: #fff;\n}\n.dv-border-box-2 .dv-bb2-line2 {\n  stroke: rgba(255, 255, 255, 0.6);\n}\n.dv-border-box-2 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
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
  }, [className]);

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
