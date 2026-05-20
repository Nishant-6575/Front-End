import React from 'react'
import {
  FaTachometerAlt,
  FaPlane,
  FaServicestack,
  FaBlog,
  FaMoneyBill,
  FaUsers,
  FaSignOutAlt,
  FaBars
} from "react-icons/fa";
import { NavLink, Link, Outlet } from 'react-router-dom'
import useLogout from '../../Custom/logout';

export default function AdminHeader() {

const { logout } = useLogout("admin", "/adminlogin")

  return (
    <div>

      <div className='d-flex'>
        <div style={{ width: "240px", flexShrink: 0 }}>
          <header id="header" className="bg-white shadow position-fixed top-0 start-0" style={{ width: "240px", height: "100vh" }}>

            <div className="navbar" id="navbarSupportedContent">
              <div className="p-3 text-center border-bottom w-100 fs-6" style={{ height: 80 }}>
                <h5 className="fw-bold  mb-0" style={{ color: "#35104d" }}>
                  GO TRAVEL
                </h5>
                <small className="text-success fw-semibold ">
                  ADVENTURE
                </small>
              </div>
            </div>

            <div className="p-3">
              <ul className="list-unstyled w-100 navbar-nav">

                <li className="mb-2 nav-item">
                  <NavLink
                    to="/admin/dashboard"
                    className="btn btn-light w-100 text-start rounded-3 py-3"
                  >
                    <FaTachometerAlt className="me-2" />
                    Dashboard
                  </NavLink>
                </li>

                <li className="mb-2">
                  <NavLink
                    to="/admin/packmng"
                    className="btn btn-light w-100 text-start rounded-3 py-3"
                  >
                    <FaPlane className="me-2" />
                    Packages
                  </NavLink>
                </li>

                <li className="mb-2">
                  <NavLink to="/admin/sermanage" className="btn btn-light w-100 text-start rounded-3 py-3">
                    <FaServicestack className="me-2" />
                    Services
                  </NavLink>
                </li>

                <li className="mb-2">
                  <NavLink to="/admin/blogmanage"  className="btn btn-light w-100 text-start rounded-3 py-3">
                    <FaBlog className="me-2" />
                    Blog Manage
                  </NavLink>
                </li>

                <li className="mb-2">
                  <NavLink to="/admin/pricemanage"  className="btn btn-light w-100 text-start rounded-3 py-3">
                    <FaMoneyBill className="me-2" />
                    Pricing
                  </NavLink>
                </li>

                <li className="mb-2">
                  <NavLink to="/admin/usermanage"  className="btn btn-light w-100 text-start rounded-3 py-3">
                    <FaUsers className="me-2" />
                    Users
                  </NavLink>
                </li>
              </ul>

            </div>
            <div className="position-absolute bottom-0 w-100 p-3">
              <button className="btn btn-danger w-100 py-3 rounded-3" onClick={logout}>
                <FaSignOutAlt className="me-2" />
                Logout
              </button>
            </div>
          </header>
        </div>

        <div className='flex-grow-1'>

          <nav className='navbar sticky-top bg-white shadow shadow-sm d-flex justify-content-between align-items-center p-3 px-4' style={{ height: 87 }}>
            <div>
              <h3 style={{ color: "#35104d" }}>Dashboard</h3>
              <small>Welcome back admin 👋</small>
            </div>

            <div>
              {
                (() => {
                  if (localStorage.getItem("Aid")) {
                    return (
                      <h5>
                        <Link className="fs-5 text-bold text-success">Helllo {localStorage.getItem("Aname")}</Link>
                      </h5>
                    )
                  }
                })()
              }
            </div>
          </nav>

          <div className='m-4'>
            <Outlet />
          </div>

        </div>
      </div>

    </div >
  )
}
