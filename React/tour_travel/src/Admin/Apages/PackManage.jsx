import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import useApi from '../../Custom/useapi'
import axios from 'axios'
import useDelApi from '../../Custom/delapi'
import { toast } from 'react-toastify'
import useEditApi from '../../Custom/editapi'

export default function PackManage() {

    // custom hook for get api data
    const { api, fetchdata } = useApi("http://localhost:3000/package")

    const [view, setview] = useState()

    // custom hook for delete data in api
    const { del } = useDelApi("http://localhost:3000/package", fetchdata)

    // custom hook for update data in api
    const { getid, edit, UpdateApi, getedit } = useEditApi({
        id: "",
        name: "",
        location: "",
        desc: "",
        days: "",
        price: "",
        img: "",
    }, "http://localhost:3000/package", fetchdata)


    // Basic Method to update data in api

    // const getid = async (id) => {
    //     const res = await axios.get(`http://localhost:3000/package/${id}`)
    //     setedit(res.data)
    // }

    // const [edit, setedit] = useState({
    //     id: "",
    //     name: "",
    //     location: "",
    //     desc: "",
    //     days: "",
    //     price: "",
    //     img: "",
    // })

    // const getedit = (e) => {
    //     setedit({
    //         ...edit,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const UpdateApi = async (e)=>{
    //      e.preventDefault();
    //     try {
    //         const res= await axios.put(`http://localhost:3000/package/${edit.id}`,edit)
    //         fetchdata()
    //         toast.success("Package Updated Successfully")
    //     } catch (error) {
    //         console.log("API Not Found",error)
    //     }
    // }


    return (
        <div>
            {/* <Aheader /> */}
            <div className='container text-center'>
                <h1>Package detail is here</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Title</th>
                            <th scope="col">Location</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            api && api.map((data, key) => {
                                return (
                                    <tr key={key}>
                                        <th scope="row">{key + 1}</th>
                                        <td>{data.name}</td>
                                        <td>{data.location}</td>
                                        <td><img src={data.img} alt="No Image Avilable" style={{ width: "100px" }} /></td>
                                        <td>
                                            <button className='btn btn-info rounded-pill' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setview(data)}>View</button>
                                            <button className='btn btn-success mx-2 rounded-pill' data-bs-toggle="modal" data-bs-target="#update-status-modal" onClick={() => getid(data.id)}>Edit</button>
                                            <button className='btn btn-danger rounded-pill' onClick={() => del(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Package</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {
                                    view && (
                                        <div>
                                            <div className="desti3im">
                                                <div className="desti3im1 position-relative">
                                                    <div className="desti3im1i">
                                                        <div className="grid clearfix">
                                                            <figure className="effect-jazz mb-0">
                                                                <a href="detail.html"><img src={view.img} className="w-100" alt="abc" /></a>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="desti3im1i1 shadow_box p-3 bg-white rounded-3 position-absolute">
                                                        <div className="desti3im1i1i row">
                                                            <div className="col-md-6 col-6">
                                                                <div className="desti3im1i1il">
                                                                    <h6 className="mb-0 font_14"><a href="detail.html"><i className="fa fa-clock-o me-1 col_green" /> {view.days} Days</a></h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-6">
                                                                <div className="desti3im1i1ir text-end">
                                                                    <h6 className="mb-0 font_14"><a href="detail.html"><i className="fa fa-envelope col_green" /></a> <a href="detail.html"><i className="fa fa-map-pin col_green ms-2" /></a></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="desti3im1i2 top-0 position-absolute w-100 text-end p-3">
                                                        <h6 className="d-inline-block mb-0 bg_green text-white p-1 px-3 font_14 rounded_50">SALE</h6>
                                                    </div>
                                                </div>
                                                <div className="desti3im2 shadow_box p-4">
                                                    <h5 className="mt-4 fs-4"><a href="detail.html">{view.name}</a></h5>
                                                    <h6><i className="fa fa-map-marker me-1 col_green" /> {view.location}</h6>
                                                    <hr />
                                                    <p>{view.desc}</p>
                                                    <hr />
                                                    <div className="desti3im2i row">
                                                        <div className="col-md-6 col-6">
                                                            <div className="desti3im2il">
                                                                <h6 className="mb-0 mt-2"><a className="button" href="detail.html">Details</a></h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-6">
                                                            <div className="desti3im2ir text-end">
                                                                <h4 className="mb-0"><span className="fw-normal font_14 text-muted">From</span><br />
                                                                    ${view.price}</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="update-status-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-2" id="staticBackdropLabel">Update Package</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {
                                    edit && (
                                        <div className="mx-auto">
                                            <div className="contact_2l">
                                                <form action="">
                                                    <div className="blog_dt1ib3i row">
                                                        <div className="col-md-6">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Name" value={edit.name} onChange={getedit} name='name' className="form-control border-0 bg-light" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Location" value={edit.location} onChange={getedit} name='location' className="form-control border-0 bg-light" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-6">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Enter your Days" value={edit.days} onChange={getedit} name='days' className="form-control border-0 bg-light" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Enter your Price" value={edit.price} onChange={getedit} name='price' className="form-control border-0 bg-light" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Enter your Images" name='img' value={edit.img} onChange={getedit} className="form-control border-0 bg-light" type="url" />
                                                                {
                                                                    edit.img && (
                                                                        <img src={edit.img} alt="Image Not Found" style={{ width: 500 }} />
                                                                    )
                                                                }
                                                            </div>
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
                </div>
            </div>
        </div>
    )
}
