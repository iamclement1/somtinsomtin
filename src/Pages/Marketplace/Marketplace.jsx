import Sidebar from "../../Components/Sidebar/Sidebar";
import MarketCard from './MarketCard'
import Footer from '../../Components/Footer/Footer'

function Marketplace() {
    return (
        <Sidebar>
            <div className="container-fluid pt-10">
                <MarketCard className="" />
                <Footer />
            </div>
        </Sidebar>
    )
}

export default Marketplace