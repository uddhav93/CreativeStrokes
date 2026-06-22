import React, { useContext, useState } from 'react'
//import product from '../data/product.json'
import Counter from './Counter'
import statContext from '../contextfile/statContext'
function Product() {
     const { product, cart, setCart } = useContext(statContext);

  const addtocart = (proObj) => {

    const exists = cart.find(
      item => item.id === proObj.id
    );

    // If already in cart do nothing
    if (exists) {
      return;
    }

    setCart([
      ...cart,
      {
        ...proObj,
        qty: 1
      }
    ]);
  };

    return (
        <>
            <section className="container-fluid mb-3 px-3">
                <h2 className='text-center my-4'>Product</h2>
                <div className="row">
                    {
                        product.slice(1, 5).map((p) => (
                            <div className="col-xl-3 col-md-6" key={p.id}>
                                <div className="card mb-3" style={{ height: '550px',width:'auto' }}>
                                    <div className="card-header">
                                        <img src={p.imgUrl} alt={p.name} style={{ height: "200px",width:"auto", objectFit: "cover" }} />
                                        <h5 className="card-title">{p.name}</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>{p.desc}</p>
                                    </div>
                                    <div className="card-footer text-center">
                                        <Counter product={p} cart={addtocart}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Product
