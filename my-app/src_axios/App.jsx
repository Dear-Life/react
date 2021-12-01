import React, { Component } from 'react'

import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = {
    isFirst: true,
    isLoading: false,
    users: null,
    error: null
  }

  updateState = state => {
    this.setState(state)
  }

  render() {
    return (
      <div>
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    )
  }
}
