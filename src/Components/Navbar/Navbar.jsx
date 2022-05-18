import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {

    return (
    <div className="text-red-500 pt-2 w-full">
        <div className="container-xxl position-relative">
            <nav className=" navbar navbar-expand-lg 
            px-4 px-lg-5 py-3 py-lg-0 sticky-top bg-white
            shadow-md text-red-dark p-6 ">
                <Link to='/' className="navbar-brand p-3 text-blue-800">
                    <h2>
                        Dashboard
                    </h2>
                </Link>

                <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                    <FontAwesomeIcon icon={ faBars } />
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 px-3 text-start">
                        <NavLink to='/login'
                        className="nav-item nav-link">
                            Sign in
                        </NavLink>
                        <NavLink to='/register'
                        className="nav-item nav-link">
                            Sign up
                        </NavLink>
                        <div className="flex px-4 py-2 items-center rounded-md bg-blue-800 p-2">
                            <FontAwesomeIcon icon={faSearch} className="float-left block text-white
                            mr-3" />
                            <input type={"search"} className="text-base bg-transparent w-full text-white
                            focus:outline-none"
                            placeholder='Search here...' />
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    </div>

)
}

export default Navbar
