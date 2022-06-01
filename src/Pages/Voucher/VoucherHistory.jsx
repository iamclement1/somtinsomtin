import React from 'react'
import { Link } from 'react-router-dom'

function VoucherHistory() {
    return (
        <div className="container-full py-3 bg-white rounded-sm shadow-md">
            <div className="row">
                <div className="flex justify-between p-5">
                    <div>
                        <p className="text-2xl">
                            Voucher History
                        </p>
                        <span className="text-xs text-gray-400">
                            All transactions that occurred on your vouchers
                        </span>
                    </div>
                    <div>
                        <div className="dropdown show">
                            <button className="btn dropdown-toggle border border-gray-400
                            rounded-md"
                                type="button"
                                id='dropdownMenuButton1'
                                aria-expanded="false"
                                data-bs-toggle="dropdown">
                                All Transaction Types
                            </button>
                            <ul className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <Link to="" className="no-underline text-gray-400 hover:text-gray-400">
                                        All Transaction Types
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="no-underline text-gray-400 hover:text-gray-400">
                                        Redemption
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="no-underline text-gray-400 hover:text-gray-400">
                                        Purchase
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="no-underline text-gray-400 hover:text-gray-400">
                                        Transfer
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="no-underline text-gray-400 hover:text-gray-400">
                                        Gift
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="col-md-12 bg-indigo-100 p-2 rounded-md shadow-md m-auto">
                        <p className="text-[#362F62] text-xm py-2">
                            😔
                            <span className='font-bold'> Sorry! </span>  We couldn't find any vouchers to show.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VoucherHistory
