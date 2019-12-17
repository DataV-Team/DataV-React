import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import { deepMerge } from '@jiaminghi/charts/lib/util'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import './style.less'

const defaultColor = ['#1dc1f5', '#1dc1f5']

const Decoration = ({ children, className, style, color = [] }) => {
  const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])

  const classNames = useMemo(() => classnames('dv-decoration-7', className), [
    className
  ])

  return (
    <div className={classNames} style={style}>
      <svg width='21px' height='20px'>
        <polyline
          strokeWidth='4'
          fill='transparent'
          stroke={mergedColor[0]}
          points='10, 0 19, 10 10, 20'
        />
        <polyline
          strokeWidth='2'
          fill='transparent'
          stroke={mergedColor[1]}
          points='2, 0 11, 10 2, 20'
        />
      </svg>
      {children}
      <svg width='21px' height='20px'>
        <polyline
          strokeWidth='4'
          fill='transparent'
          stroke={mergedColor[0]}
          points='11, 0 2, 10 11, 20'
        />
        <polyline
          strokeWidth='2'
          fill='transparent'
          stroke={mergedColor[1]}
          points='19, 0 10, 10 19, 20'
        />
      </svg>
    </div>
  )
}

Decoration.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.array
}

export default Decoration
