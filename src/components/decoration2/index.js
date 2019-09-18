import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import useAutoResize from '../../use/autoResize'

import './style.less'

const Decoration = ({ reverse = false, className, style }) => {
  const { width, height, domRef } = useAutoResize()

  function calcSVGData() {
    return reverse
      ? { w: 1, h: height, x: width / 2, y: 0 }
      : { w: width, h: 1, x: 0, y: height / 2 }
  }

  const { x, y, w, h } = useMemo(calcSVGData, [reverse, width, height])

  const classNames = useMemo(() => classnames('dv-decoration-2', className), [
    className
  ])

  return (
    <div className={classNames} style={style} ref={domRef}>
      <svg width={`${width}px`} height={`${height}px`}>
        <rect x={x} y={y} width={w} height={h} fill='#3faacb'>
          <animate
            attributeName={reverse ? 'height' : 'width'}
            from='0'
            to={reverse ? height : width}
            dur='6s'
            calcMode='spline'
            keyTimes='0;1'
            keySplines='.42,0,.58,1'
            repeatCount='indefinite'
          />
        </rect>

        <rect x={x} y={y} width='1' height='1' fill='#fff'>
          <animate
            attributeName={reverse ? 'y' : 'x'}
            from='0'
            to={reverse ? height : width}
            dur='6s'
            calcMode='spline'
            keyTimes='0;1'
            keySplines='0.42,0,0.58,1'
            repeatCount='indefinite'
          />
        </rect>
      </svg>
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
