
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Img1 from '../../Assets/marketplace4.jpg'
import Img2 from '../../Assets/marketplace2.jpg'
import Img3 from '../../Assets/marketplace3.jpg';
import Img4 from '../../Assets/img5.jpg'
import '../../styles/marketplace.css'

export default function MarketCard( props   ) {

    return (
    <Container fluid>
        <Row>
            <Col xs={12} md={6} lg={3}>
                <Card className="shadow-md">
                    <div className="overflow">
                        <Card.Img variant='top' src={ Img1 } className="card-image" />
                    </div>
                    <Card.Body>
                        <Card.Title className="text-gray-500">
                            Simple
                        </Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consequuntur?
                        </Card.Text>
                        <Button variant="danger">
                            Get Voucher
                        </Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={12} md={6} lg={3}>
                <Card className="shadow-md">
                    <div className="overflow">
                        <Card.Img variant='top' src={ Img2 } className="card-image" />
                    </div>
                    <Card.Body>
                        <Card.Title className="text-gray-500">
                            Simple
                        </Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consequuntur?
                        </Card.Text>
                        <Button variant="danger">
                            Get Voucher
                        </Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={12} md={6} lg={3}>
                <Card className="shadow-md">
                    <div className="overflow">
                        <Card.Img variant='top' src={ Img3 } className="card-image" />
                    </div>
                    <Card.Body>
                        <Card.Title className="text-gray-500">
                            Simple
                        </Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consequuntur?
                        </Card.Text>
                        <Button variant="danger">
                            Get Voucher
                        </Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={12} md={6} lg={3}>
                <Card className="shadow-md">
                    <div className="overflow">
                        <Card.Img variant='top' src={ Img4 } className="card-image" />
                    </div>
                    <Card.Body>
                        <Card.Title className="text-gray-500">
                            Simple
                        </Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consequuntur?
                        </Card.Text>
                        <Button variant="danger">
                            Get Voucher
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}
