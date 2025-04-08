import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
  return (
    <header>
      <div className="container">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src="https://kasootait.com/img/logo1.png" alt="" srcset="" height="auto" width="10%" />
              Kasoota It Solutions
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className='nav_link'>Home</Nav.Link>
                <Nav.Link href="#link" className='nav_link'>About</Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown" className='nav_link navdropdown'>
                 
                 <div>

                    <NavDropdown.Item href="#action/3.1" className='navbar_dropdown_item'>Web Development</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className='navbar_dropdown_item'>App Development</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className='navbar_dropdown_item'>Social Media Handling</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className='navbar_dropdown_item'>Graphics Designing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className='navbar_dropdown_item'>Content writing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className='navbar_dropdown_item'>Search Engine Optimization</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className='navbar_dropdown_item'>Influencer/Celebrity Marketing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className='navbar_dropdown_item'>Payment Gateway</NavDropdown.Item>
                    </div>
                </NavDropdown>
                <Nav.Link href="#projects" className='nav_link'>Projects</Nav.Link>
                <Nav.Link href="#faqs" className='nav_link'>FAQs</Nav.Link>
                <Nav.Link href="#contact" className='nav_link'>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;