import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  return (
    <div className="navbar_con fixed-top">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#Home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link href="#Project">Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
