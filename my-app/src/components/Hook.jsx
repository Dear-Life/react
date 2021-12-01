import React, { useState, useEffect, useRef } from 'react'

export default function Hook() {
    const [num, setCount] = useState(0)
    const myRef = useRef()

    useEffect(() => {
        const timerId = setTimeout(() => {
            setCount(num => num + 1)
        }, 1000);
        return () => {
            clearTimeout(timerId)
        }
    }, [])

    return (
        <div>
            <p ref={myRef}>{num}</p>
            <button onClick={() => setCount(num => num + 1)}>+</button>
            <button onClick={() => {
                console.log(myRef.current.innerHTML)
            }}>show</button>
        </div>
    )
}
