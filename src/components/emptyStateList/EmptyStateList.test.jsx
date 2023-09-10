import { initializeReactContainer, render } from "../../../test/reactTestUtils";
import { EmptyStateList } from "./EmptyStateList"

describe('EmptyStateList', () => {
  beforeEach(() => {
    initializeReactContainer()
  })
  test('reder', () => {
    const message = 'this is a empty state message'
    render(<EmptyStateList message={message} />)
    expect(document.body.textContent).toContain(message)
  })
})