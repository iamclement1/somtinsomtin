
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import Logo from '../../Assets/sometinlogo250-150-red.png'

export default function ForgotPassword() {

    const navigate = useNavigate('')

    const [isLoading, setIsLoading] = useState(false)
    const [number, setNumber ]  = useState()
    const [ code, setCode ] = useState()
    const [ password, setPassword ] = useState()
    const auth_token = localStorage.getItem('token');

    useEffect(() => {
        const number = localStorage.getItem('number')
        setNumber(number)
    }, [])

    const handleSubmit = (event) => {
        setIsLoading(true);
        event.preventDefault();

        const data = {
            "phon_number": number,
            "unique_code": code,
            "password": password,

        }
        axios.post('https://somtinsomtin-api.herokuapp.com/api/v1.0/users/forgot_password/', data, {
            headers: {
                Authorization: `Bearer ${auth_token}`
            }
        })
        .then(response => {
            const {auth_token } = response.data;
            localStorage.setItem('token', auth_token);
            console.log(response.data)
            setIsLoading(false)
            toast("password reset successfully")

            if( response.data.response_code === "100") {
                navigate('/login')
            }
        })
        .catch(error => {
            console.log(error.response);
            setIsLoading(false)
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
                    Reset Password
                </h1>

                <form action="">
                    <div>
                        <label htmlFor="Unique Code"> </label>
                        <input type="invitation-code"
                            id="unique_code"
                            name="unique_code"
                            placeholder="Enter Verfication Code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-3`} />
                    </div>
                    <div>
                        <label htmlFor="Password"> </label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Enter New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-3`} />
                        
                    </div>
                    <div>
                        <label htmlFor="Confirm Password" className="font-bold text-gray-500"> </label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Confirm New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-3`} />
                    </div>

                    <div className=''>
                        {!isLoading && (
                            <button className="bg-red-400
                    font-semibold text-white mr-2
                    hover:bg-red-700 hover:text-white p-2 w-full mb-2 rounded-sm"
                                onClick={handleSubmit}>
                                Reset Password
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
