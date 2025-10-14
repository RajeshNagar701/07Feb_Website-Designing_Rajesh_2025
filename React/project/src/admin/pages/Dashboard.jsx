import React from 'react'
import Afooter from '../components/Afooter'
import Aheader from '../components/Aheader'

function Dashboard() {
  return (
    <div>
      <div className="navbar navbar-inverse" role="navigation">
        <div className="navbar-header">
          <div className="logo"><h1>Dashboard - Admin Template</h1></div>
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
      </div>
      <div className="template-page-wrapper">

        <Aheader />

        <div className="templatemo-content-wrapper">
          <div className="templatemo-content">
            <ol className="breadcrumb">
              <li><a href="index.html">Admin Panel</a></li>
              <li><a href="#">Dashboard</a></li>
              <li className="active">Overview</li>
              <li><a href="sign-in.html">Sign In Form</a></li>
            </ol>
            <h1>Dashboard</h1>
            <p>Dashboard is free admin template for everyone. Credits go to <a href="http://chartjs.org">Chart JS</a>, <a href="http://getbootstrap.com">Bootstrap</a>, and <a href="http://jqvmap.com">JQVMap</a>. templatemo provides <a href="#">free website templates</a> that can be used for any purpose. Morbi id nisi enim. Ut congue interdum pharetra facilisi. Aenean consectetur pellentesque mauris nec ornare. Nam tortor just, condimentum.</p>
          </div>

        </div>
        <Afooter />
      </div>
    </div>

  )
}

export default Dashboard