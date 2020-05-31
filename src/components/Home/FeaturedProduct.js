import React from "react"
import FeaturedSingle from "./FeaturedSingle"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"
import BackgroundSection from "../Globals/BackgroundSection"

const getProducts = graphql`
  {
    featuredProduct: allContentfulProducts(filter: { feature: { eq: true } }) {
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
            fixed(height: 200) {
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
export default function FeaturedProduct() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5 featured-section">
            <div className="container">
              <Title title="熱銷商品" />
              <div className="row">
                {data.featuredProduct.edges.map(({ node: product }) => {
                  return <FeaturedSingle key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
