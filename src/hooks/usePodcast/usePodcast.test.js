// eslint-disable-next-line no-unused-vars
import React from 'react'
import { usePodcast } from './usePodcast';
import { renderHook } from '@testing-library/react-hooks';
import { podcastContext } from '../../contexts/podcast';

describe('usePodcast', () => {
  test('usePodcast should return podcastDetail and setpodcastDetail from podcastContext', () => {
    const podcastDetailValue = {
      title: 'Test Podcast',
      author: 'Test Author',
      duration: '30 minutes',
    };

    const wrapper = ({ children }) => (
      <podcastContext.Provider value={{ podcastDetail: podcastDetailValue }}>
        {children}
      </podcastContext.Provider>
    );

    const { result } = renderHook(() => usePodcast(), { wrapper });

    expect(result.current.podcastDetail).toEqual(podcastDetailValue);
  })
})


