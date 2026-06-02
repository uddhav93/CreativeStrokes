import React from 'react'
import product from './../data/product.json'
import Counter from '../MyWebsite/Counter'
import './style.css'

function Products() {
  return (
    <>
      <section className="container-fluid py-4">
        <div className="row g-4">
          {
            product.map((p) => (
              <div className="col-md-4" key={p.id}>
                <div className="card h-100 shadow-sm">

                  <div className="card-header text-center bg-white">
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

                    <Counter />
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

export default Products