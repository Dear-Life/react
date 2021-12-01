import React, { Component } from 'react'

import { nanoid } from 'nanoid'

export default class Header extends Component {
    handle = ({ code, target: { value: name } }) => {
        if (code === 'Enter') {
            this.props.saveTodo({
                id: nanoid(),
                name,
                done: false
            })
        }
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    onKeyUp={this.handle}
                />
            </div>
        )
    }
}
