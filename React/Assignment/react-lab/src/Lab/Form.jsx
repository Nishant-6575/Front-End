import React, { useState } from 'react'

export default function FormTask() {

    const [input, setinput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const getdata = (e) => {
        setinput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const [formdata, setformdata] = useState()
    const submitdata = (e) => {
        e.preventDefault()

        setformdata(input)

    }

    return (
        <div>
            <h1>This is Form</h1>
            <div className="container">
                <form action="" onSubmit={submitdata}>
                    <div className="mb-3">
                        <label className="form-label">Enter Your Name</label>
                        <input name='name' onChange={(e) => { getdata(e) }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name='email' onChange={(e) => { getdata(e) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input name='password' onChange={(e) => { getdata(e) }} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div>
                {
                    formdata && (
                        <div className='container border p-2 my-2'>
                            <h1>Your Name: {formdata.name}</h1>
                            <h1>Your Email: {formdata.email}</h1>
                            <h1>Your Password: {formdata.password}</h1>
                            <div className='text-center py-2'>
                                <button onClick={() => { setformdata() }} className='btn btn-danger'>Clear Data</button>
                            </div>
                        </div>

                    )
                }
            </div>

        </div>
    )
}
