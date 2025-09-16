/*

Sass is a CSS pre-processor.
Sass (Syntactically Awesome Stylesheets) is a CSS preprocessor 
that extends CSS by adding features like 

variables, 
nesting,
mixins, 
and more, making it easier to write and maintain stylesheets. 

Sass files are executed on the server and sends CSS to the browser.

npm i sass

Create a Sass file : .scss

*/





import React from 'react'

import './sassstyle.scss' // IMPORT SASSCSS



function Main_Sass() {
    return (
        <div>
            <h1 className='mysass'>Hi i am SASS</h1>
            <hr />
            <nav>
                <ul>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">SASS</a></li>
                </ul>
            </nav>

            <h1></h1>
            <h1 className='myproperties'>Hi i am SASS nested properties</h1>
            <h1 className='myproperties1'>Hi i am SASS nested properties</h1>

            <hr />

            <button className='button-red'>Red</button>
            <button className='button-green'>Green</button>
            <button className='button-blue'>Blue</button>
            <button className='button-purple'>Blue</button>
            <button className='button-orange'>Blue</button>

        </div>
    )
}

export default Main_Sass