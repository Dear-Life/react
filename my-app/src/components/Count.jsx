import React from 'react'

import { useDispatch } from 'react-redux'
import { increment, decrement, incrementAsync } from '../redux/count'

export default function Count() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(increment(2))} >
                increment
            </button>
            <button onClick={() => dispatch(incrementAsync(2))} >
                incrementAsync
            </button>
            <button onClick={() => dispatch(decrement(2))}>
                decrement
            </button>
        </div>
    )
}
