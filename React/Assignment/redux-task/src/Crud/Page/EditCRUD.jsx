import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { EditUser } from '../Slice/crudslice'

export default function EditCRUD() {

    const redirect = useNavigate()

    const { id } = useParams()

    const { users, loading } = useSelector((state) => state.user)

    const [edit, setedit] = useState({
        id: "",
        name: "",
        password: "",
        email: ""
    })

    useEffect(() => {
        const singleuser = users.filter((data) => data.id === id)
        console.log(singleuser[0])
        setedit(singleuser[0])
    }, [])

    const getchage = (e) => {
        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch()

    const getsumit = (e) => {
        e.preventDefault()
        dispatch(EditUser(edit))
        setedit({
            id: "",
            name: "",
            password: "",
            email: ""
        })
        redirect("/crud")
    }

    return (
        <div className='container'>
            <div className="row">
                <h1> Edit Form User</h1>
                <div className="col-md-6 mx-auto">
                    <form onSubmit={getsumit}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Enter Name</label>
                            <input type="text" name='name' onChange={getchage} value={edit.name} className="form-control" id="Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name='email' onChange={getchage} value={edit.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onChange={getchage} name='password' value={edit.password} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Edit user</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
