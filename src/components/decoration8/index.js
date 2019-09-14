import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

import useAutoResize from '../../use/autoResize'

import './style.less'

const Decoration = ({ reverse = false }) => {
  const { width, height, domRef } = useAutoResize()

  const xPos = pos => (!reverse ? pos : width - pos)

  const [pointsOne, pointsTwo, pointsThree] = useMemo(
    () => [
      `${xPos(0)}, 0 ${xPos(30)}, ${height / 2}`,
      `${xPos(20)}, 0 ${xPos(50)}, ${height / 2} ${xPos(width)}, ${height / 2}`,
      `${xPos(0)}, ${height - 3}, ${xPos(200)}, ${height - 3}`
    ],
    [reverse, width, height]
  )

  return (
    <div className='dv-decoration-8' ref={domRef}>
      <svg width={width} height={height}>
        <polyline
          stroke='#3f96a5'
          strokeWidth='2'
          fill='transparent'
          points={pointsOne}
        />

        <polyline
          stroke='#3f96a5'
          strokeWidth='2'
          fill='transparent'
          points={pointsTwo}
        />

        <polyline
          stroke='#3f96a5'
          fill='transparent'
          strokeWidth='3'
          points={pointsThree}
        />
      </svg>
    </div>
  )
}

Decoration.propTypes = {
  reverse: PropTypes.bool
}

// 指定 props 的默认值：
Decoration.defaultProps = {
  reverse: false
}

export default Decoration
