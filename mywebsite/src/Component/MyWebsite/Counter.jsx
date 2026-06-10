import React, { useState } from 'react'

function Counter({ product, cart }) {
    const [qty, setQty] = useState(0);

    const inc = () => {
        const newQty = qty + 1;
        setQty(newQty);

        cart(product, newQty); // ✅ send updated qty
    };

    const dec = () => {
        const newQty = qty > 0 ? qty - 1 : 0;
        setQty(newQty);

        cart(product, newQty); // ✅ send updated qty
    };

    return (
        <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-success" onClick={inc}>
                +
            </button>

            <p>{qty}</p>

            <button className="btn btn-danger" onClick={dec}>
                -
            </button>
        </div>
    );
}

export default Counter;