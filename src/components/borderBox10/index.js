import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import './style.less'

const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

const BorderBox = ({ children, className, style }) => {
  const classNames = useMemo(() => classnames('dv-border-box-10', className), [
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
            fill='#d3e1f8'
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
  style: PropTypes.object
}

export default BorderBox
