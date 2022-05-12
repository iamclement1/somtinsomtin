import Logo from '../../Assets/sometinlogo250-150-red.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import Loader from '../../Components/Loader/Loader'
import axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function  SignUpForm () {

    const navigate = useNavigate('')

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');



    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            "first_name" : firstName,
            "last_name" : lastName,
            "email" : email,
            "password" : password
        }

        axios.post('https://somtinsomtin-api.herokuapp.com/api/v1.0/users/complete_signup/', data)
        .then ( response => {
            console.log(response.data);
            toast.success('Account created successfully');

            if (response.data.reponse_code === '200') {
                navigate('/')
            }
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
                
            </h1>

            <form action="">

                <div>
                    <label htmlFor="First Name"> </label>
                        <input type="firstName"
                        id="firstName" 
                        name="firstName" 
                        placeholder="First Name"
                        value ={firstName}
                        onChange={ (e) => setFirstName(e.target.value)}
                        className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-4`} />
                </div>

                <div>
                    <label htmlFor="Last Name"> </label>
                        <input type="lastName"
                        id="lastName" 
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={ (e) => setLastName(e.target.value)}
                        className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-4`} />
                </div>
                <div>
                    <label htmlFor="Email"> </label>
                        <input type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email Address"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                        className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-4`} />
                </div>

                <div>
                    <label htmlFor="Password"> </label>
                        <input type="password"
                        id="password" 
                        name="password" 
                        placeholder="Password"
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)}
                        className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-4`} />
                </div>
                <div>
                    <button className="bg-red-400 font-semibold text-white hover:bg-red-600
                    hover:text-white p-2 w-full mb-2"
                    onClick={ handleSubmit }>
                        Get Started
                    </button>
                </div>
                <div className="flex text-center text-start text-xs
                mt-2 text-gray-600 align-center space-x-3">
                    <p>
                        Already have an account?
                    </p>
                    <Link to='/login'
                    className="text-xs text-red-600 no-underline hover:text-red-400
                    ">
                        Sign in
                    </Link>
                </div>
            </form>
        </div>
    </div>

    )
}

export default SignUpForm