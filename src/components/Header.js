import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="ls-header">
            <Navbar expand="lg" className="bg-dark header" >
                <Container fluid>
                    <Link to={`/`}>
                        <Navbar.Brand><img className="img-brand img-fluid" src={require("../Imagenes/brand.png")}/></Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link><Link className="nav-brand" to={`/`}>
                                <p className="nav-brand">Inicio</p>
                            </Link></Nav.Link>
                            <Nav.Link><Link className="nav-brand" to={`/`}>
                                <p className="nav-brand">Productos</p>
                            </Link></Nav.Link>
                        </Nav>
                        <Form className="me-auto d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 bg-light"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                        <Col xs={2} md={2}>
                            <Link to={"/user"}><Image className="img-icon" src={require("../Imagenes/images.png")} roundedCircle /></Link>
                            <Link to={"/cart"}><Image className="img-icon" src={require("../Imagenes/carrito.png")} /></Link>
                        </Col>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
