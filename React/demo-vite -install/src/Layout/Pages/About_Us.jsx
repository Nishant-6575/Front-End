import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link, Outlet } from 'react-router-dom'




export default function About_Us() {
    return (
        <div>
            <Header />

            <h1>This is About US</h1>

            <Link to="about1">
                <button className='btn btn-info'>About 1</button>
            </Link>
            <Link to="about2">
                <button className='btn btn-danger'>About 2</button>
            </Link>
            <Outlet />
            <Footer />

        </div>
    )
}
