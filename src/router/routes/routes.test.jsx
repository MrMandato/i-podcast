import routes from './routes'
describe('routes', () => {
  describe('home route', () => {
    let homeRoute
    beforeEach(() => {
      homeRoute = routes.find(route => route.path === '/')
    })
    test('define home route to be defined', () => {
      expect(homeRoute).toBeDefined()
    })

    test('should have an associated page', () => {
      expect(homeRoute.element).toBeDefined()

    })
  })

  describe('podcast route', () => {
    let podcastRoute
    beforeEach(() => {
      podcastRoute = routes.find(route => route.path === '/podcast/:podcastId')
    })
    test('define podcast route to be defined', () => {
      expect(podcastRoute).toBeDefined()
    })

    test('should have an associated page', () => {
      expect(podcastRoute.element).toBeDefined()
    })

    describe('episode route', () => {
      let episodeRoute
      beforeEach(() => {
        episodeRoute = podcastRoute?.children.find(route => route.path === 'episode/:episodeId')
      })
      test('define podcast route to be defined', () => {
        expect(episodeRoute).toBeDefined()
      })

      test('should have an associated page', () => {
        expect(episodeRoute.element).toBeDefined()
      })

    })
  })

})