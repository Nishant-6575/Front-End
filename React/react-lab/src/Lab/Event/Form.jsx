import React, { useState } from 'react'

export default function Form() {

    const [input, setinput] = useState()

    return (
        <div>
            <h1>This is Form</h1>
            <div>
                <div className="mb-3">
                    <label className="form-label">Input Field</label>
                    <input onChange={(e) => { setinput(e.target.value) }} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">What you typed!</label>
                    <textarea value={input} className="form-control" rows={3} />
                </div>
            </div>

        </div>
    )
}
