import React, { useState } from 'react'
import Aheader from '../Acommon/Aheader'
import UseCrudApi from '../../Custom/crudApi'

export default function PricingManage() {

    const { getapi, input, getchange, getsubmit, edit, getid, getedit, UpdateApi, del } = UseCrudApi("http://localhost:3000/offers",
        {
            id: "",
            title: "",
            desc: "",
            price: "",
            img: ""
        },
    )

    return (
        <div>

            <h1 className='text-center'>Offer Manage Detils</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getapi && getapi.map((data, key) => {
                                return (
                                    <tr className='text-center' key={data.id}>
                                        <th scope="row">{key + 1}</th>
                                        <td>{data.title}</td>
                                        <td>{data.desc.slice(0, 40)}...</td>
                                        <td>{data.price}</td>
                                        <td>
                                            <img src={data.img} alt="Image Not Found" style={{ width: 100 }} />
                                        </td>
                                        <td>
                                            <button className='btn btn-success mx-2' data-bs-toggle="modal" data-bs-target="#update-status-modal-service" onClick={() => getid(data)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => del(data.id)}>Delete</button>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="modal fade" id="update-status-modal-service" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                </div>
                <div className='text-center'>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-add-data">Add New Offer</button>
                </div>
                <div className="modal fade" id="modal-add-data" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-2" id="staticBackdropLabel">Add New Offer</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {
                                    input && (
                                        <div className="mx-auto">
                                            <div className="contact_2l">
                                                <form action="">
                                                    <div className="blog_dt1ib3i row">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Enter Offer Name" value={input.title} onChange={getchange} name='title' className="form-control border-0 bg-light" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Enter price" name='price' value={input.price} onChange={getchange} className="form-control border-0 bg-light me-5" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="blog_dt1ib3il">
                                                            <input placeholder="Enter your Images" name='img' value={input.img} onChange={getchange} className="form-control border-0 bg-light" type="url" />
                                                            {
                                                                edit.img && (
                                                                    <img src={input.img} alt="Image Not Found" style={{ width: 500 }} />
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il">
                                                                <textarea placeholder="Enter your  desc" value={input.desc} onChange={getchange} name='desc' className="form-control form_text border-0 bg-light" />
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
                                <button type="button" className="btn btn-secondary btn-success" data-bs-dismiss="modal" onClick={getsubmit}>Add Service</button>
                                <button type="button" className="btn btn-secondary btn-danger" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}