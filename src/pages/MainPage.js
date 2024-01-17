import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Add from "../components/Add";
import Videos from "../components/Videos";
import Categories from "../components/Categories";
import "./mainpage.css";
import { Link } from "react-router-dom";

function MainPage() {
  const [addUpdate,setAddUpdate] = useState("")
  return (
    <div className="mp" style={{minHeight:"fit-content"}}>
      <Container className="mpm">
        <Row className="mp0">
          <Col>
            <div className="mp1">
              <h1 style={{paddingBottom:"20px"}}>
                <span>S</span>tart <span>U</span>ploading <span>V</span>ideos{" "}
                <span>F</span>or <span>F</span>ree
              </h1>
              <Link to={"/history"}>
                <i
                  class="fa-solid fa-clock fa-spin me-3"
                  style={{ color: "#fafcff" }}
                ></i>
                <span>View Wat</span>ch History
              </Link>
              <p className="mt-4" style={{paddingBottom:"20px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nostrum tempore non iste quibusdam vitae atque! Culpa ea
                delectus quis voluptates odio sequi iste rem molestiae,
                praesentium reiciendis optio tenetur!
              </p>
            </div>
          </Col>
          <Col>
            <div className="mp2">
              <img
                src="https://i.postimg.cc/LsfZW2gj/Red-play-Button-removebg-preview.png"
                alt=""
                height="200px"
                width="200px"
              />
            </div>
          </Col>
        </Row>
        <Row className="mp0-1" style={{paddingBottom:"40px",paddingTop:"40px"}}>
          <Col lg={8} className="mb-3">
              <div>
                <Add updateData = {setAddUpdate} />
              </div>
              <div>
                <Videos data = {addUpdate} />
              </div>
          </Col>
          <Col lg={4}>
            <div className="mp4">
              <Categories />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainPage;
