import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import logo from "../images/kbl-logo.png"
import crew3 from "../images/crew-3.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-content"
         style={{
           height: `72vh`,
           width: `100vw`,
          //  backgroundImage: `url(${crew3})`,
          //  backgroundSize: `cover`,
          //  backgroundPosition: `center`,
          //  backgroundRepeat: `no-repeat`,
          //  margin: `0`,
         }}
    >
      <h2>Welcome to KBL</h2>
      <div className="home-hero">
          <p>Hello there ladies and gentlemen</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
