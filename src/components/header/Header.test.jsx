import { element, initializeReactContainer, render } from "../../../test/reactTestUtils";
import { Header } from './Header'
describe('homePage', () => {
  beforeEach(() => {
    initializeReactContainer()
  })

  test('should render', () => {
    render(<Header />)
    expect(element('.i-podcast__header')).toBeTruthy()
  })
})
