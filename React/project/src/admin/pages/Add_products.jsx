import React from 'react'

function Add_products() {
    return (

        <div className="container mt-5 p-5">
            <h2 className='mt-5 mb-5 text-center'>Add Product</h2>
            <form action="" method="post">
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Categories Name:</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter Categories Name" name="cate-name" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Categories Image:</label>
                    <input type="file" className="form-control" id="file" placeholder="Upload Categories Image" name="cate-name" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>



    )
}

export default Add_products