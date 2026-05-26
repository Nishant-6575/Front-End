import React, { useState } from 'react'

export default function Login() {
    const [status, setstatus] = useState("Login")

    return (
        <div>
            <h1>This is login and logout component</h1>

            <h2>Currently you are {status}</h2>

            <div className='d-flex py-3'>
                <h3 className='mx-3'>You want to </h3>
                {
                    (() => {
                        if (status === "Login") {
                            return (
                                <button onClick={() => { setstatus("Logout") }} className='btn btn-danger'>Logout</button>
                            )
                        }
                    })()
                }
                {
                    (() => {
                        if (status === "Logout") {
                            return (
                                <button onClick={() => { setstatus("Login") }} className='btn btn-success'>Login</button>
                            )
                        }
                    })()
                }
            </div>
        </div>
    )
}
