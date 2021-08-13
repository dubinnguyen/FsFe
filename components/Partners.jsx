import React from 'react'

const Partners = () => {
    return (
        <div>
            {/* start of clients */}
  <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title text-center">
            <p className="mb-2 text-light">They trust us</p>
            <h2 className="title text-white">Selected Partners</h2>
          </div>
        </div>
      </div>
      <div className="clients-logo-grid">
        <div className="logo-item">
          <a href="#!" className="anim-delay-4">
            <img
              loading="lazy"
              src="/images/clients/lenovo.png"
              alt="brands"
            />
          </a>
        </div>
        <div className="logo-item">
          <a href="#!" className="anim-delay-3">
            <img
              loading="lazy"
              src="/images/clients/payoneer.svg"
              alt="brands"
            />
          </a>
        </div>
        <div className="logo-item">
          <a href="#!" className="anim-delay-2">
            <img
              loading="lazy"
              src="/images/clients/paypal.svg"
              alt="brands"
            />
          </a>
        </div>
        <div className="logo-item">
          <a href="#!" className="anim-delay-4">
            <img
              loading="lazy"
              src="/images/clients/samsung.png"
              alt="brands"
            />
          </a>
        </div>
        <div className="logo-item">
          <a href="#!" className="anim-delay-5">
            <img
              loading="lazy"
              src="/images/clients/slack.png"
              alt="brands"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* end of clients */}
        </div>
    )
}

export default Partners
