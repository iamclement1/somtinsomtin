import Logo from '../Assets/sometinlogo250-150-red.png'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Register() {

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

            if (response.data.response_code === "200") {
                navigate('/otp-page')
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
                Sign up your account
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
                    <button className="bg-gradient-to-r from-indigo-400 to-red-400
                    font-semibold text-white rounded-sm 
                    hover:bg-red-600
                    hover:text-white p-2 w-full mb-2"
                    onClick={ handleSubmit }>
                        Get Started
                    </button>
                    )}
                    { isLoading && (
                        <button className="bg-gradient-to-r from-indigo-400 to-red-400
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
                <div className="flex text-center text-start text-xs
                mt-2 text-gray-600 align-center space-x-3">
                    <p>
                        Already have an account?
                    </p>
                    <Link to='/login'
                    className="text-xs text-indigo-600 no-underline hover:text-red-400
                    ">
                        Sign in
                    </Link>
                </div>
            </form>
        </div>
    </div>

    )
}

export default Register