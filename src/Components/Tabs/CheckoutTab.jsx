import React from 'react'
import { Container, Row, Tab, Tabs } from 'react-bootstrap'
import Billing from '../../Pages/Checkout/Billing'

function CheckoutTab() {
    return (
        <Container fluid className="w-full">
            <Row className="justify-content-center">
                <Tabs justify defaultActiveKey="tab-1"
                className="mb-1 p-0 text-gray-500">
                    <Tab eventKey="tab-1" title="Get Voucher for self">
                        for self
                    </Tab>
                    <Tab eventKey="tab-2" title="Get Voucher for others">
                        <Billing />
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    )
}

export default CheckoutTab
