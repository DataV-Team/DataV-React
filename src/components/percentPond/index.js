import React, { useEffect, useState, useRef, useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import { uuid } from '../../util'

import './style.less'

const defaultConfig = {
  /**
   * @description Value
   * @type {Number}
   * @default value = 0
   */
  value: 0,
  /**
   * @description Colors (hex|rgb|rgba|color keywords)
   * @type {Array<String>}
   * @default colors = ['#00BAFF', '#3DE7C9']
   * @example colors = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
   */
  colors: ['#3DE7C9', '#00BAFF'],
  /**
   * @description Border width
   * @type {Number}
   * @default borderWidth = 3
   */
  borderWidth: 3,
  /**
   * @description Gap between border and pond
   * @type {Number}
   * @default borderGap = 3
   */
  borderGap: 3,
  /**
   * @description Line dash
   * @type {Array<Number>}
   * @default lineDash = [5, 1]
   */
  lineDash: [5, 1],
  /**
   * @description Text color
   * @type {String}
   * @default textColor = '#fff'
   */
  textColor: '#fff',
  /**
   * @description Border radius
   * @type {Number}
   * @default borderRadius = 5
   */
  borderRadius: 5,
  /**
   * @description Local Gradient
   * @type {Boolean}
   * @default localGradient = false
   * @example localGradient = false | true
   */
  localGradient: false,
  /**
   * @description Formatter
   * @type {String}
   * @default formatter = '{value}%'
   */
  formatter: '{value}%'
}

const PercentPond = ({ config = {}, className, style }) => {
  const domRef = useRef(null)

  const { gradientId1, gradientId2 } = useRef({
    gradientId1: `percent-pond-gradientId1-${uuid()}`,
    gradientId2: `percent-pond-gradientId2-${uuid()}`
  }).current

  const [{ width, height, mergedConfig }, setState] = useState({
    width: 0,
    height: 0,

    mergedConfig: null
  })

  const rectWidth = useMemo(() => {
    if (!mergedConfig) return 0

    const { borderWidth } = mergedConfig

    return width - borderWidth
  }, [mergedConfig, width])

  const rectHeight = useMemo(() => {
    if (!mergedConfig) return 0

    const { borderWidth } = mergedConfig

    return height - borderWidth
  }, [mergedConfig, height])

  const points = useMemo(() => {
    const halfHeight = height / 2

    if (!mergedConfig) return `0, ${halfHeight} 0, ${halfHeight}`

    const { borderWidth, borderGap, value } = mergedConfig

    const polylineLength =
      ((width - (borderWidth + borderGap) * 2) / 100) * value

    return `
      ${borderWidth + borderGap}, ${halfHeight}
      ${borderWidth + borderGap + polylineLength}, ${halfHeight + 0.001}
    `
  }, [mergedConfig, width, height])

  const polylineWidth = useMemo(() => {
    if (!mergedConfig) return 0

    const { borderWidth, borderGap } = mergedConfig

    return height - (borderWidth + borderGap) * 2
  }, [mergedConfig, height])

  const linearGradient = useMemo(() => {
    if (!mergedConfig) return []

    const { colors } = mergedConfig

    const colorNum = colors.length

    const colorOffsetGap = 100 / (colorNum - 1)

    return colors.map((c, i) => [colorOffsetGap * i, c])
  }, [mergedConfig])

  const polylineGradient = useMemo(() => {
    if (!mergedConfig) return gradientId2

    if (mergedConfig.localGradient) return gradientId1

    return gradientId2
  }, [gradientId1, gradientId2, mergedConfig])

  const gradient2XPos = useMemo(() => {
    if (!mergedConfig) return '100%'

    const { value } = mergedConfig

    return `${200 - value}%`
  }, [mergedConfig])

  const details = useMemo(() => {
    if (!mergedConfig) return ''

    const { value, formatter } = mergedConfig

    return formatter.replace('{value}', value)
  }, [mergedConfig])

  useEffect(() => {
    const { clientWidth: width, clientHeight: height } = domRef.current

    setState({
      width,
      height,
      mergedConfig: deepMerge(deepClone(defaultConfig, true), config || {})
    })
  }, [config])

  const classNames = useMemo(() => classnames('dv-percent-pond', className), [
    className
  ])

  return (
    <div className={classNames} style={style} ref={domRef}>
      <svg>
        <defs>
          <linearGradient id={gradientId1} x1='0%' y1='0%' x2='100%' y2='0%'>
            {linearGradient.map(lc => (
              <stop key={lc[0]} offset={`${lc[0]}%`} stopColor={lc[1]} />
            ))}
          </linearGradient>

          <linearGradient
            id={gradientId2}
            x1='0%'
            y1='0%'
            x2={gradient2XPos}
            y2='0%'
          >
            {linearGradient.map(lc => (
              <stop key={lc[0]} offset={`${lc[0]}%`} stopColor={lc[1]} />
            ))}
          </linearGradient>
        </defs>
        <rect
          x={mergedConfig ? mergedConfig.borderWidth / 2 : '0'}
          y={mergedConfig ? mergedConfig.borderWidth / 2 : '0'}
          rx={mergedConfig ? mergedConfig.borderRadius : '0'}
          ry={mergedConfig ? mergedConfig.borderRadius : '0'}
          fill='transparent'
          strokeWidth={mergedConfig ? mergedConfig.borderWidth : '0'}
          stroke={`url(#${gradientId1})`}
          width={rectWidth > 0 ? rectWidth : 0}
          height={rectHeight > 0 ? rectHeight : 0}
        />
        <polyline
          strokeWidth={polylineWidth}
          strokeDasharray={mergedConfig ? mergedConfig.lineDash.join(',') : '0'}
          stroke={`url(#${polylineGradient})`}
          points={points}
        />
        <text
          stroke={mergedConfig ? mergedConfig.textColor : '#fff'}
          fill={mergedConfig ? mergedConfig.textColor : '#fff'}
          x={width / 2}
          y={height / 2}
        >
          {details}
        </text>
      </svg>
    </div>
  )
}

PercentPond.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

export default PercentPond
