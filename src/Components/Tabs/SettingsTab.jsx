import { Container, Row, Tabs, Tab } from "react-bootstrap"
import GeneralTab from "./GeneralTab"
import TabPassword from "./TabPassword"
import './tab.css'


function SettingsTab() {
    return (
        <Container fluid className="w-full">
            <Row className="justify-content-center">
                <Tabs justify defaultActiveKey="tab-1"
                className="mb-1 p-0 text-gray-500">
                    <Tab eventKey="tab-1" title="General Settings">
                        <GeneralTab />
                    </Tab>
                    <Tab eventKey="tab-2" title="Security">
                        <TabPassword />
                    </Tab>
                    <Tab eventKey="tab-3" title="Profile">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aspernatur!
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    )
}

export default SettingsTab