import React from 'react'

function Billing() {

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <div className="container-full">
                <div className="row">
                    <h2 className="text-xl pt-3">Billing Address</h2>
                    <div className="col-md-8">
                        <form action="" className=''>
                            <div className="flex w-full">
                                <div className="w-full">
                                    <label htmlFor="" className='block text-gray-500'>First Name</label>
                                    <input type="text" name="firstName"
                                        className="p-1 w-full rounded-md border border-gray-400 focus:outline-none" />
                                </div>
                                <div className="lastname pl-4 w-full">
                                    <label htmlFor="" className="block text-gray-500">Last name</label>
                                    <input type="text" name="lastName"
                                        className="p-1 w-full rounded-md border border-gray-400 focus:outline-none" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-500">Email</label>
                                <input type="email" name="email"
                                    className="p-1 w-full rounded-md border border-gray-400 focus:outline-none" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-500">Address</label>
                                <input type="text" name="address"
                                    className="p-1 w-full rounded-md border border-gray-400 focus:outline-none" />
                            </div>
                            <hr className='text-gray-400 mt-6 shadow-md' />
                            <div className="space-x-2">
                                <input type="checkbox" id="information" name="information" />
                                <label htmlFor="information" className="text-gray-500">
                                    Save this information for next time.
                                </label>
                            </div>
                            <hr className='text-gray-400 mt-6 shadow-md' />
                            <div className="">
                                <p className="text-xl">
                                    Mode of Payment
                                </p>
                                <div className="space-x-2">
                                    <input type="checkbox" id="creditCard" name="creditCard" />
                                    <label htmlFor="creditCard" className="text-gray-500">
                                        Credit Card
                                    </label>
                                </div>
                                <div className="space-x-2">
                                    <input type="checkbox" id="debitCard" name="debitCard" />
                                    <label htmlFor="debitCard" className="text-gray-500">
                                        Debit Card
                                    </label>
                                </div>
                                <div className="flex pt-3 w-full">
                                    <div className="w-full">
                                        <label htmlFor="" className='block text-gray-500'>Name on Card</label>
                                        <input type="text" name="card"
                                            className="p-1 w-full rounded-md border border-gray-400 focus:outline-none" />
                                        <p className='text-xs text-gray-400'>Full name as displayed on card</p>
                                    </div>
                                    <div className="lastname pl-4 w-full">
                                        <label htmlFor="" className="block text-gray-500">Card Number</label>
                                        <input type="number" name="number"
                                            className="p-1 w-full rounded-md border border-gray-400 focus:outline-none" />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="">
                                        <label htmlFor="" className='block text-gray-500'>Expiration</label>
                                        <input type="text" name="expiration"
                                            className="p-1 w-full rounded-md border border-gray-400 focus:outline-none" />
                                    </div>
                                    <div className="lastname pl-4">
                                        <label htmlFor="" className="block text-gray-500">CVV</label>
                                        <input type="password" name="cvv"
                                            className="p-1 w-full rounded-md border border-gray-400 focus:outline-none" />
                                    </div>
                                </div>
                                <button className="bg-[#E4043C] w-full text-white
                                p-2 mt-4 rounded-md text-xm"
                                onClick={handleSubmit}>Checkout</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-[#E4043C] text-white ">
                            <div className=" p-3 text-xl">
                                Promo Code
                            </div>
                        </div>
                        <div>
                            <input type="text" id="code" name="promo__code"
                            placeholder="Promo Code"
                            className="form-control mt-3"/>
                            <button className="bg-[#E4043C] text-white p-2 mt-2 text-sm rounded-md">
                                Redeem
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billing