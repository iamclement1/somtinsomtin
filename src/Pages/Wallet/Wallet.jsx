import { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar'
import { WalletTransactions } from '../../Utils/WalletTransaction'

export default function Wallet() {

    const [value, setValue] = useState();

    const handleSelect = (event) => {
        setValue(event)
    }
    return (
        <Sidebar>
            <div className="container">
                <div className="row">
                    <div className="pt-3">
                        <button className="bg-[#E4043C] p-2 rounded-md text-white font-semibold "
                            style={{
                                float: 'right'
                            }}>
                            + Add Wallet
                        </button>
                    </div>
                    <div className="col-md-12 pt-3">
                        <div className="md:flex justify-between bg-white p-3 shadow-md rounded-md">
                            <div className="px-3 py-3">
                                <h2 className="text-2xl font-semibold mb-0">
                                    Transaction history
                                </h2>
                                <p className="text-sm text-gray-500 mb-0">
                                    All transactions on your wallets.
                                </p>
                            </div>
                            <div>
                                <div className="dropdown show px-3 py-3">
                                    <button className="btn dropdown-toggle rounded-md border border-gray-600
                                    text-gray-400"
                                        type="button"
                                        id="dropdownMenuLink"
                                        aria-expanded="false"
                                        data-bs-toggle="dropdown"
                                        onSelect={handleSelect}>
                                        All Transaction Types
                                    </button>
                                    <ul className="dropdown-menu p-3"
                                        aria-labelledby='dropdownMenuLink'
                                    >
                                        {
                                            WalletTransactions.map((transaction, index) => {
                                                return (
                                                    <li active={index === 0 ? true : false}
                                                        eventKey={transaction.name} role="button"
                                                        className="p-1 hover:bg-[#E4043C] hover:text-white rounded-sm">
                                                        {transaction.name}
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    )
}