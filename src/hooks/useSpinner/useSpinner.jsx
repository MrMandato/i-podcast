
import { useContext } from 'react'
import { uiStateContext } from '../../contexts/ui-state'

export const useSpinner = () => {
  const data = useContext(uiStateContext)
  console.log('data', data)
  const { isLoading, setIsLoading } = data
  return [isLoading, setIsLoading]
}
