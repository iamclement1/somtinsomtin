import Logo from '../Assets/sometinlogo250-150-red.png'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';



function Login() {

    const navigate = useNavigate('')
    const [ number, setNumber ] = useState();
    const [ password, setPassword ] = useState();
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        const number = localStorage.getItem('number', 'password')
        setNumber(number)
        setPassword(password)
    }, [password])


    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        const data = {
            "phone_number" : number,
            "password" : password,
        }

        axios.post('https://somtinsomtin-api.herokuapp.com/api/v1.0/users/login/', data)
        .then (response => {
            console.log(response.data);
            toast.success('User Login Successfully')
            setIsLoading(false);

            if (response.data.response_code === "100") {
                navigate('/')
            }
        })
        .catch (error => {
            console.log(error.response)
            toast.error('Invalid number')
            setIsLoading(false);
        })


    }

    return (
    <div className=" container-xxl position-relative login-background h-screen flex bg-gray-bg1
    font-sans">
        
        <div className="w-full max-w-md m-auto bg-white rounded-lg 
        shadow-md py-8 md:px-16 px-8">
            <img src={ Logo } alt="brand-logo"
            className="w-14 m-auto" />
            <h1 className='text-sm font-medium text-dark mt-2 mb-2 text-start'> 
                Enter your phone number to get started
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
                    className= {`w-full p-2 text-gray-400 border rounded-md outline-none 
                    text-sm transition duration-150 ease-in-out mb-4 focus:outline-none`} />
                </div>

                <div>
                    <label htmlFor="Pin"> </label>
                        <input type="text" id="pin" name="pin" placeholder="Pin"
                        className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-4`}
                        onChange={ (event) => setPassword(event.target.value)} />
                </div>
                <div className=''>
                    { !isLoading && (
                    <button className="bg-gradient-to-r from-indigo-400 to-red-400
                    font-semibold text-white mr-2
                    hover:bg-gradient hover:text-white p-2 w-full mb-2 rounded-sm"
                    onClick={ handleSubmit }>
                        Sign In
                    </button>
                    
                    )}
                    { isLoading && (
                        <button className="bg-gradient-to-r from-indigo-400 to-red-400
                        font-semibold text-white space-x-5
                        hover:bg-gradient hover:text-white p-2 w-full mb-2 rounded-sm"
                        disabled>
                            <FontAwesomeIcon icon={ faSpinner } 
                            className='space-x-4 spinner mr-3'/> 
                            loading...
                        </button>
                    )}
                </div>
                <div className="flex text-center text-start text-xs
                mt-2 text-gray-600 align-center space-x-3">
                    <p>
                    want to be a merchant?
                    </p>
                    <Link to='/register'
                    className="text-xs text-indigo-600 no-underline hover:text-red-400
                    ">
                        Click Here
                    </Link>
                </div>
            </form>
        </div>
    </div>

    )
}

export default Login