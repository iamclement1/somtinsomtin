
import axios from 'axios';
import Footer from '../../Components/Footer/Footer';
import Sidebar from '../../Components/Sidebar/Sidebar'
import MerchantCard from './MerchantCard';

function Merchant() {

  const getMerchants = () => {
    axios.get('https://somtinsomtin-api.herokuapp.com/api/v1.0/merchants/approved_merchants/')
    .then((response) => {
      
    })
    .catch(error => console.log(error))
  }

    return (
    <Sidebar>
        <main className=" md:px-4 py-4">
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
              <div className="col-md-4 col-sm-12">
                <MerchantCard />
              </div>
              <div className="col-md-4">
                <MerchantCard />
              </div>
              <div className="col-md-4">
                <MerchantCard />
              </div>
            </div>
            <Footer />
          </div>
          
        </main>
    </Sidebar>
  )
}

export default Merchant
