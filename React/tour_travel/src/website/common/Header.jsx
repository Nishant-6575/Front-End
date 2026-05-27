import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import useLogout from '../../Custom/logout'

function Header() {
    const { logout } = useLogout("user", "/userlogin")

    return (
        <div>
            <div>
                <section id="top" className="bg_dark pt-2 pb-2 px-3">
                    <div className="container-fluid">
                        <div className="row top_1">
                            <div className="col-md-8">
                                <div className="top_1l">
                                    <ul className="mb-0 font_14">
                                        <li className="text-white d-inline-block"><span className="fw-bold">Contact us:</span> +(123) 456-7890 </li>
                                        <li className="col_green d-inline-block font_8 mx-3 align-middle"><i className="fa fa-circle" /> </li>
                                        <li className="text-white d-inline-block">Travel Itinerary </li>
                                        <li className="col_green d-inline-block font_8 mx-3 align-middle"><i className="fa fa-circle" /> </li>
                                        <li className="text-white d-inline-block"><span className="fw-bold">Quote:</span> info@gmail.com </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="top_1r text-end">
                                    <ul className="mb-0 font_14">
                                        <li className="text-white d-inline-block">Twitter </li>
                                        <li className="col_green d-inline-block font_8 mx-3 align-middle"><i className="fa fa-circle" /> </li>
                                        <li className="text-white d-inline-block">Facebook </li>
                                        <li className="col_green d-inline-block font_8 mx-3 align-middle"><i className="fa fa-circle" /> </li>
                                        <li className="text-white d-inline-block">Instagram </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="header">
                    <nav className="navbar navbar-expand-md navbar-light shadow_box px-3" id="navbar_sticky">
                        <div className="container-fluid">
                            <a className="col_voilet p-0 navbar-brand fw-bold" href="index.html"><i className="fa fa-tripadvisor  align-middle col_green" /> GO TRAVEL <br /> <span className="col_green  font_10">ADVENTURE</span></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav m-0 ms-auto nav_left">
                                    <li className="nav-item">
                                        <NavLink className="nav-link fs-5" aria-current="page" to="/" >Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fs-5" to="/about">About </NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Blog
                                        </a>
                                        <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                                            <li><NavLink className="dropdown-item" to="/blog"> Blog</NavLink></li>
                                            <li><NavLink className="dropdown-item border-0" to="/blogdata"> Blog Detail</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Package
                                        </a>
                                        <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                                            <li><NavLink className="dropdown-item" to="/package"> Package</NavLink></li>
                                            <li><NavLink className="dropdown-item border-0" to="/packagedata"> Package Detail</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fs-5" to="/services">Services </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fs-5" to="/price">Pricing </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fs-5" to="/contact">Contact </NavLink>
                                    </li>
                                </ul>
                                <ul className="navbar-nav mb-0 ms-auto nav_right">
                                    {
                                        (() => {
                                            if (!(localStorage.getItem("Uid"))) {
                                                return (
                                                    <li className="nav-item">
                                                        <Link className="nav-link fs-5" to="userlogin">Log in </Link>
                                                    </li>
                                                )
                                            } else {
                                                return (
                                                    <li className="nav-item d-flex">
                                                        <Link className="nav-link fs-5" to="/edituser">helllo {localStorage.getItem("Uname")}</Link>
                                                        <Link className="nav-link fs-5" onClick={logout}>Log out </Link>
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

export default Header