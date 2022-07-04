import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "./Hero";
import Services from "./Services";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import './Landing.css'
import Footer from "./Footer";
import Everyone from "./Everyone";
import Faq from "./Faq";

export default function Landing () {
    const [ showButton, setShowButton ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 250 ) {
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
            <Hero />
            <Services />
            <Everyone />
            <Faq />
            <Footer />

            { showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    <BsFillArrowUpSquareFill />
                </button>
            )}
        </main>
    )
}