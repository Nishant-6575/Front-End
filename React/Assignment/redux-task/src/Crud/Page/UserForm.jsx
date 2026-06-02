import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../Slice/crudslice'

export default function UserForm() {

     const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const getchage = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch()

    const getsubmit = (e) => {
        e.preventDefault()
        dispatch(createUser(form))
        setform({
            id: "",
            name: "",
            email: "",
            password: ""
        })
        redirect("/crud")
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <form onSubmit={getsubmit}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Enter Name</label>
                            <input type="text" value={form.name} name='name' onChange={getchage} className="form-control" id="Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={form.email} name='email' onChange={getchage} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" value={form.password} name='password' onChange={getchage} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Add user</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
