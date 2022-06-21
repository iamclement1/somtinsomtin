import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Sidebar from "../../Components/Sidebar/Sidebar"
import PhoneInput from 'react-phone-number-input'
import { Link } from "react-router-dom"
import {WalletList} from '../../Utils/WalletList'

function Wallet() {

    const [showModal, setShowModal] = useState(false)
    const [number, setNumber] = useState('')
    const [ value, setValue] = useState()

    const handleSelect = (event) => {
        setValue(event)
    }

    return (
        <Sidebar>
            <div className="container">
                <div className="row">
                    <div className="flex justify-between pt-4 mb-4">
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
                                        <div className="relative w-3/6 my-6 mx-auto max-w-4xl p-6">
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
                                                                    text-start" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" 
                                                                    >
                                                                    Select Wallet Network
                                                                </button>
                                                                <ul class="dropdown-menu dropdown-menu-light w-full"
                                                                    aria-labelledby="dropdownMenuButton2" 
                                                                    value={value} onSelect={handleSelect}>
                                                                        {
                                                                            WalletList.map((value, index) =>{
                                                                                return(
                                                                                    <li active={ index === 0 ? true : false }
                                                                                    eventKey={value.name} role="button"
                                                                                    className="pl-3 mb-1 hover:bg-red-600 p-2
                                                                                    hover:text-white">
                                                                                        { value.name }
                                                                                    </li>
                                                                                )
                                                                            })
                                                                        }
                                                                    

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


                    <section>
                        <div>
                            <div className="md:flex justify-between bg-white p-3 rounded-md shadow-md">
                                <div className="px-3 py-3">
                                    <h2>
                                        Transaction History
                                    </h2>
                                    <p className=" text-xs text-gray-500">
                                        All your transactions on your wallets
                                    </p>
                                </div>

                                <div>
                                    <div className="dropdown show px-3 py-3">
                                        <button className="btn dropdown-toggle border border-indigo-400
                            rounded-md"
                                            type="button"
                                            id='dropdownMenuLink'
                                            aria-expanded="false"
                                            data-bs-toggle="dropdown">
                                            All Transaction Types
                                        </button>
                                        <ul className="dropdown-menu p-3"
                                            aria-labelledby="dropdownMenuLink">
                                            <li>
                                                <Link to="" className="no-underline text-gray-400 hover:text-gray-400">
                                                    All Transaction Types
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="" className="no-underline text-gray-400 hover:text-gray-400">
                                                    Redemption
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="" className="no-underline text-gray-400 hover:text-gray-400">
                                                    Purchase
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="" className="no-underline text-gray-400 hover:text-gray-400">
                                                    Transfer
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="" className="no-underline text-gray-400 hover:text-gray-400">
                                                    Gift
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </section>
                </div>
            </div>

        </Sidebar>
    )
}

export default Wallet
