import React from 'react'
import aboutImg from './Images/about.jpg'
function About() {
    return (
        <>
            <section className="container-fluid mb-3 px-3">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>About Us</h2>
                        <p>
                            At Creative Strokes Stationery, we believe that every great idea begins with a simple stroke of creativity. 
                            Our mission is to provide high-quality stationery that inspires students, professionals, and artists to express themselves with confidence and style.
                            From everyday essentials like notebooks, pens, and office supplies to unique and artistic materials, we carefully curate products that blend functionality with creativity.
                            Whether you're taking notes, sketching your next masterpiece, or organizing your workspace, our collection is designed to support your journey.
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <img src={aboutImg} alt="about-us" className='img-fluid' />
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
