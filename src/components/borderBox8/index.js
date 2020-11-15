import React, { useState, useMemo, forwardRef } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'
import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import useAutoResize from '../../use/autoResize'

import { uuid } from '../../util'

import './style.less'

const defaultColor = ['#235fa7', '#4fd2dd']

const BorderBox = forwardRef((
  {
    children,
    className,
    style,
    color = [],
    dur = 3,
    backgroundColor = 'transparent',
    reverse = false
  },
  ref
) => {
  const { width, height, domRef } = useAutoResize(ref)

  const [{ path, gradient, mask }] = useState(() => {
    const id = uuid()

    return {
      path: `border-box-8-path-${id}`,
      gradient: `border-box-8-gradient-${id}`,
      mask: `border-box-8-mask-${id}`
    }
  })

  const pathD = useMemo(() =>
    reverse
      ? `M 2.5, 2.5 L 2.5, ${height - 2.5} L ${width - 2.5}, ${height - 2.5} L ${width - 2.5}, 2.5 L 2.5, 2.5`
      : `M2.5, 2.5 L${width - 2.5}, 2.5 L${width - 2.5}, ${height - 2.5} L2.5, ${height - 2.5} L2.5, 2.5`
  , [width, height, reverse])

  const mergedColor = useMemo(() => deepMerge(deepClone(defaultColor, true), color || []), [color])

  const length = useMemo(() => (width + height - 5) * 2, [width, height])

  const classNames = useMemo(() => classnames('dv-border-box-8', className), [
    className
  ])

  return (
    <div className={classNames} style={style} ref={domRef}>
      <svg className='dv-border-svg-container' width={width} height={height}>
        <defs>
          <path id={path} d={pathD} fill='transparent' />
          <radialGradient id={gradient} cx='50%' cy='50%' r='50%'>
            <stop offset='0%' stopColor='#fff' stopOpacity='1' />
            <stop offset='100%' stopColor='#fff' stopOpacity='0' />
          </radialGradient>

          <mask id={mask}>
            <circle cx='0' cy='0' r='150' fill={`url(#${gradient})`}>
              <animateMotion dur={`${dur}s`} path={pathD} rotate='auto' repeatCount='indefinite' />
            </circle>
          </mask>
        </defs>

        <polygon fill={backgroundColor} points={`5, 5 ${width - 5}, 5 ${width - 5} ${height - 5} 5, ${height - 5}`} />

        <use stroke={mergedColor[0]} strokeWidth='1' href={`#${path}`} />

        <use
          stroke={mergedColor[1]}
          strokeWidth='3'
          href={`#${path}`}
          mask={`url(#${mask})`}
        >
          <animate
            attributeName='stroke-dasharray'
            from={`0, ${length}`}
            to={`${length}, 0`}
            dur={`${dur}s`}
            repeatCount='indefinite'
          />
        </use>
      </svg>

      <div className='border-box-content'>{children}</div>
    </div>
  )
})

BorderBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.array,
  dur: PropTypes.number,
  backgroundColor: PropTypes.string,
  reverse: PropTypes.bool
}

export default BorderBox
