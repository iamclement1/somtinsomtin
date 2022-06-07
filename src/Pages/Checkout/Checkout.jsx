import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import CheckoutTab from '../../Components/Tabs/CheckoutTab'

function Checkout() {
    return (
        <Sidebar>
            <main className="md:px-4 py-4">
                <div className="container-full">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-xl text-[#E4043C]">
                                Checkout
                            </h4>
                        </div>
                        <div className="row-md-12">
                            <CheckoutTab />
                        </div>
                    </div>
                </div>
            </main>
        </Sidebar>
    )
}

export default Checkout
