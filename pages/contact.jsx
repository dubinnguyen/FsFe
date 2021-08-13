import React from 'react'


const contact = () => {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="my-0 my-lg-5">
                <p className="mb-3 font-weight-500">Contact Us</p>
                <h2 className="text-white font-weight-500">We’d love to hear from you, <br /> get in touch with us 👋</h2>
              </div>
            </div>
          </div>
        </div>
         {/* start of contact us */}
      <div className="section contact-us bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11">
              <div className="block">
                <div className="row justify-content-center">
                  <div className="col-lg-5 mb-5 mb-lg-0">
                    <div className="pr-0 pr-lg-4">
                      <h4 className="text-dark mb-3">Describe Your Project</h4>
                      <p className="">Leave us your contact info, we’ll get back to you within 24 hours. Stay up to date with our newest collections, latest deals and special offers!</p>
                      <div className="mt-4 pt-2">
                        <p className="text-uppercase small font-weight-500 mb-1">Email us:</p>
                        <p><a className="line-link text-dark" href="mailto:contact@flowstarter.io">contact@flowstarter.app</a></p>
                      </div>
                      <div className="mt-4">
                        <p className="text-uppercase small font-weight-500 mb-1">Call us:</p>
                        <p><a className="line-link text-dark" href="tel:0722232424">+072 223 2424</a></p>
                      </div>
                      <div className="mt-4">
                        <p className="text-uppercase small font-weight-500 mb-1">Address:</p>
                        <p>Qvid city, 02000</p>
                        <p>16 Nikola Y. Vaptsarov Blvd,</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <form action="#">
                      <div className="row gh-1 gv-2">
                        <div className="col-12 col-md-6">
                          <input type="name" className="form-control" placeholder="Your Name *" />
                        </div>
                        <div className="col-12 col-md-6">
                          <input type="email" className="form-control" placeholder="Your Email *" />
                        </div>
                        <div className="col-12 col-md-6">
                          <input type="phone" className="form-control" placeholder="Your Phone *" />
                        </div>
                        <div className="col-12 col-md-6">
                          <input type="company" className="form-control" placeholder="Company" />
                        </div>
                        <div className="col-12 col-md-6">
                          <select className="form-control custom-control custom-select">
                            <option selected>Type of Project</option>
                            <option>DeFi</option>
                            <option>NFT</option>
                            <option>Play To Earn</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6">
                          <select className="form-control custom-control custom-select">
                            <option selected>Your Budget</option>
                            <option>&lt; 100,000</option>
                            <option>100k-200k</option>
                            <option>200k-300k</option>
                            <option>&gt; 300,000</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <textarea className="form-control" rows={1} placeholder="Message *" defaultValue={""} />
                        </div>
                        <div className="col-12">
                          <button className="btn btn-black" type="button" name="button" data-text="Submit"><span>Submit</span></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of contact us */}
      </>
    )
}

export default contact
