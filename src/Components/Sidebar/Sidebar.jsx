import {  faBarsStaggered,
    faBoxOpen, faGears, faGift, faStore, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../Assets/sometinlogo250-150-red.png'



export default function Sidebar ( { children } ) {

    const [isOpen, setIsOpen] = useState(false)

    
    const Menus = [
        {
            title: 'Market Place',
            icon: <FontAwesomeIcon icon={ faStore} />,
            link: "/",
            gap: true,
        },
        { 
            title: 'Merchants',
            icon: <FontAwesomeIcon icon={ faBoxOpen } />,
            link: "/merchants",
            gap: true,
        },
        {
            title: 'My Wallet',
            icon: <FontAwesomeIcon icon={ faWallet} />,
            link: "/my-wallet",
            gap: true,
        },
        {
            title: 'My Vouchers',
            icon: <FontAwesomeIcon icon={ faGift }/>,
            link: "/my-voucher",
            gap: true,
        },
        {
            title: 'Depleted Vouchers',
            icon: <FontAwesomeIcon icon={ faGift} />,
            link: "/depleted-voucher",
            gap: true,
        },
        {
            title: 'Settings',
            icon: <FontAwesomeIcon icon={ faGears }/>,
            link: "/settings",
            gap: true,

        }
    ]
    return (
        <div className="flex">
            <div className={`h-screen bg-white shadow-md
            ${ isOpen ? 'w-72' : 'w-20'} duration-300 p-3 pt-8`}>
                <div className="flex gap-x-4 items-center">
                    <img src={ Logo } alt="brand-logo"
                    className={`w-14`} />
                    <h1 className={`text-[#362F62] origin-left
                    font-bold text-xl duration-300
                    ${ !isOpen && 'scale-0'}`}>somtin somtin</h1>
                </div>

                <ul className='p-0'>
                    {Menus.map((menu, index) => (
                        <li key={index} className={`text-gray-400 text-xl
                        flex items-center gap-x-4 cursor-pointer p-2
                        hover:bg-red-700 hover:text-white rounded-md
                        ${menu.gap ? 'mt-4' : 'mt-2'}`}
                        onClick={()=> {
                            window.location.pathname = menu.link;
                        }}>
                            
                                <span className="text-2xl">
                                    {menu.icon}
                                </span>
                                <span className={` ${ !isOpen && 'hidden'} origin-left
                                duration-200`}>
                                    {menu.title}
                                </span>
                            
                        </li>
                    ))}
                </ul>
                
            </div>
            <div className="container-fluid rleative pt-2 flex-1 h-screen">
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