import Icon1 from '../../Assets/icons/1.png'
import Icon2 from '../../Assets/icons/2.png'
import Icon3 from '../../Assets/icons/3.png'
import Icon4 from '../../Assets/icons/4.png'
import './Landing.css'

export default function Services() {
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
                        <div className="bg-white text-center rounded-md p-5 ">
                            <div className="m-auto">
                                <img src={Icon1} alt="icon"
                                    className="bg-gradient-to-r from-purple-500 to-pink-500
                                        p-3 rounded-bl-lg  rounded-tr-lg m-auto" />
                            </div>
                            <h2 className="text-[#0E1133] pt-3 font-bold text-xl" >
                                Buy
                            </h2>
                            <p className="text-center text-gray-600 text-sm text-semibold">
                                Buy a voucher from any vendor; pay with MoMo or Card
                            </p>
                        </div>
                        <div className="bg-white text-center rounded-md p-5 ">
                            <div className="m-auto">
                                <img src={Icon2} alt="icon"
                                    className="bg-gradient-to-r from-orange-300 to-orange-500
                                        p-3 rounded-br-lg  rounded-tl-lg m-auto" />
                            </div>
                            <h2 className="text-[#0E1133] pt-3 font-bold text-xl" >
                                Send
                            </h2>
                            <p className="text-center text-gray-600 text-sm text-semibold">
                                Send a voucher to anyone; they choose how they spend it!
                            </p>
                        </div>
                        <div className="bg-white text-center rounded-md p-5 ">
                            <div className="m-auto">
                                <img src={Icon3} alt="icon"
                                    className="bg-gradient-to-r from-green-300 to-green-500
                                        p-3 rounded-bl-lg  rounded-tr-lg m-auto" />
                            </div>
                            <h2 className="text-[#0E1133] pt-3 font-bold text-xl" >
                                Top Up
                            </h2>
                            <p className="text-center text-gray-600 text-sm text-semibold">
                                TopUp your voucher and continue using it! No Limits. TopUp With MoMo or Card
                            </p>
                        </div>
                        <div className="bg-white text-center rounded-md p-5 ">
                            <div className="m-auto">
                                <img src={Icon4} alt="icon"
                                    className="bg-gradient-to-r from-purple-400 to-purple-600
                                        p-3 rounded-lg m-auto" />
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