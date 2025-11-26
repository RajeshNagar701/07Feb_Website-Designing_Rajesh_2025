import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Manage_products() {
    useEffect(() => {
        fetch_product()
    });
    const [data, setData] = useState([]);
    const fetch_product = async () => {
        const res = await axios.get(`http://localhost:3000/products`);
        setData(res.data);
    }

    const deleteHandel = async (id) => {
        console.log(id);
        const res = await axios.delete(`http://localhost:3000/products/${id}`);
        fetch_product();
    }
    
    return (
        <div className="container mt-5 p-5">
            <h2 className='mt-5 mb-5 text-center'>Manage Product</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Cate ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        data.map((value) => {
                            return (
                                <tr>
                                    <td>{value.id}</td>
                                    <td>{value.cate_id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.price}</td>
                                    <td>{value.description}</td>
                                     <td width="10%"><img src={value.image} alt=""/></td>
                                    <td className='text-center'>
                                        <button className='btn btn-primary me-1'>Edit</button>
                                        <button className='btn btn-danger me-1' onClick={()=>deleteHandel(value.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                   
                   
                </tbody>
            </table>
        </div>
    )
}

export default Manage_products