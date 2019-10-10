import React from "react"

import { rhythm } from "../utils/typography"
import Nav from "./nav"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`

    return (
      <>
        <Nav />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(30),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >        
          <main>{children}</main>
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

export default Layout
