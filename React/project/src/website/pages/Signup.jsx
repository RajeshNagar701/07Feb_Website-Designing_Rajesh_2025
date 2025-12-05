import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {

    const [obj_data, setData] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile:""
    });

    const changeHandel = (e) => {
        setData({ ...obj_data, id: new Date().getTime().toString(),status:"Unblock", [e.target.name]: e.target.value });
        console.log(obj_data);
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/customers`, obj_data);
        setData({ ...obj_data, id: "", name: "", email: "", password: "",mobile:"" });
        console.log(res);
    }
    return (
        <div>
            <div className="contact-page section">
                <div className="container">
                    <div className="row">

                        <div className="offset-lg-3 col-lg-6">
                            <div className="text-center">
                                <div className="section-heading">
                                    <h6>Signup Us</h6>
                                    <h2>Signup Here</h2>
                                </div>
                                <div className="right-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <form id="contact-form" method="post" onSubmit={submitHandel}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <fieldset>
                                                            <input type="name" value={obj_data.name} name="name" onChange={changeHandel} id="name" placeholder="Your Name..." autoComplete="on" required />
                                                        </fieldset>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <fieldset>
                                                            <input type="text" value={obj_data.email} name="email" onChange={changeHandel} id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <fieldset>
                                                            <input type="password" value={obj_data.password} name="password" onChange={changeHandel} id="Password" placeholder="Your Password..." required />
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <fieldset>
                                                            <input type="number" value={obj_data.mobile} name="mobile" onChange={changeHandel} id="mobile" placeholder="Your Mobile..." required />
                                                        </fieldset>
                                                    </div>
                                                   
                                                    <div className="col-lg-12">
                                                        <fieldset>
                                                            <button type="submit" id="form-submit" className="orange-button">Signup</button>
                                                        </fieldset>
                                                    </div>
                                                     <div className="col-lg-12 mt-5">
                                                        <fieldset>
                                                            <Link to="/login">If you alreday Registered Then Login Here</Link>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup