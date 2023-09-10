import ReactDOM from 'react-dom/client'
import { act } from "react-dom/test-utils"
import { PodcastProvider } from './PodcastProvider'


describe('PodcastProvider', () => {
  const container = document.createElement('div')
  beforeEach(() => {

    document.body.replaceChildren(container)
  })
  const render = (component) =>
    act(() => ReactDOM.createRoot(container).render(component))

  test('renders PodcastProvider component', () => {
    const testComponent = () => (
      <PodcastProvider>
        <div>Test Component</div>
      </PodcastProvider>
    );

    render(testComponent())

    expect(document.body.textContent).toContain("Test Component")
  })

})
