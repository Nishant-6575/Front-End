import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <h1>This is header</h1>
            <Link to="/">
                <button>Home</button>
            </Link>
             <Link to="/about">
                <button>About US</button>
            </Link>
        </div>
    )
}
