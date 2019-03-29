import React from "react"
import Icon from "./icon"

import config from "../config"

import "./userLinks.scss"

const userLinks = ({ userLinks }) => (
  <address>
    <h3>Want to see more of my projects?</h3>
    <section className="social-links">
      {Object.entries(userLinks).map(userLink => {
        const name = userLink[0];
        const link = userLink[1];

        return <a className="social-link" key={name} href={link} target="_blank" rel="noopener noreferrer"><Icon file="social-icons" name={name} /></a>
      })}
    </section>
  </address>
)

userLinks.defaultProps = {
  userLinks: config.socialLinks
}

export default userLinks;
