import React, { useRef, useEffect, useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import Chart from '@jiaminghi/charts'

import useAutoResize from '../../use/autoResize'

import './style.less'

const Charts = ({ option = {}, className, style }) => {
  const { width, height, domRef } = useAutoResize()

  const chartRef = useRef(null)

  const chartInstanceofRef = useRef(null)

  useEffect(() => {
    chartInstanceofRef.current ||
      (chartInstanceofRef.current = new Chart(chartRef.current))

    chartInstanceofRef.current.setOption(option || {}, true)
  }, [option])

  useEffect(() => {
    chartInstanceofRef.current.resize()
  }, [width, height])

  const classNames = useMemo(
    () => classnames('dv-charts-container', className),
    [className]
  )

  return (
    <div className={classNames} style={style} ref={domRef}>
      <div className='charts-canvas-container' ref={chartRef} />
    </div>
  )
}

Charts.propTypes = {
  option: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

// 指定 props 的默认值：
Charts.defaultProps = {
  option: {}
}

export default Charts
