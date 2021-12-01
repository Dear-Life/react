import React from 'react'

import { useParams, useLocation, useNavigate } from 'react-router-dom'

const data = [
    {
        id: "01",
        content: "AAA"
    },
    {
        id: "02",
        content: "BBB"
    },
    {
        id: "03",
        content: "CCC"
    }
]

export default function Detail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { search, state } = useLocation()
    console.log(search, state)
    const msg = data.find(msg => msg.id === id)
    return (
        <div>
            <p>{msg.id}</p>
            <p>{msg.content}</p>
            <button onClick={() => {
                navigate(-1)
            }}>back</button>
        </div>
    )
}
