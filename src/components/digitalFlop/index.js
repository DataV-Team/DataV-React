import React, { useEffect, useRef } from 'react'

import PropTypes from 'prop-types'

import CRender from '@jiaminghi/c-render'

import '@jiaminghi/charts/lib/extend/index'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import './style.less'

const defaultConfig = {
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
}

const DigitalFlop = ({ config = {} }) => {
  const domRef = useRef(null)
  const rendererRef = useRef(null)
  const graphRef = useRef(null)

  const mergedConfigRef = useRef(null)

  const mountedRef = useRef(true)

  function init() {
    rendererRef.current = new CRender(domRef.current)

    mergedConfigRef.current = getMergedConfig()

    graphRef.current = getGraph()
  }

  const getMergedConfig = () =>
    deepMerge(deepClone(defaultConfig, true), config || {})

  function getGraph() {
    const { animationCurve, animationFrame } = mergedConfigRef.current

    return rendererRef.current.add({
      name: 'numberText',
      animationCurve,
      animationFrame,
      shape: getShape(),
      style: getStyle()
    })
  }

  function getShape() {
    const { number, content, toFixed, textAlign } = mergedConfigRef.current
    const [w, h] = rendererRef.current.area

    const position = [w / 2, h / 2]

    if (textAlign === 'left') position[0] = 0
    if (textAlign === 'right') position[0] = w

    return { number, content, toFixed, position }
  }

  function getStyle() {
    const { style, textAlign } = mergedConfigRef.current

    return deepMerge(style, {
      textAlign,
      textBaseline: 'middle'
    })
  }

  useEffect(init, [])

  function update() {
    const mergedConfig = (mergedConfigRef.current = getMergedConfig())
    const graph = graphRef.current

    const shape = getShape()

    const cacheNum = graph.shape.number.length
    const shapeNum = shape.number.length

    cacheNum !== shapeNum && (graph.shape.number = shape.number)

    const { animationCurve, animationFrame } = mergedConfig

    Object.assign(graph, { animationCurve, animationFrame })

    graph.animation('style', getStyle(), true)
    graph.animation('shape', shape)
  }

  useEffect(() => {
    !mountedRef.current && update()

    return () => {
      mountedRef.current = false
    }
  }, [config])

  return (
    <div className='dv-digital-flop'>
      <canvas ref={domRef} />
    </div>
  )
}

DigitalFlop.propTypes = {
  config: PropTypes.object
}

// 指定 props 的默认值：
DigitalFlop.defaultProps = {
  config: {}
}

export default DigitalFlop
