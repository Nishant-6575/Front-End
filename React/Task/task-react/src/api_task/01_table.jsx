import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Table() {

  const [userdata, setuserdata] = useState([])

  useEffect(() => {
    apifetch()
  },[])

  const apifetch = async () => {
    const apidata = await axios.get("https://api.escuelajs.co/api/v1/users")
    // console.log(apidata.data)
    setuserdata(apidata.data)
  }
  return (
    <div>
      <div className="container">
        <h1 className="text-center">API call in table</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {
              userdata && userdata.map((apigetdata) => {
                return (
                  <tr key={apigetdata.id}>
                    <th scope="row">{apigetdata.id}</th>
                    <td>{apigetdata.name}</td>
                    <td>{apigetdata.email}</td>
                    <td>@{apigetdata.role}</td>
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

export default Table