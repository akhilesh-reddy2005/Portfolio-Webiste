import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-white fs-4">
          Akhilesh Reddy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            {['/', '/about', '/projects', '/Journey', '/contact'].map((path, idx) => {
              const labels = ['Home', 'About', 'Projects', 'Journey', 'Contact'];
              return (
                <Nav.Link
                  key={path}
                  as={NavLink}
                  to={path}
                  className={({ isActive }) =>
                    `mx-2 px-3 py-2 rounded nav-link-custom ${isActive ? 'active-link' : ''}`
                  }
                >
                  {labels[idx]}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>{`
        .nav-link-custom {
          color: #bbb;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .nav-link-custom:hover {
          color: white;
          background-color: #1c1c2b;
        }
        .active-link {
          color: white !important;
          border-bottom: 2px solid #0dcaf0;
        }
      `}</style>
    </Navbar>
  );
}

export default NavigationBar;
