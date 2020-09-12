/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="pageContent"
        style={{
          margin: `0 auto`,
          // backgroundColor: `honeydew`,
          maxWidth: 1200,
          // border: `1px solid black`,
          padding: `0rem 1rem 0rem 0`,
          // padding: `1rem`,
          // overflow: `hidden`,
          maxWidth: `92%`,

        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, 
          {` `}
          <a href="#">Will Bainton</a>
        </footer>
      </div>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
