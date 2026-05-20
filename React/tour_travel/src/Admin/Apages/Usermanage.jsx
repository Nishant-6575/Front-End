import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import useApi from '../../Custom/useapi'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function UserManage() {

    const { api, fetchdata } = useApi("http://localhost:3000/users")

    const getchange = async (id, status) => {

        try {
            if (status === "unblock") {
                const res = await axios.patch(`http://localhost:3000/users/${id}`, { status: "block" })
                toast.success("User Blocked")
                fetchdata()
            }
            if (status === "block") {
                const res = await axios.patch(`http://localhost:3000/users/${id}`, { status: "unblock" })
                toast.success("User Unblocked")
                fetchdata()
            }
            // console.log(res.data)
        } catch (error) {
            console.log("API not found")
            toast.error("API not found")
        }
    }

    return (
        <div>
            {/* <Aheader /> */}
            <h1 className='text-center'>User Manage</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Sr. No</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            api && api.map((data, key) => {
                                return (
                                    <tr className='text-center' key={data.id}>
                                        <th scope="row">{key + 1}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            {
                                                (() => {
                                                    if (data.status === "block") {
                                                        return (
                                                            <button className='btn btn-success' onClick={() => getchange(data.id, data.status)} >Unblock</button>
                                                        )
                                                    }
                                                })()
                                            }
                                            {
                                                (() => {
                                                    if (data.status === "unblock") {
                                                        return (
                                                            <button className='btn btn-danger' onClick={() => getchange(data.id, data.status)}>Block</button>
                                                        )
                                                    }
                                                })()
                                            }

                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}