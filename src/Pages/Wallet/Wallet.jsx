import { Col, Container, Row } from "react-bootstrap"
import Sidebar from "../../Components/Sidebar/Sidebar"


function Wallet() {

    return (
    <Sidebar>
        <div className="flex justify-between pt-4">
            <div></div>
            <div>
                <button className="bg-[#E4043C] text-sm text-white space-x-5
                    hover:bg-gradient hover:text-white p-2 mb-2 rounded-sm">
                        + Add Wallet
                </button>
            </div>
        </div>

        <section className=" md:p-4 p-1 bg-white
        rounded-sm shadow-md h-40">
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={6}
                    className="py-4">
                        <h1 className="text-xl">Transaction History</h1>
                        <span className="text-gray-400 text-xs">
                            All transactions on your wallet
                        </span>
                    </Col>
                    <Col xs={12} md={6} lg={6}
                    className="py-4">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odio optio tempore a, nam placeat atque. Perferendis qui distinctio earum?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, libero.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    </Sidebar>
  )
}

export default Wallet
