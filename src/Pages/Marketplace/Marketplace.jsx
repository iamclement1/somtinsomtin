import Sidebar from "../../Components/Sidebar/Sidebar";
import MarketCard from './MarketCard'
import Footer from '../../Components/Footer/Footer'

function Marketplace() {
    return (
        <Sidebar>
            <main className="pt-10 w-full">
                <div className="container-fluid md:pt-10 p-0">
                    <MarketCard />
                    <Footer />
                </div>
            </main>
        </Sidebar>
    )
}

export default Marketplace