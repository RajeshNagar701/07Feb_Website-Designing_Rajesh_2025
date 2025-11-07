import React from 'react'

function Manage_contacts() {
    return (
        <div className="container mt-5 p-5">
            <h2 className='mt-5 mb-5 text-center'>Manage Contacts</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Coment</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Raj</td>
                        <td>Raj@gmail.com</td>
                        <td>Addresss pla</td>
                        <td className='text-center'>
                            <button className='btn btn-primary me-1'>Edit</button>
                            <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    )
}

export default Manage_contacts