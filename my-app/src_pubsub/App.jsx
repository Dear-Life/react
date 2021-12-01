import React, { Component } from 'react'

import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  componentDidMount() {
    fetch(
      `https://api.github.com/search/users?q=react`
    ).then(v => v.json())
      .then(data => {
        console.log(data)
      })
  }
  render() {
    return (
      <div>
        <Search />
        <List />
      </div>
    )
  }
}
