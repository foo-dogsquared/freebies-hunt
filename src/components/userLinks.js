import React from "react"
import config from "../config"
import SocialIcon from "./socialIcon"

import "./userLinks.scss"

const userLinks = ({ userLinks }) => (
  <address>
    <h3>Greet the maker through the following links:</h3>
    <section className="social-links">
      {Object.entries(userLinks).map(userLink => {
        const name = userLink[0];
        const link = userLink[1];

        return <a className="social-link" key={name} href={link} target="_blank" rel="noopener noreferrer"><SocialIcon name={name}/></a>
      })}
    </section>
  </address>
)

userLinks.defaultProps = {
  userLinks: config.socialLinks
}

export default userLinks;
