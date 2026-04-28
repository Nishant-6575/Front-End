import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavTitle({title}) {
    const location = useLocation()
    return (
        <div>
            <section id="center" className="center_about">
                <div className="center_om bg_back">
                    <div className="container-xl">
                        <div className="row center_o1 text-center">
                            <div className="col-md-12">
                                <h1 className="text-white">{title}</h1>
                                <h6 className="col_green mb-0 mt-3 fw-normal">
                                    <Link className="text-light" to="/">Home</Link>
                                    <span className="mx-2 text-white-50">{location.pathname}</span> 
                                    
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default NavTitle