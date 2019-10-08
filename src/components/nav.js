import React from "react"
import { Link } from "gatsby"

import Logotype from "./logotype"

import componentStyles from './nav.module.scss'

const Nav = () => {
    return (
      <nav className={componentStyles.bar}>
          <div style={{"width": "40%", "min-width": "300px"}}>
            <Logotype />
          </div>

          <div className={componentStyles.hamburger}>
            <span>&#9776;</span>
          </div>

          <div className={componentStyles.links}>
            <Link to="/" activeClassName={componentStyles.active}>Home</Link>
            <Link to="/about" activeClassName={componentStyles.active}>About</Link>
            <Link to="/location" activeClassName={componentStyles.active}>Location</Link>
            <Link to="/speakers" activeClassName={componentStyles.active}>Speakers</Link>
            <Link to="/schedule" activeClassName={componentStyles.active}>Schedule</Link>
            <Link to="/archives" activeClassName={componentStyles.active}>Archives</Link>
          </div>
      </nav>
    )
}

export default Nav
