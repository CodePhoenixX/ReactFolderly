import '../CSS/Login.css'
import { Link } from 'react-router-dom';

function Login() {

    return (
        <>

            {/* <div className="containerCustom Dashboard-1">
                <div className="contact-boxCustom">
                    <div className="leftCustom"></div>
                    <div className="rightCustom">
                        <h2 className='loginHeading'>Log In</h2>
                        <div className="form-group-1">
                            <input type="text" id="email" required autoComplete='off' />
                            <label htmlFor="email">Your Email: </label>
                        </div>

                        <div className="form-group-1">
                            <input type="password" id="password" value="password123" required />
                            <label htmlFor="email">Your Password: </label>
                        </div>

                        <div className="div-flex">
                            <p className='check'><input className="check-mark" type="checkbox" />
                                Show Password
                                <Link to="/forgot-password">
                                    <span className='check-1'>Forgot Password</span>
                                </Link>
                            </p>
                            <button type='submit' className="btnCustom">Login</button>
                        </div>

                        <div className="login-link">
                            <Link to="/sign-up" style={{ textDecoration: 'none' }}>
                                <p>Don't have an account <span>Sign Up</span></p>
                            </Link>
                        </div>


                    </div>
                </div>
            </div> */}



            <div className="login-card">
                <div className="heading">
                    {/* <h2>Login</h2> */}
                    <h3>Hi, Welcome Back</h3>
                </div>
                <form action="" className="login-form">
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type='submit'>Sign in</button>
                </form>
                <div className="last-item">
                    <Link to="#">Forgot Your Password</Link>
                    <Link to="/sign-up" className="login">Create an account - <span>Signup</span></Link>
                </div>
            </div>

        </>
    )
}

export default Login
