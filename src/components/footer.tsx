import React from "react"

const Footer = (props: {siteTitle: string}) => (
  <footer
    className="footer font-title"
    style={{flexShrink: 0}}
  >
    <div className="container-tight">
      <h3 style={{textTransform: `lowercase`}}>
        {props.siteTitle}
      </h3>
      <p>
        an initiative based out of <a href="https://uclaacm.com" target="_blank" rel="noopener noreferrer">acm @ ucla</a>.
        <br />
        looking to join us? hit us up!
      </p>
    </div>
  </footer>
)

export default Footer
