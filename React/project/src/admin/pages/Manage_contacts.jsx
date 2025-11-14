
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Manage_contacts() {

     useEffect(() => {
        fetch_contact();
    }, []);

    const [data, setData] = useState([]);

    const fetch_contact = async () => {
        const res = await axios.get(`http://localhost:3000/contact`);
        console.log(res.data);
        setData(res.data)
    }

    const deleteHandel = async (id) => {
        console.log(id);
        const res = await axios.delete(`http://localhost:3000/contact/${id}`);
        fetch_contact();
    }

    return (
        <div className="container mt-5 p-5">
            <h2 className='mt-5 mb-5 text-center'>Manage Contacts</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Coment</th>
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
                                    <td>{value.email}</td>
                                    <td>{value.sub}</td>
                                    <td>{value.msg}</td>
                                    <td className='text-center'>
                                        <button className='btn btn-primary me-1'>Edit</button>
                                        <button className='btn btn-danger' onClick={()=>deleteHandel(value.id)}>Delete</button>
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

export default Manage_contacts