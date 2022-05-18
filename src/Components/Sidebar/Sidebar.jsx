import { useEffect, useState } from 'react'
// import { faGifts } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../Assets/sometinlogo250-150-red.png'


import { Link, NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

function Sidebar({ children}) {

    const [isOpen, setIsOpen] = useState(true)
    const location = useLocation(true)
    const [ titleApp, setTitleApp] = useState('');

    // const Menus = [
    //   { title: 'Dashboard', src: ''}
    // ]

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setTitleApp("Dashboard");
                break;
            case "/marketplace":
                setTitleApp("Marketplace");
                break;
            case "/user-profile":
                setTitleApp("User Profile");
                break;
            default:
                setTitleApp("Dashboard");
        }
    }, [location, setTitleApp, titleApp]);



    

    return (
    <div className="flex bg-gray-50 h-screen">
        <div className={`${isOpen ? 'w-52' : 'w-20'} relative duration-300
        p-4 pt-5 bg-white shadow-md login-background `}>
            <div>
                {/* <img src= { Icon } alt="brand-logo"
                className={`absolute cursor-pointer -right-3 top-9
                w-7 text-warning text-2xl ${!isOpen && 'rotate-180'}`}
                onClick={() => setIsOpen(!isOpen)} /> */}
            </div>
            <div className="flex text-center gap-x-2 align-center items-center">
                <img src={ Logo } alt="brand-logo"
                className={`${isOpen ? "w-1/4" : "w-4/4"} cursor-pointer text-xl
                duration-500 mr-2 `} />
                {/* <FontAwesomeIcon icon={ faGifts }
                className={`cursor-pointer duration-500 text-red-500 text-xl float-left
                mr-2 ${ isOpen && "rotate-[360deg]"}`} /> */}
                <h1 className={` text-white origin-left font-medium text-xl
                duration-300 text-center pt-2 ${!isOpen && 'scale-0'}`}>
                    Sometin
                </h1>
            </div>
        </div>

        {/* navbar session */}
        <div className="relative text-indigo-800">
            <div className="containe-xxl w-full">
                <nav className="navbar navbar-expand-lg px-4 px-lg-5
                py-3 py-lg-0 stick-top bg-white shadow-sm text-dark">

                    <FontAwesomeIcon icon={ faBarsStaggered } 
                        className={` cursor-pointer text-[#5B0E2A] rounded-sm text-3xl font-bold
                        ${ !isOpen && 'rotate-180'}`}
                            onClick={() =>setIsOpen(!isOpen) }/>

                    <Link to="" className="navbar-brand p-3 ">
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

                    <div className="collapse navbar-collapse"
                    id='#navbarCollapse'>
                        <div className="navbar-nav ms-auto py-0 px-3 text-start">
                            <NavLink to="/login"  className="nav-item nav-link">
                                Login
                            </NavLink>
                            <NavLink to="/register" className="nav-item nav-link">
                                Sign Up
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
            { children }
        </div>
    </div>
    )
}

export default Sidebar