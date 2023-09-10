import { useContext } from 'react'
import { podcastContext } from '../../contexts/podcast'
export const usePodcast = () => useContext(podcastContext)