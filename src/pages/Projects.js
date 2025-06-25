import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Shortest Roadway for Power Restoration',
    description: `
      Designed an algorithm-based solution using Dijkstra’s Algorithm to restore electricity quickly after natural disasters.
      Integrated GIS mapping to locate the nearest substations and optimize routes.
      Developed a backend system for real-time data processing and visualization.
    `,
    link: 'https://github.com/akhilesh-reddy2005/Shortest-Roadway-for-Power-Restoration.git'
  },
  {
    title: 'Shinex Private Limited Portfolio Website',
    description: `
      Built a responsive company website with sections for services, CSR, and a dynamic contact page.
      Integrated backend for form handling, automated email responses, and data storage.
      Designed a CSR page to showcase social initiatives and optimized the site for SEO and cross-browser compatibility.
    `,

  }
];

function Projects() {
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
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fw-bold display-4">My Projects</h2>
          <p className="text-light fs-5">Real-world solutions I’ve built</p>
        </motion.div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} key={index}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-dark text-white shadow-sm h-100">
                  <Card.Body>
                    <Card.Title className="fw-bold">{project.title}</Card.Title>
                    <Card.Text style={{ whiteSpace: 'pre-line' }}>
                      {project.description}
                    </Card.Text>
                    {project.link !== '#' && (
                      <Button
                        variant="outline-info"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
