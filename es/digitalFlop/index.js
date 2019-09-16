import { a as styleInject } from '../chunk-80bd9449.js';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { f as CRender } from '../chunk-0180a416.js';
import '../chunk-835a1fab.js';
import { j as util_2, k as util_1 } from '../chunk-5dad6e83.js';
import { a as asyncToGenerator, b as slicedToArray, c as toConsumableArray, d as _extends } from '../chunk-0e3b7ae4.js';

var css = ".style_dv-digital-flop__3tU40 canvas {\n  width: 100%;\n  height: 100%;\n}\n";
styleInject(css);

var defaultConfig = {
  /**
   * @description Number for digital flop
   * @type {Array<Number>}
   * @default number = []
   * @example number = [10]
   */
  number: [],
  /**
   * @description Content formatter
   * @type {String}
   * @default content = ''
   * @example content = '{nt}个'
   */
  content: '',
  /**
   * @description Number toFixed
   * @type {Number}
   * @default toFixed = 0
   */
  toFixed: 0,
  /**
   * @description Text align
   * @type {String}
   * @default textAlign = 'center'
   * @example textAlign = 'center' | 'left' | 'right'
   */
  textAlign: 'center',
  /**
   * @description Text style configuration
   * @type {Object} {CRender Class Style}
   */
  style: {
    fontSize: 30,
    fill: '#3de7c9'
  },
  /**
   * @description CRender animationCurve
   * @type {String}
   * @default animationCurve = 'easeOutCubic'
   */
  animationCurve: 'easeOutCubic',
  /**
   * @description CRender animationFrame
   * @type {String}
   * @default animationFrame = 50
   */
  animationFrame: 50
};

var DigitalFlop = function DigitalFlop(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === undefined ? {} : _ref$config;

  var domRef = useRef(null);
  var rendererRef = useRef(null);
  var graphRef = useRef(null);

  var mergedConfigRef = useRef(null);

  var mountedRef = useRef(true);

  function init() {
    rendererRef.current = new CRender(domRef.current);

    mergedConfigRef.current = getMergedConfig();

    graphRef.current = getGraph();
  }

  var getMergedConfig = function getMergedConfig() {
    return util_2(util_1(defaultConfig, true), config || {});
  };

  function getGraph() {
    var _mergedConfigRef$curr = mergedConfigRef.current,
        animationCurve = _mergedConfigRef$curr.animationCurve,
        animationFrame = _mergedConfigRef$curr.animationFrame;


    return rendererRef.current.add({
      name: 'numberText',
      animationCurve: animationCurve,
      animationFrame: animationFrame,
      shape: getShape(),
      style: getStyle()
    });
  }

  function getShape() {
    var _mergedConfigRef$curr2 = mergedConfigRef.current,
        number = _mergedConfigRef$curr2.number,
        content = _mergedConfigRef$curr2.content,
        toFixed = _mergedConfigRef$curr2.toFixed,
        textAlign = _mergedConfigRef$curr2.textAlign;

    var _rendererRef$current$ = slicedToArray(rendererRef.current.area, 2),
        w = _rendererRef$current$[0],
        h = _rendererRef$current$[1];

    var position = [w / 2, h / 2];

    if (textAlign === 'left') position[0] = 0;
    if (textAlign === 'right') position[0] = w;

    return { number: number, content: content, toFixed: toFixed, position: position };
  }

  function getStyle() {
    var _mergedConfigRef$curr3 = mergedConfigRef.current,
        style = _mergedConfigRef$curr3.style,
        textAlign = _mergedConfigRef$curr3.textAlign;


    return util_2(style, {
      textAlign: textAlign,
      textBaseline: 'middle'
    });
  }

  useEffect(init, []);

  function update() {
    var mergedConfig = mergedConfigRef.current = getMergedConfig();
    var graph = graphRef.current;

    var shape = getShape();

    var cacheNum = graph.shape.number.length;
    var shapeNum = shape.number.length;

    cacheNum !== shapeNum && (graph.shape.number = shape.number);

    var animationCurve = mergedConfig.animationCurve,
        animationFrame = mergedConfig.animationFrame;


    Object.assign(graph, { animationCurve: animationCurve, animationFrame: animationFrame });

    graph.animation('style', getStyle(), true);
    graph.animation('shape', shape);
  }

  useEffect(function () {
    !mountedRef.current && update();

    return function () {
      mountedRef.current = false;
    };
  }, [config]);

  return React.createElement(
    'div',
    { className: 'dv-digital-flop' },
    React.createElement('canvas', { ref: domRef })
  );
};

DigitalFlop.propTypes = {
  config: PropTypes.object

  // 指定 props 的默认值：
};DigitalFlop.defaultProps = {
  config: {}
};

export default DigitalFlop;
//# sourceMappingURL=index.js.map
