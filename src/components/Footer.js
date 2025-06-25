import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaArrowUp
} from 'react-icons/fa';

function Footer() {
  return (
   <footer
  className="text-light pt-5 pb-4 position-relative"
  style={{
    backgroundColor: '#0a0f24',
  }}
> 

      <Container>
  <Row className="text-center text-md-start mb-4" style={{ paddingLeft: '50px' }}>
    <Col md={4} className="mb-4 text-center">
      <div>
        <FaMapMarkerAlt size={40} className="mb-2 text-white" />
        <h6 className="fw-bold text-white mt-2">WHERE TO FIND ME</h6>
        <p className="mb-1">Jain Deemed To Be University</p>
        <p className="mb-1">Kanakpura, Bangalore, Karnataka</p>
        <p>562112</p>
      </div>
    </Col>

    <Col md={4} className="mb-4 text-center">
      <div>
        <FaEnvelope size={40} className="mb-2 text-white" />
        <h6 className="fw-bold text-white mt-2">EMAIL ME AT</h6>
        <a href="mailto:akhileshreddy1246@gmail.com" className="text-white text-decoration-none">
        akhileshreddy1246@gmail.com
      </a>
      </div>
    </Col>

    <Col md={4} className="mb-4 text-center">
      <div>
        <FaPhone size={40} className="mb-2 text-white" />
        <h6 className="fw-bold text-white mt-2">CALL ME AT</h6>
        <a href="tel:+917760007395" className="text-white text-decoration-none">
        Phone Number: (+91) 7760007395
        </a>
      </div>
    </Col>
  </Row>


        <Row className="justify-content-center text-center mt-4">
  <Col md="auto">
    <p className="mb-1 small text-white-50">
      © {new Date().getFullYear()} Akhilesh Reddy. | Design by <strong className="text-white">Akhilesh</strong>
    </p>
    <div className="mt-2 fs-5">
      <a href="https://github.com/akhilesh-reddy2005" className="text-white me-3"><FaGithub /></a>
      <a href="https://x.com/LYRICSL51362915" className="text-white me-3"><FaTwitter /></a>
      <a href="https://linkedin.com/in/akhilesh-reddy-612580292" className="text-white me-3"><FaLinkedin /></a>
      <a href="https://www.instagram.com/akhilesh_reddy117?igsh=MTFveG9xYm95ODFzeg==" className="text-white"><FaInstagram /></a>
    </div>
  </Col>
</Row>

      </Container>

      {/* Scroll to top button */}
      <a
      href="#top"
      className="position-absolute end-0 bottom-0 bg-accent text-white p-3 text-decoration-none"
      style={{
        borderRadius: '4px 0 0 4px',
        fontWeight: 'bold'
      }}
      >
  <FaArrowUp />
</a>

    </footer>
  );
}

export default Footer;
