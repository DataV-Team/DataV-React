import React from 'react'

import PropTypes from 'prop-types'

import useAutoResize from '../../use/autoResize'

import './style.less'

const BorderBox = ({ children }) => {
  const { width, height, domRef } = useAutoResize()

  return (
    <div className='dv-border-box-3' ref={domRef}>
      <svg className='dv-border-svg-container' width={width} height={height}>
        <polyline
          className='dv-bb3-line1'
          points={`4, 4 ${width - 22} ,4 ${width - 22}, ${height -
            22} 4, ${height - 22} 4, 4`}
        />
        <polyline
          className='dv-bb3-line2'
          points={`10, 10 ${width - 16}, 10 ${width - 16}, ${height -
            16} 10, ${height - 16} 10, 10`}
        />
        <polyline
          className='dv-bb3-line2'
          points={`16, 16 ${width - 10}, 16 ${width - 10}, ${height -
            10} 16, ${height - 10} 16, 16`}
        />
        <polyline
          className='dv-bb3-line2'
          points={`22, 22 ${width - 4}, 22 ${width - 4}, ${height -
            4} 22, ${height - 4} 22, 22`}
        />
      </svg>

      <div className='border-box-content'>{children}</div>
    </div>
  )
}

BorderBox.propTypes = {
  children: PropTypes.node
}

export default BorderBox
