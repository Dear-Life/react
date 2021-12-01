import React, { useState } from 'react'

import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import Detail from './Detail'

export default function Message() {

    const navigate = useNavigate()

    const [messages] = useState([
        {
            id: "01",
            title: 'message01',
        },
        {
            id: "02",
            title: 'message02',
        },
        {
            id: "03",
            title: 'message03',
        }
    ])

    return (
        <div>
            <h2>Message</h2>
            <ul>
                {
                    messages.map(msg => (
                        <li key={msg.id}>
                            <NavLink
                                to={`${msg.id}?title=${msg.title}`}
                                state={{ name: 'Taylor' }}
                            >
                                {msg.title}
                            </NavLink>
                            <button onClick={() => {
                                navigate(msg.id)
                            }}>push</button>
                            <button onClick={() => {
                                navigate(msg.id, { replace: true })
                            }}>replace</button>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                <Route path=":id" element={<Detail />} />
            </Routes>

        </div>
    )
}
