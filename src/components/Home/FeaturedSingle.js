import React from "react"
import Img from "gatsby-image"

export default function FeaturedSingle({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3 ">
      <div className="card " style={{ minHeight: "100%" }}>
        <div className="img-center">
          <Img fixed={product.picture.fixed} className="card-img-top" />
        </div>

        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>${product.price}</h6>
          <button className="btn btn-yellow mt-3">馬上來看看</button>
        </div>
      </div>
    </div>
  )
}
