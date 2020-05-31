import React from "react"
import { Link, graphql } from "gatsby"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import FeaturedProduct from "../components/Home/FeaturedProduct"
import Contant from "../components/Home/Contant"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="購買商品-請由FB粉絲團下訂"
      styleClass="default-background"
    />
    <Info />
    <FeaturedProduct />
    <Menu items={data.menu} />
    <Contant />
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
            fixed(width: 100, height: 100) {
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
