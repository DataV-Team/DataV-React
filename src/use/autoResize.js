import { useState, useCallback, useEffect, useRef, useImperativeHandle } from 'react'
import { debounce, observerDomResize } from '../util/index'

export default function useAutoResize(ref) {
  const [state, setState] = useState({ width: 0, height: 0 })

  const domRef = useRef(null)

  const setWH = useCallback(() => {
    const { clientWidth, clientHeight } = domRef.current

    setState({ width: clientWidth, height: clientHeight })
  }, [])

  useImperativeHandle(ref, () => ({ setWH }), [])

  useEffect(() => {
    const debounceSetWHFun = debounce(setWH, 100)

    debounceSetWHFun()

    const domObserver = observerDomResize(domRef.current, debounceSetWHFun)

    window.addEventListener('resize', debounceSetWHFun)

    return () => {
      domObserver.disconnect()
      domObserver.takeRecords()

      window.removeEventListener('resize', debounceSetWHFun)
    }
  }, [])

  return { ...state, domRef, setWH }
}
