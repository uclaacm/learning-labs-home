import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="grid-2r">
      <div>
        <br />
        <h3>interactive &amp; engaging computer science education done right.</h3>
        <p>acm learning labs is a set of <strong>bite-sized virtual lessons</strong> focused on different aspects of <strong>computer science</strong>.</p>
        <p>our modules emphasize <strong>active learning</strong>, grounding <strong>high-level topics</strong> with <strong>interactive demos</strong>.</p>
      </div>
      <div>

      </div>
    </div>
    
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
