import Logo from '../Assets/brand-logo/sometinlogo250-150-red.png'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ImSpinner6 } from 'react-icons/im';



function Login() {

    const navigate = useNavigate('')
    const [number, setNumber] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user", user);
        if (loggedInUser) {
            const foundUser = JSON.stringify(loggedInUser)
            setUser(foundUser);
        }
        const number = localStorage.getItem('number', 'password')
        setNumber(number)
        setPassword(password)
    }, [password, user])


    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        const data = {
            "phone_number": number,
            "password": password,
        }

        axios.post('https://somtinsomtin-api.herokuapp.com/api/v1.0/users/login/', data)
            .then(response => {
                const auth_token = response.data.results.auth_token
                console.log(auth_token)
                localStorage.setItem('token', auth_token);
                localStorage.setItem('currentUser', JSON.stringify(response.data))
                console.log(response.data);
                toast.success('User Login Successfully')
                setIsLoading(false);

                if (response.data.response_code === "100") {
                    navigate('/marketplace')
                }
            })
            .catch(error => {
                console.log(error.response)
                toast.error('Invalid number or pin')
                setIsLoading(false);
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
                    Enter your phone number to Log in
                </h1>

                <form action="">
                    <div>
                        <label htmlFor="Phone Number"></label>
                        <PhoneInput placeholder="Enter phone number"
                            international
                            defaultCountry='GH'
                            value={number}
                            onChange={setNumber}
                            className={`w-full p-2 text-gray-400 border rounded-md outline-none 
                                                        text-sm transition duration-150 ease-in-out mb-4 focus:outline-none`} />
                    </div>

                    <div>
                        <label htmlFor="Pin"> </label>
                        <input type="password" id="pin" name="password" placeholder="Pin"
                            className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-4`}
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className=''>
                        {!isLoading && (
                            <button className="bg-red-400
                    font-semibold text-white mr-2
                    hover:bg-[#E00] hover:text-white p-2 w-full mb-2 rounded-sm"
                                onClick={handleSubmit}>
                                Log in
                            </button>

                        )}
                        {isLoading && (
                            <button className="bg-red-400 text-sm text-white space-x-5
                        hover:bg-gradient hover:text-white p-2 w-full mb-2 rounded-sm"
                                disabled>
                                <ImSpinner6 className="spinner space-x-4 mx-auto mr-0 text-3xl" />
                            </button>
                        )}
                    </div>
                    <div className="flex  text-start text-xs mt-2 text-gray-600 align-center space-x-3">
                        <p>
                            Don't have an account yet?
                        </p>
                        <Link to='/register'
                            className="text-xs text-[#0E1133] no-underline hover:text-[#E00]">
                            Click Here
                        </Link>
                    </div>
                    <div className="flex text-start text-xs align-center space-x-3">
                        <p className="text-gray-600">
                            Forgotten Password?
                        </p>
                        <Link to="/phone-verify" className="text-xs text-[#0E1133] hover:text-[#E00] no-underline">
                            Click here
                        </Link>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login