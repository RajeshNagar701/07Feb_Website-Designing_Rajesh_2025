
/*

React components has a built-in state object.

The state object is where you store property values that belong to the component.

When the state object changes, the component re-renders.

The React useState Hook allows us to track state in a function component.
Import useState
We initialize our state by calling useState in our function component.
useState accepts an initial state and returns two values:

The current state.
A function that updates the state.

var [name,setName]=usestate("Rajesh nagar");
{name}


var [mydata,setMydata]=usestate({
        id:"1",
        name:"Rajesh nagar",
        age:33,
        mobile:31548799
});

{mydata.name}



*/



import React, { useState } from 'react'
import Image_state from './Image_state';

function State_func() {

 const [name,setName]=useState("Raj nagar");

 const [data,setData]=useState({
    number:1,
    uname:"KGF 1",
    isImage:true
 })


  return (
    <div className='container mt-5'>

        <button onClick={()=>setName("Akash nagar")}>Change</button>
        <h1>{name}</h1>

        <hr />
        <button onClick={()=>setData({...data,uname:"KGF 2"})}>Change</button>
        <h1>{data.uname}</h1>

        <hr />

        <button onClick={()=>setData({...data,number:data.number+1})}>+</button>
        <h1>{data.number}</h1>
        <button onClick={()=>setData({...data,number:data.number-1})}>-</button>

        <hr />
        <button onClick={()=>setData({...data,isImage:false})}>Hide</button>
        <button onClick={()=>setData({...data,isImage:true})}>Show</button>
         <button onClick={()=>setData({...data,isImage:!data.isImage})}>Hide/Toggle</button>
        {
            data.isImage? <Image_state/> : null
        }


    </div>
  )
}

export default State_func