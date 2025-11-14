import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Manage_customers() {

    useEffect(() => {
        fetc_cust()
    }, []);
    const [data, setData] = useState([]);
    const fetc_cust = async () => {
        const res = await axios.get(`http://localhost:3000/customers`);
        setData(res.data);
    }
    const deleteHandel = async (id) => {
        console.log(id);
        const res = await axios.delete(`http://localhost:3000/customers/${id}`);
        fetc_cust();
    }

    return (
        <div className="container mt-5 p-5">
            <h2 className='mt-5 mb-5 text-center'>Manage Customer</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Mobile</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((value) => {
                            return (
                                <tr>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.password}</td>
                                    <td>{value.mobile}</td>
                                    <td className='text-center'>
                                        <button className='btn btn-primary me-1'>Edit</button>
                                        <button className='btn btn-danger me-1'  onClick={()=>deleteHandel(value.id)}>Delete</button>
                                        <button className='btn btn-success me-1'>{value.status}</button>
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

export default Manage_customers