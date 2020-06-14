import React, { useEffect, useState, useRef, useCallback, useMemo, forwardRef } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import useAutoResize from '../../use/autoResize'

import { randomExtend, getPointDistance, uuid } from '../../util'

import './style.less'

/**
* @description Type Declaration
*
* interface Halo {
*    show?: boolean
*    duration?: [number, number]
*    color?: string
*    radius?: number
* }
*
* interface Text {
*    show?: boolean
*    offset?: [number, number]
*    color?: string
*    fontSize?: number
* }
*
* interface Icon {
*    show?: boolean
*    src?: string
*    width?: number
*    height?: number
* }
*
* interface Point {
*    name: string
*    coordinate: [number, number]
*    halo?: Halo
*    text?: Text
*    icon?: Icon
* }
*
* interface Line {
*    width?: number
*    color?: string
*    orbitColor?: string
*    duration?: [number, number]
*    radius?: string
* }
*
* interface Flyline extends Line {
*    source: string
*    target: string
* }
*
* interface FlylineWithPath extends Flyline {
*    d: string
*    path: [[number, number], [number, number], [number, number]]
*    key: string
* }
*/
const defaultConfig = {
  /**
   * @description Flyline chart points
   * @type {Point[]}
   * @default points = []
   */
  points: [],
  /**
   * @description Lines
   * @type {Flyline[]}
   * @default lines = []
   */
  lines: [],
  /**
   * @description Global halo configuration
   * @type {Halo}
   */
  halo: {
    /**
     * @description Whether to show halo
     * @type {Boolean}
     * @default show = false
     */
    show: false,
    /**
     * @description Halo animation duration (1s = 10)
     * @type {[number, number]}
     */
    duration: [20, 30],
    /**
     * @description Halo color
     * @type {String}
     * @default color = '#fb7293'
     */
    color: '#fb7293',
    /**
     * @description Halo radius
     * @type {Number}
     * @default radius = 120
     */
    radius: 120
  },
  /**
   * @description Global text configuration
   * @type {Text}
   */
  text: {
    /**
     * @description Whether to show text
     * @type {Boolean}
     * @default show = false
     */
    show: false,
    /**
     * @description Text offset
     * @type {[number, number]}
     * @default offset = [0, 15]
     */
    offset: [0, 15],
    /**
     * @description Text color
     * @type {String}
     * @default color = '#ffdb5c'
     */
    color: '#ffdb5c',
    /**
     * @description Text font size
     * @type {Number}
     * @default fontSize = 12
     */
    fontSize: 12
  },
  /**
   * @description Global icon configuration
   * @type {Icon}
   */
  icon: {
    /**
     * @description Whether to show icon
     * @type {Boolean}
     * @default show = false
     */
    show: false,
    /**
     * @description Icon src
     * @type {String}
     * @default src = ''
     */
    src: '',
    /**
     * @description Icon width
     * @type {Number}
     * @default width = 15
     */
    width: 15,
    /**
     * @description Icon height
     * @type {Number}
     * @default width = 15
     */
    height: 15
  },
  /**
   * @description Global line configuration
   * @type {Line}
   */
  line: {
    /**
     * @description Line width
     * @type {Number}
     * @default width = 1
     */
    width: 1,
    /**
     * @description Flyline color
     * @type {String}
     * @default color = '#ffde93'
     */
    color: '#ffde93',
    /**
     * @description Orbit color
     * @type {String}
     * @default orbitColor = 'rgba(103, 224, 227, .2)'
     */
    orbitColor: 'rgba(103, 224, 227, .2)',
    /**
     * @description Flyline animation duration
     * @type {[number, number]}
     * @default duration = [20, 30]
     */
    duration: [20, 30],
    /**
     * @description Flyline radius
     * @type {Number}
     * @default radius = 100
     */
    radius: 100
  },
  /**
   * @description Back ground image url
   * @type {String}
   * @default bgImgSrc = ''
   */
  bgImgSrc: '',
  /**
   * @description K value
   * @type {Number}
   * @default k = -0.5
   * @example k = -1 ~ 1
   */
  k: -0.5,
  /**
   * @description Flyline curvature
   * @type {Number}
   * @default curvature = 5
   */
  curvature: 5,
  /**
   * @description Relative points position
   * @type {Boolean}
   * @default relative = true
   */
  relative: true
}

