import {useCallback, useLayoutEffect, useState} from 'react'
import useEventListener from './useEventListener'

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0
  })

  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
  }, [])

  useEventListener('resize', handleResize)

  // Run at least once when it loads...
  useLayoutEffect(() => {
    handleResize()
  }, [])

  return windowDimensions
}
