import React, { useState } from 'react'
import Aheader from '../Acommon/Aheader'
import UseCrudApi from '../../Custom/crudApi'

export default function BlogManage() {

    const { getapi, input, getchange, getsubmit, edit, getid, getedit, UpdateApi, del } = UseCrudApi("http://localhost:3000/blog",
        {
            id: "",
            img: "",
            date: "",
            title: "",
            desc: ""
        },
    )

    const [view, setview] = useState()

    return (
        <div>
            {/* <Aheader /> */}
            <h1 className='text-center'>Blog Manage Detils</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Title</th>
                            <th scope="col">Desc</th>
                            <th scope="col">Date</th>
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
                                        <td>
                                            {new Date(data.date).toLocaleDateString(
                                                "en-US",
                                                {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric"
                                                }
                                            )}
                                        </td>
                                        <td>
                                            <img src={data.img} alt="No Image Available" style={{ width: 150 }} />
                                        </td>
                                        <td>
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#staticBackdropService" onClick={() => setview(data)} >View</button>
                                            <button className='btn btn-success mx-2' data-bs-toggle="modal" data-bs-target="#update-status-modal-service" onClick={() => getid(data)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => del(data.id)}>Delete</button>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="modal fade" id="staticBackdropService" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Blog</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {
                                    view && (
                                        <div>
                                            <div className="desti3im">
                                                <div className="desti3im1i">
                                                    <div className="grid clearfix">
                                                        <figure className="effect-jazz mb-0">
                                                            <a href="detail.html"><img src={view.img} className="w-100" alt="abc" /></a>
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="desti3im2 shadow_box p-4">
                                                    <h5 className="fs-4"><a href="detail.html">{view.title}</a></h5>
                                                    <hr />
                                                    <h5 className="font_14 mt-3 bg_dark text-white d-inline-block rounded-3 p-2 px-3">{view.date}</h5>
                                                    <p className="mt-3">{view.desc}</p>
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
                <div className="modal fade" id="update-status-modal-service" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-2" id="staticBackdropLabel">Update Blog</h1>
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
                                                                <input placeholder="Title" value={edit.title} onChange={getedit} name='title' className="form-control border-0 bg-light" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Date" value={edit.date} onChange={getedit} name='date' className="form-control border-0 bg-light" type="date" />
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
                <div className='text-center'>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-add-data">Add New Blog</button>
                </div>
                <div className="modal fade" id="modal-add-data" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-2" id="staticBackdropLabel">Add New Blog</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {
                                    input && (
                                        <div className="mx-auto">
                                            <div className="contact_2l">
                                                <form action="">
                                                    <div className="blog_dt1ib3i row">
                                                        <div className="col-md-6">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Title" value={input.title} onChange={getchange} name='title' className="form-control border-0 bg-light" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Date" value={input.date} onChange={getchange} name='date' className="form-control border-0 bg-light" type="date" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Enter your Images" name='img' value={input.img} onChange={getchange} className="form-control border-0 bg-light" type="url" />
                                                                {
                                                                    input.img && (
                                                                <img src={input.img} alt="Image Not Found" style={{ width: 500 }} />
                                                                    )
                                                                }
                                                            </div>
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
                                <button type="button" className="btn btn-secondary btn-success" data-bs-dismiss="modal" onClick={getsubmit}>Add Blog</button>
                                <button type="button" className="btn btn-secondary btn-danger" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}