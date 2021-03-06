import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">React</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" activeClassName="active">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link" activeClassName="active">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/price" className="nav-link" activeClassName="active">Pricing</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
