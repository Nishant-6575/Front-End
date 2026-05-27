import React, { useEffect, useState } from 'react'
import { fireDb } from '../../Firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function Fireconnect() {

    const [data, setdata] = useState([])

    const getdata = async () => {
        try {
            const res = await getDocs(collection(fireDb, "admin"))

            const alldata = res.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setdata(alldata)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">email</th>
                        <th scope="col">name</th>
                        <th scope="col">password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((index) => {
                            return (
                                <tr key={index.id}>
                                    <th scope="row">{index.id}</th>
                                    <td>{index.email}</td>
                                    <td>{index.name}</td>
                                    <td>{index.password}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
