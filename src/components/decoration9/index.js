import React, { useState, useRef, useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import useAutoResize from '../../use/autoResize'

import './style.less'

const svgWH = [100, 100]

const Decoration = ({ children, className, style }) => {
  const { width, height, domRef } = useAutoResize(calcScale, calcScale)

  const [svgScale, setSvgScale] = useState([1, 1])

  const polygonIdRef = useRef(`decoration-9-polygon-${Date.now()}`)

  function calcScale() {
    const [w, h] = svgWH

    setSvgScale([width / w, height / h])
  }

  const classNames = useMemo(() => classnames('dv-decoration-9', className), [
    className
  ])

  return (
    <div className={classNames} style={style} ref={domRef}>
      <svg
        width={`${svgWH[0]}px`}
        height={`${svgWH[1]}px`}
        style={{ transform: `scale(${svgScale[0]},${svgScale[1]})` }}
      >
        <defs>
          <polygon
            id={polygonIdRef.current}
            points='15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5'
          />
        </defs>

        <circle
          cx='50'
          cy='50'
          r='45'
          fill='transparent'
          stroke='rgba(3, 166, 224, 0.5)'
          strokeWidth='10'
          strokeDasharray='80, 100, 30, 100'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            values='0 50 50;360 50 50'
            dur='3s'
            repeatCount='indefinite'
          />
        </circle>

        <circle
          cx='50'
          cy='50'
          r='45'
          fill='transparent'
          stroke='rgba(3, 166, 224, 0.8)'
          strokeWidth='6'
          strokeDasharray='50, 66, 100, 66'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            values='0 50 50;-360 50 50'
            dur='3s'
            repeatCount='indefinite'
          />
        </circle>

        <circle
          cx='50'
          cy='50'
          r='38'
          fill='transparent'
          stroke='rgba(3, 166, 224, 0.2)'
          strokeWidth='1'
          strokeDasharray='5, 1'
        />
        {new Array(20).fill(0).map((foo, i) => (
          <use
            key={i}
            href={`#${polygonIdRef.current}`}
            stroke='rgba(3, 166, 224, 0.6)'
            fill={
              Math.random() > 0.4 ? 'transparent' : 'rgba(3, 166, 224, 0.8)'
            }
          >
            <animateTransform
              attributeName='transform'
              type='rotate'
              values='0 50 50;360 50 50'
              dur='3s'
              begin={`${i * 0.15}s`}
              repeatCount='indefinite'
            />
          </use>
        ))}

        <circle
          cx='50'
          cy='50'
          r='26'
          fill='transparent'
          stroke='rgba(3, 166, 224, 0.2)'
          strokeWidth='1'
          strokeDasharray='5, 1'
        />
      </svg>

      {children}
    </div>
  )
}

Decoration.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Decoration
