// ProductDetails.js
import React, { useContext } from 'react';
import {useParams} from 'react-router-dom';
import {AppContext} from '../context/AppContext';
import Button from "react-bootstrap/Button";
import {useCart} from "../context/CartContext";

const ProductDetails = () => {
    const { productId } = useParams();
    const { products } = useContext(AppContext);
    const { addItem } = useCart();
    const product = products.find(p => p.id === productId);
    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }

    console.log(product.name);

    return (
        <div className="product-details">
            <img src={require(`../Imagenes/${product.url}`)}/>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-cuisine">Descripción: {product.desc}</p>
            <p className="product-rating">Precio: $ {product.price} COP</p>
            <div className="card-button">
                <Button variant="dark" onClick={() => addItem(product)}>
                    Añadir al carrito
                </Button>
            </div>
        </div>
    );
}

export default ProductDetails;