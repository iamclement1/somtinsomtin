import { useState } from 'react'
import { faGifts } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dashboard from '../../Pages/Dashboard'
import Navbar from '../Navbar/Navbar'
import Icon from '../../Assets/icon.png'

function Sidebar() {

    const [isOpen, setIsOpen] = useState(true)

    // const Menus = [
    //   { title: 'Dashboard', src: ''}
    // ]

    return (
    <div className="flex bg-gray-50">
        <div className={`${isOpen ? 'w-52' : 'w-20'} relative duration-300 h-screen
        p-4 pt-5 bg-white shadow-md login-background`}>
            <div>
                <img src= { Icon } alt="brand-logo"
                className={`absolute cursor-pointer -right-3 top-9
                w-7 text-warning text-2xl ${!isOpen && 'rotate-180'}`}
                onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div className="flex text-center gap-x-8 align-center items-center">
                <FontAwesomeIcon icon={ faGifts }
                className='cursor-pointer duration-500 text-red-500 text-2xl' />
                <h1 className={` text-white origin-left font-medium text-xl
                duration-300 text-center pt-3 ${!isOpen && 'scale-0'}`}>
                    Sometin
                </h1>
            </div>
        </div>
        <div>
          <Navbar />
          <Dashboard />
        </div>
    </div>
    )
}

export default Sidebar