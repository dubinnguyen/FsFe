import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
        <footer className="section-sm pb-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h4 className="h3 font-weight-light text-white">Have an idea, tell us about it!<Link href="/contact"><a className="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1={7} y1={17} x2={17} y2={7} /><polyline points="7 7 17 7 17 17" /></svg></a></Link></h4>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 mb-4 mb-lg-0">
                <h4 className="font-weight-light mb-4">
                  <Link href="mailto:contact@flowstarter.app">
                  <a className="line-link">contact@flowstarter.app</a>
                  </Link>
                  </h4>
                <p>Phone: +072 223 2424</p>
                <p>75 E Santa Clara St, Ste 1425</p>
                <p>Alexandria, VA 22314, USA</p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-6 ml-auto">
                <ul className="footer-link list-unstyled">
                  <li><Link href="/about-us"><a>Careers</a></Link></li>
                  <li><Link href="/about-me"><a>About us</a></Link></li>
                  <li><Link href="/services"><a>Council</a></Link></li>
                  <li><Link href="/portfolio"><a>Apply for IDO</a></Link></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                <ul className="footer-link list-unstyled">
                  <li><Link href="/blogs"><a>Our blog</a></Link></li>
                  <li><Link href="/team"><a>Our team</a></Link></li>
                  <li><Link href="/press"><a>Press</a></Link></li>
                  <li><Link href="/FAQ"><a>FAQ</a></Link></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <ul className="footer-link list-unstyled">
                  <li><Link href="/contact-us"><a>Contact</a></Link></li>
                  <li><Link href="/privacy"><a>Privacy &amp; policy</a></Link></li>
                  <li><Link href="/documents"><a>Documents</a></Link></li>
                </ul>
              </div>
              <div className="col-12">
                <ul className="footer-link list-unstyled list-inline mt-4 mt-md-5">
                  <li className="list-inline-item"><Link href="/"><a>Telegram</a></Link></li>
                  <li className="list-inline-item"><Link href="/"><a>Twitter</a></Link></li>
                  <li className="list-inline-item"><Link href="/"><a>Discord</a></Link></li>
                  <li className="list-inline-item"><Link href="/"><a>Github</a></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/* end of footer */}
        {/* start of footer-bottom */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mb-5 pb-4">
                <p className="h6 font-weight-light mb-2">Copyright © . Developed by <Link href="/"><a className="line-link text-white font-weight-light">FlowStarter</a></Link></p>
                <p className="h6 font-weight-light">When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</p>
              </div>
            </div>
          </div>
        </section>
        {/* end of footer-bottom */}
      </div>
    )
}

export default Footer
