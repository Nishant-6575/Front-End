import React, { useState } from 'react'
import useCrudApi from '../Custom/CrudAPi'

export default function Crudusefile() {

    const { getapi, input,getchange,getsubmit, edit, getid, getedit, UpdateApi, del } = useCrudApi("http://localhost:4000/products",
        {
            id: "",
            name: "",
            price: "",
            condition: ""
        }
    )
    const [view, setview] = useState()

    console.log(edit)

    return (
        <div>
            <h1>This is CRUD Application File</h1>
            <div className="container">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Condition</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getapi && getapi.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.price}</td>
                                        <td>{data.condition}</td>
                                        <td>
                                            <button className='btn btn-info rounded-pill' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setview(data)}>View</button>
                                            <button className='btn btn-success mx-2 rounded-pill' data-bs-toggle="modal" data-bs-target="#update-status-modal" onClick={() => getid(data)}>Edit</button>
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
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Product</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {
                                    view && (
                                        <div>
                                            <div className="desti3im">
                                                <div className="desti3im2 shadow_box p-4">
                                                    <h5 className="mb-0 font_14">Name: {view.name}</h5>
                                                    <h5 className="mt-4 fs-4"><p href="detail.html">Price: {view.price}</p></h5>
                                                    <p>Condition: {view.condition}</p>
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
                                <h1 className="modal-title fs-2" id="staticBackdropLabel">Update Product</h1>
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
                                                                <input placeholder="Price" value={edit.price} onChange={getedit} name='price' className="form-control border-0 bg-light" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-6">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Condition" value={edit.condition} onChange={getedit} name='condition' className="form-control border-0 bg-light" type="text" />
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
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-add-data">Add New Product</button>
                </div>
                <div className="modal fade" id="modal-add-data" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-2" id="staticBackdropLabel">Add New Product</h1>
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
                                                                <input placeholder="Enter Product Name" value={input.name} onChange={getchange} name='name' className="form-control border-0 bg-light" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il d-flex">
                                                                <input placeholder="Price" name='price' value={input.price} onChange={getchange} className="form-control border-0 bg-light me-5" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Condition" value={input.condition} onChange={getchange} name='condition' className="form-control form_text border-0 bg-light" />
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
                                <button type="button" className="btn btn-secondary btn-success" data-bs-dismiss="modal" onClick={getsubmit}>Add Product</button>
                                <button type="button" className="btn btn-secondary btn-danger" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
