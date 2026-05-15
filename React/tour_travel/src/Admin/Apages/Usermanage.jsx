import React, { useState } from 'react'
import Aheader from '../Acommon/Aheader'
import useApi from '../../Custom/useapi'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function UserManage() {

    const { api } = useApi("http://localhost:3000/users")

    const[form,setform]=useState()



    const getchange = async(id)=>{
        // e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/users/${id}`,form)
            console.log(res.data)
        } catch (error) {
            console.log("API not found")
            toast.error("API not found")
        }
    }

    return (
        <div>
            <Aheader />
            <h1 className='text-center'>Offer Manage Detils</h1>
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
                                                        <button className='btn btn-danger' >Unblock</button>
                                                    )
                                                    }
                                                })()
                                            }
                                            {
                                                (() => {
                                                    if (data.status === "unblock") {
                                                        return (
                                                        <button className='btn btn-success' onClick={()=>getchange(data.id)}>Block</button>
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
                {/* <div className="modal fade" id="update-status-modal-service" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-2" id="staticBackdropLabel">Update Offer</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {
                                    edit && (
                                        <div className="mx-auto">
                                            <div className="contact_2l">
                                                <form action="">
                                                    <div className="blog_dt1ib3i row">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Enter Offer Name" value={edit.title} onChange={getedit} name='title' className="form-control border-0 bg-light" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Enter price" name='price' value={edit.price} onChange={getedit} className="form-control border-0 bg-light me-5" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="blog_dt1ib3il">
                                                            <input placeholder="Enter your Images" name='img' value={edit.img} onChange={getedit} className="form-control border-0 bg-light" type="url" />
                                                            {
                                                                edit.img && (
                                                                    <img src={edit.img} alt="Image Not Found" style={{ width: 500 }} />
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il">
                                                                <textarea placeholder="Enter your  desc" value={edit.desc} onChange={getedit} name='desc' className="form-control form_text border-0 bg-light" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-success" data-bs-dismiss="modal" onClick={UpdateApi}>Update</button>
                                <button type="button" className="btn btn-secondary btn-danger" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}