import { useState } from 'react'

export const useInput = (initialState) => {
  const [value, setvalue] = useState(initialState)

  const handlerOnchange = (e) => {
    setvalue(e.target.value)
  }
  return [{
    value,
    onChange: handlerOnchange
  }]
}
