
import Sidebar from '../../Components/Sidebar/Sidebar'
import MerchantCard from './MerchantCard';

function Merchant() {

    return (
    <Sidebar>
        <main className=" px-4 py-4">
          <div className="container-full">
            <div className="row">
              <div className="col-md-12">
                <h4 className="text-xl text-[#E00] ">
                  Merchants
                </h4>
                <p className="text-sm text-gray-500">
                  Approved Sometin Merchants
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <MerchantCard />
              </div>
              <div className="col-md-4">
                <MerchantCard />
              </div>
              <div className="col-md-4">
                <MerchantCard />
              </div>
            </div>
          </div>
        </main>
    </Sidebar>
  )
}

export default Merchant
