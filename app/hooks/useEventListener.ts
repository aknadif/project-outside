import {useEffect, useRef} from 'react'

function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef(handler)

  useEffect(() => {
    // If handler changes, update the current handler
    if (savedHandler.current !== handler) {
      savedHandler.current = handler
    }

    if (element) {
      element.addEventListener(eventName, savedHandler.current)
    }

    return () => {
      if (element) element.removeEventListener(eventName, savedHandler.current)
    }
  }, [eventName, element, handler])
}

export default useEventListener
