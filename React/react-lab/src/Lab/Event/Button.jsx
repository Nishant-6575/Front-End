import React, { useState } from 'react'

export default function Button() {

    const [action, setaction] = useState("Clicked!")

    return (
        <div>
            <h1>This is Button </h1>
            <button onClick={() => { action === "Clicked!" ? setaction("Not Clicked!") : setaction("Clicked!") }} className='btn btn-success mx-4'>{action}</button>
        </div>
    )
}
