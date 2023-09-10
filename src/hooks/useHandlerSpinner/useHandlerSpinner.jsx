
import { useEffect } from 'react'
import { useSpinner } from '../useSpinner'

export const useHandlerSpinner = () => {
  const [isLoading, setIsLoading] = useSpinner()
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 300);

    return () => {
      setIsLoading(true)
    }
  }, [])
  return [isLoading]
}
