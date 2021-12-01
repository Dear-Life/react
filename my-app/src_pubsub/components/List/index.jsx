import React, { Component } from 'react'

import axios from 'axios'
import PubSub from 'pubsub-js'

export default class List extends Component {

    state = {
        isFirst: true,
        isLoading: false,
        users: null,
        error: null
    }

    componentDidMount() {
        this.token = PubSub.subscribe('search', async (message, keyword) => {
            this.setState({
                isFirst: false,
                isLoading: true
            })
            try {
                const { data: { items: users } } =
                    await axios.get(`https://api.github.com/search/users?q=${keyword}`)
                this.setState({
                    users,
                    isLoading: false
                })
            } catch (error) {
                this.setState({
                    error,
                    isLoading: false
                })
            }
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {
            isFirst,
            isLoading,
            users,
            error
        } = this.state

        if (isFirst) {
            return <div>输入内容开始搜索</div>
        } else if (isLoading) {
            return <div>搜索中...</div>
        } else if (users) {
            return <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            <a
                                style={{ display: 'block' }}
                                href={user.html_url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={user.avatar_url} style={{ width: 30 }} alt="" title="" />
                                <span>{user.login}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        } else {
            return <div>{error.message}</div>
        }
    }
}
