import React, { useEffect, useRef, useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

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
   * @description rowGap
   * @type {Number}
   *@default rowGap = 0
   */
  rowGap: 0,
  /**
   * @description Text style configuration
   * @type {Object} {CRender Class Style}
   */
  style: {
    fontSize: 30,
    fill: '#3de7c9'
  },
  /**
   * @description Number formatter
   * @type {Null|Function}
   */
  formatter: undefined,
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

const DigitalFlop = ({ config = {}, className, style }) => {
  const domRef = useRef(null)
  const rendererRef = useRef(null)
  const graphRef = useRef(null)

  function getGraph(mergedConfig) {
    const { animationCurve, animationFrame } = mergedConfig

    return rendererRef.current.add({
      name: 'numberText',
      animationCurve,
      animationFrame,
      shape: getShape(mergedConfig),
      style: getStyle(mergedConfig)
    })
  }

  function getShape({ number, content, toFixed, textAlign, rowGap, formatter }) {
    const [w, h] = rendererRef.current.area

    const position = [w / 2, h / 2]

    if (textAlign === 'left') position[0] = 0
    if (textAlign === 'right') position[0] = w

    return { number, content, toFixed, position, rowGap, formatter }
  }

  function getStyle({ style, textAlign }) {
    return deepMerge(style, {
      textAlign,
      textBaseline: 'middle'
    })
  }

  useEffect(() => {
    const mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {})

    if (!rendererRef.current) {
      rendererRef.current = new CRender(domRef.current)

      graphRef.current = getGraph(mergedConfig)
    }

    const graph = graphRef.current
    graph.animationEnd()

    const shape = getShape(mergedConfig)

    const cacheNum = graph.shape.number.length
    const shapeNum = shape.number.length

    cacheNum !== shapeNum && (graph.shape.number = shape.number)

    const { animationCurve, animationFrame } = mergedConfig

    Object.assign(graph, { animationCurve, animationFrame })

    graph.animation('style', getStyle(mergedConfig), true)
    graph.animation('shape', shape)
  }, [config])

  const classNames = useMemo(() => classnames('dv-digital-flop', className), [
    className
  ])

  return (
    <div className={classNames} style={style}>
      <canvas ref={domRef} />
    </div>
  )
}

DigitalFlop.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

export default DigitalFlop
