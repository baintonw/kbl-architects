import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//Images
import logo from "./kbl-logo.png"

const Header = ({ siteTitle }) => (

  <header
    style={{
      border: `1px solid black`,
      background: `inherit`,
      backgroundColor: `lightgreen`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        // margin: `0 auto`,
        maxWidth: 960,
        padding: `2rem 1.0875rem 4rem 1.0875rem`,
      }}
    >
      <div className="logo" style={{
        border: `1px solid black`,
        width: `15rem`,
        height: `12rem`,
        backgroundSize: `15rem`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundImage: `url(${logo})`,

      }}>

      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
