import React from 'react'

function Aheader() {
  return (
    <div className="navbar-collapse collapse templatemo-sidebar">
      <ul className="templatemo-sidebar-menu">
       
        <li className="active"><a href="#"><i className="fa fa-home" />Dashboard</a></li>
        <li className="sub open">
          <a href="">
            <i className="fa fa-database" /> Nested Menu <div className="pull-right"><span className="caret" /></div>
          </a>
          <ul className="templatemo-submenu">
            <li><a href="#">Aenean</a></li>
            
          </ul>
        </li>
  
        <li><a href="tables.html"><i className="fa fa-users" /><span className="badge pull-right">NEW</span>Manage Users</a></li>
      
      </ul>
    </div>
  )
}

export default Aheader