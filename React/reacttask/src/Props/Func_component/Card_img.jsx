import React from 'react'

function Card_img({img,title}) {
    return (
        <div className="col-md-3 p-3">
            <div className="card" style={{ width: '100%' }}>
                <img className="card-img-top" src={img} height="250px" alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>


    )
}

export default Card_img