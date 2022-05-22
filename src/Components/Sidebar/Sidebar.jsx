import {  faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../Assets/sometinlogo250-150-red.png'

export default function Sidebar ( { children } ) {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex">
            <div className=" bg-white shadow-md sidebar">
                <div className={` ${isOpen ? 'w-60' : 'w-20'} relative
                duration-300 h-screen p-4 pt-5`}>
                    <div className="flex text-center gap-x-4 align-center items-center">
                        <img src={ Logo} alt="brand-logo"
                            className={`cursor-pointer duration-500 text-red-500
                            ${ isOpen ? "w-1/6" : "w-10" } `} />
                            <h1 className={` text-dark origin-left font-medium text-xl
                                duration-300 text-center pt-3 ${!isOpen && 'scale-0'}`}>
                                    SomtinSomtin
                            </h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid rleative pt-2">
                <div className="row">
                    <div className="col-md-12">
                        <nav className=" navbar navbar-expand-lg 
                            px-4 px-lg-5 py-4 py-lg-0 sticky-top bg-white
                            shadow-md text-red-dark p-6 ">
                                <div className=" space-x-12 py-2">
                                    <div>
                                        <FontAwesomeIcon icon={ faBarsStaggered }
                                        className={`absolute cursor-pointer -left top-4
                                        w-7 text-red-700 text-4xl ${!isOpen && 'rotate-180'}`}
                                        onClick={() => setIsOpen(!isOpen)} />
                                    </div>
                                    <div className="flex justify-content items-center">
                                        <div>
                                            <h1>Marketplace</h1>
                                        </div>
                                        <div>
                                            <NavLink to="/login" className="nav-item nav-link">
                                                Sign in
                                            </NavLink>

                                        </div>
                                    </div>
                                </div>
                                            
                                        

                                    {/* <button className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarCollapse">
                                        <FontAwesomeIcon icon={ faBars } />
                                    </button> */}

                            <div className="collapse navbar-collapse" id="navbarCollapse">
                            </div>
                        </nav>
                    </div>
                    <div className="col-md-12">
                        { children }
                    </div>
                </div>
            </div>
        </div>
    )
}