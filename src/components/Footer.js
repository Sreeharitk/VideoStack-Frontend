import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Container fluid className="ft1">
        <Row className="ft1-5">
          <Col lg={3} md={6} className="ft1-6">
            <div className="ft2">
              <div className="d-flex">
                <img
                  alt=""
                  src="https://i.postimg.cc/Tws6623W/playbutton.png"
                  width="20"
                  height="20"
                  className="d-inline-block align-top me-2"
                />{" "}
                <h6>
                  <span className="sp1">V</span>ideo{" "}
                  <span className="sp2">U</span>ploader
                </h6>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, blanditiis facere asperiores fugiat aliquam
                eveniet, culpa dolor, sint velit deleniti autem unde ea quos
                dolores qui modi necessitatibus amet cumque.
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} className="ft1-6">
            <div className="ft3">
              <h5>Links</h5>
              <Link to={"/"}>Landing Page</Link>
              <Link to={"/main"}>Home</Link>
              <Link to={"/history"}>Watch History</Link>
            </div>
          </Col>
          <Col lg={3} md={6} className="ft1-6">
            <div className="ft4">
              <h5>Guides</h5>
              <p>React</p>
              <p>React Bootstrap</p>
              <p>Routing</p>
            </div>
          </Col>
          <Col lg={3} md={6} className="ft1-6">
            <div className="ft5">
              <h5>Contact us</h5>
              <Form.Control type="email" placeholder="enter email" />
              <Button variant="primary" className="ft5-btn">
                Send
              </Button>{" "}
              <div className="ft6">
                <div>
                  <i
                    class="fa-brands fa-instagram fa-xl"
                    style={{ color: "#fafcff" }}
                  ></i>
                </div>
                <div>
                <i class="fa-brands fa-facebook fa-xl" style={{color: "#f4f7fa;"}}></i>
                </div>
                <div>
                <i class="fa-brands fa-twitter fa-xl" style={{color:"#e4e9f1"}}></i>
                </div>
                <div>
                <i class="fa-brands fa-square-github fa-xl" style={{color:"#ffffff"}}></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
