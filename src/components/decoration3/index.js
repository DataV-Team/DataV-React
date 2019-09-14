import React, { useState } from 'react'

import useAutoResize from '../../use/autoResize'

import './style.less'

const pointSideLength = 7

const svgWH = [300, 35]

const rowNum = 2

const rowPoints = 25

const halfPointSideLength = pointSideLength / 2

function getPoints() {
  const [w, h] = svgWH

  const horizontalGap = w / (rowPoints + 1)
  const verticalGap = h / (rowNum + 1)

  let points = new Array(rowNum)
    .fill(0)
    .map((foo, i) =>
      new Array(rowPoints)
        .fill(0)
        .map((foo, j) => [horizontalGap * (j + 1), verticalGap * (i + 1)])
    )

  return points.reduce((all, item) => [...all, ...item], [])
}

export default () => {
  const { width, height, domRef } = useAutoResize(calcSVGData, calcSVGData)

  const [{ svgScale, points }, setState] = useState({
    svgScale: [1, 1],
    points: []
  })

  function calcSVGData() {
    setState({
      points: getPoints(),
      svgScale: [width / svgWH[0], height / svgWH[1]]
    })
  }

  return (
    <div className='dv-decoration-3' ref={domRef}>
      <svg
        width={`${svgWH[0]}px`}
        height={`${svgWH[1]}px`}
        style={`transform:scale(${svgScale[0]},${svgScale[1]});`}
      >
        {points.map((point, i) => (
          <rect
            key={i}
            fill='#7acaec'
            x={point[0] - halfPointSideLength}
            y={point[1] - halfPointSideLength}
            width={pointSideLength}
            height={pointSideLength}
          >
            {Math.random() > 0.6 && (
              <animate
                attributeName='fill'
                values='#7acaec;transparent'
                dur={Math.random() + 1 + 's'}
                begin={Math.random() * 2}
                repeatCount='indefinite'
              />
            )}
          </rect>
        ))}
      </svg>
    </div>
  )
}
