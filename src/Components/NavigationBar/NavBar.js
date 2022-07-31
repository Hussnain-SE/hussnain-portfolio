import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

import './NavBar.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])


    const updateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                href="#home"
                                className=
                                {
                                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                                }
                                onClick={() => updateActiveLink("home")}>
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={
                                    activeLink === "skills" ? "active navbar-link" : "navbar-link"
                                }
                                onClick={() => updateActiveLink("skills")}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                className={
                                    activeLink === "projects" ? "active navbar-link" : "navbar-link"
                                }
                                onClick={() => updateActiveLink("projects")}
                            >
                                Projects
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/hussnain-ali-202738191/">
                                    <img src={navIcon1} alt="LinkedIn" />
                                </a>
                                <a href="https://www.instagram.com/mrzahussnain/?hl=en">
                                    <img src={navIcon3} alt="Instagram" />
                                </a>
                                <a href="https://www.facebook.com/hussnain.ali.52459615">
                                    <img src={navIcon2} alt="FaceBook" />
                                </a>
                            </div>
                            <HashLink to='#contact'>
                                <button className="vvd" onClick={() => console.log("connect")}>
                                    <span>Let's Connect</span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
