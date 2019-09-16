'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_5 = require('../chunk-cf38562e.js');
require('../chunk-f7b704f8.js');
var __chunk_4 = require('../chunk-4d598788.js');
var __chunk_2 = require('../chunk-0d83f239.js');

var css = ".style_dv-digital-flop__3tU40 canvas {\n  width: 100%;\n  height: 100%;\n}\n";
__chunk_3.styleInject(css);

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

  var domRef = React.useRef(null);
  var rendererRef = React.useRef(null);
  var graphRef = React.useRef(null);

  var mergedConfigRef = React.useRef(null);

  var mountedRef = React.useRef(true);

  function init() {
    rendererRef.current = new __chunk_5.CRender(domRef.current);

    mergedConfigRef.current = getMergedConfig();

    graphRef.current = getGraph();
  }

  var getMergedConfig = function getMergedConfig() {
    return __chunk_4.util_2(__chunk_4.util_1(defaultConfig, true), config || {});
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

    var _rendererRef$current$ = __chunk_2.slicedToArray(rendererRef.current.area, 2),
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


    return __chunk_4.util_2(style, {
      textAlign: textAlign,
      textBaseline: 'middle'
    });
  }

  React.useEffect(init, []);

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

  React.useEffect(function () {
    !mountedRef.current && update();

    return function () {
      mountedRef.current = false;
    };
  }, [config]);

  return React__default.createElement(
    'div',
    { className: 'dv-digital-flop' },
    React__default.createElement('canvas', { ref: domRef })
  );
};

DigitalFlop.propTypes = {
  config: PropTypes.object

  // 指定 props 的默认值：
};DigitalFlop.defaultProps = {
  config: {}
};

module.exports = DigitalFlop;
//# sourceMappingURL=index.js.map
