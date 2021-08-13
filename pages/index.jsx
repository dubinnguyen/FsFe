import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Banner from '../components/Banner';
import About from '../components/About';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Blogs from '../components/Blogs';
export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <WorkProcess />
      <Testimonials />
      <Partners />
        {/* start of blogs */}
  <section className="section bg-white">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="section-title text-center mb-4">
            <p className="mb-2">Latest news</p>
            <h2 className="title text-dark">Our Blog Posts</h2>
          </div>
        </div>
      </div>
       {/* Blog components */}
       <Blogs />
    </div>
  </section>
      
    </div>
  )
}
