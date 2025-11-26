import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Shop_details() {


     useEffect(() => {
        fetch_product()
    },[]);

    const {id}=useParams();

    const [data, setData] = useState({});
    const fetch_product = async () => {
        const res = await axios.get(`http://localhost:3000/products/${id}`);
        setData(res.data);
        console.log(res.data);
    }
    return (
        <div>
            <div className="single-product section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-image">
                                <img src={data.image} width="100%" alt />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <h4>{data.name}</h4>
                            <span className="price">${data.price}</span>
                            <p>{data.description}</p>
                            <form id="qty" action="#">
                                <input type="qty" className="form-control" id={1} aria-describedby="quantity" placeholder={1} />
                                <button type="submit"><i className="fa fa-shopping-bag" /> ADD TO CART</button>
                            </form>
                            <ul>
                                <li><span>Game ID:</span> COD MMII</li>
                                <li><span>Genre:</span> <a href="#">Action</a>, <a href="#">Team</a>, <a href="#">Single</a></li>
                                <li><span>Multi-tags:</span> <a href="#">War</a>, <a href="#">Battle</a>, <a href="#">Royal</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <div className="sep" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Shop_details