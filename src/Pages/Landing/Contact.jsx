import Footer from "../../Pages/Landing/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Map from "./Map";

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="container-fluid bg-gray-200">
                <div className="container pt-56">
                    <div className="row md:space-x-40">
                        <div className="col-md-4">
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
                                <AiOutlineMail className="text-[#E4043C] text-2xl "/>
                                    <button onClick={() => window.location.href = 'mailto:support@somtinsomtin.com'}
                                        className="text-gray-600 cursor-pointer">
                                        support@somtinsomtin.com
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="bg-white p-12 ">
                                <h3 className="text-[#0E1133] font-bold ">
                                    Let's connect
                                </h3>
                                <p className="text-start md:text-sm text-xs">
                                    Need help? Send us a message by clicking on the button below
                                </p>
                                <form action="" className="">
                                    <div className="mb-4">
                                        <label htmlFor="Name"></label>
                                        <input type="text" name="name" id="name"
                                            placeholder="Enter Fullname" className="p-2 w-full
                                        focus:outline-blue-500 border" />

                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="Email"></label>
                                        <input type="email" name="email" id="email"
                                            placeholder="Enter Email" className="p-2 w-full
                                        focus:outline-blue-500 border" />
                                    </div>
                                    <div className="mb-4">
                                        <textarea name="message" id="message"
                                            placeholder="Enter Message" className="p-2 w-full
                                        focus:outline-blue-500 border"
                                            cols="30" rows="10"></textarea>
                                    </div>
                                    <button className="bg-[#E4043C] text-white p-3 rounded-md
                                    hover:bg-[#0E1133]">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                    
                </div>

            </div>
            <Footer />
        </>
    )
}