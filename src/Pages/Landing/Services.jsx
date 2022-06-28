import { BiWallet } from 'react-icons/bi';
import { AiFillShopping, AiOutlineSend } from 'react-icons/ai'
import './Landing.css'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { BsFillWalletFill } from 'react-icons/bs'

export default function Services() {
    useEffect(() => {
        // gives global animation to all animation
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <main>
            <div className="relative">
                <div className="text-center pt-4">
                    <h2 className="text-[#0E1133] text-4xl font-bold ">
                        Give Somtin Get Somtin
                    </h2>
                    <p className="text-sm text-gray-500">
                        Its more than a gift voucher; its a way to say I Dey 4 U
                    </p>
                </div>
                <div className="md:flex md:p-24 md:space-x-8 md:space-y-0 space-y-4">
                    <div className="bg-white text-center rounded-md p-5 "
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <div className="m-auto">
                            <AiFillShopping
                                className="bg-gradient-to-r from-purple-500 to-pink-500
                                        p-3 rounded-md m-auto text-white text-6xl" />
                        </div>
                        <h2 className="text-[#0E1133] pt-3 font-bold text-xl" >
                            Buy
                        </h2>
                        <p className="text-center text-gray-600 text-sm text-semibold">
                            Buy a voucher from any vendor; pay with MoMo or Card
                        </p>
                    </div>
                    <div className="bg-white text-center rounded-md p-5 "
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <div className="m-auto">
                            <AiOutlineSend
                                className="bg-gradient-to-r from-orange-300 to-orange-500
                                        p-3 rounded-md m-auto text-white text-6xl" />
                        </div>
                        <h2 className="text-[#0E1133] pt-3 font-bold text-xl" >
                            Send
                        </h2>
                        <p className="text-center text-gray-600 text-sm text-semibold">
                            Send a voucher to anyone; they choose how they spend it!
                        </p>
                    </div>
                    <div className="bg-white text-center rounded-md p-5 "
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <div className="m-auto">
                            <BsFillWalletFill
                                className="bg-gradient-to-r from-green-300 to-green-500
                                p-3 rounded-md m-auto text-white text-6xl" />
                        </div>
                        <h2 className="text-[#0E1133] pt-3 font-bold text-xl" >
                            Top Up
                        </h2>
                        <p className="text-center text-gray-600 text-sm text-semibold">
                            TopUp your voucher and continue using it! No Limits. TopUp With MoMo or Card
                        </p>
                    </div>
                    <div className="bg-white text-center rounded-md p-5 "
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <div className="m-auto">
                            <BiWallet
                                className="bg-gradient-to-r from-purple-400 to-purple-600
                                        p-3 rounded-md m-auto text-white text-6xl" />
                        </div>
                        <h2 className="text-[#0E1133] pt-3 font-bold text-xl" >
                            Earn Cash
                        </h2>
                        <p className="text-center text-gray-600 text-sm text-semibold">
                            As you spend, you get cashback you can use anywhere.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}