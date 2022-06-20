
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Img2 from '../../Assets/marketplace2.jpg'
import Img3 from '../../Assets/marketplace3.jpg';
import Img4 from '../../Assets/img5.jpg'
import '../../styles/marketplace.css'
import { Link } from 'react-router-dom';

export default function MarketCard(props) {

    return (
        <Container fluid>
            <Row className="pl-0">
                <Col xs={12} md={6} lg={4}>
                    <Card className="shadow-md">
                        <div className="overflow">
                            <Card.Img variant='top' src={Img2} className="card-image" />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-gray-500">
                                Simple
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consequuntur?
                            </Card.Text>
                            <Button variant="danger">
                                <Link to="/checkout" className="text-white no-underline">
                                    Get Voucher
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <Card className="shadow-md">
                        <div className="overflow">
                            <Card.Img variant='top' src={Img3} className="card-image" />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-gray-500">
                                Simple
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consequuntur?
                            </Card.Text>
                            <Button variant="danger">
                                <Link to="/checkout" className="text-white no-underline">
                                    Get Voucher
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <Card className="shadow-md">
                        <div className="overflow">
                            <Card.Img variant='top' src={Img4} className="card-image" />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-gray-500">
                                Simple
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consequuntur?
                            </Card.Text>
                            <Button variant="danger">
                                <Link to="/checkout" className="text-white no-underline">
                                    Get Voucher
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="pt-4">
                <Col xs={12} md={6} lg={4}>
                    <Card className="shadow-md">
                        <div className="overflow">
                            <Card.Img variant='top' src={Img2} className="card-image" />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-gray-500">
                                Simple
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consequuntur?
                            </Card.Text>
                            <Button variant="danger">
                                <Link to="/checkout" className="text-white no-underline">
                                    Get Voucher
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <Card className="shadow-md">
                        <div className="overflow">
                            <Card.Img variant='top' src={Img3} className="card-image" />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-gray-500">
                                Simple
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consequuntur?
                            </Card.Text>
                            <Button variant="danger">
                                <Link to="/checkout" className="text-white no-underline">
                                    Get Voucher
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <Card className="shadow-md">
                        <div className="overflow">
                            <Card.Img variant='top' src={Img4} className="card-image" />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-gray-500">
                                Simple
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consequuntur?
                            </Card.Text>
                            <Button variant="danger">
                                <Link to="/checkout" className="text-white no-underline">
                                    Get Voucher
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
