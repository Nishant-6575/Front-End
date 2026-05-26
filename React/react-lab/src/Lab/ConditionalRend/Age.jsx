import React, { useState } from 'react'

export default function Age() {
    const [age, setage] = useState()
    return (
        <div>
            <h1>This is Age Validation</h1>
            <input onChange={(e) => { setage(e.target.value) }} type="num" placeholder='Please enter your age' />

            {
                (age === null || age === "") ? (
                    <h1>Please enter your age</h1>
                ) : (age >= 18 ? (
                    <h1 className='text-success'>You are eligible to Vote</h1>
                ) : (
                    <h1 className='text-danger'>You are not eligible to Vote</h1>
                ))
            }

        </div>
    )
}
