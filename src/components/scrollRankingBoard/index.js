import React, { useEffect, useRef, useState, useMemo, forwardRef } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import useAutoResize from '../../use/autoResize'
import { co } from '../../util'

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
  unit: '',
  /**
   * @description Auto sort by value
   * @type {Boolean}
   * @default sort = true
   */
  sort: true,
  /**
   * @description Value formatter
   * @type {Function}
   * @default valueFormatter = null
   */
  valueFormatter: null
}

function calcRows({ data, rowNum, sort }) {
  sort && data.sort(({ value: a }, { value: b }) => {
    if (a > b) return -1
    if (a < b) return 1
    if (a === b) return 0
  })

  const value = data.map(({ value }) => value)

  const min = Math.min(...value) || 0

  // 最小值的绝对值
  const minAbs = Math.abs(min)

  const max = Math.max(...value) || 0

  // 最大值的绝对值
  const maxAbs = Math.abs(max)

  // 总数为最大值与最小值的绝对值相加
  const total = maxAbs + minAbs

  data = data.map((row, i) => ({
    ...row,
    ranking: i + 1,
    percent: total && ((row.value + minAbs) / total * 100)
  }))

  const rowLength = data.length

  if (rowLength > rowNum && rowLength < 2 * rowNum) {
    data = [...data, ...data]
  }

  data = data.map((d, i) => ({ ...d, scroll: i }))

  return data
}

const ScrollRankingBoard = forwardRef(({ config = {}, className, style }, ref) => {
  const { width, height, domRef } = useAutoResize(ref)

  const [state, setState] = useState({
    mergedConfig: null,

    rows: [],

    heights: []
  })

  const { mergedConfig, rows, heights } = state

  const stateRef = useRef({
    ...state,
    rowsData: [],
    avgHeight: 0,
    animationIndex: 0
  })

  const heightRef = useRef(height)

  Object.assign(stateRef.current, state)

  function onResize(onresize = false) {
    if (!mergedConfig) return

    const heights = calcHeights(mergedConfig, onresize)

    if (heights !== undefined) {
      Object.assign(stateRef.current, { heights })
      setState(state => ({ ...state, heights }))
    }
  }

  function calcData() {
    const mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {})

    const rows = calcRows(mergedConfig)

    const heights = calcHeights(mergedConfig)

    const data = { mergedConfig, rows }

    heights !== undefined && Object.assign(data, { heights })

    Object.assign(stateRef.current, data, { rowsData: rows, animationIndex: 0 })

    setState(state => ({ ...state, ...data }))
  }

  function calcHeights({ rowNum, data }, onresize = false) {
    const avgHeight = height / rowNum

    Object.assign(stateRef.current, { avgHeight })

    if (!onresize) {
      return new Array(data.length).fill(avgHeight)
    }
  }

  function * animation(start = false) {
    let {
      avgHeight,
      animationIndex,
      mergedConfig: { waitTime, carousel, rowNum },
      rowsData
    } = stateRef.current

    const rowLength = rowsData.length

    if (start) yield new Promise(resolve => setTimeout(resolve, waitTime))

    const animationNum = carousel === 'single' ? 1 : rowNum

    let rows = rowsData.slice(animationIndex)
    rows.push(...rowsData.slice(0, animationIndex))
    rows = rows.slice(0, rowNum + 1)

    const heights = new Array(rowLength).fill(avgHeight)
    setState(state => ({ ...state, rows, heights }))

    yield new Promise(resolve => setTimeout(resolve, 300))

    animationIndex += animationNum

    const back = animationIndex - rowLength
    if (back >= 0) animationIndex = back

    const newHeights = [...heights]
    newHeights.splice(0, animationNum, ...new Array(animationNum).fill(0))

    Object.assign(stateRef.current, { animationIndex })
    setState(state => ({ ...state, heights: newHeights }))
  }

  useEffect(() => {
    calcData()

    let start = true

    function * loop() {
      while (true) {
        yield * animation(start)

        start = false

        const { waitTime } = stateRef.current.mergedConfig

        yield new Promise(resolve => setTimeout(resolve, waitTime - 300))
      }
    }

    const {
      mergedConfig: { rowNum },
      rows: rowsData
    } = stateRef.current

    const rowLength = rowsData.length

    if (rowNum >= rowLength) return

    return co(loop).end
  }, [config, domRef.current])

  useEffect(() => {
    if (heightRef.current === 0 && height !== 0) {
      onResize()

      heightRef.current = height
    } else {
      onResize(true)
    }
  }, [width, height, domRef.current])

  const classNames = useMemo(
    () => classnames('dv-scroll-ranking-board', className),
    [className]
  )

  return (
    <div className={classNames} style={style} ref={domRef}>
      {rows.map((item, i) => (
        <div
          className='row-item'
          key={item.toString() + item.scroll}
          style={{ height: `${heights[i]}px` }}
        >
          <div className='ranking-info'>
            <div className='rank'>No.{item.ranking}</div>
            <div className='info-name' dangerouslySetInnerHTML={{ __html: item.name }} />
            <div className='ranking-value'>
              {mergedConfig.valueFormatter ? mergedConfig.valueFormatter(item) : item.value + mergedConfig.unit}
            </div>
          </div>

          <div className='ranking-column'>
            <div
              className='inside-column'
              style={{ width: `${item.percent}%` }}
            >
              <div className='shine' />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
})

ScrollRankingBoard.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

export default ScrollRankingBoard
