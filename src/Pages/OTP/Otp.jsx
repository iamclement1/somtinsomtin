import Logo from '../../Assets/brand-logo/sometinlogo250-150-red.png'
import 'react-phone-number-input/style.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Otp() {

    const navigate = useNavigate('')
    
    const [ code, setCode ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        const number = localStorage.getItem('number')
        setNumber(number)
    }, [])

    const handleSubmit = (event) => {
        setIsLoading(true)
        event.preventDefault();
        const data = {
            "unique_code": code,
            "phone_number" : number,
        }
        console.log('data', data )
        axios.post('https://somtinsomtin-api.herokuapp.com/api/v1.0/users/verify_phone_number/', data)
        .then( response => {
            console.log(response.data);
            console.log(response.status_code)
            toast.success('Number Successfully verified')
            setIsLoading(false)

            if (response.data.response_code === "100" ) {
                navigate('/signup')
            }
            
        })
        .catch (error => {
            console.log(error);
            toast.error('Number not Verified')
            setIsLoading(false)
        })
    }
    console.log(number);

    const handleResend = (event) => {
        const data ={
            "phone_number": number,
        }

        axios.post('https://somtinsomtin-api.herokuapp.com/api/v1.0/users/resend_signup_verification/', data)
        .then( response => {
            console.log(response.data);
            toast.success('OTP resent')
        })
        .catch(error => {
            console.log(error)
        })

    }


    return (
    <div className=" container-xxl position-relative login-background h-screen flex bg-gray-bg1
    font-sans">
        <div className="w-full max-w-md m-auto bg-white rounded-lg 
        shadow-md py-8 px-16">
            <img src={ Logo } alt="brand-logo"
            className="w-20 m-auto" />
            <h1 className='text-xs font-medium text-dark mt-2 mb-4 text-start'> 
                Please enter the OTP sent to your mobile number
            </h1>

            <form action="">

                <div>
                    <label htmlFor="otp"> </label>
                        <input type="text" id="otp" name="otp" placeholder="Enter Pin"
                        className={`w-full p-2 text-gray-400 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-4`}
                        value={code}
                        onChange={ (e) => setCode(e.target.value) } />
                </div>

                <div className="flex space-x-4 justify-center">
                    <p className="text-gray-600 text-center text-xs">
                        Didn't receive OTP?
                    </p>
                    <p role="button" onClick={ handleResend }
                    className="text-red-400 text-center text-xs
                    text-underline cursor-pointer hover:text-red-700">
                        Resend OTP
                    </p>
                </div>
                <div>
                    { !isLoading && (
                    <button className="bg-red-400
                    text-white font-semibold
                    hover:bg-red-600 rounded-sm
                    hover:text-white p-2 w-full mb-2"
                    onClick={ handleSubmit }>
                        Verfiy Phone Number
                    </button>
                    )}

                    { isLoading && (
                        <button className="bg-red-700
                        text-white text-sm
                        hover:bg-red-600 rounded-sm
                        hover:text-white p-2 w-full mb-2"
                        disabled>
                            <FontAwesomeIcon icon={ faSpinner } 
                            className='space-x-4 spinner mr-3'/>
                            verifying number...
                        </button>
                    )}
                </div>
            </form>
        </div>
    </div>

    )
}

export default Otp