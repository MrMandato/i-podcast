import { Router } from "./router"
import { Header } from './components/header'
import { Spinner } from './components/spinner'

import './app.css'
import { useSpinner } from "./hooks/useSpinner"
import { useEffect } from "react"

function App() {
  const [isLoading] = useSpinner()
  useEffect(() => { console.log('cambio app', isLoading) }, [isLoading])
  console.log('app is loading', isLoading)
  return (
    <>
      {isLoading && < Spinner />}
      <div className="i-podcast">
        <Header />
        <Router />
      </div>
    </>

  )
}

export default App
