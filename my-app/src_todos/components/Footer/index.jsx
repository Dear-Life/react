import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const { todos } = this.props
        const total = todos.length
        const doneTotal = todos.reduce(
            (preVal, { done }) => preVal + (done ? 1 : 0), 0
        )
        return (
            <div>
                <input
                    type="checkbox"
                    checked={(total === doneTotal) && total !== 0}
                    onChange={event => {
                        this.props.updateTodosDoneState(event.target.checked)
                    }} />
                {doneTotal}/{total}
                <button onClick={this.props.clearDoneTodo}>清空</button>
            </div>
        )
    }
}
