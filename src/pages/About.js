import React from 'react';
import profileImg from '../assets/profile2.jpg';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaDatabase,
  FaPython,
  FaGoogle
} from 'react-icons/fa';

function About() {
  return (
    <section
      style={{
        backgroundColor: '#0a0f24',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
        padding: '80px 0'
      }}
    >
      <Container>

        {/* Image + About Me Header Row */}
        <Row className="mb-5 align-items-center">
  {/* Profile image on the left */}
  <Col xs={12} md={2} className="text-center text-md-start mb-4 mb-md-0">
    <motion.img
      src={profileImg}
      alt="Akhilesh Reddy"
      style={{
        width: '200px',
        height: '200px',
        borderRadius: '20px',
        objectFit: 'cover',
        border: '3px solid #198754',
        backgroundColor: '#fff'
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  </Col>

  {/* About Me text in center (full vertical center) */}
  <Col xs={12} md={10} className="text-center d-flex flex-column justify-content-center">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="fw-bold display-4">About Me</h2>
      <p className="text-light fs-5">
        Get to know my background, skills, and vision.
      </p>
    </motion.div>
  </Col>
</Row>



        {/* Main content */}
        <Row className="align-items-center g-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                I’m a <strong>B.Tech Computer Science</strong> student at <strong>Jain Deemed-to-be University</strong>,
                passionate about developing scalable apps, elegant UI/UX, and modern web systems.
              </p>
              <p>
                My stack includes <strong>HTML, CSS, JavaScript, PHP, SQL, Python</strong> and I deploy intelligent systems with <strong>Google Cloud</strong> tools.
              </p>
              <p>
                I create clean, performant solutions built to scale — crafted for users, backed by innovation.
              </p>

              <h5 className="fw-bold text-white mt-4">Education</h5>
              <ul>
                <li>2023–2027 – B.Tech, CSE @ Jain University, Bangalore</li>
                <li>2021–2023 – Vidya Jyothi PU College, Kolar</li>
                <li>2011–2021 – Kendriya Vidyalaya, BEML Nagar</li>
              </ul>

              <h5 className="fw-bold text-white mt-4">Technologies</h5>
              <div className="d-flex flex-wrap gap-3">
                {[FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaPython, FaDatabase, FaGoogle].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white text-dark px-3 py-2 rounded d-flex align-items-center gap-2 shadow-sm"
                  >
                    <Icon size={20} /> {Icon.displayName || Icon.name.replace('Fa', '')}
                  </motion.div>
                ))}
              </div>

              <h5 className="fw-bold text-white mt-4">Achievements & Certifications</h5>
              <ul>
                <li>Top 10 Finalist – Hack4Change Hackathon</li>
                <li>Google Cloud Study Jams Graduate</li>
                <li>Generative AI Certification – Google</li>
              </ul>

              <h5 className="fw-bold text-white mt-4">Languages</h5>
              <ul>
                <li>English – Fluent</li>
                <li>Hindi – Fluent</li>
                <li>Telugu – Native</li>
                <li>Kannada – Proficient</li>
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
