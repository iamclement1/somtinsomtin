import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MarketCard from './MarketCard'

export default function Marketplace () {
    return (
        <Sidebar>
            <div className="container-fluid pt-10">
                <div className="row mb-6">
                    <div className="search__body">
                        <div className="search__text border border-dark-purple
                        w-2/6 p-2 px-6 rounded-lg">
                            <div className="search__icon">
                                <FontAwesomeIcon icon={ faSearch } />
                                <input type="text" id="text" placeholder="Search here..." 
                                className="focus:outline-none ml-3 w-5/6"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <MarketCard />
                </div>
            </div>
        </Sidebar>
    )
}