import axios from 'axios';
import React, { useState } from 'react'

function Add_categories() {

    const [obj_data,setData]=useState({
        id:"",
        name:"",
        image:""
    });

    const changeHandel=(e)=>{

        setData({...obj_data,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(obj_data);
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/categories`,obj_data);
        setData({...obj_data,id:"",name:"",image:""});
        console.log(res);
    }

    return (

        <div className="container mt-5 p-5">
            <h2 className='mt-5 mb-5 text-center'>Add Categories</h2>
            <form  method="post" onSubmit={submitHandel}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Categories Name:</label>
                    <input type="text" value={obj_data.name} onChange={changeHandel} className="form-control" id="email" placeholder="Enter Categories Name" name="name" required />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Categories Image:</label>
                    <input type="url" value={obj_data.image} onChange={changeHandel} className="form-control" id="file" placeholder="Upload Categories Image" name="image" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>



    )
}

export default Add_categories