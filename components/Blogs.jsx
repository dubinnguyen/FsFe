import React from 'react'
import Image from 'next/image'

const Blogs = () => {
    return (
        <div className="row">
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
    )
}

export default Blogs
