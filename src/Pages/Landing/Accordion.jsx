export default function Accordion () {
    return (
        <main>
            <div className="relative">
                <div>
                    <div className="flex">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item border-t border-l 0 border-r-0 rounded-none
                            bg-white border border-gray-300">
                                <h2 className="accordion-header mb-0" id="flush-headingOne">
                                    <button className="accordion-button relative flex items-center
                                    w-full py-4 px-5 text-base text-gray-800 text-left
                                    bg-white border-0 rounded-none transition
                                    focus:outline-none" type="button" datab-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        I am a vendor, how can I create my Voucher?
                                    </button>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}