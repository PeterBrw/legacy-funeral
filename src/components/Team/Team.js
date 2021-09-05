import React from 'react'
import Footer from '../Footer/Footer'
import { Container, Card, Row, Col, Image } from 'react-bootstrap'

const Team = () => {
	return (
		<div>
			<Container
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL + '/team_censored.jpg'})`,
					height: 340,
				}}
				className="d-flex justify-content-center align-items-center flex-column"
				fluid
			>
				<h1 style={{ fontFamily: 'Roboto', fontSize: 42, color: '#fff' }}>
					Echipa noastră
				</h1>
			</Container>
			<Container>
				<Row>
					<Col mb={6}>
						<h6
							style={{ fontFamily: 'Roboto Slab', fontSize: 26, color: '#71ABD5' }}
							className="mt-5"
						>
							GATA ORICÂND PENTRU A AJUTA
						</h6>
						<h6
							style={{ fontFamily: 'Roboto Slab', fontSize: 26, color: '#333333' }}
							className="mt-5"
						>
							Promisiunea noastră
						</h6>
						<p style={{ color: '#525C65' }}>
							După ce am servit mii de familii din Absurdistan în 20 de ani lucrând în
							afacerea cu înmormântări, înțeleg că pierderea unei persoane dragi
							creează un timp stresant plin de emoții profunde. Și, pe lângă tot
							stresul, familia se confruntă acum cu o înmormântare de planificat. În
							acest moment critic, aveți nevoie de un partener de încredere,
							specializat în sărbătorirea vieții. Eliminăm stresul din fiecare etapă a
							procesului de aranjament funerar, astfel încât să vă puteți concentra
							asupra a ceea ce este cu adevărat important, amintindu-vă de moștenirea
							pe care persoana iubită a lăsat-o pentru dvs. Înțelegem importanța
							familiei și sperăm că veți considera familia Legacy ca parte a familiei
							dvs. în acest moment dificil.
						</p>
						<p style={{ color: '#525C65' }}> Joe Biden</p>
					</Col>
					<Col
						mb={6}
						className="d-flex justify-content-center align-content-center mt-5 mb-5"
					>
						<Image src={process.env.PUBLIC_URL + '/Biden.jpg'} />
					</Col>
				</Row>
			</Container>
			<Container style={{ backgroundColor: '#FFF6E9' }} fluid>
				<Row>
					<h1
						style={{ fontFamily: 'Roboto Slab', fontSize: 26, color: '#333333' }}
						className="text-center mt-5"
					>
						Membrii echipei
					</h1>
				</Row>
				<Row className="d-flex justify-content-center align-content-center mt-5 pb-5">
					<Col></Col>
					<Col>
						<Card>
							<div
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL + '/1.jpg'})`,
									height: 300,
									width: 250,
								}}
							></div>
							<Card.Body>
								<Card.Text>Veta Hoffman</Card.Text>
								<Card.Text style={{ color: '#71ABD5' }}>
									CONSILIER FAMILIAL
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col></Col>
					<Col></Col>
					<Col>
						<Card>
							<div
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL + '/3.jpg'})`,
									height: 300,
									width: 250,
								}}
							></div>
							<Card.Body>
								<Card.Text>Nicole Kidman</Card.Text>
								<Card.Text style={{ color: '#71ABD5' }}>ASISTENT MANAGER</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col></Col>
					<Col></Col>
					<Col>
						<Card>
							<div
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL + '/4.jpg'})`,
									height: 300,
									width: 250,
								}}
							></div>
							<Card.Body>
								<Card.Text>Leana Clinton</Card.Text>
								<Card.Text style={{ color: '#71ABD5' }}>ÎMBĂLSĂMĂTOR</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col></Col>
				</Row>
			</Container>
			<Footer />
		</div>
	)
}

export default Team
