import React, { createContext, useState, useContext } from 'react';
import {toast} from "react-toastify";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
        toast.success(`${item.name} ha sido añadido al carrito!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const removeItem = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
        toast.error(`El producto ha sido eliminado del carrito`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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