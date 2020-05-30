import React from "react"
import { Link, graphql } from "gatsby"
import Info from "../components/Home/Info"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="不定期限時代購商品"
      styleClass="about-background"
    />
    <Info />
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "about-fashion.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default AboutPage
