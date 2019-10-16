import React from "react"
import { Link } from "gatsby"

import Logotype from "./logotype"

import componentStyles from './nav.module.scss'

const Nav = () => {

    const revealLinks = () => {
      document.querySelector("#navLinks").classList.add(componentStyles.linksVisible)
    }

    const hideLinks = () => {
      document.querySelector("#navLinks").classList.remove(componentStyles.linksVisible)
    }

    return (
      <nav className={componentStyles.bar}>
          <div style={{width: "40%", minWidth: "300px"}}>
            <Logotype />
          </div>

          <div onClick={revealLinks} className={componentStyles.hamburger}>
            <span>&#9776;</span>
          </div>

          <div id="navLinks" className={componentStyles.links}>
            <div className={componentStyles.closeBtn} onClick={hideLinks}>X Close</div>
            <Link to="/" activeClassName={componentStyles.active}>Home</Link>
            <Link to="/about" activeClassName={componentStyles.active}>About</Link>
            <Link to="/venues" activeClassName={componentStyles.active}>Venues</Link>
            <Link to="/contributors" activeClassName={componentStyles.active}>Contributors</Link>
            <Link to="/schedule" activeClassName={componentStyles.active}>Schedule</Link>
            <Link to="/resources" activeClassName={componentStyles.active}>Resources</Link>
          </div>
      </nav>
    )
}

export default Nav
