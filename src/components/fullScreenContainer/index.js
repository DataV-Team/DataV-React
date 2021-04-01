import React, { useLayoutEffect, forwardRef } from 'react'

import PropTypes from 'prop-types'

import useAutoResize from '../../use/autoResize'

import './style.less'

const FullScreenContainer = forwardRef(({ children, className, style }, ref) => {
  const { domRef } = useAutoResize(ref)
  const [size, setSize] = useState({})

  const onChange = ({ target }) => setSize({
    width: target.innerWidth,
    height: target.innerHeight,
  })

  useEffect(() => {
    window.addEventListener('resize', onChange)
    return () => window.removeEventListener('resize', onChange)
  }, [])

  useLayoutEffect(() => {
    Object.assign(domRef.current.style, {
      width: `${size.width}px`,
      height: `${size.height}px`
    })

    domRef.current.style.transform = `scale(${document.body.clientWidth /
      size.width})`
  }, [size])

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
