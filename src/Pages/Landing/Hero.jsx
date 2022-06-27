import Image from '../../Assets/hero-img.png'
import { FaApple, FaGooglePlay } from "react-icons/fa";
export default function Hero() {


    return (
        <main>
            <div className=" relative flex pt-11">
                <div className="flex flex-col w-full justify-between items-center
                md:flex-row-reverse pt-11 bg-hero">
                    <div className="md:w-5/6 mx-auto md:px-11 md:py-5 md:pt-11 md:mb-0">
                        <img src={Image} alt="hero-Landing"
                            className="pt-36" />
                    </div>
                    <div className=" md:mx-20 md:w-4/6 w-full">
                        <h3 className="md:block flex justify-center text-xl text-[#E0013F] ">
                            SomtinSomtin
                        </h3>
                        <h2 className="md:block font-bold md:text-6xl 
                        text-4xl text-[#0E1133]">
                            A Gift Voucher That Rewards U
                        </h2>
                        <p className="md:block flex justify-center md:text-xl 
                        items-center align-center md:text-start text-xl text-gray-600 pt-3">
                            Buy, Share, Send & TopUp Your SomtinSomtin Gift Voucher; Earn Loyalty Points You Can Use Anywhere & Anytime!
                        </p>
                        <div className="md:flex md:space-x-2 pt-4 ">
                            <div>
                                <button onClick={() => window.location.href = "https://apps.apple.com/gh/app/somtin-somtin/id1597263559"}
                                    target="_blank" className="flex justify-center no-underline p-3 bg-[#FF9900] 
                                text-white rounded-sm items-center hover:bg-amber-400 w-full">
                                    <FaApple />
                                    <button className="ml-2">
                                        Download for iOS
                                    </button>
                                </button>
                            </div>
                            <div className="">
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
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}