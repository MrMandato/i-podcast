import { Router } from "./router"
import { Header } from './components/header'
import { PodcastProvider } from "./contexts/podcast"

function App() {

  return (
    <PodcastProvider>
      <div className="i-podcast">
        <Header />
        <Router />
      </div>
    </PodcastProvider>
  )
}

export default App
