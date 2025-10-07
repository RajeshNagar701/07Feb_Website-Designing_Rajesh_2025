/*
https://react-bootstrap.netlify.app/


The best way to consume React-Bootstrap is via the npm package which you can
 install with npm (or yarn if you prefer).

   npm install react-bootstrap bootstrap


    import Button from 'react-bootstrap/Button';

    // or less ideally
    import { Button } from 'react-bootstrap';


    Why React-Bootstrap?

    React-Bootstrap is a complete re-implementation of the Bootstrap components using React.
    It has no dependency on either bootstrap.js or jQuery. If you have React setup and 
    React-Bootstrap installed, you have everything you need.

 */


import React from 'react'

import Button from 'react-bootstrap/Button';


import {
    Table, Alert, Accordion, Badge, Breadcrumb, ButtonGroup, Card, Carousel
    , Dropdown, Figure, ListGroup, Modal, Navbar, Nav, Container, NavDropdown,
    Form, FormControl, Row, Col
} from 'react-bootstrap';

function React_bootstrap() {
    return (
        <div className='container mt-5'>

            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
            <hr />
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-secondary">Secondary</Button>
            <Button variant="outline-success">Success</Button>
            <Button variant="outline-warning">Warning</Button>
            <Button variant="outline-danger">Danger</Button>
            <Button variant="outline-info">Info</Button>
            <Button variant="outline-light">Light</Button>
            <Button variant="outline-dark">Dark</Button>
            <hr />

            {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
            ].map((arg) => (
                <Alert key={arg} variant={arg}>
                    This is a {arg} alert—check it out!
                </Alert>
            ))}

            <hr />

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <hr />

            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>

    )
}

export default React_bootstrap