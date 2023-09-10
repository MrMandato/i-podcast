import { useCallback } from 'react'
import { List } from "../list"
import { EmptyStateList } from '../emptyStateList'
import { EpisodeItem } from '../episodeItem'
import PropTypes from 'prop-types'

import './episodesList.css'

export const EpisodesList = ({ episodesElements = [] }) => {
  const getId = useCallback(
    (element) => element.trackId,
    []
  )

  return (
    <section className='episodes card'>
      <div className='episodes__counter'>
        <span className='episodes__counter--label'>Episodes: {episodesElements.length}</span>
      </div>
      <div className='episodes__header'>
        <span className='episodes__header--title'>title</span>
        <span className='episodes__header--date'>date</span>
        <span className='episodes__header--duration'>duration</span>
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