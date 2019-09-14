import React from 'react'

import PropTypes from 'prop-types'

import './style.less'

const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']

const BorderBox = ({ children }) => (
  <div className='dv-border-box-10'>
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

BorderBox.propTypes = {
  children: PropTypes.node
}

export default BorderBox
