import React from "react";
import Footer from "../Footer/Footer";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const Locations = () => {
  return (
    <div>
      <Container
        style={{ backgroundColor: "#F6F5F2", height: 340 }}
        className="d-flex justify-content-center align-items-center flex-column"
        fluid
      >
        <h1 style={{ fontFamily: "Roboto", fontSize: 42, color: "#555555" }}>
          Locații
        </h1>
      </Container>
      <Container className="mt-5 mb-5">
        <h1
          style={{ fontFamily: "Roboto Slab", fontSize: 30, color: "#555555" }}
        >
          Legacy Funeral Home – Chandler
        </h1>
      </Container>
      <Container>
        <Row className="mb-5">
          <Col className="d-flex justify-content-center">
            <Image
              src={process.env.PUBLIC_URL + "/sofa.jpg"}
              width="240"
              height="240"
              rounded
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <Image
              src={process.env.PUBLIC_URL + "/chairs.jpg"}
              width="240"
              height="240"
              rounded
            />
          </Col>
          <Col style={{ fontFamily: "Roboto Slab", color: "#555555" }}>
            <p>
              <b>Legacy Funeral Home – Chandler</b>
              <br />
              1374 N Arizona Avenue <br />
              Chandler, AZ 85225
            </p>
            <p>
              <b>Email:</b> info@azlegacyfuneralhome.com
              <br />
              <b>Website:</b> https://www.azlegacyfuneralhome.com
              <br />
              <b>Driving Directions: :</b>{" "}
              <span style={{ color: "#71ABD5" }}>Click Here</span>
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 mb-5">
        <h1
          style={{ fontFamily: "Roboto Slab", fontSize: 30, color: "#555555" }}
        >
          Legacy Funeral Home – Rose Chapel
        </h1>
      </Container>
      <Container>
        <Row className="mb-5">
        <Col className="d-flex justify-content-center">
            <Image
              src={process.env.PUBLIC_URL + "/coridor.png"}
              width="240"
              height="240"
              rounded
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <Image
              src={process.env.PUBLIC_URL + "/hall.jpg"}
              width="240"
              height="240"
              rounded
            />
          </Col>
          <Col style={{ fontFamily: "Roboto Slab", color: "#555555" }}>
            <p>
              <b>Legacy Funeral Home – Rose Chapel</b>
              <br />
              1130 S. Horne St. <br />
              Mesa, AZ 85204
            </p>
            <p>
              <b>Email:</b> nfo@azlegacyfuneralhome.com
              <br />
              <b>Website:</b> https://www.azlegacyfuneralhome.com
              <br />
              <b>Driving Directions: :</b>{" "}
              <span style={{ color: "#71ABD5" }}>Click Here</span>
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Locations;
