import { element, initializeReactContainer, render } from "../../../test/reactTestUtils";
import { EpisodeLayout } from './EpisodeLayout'
describe('EpisodeLayout', () => {
  beforeEach(() => {
    initializeReactContainer()
  })

  test('should render', () => {
    render(<EpisodeLayout />)
    expect(element('.episode')).toBeTruthy()
  })
})
