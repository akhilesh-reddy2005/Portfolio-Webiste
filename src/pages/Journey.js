import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Journey.css';

const journeySteps = [
  {
    year: '2023–Present',
    title: 'B.Tech – Jain University',
    description:
      'Pursuing Computer Science Engineering at Jain University. Learning software engineering, cloud tools, and team projects.',
  },
  {
    year: '2021–2023',
    title: 'Vidya Jyothi PU College',
    description:
      'Completed Pre-University with Science stream. Scored 77.5% with strong focus on Mathematics and Physics.',
  },
  {
    year: '2011–2021',
    title: 'Kendriya Vidyalaya',
    description:
      'Studied across multiple KVs. Completed 10th board with 65%, building core academic and interpersonal skills.',
  },
  {
    year: '2024',
    title: 'Hack4Change Finalist',
    description:
      'Developed a farmers’ communication app using real-time chat, Dijkstra’s algorithm, and GIS-based route optimization.',
  },
  {
    year: '2024',
    title: 'Cloud Skills Boost Journey',
    description:
      'Learned Prompt Engineering, Vertex AI, GenAI with Gemini & Streamlit. Continuing Google Cloud certifications.',
  },
  {
    year: '2025',
    title: 'Shinex & Portfolio Websites',
    description:
      'Launched a responsive business site for Shinex Pvt. Ltd. and a personal portfolio with backend and auto-email features.',
  },
];

const techStack = [
  {
    tech: 'Python & SQL',
    detail:
      'I began my programming journey with Python, learning core concepts like variables, loops, conditionals, and functions. I built small scripts for automation and data processing. Alongside, I picked up SQL for data retrieval and manipulation using MySQL. This phase helped me understand the fundamentals of programming logic and how structured data is stored and queried efficiently.',
  },
  {
    tech: 'HTML & CSS',
    detail:
      'As I transitioned to web development, I explored HTML5 and CSS3. I learned to structure content semantically using HTML tags and style them using modern CSS properties like Flexbox, Grid, and media queries. I focused on building responsive designs, ensuring pages worked well across devices, and using tools like Chrome DevTools for layout debugging.',
  },
  {
    tech: 'PHP & MySQL',
    detail:
      ' To understand server-side development, I learned PHP to handle form submissions, sessions, and authentication systems. I connected PHP with MySQL to create dynamic websites, such as login/signup systems and admin dashboards. I also practiced building CRUD applications and learned about database security, SQL injection prevention, and data validation.',
  },
  {
    tech: 'JavaScript Basics',
    detail:
      'I started using JavaScript for interactivity — implementing DOM manipulation, form validation, toggling menus, and interactive animations. Understanding JS fundamentals like event handling, arrays, objects, and functions helped me enhance UX on static HTML pages.',
  },
  {
    tech: 'React.js',
    detail:
      'I advanced to React to build dynamic single-page applications. I learned about components, state, props, hooks, and lifecycle methods. I built modular, reusable UI components and used react-router-dom for routing. I also worked with state management tools like Context API and styled-components for scoped styling.',
  },
  {
    tech: 'MERN Stack (Ongoing)',
    detail:
      'I’m currently diving into the MERN stack: MongoDB, Express.js, React.js, and Node.js. I’m learning backend logic using Node.js and Express to create APIs and connect them with MongoDB databases. Im building full-stack apps with authentication, route protection, and real-time features, aiming to deploy them with cloud integration.',
  },
  {
    tech: 'Git & GitHub',
    detail:
      'I version-control all my projects with Git. I use GitHub to host repositories, collaborate with others, and manage issues and pull requests. It’s an essential tool in my workflow for project management and collaboration.',
  },
  {
    tech: 'Bootstrap & UI Libraries',
    detail:
      'For styling, I use Bootstrap 5 for grid layout, forms, buttons, and responsive design utilities. I’ve also experimented with react-bootstrap, framer-motion, and icons from libraries like react-icons to create polished, interactive UIs.',
  },
];

function Journey() {
  return (
    <>
      {/* === My Journey Section === */}
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
            <h2 className="fw-bold display-4">My Journey</h2>
            <p className="text-light fs-5">
              A timeline of academic growth, projects, and learning experiences
            </p>
          </motion.div>

          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h5 className="text-info">{step.year}</h5>
              <h4 className="fw-bold">{step.title}</h4>
              <p className="text-light">{step.description}</p>
            </motion.div>
          ))}
        </Container>
      </section>

      <section
  style={{
    backgroundColor: '#121c3d',
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    padding: '80px 0',
  }}
>
  <Container>
    <motion.div
      className="text-center mb-5"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="fw-bold display-4">Tech Stack Evolution</h2>
      <p className="text-light fs-5">
        My development journey from scripting to full-stack apps
      </p>
    </motion.div>

    <Row className="g-4">
      {techStack.map((item, index) => (
        <Col md={6} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#1c294f',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              height: '100%',
            }}
          >
            <h4 className="fw-bold text-white mb-3">{item.tech}</h4>
            <p className="text-light">{item.detail}</p>
          </motion.div>
        </Col>
      ))}
    </Row>
  </Container>
</section>
    </>
  );
}

export default Journey;
