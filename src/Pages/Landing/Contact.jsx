import Footer from "../../Pages/Landing/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { BsFillArrowUpSquareFill, BsHouseDoor } from "react-icons/bs";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useEffect, useState } from "react";
import Aos from "aos";


export default function Contact() {
    const [showButton, setShowButton] = useState(false);


    useEffect(() => {
        // gives global animation to all animation
        Aos.init({ duration: 2000 })
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
        <>
            <Navbar />
            <div className="container-fluid mb-4">
                <div className="container pt-56">
                    <div className="row md:space-x-40">
                        <div className="col-md-4 mb-6">
                            <h3 className="text-[#0E1133] font-bold text-4xl ">
                                Get in touch
                            </h3>
                            <p className="text-start text-gray-400"> Looking for help? Fill the form and start a new adventure</p>
                            <hr />
                            <div className="mb-4">
                                <h4 className="text-[#0E1133] text-xl font-bold">
                                    Headquarters
                                </h4>
                                <div className="flex space-x-8">
                                    <BsHouseDoor className="text-[#E4043C] text-3xl " />
                                    <p>
                                        Block A, Accra Digital Center
                                        Ring Road West - Accra Ghana
                                    </p>
                                </div>
                            </div>
                            <div className="focus:outline-blue-500 mb-4">
                                <h4 className="text-[#0E1133] text-xl font-bold">
                                    Phone
                                </h4>
                                <div className="flex space-x-8">
                                    <AiOutlinePhone className="text-[#E4043C] text-3xl " />
                                    <button onClick={() => window.location.href = "tel:+233242426456"}
                                        className="cursor-pointer">
                                        +233242426456
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[#0E1133] text-xl font-bold pt-2">
                                    Support
                                </h4>
                                <div className="flex space-x-8">
                                    <AiOutlineMail className="text-[#E4043C] text-2xl " />
                                    <button onClick={() => window.location.href = 'mailto:support@somtinsomtin.com'}
                                        className="text-gray-600 cursor-pointer">
                                        support@somtinsomtin.com
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6"
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">
                            <div className="p-12 bg-[#0E1133] shadow-md">
                                <h3 className="text-white font-bold ">
                                    Let's connect
                                </h3>
                                <p className="text-start md:text-sm text-xs text-white">
                                    Need help? Send us a message by clicking on the button below
                                </p>
                                <form action="" className="">
                                    <div className="mb-4">
                                        <label htmlFor="Name"></label>
                                        <input type="text" name="name" id="name"
                                            placeholder="Full Name" className="p-2 w-full
                                        focus:outline-blue-500 border" />

                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="Email"></label>
                                        <input type="email" name="email" id="email"
                                            placeholder="Email Address" className="p-2 w-full
                                        focus:outline-blue-500 border" />
                                    </div>
                                    <div className="mb-4">
                                        <textarea name="message" id="message"
                                            placeholder="Message..." className="p-2 w-full
                                        focus:outline-blue-500 border"
                                            cols="30" rows="10"></textarea>
                                    </div>
                                    <button className="bg-[#E4043C] text-white p-3 rounded-md
                                    hover:bg-green-500">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* <div className="row pt-6">
                        <div className="col-md-12 md:p-0 p-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7942.0117197298405!2d-0.23126764609371342!3d5.566146900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a01cf93ff85%3A0x3b6fd9b89c7ad508!2sAccra%20Digital%20Centre!5e0!3m2!1sen!2sng!4v1656970340791!5m2!1sen!2sng" width="1000" height="500" style={{
                                border: 0,
                                width: "1000",
                            }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div> */}
                </div>

            </div>
            <Footer />
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    <BsFillArrowUpSquareFill />
                </button>
            )}
        </>
    )
}