import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
          <section class="footer-section">
              <div class="container">

                  <section>
                      <div class="footer-section-nav">
                          <div class="footer-contact-info">

                              <div class="logo-text">
                                  <Link to="#" class="logo">Website</Link>
                              </div>

                              <div class="footer-contacts">
                                  <Link to="#" target="_blank">
                                      <div class="contact-details">
                                          <span>@</span>
                                          support@youremail.com
                                      </div>
                                  </Link>

                                  <div class="footer-contact">
                                      <Link to="#" target="_blank">
                                          <div class="contact-details">
                                              <span>@</span>
                                              +91 1234567890
                                          </div>
                                      </Link>
                                  </div>

                                  <div class="social-links">
                                      <Link to="#" class="social-media">
                                          <img src="./img/facebook-2.172ad400.svg" alt="socialLinks"
                                              class="social-icon" height="20px" width="20px" />
                                      </Link>

                                      <Link to="#" class="social-media">
                                          <img src="./img/twitter.f2db2fd6.svg" alt="socialLinks" class="social-icon"
                                              height="20px" width="20px" />
                                      </Link>

                                      {/* <!-- <Link to="#" class="social-media">
                                          <img src="./img/linkedin-2.7b94d1bf.svg" alt="socialLinks" class="social-icon" height="20px" width="20px">
                                      </Link> --> */}

                                      <Link to="#" class="social-media">
                                          <img src="./img/youtube.09b176c5.svg" alt="socialLinks" class="social-icon"
                                              height="20px" width="20px" />
                                      </Link>


                                  </div>

                              </div>

                          </div>



                          <section class="footer-nav-details">

                              <div class="footer-nav">
                                  <div class="footer-nav-list">
                                      <div class="footer-nav-heading">Product</div>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                  </div>

                                  <div class="footer-nav-list">
                                      <div class="footer-nav-heading">Tools</div>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                  </div>

                                  <div class="footer-nav-list">
                                      <div class="footer-nav-heading">Resources</div>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                  </div>

                                  <div class="footer-nav-list">
                                      <div class="footer-nav-heading">Contact</div>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                      <Link to="#" class="footer-nav-title"> Item Name </Link>
                                  </div>


                              </div>


                          </section>

                      </div>

                  </section>


              </div>
          </section>
    </>
  )
}

export default Footer;