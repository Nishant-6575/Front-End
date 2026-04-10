import React, { useState } from 'react'

function FormObj() {

    const [form, setform] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: ""
    })

    console.log(form)

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>

            <h1>Hello this form hadling object </h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        {/* <form>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Enter your Name</label>
                                    <input type="text"  value={form.name} onChange={(e)=>setform({...form,name:e.target.value})} className="form-control" id="name"  />
                                </div>
                                 <div className="mb-3">
                                    <label htmlFor="surname" className="form-label">Enter your surname</label>
                                    <input type="text"  value={form.surname} onChange={(e)=>setform({...form,surname:e.target.value})} className="form-control" id="surname"  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" value={form.email} onChange={(e)=>setform({...form,email:e.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                 <div className="mb-3">
                                    <label htmlFor="phone"  className="form-label">Enter your Phone</label>
                                    <input type="tel" value={form.phone} onChange={(e)=>setform({...form,phone:e.target.value})} className="form-control" id="phone"  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" value={form.password} onChange={(e)=>setform({...form,password:e.target.value})} className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form> */}
                        <form>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Enter your Name</label>
                                    <input type="text" value={form.name} name='name'  onChange={getchange} className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="surname" className="form-label">Enter your surname</label>
                                    <input type="text" value={form.surname} name='surname'  onChange={getchange} className="form-control" id="surname" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" value={form.email} name='email'  onChange={getchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Enter your Phone</label>
                                    <input type="tel" value={form.phone} name='phone'  onChange={getchange} className="form-control" id="phone" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" value={form.password} name='password'  onChange={getchange} className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormObj