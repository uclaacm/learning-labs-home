import React from "react"
import { Link, graphql } from "gatsby"
import Preview from "./Preview"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/explore.css"
import { isLabeledStatement } from "typescript"

import Img from 'gatsby-image'

const cybersecurityLabs = [
  {
    labName:"cipher salad",
    description:"explore the history of secret messages, and how computers make things trickier",
    audience:"all ages",
    background:"no background",
    color: "#FFB149",
    link: "https://ciphersalad.uclaacm.com",
    image: "cipherSaladImage"
  },
  {
    labName:"passworks",
    description:"what makes a good password? and more importantly, what makes a bad password?",
    audience:"all ages",
    background:"no background",
    color: "#FFB149",
    link: "https://passworks.uclaacm.com"
  },
  {
    labName:"buffer buffet",
    description:"learn about and exploit a trick up every computer hacker's sleeve, and break some stuff.",
    audience:"high school and above",
    background:"some low-level programming experience",
    color: "#FFB149",
  }
];

const machinelearningLabs = [
  {
    labName: "baye's baes",
    description: "learn one of the most important rules in probability, and why it's used almost everywhere",
    audience: "high school and above",
    background: "high school math",
    color: "#5ABBEF"
  },
  {
    labName: "mean about error",
    description: "how do we know when our model is right? wrong? kind of there? and why does it matter?",
    audience: "high school and above",
    background: "basic algebra",
    color: "#5ABBEF",
    link: "https://uclaacm.github.io/getting-mean-about-error/"
  },
  {
    labName: "oops i did it a-GAN",
    description: "can we use computers to trick other computers? and how does that help us?",
    audience: "high school and above",
    background: "idk dude",
    color: "#5ABBEF"
  }
]

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="grid-2r">
      <div className="intro">
        <h1 className="main-title">
          explore.
        </h1>
        <p>
          each of our experiments are split up by the area of computer science they examine.
        </p>
        <p>
          you can explore everything in one track, or try them in whatever order you want:
          <br />
          <strong>pick how you learn best!</strong>
        </p>
        <div>
          <p style={{ display: 'inline-block' }}>
            sort by:
          </p>
          <button style={{ display: 'inline-block' }}></button>
        </div>
      </div>

      <div>
        <div className="introImage">
          <Img 
          fluid={data.exploreMainGraphicImage.childImageSharp.fluid}
          alt= "Intro Image"
          />
        </div>
      </div>

    </div>
    
    <h2 className="cyber-title">
      cybersecurity
    </h2>
    <p>hack or be hacked.</p>

    <div className="cyber-labs">
    {
    cybersecurityLabs.map(lab => {
      return <Preview
        labName={lab.labName}
        description={lab.description}
        audience={lab.audience}
        background={lab.background} 
        color="#FFB149"
      />
    })
    }
    </div>
    
    <br />

    <h2 className="ai-title">
      machine learning
    </h2>
    <p>learn machine learning.</p>

    <div className="ml-labs">
    {
    machinelearningLabs.map(lab => {
      return <Preview
        labName={lab.labName}
        description={lab.description}
        audience={lab.audience}
        background={lab.background} 
        color="#5ABBEF"
      />
    })
    }
    </div>

    <br />
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

export const query = graphql`
  query {
    exploreMainGraphicImage: file(relativePath: {eq: "explore-main-graphic.png"}) {
      id
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
