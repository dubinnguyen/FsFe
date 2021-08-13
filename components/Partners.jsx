import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


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
          <Link href="/">
          <a className="anim-delay-4">
            <Image
              loading="lazy"
              src="/images/clients/lenovo.png"
              alt="brands"
              width={200}
              height={67}
            />
          </a>
          </Link>
        </div>
        <div className="logo-item">
        <Link href="/">
          <a className="anim-delay-4">
            <Image
              loading="lazy"
              src="/images/clients/payoneer.svg"
              alt="brands"
              width={200}
              height={67}
            />
          </a>
          </Link>
        </div>
        <div className="logo-item">
        <Link href="/">
          <a className="anim-delay-4">
            <Image
              loading="lazy"
              src="/images/clients/paypal.svg"
              alt="brands"
              width={200}
              height={67}
            />
          </a>
          </Link>
        </div>
        <div className="logo-item">
        <Link href="/">
          <a className="anim-delay-4">
            <Image
              loading="lazy"
              src="/images/clients/samsung.png"
              alt="brands"
              width={200}
              height={67}
            />
          </a>
          </Link>
        </div>
        <div className="logo-item">
        <Link href="/">
          <a className="anim-delay-4">
            <Image
              loading="lazy"
              src="/images/clients/slack.png"
              alt="brands"
              width={200}
              height={67}
            />
          </a>
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/* end of clients */}
        </div>
    )
}

export default Partners
