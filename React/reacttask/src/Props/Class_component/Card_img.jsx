import React, { Component } from 'react'

export class Card_img extends Component {

    render() {
        return (
            <div className="col-md-3 p-3">
                <div className="card" style={{ width: '100%' }}>
                    <img className="card-img-top" src={this.props.img} height="250px" alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title}</h4>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card_img

