import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, userRead } from '../Slice/crudslice'
import { Link } from 'react-router-dom'
import Header from '../../Header'

export default function CrudList() {

    const { users, loading } = useSelector((state) => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userRead())
    },[])

    return (
        <div>
            <Header/>
            <h1 className='text-center my-2'>Hello this User Table Show</h1>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <Link to={`/edit/${data.id}`} className='btn btn-success mx-2'>Edit</Link>
                                            <button className='btn btn-danger' onClick={() => dispatch(deleteUser(data.id))} >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <div className='text-center'>
                    <Link to="/add" className='btn btn-primary'>Add New User</Link>
                </div>
            </div>
        </div>
    )
}
