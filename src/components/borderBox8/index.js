import React, { useState, useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import useAutoResize from '../../use/autoResize'

import './style.less'

const BorderBox = ({ children, className, style }) => {
  const { width, height, domRef } = useAutoResize()

  const [{ path, gradient, mask }] = useState(() => {
    const timestamp = Date.now()

    return {
      path: `border-box-8-path-${timestamp}`,
      gradient: `border-box-8-gradient-${timestamp}`,
      mask: `border-box-8-mask-${timestamp}`
    }
  })

  const length = useMemo(() => (width + height - 5) * 2, [width, height])

  const classNames = useMemo(
    () => classnames('dv-border-box-8', className),
    className
  )

  return (
    <div className={classNames} style={style} ref={domRef}>
      <svg className='dv-svg-container' width={width} height={height}>
        <defs>
          <path
            id={path}
            d={`M2.5, 2.5 L${width - 2.5}, 2.5 L${width - 2.5}, ${height -
              2.5} L2.5, ${height - 2.5} L2.5, 2.5`}
            fill='transparent'
          />
          <radialGradient id={gradient} cx='50%' cy='50%' r='50%'>
            <stop offset='0%' stopColor='#fff' stopOpacity='1' />
            <stop offset='100%' stopColor='#fff' stopOpacity='0' />
          </radialGradient>

          <mask id={mask}>
            <circle cx='0' cy='0' r='150' fill={`url(#${gradient})`}>
              <animateMotion
                dur='3s'
                path={`M2.5, 2.5 L${width - 2.5}, 2.5 L${width -
                  2.5}, ${height - 2.5} L2.5, ${height - 2.5} L2.5, 2.5`}
                rotate='auto'
                repeatCount='indefinite'
              />
            </circle>
          </mask>
        </defs>

        <use stroke='#235fa7' strokeWidth='1' href={`#${path}`} />

        <use
          stroke='#4fd2dd'
          strokeWidth='3'
          href={`#${path}`}
          mask={`url(#${mask})`}
        >
          <animate
            attributeName='stroke-dasharray'
            from={`0, ${length}`}
            to={`${length}, 0`}
            dur='3s'
            repeatCount='indefinite'
          />
        </use>
      </svg>

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
