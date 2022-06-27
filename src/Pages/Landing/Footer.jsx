import { FaPhone, FaRegEnvelope } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/sometinlogo250-150-red.png'
export default function Footer() {
    return (
        <div className="container-fluid relative bg-gray-200">
            <div className="container pt-6 align-center">
                <div className="row pt-5 pb-4">
                    <div className="col-md-5">
                        <div>
                            <img src={Logo} alt="brand__logo"
                                className="md:w-1/6 w-1/6" />
                            <span>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti a ipsam eius ut sapiente perspiciatis!
                            </span>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <h2 className="text-xl font-bold text-[#0E1133]">Home</h2>
                            <Link to="/" className="text-gray-600 no-underline font-semibold text-sm hover:text-red-700 ">
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
                            <Link to="/" className="text-gray-600 no-underline font-semibold text-sm hover:text-red-700 ">
                                <p>Terms of Service</p>
                            </Link>
                            <Link to="/" className="text-gray-600 no-underline font-semibold text-sm hover:text-red-700 ">
                                <p>Terms of Sale</p>
                            </Link>
                            <Link to="/" className="text-gray-600 no-underline font-semibold text-sm hover:text-red-700 ">
                                <p>Corporate Terms Of Sale</p>
                            </Link>
                            <Link to="/" className="text-gray-600 no-underline font-semibold text-sm hover:text-red-700 ">
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
                            <span className="text-gray-600">
                                Block A Accra Digital Center | Ring Road West Accra Ghana
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}