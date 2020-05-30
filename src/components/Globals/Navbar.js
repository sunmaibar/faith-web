import React, { Component } from "react"
import { Link } from "gatsby"
import { FaFacebookSquare } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      { id: 1, path: "/", text: "首頁" },
      { id: 2, path: "/about", text: "關於" },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="nav-brand brand-logo">
          國際閒妻涼母
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link">
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item ml-sm-5">
              <a
                href="https://www.facebook.com/groups/1889224148060152"
                target="__blank"
              >
                <FaFacebookSquare className="facebook-logo" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
