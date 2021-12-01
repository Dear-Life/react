import React, { Component } from 'react'

import {
    NavLink,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'

import Message from './Message'
import News from './News'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <NavLink to="news">News</NavLink>
                <NavLink to='message'>Message</NavLink>
                <Routes>
                    <Route path="message/*" element={<Message />} />
                    <Route path="news" element={<News />} />
                    <Route path="" element={<Navigate replace to="news" />} />
                </Routes>
            </div>
        )
    }
}
