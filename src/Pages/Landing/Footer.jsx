import { FaApple, FaGooglePlay, FaPhone, FaRegEnvelope } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/brand-logo/sometinlogo250-150-red.png'
export default function Footer() {


    return (
        <div className="container-fluid relative bg-gray-200">
            <div className="container pt-6 align-center">
                <div className="row pt-5 pb-4">
                    <div className="col-md-5">
                        <div>
                            <img src={Logo} alt="brand__logo"
                                className="md:w-1/6 w-1/6 " />
                            {/* <span>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti a ipsam eius ut sapiente perspiciatis!
                            </span> */}
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <h2 className="text-xl font-bold text-[#0E1133]">Home</h2>
                            <Link to="/login" className="text-gray-600 no-underline font-semibold text-sm hover:text-red-700 ">
                                <p>Consumers</p>
                            </Link>
                            <Link to="/" className="text-gray-600 no-underline font-semibold text-sm hover:text-red-700 ">
                                <p>Vendors</p>
                            </Link>
                            <Link to="/" className="text-gray-600 no-underline font-semibold text-sm hover:text-red-700 ">
                                <p>Companies</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <h2 className="text-xl font-bold text-[#0E1133]">
                                Resources
                            </h2>
                            <Link to="/terms" className="text-gray-600 no-underline font-semibold text-sm hover:text-red-700 ">
                                <p>Terms of Service</p>
                            </Link>
                            <Link to="/consumer-terms" className="text-gray-600 no-underline font-semibold text-sm hover:text-red-700 ">
                                <p>Terms of Sale</p>
                            </Link>
                            <Link to="/corporate-terms" className="text-gray-600 no-underline font-semibold text-sm hover:text-red-700 ">
                                <p>Corporate Terms Of Sale</p>
                            </Link>
                            <Link to="/privacy-terms" className="text-gray-600 no-underline font-semibold text-sm hover:text-red-700 ">
                                <p>Privacy Policy</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2 className="text-xl font-bold text-[#0E1133]">
                            Get In Touch
                        </h2>
                        <div className="flex align-center space-x-3 items-center mb-2">
                            <FaRegEnvelope className="text-red-600" />
                            <button onClick={() => window.location.href = 'mailto:support@somtinsomtin.com'}
                                className="text-gray-600 cursor-pointer">
                                support@somtinsomtin.com
                            </button>
                        </div>
                        <div className="flex align-center space-x-3 items-center mb-2">
                            <FaPhone className="text-red-600" />
                            <button onClick={() => window.location.href = "tel:+233242426456"}
                                className="text-gray-600 cursor-pointer">
                                +233242426456
                            </button>
                        </div>
                        <div className="flex space-x-3 align-center items-center">
                            <GrLocation className="text-red-600 text-4xl" />
                            <span className="text-gray-600 ">
                                Block A Accra Digital Center | Ring Road West Accra Ghana
                            </span>
                        </div>
                    </div>
                    <div className="row pb-4 pt-4">
                        <hr className="text-gray-600 mt-4 mb-4" />
                        <div className="col-md-3 pt-2">
                            <div>
                                <button onClick={() => window.location.href = "https://apps.apple.com/gh/app/somtin-somtin/id1597263559"}
                                    target="_blank" className="flex justify-center no-underline p-3 bg-white 
                                text-[#0E1133] rounded-sm items-center hover:bg-gray-300 w-full">
                                    <FaApple />
                                    <button className="ml-2">
                                        Download for iOS
                                    </button>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-3 pt-2 transition ease-in-out delay-200 duration-300">
                            <button onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.somtinsomtin.app"}
                                target="_blank" className="flex justify-center p-3 text-[#0E1133] rounded-sm no-underline items-center
                                border-2 border-solid border-[#0E1133] hover:bg-[#0E1133] hover:text-white
                                hover:border-none w-full">
                                <FaGooglePlay />
                                <button className="ml-2">
                                    Download for Android
                                </button>
                            </button>
                        </div>
                        <div className="col-md-6 pt-2">
                            <p className="text-sm items-center align-center pt-3">
                                Copyright © 2021 A KudiGo Product In Partnership With Korba - All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}