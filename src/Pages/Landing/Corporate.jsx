import { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "./Footer";

export default function Corporate() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 250) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <main>
            <Navbar />
            <div className="container-fluid">
                <div className="container md:pt-32 pt-24">
                    <div className="row pt-12">
                        <h1 className="text-[#0E1133] font-bold pb-6">
                            Corporate Terms & Conditions
                        </h1>
                    </div>
                </div>
            </div>
            <Footer />
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    <BsFillArrowUpSquareFill />
                </button>
            )}
        </main>
    )
}