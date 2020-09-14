import React, { Component } from 'react';
import './index.css'
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom'



function Header ()
{
    return(
      <div> 
     

  <Navbar inverse fixedtop expand="lg" className="navbar-expand-lg navbar-light bg-light">
  <Navbar.Brand className="Brand" href="/">Film palats</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/">Om oss</Nav.Link>
      <Nav.Link eventKey={2} href="/">Kontakta</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<br/>

<nav className="nav2">
    <Link to="/">Filmer</Link>
    <Link to="/bio">På bio</Link>
    <Link to="/filmLista">Alla filmer</Link>
     <div className="line"></div>
    </nav> 

   


</div>
    );

}
export default Header


