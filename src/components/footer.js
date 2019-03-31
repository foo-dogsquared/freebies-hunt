import React from "react"

import config from "../config"

import "./footer.scss"

const Footer = ({ className, style }) => {
  return (
    <footer>
      <p>Built with <span role="img" aria-label="">💙</span> by <a href={config.mainSite}>{config.author.name}</a>, I think.</p>
      <p>Freebies Hunt logo was created by me. The rest of the icons belonged to <a href="https://www.freepik.com/">Freepik</a>.</p>
      <p>© {new Date().getFullYear()} Licensed with <a href={config.license.link}>{config.license.name}</a></p>
    </footer>
  )
}

export default Footer;
