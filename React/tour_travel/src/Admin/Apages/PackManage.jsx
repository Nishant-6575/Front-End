import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import useApi from '../../Custom/useapi'

export default function PackManage() {

    const {api} = useApi("http://localhost:3000/package")
    
    return (
        <div>
            <Aheader />
            <div className='container text-center'>
                <h1>Package detail is here</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            api && api.map((data, key) => {
                                return (
                                    <tr key={key}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.loaction}</td>
                                        <td><img src={data.img} alt="No Image Avilable" style={{width:"100px"}} /></td>
                                        <td>
                                            <button className='btn btn-info rounded-pill'>View</button>
                                            <button className='btn btn-success mx-2 rounded-pill'>Edit</button>
                                            <button className='btn btn-danger rounded-pill'>Delete</button>
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
