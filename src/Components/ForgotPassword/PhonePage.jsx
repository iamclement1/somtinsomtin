import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import Logo from '../../Assets/sometinlogo250-150-red.png'

export default function PhonePage() {

    const navigate = useNavigate('')

    const [isLoading, setIsLoading] = useState(false);
    const [number, setNumber] = useState();
    const auth_token = localStorage.getItem('token');


    const handleSubmit = (event) => {
        setIsLoading(true)
        event.preventDefault();

        const data = {
            "phone_number": number
        }

        axios.post("https://somtinsomtin-api.herokuapp.com/api/v1.0/users/check_phone_number/", data, {
            headers: {
                Authorization: `Bearer ${auth_token}`
            }
        })
            .then(response => {
                localStorage.setItem("token")
                localStorage.setItem('number')
                console.log(response.data)
                toast('otp sent successfully')
                setIsLoading(false)

                if (response.data.response_code === "100") {
                    navigate('/forgot-password')
                }
            })
    }

    return (
        <div className=" container-xxl position-relative login-background h-screen flex bg-gray-bg1
        font-sans">
            <div className="w-full max-w-md m-auto bg-white rounded-lg 
        shadow-md py-8 md:px-16 px-8">
                <img src={Logo} alt="brand-logo"
                    className="w-14 m-auto" />
                <h1 className='text-sm font-medium text-dark mt-2 mb-2 text-center'>
                    Enter Phone Number for Verfication
                </h1>

                <form action="">
                    <div>
                        <label htmlFor="Phone Number"
                            className="font-semibold text-gray-400"></label>
                        <PhoneInput placeholder="Enter phone number"
                            international
                            defaultCountry='GH'
                            value={number}
                            onChange={setNumber}
                            className={`w-full p-2 text-gray-400 border rounded-md outline-none 
                            text-sm transition duration-150 ease-in-out mb-4 focus:outline-none`} />
                    </div>

                    <div className=''>
                        {!isLoading && (
                            <button className="bg-red-400
                    font-semibold text-white mr-2
                    hover:bg-red-700 hover:text-white p-2 w-full mb-2 rounded-sm"
                                onClick={handleSubmit}>
                                Verify Number
                            </button>

                        )}
                        {isLoading && (
                            <button className="bg-red-400 text-sm text-white space-x-5
                        hover:bg-gradient hover:text-white p-2 w-full mb-2 rounded-sm"
                                disabled>
                                <FontAwesomeIcon icon={faSpinner}
                                    className='space-x-4 spinner mr-3' />
                                loading...
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}