import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Add_products() {

      useEffect(() => {
        fetch_cate();
    }, []);

    const [data, setData] = useState([]);

    const fetch_cate = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data)
    }

    // insert code
    const [obj_data,setObj_data]=useState({
        id:"",
        cate_id:"",
        name:"",
        image:"",
        description:"",
        price:""
    });

    const changeHandel=(e)=>{

        setObj_data({...obj_data,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(obj_data);
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/products`,obj_data);
        setObj_data({...obj_data,id:"",cate_id:"",name:"",price:"",description:"",image:""});
        console.log(res);
    }

    return (
            
        <div className="container mt-5 p-5">
            <h2 className='mt-5 mb-5 text-center'>Add Product</h2>
            <form action="" method="post" onSubmit={submitHandel}>
                <div className="mb-3 mt-3">
                    <select className="form-control" name="cate_id" value={obj_data.cate_id} onChange={changeHandel} >
                        <option value="">-------  Select Categories ------- </option>
                        {
                        data.map((value, index, arr) => {
                            return (
                                <option value={value.id}>
                                        {value.name}
                                </option>
                            )
                        })
                    }

                    </select>
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Product Name:</label>
                    <input type="text" value={obj_data.name} onChange={changeHandel} className="form-control" placeholder="Enter Product Name" name="name" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Product Price:</label>
                    <input type="number" value={obj_data.price} onChange={changeHandel} className="form-control" placeholder="Enter Product Price" name="price" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Categories Image:</label>
                    <input type="url" value={obj_data.image} onChange={changeHandel} className="form-control" id="file" placeholder="Upload Product Image" name="image" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Product Description:</label>
                    <textarea className="form-control"  value={obj_data.description} onChange={changeHandel} placeholder="Enter Product Description" name="description" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>



    )
}

export default Add_products