import React from 'react'
import con from './Images/contact2.jpg'
import mail from './Images/mail.png'
import phone from './Images/telephone.png'
import map from './Images/placeholder.png'

function Contact() {
  let cont = {
    backgroundImage: `linear-gradient(rgba(240,248,255,0.85), rgba(240,248,255,0.85)), url(${con})`,
    minHeight: '100vh',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }
  return (
    <>
      <section className="container-fluid" style={cont}>

        <div className="container">

          <div className="row align-items-center g-5">

            {/* LEFT SIDE */}

            <div className="col-lg-5">

              <h1 className="display-4 fw-bold text-dark mb-3">
                Let's Talk
              </h1>

              <p className="text-secondary fs-5 mb-5">
                We'd love to hear from you. Send us your queries and our team
                will get back to you shortly.
              </p>

              {/* EMAIL */}

              <div className="d-flex align-items-start gap-4 mb-4">

                <div className="icon-box">
                  <img src={mail} alt="mail" width={28} height={28} />
                </div>

                <div>
                  <h4 className="fw-bold">General Enquiries</h4>
                  <p className="text-secondary mb-0">
                    mailsupport@creativestrokes.com
                  </p>
                </div>

              </div>

              {/* PHONE */}

              <div className="d-flex align-items-start gap-4 mb-4">

                <div className="icon-box">
                  <img src={phone} alt="phone" width={28} height={28} />
                </div>

                <div>
                  <h4 className="fw-bold">Call Us</h4>
                  <p className="text-secondary mb-0">
                    +91 8542316695
                  </p>
                </div>

              </div>

              {/* ADDRESS */}

              <div className="d-flex align-items-start gap-4">

                <div className="icon-box">
                  <img src={map} alt="map" width={28} height={28} />
                </div>

                <div>
                  <h4 className="fw-bold">Address</h4>

                  <p className="text-secondary mb-0">
                    23 - 29, St. Mark's Road,
                    Near Vittal Mallya Road,
                    Bangalore - 560001
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE FORM */}

            <div className="col-lg-7">

              <div className="contact-card">

                <h2 className="fw-bold mb-4 text-center">
                  Send Message
                </h2>

                <form>

                  <div className="row">

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-semibold">
                        First Name
                      </label>

                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Enter first name"
                      />
                    </div>

                    <div className="col-md-6 mb-4">

                      <label className="form-label fw-semibold">
                        Last Name
                      </label>

                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Enter last name"
                      />

                    </div>

                  </div>

                  <div className="row">

                    <div className="col-md-6 mb-4">

                      <label className="form-label fw-semibold">
                        Email
                      </label>

                      <input
                        type="email"
                        className="form-control custom-input"
                        placeholder="Enter email"
                      />

                    </div>

                    <div className="col-md-6 mb-4">

                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        className="form-control custom-input"
                        placeholder="Enter phone number"
                      />

                    </div>

                  </div>

                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Message
                    </label>

                    <textarea
                      rows="5"
                      className="form-control custom-input"
                      placeholder="Write your message"
                    ></textarea>

                  </div>

                  <div className="text-center">

                    <button className="btn btn-dark px-5 py-3 rounded-pill fw-semibold mb-3">
                      Send Message
                    </button>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default Contact
