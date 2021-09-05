import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

import Home from './components/Home'
import Locations from './components/Locations/Locations'
import Team from './components/Team/Team'
import Obituaries from './components/Obituaries/Obituaries'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'

import { LinkContainer } from 'react-router-bootstrap'

export default function App() {
	return (
		<Router>
			<Navbar expand="lg" sticky="top" style={{ backgroundColor: '#fff' }}>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>
							<img
								src={process.env.PUBLIC_URL + '/Legacy-Web-Logo-3.png'}
								width="256"
								height="93"
							/>
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
						<Nav className="me-auto" className="justify-content-end">
							<LinkContainer to="/locations">
								<Nav.Link to="/locations">LOCATII</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/team">
								<Nav.Link>ECHIPA</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/obituaries">
								<Nav.Link>NECROLOGII</Nav.Link>
							</LinkContainer>
							<NavDropdown title="SERVICII" id="basic-nav-dropdown">
								<LinkContainer to="/services">
									<NavDropdown.Item>TRIMITE FLORI</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
							<LinkContainer to="/contact">
								<Nav.Link>Contact</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div>
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/locations">
						<Locations />
					</Route>
					<Route path="/team">
						<Team />
					</Route>
					<Route path="/obituaries">
						<Obituaries />
					</Route>
					<Route path="/services">
						<Services />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}
