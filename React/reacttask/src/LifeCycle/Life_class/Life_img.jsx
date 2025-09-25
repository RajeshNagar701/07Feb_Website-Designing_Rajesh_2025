/*

Lifecycle of Components
Each component in React has a lifecycle which you can monitor and
 manipulate during its three main phases.

The three phases are: 

Mounting,   => componentDidMount() => The componentDidMount() method is called after the component is rendered.
Updating => componentDidUpdate() => The componentDidUpdate method is called after the component is updated in the DOM. 
Unmounting => componentWillUnmount() => The componentWillUnmount method is called when the component is about to be removed from the DOM.


*/



import React, { Component } from 'react'

export class Life_img extends Component {

    // when component load then this function auto call 
    componentDidMount(){
        console.log('Component birth/Mounting');
     }

     // when component unload then this function auto call 
    componentWillUnmount(){
        console.log('Component death/Unmounting');
    } 

    render() {
        return (
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Khatu_Shyam_Temple.jpg/250px-Khatu_Shyam_Temple.jpg" alt="" />
            </div>
        )
    }
}

export default Life_img