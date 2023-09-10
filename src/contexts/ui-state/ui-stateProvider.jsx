import { useState } from 'react'
import PropTypes from 'prop-types'
import { uiStateContext } from './ui-state.context'

export const UiStateProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <uiStateContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </uiStateContext.Provider>
  )
}

UiStateProvider.propTypes = {
  children: PropTypes.node.isRequired
}
