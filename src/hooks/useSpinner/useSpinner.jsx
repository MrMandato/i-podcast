
import { useContext } from 'react'
import { uiStateContext } from '../../contexts/ui-state'

export const useSpinner = () => {
  const data = useContext(uiStateContext)
  const { isLoading, setIsLoading } = data
  return [isLoading, setIsLoading]
}
