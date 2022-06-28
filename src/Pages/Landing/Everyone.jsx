import { useEffect } from 'react'
import Aos from 'aos'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import Shopping from '../../Assets/traffic-thumb.png'
import { BsArrowRight } from 'react-icons/bs'
export default function Everyone() {
    useEffect(() => {
        // gives global animation to all animation
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <main>
            <div className="relative">
                <div className="md:flex md:p-32">
                    <div>
                        <h4 className="text-red-700 text-sm">Somtin for your Staff</h4>
                        <h1 className="text-[#0E1133] font-bold ">
                            Somtin For Everyone
                        </h1>
                        <p className="text-gray-600 md:w-4/6 pb-6">
                            Give your staff the power to choose how they send their Voucher. Simply allocate them an amount, and give them freedom to spend on any voucher.
                        </p>
                        <div className="md:flex justify-center m-auto">
                            <div className="md:pt-0 pb-2 md:p-0 p-12 m-auto align-center ">
                                <div className="flex space-x-4">
                                    <IoCheckmarkCircleSharp
                                        className="text-2xl" />
                                    <h3 className="text-[#0E1133] font-bold text-xl ">
                                        Bulk Upload Contacts
                                    </h3>
                                </div>
                                <div className="ml-10">
                                    <p className="w-4/6 ">
                                        Upload your contacts or staff info using an excel template
                                    </p>
                                </div>
                            </div>
                            <div className=" items-center md:p-0 p-12 ">
                                <div className="flex space-x-4">
                                    <IoCheckmarkCircleSharp
                                        className="text-2xl" />
                                    <h3 className="text-[#0E1133] font-bold text-xl ">
                                        Create Voucher Value
                                    </h3>
                                </div>
                                <div className="ml-10">
                                    <p className="w-4/6 ">
                                        Create different voucher values for each department or individual
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="flex md:pt-2 justify-center p-2 text-[#0E1133] rounded-sm no-underline items-center
                                border-2 border-solid border-[#0E1133] hover:bg-red-700 hover:text-white
                                hover:border-none md:w-2/6 w-full space-x-4">
                            <button className="ml-2">
                                Get Started
                            </button>
                            <BsArrowRight />
                        </button>
                    </div>
                    <div>
                        <img src={Shopping} alt="img"
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out" />
                    </div>
                </div>
            </div>
        </main>
    )
}