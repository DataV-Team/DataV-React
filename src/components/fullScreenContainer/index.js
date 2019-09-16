import React, { useState } from 'react'

import PropTypes from 'prop-types'

import useAutoResize from '../../use/autoResize'

import './style.less'

const FullScreenContainer = ({ children, className, style }) => {
  const { domRef } = useAutoResize(afterAutoResizeMixinInit, () =>
    setAppScale(allWidth)
  )

  const [{ allWidth, ready }, setState] = useState({
    allWidth: 0,
    ready: false
  })

  function afterAutoResizeMixinInit() {
    const { width, height } = window.screen

    Object.assign(domRef.current.style, {
      width: `${width}px`,
      height: `${height}px`
    })

    setAppScale(width)

    setState({ allWidth: width, ready: true })
  }

  const setAppScale = allWidth =>
    (domRef.current.style.transform = `scale(${document.body.clientWidth /
      allWidth})`)

  return (
    <div
      id='dv-full-screen-container'
      className={className}
      style={style}
      ref={domRef}
    >
      {ready && children}
    </div>
  )
}

FullScreenContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
}

export default FullScreenContainer
