import React, { Component } from 'react'

import axios from 'axios'

export default class App extends Component {

  render() {
    return (
      <div>
        <button onClick={async () => {
          const ret1 = await axios.get('/api1/students')
          console.log(ret1.data)
          const ret2 = await axios.get('/api2/cars')
          console.log(ret2.data)
        }}>按钮</button>
      </div>
    )
  }
}
