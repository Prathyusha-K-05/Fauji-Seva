import React from 'react';
import { Container } from 'react-bootstrap';
import "../index.css";

export default function AboutPage() {
  return (
    <Container className="py-4" style={{backgroundColor:'aqua'}}>
      <h1 align="center">About Us</h1>
      <Container>
        <div col='6'>
      <p align="center">We are dedicated to providing welfare schemes and services to our heroes in the military.<br></br>
        Our mission is to ensure that every eligible individual receives the support and resources they deserve.</p></div>
      </Container>
      
    </Container>
  );
}
