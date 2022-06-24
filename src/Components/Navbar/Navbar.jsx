import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from '../../Assets/sometinlogo250-150-red.png'

export default function Navbar(fixed) {
    const [isOpen, setIsOpen] = useState()
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3 shadow-sm">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <img src={Logo} alt="Brand" className="w-2/6" />
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (isOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="px-3 py-2 flex no-underline items-center text-sm uppercase font-bold
                                    leading-snug text-[#222544] hover:opacity-75">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="px-3 py-2 flex no-underline items-center text-sm uppercase font-bold
                                    leading-snug text-[#222544] hover:opacity-75">
                                    Consumers
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="px-3 py-2 flex no-underline items-center text-sm uppercase font-bold
                                    leading-snug text-[#222544] hover:opacity-75" >
                                    Vendors
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="px-3 py-2 flex no-underline items-center text-sm uppercase font-bold
                                    leading-snug text-[#222544] hover:opacity-75" >
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className=" flex flex-col lg:flex-row lg:ml-auto space-x-6 items-center">
                            <li className="flex ">
                                <Link to="/login" className="nav-item text-[#222544] 
                                no-underline uppercase space-x-2">
                                    <FontAwesomeIcon icon={faUser} className="" />
                                    <span className="text-sm font-bold">
                                        Consumer
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button className="bg-[#E0013F] p-2 rounded-sm uppercase font-semibold
                                text-white text-sm hover:bg-white focus:text-red-600 focus:outline-red-600 ">
                                    Vendor Login
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}