import Footer from '../../Components/Footer/Footer'
import Sidebar from '../../Components/Sidebar/Sidebar'

function DepVoucher() {
  return (
    <Sidebar>
        <main className="md:px-5 py-3">
          <div className="containter-full">
            <div className="row">
              <div className="col-md-12">
                <span className="text-xl text-[#E00]"> GHS 0.00</span>
                <p className="text-xm text-gray-500"> Total Voucher Value </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 bg-indigo-100 p-4 rounded-md shadow-md">
                <p className="text-[#362F62] text-xm py-2">
                😔
                  <span className='font-bold'> Sorry! </span>  We couldn't find any vouchers to show.
                </p>
              </div>
            </div>
            <Footer />
          </div>
        </main>
    </Sidebar>
  )
}

export default DepVoucher
