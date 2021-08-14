import React from 'react'
import Blogs from '../../components/Blogs'

const index = () => {
    return (
        <>
             {/* start of page-header */}
      <section className="page-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="my-0 my-lg-5">
                <p className="mb-3 font-weight-500">Latest news</p>
                <h2 className="text-white font-weight-500 anim-delay-1">Our Blog Posts<span className="text-primary">.</span></h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of page-header */}
       {/* start of 3 column blogs  */}
  <div className="section pt-n30 bg-white">
    <div className="container">
      <div className="row"> <Blogs /></div>
    </div>
  </div>
     
        </>
    )
}

export default index
