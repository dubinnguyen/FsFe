import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Team = () => {
    return (
        <div>
            {/* start of teams */}
      <section className="section bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title mb-4">
                <p className="mb-2">Our Awesome</p>
                <h2 className="title text-dark">Powerful Team</h2>
              </div>
            </div>
          </div>
          <div className="row row-team">
            <div className="col-xl-3 col-lg-4 col-6">
              <div className="team-item">
                <div className="block overflow-hidden position-relative">
                  <Image 
                  loading="lazy" 
                  className="img-fluid" 
                  src="/images/team/03.jpg" 
                  alt="Team Image"
                  width={540}
                  height={686}
                  layout="responsive"
                   />
                  <div className="social-profile d-flex align-items-end justify-content-center">
                    <ul className="list-unstyled list-inline mb-4 pb-2">
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-facebook-f" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-twitter" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-github" /></a></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="h5 text-dark">Riddo Graham</h4>
                  <p className="h6 font-weight-400 mt-1">Ower &amp; Founder</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-6">
              <div className="team-item anim-delay-1">
                <div className="block overflow-hidden position-relative">
                <Image 
                  loading="lazy" 
                  className="img-fluid" 
                  src="/images/team/01.jpg" 
                  alt="Team Image"
                  width={540}
                  height={686}
                  layout="responsive"
                   />
                  <div className="social-profile d-flex align-items-end justify-content-center">
                    <ul className="list-unstyled list-inline mb-4 pb-2">
                    <li className="list-inline-item"><Link href="#"><a><i className="lab la-facebook-f" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-twitter" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-github" /></a></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="h5 text-dark">Riki Pham</h4>
                  <p className="h6 font-weight-400 mt-1">Chief Product Maneger</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-6">
              <div className="team-item anim-delay-2">
                <div className="block overflow-hidden position-relative">
                <Image 
                  loading="lazy" 
                  className="img-fluid" 
                  src="/images/team/03.jpg" 
                  alt="Team Image"
                  width={540}
                  height={686}
                  layout="responsive"
                   />
                  <div className="social-profile d-flex align-items-end justify-content-center">
                    <ul className="list-unstyled list-inline mb-4 pb-2">
                    <li className="list-inline-item"><Link href="#"><a><i className="lab la-facebook-f" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-twitter" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-github" /></a></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="h5 text-dark">Dubin Ng</h4>
                  <p className="h6 font-weight-400 mt-1">Product Designer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-6">
              <div className="team-item">
                <div className="block overflow-hidden position-relative">
                <Image 
                  loading="lazy" 
                  className="img-fluid" 
                  src="/images/team/04.jpg" 
                  alt="Team Image"
                  width={540}
                  height={686}
                  layout="responsive"
                   />
                  <div className="social-profile d-flex align-items-end justify-content-center">
                    <ul className="list-unstyled list-inline mb-4 pb-2">
                    <li className="list-inline-item"><Link href="#"><a><i className="lab la-facebook-f" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-twitter" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-github" /></a></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="h5 text-dark">Hai Nguyen</h4>
                  <p className="h6 font-weight-400 mt-1">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-6">
              <div className="team-item">
                <div className="block overflow-hidden position-relative">
                <Image 
                  loading="lazy" 
                  className="img-fluid" 
                  src="/images/team/05.jpg" 
                  alt="Team Image"
                  width={540}
                  height={686}
                  layout="responsive"
                   />
                  <div className="social-profile d-flex align-items-end justify-content-center">
                    <ul className="list-unstyled list-inline mb-4 pb-2">
                    <li className="list-inline-item"><Link href="#"><a><i className="lab la-facebook-f" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-twitter" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-github" /></a></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="h5 text-dark">Rubaik Jakson</h4>
                  <p className="h6 font-weight-400 mt-1">Markating Head</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-6">
              <div className="team-item anim-delay-2">
                <div className="block overflow-hidden position-relative">
                <Image 
                  loading="lazy" 
                  className="img-fluid" 
                  src="/images/team/06.jpg" 
                  alt="Team Image"
                  width={540}
                  height={686}
                  layout="responsive"
                   />
                  <div className="social-profile d-flex align-items-end justify-content-center">
                    <ul className="list-unstyled list-inline mb-4 pb-2">
                    <li className="list-inline-item"><Link href="#"><a><i className="lab la-facebook-f" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-twitter" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-github" /></a></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="h5 text-dark">Alentrona Shimla</h4>
                  <p className="h6 font-weight-400 mt-1">UI Artist</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-6">
              <div className="team-item anim-delay-3">
                <div className="block overflow-hidden position-relative">
                <Image 
                  loading="lazy" 
                  className="img-fluid" 
                  src="/images/team/07.jpg" 
                  alt="Team Image"
                  width={540}
                  height={686}
                  layout="responsive"
                   />
                  <div className="social-profile d-flex align-items-end justify-content-center">
                    <ul className="list-unstyled list-inline mb-4 pb-2">
                    <li className="list-inline-item"><Link href="#"><a><i className="lab la-facebook-f" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-twitter" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-github" /></a></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="h5 text-dark">Jason Moyer</h4>
                  <p className="h6 font-weight-400 mt-1">Business Consultant</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-6">
              <div className="team-item anim-delay-1">
                <div className="block overflow-hidden position-relative">
                <Image 
                  loading="lazy" 
                  className="img-fluid" 
                  src="/images/team/08.jpg" 
                  alt="Team Image"
                  width={540}
                  height={686}
                  layout="responsive"
                   />
                  <div className="social-profile d-flex align-items-end justify-content-center">
                    <ul className="list-unstyled list-inline mb-4 pb-2">
                    <li className="list-inline-item"><Link href="#"><a><i className="lab la-facebook-f" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-twitter" /></a></Link></li>
                      <li className="list-inline-item"><Link href="#"><a><i className="lab la-github" /></a></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="h5 text-dark">Luke Jones</h4>
                  <p className="h6 font-weight-400 mt-1">Graphic Designer</p>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5 pt-4 text-center">
              <Link href="/team#open-positions">
              <a className="btn btn-black" data-text="See Open Positions"><span>See Open Positions</span></a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* end of teams */}
        </div>
    )
}

export default Team
