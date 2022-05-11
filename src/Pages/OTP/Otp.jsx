import Logo from '../../Assets/sometinlogo250-150-red.png'
import 'react-phone-number-input/style.css'

function Otp() {



    const handleSubmit = async (event) => {
        event.preventDefault();
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
                        text-sm transition duration-150 ease-in-out mb-4`} />
                </div>

                <div className="flex space-x-4 justify-center">
                    <p className="text-gray-600 text-center text-xs">
                        Didn't receive OTP?
                    </p>
                    <p className="text-gray-400 text-center text-xs
                    text-underline cursor-pointer hover:text-gray-700">
                        Resend OTP
                    </p>
                </div>
                <div>
                    <button className="bg-gray-200 text-gray-400 hover:bg-gray-600
                    hover:text-white p-2 w-full mb-2"
                    onClick={ handleSubmit }>Sign In</button>
                </div>
            </form>
        </div>
    </div>

    )
}

export default Otp