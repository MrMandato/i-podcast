
import { useEffect } from 'react'
import { useSpinner } from '../useSpinner'
import { useNavigation } from 'react-router-dom'


export const useHandlerSpinner = () => {
  const [isLoading, setIsLoading] = useSpinner()
  const { state } = useNavigation()

  useEffect(() => {

    setTimeout(() => {
      if (state === 'idle') {
        setIsLoading(false)
      }
    }, 300)

    return () => {
      setIsLoading(true)
    }
  }, [state])
  return [isLoading]
}
