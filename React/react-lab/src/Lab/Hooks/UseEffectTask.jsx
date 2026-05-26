import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function UseEffectTask() {
    const [api, setapi] = useState([])

    const getapi = async () => {
        try {
            const res = await axios.get("http://localhost:4000/users")
            setapi(res.data)
        } catch (error) {
            console.log("API not found", error)
        }
    }

    useEffect(() => {
        getapi()
    }, [])
    return (
        <div>
            <h1>Use Effect</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            api && api.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.firstName}</td>
                                        <td>{data.lastName}</td>
                                        <td>{data.role}</td>
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
