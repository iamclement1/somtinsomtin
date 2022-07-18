import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login";
import Otp from "../../Pages/OTP/Otp";
import Register from "../../Pages/Register";
import SignUpForm from "../RegisterForm/SignUpForm";
import Marketplace from "../../Pages/Marketplace/Marketplace"
import Merchants from "../../Pages/Merchants/Merchant"
import Wallet from "../../Pages/Wallet/Wallet";
import Voucher from "../../Pages/Voucher/MyVoucher"
import DepVoucher from "../../Pages/Voucher/DepVoucher"
import Settings from "../../Pages/Settings/Settings"
import Checkout from '../../Pages/Checkout/Checkout'
import NotFound from "../../Pages/NotFound/NotFound"
import PhonePage from "../ForgotPassword/PhonePage";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import Profile from '../../Pages/Profile/Profile'
import Landing from "../../Pages/Landing/Landing";
import Terms from "../../Pages/Landing/Terms";
import Consumer from "../../Pages/Landing/Consumer"
import Corporate from "../../Pages/Landing/Corporate";
import Privacy from "../../Pages/Landing/Privacy";
import Contact from "../../Pages/Landing/Contact";
import About from "../../Pages/Landing/About";
import Product from "../../Pages/Landing/Product";
import VerifyWallet from "../../Pages/Wallet/VerifyWallet";

export default function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Landing /> } />
                    <Route path="terms" element={ <Terms /> } />
                    <Route path="consumer-terms" element={ <Consumer /> } />
                    <Route path="corporate-terms" element={ <Corporate />} />
                    <Route path="privacy-terms" element={ <Privacy />} />
                    <Route path="contact" element={ <Contact /> } />
                    <Route path="about" element={ <About /> } />
                    <Route path="product&services" element={ <Product /> } />
                <Route path="/marketplace" element={ <Marketplace/> } />
                <Route path="login" element={ <Login />}  />
                <Route path="phone-verify" element={ <PhonePage /> } />
                <Route path="forget-password" element={ <ForgotPassword /> } />
                <Route path="register" element={ <Register /> }/>
                <Route path='otp-page' element={ <Otp /> } />
                <Route path='signup' element={ <SignUpForm /> } />
                <Route path="merchants" element={ <Merchants /> } />
                <Route path="my-wallet" element={ <Wallet /> } />
                    <Route path="verify-wallet" element={ <VerifyWallet /> } />
                <Route path="my-voucher" element={ <Voucher /> } />
                <Route path="depleted-voucher" element={ <DepVoucher /> } />
                <Route path="settings/*" element={ <Settings /> } />
                <Route path="profile/" element={ <Profile /> } />
                <Route path="checkout/*" element={ <Checkout /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </div>
    )
}