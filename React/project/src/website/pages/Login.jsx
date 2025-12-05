import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const redirect=useNavigate();
    const [obj_data, setData] = useState({
        email: "",
        password: ""
    });

    const changeHandel = (e) => {
        setData({ ...obj_data, [e.target.name]: e.target.value });
        console.log(obj_data);
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        const res = await axios.get(`http://localhost:3000/customers?email=${obj_data.email}`);
        if (res.data.length > 0) {
            if (res.data[0].password == obj_data.password) {
                if (res.data[0].status == "Unblock") {

                     sessionStorage.setItem('uid',res.data[0].id);
                     sessionStorage.setItem('uname',res.data[0].name);
                     alert('Login Success !');
                     return redirect('/');
                }
                else {
                    alert('Login Failed Due to Blocked Account !');
                    return false;
                }
            }
            else {
                alert('Login Failed Due to Wrong Password !');
                return false;
            }
        }
        else {
            alert('Login Failed Due to Email Does Not Exist !');
            return false;
        }
    }
    return (
        <div>
            <div className="contact-page section">
                <div className="container">
                    <div className="row">

                        <div className="offset-lg-3 col-lg-6">
                            <div className="text-center">
                                <div className="section-heading">
                                    <h6>Login Us</h6>
                                    <h2>Login Here</h2>
                                </div>
                                <div className="right-content">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <form id="contact-form" method="post" onSubmit={submitHandel}>
                                                <div className="row">
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
                                                            <button type="submit" id="form-submit" className="orange-button">Login</button>
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-lg-12 mt-5">
                                                        <fieldset>
                                                            <Link to="/Signup">If you Not Registered Then Signup Here</Link>
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

export default Login