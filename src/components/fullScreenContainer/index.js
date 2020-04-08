import React, { useLayoutEffect, forwardRef } from 'react'

import PropTypes from 'prop-types'

import useAutoResize from '../../use/autoResize'

import './style.less'

const FullScreenContainer = forwardRef(({ children, className, style }, ref) => {
  const { domRef } = useAutoResize(ref)

  useLayoutEffect(() => {
    const { width, height } = window.screen

    Object.assign(domRef.current.style, {
      width: `${width}px`,
      height: `${height}px`
    })

    domRef.current.style.transform = `scale(${document.body.clientWidth /
      width})`
  })

  return (
    <div
      id='dv-full-screen-container'
      className={className}
      style={style}
      ref={domRef}
    >
      {children}
    </div>
  )
})

FullScreenContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
}

export default FullScreenContainer
