import React, { useEffect } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Aheader() {

    const redir = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("Aid")) {
            redir("/adminlogin")
        }
    },)

    const logout = () => {
        localStorage.removeItem("Aid")
        localStorage.removeItem("Aname")
        redir("/adminlogin")
        toast.success("Logout Sucessfully")
    }

    return (
        <div>
            <div>
                <section id="header">
                    <nav className="navbar navbar-expand-md navbar-light shadow_box px-3" id="navbar_sticky">
                        <div className="container-fluid">
                            <a className="col_voilet p-0 navbar-brand fw-bold"><i className="fa fa-tripadvisor  align-middle col_green" /> GO TRAVEL <br /> <span className="col_green  font_10">ADVENTURE</span></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav m-0 ms-auto nav_left">
                                    <li className="nav-item">
                                        <NavLink className="nav-link fs-5" aria-current="page" to="/dashboard" >Dashboard</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Package
                                        </a>
                                        <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                                            <li><NavLink className="dropdown-item" to="/packmng"> Package Manage</NavLink></li>
                                            <li><NavLink className="dropdown-item border-0" to="/packadd"> Package Add</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fs-5" to="/sermanage">Services Manage </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fs-5" to="/blogmanage">Blog Manage </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fs-5" to="/pricemanage">Manage Pricing </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fs-5" to="/usermanage">Manage User </NavLink>
                                    </li>
                                </ul>
                                <ul className="navbar-nav mb-0 ms-auto nav_right">
                                    {
                                        (() => {
                                            if (localStorage.getItem("Aid")) {
                                                return (
                                                    <li className="nav-item">
                                                        <p className="nav-link fs-5">helllo {localStorage.getItem("Aname")}</p>
                                                    </li>
                                                )
                                            }
                                        })()
                                    }
                                    {
                                        (() => {
                                            if (localStorage.getItem("Aid")) {
                                                return (
                                                    <li className="nav-item">
                                                        <Link className="nav-link fs-5" onClick={logout}>Logout</Link>
                                                    </li>
                                                )
                                            }
                                        })()
                                    }
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
            </div>
        </div>
    )
}
