import React, { Component } from 'react'

import axios from 'axios'

export default class Search extends Component {
    handleSearch = async () => {
        const { value } = this.keyword
        this.props.updateState({
            isFirst: false,
            isLoading: true
        })
        try {
            const { data: { items: users } } =
                await axios.get(`https://api.github.com/search/users?q=${value}`)
            this.props.updateState({
                users,
                isLoading: false
            })
        } catch (error) {
            this.props.updateState({
                error,
                isLoading: false
            })
        }
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
