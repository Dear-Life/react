import React, { Component } from 'react'

export default class Item extends Component {
    state = {
        mouseIn: false
    }
    handle = event => {
        const { updateTodoDoneState, todo: { id } } = this.props
        updateTodoDoneState(id, event.target.checked)
    }
    handleMouse = mouseIn => {
        return () => this.setState({ mouseIn })
    }
    handleDel = () => {
        /* eslint-disable */
        if (confirm('delete?')) {
            const { deleteTodo, todo: { id } } = this.props
            deleteTodo(id)
        }
    }
    render() {
        const { todo } = this.props
        const { mouseIn } = this.state
        return (
            <li style={{
                background: mouseIn ? '#eee' : 'none'
            }}
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}
            >
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={this.handle}
                />
                <span>{todo.name}</span>
                <button
                    onClick={this.handleDel}
                    style={{
                        display: mouseIn ? 'inline-block' : 'none'
                    }}>
                    删除
                </button>
            </li>
        )
    }
}
