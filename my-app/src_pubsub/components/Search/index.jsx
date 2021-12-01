import React, { Component } from 'react'

import PubSub from 'pubsub-js'

export default class Search extends Component {
    handleSearch = async () => {
        const { value } = this.keyword
        PubSub.publish('search', value);
    }
    render() {
        return (
            <div>
                <input
                    ref={c => this.keyword = c}
                    type="text" />
                <button
                    onClick={this.handleSearch}
                >搜索</button>
            </div>
        )
    }
}
