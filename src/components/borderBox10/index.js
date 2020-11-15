import React, { useMemo, forwardRef } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'
import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import useAutoResize from '../../use/autoResize'

import './style.less'

const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']
const defaultColor = ['#1d48c4', '#d3e1f8']

const BorderBox = forwardRef(({ children, className, style, color = [], backgroundColor = 'transparent' }, ref) => {
  const { width, height, domRef } = useAutoResize(ref)

  const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])

  const classNames = useMemo(() => classnames('dv-border-box-10', className), [
    className
  ])

  const styles = useMemo(() => ({
    boxShadow: `inset 0 0 25px 3px ${mergedColor[0]}`,
    ...style
  }), [style, mergedColor])

  return (
    <div className={classNames} style={styles} ref={domRef}>
      <svg className='dv-border-svg-container' width={width} height={height}>
        <polygon fill={backgroundColor} points={`
          4, 0 ${width - 4}, 0 ${width}, 4 ${width}, ${height - 4} ${width - 4}, ${height}
          4, ${height} 0, ${height - 4} 0, 4
        `} />
      </svg>

      {border.map(borderName => (
        <svg
          width='150px'
          height='150px'
          key={borderName}
          className={`${borderName} dv-border-svg-container`}
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
})

BorderBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.array,
  backgroundColor: PropTypes.string
}

export default BorderBox
