import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { a as classnames } from '../chunk-84657507.js';
import { a as useAutoResize } from '../chunk-d3494329.js';
import '../chunk-0e3b7ae4.js';

var css = ".dv-border-box-6 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-6 .dv-svg-container {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n.dv-border-box-6 .dv-svg-container circle {\n  fill: gray;\n}\n.dv-border-box-6 .dv-svg-container polyline {\n  fill: none;\n  stroke-width: 1;\n  stroke: rgba(255, 255, 255, 0.35);\n}\n.dv-border-box-6 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n";
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
    return classnames('dv-border-box-6', className);
  }, [className]);

  return React.createElement(
    'div',
    { className: classNames, style: style, ref: domRef },
    React.createElement(
      'svg',
      { className: 'dv-svg-container', width: width, height: height },
      React.createElement('circle', { cx: '5', cy: '5', r: '2' }),
      React.createElement('circle', { cx: width - 5, cy: '5', r: '2' }),
      React.createElement('circle', { cx: width - 5, cy: height - 5, r: '2' }),
      React.createElement('circle', { cx: '5', cy: height - 5, r: '2' }),
      React.createElement('polyline', { points: '10, 4 ' + (width - 10) + ', 4' }),
      React.createElement('polyline', { points: '10, ' + (height - 4) + ' ' + (width - 10) + ', ' + (height - 4) }),
      React.createElement('polyline', { points: '5, 70 5, ' + (height - 70) }),
      React.createElement('polyline', { points: width - 5 + ', 70 ' + (width - 5) + ', ' + (height - 70) }),
      React.createElement('polyline', { points: '3, 10, 3, 50' }),
      React.createElement('polyline', { points: '7, 30 7, 80' }),
      React.createElement('polyline', { points: width - 3 + ', 10 ' + (width - 3) + ', 50' }),
      React.createElement('polyline', { points: width - 7 + ', 30 ' + (width - 7) + ', 80' }),
      React.createElement('polyline', { points: '3, ' + (height - 10) + ' 3, ' + (height - 50) }),
      React.createElement('polyline', { points: '7, ' + (height - 30) + ' 7, ' + (height - 80) }),
      React.createElement('polyline', {
        points: width - 3 + ', ' + (height - 10) + ' ' + (width - 3) + ', ' + (height - 50)
      }),
      React.createElement('polyline', {
        points: width - 7 + ', ' + (height - 30) + ' ' + (width - 7) + ', ' + (height - 80)
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