function getKLinePointByx(k, [lx, ly], x) {
  const y = ly - k * lx + k * x

  return [x, y]
}

const FlyLineChartEnhanced = forwardRef(({ config = {}, dev = false, className, style }, ref) => {
  const { width, height, domRef } = useAutoResize(ref)

  const { unique, flylineGradientId, haloGradientId } = useRef({
    unique: Math.random(),
    flylineGradientId: `flyline-gradient-id-${uuid()}`,
    haloGradientId: `halo-gradient-id-${uuid()}`
  }).current

  const { mergedConfig, flylinePoints, flylines } = useMemo(calcData, [
    config,
    width,
    height
  ])

  const [flylineLengths, setFlylineLengths] = useState([])

  const pathDomRef = useRef([])

  function calcData() {
    const mergedConfig = getMergedConfig()

    const flylinePoints = getFlylinePoints(mergedConfig)

    const flylines = getLinePaths(mergedConfig)

    return { mergedConfig, flylinePoints, flylines }
  }

  function getMergedConfig() {
    const mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {})
    const { points, lines, halo, text, icon, line } = mergedConfig

    mergedConfig.points = points.map(item => {
      item.halo = deepMerge(deepClone(halo, true), item.halo || {})
      item.text = deepMerge(deepClone(text, true), item.text || {})
      item.icon = deepMerge(deepClone(icon, true), item.icon || {})
      return item
    })

    mergedConfig.lines = lines.map(item => deepMerge(deepClone(line, true), item))

    return mergedConfig
  }

  function getFlylinePoints(mergedConfig) {
    const { relative, points } = mergedConfig

    return points.map((item, i) => {
      const { coordinate: [x, y], halo, icon, text } = item

      if (relative) item.coordinate = [x * width, y * height]

      item.halo.time = randomExtend(...halo.duration) / 10

      const { width: iw, height: ih } = icon
      item.icon.x = item.coordinate[0] - iw / 2
      item.icon.y = item.coordinate[1] - ih / 2

      const [ox, oy] = text.offset
      item.text.x = item.coordinate[0] + ox
      item.text.y = item.coordinate[1] + oy
      item.key = `${item.coordinate.toString()}${i}`

      return item
    })
  }

  function getLinePaths(mergedConfig) {
    const { points, lines } = mergedConfig

    return lines.map(item => {
      const { source, target, duration } = item
      const sourcePoint = points.find(({ name }) => name === source).coordinate
      const targetPoint = points.find(({ name }) => name === target).coordinate
      const path = getPath(sourcePoint, targetPoint, mergedConfig).map(item => item.map(v => parseFloat(v.toFixed(10))))
      const d = `M${path[0].toString()} Q${path[1].toString()} ${path[2].toString()}`
      const key = `path${path.toString()}`
      const time = randomExtend(...duration) / 10

      return { ...item, path, key, d, time }
    })
  }

  function getPath(start, end, mergedConfig) {
    const controlPoint = getControlPoint(start, end, mergedConfig)

    return [start, controlPoint, end]
  }

  function getControlPoint([sx, sy], [ex, ey], { curvature, k }) {
    const [mx, my] = [(sx + ex) / 2, (sy + ey) / 2]
    const distance = getPointDistance([sx, sy], [ex, ey])
    const targetLength = distance / curvature
    const disDived = targetLength / 2
    let [dx, dy] = [mx, my]

    do {
      dx += disDived
      dy = getKLinePointByx(k, [mx, my], dx)[1]
    } while (getPointDistance([mx, my], [dx, dy]) < targetLength)

    return [dx, dy]
  }

  const consoleClickPos = useCallback(({ offsetX, offsetY }) => {
    if (!dev) return

    const relativeX = (offsetX / width).toFixed(2)
    const relativeY = (offsetY / height).toFixed(2)

    console.warn(`dv-flyline-chart-enhanced DEV: \n Click Position is [${offsetX}, ${offsetY}] \n Relative Position is [${relativeX}, ${relativeY}]`)
  }, [width, height, dev])

  useEffect(() => {
    const lengths = flylines.map((foo, i) =>
      pathDomRef.current[i].getTotalLength()
    )

    setFlylineLengths(lengths)
  }, [flylines])

  const classNames = useMemo(() => classnames('dv-flyline-chart-enhanced', className), [
    className
  ])

  return (
    <div
      className={classNames}
      ref={domRef}
      style={{ backgroundImage: `url(${mergedConfig ? mergedConfig.bgImgSrc : ''})`, ...style }}
      onClick={consoleClickPos}
    >
      {
        flylines.length && (
          <svg width={width} height={height}>
            <defs>
              <radialGradient
                id={flylineGradientId}
                cx='50%' cy='50%' r='50%'
              >
                <stop
                  offset='0%' stopColor='#fff'
                  stopOpacity='1'
                />
                <stop
                  offset='100%' stopColor='#fff'
                  stopOpacity='0'
                />
              </radialGradient>

              <radialGradient
                id={haloGradientId}
                cx='50%' cy='50%' r='50%'
              >
                <stop
                  offset='0%' stopColor='#fff'
                  stopOpacity='0'
                />
                <stop
                  offset='100%' stopColor='#fff'
                  stopOpacity='1'
                />
              </radialGradient>
            </defs >

            {/* points */}
            {
              flylinePoints.map((point, i) => (
                <g key={i}>
                  <defs>
                    {
                      point.halo.show &&
                      <circle
                        id={`halo${unique}${point.key}`}
                        cx={point.coordinate[0]}
                        cy={point.coordinate[1]}
                      >
                        <animate
                          attributeName='r'
                          values={`1;${point.halo.radius}`}
                          dur={`${point.halo.time}s`}
                          repeatCount='indefinite'
                        />
                        <animate
                          attributeName='opacity'
                          values='1;0'
                          dur={`${point.halo.time}s`}
                          repeatCount='indefinite'
                        />
                      </circle>
                    }
                  </defs>

                  {/* halo gradient mask */}
                  <mask id={`mask${unique}${point.key}`}>
                    {
                      point.halo.show && <use
                        href={`#halo${unique}${point.key}`}
                        fill={`url(#${haloGradientId})`}
                      />
                    }
                  </mask>

                  {/* point halo */}
                  {
                    point.halo.show && <use
                      href={`#halo${unique}${point.key}`}
                      fill={point.halo.color}
                      mask={`url(#mask${unique}${point.key})`}
                    />
                  }

                  {/* point icon */}
                  {
                    point.icon.show && <image
                      href={point.icon.src}
                      width={point.icon.width}
                      height={point.icon.height}
                      x={point.icon.x}
                      y={point.icon.y}
                    />
                  }

                  {/* point text */}
                  {
                    point.text.show && <text
                      style={{ fontSize: `${point.text.fontSize}px`, color: `${point.text.color}` }}
                      fill={point.text.color}
                      x={point.text.x}
                      y={point.text.y}
                    >
                      {point.name}
                    </text>
                  }
                </g >
              ))
            }

            {/* flylines */}
            {
              flylines.map((line, i) => (
                <g key={i}>
                  <defs>
                    <path
                      id={line.key}
                      ref={e => (pathDomRef.current[i] = e)}
                      d={line.d}
                      fill='transparent'
                    />
                  </defs>

                  {/* orbit line */}
                  <use
                    href={`#${line.key}`}
                    strokeWidth={line.width}
                    stroke={line.orbitColor}
                  />

                  {/* fly line gradient mask */}
                  <mask id={`mask${unique}${line.key}`}>
                    <circle cx='0' cy='0' r={line.radius} fill={`url(#${flylineGradientId})`}>
                      <animateMotion
                        dur={line.time}
                        path={line.d}
                        rotate='auto'
                        repeatCount='indefinite'
                      />
                    </circle>
                  </mask >

                  {/* fly line */}
                  {
                    flylineLengths[i] && <use
                      href={`#${line.key}`}
                      strokeWidth={line.width}
                      stroke={line.color}
                      mask={`url(#mask${unique}${line.key})`}
                    >
                      <animate
                        attributeName='stroke-dasharray'
                        from={`0, ${flylineLengths[i]}`}
                        to={`${flylineLengths[i]}, 0`}
                        dur={line.time}
                        repeatCount='indefinite'
                      />
                    </use>
                  }

                </g>
              ))
            }
          </svg>
        )
      }
    </div>
  )
})

FlyLineChartEnhanced.propTypes = {
  config: PropTypes.object,
  dev: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

// 指定 props 的默认值：
FlyLineChartEnhanced.defaultProps = {
  dev: false
}

export default FlyLineChartEnhanced
