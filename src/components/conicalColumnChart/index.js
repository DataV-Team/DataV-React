import React, { useMemo, forwardRef } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import useAutoResize from '../../use/autoResize'

import './style.less'

const defaultConfig = {
  /**
   * @description Chart data
   * @type {Array<Object>}
   * @default data = []
   */
  data: [],
  /**
   * @description Chart img
   * @type {Array<String>}
   * @default img = []
   */
  img: [],
  /**
   * @description Chart font size
   * @type {Number}
   * @default fontSize = 12
   */
  fontSize: 12,
  /**
   * @description Img side length
   * @type {Number}
   * @default imgSideLength = 30
   */
  imgSideLength: 30,
  /**
   * @description Column color
   * @type {String}
   * @default columnColor = 'rgba(0, 194, 255, 0.4)'
   */
  columnColor: 'rgba(0, 194, 255, 0.4)',
  /**
   * @description Text color
   * @type {String}
   * @default textColor = '#fff'
   */
  textColor: '#fff',
  /**
   * @description Show value
   * @type {Boolean}
   * @default showValue = false
   */
  showValue: false
}

function getData(mergedConfig) {
  let { data } = mergedConfig

  data = deepClone(data, true)

  data.sort(({ value: a }, { value: b }) => {
    if (a > b) return -1
    if (a < b) return 1
    if (a === b) return 0
  })

  const max = data[0] ? data[0].value : 10

  data = data.map(item => ({
    ...item,
    percent: item.value / max
  }))

  return data
}

const ConicalColumnChart = forwardRef(({ config = {}, className, style }, ref) => {
  const { width, height, domRef } = useAutoResize(ref)

  const { mergedConfig, column } = useMemo(calcData, [config, width, height])

  function calcData() {
    const mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {})

    mergedConfig.data = getData(mergedConfig)

    return { mergedConfig, column: getColumn(mergedConfig) }
  }

  function getColumn(mergedConfig) {
    const { imgSideLength, fontSize, data } = mergedConfig

    const itemNum = data.length
    const gap = width / (itemNum + 1)

    const useAbleHeight = height - imgSideLength - fontSize - 5
    const svgBottom = height - fontSize - 5

    return data.map((item, i) => {
      const { percent } = item

      const middleXPos = gap * (i + 1)
      const leftXPos = gap * i
      const rightXpos = gap * (i + 2)

      const middleYPos = svgBottom - useAbleHeight * percent
      const controlYPos = useAbleHeight * percent * 0.6 + middleYPos

      const d = `
        M${leftXPos}, ${svgBottom}
        Q${middleXPos}, ${controlYPos} ${middleXPos},${middleYPos}
        M${middleXPos},${middleYPos}
        Q${middleXPos}, ${controlYPos} ${rightXpos},${svgBottom}
        L${leftXPos}, ${svgBottom}
        Z
      `

      const textY = (svgBottom + middleYPos) / 2 + fontSize / 2

      return {
        ...item,
        d,
        x: middleXPos,
        y: middleYPos,
        textY
      }
    })
  }

  const classNames = useMemo(
    () => classnames('dv-conical-column-chart', className),
    [className]
  )

  return (
    <div className={classNames} style={style} ref={domRef}>
      <svg width={width} height={height}>
        {column.map((item, i) => (
          <g key={i}>
            <path d={item.d} fill={mergedConfig.columnColor} />
            <text
              style={{ fontSize: `${mergedConfig.fontSize}px` }}
              fill={mergedConfig.textColor}
              x={item.x}
              y={height - 4}
            >
              {item.name}
            </text>
            {!!mergedConfig.img.length && (
              <image
                href={mergedConfig.img[i % mergedConfig.img.length]}
                width={mergedConfig.imgSideLength}
                height={mergedConfig.imgSideLength}
                x={item.x - mergedConfig.imgSideLength / 2}
                y={item.y - mergedConfig.imgSideLength}
              />
            )}
            {mergedConfig.showValue && (
              <text
                style={{ fontSize: `${mergedConfig.fontSize}px` }}
                fill={mergedConfig.textColor}
                x={item.x}
                y={item.textY}
              >
                {item.value}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  )
})

ConicalColumnChart.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

export default ConicalColumnChart
