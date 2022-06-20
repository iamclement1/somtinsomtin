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

export default function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Marketplace/> } />
                <Route path="login" element={ <Login />}  />
                <Route path="phone-verify" element={ <PhonePage /> } />
                <Route path="forget-password" element={ <ForgotPassword /> } />
                <Route path="register" element={ <Register /> }/>
                <Route path='otp-page' element={ <Otp /> } />
                <Route path='signup' element={ <SignUpForm /> } />
                <Route path="merchants" element={ <Merchants /> } />
                <Route path="my-wallet" element={ <Wallet /> } />
                <Route path="my-voucher" element={ <Voucher /> } />
                <Route path="depleted-voucher" element={ <DepVoucher /> } />
                <Route path="settings/*" element={ <Settings /> } />
                <Route path="checkout/*" element={ <Checkout /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </div>
    )
}