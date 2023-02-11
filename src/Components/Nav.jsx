import React from 'react'
import './styleSheets/Nav.css'
import { Link } from 'react-router-dom'

function Nav() {

    return (
        <>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>Learn React</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">Menu
                        <i className="fa fa-outdent"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'ourgoal'}>Goal</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'about'}>About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to={'portfolio'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Portfolio
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={'portfolio/'}>Project 1</Link></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav