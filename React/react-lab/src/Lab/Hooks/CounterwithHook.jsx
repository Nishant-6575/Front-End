import React, { useState } from 'react'

export default function CounterwithHook() {
    const [count, setcount] = useState(0)

    const incre = () => {
        setcount(count + 1)
    }

    const decre = () => {
        setcount(count - 1)
    }

    const zero = () => {
        setcount(0)
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2>Count: {count}</h2>
            <button onClick={incre} className='btn btn-success m-3'>Increament</button>
            <button onClick={zero} className='btn btn-info m-3'>Zero</button>
            <button onClick={decre} className='btn btn-danger m-3'>Decreament</button>
        </div>
    )
}
