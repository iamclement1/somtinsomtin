import { Container, Row, Tabs, Tab } from "react-bootstrap"
import GeneralTab from "./GeneralTab"


function SettingsTab() {
    return (
        <Container fluid className="w-full">
            <Row className="justify-content-center">
                <Tabs justify defaultActiveKey="tab-1"
                className="mb-1 p-0 w-full">
                    <Tab eventKey="tab-1" title="General Settings">
                        <GeneralTab />
                    </Tab>
                    <Tab eventKey="tab-2" title="Security">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, qui!
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