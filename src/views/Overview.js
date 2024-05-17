import React, {useContext} from 'react';
import '../styles/styles.css';
import {Product} from "../components/Product";
import {AppContext} from "../context/AppContext";
import Spinner from 'react-bootstrap/Spinner';

export const Overview = () => {

    const { products } = useContext(AppContext);
    console.log(products);
    return (
        <div>
            <div className="product-container">

                {
                    products.length > 0 ? (
                        products.map((product, index) => (
                            <Product
                                key={index}
                                id={product.id}
                                url={product.url}
                                name={product.name}
                                desc={product.desc}
                                price={product.price}
                                prod={product}
                            />
                        ))
                    ) : (
                        <div className="spinner">
                            <Spinner  animation="grow" variant="dark" />
                        </div>
                    )
                }
            </div>
        </div>
    );

}