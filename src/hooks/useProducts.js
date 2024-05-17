import {useEffect, useState} from "react";

export const useProducts = () => {

    const [products, setProducts] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de ingredientes
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        fetch("data.json").then((res) => res.json()).then((res) => setProducts(res));
    }, []);

    return products;
}