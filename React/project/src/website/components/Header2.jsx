import React from 'react'
import { NavLink } from 'react-router-dom'

function Header2({title}) {
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
                                    <li><NavLink to="/" >Home</NavLink></li>
                                    <li><NavLink to="/shop">Our Shop</NavLink></li>
                                    <li><NavLink to="/shop-details">Product Details</NavLink></li>
                                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                                    <li><NavLink to="#">Sign In</NavLink></li>
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

export default Header2