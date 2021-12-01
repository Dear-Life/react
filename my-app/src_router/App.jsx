import React, { Component } from 'react'

import {
  NavLink,
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to="/about">About</NavLink>

        <Routes>
          <Route path="/home/*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<h1>404</h1>} />
          <Route path="/" element={<Navigate replace to="/about" />} />
          <Route path="/*" element={<Navigate replace to="/404" />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
