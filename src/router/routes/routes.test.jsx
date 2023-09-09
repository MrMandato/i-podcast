import routes from './routes'
describe('routes', () => {

  test('should include root route', () => {
    expect(routes.find(route => route.path === '/')).toBeTruthy()
  })
})