import React from 'react'
import { Container, Navbar } from "react-bootstrap"
import "./header.css"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <Navbar className="n1">
        <Container className="c1">
          <Navbar.Brand href="#home" className="c2">
            <Link to={"/"}>
              <img
                alt=""
                src="https://i.postimg.cc/Tws6623W/playbutton.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{' '}
            </Link>
          </Navbar.Brand>
          <p><span className="sp1">V</span>ideo <span className="sp2">U</span>ploader</p>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header