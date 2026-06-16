import React from 'react'
import './style.css'
import Navbar from '../MyWebsite/Navbar'
import float from '../../assets/float1.png'
function About() {
  return (
    <>
    <Navbar/>
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
      <img src={float} alt="painting" className='img-float'  />
    </>
  )
}

export default About
