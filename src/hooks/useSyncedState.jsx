import { useState, useEffect } from "react"

export function useSyncedState(key, initialValue) {
  const [value, setValue] = useState(() => localStorage.getItem(key) || initialValue)
  useEffect(() => {
    localStorage.setItem(key, value)
  }, [key, value])
  return [value, setValue]
}
