import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, } from 'react-bootstrap';


export default  () =>


<Navbar>
    <Navbar.Header>
        <Navbar.Brand>
            <a href="/home">React-Shop</a>
        </Navbar.Brand>
    </Navbar.Header>
    <Nav>
        <NavItem eventKey={1} href="/Products">
            Products
        </NavItem>
        <NavItem eventKey={2} href="/basket">
            Basket
        </NavItem>
    </Nav>
</Navbar>

