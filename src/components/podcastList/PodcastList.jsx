import { useCallback } from 'react'
import { List } from "../list"
import { EmptyStateList } from '../../components/emptyStateList'
import { PodcastItem } from '../podcastItem'
import PropTypes from 'prop-types'

import './podcastList.css'

export const PodcastList = ({ podcastElements = [] }) => {
  const getId = useCallback(
    (element) => element.id.attributes['im:id'],
    []
  )

  return (
    <div className='podcast-list'>
      <List
        elements={podcastElements}
        EmptyStateComponent={EmptyStateList}
        ItemComponent={PodcastItem}
        getId={getId}
        emptyStateMessage='podcast not found'
      />
    </div>
  )
}

PodcastList.propTypes = {
  podcastElements: PropTypes.array
}