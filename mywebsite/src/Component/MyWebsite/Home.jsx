import React from 'react'
import Navbar from './Navbar'
import home1 from './Images/Stationary.jpg'
import Categories from './Categories';
import Product from './Product';
import About from './About';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
    let secstyle = {
        backgroundImage: `url(${home1})`,
        color: '#041333ff',
        fontSize: '20px',
        height:'auto',
        padding:"10%",
        textAlign:'center',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    };
    return (
        <>
            <Navbar />
            <section style={secstyle}>
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
