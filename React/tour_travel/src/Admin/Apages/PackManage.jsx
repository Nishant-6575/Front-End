import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import useApi from '../../Custom/useapi'
import axios from 'axios'
import useDelApi from '../../Custom/delapi'

export default function PackManage() {

    const { api, fetchdata } = useApi("http://localhost:3000/package")

    const [view, setview] = useState()

    const { del } = useDelApi("http://localhost:3000/package", fetchdata)

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
                                        <td><img src={data.img} alt="No Image Avilable" style={{ width: "100px" }} /></td>
                                        <td>
                                            <button className='btn btn-info rounded-pill' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setview(data)}>View</button>
                                            <button className='btn btn-success mx-2 rounded-pill'>Edit</button>
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
                                                    <h6><i className="fa fa-map-marker me-1 col_green" /> {view.loaction}</h6>
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


            </div>
        </div>
    )
}
