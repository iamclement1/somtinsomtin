import './Merchant.css';
import { MerchantData } from '../../Utils/MerchantData'
import MerchantList from './MerchantList';

function MerchantCard ({ name, number, img}) {
    return (
        <div className="container-full">
            <div className="row">
                {
                    MerchantData.map((MerchantData) => (
                        <ul>
                            <li>
                                <MerchantList MerchantData={MerchantData}
                                key={MerchantData.id} />
                            </li>
                        </ul>
                    ))
                }
                
            </div>
        </div>
    )
}

export default MerchantCard

