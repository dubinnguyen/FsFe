import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Blogs = () => {
    return (
      <>
        <div className="row">
        <div className="col-lg-12">
  <article className="card blog-card blog-card-horizontal border-0 rounded-0">
    <div className="card-background" style={{ backgroundColor: "#c11c3b" }} />
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-6">
        <Link href="blog-single.html">
        <a className="card-image">
          <Image
            loading="lazy"
            src="/images/blogs/01-hr.jpg"
            className="card-img rounded-0"
            alt="blog-post"
            width={1000}
            height={750}
            layout="responsive"
          />
        </a>
        </Link>
      </div>
      <div className="col-lg-6 mt-4 mt-sm-5 mt-lg-0">
        <div className="card-body p-0 p-lg-4">
          <span className="card-tag mb-3">Featured</span>
          <h3 className="card-title">
            <Link href="blog-single.html">
            <a>
              Thoughts on Branding from Rowan, a new premium coat-care brand for
              dogs
            </a>
            </Link>
          </h3>
          <p className="card-text">
            We love seeing new products coming to life especially when there's a
            lot of attention on Branding and Visual Identity, the overall high
            quality of the product itself.
          </p>
          <p className="card-meta mt-3">
            7 Dec 2021 <span className="mx-2">—</span> 3 mins read
          </p>
        </div>
      </div>
    </div>
  </article>
</div>
  <div className="col-lg-4 col-md-6">
    <article className="card blog-card border-0 rounded-0">
      <div className="card-background" style={{ backgroundColor: "#0a11a8" }} />
      <a href="blog-single.html" className="card-image">
        <Image
          loading="lazy"
          src="/images/blogs/01.jpg"
          className="card-img rounded-0"
          alt="blog-post"
          width={750}
          height={750}
          layout="responsive"
        />
      </a>
      <div className="card-body p-0 mt-4">
        <span className="card-tag mb-3">
          <a href="blogs-1-col.html">Design</a>
        </span>
        <h4 className="card-title">
          <a href="">
            Energetic Illustrations using Adobe Illustrator
          </a>
        </h4>
        <p className="card-text">
          How to create a colorful
        </p>
        <p className="card-meta mt-3">
          6 Dec 2021 <span className="mx-2">—</span> 4 mins read
        </p>
      </div>
    </article>
  </div>
</div>
</>
    )
}

export default Blogs
