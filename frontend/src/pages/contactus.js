import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './contactus.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.formName || !formData.formEmail || !formData.formMessage) {
      setAlertVariant('danger');
      setAlertMessage('Please fill in all fields.');
      setShowAlert(true);
      return;
    }

    setAlertVariant('success');
    setAlertMessage('Thank you! Your message has been sent.');
    setShowAlert(true);

    // Clear the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page-bg">
    <Container className="py-4" style={{ maxWidth: '600px'}}>
      <h1>Contact Us</h1>

      {/* Alert */}
      {showAlert && (
        <Alert
          variant={alertVariant}
          onClose={() => setShowAlert(false)}
          dismissible
          className="mt-3"
        >
          {alertMessage}
        </Alert>
      )}

      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={formData.formName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={formData.formEmail}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your message..."
            value={formData.formMessage}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </div>
  );
}
