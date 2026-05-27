import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import useRegEdit from '../../Custom/regedit'

export default function URegister() {

  const { getchange, getsubmit } = useRegEdit("users", "/userlogin")

  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="bg-light p-5 rounded">
            <form className="login100-form validate-form" onSubmit={getsubmit} action="">
              <div>
                <span className="login100-form-title">
                  Create your Account
                </span>
              </div>
              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" name="name" placeholder="Your Name" onChange={getchange} />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-user" aria-hidden="true" />
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email" onChange={getchange} />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="password" placeholder="Password" onChange={getchange} />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="repassword" placeholder="Repeat Password" onChange={getchange} />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
