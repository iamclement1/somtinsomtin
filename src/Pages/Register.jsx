import Logo from '../Assets/sometinlogo250-150-red.png'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Register() {

    const [value, setValue] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
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
                    value={value}
                    onChange={setValue}
                    required={true}
                    className= {`md:w-full p-2 text-gray-400 border rounded-md outline-none 
                    text-sm transition duration-150 ease-in-out mb-4 focus:outline-none
                    `} />
                </div>

                {/* <div>
                    <label htmlFor="Email"> </label>
                        <input type="email" id="email" name="email" placeholder="Email Address"
                        className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-4`} />
                </div>

                <div>
                    <label htmlFor="Password"> </label>
                        <input type="password" id="password" name="password" placeholder="Password"
                        className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-4`} />
                </div> */}
                <div>
                    <button className="bg-red-400 font-semibold text-white hover:bg-red-600
                    hover:text-white p-2 w-full mb-2"
                    onClick={ handleSubmit }>Get Started</button>
                </div>
                <div className="flex text-center text-start text-xs
                mt-2 text-gray-600 align-center space-x-3">
                    <p>
                        Already have an account?
                    </p>
                    <Link to='/'
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

export default Register