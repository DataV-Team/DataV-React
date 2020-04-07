import { useState, useEffect, useRef } from 'react'
import { debounce, observerDomResize } from '../util/index'

export default function useAutoResize() {
  const [state, setState] = useState({ width: 0, height: 0 })

  const domRef = useRef(null)

  useEffect(() => {
    const debounceSetWHFun = debounce(() => {
      const { clientWidth, clientHeight } = domRef.current

      setState({ width: clientWidth, height: clientHeight })
    }, 100)

    debounceSetWHFun()

    const domObserver = observerDomResize(domRef.current, debounceSetWHFun)

    window.addEventListener('resize', debounceSetWHFun)

    return () => {
      domObserver.disconnect()
      domObserver.takeRecords()
  
      window.removeEventListener('resize', debounceSetWHFun)
    }
  }, [])

  return { ...state, domRef }
}
