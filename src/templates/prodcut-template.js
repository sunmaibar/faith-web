import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
const ReactMarkdown = require("react-markdown")

const ComponentName = ({
  data: {
    product: {
      price,
      title,
      picture: { fixed },
      description: { description },
      url: { url },
    },
  },
}) => {
  return (
    <Layout>
      <div className="container single-page">
        <div className="single-title" style={{ textAlign: "center" }}>
          <h3>商品名稱:{title}</h3>
        </div>
        <section className="single-product">
          <article>
            <Image fixed={fixed} alt={title} />
          </article>
          <article>
            <h6>{title}</h6>
            <h3 className="text-yellow">${price}</h3>
            <ReactMarkdown source={description} />

            <div className="single-product-btn-gap">
              <Link to="/">
                <button className="btn btn-yellow">回上一頁</button>
              </Link>
              <a href={url} target="_blank">
                <button className="btn btn-yellow">前往下單</button>
              </a>
            </div>
          </article>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSungleProduct($slug: String) {
    product: contentfulProducts(slug: { eq: $slug }) {
      title
      price
      description {
        description
      }
      picture {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      url {
        url
      }
    }
  }
`

export default ComponentName
