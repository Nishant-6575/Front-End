import React, {  useState } from 'react'

function Formdata() {

    const [name,setname] = useState("")
    const [surname,setsurname] = useState("")
    const [email,setemail] =useState("")
    const [phone,setphone] =useState("")
    const [password,setpassword]  =useState("")

    console.log(name)


    return (
        <div>

            <h1>Hello this form hadling</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Enter your Name</label>
                                    <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" id="name"  />
                                </div>
                                 <div className="mb-3">
                                    <label htmlFor="surname" className="form-label">Enter your surname</label>
                                    <input type="text" value={surname} onChange={(a)=>setsurname(a.target.value)} className="form-control" id="surname"  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                 <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Enter your Phone</label>
                                    <input type="tel" value={phone} onChange={(e)=>setphone(e.target.value)} className="form-control" id="phone"  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
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

export default Formdata