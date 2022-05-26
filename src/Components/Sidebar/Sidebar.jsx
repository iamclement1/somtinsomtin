import {  faBarsStaggered,
    faBoxOpen, faGears, faGift, faStore, faWallet,
    faBell, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
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
            <div>
                <div className='fixed z-10'>
                <aside className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                    <div className="sticky inset-0 overflow-hidden">
                        <div className="relative overflow-hidden">

                            <div className="">
                                <div className={`h-screen bg-white
                                ${ isOpen ? 'w-72' : 'hidden'} duration-200 p-3 pt-8
                                md:hidden relative flex flex-col z-10 ease-in-out`}>
                                    <div className="flex gap-x-4 items-center">
                                        <FontAwesomeIcon icon={ faXmark } 
                                        className={`text-3xl text-[#E4043C]`} 
                                        onClick={() => setIsOpen(!isOpen)}/>
                                        
                                    </div>

                                    <ul className='p-0'>
                                        {Menus.map((menu, index) => (
                                            <li key={index} className={`text-gray-400 text-xl
                                            flex items-center gap-x-4 cursor-pointer p-2
                                            hover:bg-[#E4043C] hover:text-white rounded-md
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
                            </div>
                        </div>
                    </div>
                </aside>
                </div>

                {/* desktop view sidebar */}
                <aside className="fixed z-20" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                    <div className="inset-0 overflow-hidden">
                        <div className="relative overflow-hidden">

                            <div className="">
                                <div className={`h-screen bg-white
                                ${ isOpen ? 'w-72' : 'w-20' } duration-200 
                                ease-in-out p-3 pt-8 hidden md:block`}>
                                    <div className="flex gap-x-4 items-center">
                                        <img src={ Logo } alt="brand-logo"
                                        className={`w-14`} />
                                        <h1 className={`text-[#362F62] origin-left
                                        font-bold text-2xl duration-300
                                        ${ !isOpen && 'scale-0'}`}>somtin somtin</h1>
                                    </div>

                                    <ul className='p-0'>
                                        {Menus.map((menu, index) => (
                                            <li key={index} className={`text-gray-400 text-xl
                                            flex items-center gap-x-4 cursor-pointer p-2
                                            hover:bg-[#E4043C] hover:text-white rounded-md
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
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            <div className="container-fluid relative h-screen bg-[#FBFBFB]">
                <div className="row">
                    <div className="col-md-12">
                        <nav className={`w-full
                            px-4 px-lg-5 py-4 py-lg-0 bg-white
                            text-red-dark p-6 fixed z-10`}>
                                <div className={`w-full space-x-12 md:py-2 z-10
                                ${ isOpen ? 'pl-72' : 'pl-8'} `}>
                                    <div>
                                        <FontAwesomeIcon icon={ faBarsStaggered }
                                        className={`absolute cursor-pointer -left md:top-4
                                        w-7 text-[#E4043C] text-4xl ${!isOpen && 'rotate-180'}`}
                                        onClick={() => setIsOpen(!isOpen)} />
                                    </div>
                                    <div className="flex justify-between w-full
                                    align-center text-center">
                                        <div className="navbar-brand hidden md:block ">
                                            <h1>Marketplace</h1>
                                        </div>
                                        <div className=" nav-item pr-24 md:py-2 space-x-6">
                                            <FontAwesomeIcon icon={ faBell } className="text-white
                                            md:text-2xl bg-[#E4043C] p-2 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                        </nav>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 py-20">
                            <div className={` ${ isOpen ? 'pl-72' : 'pl-16'}`}>
                                { children }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}