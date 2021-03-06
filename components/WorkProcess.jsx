import React from 'react'

const WorkProcess = () => {
    return (
        <div>
            {/* strat of work-process */}
  <section className="section overflow-hidden">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="section-title text-center mb-4">
            <p className="mb-2 text-light">Here Is The</p>
            <h2 className="title text-white">Work Process</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="work-process-item">
            <span className="process-text">A</span>
            <h5 className="process-title font-weight-light">
              We analyze your business and search an idea
            </h5>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 anim-delay-1">
          <div className="work-process-item">
            <span className="process-text">P</span>
            <h5 className="process-title font-weight-light">
              We plan the strategy and tactics based on idea
            </h5>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 anim-delay-2">
          <div className="work-process-item">
            <span className="process-text">D</span>
            <h5 className="process-title font-weight-light">
              Now we start working on developing that idea
            </h5>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 anim-delay-3">
          <div className="work-process-item focus">
            <span className="process-text">R</span>
            <h5 className="process-title font-weight-light">
              And now your product is ready for release
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end of work-process */}
        </div>
    )
}

export default WorkProcess
