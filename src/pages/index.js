import React from "react"
import { Link, graphql } from "gatsby"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import FeaturedProduct from "../components/Home/FeaturedProduct"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="絕無山寨仿冒品"
      styleClass="default-background"
    />
    <Info />
    <FeaturedProduct />
    <Menu items={data.menu} />
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu: allContentfulProducts(sort: { fields: id }) {
      edges {
        node {
          category
          price
          slug
          title
          id
          feature
          description {
            description
          }
          picture {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed
            }
          }
          url {
            url
          }
        }
      }
      totalCount
    }
  }
`
export default IndexPage
