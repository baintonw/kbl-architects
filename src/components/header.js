import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//Styles
// import "./styles/header.scss"


//Images
import logo from "../images/kbl-logo.png"

const Header = ({ siteTitle }) => (

  <header
    className="header"
    style={{
      // borderBottom: `1px solid black`,
      // background: `inherit`,
      // backgroundColor: `lightgreen`,
      marginBottom: `.75rem`,
    
    }}
  >
    <div className="header-container"
      style={{
        // margin: `0 auto`,
        maxWidth: 1200,
        // padding: `2rem 1.0875rem 4rem 1.0875rem`,
        padding: `.5rem 0 0 1rem`,
        display: `flex`,
        // alignItems: `flex-end`,
      }}
    >
      <Link to="/">
        <div className="logo" style={{
          // border: `1px solid black`,
          width: `12rem`,
          height: `10rem`,
          marginLeft: `2rem`,
          // marginBottom: `1.5rem`,
          backgroundSize: `12rem`,
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
          <Link to="/projects"
                activeStyle={{
                  color: `hotpink`,
                }}
          >
            <li className="nav-item" 
                style={{
                  margin: `0`,
                }}
                activeStyle={{
                  color: `hotpink`,
                }}>
              Projects
            </li>
          </Link>
          <Link to="/about"
                activeStyle={{
                  color: `hotpink`,
                }}
          >
            <li className="nav-item" 
                style={{
                  margin: `0`,
                }}
                >
                About
            </li>
          </Link>
          <Link to="/contact"
                activeStyle={{
                  color: `hotpink`,
                }}
          >
            <li className="nav-item" 
                style={{
                  margin: `0`,
                }}
                >
                Contact
            </li>
          </Link>
          
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
