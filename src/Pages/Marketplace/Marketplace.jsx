import Sidebar from "../../Components/Sidebar/Sidebar";
import MarketCard from './MarketCard'

function Marketplace () {
    return (
        <Sidebar>
            <div className="container-fluid pt-10">
                <div className="row">
                    <MarketCard />
                </div>
            </div>
        </Sidebar>
    )
}

export default Marketplace