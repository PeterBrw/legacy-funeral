import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container style={{"backgroundColor": "#F6F5F2"}}  fluid >
            <Row style={{"height": 50}}></Row>
            <Row >
                <Col className="d-flex justify-content-center align-items-center flex-column" md={6} >
                    <Card style={{ width: '18rem', "backgroundColor": "#F6F5F2" }} className="card border-0">
                        <Card.Body>
                            <Card.Title>Despre serviciile funerare Legacy</Card.Title>
                            <Card.Text className="mt-5">
                            Când este timpul să sărbătorim o viață bine trăită, Legacy și personalul lor grijuliu sunt aici pentru dvs. și pentru cei dragi. Suntem o gamă completă de servicii de înmormântare. Suntem sensibili la tradițiile religioase speciale în acest moment și suntem pregătiți să vă răspundem nevoilor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center align-items-center flex-column" md={6}>
                    <h6 style={{"fontFamily": "Roboto Slab", "fontSize": 24}}>Two East Valley Locations</h6>
                    <h6 style={{"fontFamily": "Roboto Slab", "fontSize": 20}} className="mt-5">Chandler Chapel</h6>
                    <p>374 N. Arizona Ave</p>
                    <p>Chandler, AZ 85225</p>
                    <p>480-963-6200</p>
                    <h6 style={{"fontFamily": "Roboto Slab", "fontSize": 20}}>Mesa Rose Chapel</h6>
                    <p>1130 S. Horne St.</p>
                    <p>Mesa, AZ 85204</p>
                    <p>480-833-1716</p>
                </Col>
            </Row>
            <Row style={{"height": 50}}></Row>
        </Container>
    )
}

export default Footer
