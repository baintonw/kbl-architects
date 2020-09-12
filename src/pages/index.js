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
           height: `71.5vh`,
           width: `92vw`,
           backgroundImage: `url(${crew3})`,
           backgroundSize: `cover`,
           backgroundPosition: `center`,
           backgroundRepeat: `no-repeat`,
           margin: `0`,
           padding: `.5rem`,
          //  clipPath: `polygon(25% 0, 45% 50%, 25% 100%, 5% 50%)`,

         }}
    >
      <h2 style={{
        // color: `inherit`,
        // textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000`,
        fontWeight: `250`,
        margin: `0rem`
      }}>
        Welcome to KBL
      </h2>
      
    </div>
  </Layout>
)

export default IndexPage
