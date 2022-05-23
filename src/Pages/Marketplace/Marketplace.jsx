import Sidebar from "../../Components/Sidebar/Sidebar";
import MarketCard from './MarketCard'

export default function Marketplace () {
    return (
        <Sidebar>
            <div className="container-fluid">
                <div className="row">
                    <MarketCard />
                </div>
            </div>
        </Sidebar>
    )
}