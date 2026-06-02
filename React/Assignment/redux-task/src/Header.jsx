import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/counter">Counter</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/todo">To Do</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/crud">CRUD</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}
