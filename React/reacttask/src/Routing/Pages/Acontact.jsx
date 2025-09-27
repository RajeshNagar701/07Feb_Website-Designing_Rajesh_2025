import React from 'react'
import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'
function Acontact() {
    return (
        <div>
            <Aheader title="Contact Us"/>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-sm-12">
                        <h2>Contact Me</h2>
                        <div className="container mt-3">

                            <form action="/action_page.php">
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                </div>
                                <div className="form-check mb-3">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>


                    </div>

                </div>
            </div>
            <Afooter />
        </div>
    )
}

export default Acontact