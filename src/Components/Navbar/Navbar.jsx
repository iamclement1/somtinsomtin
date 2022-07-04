import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../Assets/brand-logo/sometinlogo250-150-red.png'

export default function Navbar(fixed) {
    const [showNav, setShowNav] = useState(false);

    const handleNav = () => {
        setShowNav(!showNav)
    }
    return (
        <div>
            <nav className='fixed top-0 z-10 w-full md:justify-between bg-white
            text-white font-Poppins '>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
                    <div className='flex items-center justify-between px-4 py-5'>
                        <div className='flex-shrink-0 relative mr-auto'>
                            <Link to='/'>
                                <img src={Logo} alt="Clement-Logo"
                                    className='md:w-2/6 w-1/6' />
                            </Link>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-10 flex items-baseline space-x-4 text-black'>
                                <NavLink to='/' className='py-3 px-3 text-[#222554] font-semibold
                                no-underline uppercase text-sm '>
                                    Home
                                </NavLink>

                                <NavLink to='/' className='py-3 px-3 text-[#222554] font-semibold
                                no-underline uppercase text-sm'>
                                    About
                                </NavLink>

                                <NavLink to='/' className='py-3 px-3 text-[#222554] font-semibold
                                no-underline uppercase text-sm'>
                                    Marketplace
                                </NavLink>

                                <NavLink to='/contact' className='py-3 px-3 text-[#222554] font-semibold
                                no-underline uppercase text-sm'>
                                    Contact
                                </NavLink>

                                
                                <NavLink to="/login" className='py-3 px-3 text-[#222554] font-semibold
                                no-underline uppercase text-sm'>
                                    <FontAwesomeIcon icon={faUser} className="ml-24" />
                                    <span className="ml-3">
                                        Login
                                    </span>
                                </NavLink>
                                <NavLink to="" className='py-3 px-3 bg-[#E0013F] text-white 
                                font-semibold rounded-md hover:bg-[#222554]
                                no-underline uppercase text-sm'>
                                    <button className="font-bold">
                                        Merchant Login
                                    </button>
                                </NavLink>
                            </div>

                        </div>
                        <div className='-mr-2 flex md:hidden'>
                            <button type='button' onClick={handleNav} className='bg-[#E0013F] 
                        inline-flex items-center justify-center p-2 rounded-md 
                        text-gray-400 hover:text-white focus:outline-none'
                                aria-controls='mobile-menu' aria-expanded='false'>
                                <span className='sr-only'>Open main meunu</span>
                                {!showNav ? (
                                    <svg className='block h-6 w-6'
                                        xmlns='http://www.w3.org/2000/svg' fill='none'
                                        viewBox='0 0 24 24' stroke='currentcolor'
                                        aria-hidden='true'>
                                        <path strokeLinecap='round' strokeLinejoin='round'
                                            strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                                    </svg>
                                ) : (
                                    <svg className='block h-6 w-6'
                                        mlns='http://www.w3.org/2000/svg' fill='none'
                                        viewBox='0 0 24 24' stroke='currentcolor' aria-hidden='true'>
                                        <path strokeLinecap='round' strokeLinejoin='round'
                                            strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition show={showNav} enter='transition ease-out duration-200 transform'
                    enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100'
                    leave='transition ease-in duration-75 transform'
                    leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
                    {(ref) => (
                        <div className='md:hidden' id='mobile-menu'>
                            <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                                <NavLink to='/' className='block py-3 px-8 text-[#222554]
                                transition duration-300 no-underline font-semibold uppercase'>Home</NavLink>

                                <NavLink to='/login' className='block py-3 px-8 text-[#222554] 
                                transition duration-300 no-underline font-semibold uppercase'>Consumer</NavLink>

                                <NavLink to='' className='block py-3 px-8 text-[#222554]
                                transition duration-300 no-underline font-semibold uppercase'>Vendor</NavLink>

                                <NavLink to='' className='block py-3 px-8 text-[#222554]
                                transition duration-300 no-underline font-semibold uppercase'>Support</NavLink>



                                <div className='text-white text-2xl cursor-pointer block'>
                                    <NavLink to="/login" className='block py-3 px-3 text-[#222554] font-semibold
                                no-underline uppercase text-sm'>

                                        <span className="ml-3">
                                            Consumer Login
                                        </span>
                                    </NavLink>
                                    <NavLink to="" className='block py-3 px-6 bg-[#E0013F] text-white 
                                font-semibold rounded-md hover:bg-[#222554]
                                no-underline uppercase text-sm'>
                                        <button className="font-bold">
                                            Vendor Login
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>);
}