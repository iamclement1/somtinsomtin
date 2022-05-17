import Sidebar from "../../Components/Sidebar/Sidebar"


function Marketplace() {
  return (
    <Sidebar>
        <div className="px-3 py-4">
            <h2>
                MarketPlace
            </h2>
            <div className="container-xxl">
              <div className="row">
                <div className="col-md-6">
                  <div className="card shadow-md border-none">
                    <img src="image.png" alt="" className="img-top" />
                    <div className="card-body">
                      <h4 className="card-title">
                        Pay Now
                      </h4>
                      <p className="card-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum veritatis est explicabo minima eos odio?
                      </p>
                      <button className="btn btn-primary">
                        Buy Now!
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
        </div>
    </Sidebar>
  )
}

export default Marketplace