import React, { useContext } from 'react'
import statContext from '../contextfile/statContext'
import Navbar from '../MyWebsite/Navbar';
import Footer from '../MyWebsite/Footer';

function Cart() {
    let {cart}=useContext(statContext);
    const total=cart.reduce((sum,item)=>sum+(item.price*item.qty),0);
    return (
    <>
    <Navbar/>
    <br /><br />
      <section className="container-fluid">
        <h3>Shopping Cart</h3>
        <table className='table border border-dark'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>qty</th>
                    <th>SubTotal</th>
                    <th>Product image</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.qty}</td>
                            <td>{p.qty*p.price}</td>
                            <td><img src={p.imgUrl} alt={p.name} height={'50'} width={'50'} /></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <h3>Total:{total}</h3>
      </section>
      <br /><br />
      <Footer/>
    </>
  )
}

export default Cart
