import React, { useEffect, useState } from 'react'
import Life_img1 from './Life_img1'

function Life_func() {


    const [data, setData] = useState({
        number: 1,
        isImage: true
    })

     // when component update then this function auto call 
    useEffect(()=>{
        console.log('Component update/Unmounting');
    },[data.number]);

    return (
        <div className='container mt-5'>
            <button onClick={() => setData({ ...data, number: data.number + 1 })}>+</button>
            <h1>{data.number}</h1>
            <button onClick={() => setData({ ...data, number: data.number - 1 })}>-</button>

            <hr />
            <button onClick={() => setData({ ...data, isImage: false })}>Hide</button>
            <button onClick={() => setData({ ...data, isImage: true })}>Show</button>
            <button onClick={() => setData({ ...data, isImage: !data.isImage })}>Hide/Toggle</button>
            {
                data.isImage ? <Life_img1 /> : null
            }
        </div>
    )
}

export default Life_func