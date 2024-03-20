import React from "react";
import SocialLinks from "./SocialLinks";
import { useAppContext } from "../appContext";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
// Icons
// Components
import { Container, Nav, Navbar } from "react-bootstrap";
// Images

// #region styled-components

const FixedNavSpacer = styled.div`
  height: var(--nav-height);
  max-height: 57px;
`;

// #endregion

// #region component

export default function NavBar() {
  const { isExpanded, closeExpanded, toggleExpanded } = useAppContext();
  const { pathname } = useLocation();
  const navLinks = {
    routes: [
      { id: "1R", name: "Home", route: "/" },
      { id: "2R", name: "All Projects", route: "/All-Projects" },
    ],
    to: [
      { id: "1T", name: "Home", to: "Home" },
      { id: "2T", name: "About Me", to: "About" },
      { id: "3T", name: "Skills", to: "Skills" },
      { id: "4T", name: "Projects", to: "Projects" },
      { id: "5T", name: "Contact", to: "Contact" },
    ],
  };

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        bg="light" // Utilisation du thème clair pour le fond
        variant="light" // Utilisation du thème clair pour les couleurs
        fixed="top"
      >
        <Container>
          <div className="d-block align-items-center">
            <SocialLinks />
          </div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              navbarScroll
              className="me-auto"
            >
              {pathname === "/"
                ? navLinks.to.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <ScrollLink
                          to={el.to}
                          spy={true}
                          activeClass="active"
                          className="nav-link"
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </ScrollLink>
                      </Nav.Item>
                    );
                  })
                : navLinks.routes.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <Link
                          to={el.route}
                          className={
                            pathname === el.route
                              ? "nav-link active"
                              : "nav-link"
                          }
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </Link>
                      </Nav.Item>
                    );
                  })}
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

// #endregion
