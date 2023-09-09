import { element, initializeReactContainer, render } from "../../../test/reactTestUtils";
import { PodcastLayout } from './PodcastLayout'
describe('podcastPage', () => {
  beforeEach(() => {
    initializeReactContainer()
  })

  test('should render', () => {
    render(<PodcastLayout />)
    expect(element('.podcast')).toBeTruthy()
  })
})