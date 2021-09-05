import React from 'react'
import Footer from '../Footer/Footer'
import { Col, Container, Image, Row } from 'react-bootstrap'
const Obituaries = () => {
	return (
		<div>
			<Container
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL + '/obiatures.jpg'})`,
					height: 340,
					backgroundSize: 'cover',
				}}
				className="d-flex justify-content-center align-items-center flex-column"
				fluid
			>
				<h1 style={{ fontFamily: 'Roboto', fontSize: 42, color: '#fff' }}>Necrologii</h1>
			</Container>
			<Container>
				<Row>
					<Col>
						<Image
							src={process.env.PUBLIC_URL + '/11.jpeg'}
							width={300}
							className="mt-5"
						/>
						<p className="mt-3">Brian Keith Herring</p>
					</Col>
					<Col className="mt-5 mb-5">
						<p>
							Născut la 1 noiembrie 1969, în Charlottesville, Virginia, era fiul lui
							Mason și Pauline Herring. Pe lângă părinții săi, el a fost precedat de
							moarte de un frate, Robert Wayne Sprouse.
						</p>
						<p>
							Brian a avut o pasiune pentru muzica, în special Bluegrass. El a cântat
							mai întâi la chitară, dar și-a găsit chemarea de a fi alături de
							mandolină, pe care a cântat-o ​​foarte bine și a fost cunoscută mai ales
							pe scenă. Îi plăcea să se joace până noaptea cu frații săi, Jeff și
							David, împreună cu doi prieteni apropiați la care se gândea ca frați,
							Stacy și Scott. Jay și Cheryl erau, de asemenea, prieteni apropiați.
						</p>
						<p>
							Lui Brian îi plăceau zilele de vară pe lac sau pe râu, cu barca sa cu
							ponton, luând soarele și pescuit cu ginerele său, Devin.
						</p>
						<p>
							El este supraviețuit de soția sa de 25 de ani, Renee, din județul
							Greene, și de copiii pe care i-au împărtășit împreună, Tiffany și soțul,
							Devin, Jonathan și altul semnificativ Taylor, și Casey și altul
							semnificativ Lewis; socrii, Bobby și Shirley din județul Louisa; și
							mândria și bucuriile sale, care l-au numit „Paw Paw”, Caelan, William,
							Parker și Charlotte, pe care i-a iubit mai mult decât orice. El este
							supraviețuit și de șase frați și cinci surori.
						</p>
						<p>
							Familia trimite un mulțumire specială Centrului de cancer Sentara Martha
							Jefferson și Legacy Hospice din Charlottesville pentru îngrijirea lor
							extraordinară, inclusiv Dr. Romano, Bridgett și Jaleesa.
						</p>
						<p>O sărbătoare a vieții sale va avea loc mai târziu.</p>
						<p>Condoleanțele pot fi trimise familiei la www.hillandwood.com.</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<Image
							src={process.env.PUBLIC_URL + '/12.jpeg'}
							width={300}
							className="mt-5"
						/>
						<p className="mt-3">James Newman Pounds</p>
					</Col>
					<Col className="mt-5 mb-5">
						<p>
							James Newman Pounds, în vârstă de 78 de ani, din Taneytown, Maryland, a
							murit vineri, 4 decembrie 2020, acasă, înconjurat de soția și familia sa
							iubitoare.
						</p>
						<p>
							Născut la 8 februarie 1942 în Baltimore, Maryland, a fost fiul
							regretatului Newman C. și Charlotte A. (Scott) Pounds. A fost soțul
							iubitor și devotat al Melody Ann (Branch) Pounds.
						</p>
						<p>
							Jim a absolvit liceul Catonsville. După ce a lucrat în mai multe posturi
							de la BG&E, manager de băcănie și șofer de camion; Jim a devenit un
							proprietar și operator de succes al propriei sale companii de
							întreținere a solului din zona Howard County și Carroll County. I-a
							plăcut prelucrarea lemnului, participarea la spectacole auto și
							vizionarea NASCAR. Îi plăcea să călărească cu motocicleta, alături de
							privirea cerbilor și a păsărilor din curtea sa alături de soția sa și
							câinele lor de companie „Katie”. Lui Jim îi va fi dor de toți cei care
							l-au cunoscut și iubit.
						</p>
						<p>
							Pe lângă soția sa Melody, supraviețuiesc și fiul său, James "Scott"
							Pounds of Arbutus; fiica, Kathy Edwards și soțul Bernie din Dundalk,
							fiice vitrege, Pamela Naab și soțul Geoff Sanzenbacher din Mass. și
							Jamie Naab și logodnicul Jonathan Spennato din NC; mai mulți nepoți și
							stră-nepoți. A fost predecedat de o nora, Cindy Pounds.
						</p>
						<p>
							În conformitate cu dorințele lui Jim, nu vor exista nicio vizită sau
							servicii în acest moment.
						</p>
						<p>
							Aanjamentele au fost încredințate Funerariei Myers-Durboraw, din
							Taneytown, MD.
						</p>
					</Col>
				</Row>
				<Row className={'mb-5'}>
					<Col className="mt-5 mb-5">
						<Image
							src={process.env.PUBLIC_URL + '/13.jpeg'}
							width={300}
							className="mt-5"
						/>
						<p className="mt-3">Brian Keith Herring</p>
					</Col>
					<Col className="mt-5">
						<p>Maureen Mahoney Morris</p>
						<p>26 noiembrie 2020</p>

						<p>
							Columbia, Carolina de Sud - Maureen Mahoney Morris a decedat pașnic
							acasă după o lungă boală. La ea au rămas soțul ei, James Morris, fiicele
							Erin Morris și Lily Freier, nepoții Marshall și Georgia Freier, frații
							Patrick și Michael Mahoney și sora Arleen Mahoney. Maureen a fost de
							sora ei de dinainte Kathleen și părinții lui George și Anna Mae Mahoney.
							S-a născut în Kansas City, MO. A absolvit Magna Cum Laude cu un BSN de
							la USC în 1993 și a fost RN la Baptist Hospital, Columbia, până la
							pensionare. Lumea a pierdut un suflet frumos. În loc de flori, prietenii
							sunt rugați să facă o donație către Planned Parenthood sau Harvest Hope
							Food Bank, organizațiile sale caritabile preferate. Mulțumim Spitalului
							Lutheran pentru că a oferit asistență și asistență de specialitate.
						</p>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	)
}

export default Obituaries
