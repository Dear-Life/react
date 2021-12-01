import React, { Component } from 'react'

import Item from '../Item'

export default class List extends Component {
    render() {
        const { todos, updateTodoDoneState, deleteTodo } = this.props
        return (
            <ul>
                {
                    todos.map(todo => <Item
                        key={todo.id}
                        todo={todo}
                        updateTodoDoneState={updateTodoDoneState}
                        deleteTodo={deleteTodo}
                    />)
                }
            </ul>
        )
    }
}
