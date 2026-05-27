import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import useApi from '../../Custom/useapi'
import axios from 'axios'
import { toast } from 'react-toastify'
import { doc, updateDoc } from 'firebase/firestore'
import { fireDb } from '../../Firebase/firebase'

export default function UserManage() {

    const { api, fetchdata } = useApi("users")

    const getchange = async (id, status) => {

        try {
            const userRef = doc(fireDb, "users", id)

            if (status === "unblock") {
                const res = await updateDoc(userRef, { status: "block" })
                toast.success("User Blocked")
                fetchdata()
            }
            if (status === "block") {
                const res = await updateDoc(userRef, { status: "unblock" })
                toast.success("User Unblocked")
                fetchdata()
            }

        } catch (error) {
            console.log("API not found")
            toast.error("API not found")
        }
    }

    return (
        <div>
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