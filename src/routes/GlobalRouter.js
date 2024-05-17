import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from '../views/ProductDetails';
import NotFound from '../views/NotFound';
import {Overview} from "../views/Overview";
import {Header} from "../components/Header";
import UserProfile from "../components/UserProfile";
import ShoppingCart from "../components/ShoppingCart";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Overview /></Layout>} />
                <Route path="/product/:productId" element={<Layout><ProductDetails /></Layout>} />
                <Route path="/user" element={<Layout><UserProfile /></Layout>} />
                <Route path="/cart" element={<Layout><ShoppingCart /></Layout>} />
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
