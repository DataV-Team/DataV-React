import React, { useMemo, forwardRef } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import { deepMerge } from '@jiaminghi/charts/lib/util'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import useAutoResize from '../../use/autoResize'

import './style.less'

const defaultColor = ['#3f96a5', '#3f96a5']

const Decoration = forwardRef(({ reverse = false, className, style, color = [] }, ref) => {
  const { width, height, domRef } = useAutoResize(ref)

  const xPos = pos => (!reverse ? pos : width - pos)

  const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])

  const [pointsOne, pointsTwo, pointsThree] = useMemo(
    () => [
      `${xPos(0)}, 0 ${xPos(30)}, ${height / 2}`,
      `${xPos(20)}, 0 ${xPos(50)}, ${height / 2} ${xPos(width)}, ${height / 2}`,
      `${xPos(0)}, ${height - 3}, ${xPos(200)}, ${height - 3}`
    ],
    [reverse, width, height]
  )

  const classNames = useMemo(() => classnames('dv-decoration-8', className), [
    className
  ])

  return (
    <div className={classNames} style={style} ref={domRef}>
      <svg width={width} height={height}>
        <polyline
          stroke={mergedColor[0]}
          strokeWidth='2'
          fill='transparent'
          points={pointsOne}
        />

        <polyline
          stroke={mergedColor[0]}
          strokeWidth='2'
          fill='transparent'
          points={pointsTwo}
        />

        <polyline
          stroke={mergedColor[1]}
          fill='transparent'
          strokeWidth='3'
          points={pointsThree}
        />
      </svg>
    </div>
  )
})

Decoration.propTypes = {
  reverse: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.array
}

// 指定 props 的默认值：
Decoration.defaultProps = {
  reverse: false
}

export default Decoration
