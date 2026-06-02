import React from 'react'
import logo from '../MyWebsite/Images/logo.png'
import insta from './../pages/images/instagram.png'
import fb from '../pages/images/facebook.png'

function Footer() {
  return (
    <>
      <footer className='container-fluid' style={{backgroundColor:'#3c77ec'}}>
        <br />
        <div className="row">
          <div className="col-sm-4">
              <h2 className='text-white' >Creative Strokes</h2>
              <img src={logo} alt="logo" height={100} width={100} />
              <h6 className='text-white'>Fueling Creativity, One Stroke at a Time.</h6>
              <h4 className='text-white'>Location</h4>
              <p style={{fontSize:'25px',color:'azure'}}>23 - 29, St. Mark's Road,
                    Near Vittal Mallya Road,
                    Bangalore - 560001</p>
          </div>
          <div className="col-sm-4">
            <h2 className='text-white'>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Products</li>
              <li>Cart</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h3 className='text-white'>Contact Us</h3>
            <h5 className='text-white'>Email:<span className='text-white'>mailsupport@creativestrokes.com</span></h5>
            <h5 className='text-white'>Call Us:</h5>
            <h5 className='text-white'>+91 8542316695</h5>
            <h4 className='text-white'>Follow Us</h4>
            <div className='d-flex gap-3'>
              <img src={fb} alt="facebook" height={'32'} width={'32'} />
              <img src={insta} alt="instagram" height={'32'} width={'32'} />
            </div>
          </div>
        </div>
        <div className="row border-top">
          <div className="col-12 text-center my-3">
            <h5 className='text-white'>Copyright @ 2026 All Rights Reserved Designed and Developed By Uddhav pingle</h5>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
