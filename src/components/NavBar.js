import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/phomtu.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/giticon.png';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        if (isEnlarged) {
          setIsEnlarged(false); // Reset the enlargement state on scroll
        }
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (logoRef.current && !logoRef.current.contains(event.target)) {
        setIsEnlarged(false); // Reset the enlargement state on outside click
      }
    };

    window.addEventListener("scroll", onScroll);
    document.addEventListener('mousedown', handleClickOutside); // Handle click outside

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEnlarged]);

  const handleIconClick = (event) => {
    event.stopPropagation();
    setIsEnlarged(true); // Enlarge the icon on click
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img 
            src={logo} 
            alt="Logo" 
            onClick={handleIconClick} 
            className={`logo-icon ${isEnlarged ? 'enlarged' : ''}`} 
            ref={logoRef}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#home" 
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#skills" 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              href="#projects" 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              href="#achievements" 
              className={activeLink === 'achievements' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('achievements')}
            >
              Achievements
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/debasmita-adak-5a1172285" target="_blank"><img src={navIcon1} alt="" /></a>
              
              <a href="https://www.instagram.com/debasmitaadak15?igsh=MXMxeW1zZDNidmthaQ==" target="_blank"><img src={navIcon3} alt="" /></a>
              <a href="https://github.com/deba1504" target="_blank"><img src={navIcon2} alt="" style={{ width: '80%',height:'80%' }}/></a>
            </div>
            <Nav.Link 
              href="#connect" 
              className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('connect')}
            ><button className="vvd"><span>Let’s Connect</span></button></Nav.Link>
            
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
