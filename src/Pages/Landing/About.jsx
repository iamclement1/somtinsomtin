import Navbar from "../../Components/Navbar/Navbar";
import Footer from "./Footer";

export default function About () {
    return (
        <>
        <Navbar />
        <div className="container-fluid mb-4">
            <div className="container pt-56">
                <div className="row">
                    <h1 className="text-[#0E1133] font-bold">
                        About SomtinSomtin
                    </h1>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}