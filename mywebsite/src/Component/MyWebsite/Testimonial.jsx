import React from 'react'
import testimonial from '../data/testimonials.json'

// helper to split array into groups of n
function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

function Testimonial() {
    // break testimonials into groups of 2
    const testimonialChunks = chunkArray(testimonial, 2);

    return (
        <section className="container-fluid mb-3">
            <h2 className='text-center'>Testimonials</h2>
            <div className="row">
                <div className="col-sm-8 m-auto">
                    <div 
                        id="carouselExampleAutoplaying" 
                        className="carousel slide" 
                        data-bs-ride="carousel" 
                        data-bs-wrap="true" 
                        data-bs-interval="4000"  // auto slide every 4s
                    >
                        <div className="carousel-inner">
                            {testimonialChunks.map((group, i) => (
                                <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                                    <div className="row">
                                        {group.map((t, j) => (
                                            <div className="col-sm-6" key={j}>
                                                <div className="card text-center h-100">
                                                    <div className="card-header p-3">
                                                        <h3>{t.customerName}</h3>
                                                        <h4>Rating: {t.rating}</h4>
                                                    </div>
                                                    <div className="card-body border">
                                                        <p>{t.feedback}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <h5>Highlighted products</h5>
                                                        <ul className="list-group list-group-flush">
                                                            {t.highlightedProducts.map((h, k) => (
                                                                <li className='list-group-item' key={k}>{h}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev btn btn-primary" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next btn btn-primary" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
