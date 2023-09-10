import { Router } from "./router"
import { Header } from './components/header'
import { PodcastProvider } from "./contexts/podcast"
import './app.css'

function App() {
  return (
    <PodcastProvider>
      <div className="i-podcast">
        <div className="colors">
          <div className="blackout">Blacout</div>
          <div className="submarine">submarine</div>
          <div className="berry-fancy">blackberry</div>
          <div className="amber">amber</div>
          <div className="amber-reduce">amber-reduce</div>
          <div className="amber-neutro">amber-neutro</div>
          <div className="reduced-gray">reduced-gray</div>
          <div className="dark-gray">dark-gray</div>
        </div>
        <Header />
        <Router />
      </div>
    </PodcastProvider>
  )
}

export default App
