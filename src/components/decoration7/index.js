import React from 'react'

import PropTypes from 'prop-types'

import './style.less'

const Decoration = ({ children }) => {
  return (
    <div className='dv-decoration-7'>
      <svg width='21px' height='20px'>
        <polyline
          strokeWidth='4'
          fill='transparent'
          stroke='#1dc1f5'
          points='10, 0 19, 10 10, 20'
        />
        <polyline
          strokeWidth='2'
          fill='transparent'
          stroke='#1dc1f5'
          points='2, 0 11, 10 2, 20'
        />
      </svg>
      {children}
      <svg width='21px' height='20px'>
        <polyline
          strokeWidth='4'
          fill='transparent'
          stroke='#1dc1f5'
          points='11, 0 2, 10 11, 20'
        />
        <polyline
          strokeWidth='2'
          fill='transparent'
          stroke='#1dc1f5'
          points='19, 0 10, 10 19, 20'
        />
      </svg>
    </div>
  )
}

Decoration.propTypes = {
  children: PropTypes.node
}

export default Decoration
