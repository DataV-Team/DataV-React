import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'
import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import './style.less'

const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']
const defaultColor = ['#4fd2dd', '#235fa7']

const BorderBox = ({ children, className, style, color = [] }) => {
  const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])

  const classNames = useMemo(() => classnames('dv-border-box-1', className), [
    className
  ])

  return (
    <div className={classNames} style={style}>
      {border.map(borderName => (
        <svg
          width='150px'
          height='150px'
          key={borderName}
          className={`${borderName} border`}
        >
          <polygon
            fill={mergedColor[0]}
            points='6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63'
          >
            <animate
              attributeName='fill'
              values={`${mergedColor[0]};${mergedColor[1]};${mergedColor[0]}`}
              dur='0.5s'
              begin='0s'
              repeatCount='indefinite'
            />
          </polygon>
          <polygon
            fill={mergedColor[1]}
            points='27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8'
          >
            <animate
              attributeName='fill'
              values={`${mergedColor[1]};${mergedColor[0]};${mergedColor[1]}`}
              dur='0.5s'
              begin='0s'
              repeatCount='indefinite'
            />
          </polygon>
          <polygon
            fill={mergedColor[0]}
            points='9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54'
          >
            <animate
              attributeName='fill'
              values={`${mergedColor[0]};${mergedColor[1]};transparent`}
              dur='1s'
              begin='0s'
              repeatCount='indefinite'
            />
          </polygon>
        </svg>
      ))}
      <div className='border-box-content'>{children}</div>
    </div>
  )
}

BorderBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.array
}

export default BorderBox
