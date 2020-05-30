import React from "react"
import { Link, graphql } from "gatsby"
import Info from "../components/Home/Info"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="絕無山寨仿冒品"
      styleClass="default-background"
    />
    <Info />
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default IndexPage
