import React from 'react';
import { ProductContext } from './ProductContext';
import { useContext } from 'react';

// Komponenten AddtocartButton används för en knapp som lägger till en produkt i varukorgen.

const AddtocartButton = ({ product }) => {
// Hämta addToCart- och setSelectedSize-funktionerna från ProductContext med useContext-hook.
    const { addToCart, setSelectedSize } = useContext(ProductContext);
// handleAddToCart-funktionen anropas när knappen klickas på.
// Den lägger till produkten i varukorgen genom addToCart-funktionen
// och nollställer den valda storleken med setSelectedSize-funktionen.
    const handleAddToCart = () => {
        addToCart(product);
        setSelectedSize("")
    };

// Knapp med texten "Add to Cart".
// Vid klick på knappen anropas handleAddToCart-funktionen.
    return (
        <button onClick={handleAddToCart} className=' hover:font-bold'>
            Add to Cart
        </button>
    );
};

export default AddtocartButton;
