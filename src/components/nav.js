import React from "react"
import { Link } from "gatsby"

import componentStyles from './nav.module.scss'

class Nav extends React.Component {
  render() {
    return (
      <nav className={componentStyles.bar}>
          <h2>BODIES, BORDERS, FIELDS</h2>
          <div className={componentStyles.links}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/speakers">Speakers</Link>
          </div>
      </nav>
    )
  }
}

export default Nav
