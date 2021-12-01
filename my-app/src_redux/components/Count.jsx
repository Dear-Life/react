import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    increment,
    decrement,
    incrementAsync
} from '../redux/actions/count'

class Count extends Component {
    increment = () => {
        const { value } = this.select
        this.props.increment(+value)
    }
    decrement = () => {
        const { value } = this.select
        this.props.decrement(+value)
    }
    incrementIfOdd = () => {
        const { value } = this.select
        if (this.props.count % 2 !== 0) {
            this.props.increment(+value)
        }
    }
    incrementAsync = () => {
        const { value } = this.select
        this.props.incrementAsync(+value)
    }
    render() {
        return (
            <div>
                <h2>Count</h2>
                <select ref={c => this.select = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.incrementIfOdd}>increment if odd</button>
                <button onClick={this.incrementAsync}>incrementAsync</button>

                <ul>
                    {
                        this.props.persons.map(person => (
                            <li key={person.id}>{person.name}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    ({ persons, count }) => ({
        persons,
        count
    }),
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)
