import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addPerson } from '../redux/actions/person'

class Person extends Component {
    add = () => {
        const { id: { value: id }, name: { value: name } } = this
        this.props.addPerson({ id, name })
    }
    render() {
        return (
            <div>
                <h2>Person</h2>
                <p>click {this.props.count} times</p>
                <input type="text" ref={c => this.id = c} />
                <input type="text" ref={c => this.name = c} />
                <button onClick={this.add}>add</button>
            </div>
        )
    }
}

export default connect(
    ({ count }) => ({ count }),
    { addPerson }
)(Person)
