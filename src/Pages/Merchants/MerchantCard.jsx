import './Merchant.css';
import { MerchantData } from '../../Utils/MerchantData'
import MerchantList from './MerchantList';

function MerchantCard ({ name, number, img}) {
    return (
        <div className="container-full">
            <div className="row">
                <ul style={{
                    listStyleType: 'none'
                }}>
                    { MerchantData.map(MerchantData => {
                        return <MerchantList MerchantData={MerchantData}
                        key={MerchantData.id} />
                    }) }
                </ul>
            </div>
        </div>
    )
}

export default MerchantCard