import { useEffect, useState } from 'react';
import Aos from 'aos'
import Image from '../../Assets/black-couple.jpg'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "./Footer";
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

export default function About() {

    const [ showButton, setShowButton ] = useState(false);
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
                <div className=" md:pt-16 pt-8">
                    <div className="row">
                        <div className="flex flex-col w-full justify-between items-center
                md:flex-row-reverse md:space-x-12 mb-4">
                            <div className="md:w-5/6 mx-auto md:mb-0">
                                <img src={Image} alt="hero-Landing"
                                    className="pt-36"
                                    data-aos="fade-left"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out" />
                            </div>
                            <div className="md:w-5/6 w-full md:mt-32">
                                <h3 className="text-xl text-gray-600 font-serif mb-4">
                                    What is SomtinSomtin?
                                </h3>
                                <p className="text-start">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero omnis est dolorem sit iste voluptatem quidem blanditiis error maxime! Laboriosam id similique officia? Itaque vitae placeat nesciunt nostrum maiores, sequi fugiat eos delectus magnam eius atque rem possimus ab, ipsa deleniti quasi aperiam. Qui delectus odit temporibus veniam consequatur cumque.
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatum consequatur doloribus illum non. Quasi officiis dolores repellendus eaque nemo eligendi id cumque sapiente numquam ipsum sequi quod laborum natus, reprehenderit, maxime sint molestiae ullam! Ab deserunt quo fugit vero, nisi voluptatum necessitatibus eum cupiditate temporibus non velit beatae odio?
                                </p>
                            </div>

                        </div>

                        <div className="bg-gray-200 pt-5 mb-3 items-center text-center">
                            <p className="text-4xl mb-4">
                                What we offer
                            </p>
                            <p className="md:w-3/6 text-center items-center mx-auto mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident earum impedit, quam quisquam doloremque nam aperiam distinctio ad consequatur neque hic, illum fugiat quasi quis ipsam accusamus expedita recusandae minima deserunt commodi iure. Iste asperiores, facilis culpa impedit architecto dolorum voluptate quia, tempora nihil accusantium provident similique obcaecati laboriosam accusamus placeat adipisci fuga numquam tempore beatae eius dicta illum. Non alias mollitia inventore perferendis incidunt nostrum tempora voluptate. Odit illo blanditiis, dolorem temporibus fugit ipsa modi debitis magnam tempora ex nihil impedit sint excepturi officiis odio, sit, eligendi placeat! Voluptas explicabo ea magni voluptatibus necessitatibus tempore maxime inventore voluptate.
                            </p>
                        </div>

                        <div className="text-center mx-auto pt-8">
                            <p className="text-4xl mb-4">
                                Our Team
                            </p>
                        </div>
                    </div>
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