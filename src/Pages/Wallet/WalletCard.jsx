import axios from 'axios';
import { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { BsShieldLockFill } from 'react-icons/bs'
import { ImSpinner6 } from 'react-icons/im';
import PhoneInput from 'react-phone-number-input';
import { toast } from 'react-toastify';
import { WalletList } from '../../Utils/WalletList';

export default function WalletCard(props) {

    const [show, setShow] = useState(false);
    const [showB, setShowB] = useState(false);
    const [showC, setShowC] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [code, setCode] = useState("");
    const [alias, setAlias] = useState("")
    const [selected, setSelected] = useState("");
    const [number, setNumber] = useState("")

    const auth_token = localStorage.getItem('token');

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleShowB = () => setShowB(true);
    const handleCloseB = () => setShowB(false);

    const handleShowC = () => setShowC(true);
    const handleCloseC = () => setShowC(false);

    useEffect(() => {
        const number = localStorage.getItem('number')
        setNumber(number);
    }, [])

    // const wallet_url = `https://somtinsomtin-api.herokuapp.com/api/v1.0/wallets/${wallet.id}/resend_wallet_otp/`

    const handleChange = (event) => {
        setSelected(event.target.value);
    }
    // resend otp
    const handleResend = (event) => {
        setIsLoading(true);
        const data = {
            "phone_number": number,
        }
        console.log(data);

        axios.post(`https://somtinsomtin-api.herokuapp.com/api/v1.0/wallets/resend_wallet_otp/`, {
            headers: {
                Authorization: `Bearer ${auth_token}`
            }
        })
            .then((response) => {
                console.log(data)
                console.log(response.data);
                toast('OTP resent to the registered number')
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false)
            })
    }

    // verify wallet
    const handleVerify = (event) => {
        setIsLoading(true);
        event.preventDefault()

        const data = {
            "unique_code": code,
        }

        axios.get('https://somtinsomtin-api.herokuapp.com/api/v1.0/wallets/{pk}/confirm_wallet_number/', data, {
            headers: {
                Authorization: `Bearer ${auth_token}`
            }
        })
            .then((response) => {
                console.log(response.data);
                toast('Wallet Successfully Verified')
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            })
    }

    const handleDelete = (event) => {
        event.preventDefault();

        axios.post(`https://somtinsomtin-api.herokuapp.com/api/v1.0/wallets/{pk}/`, {
            headers: {
                Authorization: `Bearer ${auth_token}`
            }
        })
        .then((response) => {
            setIsLoading(true)
            toast('Wallet Delete')
        })
        .catch((error) => {
            console.log(error)
            setIsLoading(false);
        })
    }

    const handleEdit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        const data = {
            "alias": alias,
            "wallet_number" : number,
            "network_code": selected,
        }

        axios.post(`https://somtinsomtin-api.herokuapp.com/api/v1.0/wallets/{pk}/`, data, {
            headers: {
                Authorization: `Bearer ${auth_token}`
            }
        })
        .then((response) => {
            setIsLoading(false);
            console.log(response.data);
            toast("Wallet Updated")
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false);
        })
    }

    const displayWallet = (props) => {
        const { wallet } = props;

        if (wallet.length > 0) {
            return (
                wallet.map((wallet, index) => {
                    return (
                        <div className="pt-6">
                            <div className="bg-white ">
                                <div className="max-w-sm w-full flex items-center bg-white shadow-md p-4
                            rounded-sm"
                                    key={wallet.index}>
                                    <img src={wallet.network_icon} alt="wallet___logo"
                                        style={{
                                            width: "30px",
                                            height: '30px',
                                            borderRadius: "50%",
                                        }} />
                                    <div className="text-gray-600 text-xs font-semibold ml-3" key={wallet.id}>
                                        {wallet.network_name}
                                    </div>
                                </div>

                                <div className="text-gray-600 bg-white px-4 text-xl shadow-md">
                                    {wallet.wallet_number}
                                </div>

                                <div className="flex justify-between bg-white shadow-md p-4 pb-3">
                                    <div className="md:text-sm text-xs text-gray-400">
                                        {wallet.alias}
                                    </div>
                                    <div className=" flex space-x-2 ml-16 text-gray-600 text-xl cursor-pointer">
                                        <BsShieldLockFill className="hover:text-[#E00] " role="button"
                                            onClick={handleShow} />
                                        <AiFillDelete className="hover:text-[#E00] " role="button"
                                            onClick={handleShowB} />
                                        <AiFillEdit className="hover:text-[#E00] " role="button"
                                            onClick={handleShowC} />
                                    </div>
                                </div>
                            </div>

                            {/* this section holds all the modal */}
                            {/* this is the verify modal */}
                            <Modal show={show} onHide={handleClose} {...props}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter"
                                        style={{
                                            fontSize: '14px',
                                            color: 'gray'
                                        }}>Verify Your SomtinSomtin Wallet</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form action="">
                                        <p>We sent a code to {wallet.wallet_number}. Not received yet?
                                            <span className="text-[#E00] ml-2" role="button"
                                                onClick={handleResend}>Resend</span> </p>

                                        <div>
                                            <input type="number" placeholder="Enter Security Code"
                                                name="text"
                                                value={code}
                                                onChange={(event) => setCode(event.target.value)}
                                                className="form-control text-center m-auto outline-none focus:outline-none" />

                                        </div>
                                        <div className="pt-3">
                                            {!isLoading && (
                                                <button className="bg-[#E00] text-white w-full py-2 text-sm rounded-sm "
                                                    onClick={handleVerify}>
                                                    Verify Wallet
                                                </button>
                                            )}
                                            {isLoading && (
                                                <button className="bg-[#E00] text-white w-full py-2 text-sm rounded-sm flex"
                                                    disabled>
                                                    <ImSpinner6 className="spinner space-x-4 mx-auto mr-0 text-3xl" />
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                </Modal.Body>
                            </Modal>

                            {/* Delete Modal */}
                            <Modal show={showB} onHide={handleShowB} {...props}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter"
                                        style={{
                                            fontSize: '14px',
                                            color: 'gray'
                                        }}>
                                        Are you sure?
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="text-gray-600"> This action will permanently delete <span className="font-bold">
                                        {wallet.alias} {wallet.wallet_number}</span>  </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    {!isLoading && (
                                        <>
                                            <Button style={{
                                                backgroundColor: "#fff",
                                                color: 'gray',
                                                border: 'gray 1px solid'
                                            }} onClick={handleCloseB}>
                                                Close
                                            </Button>
                                            <Button variant="primary"
                                                style={{
                                                    backgroundColor: "#e4043c",
                                                    border: "none"
                                                }} onClick={handleDelete}>
                                                Save Changes
                                            </Button>
                                        </>
                                    )}
                                    {
                                        isLoading && (
                                            <>
                                                <Button style={{
                                                    backgroundColor: "#fff",
                                                    color: 'gray',
                                                    border: 'gray 1px solid'
                                                }} onClick={handleCloseB}>
                                                    Close
                                                </Button>
                                                <Button variant="primary"
                                                    style={{
                                                        backgroundColor: "#e4043c",
                                                        border: "none"
                                                    }} onClick={handleDelete}>
                                                    Save Changes
                                                </Button>
                                            </>
                                        )
                                    }
                                </Modal.Footer>
                            </Modal>

                            {/* Edit Modal */}
                            <Modal show={showC} onHide={handleCloseC} {...props}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter"
                                        style={{
                                            fontSize: '14px',
                                            color: 'gray'
                                        }}>Edit Wallet</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form action="">
                                        <div>
                                            <label htmlFor="alias" className="text-gray-600 font-bold block">
                                                Wallet Alias
                                            </label>
                                            <input type="text" placeholder={wallet.alias}
                                                value={wallet.alias} onChange={setAlias}
                                                className="form-control" />
                                        </div>

                                        <div>
                                        <label htmlFor="Wallet Network" className="font-semibold text-gray-400 mt-3">
                                            Wallet Number
                                        </label>
                                            <PhoneInput
                                            international
                                            defaultCountry="GH"
                                            value={wallet.wallet_number}
                                            onChange={setNumber}
                                            className="form-control" />
                                        </div>

                                        <div>
                                        <label htmlFor="Wallet Network" className="font-semibold text-gray-400 mt-3">
                                            Wallet Network
                                        </label>
                                        <select className="focus:outline-none p-2 select-toggle w-full"
                                            value={wallet.network_code} onChange={handleChange}>
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
                                    <Modal.Footer>
                                        {!isLoading && (
                                            <>
                                                <Button style={{
                                                    backgroundColor: "#fff",
                                                    color: 'gray',
                                                    border: 'gray 1px solid'
                                                }} onClick={handleCloseC}>
                                                    Close
                                                </Button>
                                                <Button variant="primary"
                                                    style={{
                                                        backgroundColor: "#e4043c",
                                                        border: "none"
                                                    }} onClick={handleEdit}>
                                                    Save Changes
                                                </Button>
                                            </>
                                        )}
                                        {
                                            isLoading && (
                                                <>
                                                    <Button style={{
                                                        backgroundColor: "#fff",
                                                        color: 'gray',
                                                        border: 'gray 1px solid'
                                                    }} onClick={handleCloseC}>
                                                        Close
                                                    </Button>
                                                    <Button variant="primary"
                                                        style={{
                                                            backgroundColor: "#e4043c",
                                                            border: "none"
                                                        }} onClick={handleEdit}>
                                                        Save Changes
                                                    </Button>
                                                </>
                                            )
                                        }
                                    </Modal.Footer>
                                </Modal.Body>
                            </Modal>
                        </div>
                    )
                })
            )
        }
        else {
            return (
                <h3>
                    {/* No Wallet Found */}
                </h3>
            )
        }
    }
    return (
        <>
            {displayWallet(props)}
        </>
    )
}