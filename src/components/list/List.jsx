import PropTypes from 'prop-types'
import { isEmptyArray, generateId } from '../../utils/commons'


export const List = ({
  elements = [],
  ItemComponent,
  EmptyStateComponent,
  getId = generateId
}) => {
  if (isEmptyArray(elements) || !ItemComponent) {
    return (
      <>
        {EmptyStateComponent ? <EmptyStateComponent /> : <p>list is empty</p>}
      </>
    )
  }
  return (

    <ul>
      {
        elements.map(element => (
          <li key={getId(element)}>
            <ItemComponent {...element} />
          </li>
        ))
      }
    </ul>
  )
}

List.propTypes = {
  elements: PropTypes.array,
  ItemComponent: PropTypes.elementType,
  EmptyStateComponent: PropTypes.elementType,
  getId: PropTypes.func
}




