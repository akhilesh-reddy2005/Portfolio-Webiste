import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaCloud, FaRocket } from 'react-icons/fa';

import resumeFile from '../assets/Resume Akhilesh Reddy.pdf';


function Home() {
  return (
    <section
      style={{
        backgroundColor: '#0a0f24',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
        minHeight: '100vh',
        padding: '80px 0'
      }}
    >
      <Container>
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="fw-bold display-3">Hi, I'm Akhilesh Reddy</h1>
          <p className="fs-5 text-secondary">
            A passionate Web Developer & Google Cloud Enthusiast.
            I specialize in building scalable, cloud-powered applications using modern web technologies.
          </p>
        </motion.div>

        <Row className="align-items-center g-5">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                I focus on writing clean, accessible code and crafting user-friendly designs.
                With strong skills in React, Bootstrap, and deployment on Google Cloud, I enjoy transforming ideas into efficient digital experiences.
              </p>
              <p>
                I'm enthusiastic about technology, constantly learning and staying updated with the latest industry trends. Whether it's frontend styling or backend logic, I believe in building with purpose and performance in mind.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2"><FaCode className="me-2 text-primary" /> Full-stack Web Development</li>
                <li className="mb-2"><FaCloud className="me-2 text-info" /> Google Cloud Projects & Deployments</li>
                <li className="mb-2"><FaRocket className="me-2 text-warning" /> Fast, Scalable, and Clean UI Design</li>
              </ul>
              <div className="mt-4">
                <Button variant="outline-light" className="me-3" href={resumeFile} download>
                  Download Resume
                </Button>
                <Button variant="outline-light" className="me-3" href="#projects">
                  View Projects
                </Button>
                <Button variant="outline-light" href="#contact">
                  Contact Me
                </Button>
              </div>
              <div className="mt-4">
                <a href="https://github.com/akhilesh-reddy2005" className="text-white me-3 fs-4">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/akhilesh-reddy-612580292/" className="text-white fs-4">
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </Col>

         
        </Row>
      </Container>
    </section>
  );
}

export default Home;