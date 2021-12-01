import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {

  state = {
    todos: [
      { id: '001', name: 'aaa', done: false },
      { id: '002', name: 'bbb', done: true },
      { id: '003', name: 'ccc', done: false },
    ]
  }

  saveTodo = todo => {
    const { todos } = this.state
    this.setState({ todos: [todo, ...todos] })
  }

  updateTodoDoneState = (id, done) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map(todo => {
        if (todo.id === id) {
          todo.done = done
        }
        return todo
      })
    })
  }

  deleteTodo = id => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }
  updateTodosDoneState = (done) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map(todo => ({
        ...todo,
        done
      }))
    })
  }
  clearDoneTodo = () => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(todo => !todo.done)
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <Header saveTodo={this.saveTodo} />
        <List
          todos={todos}
          updateTodoDoneState={this.updateTodoDoneState}
          deleteTodo={this.deleteTodo}
        />
        <Footer todos={todos}
          updateTodosDoneState={this.updateTodosDoneState}
          clearDoneTodo={this.clearDoneTodo}
        />
      </div>
    )
  }
}
