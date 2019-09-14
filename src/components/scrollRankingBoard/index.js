import React, { useEffect, useRef, useState } from 'react'

import PropTypes from 'prop-types'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import useAutoResize from '../../use/autoResize'

import './style.less'

const defaultConfig = {
  /**
   * @description Board data
   * @type {Array<Object>}
   * @default data = []
   */
  data: [],
  /**
   * @description Row num
   * @type {Number}
   * @default rowNum = 5
   */
  rowNum: 5,
  /**
   * @description Scroll wait time
   * @type {Number}
   * @default waitTime = 2000
   */
  waitTime: 2000,
  /**
   * @description Carousel type
   * @type {String}
   * @default carousel = 'single'
   * @example carousel = 'single' | 'page'
   */
  carousel: 'single',
  /**
   * @description Value unit
   * @type {String}
   * @default unit = ''
   * @example unit = 'ton'
   */
  unit: ''
}

function calcRowsData({ data, rowNum }) {
  data.sort(({ value: a }, { value: b }) => {
    if (a > b) return -1
    if (a < b) return 1
    if (a === b) return 0
  })

  const value = data.map(({ value }) => value)

  const max = Math.max(...value) || 0

  data = data.map((row, i) => ({
    ...row,
    ranking: i + 1,
    percent: (row.value / max) * 100
  }))

  const rowLength = data.length

  if (rowLength > rowNum && rowLength < 2 * rowNum) {
    data = [...data, ...data]
  }

  data = data.map((d, i) => ({ ...d, scroll: i }))

  return data
}

const ScrollRankingBoard = ({ config }) => {
  const { height, domRef } = useAutoResize(calcData, onResize)

  const [state, setState] = useState({
    mergedConfig: null,

    rowsData: [],

    rows: [],

    avgHeight: 0,

    heights: [],

    animationIndex: 0
  })

  const { mergedConfig, rows, heights } = state

  const timerRef = useRef(null)
  const stateRef = useRef(state)

  stateRef.current = state

  function onResize() {
    if (!mergedConfig) return

    calcHeights(true)
  }

  function calcData() {
    const mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {})

    const rowsData = calcRowsData(mergedConfig)

    const heightData = calcHeights(mergedConfig)

    setState(state => ({
      ...state,
      mergedConfig,
      rowsData,
      rows: [...rowsData],
      ...heightData
    }))

    animation(true)
  }

  function calcHeights({ rowNum, data }, onresize = false) {
    const avgHeight = height / rowNum

    if (onresize) {
      return { avgHeight }
    }

    return { avgHeight, heights: new Array(data.length).fill(avgHeight) }
  }

  async function animation(start = false) {
    let {
      avgHeight,
      animationIndex,
      mergedConfig,
      rowsData,
      animation
    } = stateRef.current

    const { waitTime, carousel, rowNum } = mergedConfig

    const rowLength = rowsData.length

    if (rowNum >= rowLength) return

    if (start) await new Promise(resolve => setTimeout(resolve, waitTime))

    const animationNum = carousel === 'single' ? 1 : rowNum

    let rows = rowsData.slice(animationIndex)
    rows.push(...rowsData.slice(0, animationIndex))

    setState(state => ({
      ...state,
      rows,
      heights: new Array(rowLength).fill(avgHeight)
    }))

    await new Promise(resolve => setTimeout(resolve, 300))

    animationIndex += animationNum

    const back = animationIndex - rowLength
    if (back >= 0) animationIndex = back

    setState(state => ({
      ...state,
      animationIndex,
      heights: [...state.heights].splice(
        0,
        animationNum,
        ...new Array(animationNum).fill(0)
      )
    }))

    timerRef.current = setTimeout(animation, waitTime - 300)
  }

  useEffect(() => {
    calcData()

    return () => clearTimeout(timerRef.current)
  }, [config])

  return (
    <div className='dv-scroll-ranking-board' ref={domRef}>
      {rows.map((item, i) => (
        <div
          className='row-item'
          key={item.toString() + item.scroll}
          style={`height: ${heights[i]}px;`}
        >
          <div className='ranking-info'>
            <div className='rank'>No.{item.ranking}</div>
            <div className='info-name'>{item.name}</div>
            <div className='ranking-value'>
              {item.value + mergedConfig.unit}
            </div>
          </div>

          <div className='ranking-column'>
            <div className='inside-column' style={`width: ${item.percent}%;`}>
              <div className='shine' />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

ScrollRankingBoard.propTypes = {
  config: PropTypes.object
}

// 指定 props 的默认值：
ScrollRankingBoard.defaultProps = {
  config: {}
}

export default ScrollRankingBoard
