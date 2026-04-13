import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Table_02() {

    const [user, setuser] = useState([])

    useEffect(() => {
        apifetch()
    }, [])

    const apifetch = async () => {
        try {
            const apidata = await axios.get("https://dummyjson.com/users")
            // console.log(apidata.data.users)
            setuser(apidata.data.users)

        } catch (error) {
            console.log("API not found", error)
        }
    }
    return (
        <div>
            <div className="container">
                <h1 className="text-center">API call in table</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Company Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user && user.map((data, index) => {
                                const {id,firstName,lastName,phone,company} = data
                                return (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{firstName}</td>
                                        <td>{lastName}</td>
                                        <td>{phone}</td>
                                        <td>{company.name}</td>
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
