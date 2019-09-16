import React, { useEffect, useRef, useState, useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import CRender from '@jiaminghi/c-render'

import './style.less'

const defaultConfig = {
  /**
   * @description Data
   * @type {Array<Number>}
   * @default data = []
   * @example data = [60, 40]
   */
  data: [],
  /**
   * @description Shape of wanter level pond
   * @type {String}
   * @default shape = 'rect'
   * @example shape = 'rect' | 'roundRect' | 'round'
   */
  shape: 'rect',
  /**
   * @description Water wave number
   * @type {Number}
   * @default waveNum = 3
   */
  waveNum: 3,
  /**
   * @description Water wave height (px)
   * @type {Number}
   * @default waveHeight = 40
   */
  waveHeight: 40,
  /**
   * @description Wave opacity
   * @type {Number}
   * @default waveOpacity = 0.4
   */
  waveOpacity: 0.4,
  /**
   * @description Colors (hex|rgb|rgba|color keywords)
   * @type {Array<String>}
   * @default colors = ['#00BAFF', '#3DE7C9']
   * @example colors = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
   */
  colors: ['#3DE7C9', '#00BAFF'],
  /**
   * @description Formatter
   * @type {String}
   * @default formatter = '{value}%'
   */
  formatter: '{value}%'
}

function drawed({ shape: { points } }, { ctx, area }) {
  const firstPoint = points[0]
  const lastPoint = points.slice(-1)[0]

  const h = area[1]

  ctx.lineTo(lastPoint[0], h)
  ctx.lineTo(firstPoint[0], h)

  ctx.closePath()

  ctx.fill()
}

function mergeOffset([x, y], [ox, oy]) {
  return [x + ox, y + oy]
}

const WaterLevelPond = ({ config, className, style }) => {
  const [{ mergedConfig, svgBorderGradient, details }, setState] = useState({
    mergedConfig: {},

    svgBorderGradient: [],

    details: ''
  })

  const gradientId = useRef(`water-level-pond-${Date.now()}`).current

  const wavesRef = useRef([])

  const rendererRef = useRef(null)
  const renderer = rendererRef.current

  const animationRef = useRef(false)

  const domRef = useRef(null)

  const radius = useMemo(() => {
    const { shape } = mergedConfig

    if (shape === 'round') return '50%'

    if (shape === 'rect') return '0'

    if (shape === 'roundRect') return '10px'

    return '0'
  }, [mergedConfig.shape])

  const shape = useMemo(() => {
    const { shape } = mergedConfig

    return !shape ? 'rect' : shape
  }, [mergedConfig.shape])

  function init() {
    rendererRef.current = new CRender(domRef.current)

    if (!config) return

    calcData()
  }

  function calcData() {
    const mergedConfig = deepMerge(deepClone(defaultConfig, true), config)

    const svgBorderGradient = calcSvgBorderGradient(mergedConfig)

    const details = calcDetails(mergedConfig)

    setState({ mergedConfig, svgBorderGradient, details })

    addWave(mergedConfig)

    animationWave()
  }

  function calcSvgBorderGradient({ colors }) {
    const colorNum = colors.length

    const colorOffsetGap = 100 / (colorNum - 1)

    return colors.map((c, i) => [colorOffsetGap * i, c])
  }

  function calcDetails({ data, formatter }) {
    if (!data.length) {
      return ''
    }

    const maxValue = Math.max(...data)

    return formatter.replace('{value}', maxValue)
  }

  function addWave(mergedConfig) {
    const shapes = getWaveShapes(mergedConfig)
    const style = getWaveStyle(mergedConfig)

    wavesRef.current = shapes.map(shape =>
      rendererRef.current.add({
        name: 'smoothline',
        animationFrame: 300,
        shape,
        style,
        drawed
      })
    )
  }

  function getWaveShapes({ waveNum, waveHeight, data }) {
    const [w, h] = rendererRef.current.area

    const pointsNum = waveNum * 4 + 4

    const pointXGap = w / waveNum / 2

    return data.map(v => {
      let points = new Array(pointsNum).fill(0).map((foo, j) => {
        const x = w - pointXGap * j

        const startY = (1 - v / 100) * h

        const y = j % 2 === 0 ? startY : startY - waveHeight

        return [x, y]
      })

      points = points.map(p => mergeOffset(p, [pointXGap * 2, 0]))

      return { points }
    })
  }

  function getWaveStyle({ colors, waveOpacity }) {
    const h = rendererRef.current.area[1]

    return {
      gradientColor: colors,
      gradientType: 'linear',
      gradientParams: [0, 0, 0, h],
      gradientWith: 'fill',
      opacity: waveOpacity,
      translate: [0, 0]
    }
  }

  async function animationWave(repeat = 1) {
    const waves = wavesRef.current
    const renderer = rendererRef.current
    const animation = animationRef.current

    if (animation) return

    animationRef.current = true

    const w = renderer.area[0]

    waves.forEach(graph => {
      graph.attr('style', { translate: [0, 0] })

      graph.animation(
        'style',
        {
          translate: [w, 0]
        },
        true
      )
    })

    await renderer.launchAnimation()

    animationRef.current = false

    if (!renderer.graphs.length) return

    animationWave(repeat + 1)
  }

  useEffect(() => {
    init()

    return () => {
      rendererRef.current.delAllGraph()

      wavesRef.current = []
    }
  }, [])

  useEffect(() => {
    rendererRef.current.delAllGraph()

    wavesRef.current = []

    setTimeout(calcData, 0)
  }, [config])

  const classNames = useMemo(
    () => classnames('dv-water-pond-level', className),
    [className]
  )

  return (
    <div className={classNames} style={style}>
      {!!renderer && (
        <svg>
          <defs>
            <linearGradient id={gradientId} x1='0%' y1='0%' x2='0%' y2='100%'>
              {svgBorderGradient.map(lc => (
                <stop key={lc[0]} offset={lc[0]} stopColor={lc[1]} />
              ))}
            </linearGradient>
          </defs>

          <text
            stroke={`url(#${gradientId})`}
            fill={`url(#${gradientId})`}
            x={renderer.area[0] / 2 + 8}
            y={renderer.area[1] / 2 + 8}
          >
            {details}
          </text>

          {!shape || shape === 'round' ? (
            <ellipse
              cx={renderer.area[0] / 2 + 8}
              cy={renderer.area[1] / 2 + 8}
              rx={renderer.area[0] / 2 + 5}
              ry={renderer.area[1] / 2 + 5}
              stroke={`url(#${gradientId})`}
            />
          ) : (
            <rect
              x='2'
              y='2'
              rx={shape === 'roundRect' ? 10 : 0}
              ry={shape === 'roundRect' ? 10 : 0}
              width={renderer.area[0] + 12}
              height={renderer.area[1] + 12}
              stroke={`url(#${gradientId})`}
            />
          )}
        </svg>
      )}

      <canvas ref={domRef} style={{ borderRadius: `${radius}` }} />
    </div>
  )
}

WaterLevelPond.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

// 指定 props 的默认值：
WaterLevelPond.defaultProps = {
  config: {}
}

export default WaterLevelPond
