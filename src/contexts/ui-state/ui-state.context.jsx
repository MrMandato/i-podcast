import { createContext } from "react"
const initialState = {
  isLoading: true
}
export const uiStateContext = createContext(initialState)