import React from 'react';

function Counter({ product, cart }) {

    const addToCart = () => {
        cart(product, 1);
    };

    return (
        <button
            className="btn btn-primary"
            onClick={addToCart}
        >
            Add To Cart
        </button>
    );
}

export default Counter;