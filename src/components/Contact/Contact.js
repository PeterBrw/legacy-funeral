import React from 'react'
import Footer from '../Footer/Footer'
import { Col, Container, Row, Form, Button, FormGroup } from 'react-bootstrap'

const Contact = () => {
	return (
		<div>
			<Container>
				<Row className="mt-5 mb-5">
					<h1 style={{ fontFamily: 'Roboto Slab', fontSize: 52, color: '#333333' }}>
						Contactează-ne
					</h1>
				</Row>
				<Row>
					<Col>
						<p style={{ fontFamily: 'Roboto Slab', fontSize: 22, color: '#525C65' }}>
							Ai o intrebare? Avem răspunsuri. Sunați-ne, trimiteți-ne un e-mail sau
							pur și simplu completați formularul de contact, iar directorii noștri cu
							experiență sau consilierii de familie vă vor contacta în curând. Dacă
							aveți nevoie de servicii imediate, vă rugăm să sunați la numărul nostru
							de telefon: 123-456-7890.
						</p>
					</Col>
					<Col></Col>
				</Row>
				<Row>
					<Col></Col>
					<Col>
						<Form className="mt-5 mb-5">
							<Form.Group className="mb-3">
								<Form.Label>Your Name (required)</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address (required)</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Your phone no.</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
								<Form.Label>Your Message</Form.Label>
								<Form.Control as="textarea" rows={3} />
							</Form.Group>
							<Button variant="primary" type="submit">
								Send Message
							</Button>
						</Form>
					</Col>
					<Col></Col>
				</Row>
			</Container>
			<Footer />
		</div>
	)
}

export default Contact
