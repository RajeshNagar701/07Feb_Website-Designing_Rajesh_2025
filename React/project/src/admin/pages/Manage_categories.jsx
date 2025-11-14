import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Manage_categories() {

    useEffect(() => {
        fetch_cate();
    }, []);

    const [data, setData] = useState([]);

    const fetch_cate = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data)
    }

     const deleteHandel = async (id) => {
        console.log(id);
        const res = await axios.delete(`http://localhost:3000/categories/${id}`);
        fetch_cate();
    }
    

    return (
        <div className="container mt-5 p-5">
            <h2 className='mt-5 mb-5 text-center'>Manage Categories</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Categories Name</th>
                        <th>Categories Image</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((value, index, arr) => {
                            return (
                                <tr>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.image}</td>
                                    <td className='text-center'>
                                        <button className='btn btn-primary me-1'>Edit</button>
                                        <button className='btn btn-danger'  onClick={()=>deleteHandel(value.id)}>Delete</button>
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

export default Manage_categories