import React from 'react'

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import routes from './config/routes'
import './util/rem'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map(
            (route, index) =>
              <Route key={index} {...route} />
          )
        }
      </Routes>
    </BrowserRouter>
  )
}
