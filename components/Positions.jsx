import React from 'react'

const Positions = () => {
    return (
        <div>
             {/* start of open-position */}
  <section
    id="open-positions"
    className="section"
    style={{ borderBottom: "1px solid #151829" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <p className="mb-2">Apply On Our</p>
            <h2 className="title text-white">Open Positions</h2>
          </div>
          <div className="row justify-content-center pt-3">
            <div className="col-md-4 mb-4 mb-md-0">
              <h3 className="text-white font-weight-500">Customer Support</h3>
            </div>
            <div className="col-lg-7 col-md-8">
              <ul className="open-positions-list pl-0 pl-md-5">
                <li>
                  <h4>
                    <a
                      href="#!"
                      className="text-light font-weight-500 d-block mb-2"
                      target="_blank"
                    >
                      Customer Support Specialist - Billing, (NZ/Australia)
                    </a>
                  </h4>
                  <span>New Zealand or Australia Remote</span>
                </li>
                <li>
                  <h4>
                    <a
                      href="#!"
                      className="text-light font-weight-500 d-block mb-2"
                      target="_blank"
                    >
                      Manager, Customer Support (UK/Ireland)
                    </a>
                  </h4>
                  <span>UK/Ireland Remote</span>
                </li>
                <li>
                  <h4>
                    <a
                      href="#!"
                      className="text-light font-weight-500 d-block mb-2"
                      target="_blank"
                    >
                      Technical Customer Support Specialist, (NZ/Australia)
                    </a>
                  </h4>
                  <span>New Zealand or Australia Remote</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center pt-3 mt-5">
            <div className="col-md-4 mb-4 mb-md-0">
              <h3 className="text-white font-weight-500">Marketing</h3>
            </div>
            <div className="col-lg-7 col-md-8">
              <ul className="open-positions-list pl-0 pl-md-5">
                <li>
                  <h4>
                    <a
                      href="#!"
                      className="text-light font-weight-500 d-block mb-2"
                      target="_blank"
                    >
                      Product Marketing Lead
                    </a>
                  </h4>
                  <span>San Francisco HQ or US Remote</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center pt-3 mt-5">
            <div className="col-md-4 mb-4 mb-md-0">
              <h3 className="text-white font-weight-500">Design</h3>
            </div>
            <div className="col-lg-7 col-md-8">
              <ul className="open-positions-list pl-0 pl-md-5">
                <li>
                  <h4>
                    <a
                      href="#!"
                      className="text-light font-weight-500 d-block mb-2"
                      target="_blank"
                    >
                      Senior Product Designer, Growth
                    </a>
                  </h4>
                  <span>Remote</span>
                </li>
                <li>
                  <h4>
                    <a
                      href="#!"
                      className="text-light font-weight-500 d-block mb-2"
                      target="_blank"
                    >
                      Senior Product Designer, Marketplace
                    </a>
                  </h4>
                  <span>US Remote</span>
                </li>
                <li>
                  <h4>
                    <a
                      href="#!"
                      className="text-light font-weight-500 d-block mb-2"
                      target="_blank"
                    >
                      Senior Product Design Manager, Design Systems
                    </a>
                  </h4>
                  <span>US remote</span>
                </li>
                <li>
                  <h4>
                    <a
                      href="#!"
                      className="text-light font-weight-500 d-block mb-2"
                      target="_blank"
                    >
                      Senior UI Designer, Design Systems
                    </a>
                  </h4>
                  <span>US Remote</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end of open-position */}
        </div>
    )
}

export default Positions
