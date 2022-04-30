import React, {Component} from 'react';
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button
} from "react-bootstrap";
import logo from '../logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Blog from "./Blog";

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img src={logo}
                                 height='30'
                                 width='30'
                                 className='d-inline-block align-top'
                                 alt='Logo'/>React Site
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link href='/about'>About us</Nav.Link>
                                <Nav.Link href='/contacts'>Contacts</Nav.Link>
                                <Nav.Link href='/blog'>Blog</Nav.Link>
                            </Nav>
                            <Form inline className='d-flex'>
                                <FormControl type='text' placeholder='Search' className='mr-sm-2'/>
                                <Button variant='outline-info'>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                    </Routes>
                </Router>
            </>
        );
    }
}
