import React from 'react'
import Footer from '../Footer/Footer'
import { Container, Row } from 'react-bootstrap'

const Services = () => {
	return (
		<div>
			<Container
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL + '/flori.png'})`,
					height: 340,
					backgroundSize: 'initial',
				}}
				className="d-flex justify-content-center align-items-center flex-column"
				fluid
			>
				<h1 style={{ fontFamily: 'Roboto', fontSize: 42, color: '#fff' }}>Trimite Flori</h1>
			</Container>
			<Container className="text-center mt-5 mb-5">
				<Row className="mb-5">
					<h1 style={{ fontFamily: 'Roboto', fontSize: 42, color: '#333333' }}>
						Iată câteva magazine de flori pe care le sugerăm...{' '}
					</h1>
				</Row>
				<Row className="mb-5">
					<h1 style={{ fontFamily: 'Roboto', fontSize: 30, color: '#333333' }}>
						Magnolia
					</h1>
					<a
						style={{
							fontFamily: 'Roboto',
							fontSize: 30,
							color: '#71ABD5',
							textDecoration: 'none',
						}}
						href="https://www.magnolia.ro/"
						target="_blank"
					>
						www.magnolia.ro
					</a>
				</Row>
				<Row className="mb-5">
					<a style={{ fontFamily: 'Roboto', fontSize: 30, color: '#333333' }}>
						Holland Flower{' '}
					</a>
					<a
						style={{
							fontFamily: 'Roboto',
							fontSize: 30,
							color: '#71ABD5',
							textDecoration: 'none',
						}}
						href="https://hollandflower.ro/"
						target="_blank"
					>
						www.hollandflower.ro{' '}
					</a>
				</Row>
				<Row className="mb-5">
					<h1 style={{ fontFamily: 'Roboto', fontSize: 30, color: '#333333' }}>
						Betty Flowers{' '}
					</h1>
					<a
						style={{
							fontFamily: 'Roboto',
							fontSize: 30,
							color: '#71ABD5',
							textDecoration: 'none',
						}}
						href="https://www.bettyflowers.ro"
						target="_blank"
					>
						www.bettyflowers.ro{' '}
					</a>
				</Row>
			</Container>
			<Footer />
		</div>
	)
}

export default Services
