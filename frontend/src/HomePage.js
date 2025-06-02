import React from 'react';
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';
import pic1 from './assets/pic1.jfif';
import pic2 from './assets/pic2.jfif';
import pic3 from './assets/pic3.jfif';

export default function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Welfare Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={pic1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to the Welfare Portal</h3>
            <p>Empowering our heroes with welfare and support</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-image"
            src={pic2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Join and Explore</h3>
            <p>Find schemes tailored for you</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-image"
            src={pic3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>One Stop for Welfare</h3>
            <p>Access schemes and services seamlessly</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
