import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h2>Contact</h2>
      {/* <p>Welcome to the KBL's landing page</p> */}
    </div>
    <Link to="/projects/">Go to page 2</Link> <br />
  </Layout>
)

export default ContactPage
