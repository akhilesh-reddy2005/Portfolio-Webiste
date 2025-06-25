import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section
      style={{
        backgroundColor: '#0a0f24',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
        padding: '80px 0',
      }}
    >
      <Container>
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fw-bold display-4">Contact Me</h2>
          <p className="text-light fs-5">I'd love to hear from you — let's connect!</p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
            <Form 
            action="https://formspree.io/f/xpwrojzv"
            method="POST"
            style={{ maxWidth: '600px', margin: '0 auto' }}
            >
            <Form.Group controlId="formName" className="mb-4">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Your Name" required />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Your Email" required />
            </Form.Group>

            <Form.Group controlId="formSubject" className="mb-4">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" name="subject" placeholder="Subject" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-4">
            <Form.Label>Message</Form.Label>
            <Form.Control
            as="textarea"
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            />
            </Form.Group>

            <div className="text-center">
            <Button variant="info" type="submit">
            Send Message
            </Button>
            </div>
            </Form>

        </motion.div>
      </Container>
    </section>
  );
}

export default Contact;
