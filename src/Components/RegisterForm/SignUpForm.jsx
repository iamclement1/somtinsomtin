import Logo from '../../Assets/brand-logo/sometinlogo250-150-red.png'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';




function SignUpForm(props) {

    const navigate = useNavigate('')

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [ivCode, setIvCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    let errorsObj = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''

    }


    useEffect(() => {
        const number = localStorage.getItem('number')
        setNumber(number)
    }, [])



    const handleSubmit = (event) => {
        setIsLoading(true)
        event.preventDefault();
        const data = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "phone_number": number,
            "password": password,
            "invitation_code": ivCode,
        }

        let error = false;
        const errorObj = { ...errorsObj };
        if (firstName === "") {
            errorObj.firstName = "First Name is required";
        }
        if (lastName === "") {
            errorObj.lastName = "Last Name is required";
        }

        if (email === "") {
            errorObj.email = "Email is required"
        }

        if (password === "") {
            errorObj.password = "Password should contain 4 numbers"
        }

        setError(errorObj);

        if (error) return;


        axios.post('https://somtinsomtin-api.herokuapp.com/api/v1.0/users/complete_signup/', data)
            .then(response => {
                const { auth_token } = response.data;
                localStorage.setItem('token', auth_token);
                localStorage.getItem('token');
                console.log(response.data);
                toast.success('Account created successfully');
                setIsLoading(false);

                if (response.data.response_code === "100") {
                    navigate('/login')
                }
            })
            .catch(error => {
                console.log(error.response)
                toast.error('User Not Registered')
                setIsLoading(false);
            })

    }


    return (
        <div className=" container-xxl position-relative login-background h-screen
    flex bg-gray-bg1 font-sans">
            {props.errorMessage && (
                <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                    {props.errorMessage}
                </div>
            )}
            <div className="w-full max-w-md m-auto bg-white rounded-lg 
        shadow-md py-2 md:px-16 px-6">
                <img src={Logo} alt="brand-logo"
                    className="w-14 m-auto" />
                <h1 className='text-sm font-medium text-dark mt-2 mb-2 text-center'>

                </h1>

                <form action="">

                    <div>
                        <label htmlFor="First Name"> </label>
                        <input type="firstName"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            value={firstName}

                            onChange={(e) => setFirstName(e.target.value)}
                            className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-3`} />
                        { error.firstName && <div className="text-red-600"> {error.firstName} </div> }

                    </div>

                    <div>
                        <label htmlFor="Last Name"> </label>
                        <input type="lastName"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-3`} />
                        { error.lastName && <div className="text-red-600" > {error.lastName} </div> }
                    </div>
                    <div>
                        <label htmlFor="Email"> </label>
                        <input type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-3`} />
                        {error.email && <div className="text-red-600">{error.email}</div>}
                    </div>

                    <div>
                        <label htmlFor="Password"> </label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your four digit pin"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-3`} />
                        {error.password && <div className="text-red-600" >{error.password}</div>}
                    </div>

                    <div>
                        <label htmlFor="Invitation"> </label>
                        <input type="invitation-code"
                            id="invitation-code"
                            name="invitation-code"
                            placeholder="Invitation Code"
                            value={ivCode}
                            onChange={(e) => setIvCode(e.target.value)}
                            className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-3`} />
                    </div>
                    <div>
                        {!isLoading && (
                            <button className="bg-red-400
                    font-semibold text-white hover:bg-red-600
                    hover:text-white p-2 w-full mb-2 rounded-sm"
                                onClick={handleSubmit}>
                                Sign Up
                            </button>
                        )}

                        {isLoading && (
                            <button className="bg-red-400
                        text-sm text-white hover:bg-red-700
                        hover:text-white p-2 w-full mb-2 rounded-sm"
                                disabled>
                                <FontAwesomeIcon icon={faSpinner}
                                    className='space-x-4 spinner mr-3' />
                                loading...
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
                            Log in
                        </Link>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SignUpForm