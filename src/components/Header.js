import React, {useEffect, useState} from 'react';
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
import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Blog from "../pages/Blog";
import {Modal} from "react-bootstrap";

export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не може бути порожнім');
    const [passwordError, setPasswordError] = useState('Пароль не може бути порожнім');
    const [formValid, setFormValid] = useState(false);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))) {
            let errorMessage = !e.target.value ? 'Email не може бути порожнім' : 'Некоректний email';
            setEmailError(errorMessage);
        } else {
            setEmailError('');
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            let errorMessage = !e.target.value ? 'Пароль не може бути порожнім' : 'Пароль повинен мати не менше 3 і не більше 8 символів';
            setPasswordError(errorMessage);
        } else {
            setPasswordError('');
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    };

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);


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
                            <Button className="ms-2" onClick={handleShow}>Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
                            <Form.Control onChange={e => emailHandler(e)} name="email" value={email}
                                          onBlur={e => blurHandler(e)} type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            {(passwordError && passwordDirty) && <div style={{color: "red"}}>{passwordError}</div>}
                            <Form.Control onChange={e => passwordHandler(e)} name="password" value={password}
                                          onBlur={e => blurHandler(e)} type="password" placeholder="Enter password">
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>

                        <Button disabled={!formValid} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
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
