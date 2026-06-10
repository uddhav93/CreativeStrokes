import React, { useContext } from 'react'
import Counter from '../MyWebsite/Counter'
import './style.css'
import Navbar from '../MyWebsite/Navbar'
import Footer from '../MyWebsite/Footer'
import statContext from '../contextfile/statContext'


function Products() {
  let { product, cart, setCart } = useContext(statContext);
  function addtocart(proObj, qty) {

    setCart(prev => {

      if (qty === 0) {
        return prev.filter(item => item.id !== proObj.id);
      }

      const exists = prev.find(
        item => item.id === proObj.id
      );

      if (exists) {
        return prev.map(item =>
          item.id === proObj.id
            ? { ...item, qty }
            : item
        );
      }

      return [...prev, { ...proObj, qty }];
    });
  }
  return (
    <>
      <Navbar />
      <section className="container-fluid py-4">
        <div className="row g-4">
          {
            product.map((p) => (
              <div className="col-md-4" key={p.id}>
                <div className="card card1 h-100 shadow-sm">

                  <div className="card-header card-header1 text-center bg-white">
                    <img
                      src={p.imgUrl}
                      alt={p.name}
                      className="product-img"
                    />
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title">{p.name}</h3>
                    <h5>{p.category}</h5>
                    <p className="flex-grow-1">{p.desc}</p>

                    <Counter product={p} cart={addtocart} />
                  </div>

                </div>
              </div>
            ))
          }
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Products