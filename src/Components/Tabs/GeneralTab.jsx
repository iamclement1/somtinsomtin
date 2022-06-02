import { faArrowAltCircleRight,  faClock, faMoneyCheckDollar, faQuestionCircle, faShieldVirus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function GeneralTab() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="tab__content flex justify-between">
                        <div className="flex space-x-4">
                            <p className="text-[#3D4765] text-xl py-4 ">
                                <FontAwesomeIcon icon={ faClock }/>
                            </p>
                            <div className="py-3">
                                <span className="text-[#3D4765] text-xm font-medium ">Redeem Voucher by Date</span>
                                <p className="text-gray-400">Deplet vouchers from oldest to latest</p>
                            </div>
                        </div>
                        {/* <div className="pt-4 text-[#e00] text-xl cursor-pointer">
                            <FontAwesomeIcon icon={ faArrowAltCircleRight }/>
                        </div> */}
                    </div>
                </div>
                <hr />
                <div className="col-md-12">
                    <div className="tab__content flex justify-between">
                        <div className="flex space-x-4">
                            <p className=" text-[#3D4765] text-xl py-4">
                                <FontAwesomeIcon icon={ faMoneyCheckDollar } />
                            </p>
                            <div className="py-3">
                                <span className="text-[#3D4765] text-xm font-medium">
                                    Redeem Voucher by Amount
                                </span>
                                <p className="text-gray-400">
                                    Deplet vouchers from smallest amount to largest
                                </p>
                            </div>
                        </div>
                        {/* <div className="pt-4 text-[#e00] text-xl cursor-pointer">
                            <FontAwesomeIcon icon={ faArrowAltCircleRight } />
                        </div> */}
                    </div>
                </div>
                <hr />
                <div className="col-md-12">
                    <div className="tab__content flex justify-between">
                        <div className="flex space-x-4">
                            <p className=" text-[#3D4765] text-xl py-4">
                                <FontAwesomeIcon icon={ faQuestionCircle } />
                            </p>
                            <div className="py-3">
                                <span className="text-[#3D4765] text-xm font-medium">
                                    Help and Support
                                </span>
                                <p className="text-gray-400">
                                    Get Help for Somtin.
                                </p>
                            </div>
                        </div>
                        <div className="pt-4 text-gray-500 hover:text-[#e00] text-xl cursor-pointer">
                            <FontAwesomeIcon icon={ faArrowAltCircleRight } />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="col-md-12">
                    <div className="tab__content flex justify-between">
                        <div className="flex space-x-4">
                            <p className=" text-[#3D4765] text-xl py-4">
                                <FontAwesomeIcon icon={ faShieldVirus } />
                            </p>
                            <div className="py-3">
                                <span className="text-[#3D4765] text-xm font-medium">
                                    Privacy Policy
                                </span>
                                <p className="text-gray-400">
                                    Somtin Somtin Privacy
                                </p>
                            </div>
                        </div>
                        <div className="pt-4 text-gray-500 hover:text-[#e00] text-xl cursor-pointer">
                            <FontAwesomeIcon icon={ faArrowAltCircleRight } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralTab