
/*
Using the state Object
Refer to the state object anywhere in the component by using the 

constructor(){
    super();
    this.state = {
            name: "Rajesh Nagar",
    }
}
print : {this.state.name}

Changing the state Object
To change a value in the state object, use the this.setState() method.

this.setState({color: "blue"})

*/



import React, { Component } from 'react'
import Image_state from '../Func_state/Image_state';

export class State_class extends Component {

    constructor(){
        super();
        this.state={
            name:"Akash nagar",
            number:1,
            uname:"KGF 1",
            isImage:true
        }
    }


  render() {
    return (
      <div className='container mt-5'>
       
        <button onClick={() => this.setState({ name: "Prakash Nagar" })}>Change</button>
        <h1>{this.state.name}</h1>

        <hr />

        <button onClick={() => this.setState({ number: this.state.number+1 })}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={() => this.setState({ number: this.state.number-1 })}>-</button>

        <hr />


        <button onClick={() => this.setState({ isImage:false})}>Hide</button>
        <button onClick={() => this.setState({ isImage:true})}>Show</button>
        <button onClick={() => this.setState({ isImage:!this.state.isImage})}>Hide/Show</button>

        {
            this.state.isImage? <Image_state/> : null
        }

    </div>
    )
  }
}

export default State_class