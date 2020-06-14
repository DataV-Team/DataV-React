import React, { useEffect, useState, useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import './style.less'

const defaultConfig = {
  /**
   * @description Capsule chart data
   * @type {Array<Object>}
   * @default data = []
   * @example data = [{ name: 'foo1', value: 100 }, { name: 'foo2', value: 100 }]
   */
  data: [],
  /**
   * @description Colors (hex|rgb|rgba|color keywords)
   * @type {Array<String>}
   * @default color = ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']
   * @example color = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
   */
  colors: [
    '#37a2da',
    '#32c5e9',
    '#67e0e3',
    '#9fe6b8',
    '#ffdb5c',
    '#ff9f7f',
    '#fb7293'
  ],
  /**
   * @description Chart unit
   * @type {String}
   * @default unit = ''
   */
  unit: '',
  showVal: false
}

const CapsuleChart = ({ config = {}, className, style }) => {
  const [{ mergedConfig, labelData, capsuleLength, capsuleValue, labelDataLength }, setState] = useState({
    mergedConfig: null,
    labelData: [],
    capsuleLength: [],
    capsuleValue: [],
    labelDataLength: []
  })

  useEffect(() => {
    const mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {})

    const { data } = mergedConfig

    if (!data.length) return

    const capsuleValue = data.map(({ value }) => value)

    const maxValue = Math.max(...capsuleValue)

    const capsuleLength = capsuleValue.map(v => (maxValue ? v / maxValue : 0))

    const oneFifth = maxValue / 5

    const labelData = [...new Set(new Array(6).fill(0).map((v, i) => Math.ceil(i * oneFifth)))]

    const labelDataLength = labelData.map(v => maxValue ? v / maxValue : 0)

    setState({
      mergedConfig,
      capsuleValue,
      capsuleLength,
      labelData,
      labelDataLength
    })
  }, [config])

  /**
   * 计算x轴label位置
   */
  function calcUnitLabelStyle(index) {
    return labelData.length - 1 === index
      ? `right: 0;`
      : `left: ${labelDataLength[index] * 100}%;`
  }

  const classNames = useMemo(() => classnames('dv-capsule-chart', className), [
    className
  ])

  return (
    <div className={classNames} style={style}>
      {!!mergedConfig && (
        <React.Fragment>
          <div className='label-column'>
            {mergedConfig.data.map(({ name }) => (
              <div key={name}>{name}</div>
            ))}
            <div>&nbsp;</div>
          </div>

          <div className='capsule-container'>
            {capsuleLength.map((capsule, index) => (
              <div className='capsule-item' key={index}>
                <div
                  style={{
                    width: `${capsule * 100}%`,
                    backgroundColor: `${
                      mergedConfig.colors[index % mergedConfig.colors.length]
                    }`
                  }}
                >
                  {
                    mergedConfig.showVal &&
                      <span
                        className='capsule-item-val'
                        style={`right:-${`${capsuleValue[index]}`.length * 7}px`}>
                        { capsuleValue[index] }
                      </span>
                  }
                </div>
              </div>
            ))}
            <div className='unit-label'>
              {labelData.map((label, index) => (
                <div key={label + index} style={calcUnitLabelStyle(index)}>{label}</div>
              ))}
            </div>
          </div>

          {!!mergedConfig.unit && (
            <div className='unit-text'>{mergedConfig.unit}</div>
          )}
        </React.Fragment>
      )}
    </div>
  )
}

CapsuleChart.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

// 指定 props 的默认值：
CapsuleChart.defaultProps = {
  config: {}
}

export default CapsuleChart
