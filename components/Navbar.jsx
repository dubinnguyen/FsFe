import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


const NavBar = () => {
    return (
       <>
       <Head>
           {/* meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Flowstarter &amp; Portfolio Template</title>
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
        <link rel="stylesheet" href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css" />

        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

       </Head>
       <div className="scroll-progress cursor-pointer">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        {/* start of navigation */}
        <div className="adjust-navigation-height" />
        <header className="navigation">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-dark px-0 py-3 py-lg-4">
                  {/* navbar logo */}
                  <Link href="">
                  <a className="navbar-brand font-weight-bold mb-0" href="" title="FlowStarter">
                    <Image 
                    src="/logo.png" 
                    alt="Flowstarter"
                    width={110}
                    height={23}
                    />
                  </a>
                  </Link>
                  {/* navbar-toggler */}
                  <button className="navbar-toggler" type="button" data-toggle="navbar-menu">
                    <svg viewBox="0 0 341.333 341.333"> <g> <g> <rect y="277.333" width="341.333" height="42.667" /> </g> </g> <g> <g> <rect y="149.333" width="341.333" height="42.667" /> </g> </g> <g> <g> <rect y="21.333" width="341.333" height="42.667" /> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                  </button>
                  {/* sidenav-overlay */}
                  <div className="sidenav-overlay" />
                  {/* navbar links */}
                  <div className="navbar-collapse" id="navbar-menu">
                    <ul className="navbar-nav mx-auto">
                      <li data-toggle="navbar-menu-close"><i className="las la-times mr-1" />Close</li>
                      <li className="nav-item">
                        <Link href="/about">
                        <a className="nav-link">About</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                      <Link href="/team">
                        <a className="nav-link">Team</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                      <Link href="/portfolio">
                        <a className="nav-link">Portfolio</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                      <Link href="/blogs">
                        <a className="nav-link">Blogs</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                      <Link href="/contact">
                        <a className="nav-link">Contact</a>
                        </Link>
                      </li>
                    </ul>
                    {/* navbar actions */}
                    <div className="navbar-actions">
                    <Link href="/">
                      <a className="btn btn-white" data-text="Laurch App" target="_blank" rel="nofollow"><span>
Laurch App</span></a>
                    </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
       </>
    )
}

export default NavBar
