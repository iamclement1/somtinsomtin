import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { BsShieldLockFill } from 'react-icons/bs'

export default function WalletCard(props) {

    const handleVerify = (event) => {
        event.preventDefault()
    }

    const handleDelete = (event) => {
        event.preventDefault();
    }

    const handleEdit = (event) => {
        event.preventDefault();
    }

    const displayWallet = (props) => {
        const { wallet } = props;

        if (wallet.length > 0) {
            return (
                wallet.map((wallet, index) => {
                    return (
                        <div className="pt-6">
                            <div className="bg-white ">
                                <div className="max-w-sm w-full flex items-center bg-white shadow-md p-4
                            rounded-sm"
                                    key={wallet.id}>
                                    <img src={wallet.network_icon} alt="wallet___logo"
                                        style={{
                                            width: "30px",
                                            height: '30px',
                                            borderRadius: "50%",
                                        }} />
                                    <div className="text-gray-600 text-xs font-semibold ml-3">
                                        {wallet.network_name}
                                    </div>
                                </div>

                                <div className="text-gray-600 bg-white px-4 text-xl shadow-md">
                                    {wallet.wallet_number}
                                </div>

                                <div className="flex justify-between bg-white shadow-md p-4 pb-3">
                                    <div className="text-sm text-gray-400">
                                        {wallet.alias}
                                    </div>
                                    <div className=" flex space-x-2 ml-16 text-gray-600 text-xl cursor-pointer">
                                        <BsShieldLockFill className="hover:text-[#E00] " role="button"
                                        onClick={handleVerify} />
                                        <AiFillDelete className="hover:text-[#E00] " role="button"
                                        onClick={handleDelete} />
                                        <AiFillEdit className="hover:text-[#E00] " role="button"
                                        onClick={handleEdit} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
        else {
            return (
                <h3>
                    No Wallet Found
                </h3>
            )
        }
    }
    return (
        <>
            {displayWallet(props)}
        </>
    )
}