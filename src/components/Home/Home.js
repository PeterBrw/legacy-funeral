import React from "react";
import ControlledCarousel from "../ControlledCarousel/ControlledCarousel";
import Footer from "../Footer/Footer";
import { Container, Card, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <ControlledCarousel />
      <Container style={{ backgroundColor: "#71ABD5" }} fluid>
        <Card
          className="text-center border-0"
          style={{ backgroundColor: "#71ABD5" }}
        >
          <Card.Body className="text-center fs-1" style={{ color: "#fff" }}>
            Chandler Chapel 480-963-6200 – Mesa Chapel 480-833-1716
          </Card.Body>
        </Card>
      </Container>
      <Container>
        <Row style={{ height: 50 }}></Row>
        <Row>
          <Col
            className="d-flex justify-content-center align-items-center flex-column"
            md={6}
          >
            <h6 style={{ fontFamily: "Roboto Slab", fontSize: 32 }}>
              Bun venit la
            </h6>
            <h6 style={{ fontFamily: "Roboto Slab", fontSize: 32 }}>
              serviciile funerare
            </h6>
            <h6
              style={{
                fontFamily: "Roboto Slab",
                fontSize: 32,
                color: "#71ABD5",
              }}
            >
              Legacy
            </h6>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center flex-column"
            md={6}
          >
            <Card style={{ width: "18rem" }} className="card border-0">
              <Card.Body>
                <Card.Text className="mt-5">
                  Funeraliile sunt cu adevărat despre viață... La Legacy, ne
                  ocupăm de tot ce aveți nevoie pentru a sărbători o viață bine
                  trăită. Funeraliile nu înseamnă doar să ne luăm la revedere,
                  ci amintim o viață în întregime. Este una dintre puținele
                  momente în care o persoană este recunoscută pentru tot ceea ce
                  a făcut în această lume. Când alegeți Legacy, vă vom ajuta să
                  creați o sărbătoare la fel de minunată ca viața onorată. Vom
                  avea grijă de fiecare ultim detaliu, făcând procesul cât mai
                  ușor posibil. Deci, vă puteți concentra asupra persoanei
                  uimitoare care este comemorată. Pentru că fiecare persoană
                  părăsește o moștenire.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ height: 50 }}></Row>
      </Container>
      <Container className="text-center">
        <Row>
          <Col className="col-2">
            <hr />
          </Col>
          <Col className="col-8">
            <h1 style={{ fontFamily: "Roboto Slab", fontSize: 36 }}>
              Câteva cuvinte despre serviciile noastre
            </h1>
          </Col>
          <Col className="col-2">
            <hr />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 mb-5">
        <Row>
          <Col  md={6}>
            <Card style={{ backgroundColor: "#FFFFFF" }}>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/Test-Mature-Man-400x400.jpg"}
                style={{ "borderRadius": "50%" }}
              />
              <Card.Body>
                <Card.Text>
                  Chiar nu știu ce să spun... când tata a trecut atât de brusc,
                  familia noastră a fost complet oarbă până la punctul în care a
                  fost greu să gândim corect. Gândul de a-și planifica
                  înmormântarea nici măcar nu s-ar înregistra în creierul meu.
                  Întreaga dvs. echipă a făcut mult mai ușor să gestionați
                  întregul proces. Am vrut doar să vă anunț cât de mult apreciem
                  felul în care ne-ați ajutat în ultimele câteva săptămâni.
                  Multumesc mult. Viorel
                </Card.Text>
                <Card.Text className="text-center">Vioarel</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/Test-Mature-Blonde-400x400.jpg"}
                style={{ "borderRadius": "50%" }}
              />
              <Card.Body>
                <Card.Text>
                  Am vrut doar să vă mulțumim și să vă anunțăm cât de mult am
                  apreciat tot ajutorul suplimentar pe care l-ați putut oferi
                  familiei noastre. Aranjamentele pentru morminte erau din ce în
                  ce mai greu de gestionat și ne-ați ajutat să putem petrece
                  împreună săptămâna înmormântării mamei. A fost un moment
                  minunat pentru a începe procesul de vindecare pentru familia
                  noastră. Cu siguranță ne vom trimite prietenii la Legacy.
                </Card.Text>
                <Card.Text className="text-center">Mariana</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <h6
          style={{
            fontFamily: "Roboto Slab",
            fontSize: 24,
            color: "#71ABD5",
          }}
          className="text-center"
        >
          SUNTEM AICI SĂ VĂ AJUTĂM
        </h6>
      </Container>
      <Container className="mt-5 mb-5">
        <Row>
          <Col className="col-2"></Col>
          <Col>
            <p>
              Personalul nostru prietenos este disponibil să vă servească 24-7.
              Legacy are două locații convenabile din East Valley, pentru a vă
              ușura dvs. și familia. Indiferent dacă nevoile dvs. sunt imediate
              sau intenționați pentru viitoare nevoi funerare, trebuie doar să
              ne sunați. Capela Chandler: 480-963-6200 - Capela Mesa:
              480-833-1716
            </p>
          </Col>
          <Col className="col-2"></Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default Home;
