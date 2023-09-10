import { element, initializeReactContainer, render, form } from "../../../test/reactTestUtils"
import { SearchField } from './SearchField'

describe('SearchField', () => {
  beforeEach(() => {
    initializeReactContainer()
  })

  test('should render a form', () => {
    render(<SearchField />)
    expect(element('form')).not.toBeNull()
  })

  test('should render search input as a text box', () => {
    render(<SearchField />)
    const field = form().elements.search
    expect(field).not.toBeNull()
    expect(field.tagName).toEqual("INPUT")
    expect(field.type).toEqual('text')
    expect(field.value).toEqual('')
  })
})