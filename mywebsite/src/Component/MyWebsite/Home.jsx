import React from 'react'
import Navbar from './Navbar'
import Categories from './Categories';
import Product from './Product';
import About from './About';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
    return (
        <>
            <Navbar />
            <section className='img-container'>
                <h1>Creative Strokes</h1>
                <h3>Creative Strokes- Inspiring Every Mark You Make</h3>
                <button className="btn btn-info">Know More</button>
            </section>
            <br />
            <About/>
            <br />
            <Categories/>
            <br />
            <Product/>
            <br />
            <Testimonial/>
            <br /><br />
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home
