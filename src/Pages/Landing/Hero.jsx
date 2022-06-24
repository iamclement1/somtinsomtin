import { Link } from 'react-router-dom'
import Image from '../../Assets/hero-img.png'
import { FaApple, FaGooglePlay } from "react-icons/fa";
export default function Hero() {

    return (
        <main>
            <div className=" relative flex pt-11">
                <div className="flex flex-col w-full justify-between items-center
                md:flex-row-reverse pt-11">
                    <div className="md:w-5/6 mx-auto md:px-11 md:py-5 pt-11 md:pt-0 md:mb-0">
                        <img src={Image} alt="hero-Landing"
                            className="pt-16" />
                    </div>
                    <div className=" md:mx-20 md:w-4/6 border w-full border-red-600 border-3
                    ">
                        <h3 className="md:text-start text-xl text-[#E0013F] ">
                            SomtinSomtin
                        </h3>
                        <h2 className="font-bold md:text-6xl text-3xl text-[#0E1133]
                        md:text-start ">
                            A Gift Voucher That Rewards U
                        </h2>
                        <p className="text-gray-600 pt-3">
                            Buy, Share, Send & TopUp Your SomtinSomtin Gift Voucher; Earn Loyalty Points You Can Use Anywhere & Anytime!
                        </p>
                        <div className="md:flex md:space-x-2 pt-4 ">
                            <div>
                                <Link to="" className="flex no-underline p-3 bg-[#0E1133] 
                                text-white rounded-sm items-center">
                                    <FaApple />
                                    <button className="ml-2">
                                        Download for iOS
                                    </button>
                                </Link>
                            </div>
                            <div className="">
                                <Link to="" className="flex p-3 text-[#0E1133] rounded-sm no-underline items-center
                                border-2 border-solid border-[#0E1133] hover:bg-[#0E1133] hover:text-white
                                hover:border-none ">
                                    <FaGooglePlay />
                                    <button className="ml-2">
                                        Download for Android
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}