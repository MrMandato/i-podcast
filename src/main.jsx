import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PodcastProvider } from './contexts/podcast/PodcastProvider.jsx'
import { UiStateProvider } from './contexts/ui-state/ui-stateProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PodcastProvider>
      <UiStateProvider>
        <App />
      </UiStateProvider>
    </PodcastProvider>
  </React.StrictMode>,
)
