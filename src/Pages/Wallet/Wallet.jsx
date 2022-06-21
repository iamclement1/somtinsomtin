import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import Sidebar from '../../Components/Sidebar/Sidebar'
import { WalletTransactions } from '../../Utils/WalletTransaction'
import { WalletList } from '../../Utils/WalletList'
import Footer from '../../Components/Footer/Footer'
import { Button, Modal } from 'react-bootstrap';

export default function Wallet() {

    const [value, setValue] = useState();
    const [number, setNumber] = useState();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSelect = (event) => {
        setValue(event)
    }
    return (
        <Sidebar>
            <div className="container">
                <div className="row">
                    <div className="pt-3">
                        <Button variant="#e4043c" onClick={handleShow}
                        style={{
                            float: 'right'
                        }}>
                            + Add Wallet
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add Wallet</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
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
                                                value={value}
                                                onSelect={handleSelect}
                                            >
                                                Select Wallet Network
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-light w-full"
                                                aria-labelledby="dropdownMenuButton2" >
                                                {
                                                    WalletList.map((value, index) => {
                                                        return (
                                                            <li active={index === 0 ? true : false}
                                                                eventKey={value.name} role="button"
                                                                className="pl-3 mb-1 hover:bg-red-600 p-2
                                                                                    hover:text-white">
                                                                {value.name}
                                                            </li>
                                                        )
                                                    })
                                                }


                                            </ul>
                                        </div>
                                    </div>

                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </div>
                    <div className="col-md-12 pt-3">
                        <div className="md:flex justify-between bg-white p-3 shadow-md rounded-md">
                            <div className="px-3 py-3">
                                <h2 className="text-2xl font-semibold mb-0">
                                    Transaction history
                                </h2>
                                <p className="text-sm text-gray-500 mb-0">
                                    All transactions on your wallets.
                                </p>
                            </div>
                            <div>
                                <div className="dropdown show px-3 py-3 relative">
                                    <button className="btn dropdown-toggle rounded-md border border-gray-600
                                    text-gray-400"
                                        type="button"
                                        id="dropdownMenuLink"
                                        aria-expanded="false"
                                        data-bs-toggle="dropdown"
                                        onSelect={handleSelect}>
                                        All Transaction Types
                                    </button>
                                    <ul className="dropdown-menu p-3"
                                        aria-labelledby='dropdownMenuLink'
                                    >
                                        {
                                            WalletTransactions.map((transaction, index) => {
                                                return (
                                                    <li active={index === 0 ? true : false}
                                                        eventKey={transaction.name} role="button"
                                                        className=" hover:bg-[#E4043C] hover:text-white rounded-sm">
                                                        {transaction.name}
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        </Sidebar>
    )
}