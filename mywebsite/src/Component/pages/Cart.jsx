import React, { useContext } from 'react';
import statContext from '../contextfile/statContext';
import Footer from '../MyWebsite/Footer';
import Navbar from '../MyWebsite/Navbar';

function Cart() {

    const { cart, setCart } = useContext(statContext);

    const increaseQty = (id) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCart(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? { ...item, qty: item.qty - 1 }
                        : item
                )
                .filter(item => item.qty > 0)
        );
    };

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
     <>
     <Navbar/>
     <br /><br />
        <section className="container-fluid">
            <h3>Shopping Cart</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cart.map(p => (
                            <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.price}</td>

                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => decreaseQty(p.id)}
                                    >
                                        -
                                    </button>

                                    <span className="mx-3">
                                        {p.qty}
                                    </span>

                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() => increaseQty(p.id)}
                                    >
                                        +
                                    </button>
                                </td>

                                <td>
                                    {p.price * p.qty}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <h3>Total: ₹{total}</h3>
        </section>
        <br /><br /><br /><br /><br />
        <Footer/>
     </>   
    )
}

export default Cart;