import { Router } from "./router"
import { Header } from './components/header'
import { Spinner } from './components/spinner'

import './app.css'
import { useSpinner } from "./hooks/useSpinner"

function App() {
  const [isLoading] = useSpinner()
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
