import React from 'react'
import testimonial from '../data/testimonials.json'

// helper to split array into groups of n


function Testimonial() {
    return (
        <section className="container-fluid mb-3">
            <h2 className='text-center'>Testimonials</h2>
            <div className="row">
                {
                    testimonial.slice(0,3).map((e)=>(
                        <div className="col-sm-4 mb-3">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">{e.customerName}</h3>
                                    <h4>Date:{e.date}</h4>
                                </div>
                                <div className="card-body">
                                    <h4>Rating: {e.rating}</h4>
                                    <p>{e.feedback}</p>
                                </div>
                            </div>
                        </div>
                    ))                    
                }
            </div>
        </section>
    )
}

export default Testimonial
