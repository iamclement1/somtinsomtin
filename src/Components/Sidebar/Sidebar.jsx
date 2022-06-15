import {
    faBarsStaggered,
    faBell, faXmark
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react'
import {  NavLink, Route, Routes } from 'react-router-dom';
import Logo from '../../Assets/sometinlogo250-150-red.png'
import { Menus } from '../../Utils/MenuData'
import { routes } from '../../Utils/NavTitle'




export default function Sidebar({ children }, props) {

    const [isOpen, setIsOpen] = useState(true)

    
    return (
        <div className="flex">
            <div>
                <div className='fixed z-30'>
                    <aside className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                        <div className="sticky inset-0 overflow-hidden">
                            <div className="relative overflow-hidden">

                                <div className="">
                                    <div className={`h-full bg-white
                                ${isOpen ? 'w-72' : 'hidden'} duration-200 p-3 pt-8
                                md:hidden relative flex flex-col z-10 ease-in-out`}>
                                        <div className="flex gap-x-4 items-center">
                                            <FontAwesomeIcon icon={faXmark}
                                                className={`text-3xl text-[#E4043C]`}
                                                onClick={() => setIsOpen(!isOpen)} />

                                        </div>

                                        <ul className='p-0'>
                                            {Menus.map((menu, index) => (
                                                <li key={index} className={`text-gray-400 text-xl
                                            flex items-center gap-x-6 cursor-pointer p-2
                                            hover:bg-[#E4043C] hover:text-white rounded-md
                                            ${menu.gap ? 'mt-4' : 'mt-2'} ${index === 0 && 'bg-[#e4043c]'}`}
                                                    onClick={() => {
                                                        window.location.pathname = menu.link;
                                                    }}>
                                                    <span className={`text-2xl`}>
                                                        {menu.icon}
                                                    </span>
                                                    <span className={` ${!isOpen && 'hidden'} origin-left
                                                        duration-200`} activeclassname="active">
                                                        {menu.title}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* desktop view sidebar */}
                <aside className="fixed z-20" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                    <div className="inset-0 overflow-hidden">
                        <div className="relative overflow-hidden">

                            <div className="Sidebar">
                                <div className={`h-full bg-white
                                ${isOpen ? 'w-72' : 'w-20'} duration-200 
                                ease-in-out p-3 pt-8 hidden md:block`}>
                                    <div className="flex gap-x-4 items-center">
                                        <img src={Logo} alt="brand-logo"
                                            className={`w-14`} />
                                        <h1 className={`text-[#362F62] origin-left
                                        font-bold text-2xl duration-300
                                        ${!isOpen && 'scale-0'}`}>somtin somtin</h1>
                                    </div>

                                    <ul className='p-0 menu-item SidebarList'
                                        data-tooltip-target="tooltip-default">
                                        {Menus.map((menu, menus) => (
                                            <Tooltip title={menu.title} arrow key={menu.id}>
                                                <li key={menus} className={`text-gray-400 text-xl
                                            flex items-center gap-x-4 cursor-pointer p-2 active
                                            hover:bg-[#E4043C] hover:text-white rounded-md
                                            ${menu.gap ? 'mt-4' : 'mt-2'}`}
                                                    id={window.location.pathname === menu.link ? "active" : ""}
                                                    onClick={() => {
                                                        window.location.pathname = menu.link;
                                                    }}>
                                                    <span className="text-2xl" key={menu.icon}>
                                                        {menu.icon}
                                                    </span>
                                                    <span className={` ${!isOpen && 'hidden'} origin-left
                                                        duration-200`} key={menu.title}>
                                                        {menu.title}
                                                    </span>
                                                </li>
                                            </Tooltip>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            <div className="container-fluid relative h-full bg-[#FBFBFB]">
                <div className="row">
                    <div className="col-md-12">
                        <nav className={`w-full
                            px-4 px-lg-5 py-4 py-lg-0 bg-white
                            text-red-dark p-8 fixed z-10`}>
                            <div className={`w-full space-x-12 md:py-2 z-10
                                ${isOpen ? 'pl-72' : 'pl-8'} `}>
                                <div>
                                    <FontAwesomeIcon icon={faBarsStaggered}
                                        className={`absolute cursor-pointer -left md:top-4
                                        w-7 text-[#E4043C] text-4xl ${!isOpen && 'rotate-180'}`}
                                        onClick={() => setIsOpen(!isOpen)} />
                                </div>
                                <div className="flex justify-between w-full align-center text-center">
                                    {routes.map((route, routes) => (
                                        <div className="flex justify-between w-full
                                                align-center text-center">
                                            <div className="navbar-brand hidden md:block ">
                                                <Routes>
                                                    <Route key={routes}
                                                        path={route.path}
                                                        exact={route.exact}
                                                        element={window.location.pathname === route.path && <route.main /> } />
                                                </Routes>

                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex nav-item pr-24 md:py-2 md:space-x-4">
                                        <FontAwesomeIcon icon={faBell} className="text-[#e4043c]
                                                        md:text-2xl p-2 rounded-full" />
                                        <NavLink to="" className="nav-link">
                                            {/* {user.first_name.substring(0, user.first_name.length)} */}

                                        </NavLink>

                                    </div>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className={`col-md-12 py-20 relative `}>
                            <div className={` ${isOpen ? 'pl-72' : 'pl-14'} pl-0 md:pl-72 md:hidden duration-200 ease-in-out `}>
                                {children}

                            </div>
                            {/* Desktop */}
                            <div className={` ${isOpen ? 'pl-72' : 'pl-14'} md:block hidden duration-200 ease-in-out `}>
                                {children}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
