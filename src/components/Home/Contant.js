import React from "react"
import Title from "../Globals/Title"

export default function Contant() {
  return (
    <section className="contact py-5">
      <Title title="聯絡涼母" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/xpzypvnr" method="POST">
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">姓名</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="請輸入姓名 "
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="請輸入Email "
              />
            </div>
            {/* description  */}
            <div className="form-group">
              <label htmlFor="description">描述</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="留言給涼母訊息"
              ></textarea>
            </div>
            {/* submit */}
            <button type="submit" className="btn btn-yellow btn-block mt-5">
              提交
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
