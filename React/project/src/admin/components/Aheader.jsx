import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Aheader({ title }) {
  return (
    <div>

      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <NavLink to="/" className="logo">
                  <img src="website/assets/images/logo.png" alt style={{ width: 158 }} />
                </NavLink>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li><NavLink to="/dashboard" >Dashboard</NavLink></li>

                  <li>
                    <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">Categorries</a>
                    <ul class="dropdown-menu">
                      <li><Link class="dropdown-item text-dark" to="/add_categories">Add Categories</Link></li>
                      <li><Link class="dropdown-item text-dark" to="/manage_categories">Manage Categories</Link></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">Product</a>
                    <ul class="dropdown-menu">
                      <li><Link class="dropdown-item text-dark" to="/add_products">Add Product</Link></li>
                      <li><Link class="dropdown-item text-dark" to="/manage_products">Manage Product</Link></li>
                    </ul>
                  </li>
                  <li><NavLink to="/manage_contacts">Contact Us</NavLink></li>
                  <li><NavLink to="/manage_customers">Customers</NavLink></li>
                  <li><NavLink to="#">Logout</NavLink></li>

                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>{title}</h3>
              <span className="breadcrumb"><a href="#">Home</a>  &gt; {title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aheader