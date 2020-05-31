import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"
import { Link } from "gatsby"
// import { node } from "prop-types"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["全部", ...categories]
  return categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      productItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }
  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "全部") {
      this.setState(() => {
        return { productItems: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { productItems: items }
      })
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="好物嚴選" />
            {/* categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow m-3"
                      onClick={() => this.handleItems(category)}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            {/* iteems */}
            <div className="row ">
              {this.state.productItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.picture.fixed} />
                    </div>
                    {/* item content */}
                    <div className="flex-grow-1 px-3">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0 py-3 text-yellow">
                        <small>${node.price}</small>
                      </h6>
                      <Link to={`/products/${node.slug}`}>更多細節</Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="好物嚴選" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center">
                <h3>目前沒有任何商品</h3>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
