import { useState, useEffect } from 'react'

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    if (!value) return

    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debounceValue
}
