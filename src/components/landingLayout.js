import React from "react"
import {Link} from "gatsby"

import { rhythm } from "../utils/typography"

class LandingLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <div
          style={{
            margin: `1rem auto`,
            maxWidth: rhythm(30),
          }}
        >        
          <main style={{paddingBottom: `10rem`}}>{children}</main>

          <div style={{
            position: `fixed`, 
            backgroundColor: `white`,
            bottom: `0`, 
            right: `0`, 
            width: `100%`,
            padding: `.5rem`,
            borderTop: `2px dotted #008f4e`}}>
            <Link 
              to="/about"
              style={{
                display: `block`,
                width: `100%`,
                margin: `0 auto`,
                textDecoration: `none`,
                padding: `1rem 2rem`
              }}>
              <p style={{fontSize: `1.5rem`, textAlign: `center`, marginBottom: `0rem`}}>ENTER <br/> &#x25BC;</p>
            </Link>

            <footer>
              © {new Date().getFullYear()} Trinity Square Video, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
          

        </div>
      </>
    )
  }
}

export default LandingLayout
