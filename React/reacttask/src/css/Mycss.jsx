import React from 'react'
import './style.css';  // import css

function Mycss() {

    const mystyle={ backgroundColor:"green",color:"white"}

  return (
    <div>
        <h1 style={{ color: 'red',backgroundColor:"pink" }}>Hi inline css</h1>

        <h1 style={mystyle}>Hello internal css</h1>    

        <div className='box'>Hello external css</div>    
    </div>
  )
}

export default Mycss