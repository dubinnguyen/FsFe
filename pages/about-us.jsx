import React from 'react'
import Team from '../components/Team'

const About = () => {
    return (
        <div>
        {/* start of page-header */}
 <section className="page-header">
   <div className="container">
     <div className="row justify-content-center">
       <div className="col-lg-10">
         <div className="my-0 my-lg-5">
           <p className="mb-3 font-weight-500">Who We Are</p>
           <h2 className="text-white font-weight-500 anim-delay-1">We believe in designing the best interfaces. We create everything digital and analytical 🔥</h2>
         </div>
       </div>
     </div>
   </div>
 </section>
 {/* end of page-header */}
  {/* start of about */}
  <section className="section bg-white">
   <div className="container">
     <div className="row justify-content-start justify-content-lg-around align-items-center">
       <div className="col-xl-5 col-lg-5 col-md-8">
         <img loading="lazy" className="img-fluid" src="/images/about-image.jpg" alt="" />
       </div>
       <div className="col-xl-5 col-lg-6 mt-5 mt-lg-0">
         <p className="lead text-dark mb-3">As a full-service digital agency 👋, we work closely with our clients to define, design and develop transformative user experiences across all platforms and brand’s touchpoints.</p>
         <p className="anim-delay-1">We build thoughtful digital experiences for the modern world. We have created an environment to encourage warm exchanges around brands. In a permanent adaptation, the ideas are concretized by the bonds which we weave between our customers and our talents.</p>
         <a href="/contact" className="btn btn-black mt-5 anim-delay-2" data-text="Contact Us"><span>Contact Us</span></a>
       </div>
     </div>
   </div>
 </section>
 {/* end of about */}
 {/* start of facts */}
 <section className="section">
   <div className="container">
     <div className="row justify-content-center text-center">
       <div className="col-lg-12">
         <div className="row justify-content-center">
           <div className="col-md-3 col-sm-6 facts-box">
             <div className="block">
               <h1 className="facts-box-title text-white">110+</h1>
               <p className="font-weight-500">Websites &amp; Apps <br /> launched</p>
             </div>
           </div>
           <div className="col-md-3 col-sm-6 facts-box">
             <div className="block mt-5 mt-sm-0 anim-delay-2">
               <h1 className="facts-box-title text-white">100%</h1>
               <p className="font-weight-500">In-house &amp; <br /> independent</p>
             </div>
           </div>
           <div className="col-md-3 col-sm-6 facts-box">
             <div className="block mt-5 mt-md-0 anim-delay-3">
               <h1 className="facts-box-title text-white">50+</h1>
               <p className="font-weight-500">Awards &amp; <br /> recognition</p>
             </div>
           </div>
           <div className="col-md-3 col-sm-6 facts-box">
             <div className="block mt-5 mt-md-0 anim-delay-4">
               <h1 className="facts-box-title text-white">20K+</h1>
               <p className="font-weight-500">Satisfied <br /> clients</p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
 {/* end of facts */}
 <Team />
   </div>
    )
}

export default About
