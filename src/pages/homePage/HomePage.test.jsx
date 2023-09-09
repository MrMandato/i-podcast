import { element, initializeReactContainer, render } from "../../../test/reactTestUtils";
import { HomePage } from './HomePage'
describe('homePage', () => {
  beforeEach(() => {
    initializeReactContainer()
  })

  test('should render', () => {
    render(<HomePage />)
    expect(element('.homepage')).toBeTruthy()
  })
})
