import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useCart} from "../context/CartContext";

export const Product = ({ id, url, name, desc, price, prod }) => {
    const { addItem } = useCart();
    return (
            <Card className="card">
                <div className="img-card">
                    <Card.Img className="img-card" src={require(`../Imagenes/${url}`)}/>
                </div>
                <Card.Body>
                    <Card.Title className="center-text">{name}</Card.Title>
                    <Card.Text className="center-text">
                        {desc}
                    </Card.Text>
                    <Card.Text className="center-text">
                        $ {price} COP
                    </Card.Text>
                    <div className="card-button d-grid gap-2 d-md-flex justify-content-md-center">
                        <Button onClick={() => addItem(prod)} variant="dark">
                            Añadir al carrito
                        </Button>
                        <Button variant="dark"><Link className="card-button col-md-2" to={`/product/${id}`}>
                            Ver detalles
                        </Link></Button>
                    </div>
                </Card.Body>
            </Card>


    );
}