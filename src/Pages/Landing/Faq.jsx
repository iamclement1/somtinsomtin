import Accordion from "./Accordion";


export default function Faq () {
    return (
        <main>
            <div className="relative bg-gray-200 pt-5">
                <div>
                    <h3 className="text-[#0E1133] font-bold text-4xl m-auto text-center ">
                        Frequently asked questions
                    </h3>
                    <p className="text-gray-500 text-center pb-2">
                        Do I have to pay to use SomtinSomtin?
                    </p>
                    <Accordion />
                </div>
            </div>
        </main>
    )
}