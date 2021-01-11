import { Link } from "gatsby"
import React from "react"

const Header = (props: {siteTitle: string}) => (
  <header className="header">
    <div className="container-tight" style={{
      paddingTop: `1rem`,
      paddingBottom: `1rem`,
    }}>
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          className="color-lightblack"
          style={{
            textDecoration: `none`,
            textTransform: `lowercase`,
          }}
        >
          {props.siteTitle}
        </Link>
      </h3>
    </div>
  </header>
)

export default Header
