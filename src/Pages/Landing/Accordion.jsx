export default function Accordion() {
    return (
        <div className="container-fluid bg-gray-200">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="acordion-item rounded-md bg-white mb-4">
                                <h2 className="accordion-header mb-0 " id="flush-headingOne">
                                    <button className="accordion-button relative flex items-center
                            w-2/6 py-4 px-5 text-base text-left transition focus:outline-none bg-white
                            font-bold text-[#0E1133] focus:text-red-500"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                        I am a vendor, how can I create my voucher?
                                    </button>
                                </h2>
                                <div className="accordion-collapse collapse show" id="flush-collapseOne"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                    <div className="accordion-body px-4 py-5">
                                        To create your voucher, signup or login on https://merchant.somtinsomtin.com;
                                        your account will be reviewed and approved, after which you can start creating your vouchers.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item rounded-md bg-white pt-3">
                                <h2 className="accordion-header mb-0 " id="flush-headingTwo" >
                                    <button className="accordion-button relative flex items-center w-full
                                py-4 px-5 text-base text-left transition focus:outline-none bg-white
                                font-bold text-[#0E1133] "
                                        type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false" aria-controls="flush-collapseTwo" >
                                        How do I transfer value on a voucher?
                                    </button>
                                </h2>
                                <div className="accordion-collapse collapse show" id="flush-collapseTwo"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" >
                                    <div className="accordion-body py-4 px-5">
                                        Every voucher has a value that can be transferred the transferred value serves as a discount on your next voucher purchase.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="accordion" id="accordionExample" >
                            <div className="accordion-item rounded-md bg-white mb-4">
                                <h2 className="accordion-header mb-0" id="headingOne" >
                                    <button className="accordion-button relative flex items-center w-full
                                py-4 px-5 text-base text-left transition focus:outline-none bg-white"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                        aria-expanded="false" aria-controls="collapseOne" >
                                        What can I use my points for?
                                    </button>
                                </h2>
                                <div className="accordion-collapse collapse show" id="collapseOne"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                                    <div className="accordion-body py-4 px-5">
                                        You can use your points to purchase a new voucher or send a voucher to a friend.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item rounded-md bg-white">
                                <h2 className="accordion-header mb-0" id="headingTwo">
                                    <button className="accordion-button relative flex items-center w-full
                                    py-4 px-5 text-base text-left transition focus:outline-none bg-white"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                        aria-expanded="false" aria-controls="collapseTwo" >
                                        How do u send someone somtin
                                    </button>
                                </h2>
                                <div className="accordion-collapse collapse show" id="collapseTwo"
                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
                                    <div className="accordion-body px-4 py-5">
                                        To send someone somtin, simply find them in your contacts and send them a voucher you have purchased on the app.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}