

/*
There are 3 phases in the React Component LifeCycle


Mounting Phase
Updating Phase
Unmounting Phase

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

1. No dependency passed:

useEffect(() => {
  //Runs on every render
});


2. An empty array:

useEffect(() => {
  //Runs only on the first render
}, []);


3. Props or state values:

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state])

*/


import React, { useEffect } from 'react'
function Life_img1() {

    // when component load then this function auto call 
    useEffect(()=>{
          console.log('Component birth/Mounting');
    });

    // when component unload then this function auto call 
    useEffect(()=>{
          return(()=>console.log('Component death/Unmounting'));
    },[]);
    
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Khatu_Shyam_Temple.jpg/250px-Khatu_Shyam_Temple.jpg" alt="" />
        </div>
    )
}

export default Life_img1