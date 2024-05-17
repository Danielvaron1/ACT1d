import {useEffect, useState} from "react";

export const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("data.json").then((res) => res.json()).then((res) => setProducts(res));
    }, []);

    return products;
}