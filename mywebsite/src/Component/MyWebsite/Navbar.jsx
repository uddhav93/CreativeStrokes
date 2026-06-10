import React from 'react'
import img1 from './Images/logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to='/' className='navbar-brand'><img src={img1} alt="logo" height={'75'} /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className='nav-link'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/product' className='nav-link'>Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/cart' className='nav-link'>Cart</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                        <NavLink to='/product'><button className="btn btn-outline-info" type="submit">Shop Here</button></NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
