import axios from "axios";
import { useEffect, useState } from "react"
import Loader from "../../Components/Loader/Loader";
import WalletCard from './WalletCard';

export default function DisplayWallet() {

    const [wallet, setWallet] = useState([])
    const [loading, setLoading] = useState(true);
    const auth_token = localStorage.getItem('token');

    useEffect(() => {
        axios.get('https://somtinsomtin-api.herokuapp.com/api/v1.0/wallets/', {
            headers: {
                Authorization: `Bearer ${auth_token}`
            }
        })
            .then((response) => {
                const allWalllets = response.data.results;
                setWallet(allWalllets);
                setLoading(false);
                // console.log(setWallet);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [auth_token, wallet])
    return (
        <main>
            <>
                {
                    loading ? (
                        <div className="text-center m-auto pt-56">
                            <Loader />
                        </div>
                    ) : (
                        <div className="flex flex-wrap justify-start md:space-x-6 w-full">
                            <WalletCard wallet={wallet} />
                        </div>
                    )
                }
            </>
        </main>
    )
}