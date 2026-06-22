import React from 'react'
import './style.css'
import Navbar from '../MyWebsite/Navbar'
import float from '../../assets/float1.png'
import about from './../../assets/about.jpg'
import Footer from '../MyWebsite/Footer'

function About() {
  return (
    <>
      <Navbar />
      <section className="container-fluid about-hero">
        <div className="row">
          <div className="col-sm-8 text-content">
            <h2 className='mb-4'>About Us</h2>
            <h2>Create with what inspires you…</h2>
            <p className='content'>
              Reimagining the world of stationery and art supplies, Creative Strokes brings you premium,
              thoughtfully crafted tools that spark imagination and creativity.
              From vibrant pens to elegant notebooks,
              we deliver the essence of artistry right to your desk — empowering you to express, design,
              and dream in every stroke.
            </p>
          </div>
        </div>
      </section>
      <img src={float} alt="painting" className='img-float' />
      <br />
      <section className="container-fluid about-details">
        <div className="row">
          <div className="col-sm-6">
            <h2>About Us- Creative Strokes</h2>
            <p>
              At Creative Strokes, we believe that every mark you make tells a story. Born from a passion for artistry and everyday creativity, we are more than just a stationery store — we are a hub for inspiration, imagination, and innovation.

              From vibrant pens and elegant notebooks to premium art supplies, our carefully curated collection is designed to empower students, professionals, and artists alike.
              Whether you're sketching your next masterpiece, jotting down ideas, or highlighting important notes, our products are crafted to make every stroke meaningful.
              What sets us apart is our commitment to quality, variety, and creativity.
              We partner with trusted brands and artisans to bring you stationery that blends functionality with style. Our cozy store atmosphere and friendly team ensure that every visit feels like stepping into a world of possibilities.

              At Creative Strokes, we don't just sell stationery — we inspire journeys of learning, expression, and creation. Because here, every stroke is a step toward something extraordinary.
            </p>
          </div>
          <div className="col-sm-6 text-center">
            <img src={about} alt="about us" height={'500'} width={'500'} className='img-fluid' />
          </div>
        </div>
      </section>
      <br />
      <Footer/>
    </>
  )
}

export default About
