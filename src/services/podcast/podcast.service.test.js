import { getPodcasts, getEpisodes } from './podcast.service'

test('getPodcasts should return a list of podcast elements', async () => {
  const mockResponse = {
    feed: {
      entry: [{ id: 1, title: 'Podcast 1' }, { id: 2, title: 'Podcast 2' }]
    }
  }

  window.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse)
  })

  const podcasts = await getPodcasts()

  expect(fetch).toHaveBeenCalledWith(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  )

  expect(podcasts).toEqual(mockResponse.feed.entry)
})

test('getEpisodes should return a list of episode elements', async () => {
  const podcastId = 123
  const mockResponse = {
    results: [
      { id: 1, title: 'Episode 1' },
      { id: 2, title: 'Episode 2' }
    ]
  }

  window.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse)
  })

  const episodes = await getEpisodes(podcastId)

  expect(fetch).toHaveBeenCalledWith(
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
  )

  expect(episodes).toEqual(mockResponse.results.slice(1))
})
