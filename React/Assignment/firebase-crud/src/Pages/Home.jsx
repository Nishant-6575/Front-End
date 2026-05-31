import React, { useState } from 'react'
import useCrudApi from '../Component/Crud'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../Firebase/Firebase';

export default function Home() {
    const { getapi, input, getchange, getsubmit, edit, getid, getedit, UpdateApi, del } = useCrudApi("products",
        {
            name: "",
            price: ""
        },
    )

    const [view, setview] = useState()

    const login = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <button className='btn btn-info mx-5 my-3' onClick={login}>Login With Google</button>
            <h1 className='text-center'>Product Manage</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Name</th>
                            <th scope="col">price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getapi && getapi.map((data, key) => {
                                return (
                                    <tr className='text-center' key={data.id}>
                                        <th scope="row">{key + 1}</th>
                                        <td>{data.name}</td>
                                        <td>{data.price}</td>
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
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Product</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {
                                    view && (
                                        <div>
                                            <div className="desti3im">
                                                <div className="desti3im2 shadow_box p-4">
                                                    <h5>{view.name}</h5>
                                                    <p>{view.price}</p>


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
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il">
                                                                <input placeholder="Enter Product Name" value={edit.name} onChange={getedit} name='name' className="form-control border-0 bg-light" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="blog_dt1ib3i row mt-4">
                                                        <div className="col-md-12">
                                                            <div className="blog_dt1ib3il d-flex">
                                                                <input placeholder="Enter price" name='price' value={edit.price} onChange={getedit} className="form-control border-0 bg-light me-5" type="text" />
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
                                                                <input placeholder="Enter price" name='price' value={input.price} onChange={getchange} className="form-control border-0 bg-light me-5" type="text" />
                                                                <div className='fs-1 me-5'><i className={input.icons} /> </div>
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
