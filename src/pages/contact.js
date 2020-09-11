import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact-page">
      <div className="address">
        <p>347 W 36TH ST | #302</p>
        <p>NEW YORK NY 10018</p>
      </div>
      <div className="contact">
        <p>212.290.8616</p>
        <p>email@gmail.com</p>
      </div>
    </div>
  </Layout>
)

export default ContactPage
