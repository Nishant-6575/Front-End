import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/javascript">JavaScriptXML</NavLink>
                        <NavLink className="nav-item nav-link" to="/return">ReturnCompo</NavLink>
                        <NavLink className="nav-item nav-link" to="/returnprops">ReturnProps</NavLink>
                        <NavLink className="nav-item nav-link" to="/counter">Counter</NavLink>
                        <NavLink className="nav-item nav-link" to="/button">Button</NavLink>
                        <NavLink className="nav-item nav-link" to="/form">Form</NavLink>
                        <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                        <NavLink className="nav-item nav-link" to="/age">Age</NavLink>
                        <NavLink className="nav-item nav-link" to="/map">Map</NavLink>
                        <NavLink className="nav-item nav-link" to="/user">User</NavLink>
                        <NavLink className="nav-item nav-link" to="/formtask">FormTask</NavLink>
                        <NavLink className="nav-item nav-link" to="/lifecycle">Lifecycle</NavLink>
                        <NavLink className="nav-item nav-link" to="/lifecycleupdate">LifecycleUpdate</NavLink>
                        <NavLink className="nav-item nav-link" to="/counterhook">CounterwithHook</NavLink>
                        <NavLink className="nav-item nav-link" to="/usereffect">UseEffectTask</NavLink>
                        <NavLink className="nav-item nav-link" to="/redux">ReduxTask</NavLink>
                        <NavLink className="nav-item nav-link" to="/rerender">Rerender</NavLink>
                        <NavLink className="nav-item nav-link" to="/crud">Crudusefile</NavLink>

                    </div>
                </div>
            </nav>

        </div>
    )
}
