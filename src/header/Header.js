import React, { useRef } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";



function Header() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive");
    };

    return (
        <>
            <header className="header-box">
                <div id="test" className="contacts">
                    <div className="container">

                        <div className="content">
                            {/* <!-- ----------------- --> */}
                            <div className="left">
                                <Link to="#" target="_blank" className="text">
                                    <div className="icon-box">
                                        <p className="icon">@</p>
                                    </div>
                                    support@youremail.com
                                </Link>

                                <Link to="#" target="_blank" className="text">
                                    <div className="icon-box">
                                        <p className="icon"></p>
                                    </div>
                                    +91 1234567890
                                </Link>
                            </div>
                            {/* <!-- ----------------- --> */}

                            <div className="right">

                                <Link to="" className="text sales">
                                    <div className="icon-box">
                                        <p className="icon"></p>
                                    </div>
                                    Contact Sales
                                </Link>

                                {/* <div className="divider"></div> */}

                                {/* <Link to="#" target="_blank" className="stripe">
                                  <span className="text">Stripe Climate Member</span>
                              </Link> */}

                                {/* <div className="divider"></div> */}

                                {/* <Link to="#" className="text">
                                  <div className="icon-box">
                                      <p className="icon"></p>
                                  </div>

                                  Backed by Google Startups
                              </Link> */}

                            </div>

                        </div>

                    </div>
                </div>

                {/* <!-- -------------------- --> */}

                <div id="header" className="header-content">

                    <div className="container header-container">


                        <h1 className="header_logo">EQ-Prd</h1>

                        <div className="div navigation_item">

                            <nav ref={navRef}>
                                <Link to="/home">Home</Link>
                                <Link to="/overview">Services</Link>
                                <Link to="/integration">About</Link>
                                <Link to="/pricing">Contact</Link>
                                <Link to="/home">Blogs</Link>

                                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                                    <FaTimes />
                                </button>

                                <div className="button-box">
                                    <Link to="/sign-in" className="small button sm-btn"><span>Sign in</span></Link>
                                    <Link to="#" className="small button-1 sm-btn"><span>Request a demo</span></Link>
                                </div>

                            </nav>
                        </div>
                        {/* Renders a button with the class of nav-btn and an FaBars icon inside */}
                        <button className="nav-btn" onClick={showNavbar}>
                            <FaBars />
                        </button>


                        {/* <!-- <div id="trigger" className="trigger"></div> --> */}

                    </div>

                </div>

            </header>
        </>
    )
}

export default Header;