import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//Images
import logo from "../images/kbl-logo.png"

const Header = ({ siteTitle }) => (

  <header
    style={{
      borderBottom: `1px solid black`,
      background: `inherit`,
      // backgroundColor: `lightgreen`,
      marginBottom: `1.45rem`,
    
    }}
  >
    <div className="header-container"
      style={{
        // margin: `0 auto`,
        maxWidth: 1200,
        // padding: `2rem 1.0875rem 4rem 1.0875rem`,
        padding: `2rem 0 .2rem 2rem`,
        display: `flex`,
        // alignItems: `flex-end`,
      }}
    >
      <Link to="/">
        <div className="logo" style={{
          // border: `1px solid black`,
          width: `15rem`,
          height: `12rem`,
          marginBottom: `1.5rem`,
          backgroundSize: `15rem`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          backgroundImage: `url(${logo})`,
        }}>
        </div>
      </Link>
      
      <nav 
        className="nav-container"
        style={{
          // alignSelf: `end`,
          flex: `1 1 90rem`,
          // backgroundColor: `lightgreen`,
          display: `flex`,
          alignItems: `flex-end`,
        }}
      >
        <ul className="nav-bar" style={{
          flex: `1 1 100%`,
          display: `flex`,
          alignItems: `flex-end`,
          listStyle: `none`,
          // border: `1px solid black`,
          justifyContent: `space-around`,
          fontSize: `1.5rem`,
          // transform: `translateY(1.75rem)`,
          margin: `0`,
        }}>
          <Link>
            <li className="nav-item" 
                style={{
                  margin: `0`,
                }}>
              Projects
            </li>
          </Link>
          
          <li className="nav-item" 
              style={{
                margin: `0`,
              }}>
              About
          </li>
          <li className="nav-item" 
              style={{
                margin: `0`,
              }}>
              Contact
          </li>
        </ul>
      </nav>
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
