import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import useAutoResize from '../../use/autoResize'

import './style.less'

const Decoration = ({ reverse = false, className, style }) => {
  const { width, height, domRef } = useAutoResize()

  const classNames = useMemo(
    () => classnames('dv-decoration-4', className),
    className
  )

  return (
    <div className={classNames} style={style} ref={domRef}>
      <div
        className={`container ${reverse ? 'reverse' : 'normal'}`}
        style={
          reverse
            ? { width: `${width}px`, height: `5px` }
            : { width: `5px`, height: `${height}px` }
        }
      >
        <svg width={reverse ? width : 5} height={reverse ? 5 : height}>
          <polyline
            stroke='rgba(255, 255, 255, 0.3)'
            points={reverse ? `0, 2.5 ${width}, 2.5` : `2.5, 0 2.5, ${height}`}
          />
          <polyline
            className='bold-line'
            stroke='rgba(255, 255, 255, 0.3)'
            strokeWidth='3'
            strokeDasharray='20, 80'
            strokeDashoffset='-30'
            points={reverse ? `0, 2.5 ${width}, 2.5` : `2.5, 0 2.5, ${height}`}
          />
        </svg>
      </div>
    </div>
  )
}

Decoration.propTypes = {
  reverse: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

// 指定 props 的默认值：
Decoration.defaultProps = {
  reverse: false
}

export default Decoration
