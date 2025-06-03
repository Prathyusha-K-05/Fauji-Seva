import React from 'react';
import { Navbar, Nav, Container, Carousel, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // 🔑 useNavigate to navigate programmatically
import './HomePage.css';
import pic1 from './assets/pic1.jfif';
import pic2 from './assets/pic2.jfif';
import pic3 from './assets/pic3.jfif';
import logo from './assets/logo.jpeg';

export default function HomePage() {
  const navigate = useNavigate(); // For button navigation

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" fixed="top">
        <Container>
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <Navbar.Brand as={Link} to="/">Welfare Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/aboutus">Aboutus</Nav.Link>
              <Nav.Link as={Link} to="/contactus">Contactus</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel */}
      <Carousel fade>
        <Carousel.Item>
          <img className="carousel-image" src={pic1} alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome to the Welfare Portal</h3>
            <p>Empowering our heroes with welfare and support</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={pic2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Join and Explore</h3>
            <p>Find schemes tailored for you</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={pic3} alt="Third slide" />
          <Carousel.Caption>
            <h3>One Stop for Welfare</h3>
            <p>Access schemes and services seamlessly</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Buttons below carousel */}
      <Container className="text-center my-4">
        <Row className="justify-content-center">
          <Col xs="auto">
            <Button
              variant="success"
              size="lg"
              className="me-3"
              onClick={() => navigate('/militarydashboard')}
            >
              Military Dashboard
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/admindashboard')}
            >
              Admin Dashboard
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
