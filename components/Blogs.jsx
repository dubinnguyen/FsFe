import React from 'react'

const Blogs = () => {
    return (
        <div className="row">
  <div className="col-lg-4 col-md-6">
    <article className="card blog-card border-0 rounded-0">
      <div className="card-background" style={{ backgroundColor: "#0a11a8" }} />
      <a href="blog-single.html" className="card-image">
        <img
          loading="lazy"
          src="/images/blogs/01.jpg"
          className="card-img rounded-0"
          alt="blog-post"
        />
      </a>
      <div className="card-body p-0 mt-4">
        <span className="card-tag mb-3">
          <a href="blogs-1-col.html">Design</a>
        </span>
        <h4 className="card-title">
          <a href="blog-single.html">
            How to build Colorful &amp; Energetic Illustrations using Adobe
            Illustrator
          </a>
        </h4>
        <p className="card-text">
          It's about 'How to create a colorful &amp; energetic portraits in
          Adobe Illustrator'
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
