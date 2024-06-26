import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from '../views/ProductDetails';
import NotFound from '../views/NotFound';
import {Overview} from "../views/Overview";
import {Header} from "../components/Header";
import UserProfile from "../views/UserProfile";
import ShoppingCart from "../views/ShoppingCart";
import About from "../views/About";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Overview /></Layout>} />
                <Route path="/product/:productId" element={<Layout><ProductDetails /></Layout>} />
                <Route path="/user" element={<Layout><UserProfile /></Layout>} />
                <Route path="/cart" element={<Layout><ShoppingCart /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
    </>
);

export default GlobalRouter;
