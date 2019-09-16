import React, { useState, useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import { getPolylineLength } from '@jiaminghi/charts/lib/util'

import useAutoResize from '../../use/autoResize'

import './style.less'

const Decoration = ({ className, style }) => {
  const { width, height, domRef } = useAutoResize(calcSVGData, calcSVGData)

  const [
    { line1Points, line2Points, line1Length, line2Length },
    setState
  ] = useState({
    line1Points: '',
    line2Points: '',
    line1Length: 0,
    line2Length: 0
  })

  function calcSVGData() {
    let line1Points = [
      [0, height * 0.2],
      [width * 0.18, height * 0.2],
      [width * 0.2, height * 0.4],
      [width * 0.25, height * 0.4],
      [width * 0.27, height * 0.6],
      [width * 0.72, height * 0.6],
      [width * 0.75, height * 0.4],
      [width * 0.8, height * 0.4],
      [width * 0.82, height * 0.2],
      [width, height * 0.2]
    ]

    let line2Points = [[width * 0.3, height * 0.8], [width * 0.7, height * 0.8]]

    const line1Length = getPolylineLength(line1Points)
    const line2Length = getPolylineLength(line2Points)

    line1Points = line1Points.map(point => point.join(',')).join(' ')
    line2Points = line2Points.map(point => point.join(',')).join(' ')

    setState({ line1Points, line2Points, line1Length, line2Length })
  }

  const classNames = useMemo(
    () => classnames('dv-decoration-5', className),
    className
  )

  return (
    <div className={classNames} style={style} ref={domRef}>
      <svg width={width} height={height}>
        <polyline
          fill='transparent'
          stroke='#3f96a5'
          strokeWidth='3'
          points={line1Points}
        >
          <animate
            attributeName='stroke-dasharray'
            attributeType='XML'
            from={`0, ${line1Length / 2}, 0, ${line1Length / 2}`}
            to={`0, 0, ${line1Length}, 0`}
            dur='1.2s'
            begin='0s'
            calcMode='spline'
            keyTimes='0;1'
            keySplines='0.4,1,0.49,0.98'
            repeatCount='indefinite'
          />
        </polyline>
        <polyline
          fill='transparent'
          stroke='#3f96a5'
          strokeWidth='2'
          points={line2Points}
        >
          <animate
            attributeName='stroke-dasharray'
            attributeType='XML'
            from={`0, ${line2Length / 2}, 0, ${line2Length / 2}`}
            to={`0, 0, ${line2Length}, 0`}
            dur='1.2s'
            begin='0s'
            calcMode='spline'
            keyTimes='0;1'
            keySplines='.4,1,.49,.98'
            repeatCount='indefinite'
          />
        </polyline>
      </svg>
    </div>
  )
}

Decoration.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default Decoration
