import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="grid-2r">
      <div>
        <h1>
          interactive &amp; engaging
          <br />
          computer science education.
          <br />
          done right.
        </h1>
      </div>
      <div>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </div>
    </div>
    <p>
      acm learning labs are a set of <strong>bite-sized virtual lessons</strong> focused on different aspects of <strong>computer science</strong>.
    </p>
    <p>
      our modules emphasize <strong>active learning</strong>, grounding high-level topics with <strong>interactive demos</strong>.
    </p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
