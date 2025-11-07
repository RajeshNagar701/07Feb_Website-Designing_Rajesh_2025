import React from 'react'
import { NavLink } from 'react-router-dom'

function Admin_login() {
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
              <h3>Admin Login</h3>
              <span className="breadcrumb"><a href="#">Admin Login</a>  &gt; </span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-page section">
        <div className="container">
          <div className="row">
            
            <div className="offset-lg-3 col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-12">
                    <form id="contact-form" action method="post">
                      <div className="row">
                       <h3 className=' text-center mb-5'>Admin Login</h3>
                        <div className="col-lg-12">
                          <fieldset>
                            <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <input type="password" name="password" id="password" placeholder="Password..." autoComplete="on" />
                          </fieldset>
                        </div>
                     
                        <div className="col-lg-12">
                          <fieldset>
                            <button type="submit" id="form-submit" className="orange-button">Login Here</button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Admin_login