import React from 'react'

import PropTypes from 'prop-types'

import useAutoResize from '../../use/autoResize'

import './style.less'

const BorderBox = ({ children, reverse = false }) => {
  const { width, height, domRef } = useAutoResize()

  return (
    <div className='dv-border-box-4' ref={domRef}>
      <svg
        className={`dv-border-svg-container ${reverse && 'dv-reverse'}`}
        width={width}
        height={height}
      >
        <polyline
          className='dv-bb4-line-1'
          points={`145, ${height - 5} 40, ${height - 5} 10, ${height - 35}
          10, 40 40, 5 150, 5 170, 20 ${width - 15}, 20`}
        />
        <polyline
          className='dv-bb4-line-2'
          points={`245, ${height - 1} 36, ${height - 1} 14, ${height - 23}
          14, ${height - 100}`}
        />
        <polyline
          className='dv-bb4-line-3'
          points={`7, ${height - 40} 7, ${height - 75}`}
        />
        <polyline className='dv-bb4-line-4' points={`28, 24 13, 41 13, 64`} />
        <polyline className='dv-bb4-line-5' points={`5, 45 5, 140`} />
        <polyline className='dv-bb4-line-6' points={`14, 75 14, 180`} />
        <polyline
          className='dv-bb4-line-7'
          points={`55, 11 147, 11 167, 26 250, 26`}
        />
        <polyline className='dv-bb4-line-8' points={`158, 5 173, 16`} />
        <polyline
          className='dv-bb4-line-9'
          points={`200, 17 ${width - 10}, 17`}
        />
        <polyline
          className='dv-bb4-line-10'
          points={`385, 17 ${width - 10}, 17`}
        />
      </svg>

      <div className='border-box-content'>{children}</div>
    </div>
  )
}

BorderBox.propTypes = {
  children: PropTypes.node,
  reverse: PropTypes.bool
}

// 指定 props 的默认值：
BorderBox.defaultProps = {
  reverse: false
}

export default BorderBox
