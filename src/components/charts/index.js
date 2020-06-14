import React, { useRef, useEffect, useMemo, forwardRef } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import Chart from '@jiaminghi/charts'

import useAutoResize from '../../use/autoResize'

import './style.less'

const Charts = forwardRef(({ option = {}, className, style }, ref) => {
  const { width, height, domRef } = useAutoResize(ref)

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
})

Charts.propTypes = {
  option: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Charts
