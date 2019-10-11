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
            margin: `2rem auto`,
            maxWidth: rhythm(30),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >        
          <main>{children}</main>

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
      </>
    )
  }
}

export default LandingLayout
