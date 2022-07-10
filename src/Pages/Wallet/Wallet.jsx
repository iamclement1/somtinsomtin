import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import Sidebar from '../../Components/Sidebar/Sidebar'
import { WalletTransactions } from '../../Utils/WalletTransaction'
import { WalletList } from '../../Utils/WalletList'
import Footer from '../../Components/Footer/Footer'
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Wallet(props) {

    const [selected, setSelected] = useState("");
    const [number, setNumber] = useState("");
    const [ alias, setAlias] = useState("");
    const auth_token = localStorage.getItem('token');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        setSelected(event.target.value);
    }


    const handleAddWallet = (event) => {
        event.preventDefault()
        const data = {
            "alias" : alias,
            "wallet_number": number,
            "network_code" : selected,
        }
        // console.log(data)
        // console.log(auth_token)

        axios.post('https://somtinsomtin-api.herokuapp.com/api/v1.0/wallets/', data, {
            headers: {
                Authorization: `Bearer ${auth_token}`
            }
        })
        .then((response) => {
            console.log(response.data)
            toast("Wallet Added Successfully")

            if(response.data.response_code === "100") {
                window.location.reload()
            }
        })

        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <Sidebar>
            <div className="container">
                <div className="row">
                    <div className="pt-3">
                        <Button onClick={handleShow}
                            style={{
                                float: 'right',
                                backgroundColor: '#e4043c',
                                border: 'none',
                                outline: "none"
                            }}>
                            + Add Wallet
                        </Button>

                        <Modal show={show} onHide={handleClose}
                            {...props}
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">Add Wallet</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form action="">
                                    <div>
                                        <label htmlFor="Wallet Alias" className="font-semibold text-gray-400">
                                            Wallet Alias
                                        </label>
                                        <input type="text" name="wallet_alias"
                                            placeholder="Enter Wallet Alias" value={alias}
                                            onChange={(event) => setAlias(event.target.value)}
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
                                        <select className="focus:outline-none p-2 select-toggle w-full"
                                            value={selected} onChange={handleChange}>
                                                <>
                                                    {
                                                        WalletList.map((selected, index) => {
                                                            return (
                                                                <option
                                                                    key={selected.id} role="button"
                                                                    className="pl-3 mb-1 hover:bg-red-600 p-2
                                                                            hover:text-white">
                                                                    {selected.name}
                                                                </option>
                                                            )
                                                        })
                                                    }
                                                </>
                                        </select>
                                </div>

                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button style={{
                                backgroundColor: "#e4043c",
                                border: 'none'
                            }} onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary"
                                style={{
                                    backgroundColor: "#88C057",
                                    border: "none"
                                }} onClick={handleAddWallet}>
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
                        <div className=" md:w-1/5 ">
                            <select className="focus:outline-none p-2 select-toggle w-full"
                                value={selected} onChange={handleChange} >
                                <>
                                    {
                                        WalletTransactions.map((transaction, index) => {
                                            return (
                                                <option
                                                    key={transaction.name} role="button"
                                                    className=" hover:bg-[#E4043C] hover:text-white rounded-sm p-1">
                                                    {transaction.name}
                                                </option>
                                            )
                                        })
                                    }   

                                </>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
        </Sidebar >
    )
}