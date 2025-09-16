/*
CSS Modules
Another way of adding styles to your application is to use CSS Modules.
CSS Modules are convenient for components that are placed in separate files.
The CSS inside a module is available only for the component that imported it, 
and you do not have to worry about name conflicts.


Create the CSS module with the .module.css extension, example: my-style.module.css.
import : import A from './mycss1.module.css';

*/


import React from 'react'
// normal css import
import './style1.css'
import './style2.css'

// module css import

import A from './mystyle1.module.css'
import B from './mystyle2.module.css'


function Module_css() {
    return (
        <div className='container mt-5'>
            <div className='bigblue'>box 1</div>
            <div className='bigblue'>box 2</div>

            <hr />

            <div className={A.smallblue}>Module 1</div>
            <div className={B.smallblue}>Module 2</div>
        </div>
    )
}

export default Module_css