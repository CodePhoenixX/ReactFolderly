import React from 'react'
import '../CSS/Signup.css'
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <>

            <div className="signup-card">
                <div className="signup-heading">
                    {/* <h2>Sign up</h2> */}
                    <h3>Start signing up</h3>
                </div>

                <div>
                    <form action="" className="signup-form">
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <input type="password" placeholder="Conform Password" required />
                        <button type="submit">Continue</button>
                    </form>
                </div>
                
                <div className="signup-item">
                    <Link to="/sign-in" className="signup">Have an account? - <span>Login</span></Link>
                </div>
            </div>

        </>
    )
}

export default Signup
