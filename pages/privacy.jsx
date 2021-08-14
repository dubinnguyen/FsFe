import React from 'react'
import Link from 'next/link'

const privacy = () => {
    return (
        <div>
            {/* start of page-header */}
  <section className="page-header">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="my-0 my-lg-5">
            <p className="mb-3 font-weight-500">
              Last updated on June 06, 2021
            </p>
            <h2 className="text-white font-weight-500 anim-delay-1">
              Privacy &amp; Policy
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end of page-header */}
  {/* start of privacy-policy */}
  <section className="section privacy-wrapper bg-white">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="content">
            <p>
              Below are our dummy <Link href="/privacy"><a>Privacy &amp; Policy</a></Link>, which outline a
              lot of legal goodies, but the bottom line is it’s our aim to
              always take care of both you, as a customer, or as a seller on our
              platform.
            </p>
            <h3 className="h4">Licensing Policy</h3>
            <p>
              By visiting and/or taking any action on our template, you confirm
              that you are in agreement with and bound by the terms outlined
              below. These terms apply to the website, emails, or any other
              communication.
            </p>
            <h3 className="h5">Here are terms of our Standard License:</h3>
            <ul>
              <li>
                The Standard License grants you a non-exclusive right to make
                use of template you have purchased.
              </li>
              <li>
                You are licensed to use the Item to create one End Product for
                yourself or for one client (a “single application”), and the End
                Product can be distributed for Free.
              </li>
            </ul>
            <h3 className="h5">If you opt for an Extended License:</h3>
            <ul>
              <li>
                You are licensed to use the Item to create one End Product for
                yourself or for one client (a “single application”), and the End
                Product maybe sold or distributed for free.
              </li>
            </ul>
            <h3 className="h4">Additional Policy</h3>
            <p>
              By visiting and/or taking any action on our template, you confirm
              that you are in agreement with and bound by the terms outlined
              below. These terms apply to the website, emails, or any other
              communication.
            </p>
            <ul>
              <li>
                You have 2 days to evaluate your purchase. If your purchase
                fails to meet expectations set by the seller, or is critically
                flawed in some way, contact Bootstrap Themes and we will issue a
                full refund pending a review.
              </li>
            </ul>
          </div>
          {/* end of privacy item */}
          {/* start of question-us wrap */}
          <div className="text-center mt-5 pt-5">
            <h3 className="text-dark font-weight-600">
              Looking for something else?
            </h3>
            <Link href="/contact">
            <a className="btn btn-black my-3" data-text="Submit Request">
              <span>Submit Request</span>
            </a>
            </Link>
            <small className="d-block text-muted">
              Contact us and we’ll get back to you as soon as possible.
            </small>
          </div>
          {/* end of question-us wrap */}
        </div>
      </div>
    </div>
  </section>
  {/* end of privacy-policy */}
        </div>
    )
}

export default privacy
