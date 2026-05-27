import React from 'react'
import useEdituser from '../../Custom/edituser'

export default function Uedit() {
    const { input, getchange, getsubmit } = useEdituser("http://localhost:3000/users", "/")

    return (
        <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="bg-light p-5 rounded">
                        {
                            input && (
                                <form onSubmit={getsubmit} className="login100-form validate-form" action="">
                                    <div>
                                        <span className="login100-form-title">
                                            Edit your Account
                                        </span>
                                    </div>
                                    <div className="wrap-input100 validate-input">
                                        <input value={input.name} onChange={getchange} className="input100" type="text" name="name" placeholder="Your Name" />
                                        <span className="focus-input100" />
                                        <span className="symbol-input100">
                                            <i className="fa fa-user" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                                        <input className="input100" onChange={getchange} type="password" name="oldpassword" placeholder="Old Password" />
                                        <span className="focus-input100" />
                                        <span className="symbol-input100">
                                            <i className="fa fa-lock" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                                        <input className="input100" onChange={getchange} type="password" name="newpassword" placeholder="New Password" />
                                        <span className="focus-input100" />
                                        <span className="symbol-input100">
                                            <i className="fa fa-lock" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                                        <input className="input100" onChange={getchange} type="password" name="repassword" placeholder="Repeat Password" />
                                        <span className="focus-input100" />
                                        <span className="symbol-input100">
                                            <i className="fa fa-lock" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="container-login100-form-btn">
                                        <button className="login100-form-btn">
                                            Update
                                        </button>
                                    </div>
                                </form>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
