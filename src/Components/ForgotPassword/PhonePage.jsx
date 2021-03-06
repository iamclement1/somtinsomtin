import Logo from '../../Assets/brand-logo/sometinlogo250-150-red.png'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PhonePage () {

    // const [value, setValue] = useState();
    
    const navigate = useNavigate('')

    const [ number, setNumber ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        localStorage.setItem('number', JSON.stringify(number));
        setNumber(number);
        
    }, [ number])

    const handleSubmit = (event) => {
        setIsLoading(true)
        event.preventDefault();
        const data = {
            "phone_number": number,
        }
        // console.log('data', data);        
        axios.post('https://somtinsomtin-api.herokuapp.com/api/v1.0/users/check_phone_number/', data)
        .then( response => {
            console.log(response.data);
            toast.success('OTP successfully sent!')
            setIsLoading(false);

            if (response.data.response_code === "100") {
                navigate('/forget-password')
            } else {
                toast.error("User Already Exist")
            }
            
        })

        .catch( error => {
            console.log(error.response)
            toast.error('Phone number invalid')
            setIsLoading(false)
        })
    }

    return (
    <div className=" container-xxl position-relative login-background h-screen
    flex bg-gray-bg1 font-sans">
        <div className="w-full max-w-md m-auto bg-white rounded-lg 
        shadow-md py-8 md:px-16 px-6">
            <img src={ Logo } alt="brand-logo"
            className="w-14 m-auto" />
            <h1 className='text-sm font-medium text-dark mt-2 mb-2 text-center'> 
                Enter your phone number for verfication
            </h1>

            <form action="">
                <div>
                    <label htmlFor="Phone Number"
                    className='font-semibold text-gray-400 font-sans'>
                        
                    </label>
                    <PhoneInput placeholder="Enter phone number"
                    international
                    defaultCountry='GH'
                    value={number}
                    onChange={ setNumber }
                    id='phone_number'
                    className= {`md:w-full p-2 text-gray-400 border rounded-md outline-none 
                    text-sm transition duration-150 ease-in-out mb-4 focus:outline-none
                    `} />
                </div>

            
                <div>
                    { !isLoading && (
                    <button className="bg-red-400
                    font-semibold text-white rounded-sm 
                    hover:bg-red-700
                    hover:text-white p-2 w-full mb-2"
                    onClick={ handleSubmit }>
                        Get Started
                    </button>
                    )}
                    { isLoading && (
                        <button className="bg-red-400
                        text-sm text-white rounded-sm 
                        hover:bg-red-600
                        hover:text-white p-2 w-full mb-2"
                        disabled>
                            <FontAwesomeIcon icon={ faSpinner } 
                            className='space-x-4 spinner mr-3'/>
                            sending otp...
                        </button>
                    )}
                </div>
            </form>
        </div>
    </div>

    )
}
