import Logo from '../Assets/sometinlogo250-150-red.png'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'

function Login() {

    const [value, setValue] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
    }

    return (
    <div className="h-screen flex bg-gray-bg1">
        <div className="w-full max-w-md m-auto bg-white rounded-lg 
        shadow-md py-8 px-16">
            <img src={ Logo } alt="brand-logo"
            className="w-12" />
            <h1 className='text-2xl font-medium text-dark mt-4 mb-2 text-center'> 
                Login to your account
            </h1>

            <form action="">
                <div>
                    <label htmlFor="Phone Number"></label>
                    <PhoneInput placeholder="Enter phone number"
                    international
                    defaultCountry='GH'
                    value={value}
                    onChange={setValue}
                    className= {`w-full p-2 text-dark border rounded-md outline-none 
                    text-sm transition duration-150 ease-in-out mb-4`} />
                </div>

                <div>
                    <label htmlFor="Pin"> </label>
                        <input type="text" id="pin" name="pin" placeholder="Enter Pin"
                        className={`w-full p-2 text-primary border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-4`} />
                </div>
                <div>
                    <button className="btn btn-primary"
                    onClick={ handleSubmit }>Request OTP</button>
                </div>
            </form>
        </div>
    </div>

    )
}

export default Login