import { element, initializeReactContainer, render } from "../../../test/reactTestUtils";
import { List } from './List'

describe('List', () => {
  let ItemComponent = null
  beforeEach(() => {
    initializeReactContainer()
    // eslint-disable-next-line react/display-name, react/prop-types
    ItemComponent = ({ item }) => <p>{item}</p>
  })


  test('should render List Component with ul and li element', () => {
    const list = [{ item: 'test' }]

    render(<List elements={list} ItemComponent={ItemComponent} />)
    expect(element('ul>li')).not.toBeNull()
  })

  test('should renders an li  for each element', () => {
    const list = [{ item1: 'test1' }, { item1: 'test1' }]
    render(<List elements={list} ItemComponent={ItemComponent} />)
    expect(document.querySelectorAll('ul>li')).toHaveLength(2)
  })

  test('should render default empty state', () => {
    const defaultText = 'list is empty'
    render(<List />)
    expect(document.body.textContent).toContain(defaultText)
  })

  test('should render empty state component', () => {
    const defaultText = () => <p>Empty state component</p>
    render(<List EmptyStateComponent={defaultText} />)
    expect(document.body.textContent).toContain('Empty state component')
  })
})