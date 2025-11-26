import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Shop_view() {

    const redirect=useNavigate();
    useEffect(() => {
        fetch_product()
    },[]);

    const {id}=useParams();

    const [data, setData] = useState([]);
    const fetch_product = async () => {
        const res = await axios.get(`http://localhost:3000/products?cate_id=${id}`);
        setData(res.data);
        console.log(res.data);
    }


    return (
        <div>
            <div className="section categories related-games">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h6>Action</h6>
                                <h2>Games Products</h2>
                            </div>
                        </div>
                        {
                            data.map((value) => {
                                return (
                                    <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                                        <div className="item">
                                            <div className="thumb">
                                                <a href={void(0)} onClick={() => redirect(`/shop-details/${value.id}`)}><img src={value.image} width="100%" height="200px" alt /></a>
                                                <span className="price mt-5">${value.price}</span>
                                            </div>
                                            <div className="down-content">
                                                <span className="category">{value.cate_id}</span>
                                                <h4>{value.name}</h4>
                                                <a href={void(0)} onClick={() => redirect(`/shop-details/${value.id}`)}><i className="fa fa-shopping-bag" /></a>
                                            </div>
                                        </div>
                                    </div>


                                )
                            })
                        }


                    </div>
                </div>
            </div>

        </div>

    )
}

export default Shop_view