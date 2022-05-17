import { useEffect, useState } from 'react'
// import { faGifts } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../Assets/sometinlogo250-150-red.png'

import Navbar from '../Navbar/Navbar'
import Icon from '../../Assets/icon.png'
import { useLocation } from 'react-router-dom'

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
                <img src= { Icon } alt="brand-logo"
                className={`absolute cursor-pointer -right-3 top-9
                w-7 text-warning text-2xl ${!isOpen && 'rotate-180'}`}
                onClick={() => setIsOpen(!isOpen)} />
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
        <div>
            <Navbar />
            { children }
        </div>
    </div>
    )
}

export default Sidebar