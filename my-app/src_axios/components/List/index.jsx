import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const {
            isFirst,
            isLoading,
            users,
            error
        } = this.props
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
