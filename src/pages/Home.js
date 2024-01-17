import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="main">
        <Container fluid="lg" className="hc1">
          <Row style={{ borderBottom: "dotted 1px #fd6e00" }}>
            <Col lg={6}>
              <div className="home1">
                <h1>
                  <span className="sp1">V</span>ideo{" "}
                  <span className="sp2">U</span>ploader
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur, blanditiis facere asperiores fugiat aliquam
                  eveniet, culpa dolor, sint velit deleniti autem unde ea quos
                  dolores qui modi necessitatibus amet cumque.
                </p>
                <Link to={"./main"}>
                  <Button
                    type="button"
                    variant="outline-primary"
                    className="mb-5 h1-bt px-5"
                  >
                    Get Started
                    <i
                      className="fa-solid fa-play ms-2"
                      style={{ color: "#ffd200" }}
                    ></i>
                  </Button>{" "}
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="home2">
                <img
                  src="https://i.postimg.cc/Hkx7RNq8/play-button-animation-unscreen.gif"
                  alt=""
                  height="300px"
                />
              </div>
            </Col>
          </Row>
          <div className="home3 mt-5 text-center">
            <h1 className="mb-5">
              <span>Feat</span>ures
            </h1>
            <div className="home4">
              <Container>
                <Row className="home41" lg={3}>
                  <Col>
                    <Card style={{ maxWidth:"100%" }} className="homecrd">
                      <Card.Img variant="top" src="https://i.postimg.cc/CK8hj0Hy/play-button-unscreen.gif" height="300" width="300"/>
                      <Card.Body>
                        <Card.Title>Managing Videos</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ maxWidth:"100%" }} className="homecrd">
                      <Card.Img variant="top" src="https://i.postimg.cc/nzkK34VJ/catogrise.gif" height="300" width="300"/>
                      <Card.Body>
                        <Card.Title>Categorise Videos</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ maxWidth:"100%" }} className="homecrd">
                      <Card.Img variant="top" src="https://i.postimg.cc/ZYpJTSbg/watch-history.gif" height="300" width="300"/>
                      <Card.Body>
                        <Card.Title>Watch History</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
