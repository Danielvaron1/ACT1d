import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    const removeItem = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    const getTotal = () => {
        return items.reduce((total, item) => total + item.price, 0);
    };

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};