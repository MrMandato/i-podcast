import { podcastContext } from './podcast.context';

describe('podcast context', () => {
  test('podcastContext should be a valid React context object', () => {
    expect(podcastContext.Provider).toBeDefined();
    expect(podcastContext.Consumer).toBeDefined();
  });
})
