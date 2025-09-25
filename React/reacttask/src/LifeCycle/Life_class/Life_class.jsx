import React, { Component } from 'react'
import Life_img from './Life_img';

export class Life_class extends Component {

    constructor() {
        super();
        this.state = {
            number: 1,
            isImage: true
        }
    }
    
     // when component update then this function auto call 
    componentDidUpdate(){
        console.log('Component update/Unmounting');
    } 
  

    render() {
        return (
            <div className='container mt-5'>
                <button onClick={() => this.setState({ number: this.state.number + 1 })}>+</button>
                <h1>{this.state.number}</h1>
                <button onClick={() => this.setState({ number: this.state.number - 1 })}>-</button>

                <hr />


                <button onClick={() => this.setState({ isImage: false })}>Hide</button>
                <button onClick={() => this.setState({ isImage: true })}>Show</button>
                <button onClick={() => this.setState({ isImage: !this.state.isImage })}>Hide/Show</button>

                {
                    this.state.isImage ? <Life_img/> : null
                }


            </div>
        )
    }
}

export default Life_class