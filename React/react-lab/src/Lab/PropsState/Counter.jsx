import React, { useState } from 'react'

export default function Counter() {
    const [count, setcount] = useState(0)

    return (
        <div>
            <h1>This is Counter Component</h1>

            <h2>Count: {count}</h2>
            <button className='btn btn-success m-2' onClick={() => { setcount(count + 1) }}>Increase</button>
            <button className='btn btn-success m-2' onClick={()=>{setcount(count-1)}}>Decrease</button>
            <button className='btn btn-success m-2' onClick={()=>{setcount(0)}}>Zero</button>
        </div>
    )
}
    