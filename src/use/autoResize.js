import { useState, useCallback, useEffect, useRef } from 'react'
import { debounce, observerDomResize } from '../util/index'

export default function useAutoResize() {
  const [state, setState] = useState({ width: 0, height: 0 })

  const domRef = useRef(null)
  const domObserverRef = useRef(null)
  const debounceSetWHFunRef = useRef(null)

  const setWH = useCallback(() => {
    const { clientWidth, clientHeight } = domRef.current

    setState({ width: clientWidth, height: clientHeight })
  }, [])

  const bindDomResizeCallback = useCallback(() => {
    domObserverRef.current = observerDomResize(
      domRef.current,
      debounceSetWHFunRef.current
    )

    window.addEventListener('resize', debounceSetWHFunRef.current)
  }, [])

  const unbindDomResizeCallback = useCallback(() => {
    const { current: domObserver } = domObserverRef

    domObserver.disconnect()
    domObserver.takeRecords()
    domObserverRef.current = null

    window.removeEventListener('resize', debounceSetWHFunRef.current)
  }, [])

  useEffect(() => {
    debounceSetWHFunRef.current = debounce(setWH, 100)

    debounceSetWHFunRef.current()

    bindDomResizeCallback()

    // 组件销毁时，清除事件
    return unbindDomResizeCallback
  }, [])

  return { ...state, domRef }
}
