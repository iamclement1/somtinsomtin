import { Link } from 'react-router-dom'
import { MarketList } from '../../Utils/Marketcontent'
export default function MarketCard(props) {
    return (
        <>
            <div className="container-fluid flex flex-wrap justify-around mb-3">
                {
                    MarketList.map((market, index) => {
                        return (
                            <>
                                <div className="max-w-sm rounded overflow-hidden shadow-md bg-white mb-3">
                                    <img src={market.img} alt="market__image" className="w-full" />
                                    <div className="px-4 py-4">
                                        <div className="text-xl mb-2 font-bold">
                                            {market.title}
                                        </div>
                                        <p className="text-gray-700 text-base">
                                            {market.description}
                                        </p>
                                    </div>
                                    <div className="px-6 pb-4">
                                        <Link to="/checkout">
                                            {market.button}
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}