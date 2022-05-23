import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Login from "../../Pages/Login";
import Otp from "../../Pages/OTP/Otp";
import Register from "../../Pages/Register";
import SignUpForm from "../RegisterForm/SignUpForm";
import Marketplace from "../../Pages/Marketplace/Marketplace"

export default function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Marketplace/> } />
                <Route path="/login" element={ <Login />}  />
                <Route path="/register" element={ <Register /> }/>
                <Route path='/otp-page' element={ <Otp /> } />
                <Route path='/signup' element={ <SignUpForm /> } />
                <Route path="/dashboard" element={ <Dashboard /> } />
            </Routes>
        </div>
    )
}