import { element, initializeReactContainer, render } from "../../../test/reactTestUtils";
import { PodcastPage } from './PodcastPage'
describe('podcastPage', () => {
  beforeEach(() => {
    initializeReactContainer()
  })

  test('should render', () => {
    render(<PodcastPage />)
    expect(element('.podcast-page')).toBeTruthy()
  })
})
