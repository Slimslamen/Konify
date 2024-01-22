import React from 'react';
import { ProductContext } from './ProductContext';
import { useContext } from 'react';

const AddtocartButton = ({ product }) => {
    const { addToCart } = useContext(ProductContext);

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <button onClick={handleAddToCart}>
            Add to Cart
        </button>
    );
};

export default AddtocartButton;
