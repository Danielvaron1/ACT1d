import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
    const { items, removeItem, getTotal } = useCart();

    return (
        <div className="shopping-cart">
            <h2>Carrito de Compras</h2>
            {items.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <ul className="item-list">
                    {items.map((item, index) => (
                        <li key={index} className="item">
                            <img src={require(`../Imagenes/${item.url}`)} className="item-image" />
                            <div className="item-details">
                                <h3 className="item-name">{item.name}</h3>
                                <p className="item-price">${item.price}</p>
                                <button onClick={() => removeItem(index)} className="remove-button">Eliminar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <div className="total">
                <h3>Total: ${getTotal()}</h3>
            </div>
        </div>
    );
};

export default ShoppingCart;