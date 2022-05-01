import React, {useEffect, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";

function Contacts() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [messageDirty, setMessageDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не може бути порожнім');
    const [messageError, setMessageError] = useState('Повідомлення не може бути порожнім');
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

    const messageHandler = (e) => {
        setMessage(e.target.value);
        if (e.target.value.length > 500) {
            setMessageError('Повідомлення має бути не більше 500 символів');
        } else if (!e.target.value) {
            setMessageError('Повідомлення не може бути порожнім');
        } else {
            setMessageError('');
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'message':
                setMessageDirty(true);
                break;
        }
    };

    useEffect(() => {
        if (emailError || messageError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, messageError]);

    return (
        <Container>
            <h2 className="mt-4">Contact us</h2>
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

                <Form.Group controlId="fromBasicMessage">
                    <Form.Label>Message</Form.Label>
                    {(messageError && messageDirty) && <div style={{color: "red"}}>{messageError}</div>}
                    <Form.Control onChange={e => messageHandler(e)} name="message" value={message}
                                  onBlur={e => blurHandler(e)} as="textarea" placeholder="Enter message" rows={5}>
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId="fromBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>

                <Button disabled={!formValid} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Contacts;
