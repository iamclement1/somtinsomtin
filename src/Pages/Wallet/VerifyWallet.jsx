import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { ImSpinner6 } from "react-icons/im";
import { toast } from "react-toastify";

export default function VerifyWallet({ isModalVisible, handleShowB}) {

    
    const [code, setCode] = useState("");
    const [number, setNumber] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const auth_token = localStorage.getItem('token');

    useEffect(() => {
        const number = localStorage.getItem('number')
        setNumber(number);
    }, [])


    const handleResend = (event) => {
        setIsLoading(true);
        const data = {
            "phone_number": number,
        }

        axios.post(`https://somtinsomtin-api.herokuapp.com/api/v1.0/wallets/{pk}/confirm_wallet_number/`, {
            headers: {
                Authorization: `Bearer ${auth_token}`
            }
        })
            .then((response) => {
                console.log(response.data)
                console.log(data)
                setIsLoading(false);
                toast('Wallet Successfully Verified')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleVerify = () => {

    }
    return (
        <div>
            <Modal show={isModalVisible} onHide={ handleShowB }
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
                        <p>We sent a code to { }. Not received yet?
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
        </div>
    )
}