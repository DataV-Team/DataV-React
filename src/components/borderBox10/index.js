import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'
import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import './style.less'

const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']
const defaultColor = ['#1d48c4', '#d3e1f8']

const BorderBox = ({ children, className, style, color = [] }) => {
  const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])

  const classNames = useMemo(() => classnames('dv-border-box-10', className), [
    className
  ])

  const styles = useMemo(() => ({
    boxShadow: `inset 0 0 25px 3px ${mergedColor[0]}`,
    ...style
  }), [style, mergedColor])

  return (
    <div className={classNames} style={styles}>
      {border.map(borderName => (
        <svg
          width='150px'
          height='150px'
          key={borderName}
          className={`${borderName} border`}
        >
          <polygon
            fill={mergedColor[1]}
            points='40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3'
          />
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
