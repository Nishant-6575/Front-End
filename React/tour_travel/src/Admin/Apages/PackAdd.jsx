import React, { useState } from 'react'
import axios from 'axios'
import Aheader from '../Acommon/Aheader'
import usePostApi from '../../Custom/postapi'
import useCrudApi from '../../Custom/crudApi'

export default function PackAdd() {

    const { input, getchange, getsubmit } = useCrudApi(
        "http://localhost:3000/package", {
        id: "",
        name: "",
        location: "",
        desc: "",
        days: "",
        price: "",
        img: ""
    }, "/admin/packmng")

    return (
        <div>
            <div className="col-md-6 mx-auto">
                <div className="contact_2l">
                    <form action="" onSubmit={getsubmit}>

                        <h1 className="mt-3">PackAge Add</h1>
                        <div className="blog_dt1ib3i row">
                            <div className="col-md-6">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Name" value={input.name} name='name' onChange={getchange} className="form-control border-0 bg-light" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Loaction" value={input.location} name='location' onChange={getchange} className="form-control border-0 bg-light" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="blog_dt1ib3i row mt-4">
                            <div className="col-md-6">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Enter your Days" value={input.days} name='days' onChange={getchange} className="form-control border-0 bg-light" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Enter your Price" value={input.price} name='price' onChange={getchange} className="form-control border-0 bg-light" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="blog_dt1ib3i row mt-4">
                            <div className="col-md-12">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Enter your Images" name='img' onChange={getchange} value={input.img} className="form-control border-0 bg-light" type="url" />
                                </div>
                            </div>

                        </div>
                        <div className="blog_dt1ib3i row mt-4">
                            <div className="col-md-12">
                                <div className="blog_dt1ib3il">
                                    <textarea placeholder="Enter your  desc" value={input.desc} name='desc' onChange={getchange} className="form-control form_text border-0 bg-light" />
                                </div>
                            </div>
                            <div className="col-md-12 mt-4">
                                <input className="form-control btn btn-success" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
