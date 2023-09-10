import { useCallback } from 'react'
import { List } from "../list"
import { EmptyStateList } from '../emptyStateList'
import { EpisodeItem } from '../episodeItem'
import PropTypes from 'prop-types'

export const EpisodesList = ({ episodesElements = [] }) => {
  const getId = useCallback(
    (element) => element.trackId,
    []
  )

  return (
    <section className='episodes'>
      <div className='episodes__header'>
        <span>title</span>
        <span>date</span>
        <span>duration</span>
      </div>
      <List
        elements={episodesElements}
        EmptyStateComponent={EmptyStateList}
        ItemComponent={EpisodeItem}
        getId={getId}
      />
    </section>
  )
}

EpisodesList.propTypes = {
  episodesElements: PropTypes.array
}