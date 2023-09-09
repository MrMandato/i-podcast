import PropTypes from 'prop-types'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from '../routes'

const router = createBrowserRouter(routes)

export const Router = ({ children }) => {
  return (
    <RouterProvider router={router}>
      {children}
    </RouterProvider>
  )
}

Router.propTypes = {
  children: PropTypes.node
}
