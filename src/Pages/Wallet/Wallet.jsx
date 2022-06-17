import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Sidebar from "../../Components/Sidebar/Sidebar"
import PhoneInput from 'react-phone-number-input'
import { Link } from "react-router-dom"


function Wallet() {

    const [showModal, setShowModal] = useState(false)
    const [number, setNumber] = useState('')

    return (
        <Sidebar>
            <div className="flex justify-between pt-4">
                <div></div>
                <div>
                    <button className="bg-[#E4043C] text-sm text-white space-x-5
                    hover:bg-gradient hover:text-white p-2 mb-2 rounded-sm ease-linear 
                    transition-all duration-250 "
                        onClick={() => setShowModal(true)}>
                        + Add Wallet
                    </button>
                    {showModal ? (
                        <>
                            <div className="justify-center items-center flex overflow-x-hidden
                            overflow-y-auto fixed inset-0 outline-none focus:outline-none overlay
                            m-auto pl-64">
                                <div className="relative w-4/6 my-6 mx-auto max-w-4xl p-6">
                                    {/* content */}
                                    <div className="border-0 rounded-md shadow-md relative flex flex-col w-full outline-none focus:outline-none bg-white">
                                        {/* header */}
                                        <div className="flex items-start justify-between p-3 border-b border-gray-400 rounded-t">
                                            <h3 className="text-2xl font-semibold">
                                                Add Wallet
                                            </h3>
                                            <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5
                                            float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}>
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block
                                                outline-none focus:outline-none">
                                                    x
                                                </span>
                                            </button>
                                        </div>
                                        {/* body */}
                                        <div className="relative p-6 flex-auto">
                                            <form action="">
                                                <div>
                                                    <label htmlFor="Wallet Alias" className="font-semibold text-gray-400">
                                                        Wallet Alias
                                                    </label>
                                                    <input type="text" name="wallet_alias"
                                                        placeholder="Enter Wallet Alias" value=""
                                                        className="w-full p-2 text-gray-400 border rounded-md outline-none 
                                                        text-sm transition duration-150 ease-in-out mb-4 focus:outline-none" />
                                                </div>

                                                <div>
                                                    <label htmlFor="Phone Number"
                                                        className="font-semibold text-gray-400">Wallet Number</label>
                                                    <PhoneInput placeholder="Enter phone number"
                                                        international
                                                        defaultCountry='GH'
                                                        value={number}
                                                        onChange={setNumber}
                                                        className={`w-full p-2 text-gray-400 border rounded-md outline-none 
                                                        text-sm transition duration-150 ease-in-out mb-4 focus:outline-none`} />
                                                </div>

                                                <div>
                                                    <label htmlFor="Wallet Network" className="font-semibold text-gray-400">
                                                        Wallet Network
                                                    </label>
                                                    <div className="dropdown">
                                                        <button className="btn btn-light dropdown-toggle w-full text-gray
                                                        text-start" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Select Wallet Network
                                                        </button>
                                                        <ul class="dropdown-menu dropdown-menu-light w-full"
                                                            aria-labelledby="dropdownMenuButton2">
                                                            <li>
                                                                <Link to="" className="dropdown-item active">
                                                                MTN Mobile Money
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="" className="dropdown-item">Vodafone Cash</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="" className="dropdown-item">AirtelTigo Cash</Link>
                                                            </li>
                                                            {/* <li><hr className="dropdown-divider" /></li> */}

                                                        </ul>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                        {/* footer */}
                                        <div className="flex items-center justify-end p-6 border-t border-slate-200 rounded-b">
                                            <button className="text-red-500 background-transparent font-semibold uppercase
                                            px-6 py-2 text-sm outline-none focus:outline-none mr-1
                                            ease-linear transition-all duration-150"
                                                type="button" onClick={() => setShowModal(false)}>
                                                Close
                                            </button>
                                            <button
                                                className="bg-red-500 text-white active:bg-red-600 font-bold 
                                                uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none 
                                                focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Add Wallet
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>

            <section className=" md:p-4 p-1 bg-white
        rounded-sm shadow-md h-40">
                <Container>
                    <Row className="">
                        <Col xs={12} md={6} lg={6}
                            className=" py:0 md:py-5 ">
                            <h1 className="text-xl">Transaction History</h1>
                            <span className="text-gray-400 text-xs">
                                All transactions on your wallet
                            </span>
                        </Col>
                        <Col xs={12} md={6} lg={6}
                            className="py:0 md:py-5">
                            <p className="text-xs md:text-sm">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odio optio tempore a, nam placeat atque. Perferendis qui distinctio earum?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, libero.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Sidebar>
    )
}

export default Wallet
