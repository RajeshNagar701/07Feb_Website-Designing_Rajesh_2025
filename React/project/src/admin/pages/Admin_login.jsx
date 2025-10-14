import React from 'react'

function Admin_login() {
  return (
    <div id="main-wrapper">
      <div className="navbar navbar-inverse" role="navigation">
        <div className="navbar-header">
          <div className="logo"><h1>Dashboard - Admin Template</h1></div>
        </div>
      </div>
      <div className="template-page-wrapper">
        <form className="form-horizontal templatemo-signin-form" role="form" action="index.html" method="get">
          <div className="form-group">
            <div className="col-md-12">
              <label htmlFor="username" className="col-sm-2 control-label">Username</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="username" placeholder="Username" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12">
              <label htmlFor="password" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12">
              <div className="col-sm-offset-2 col-sm-10">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12">
              <div className="col-sm-offset-2 col-sm-10">
                <input type="submit" defaultValue="Sign in" className="btn btn-default" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Admin_login