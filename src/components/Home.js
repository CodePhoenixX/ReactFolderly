import React from 'react'
import '../CSS/Home.css'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import { Link} from 'react-router-dom';


function Home() {

    return (
        <>

            <Header />


            <div className="layout-content">

                <main className="main">

                    <section className="head">

                        <div className="container home-container">
                            <div className="content-wrapper">

                                <div className="home-content">
                                    <div className="title-box">
                                        <h1 className="label">Email Deliverability Software</h1>

                                        <h2 className="home-title">
                                            Unlock Email Magic with EmailQube: High-performance Email Marketing & Deliverability Services

                                            {/* <!-- <div className="animation-list">
                                                <span className="title-slide">Open Rate</span>
                                            </div> --> */}
                                        </h2>
                                    </div>

                                    <p className="paragraph-text">
                                        Our unwavering commitment is to ensure the successful delivery of your email campaigns straight to recipients' inboxes. By doing so, we maximize your return on investment (ROI) and drive unparalleled results.
                                    </p>

                                    {/* <p className="subtitle">Reach the Inbox with any email service provider.</p> */}

                                    <div className="home-button">
                                        <Link to="" className="big secondary big-button">
                                            <span>Request a demo</span>
                                            <span class="material-symbols-rounded margin-l">chevron_right</span>
                                        </Link>

                                    </div>
                                </div>

                                <div className="home_image_box">
                                    <img src="https://static.wixstatic.com/media/c837a6_604c6b86faf247e3b1060fdc0a80d6dc~mv2.png/v1/fill/w_999,h_563,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/screen%201.png" alt="img" className='home_image' />
                                </div>

                            </div>
                        </div>

                        {/* <!-- ----------------CHAT BOX---------- --> */}

                        {/* <div className="chat-box">
                            <div className="chat-background">
                                <img src="./img/chat.png" alt="Chat With Us" width="65px" height="65px" className="chat-img" />
                            </div>
                        </div> */}


                    </section>

                    {/* <!-- ------------------How Folderly works SECTION----------------------- --> */}

                    <section className="main-info">
                        <div className="container">
                            <div className="main-content">
                                <div className="content-text">
                                    {/* <div className="content-text-label-1">
                                        Your email success partner
                                    </div> */}
                                    <h2 className="content-heading-1">Why EQ-Prd</h2>
                                    <div className="content-description">
                                        Put us to work. Invest your time where it's needed
                                    </div>
                                </div>

                                <div className="items-test">
                                    <div className="item-test">
                                        <div className="left-test">
                                            <div className="label">Deliverability Expertise</div>
                                            <h3 className="title-test">Deliverability Expertise</h3>

                                            <div className="text-test_bold">Onboard with us and focus on your business while we handle the rest.</div>

                                            <div className="text-test">
                                                We posses in-depth understanding of best practices, such as authentication, list hygiene, ISP guidelines, and spam filters. Our strategies guarantee maximum deliverability rates and prevent your emails from being marked as spam.
                                            </div>
                                        </div>

                                        <div className="image_box">
                                            <img src="https://www.weebly.com/uploads/c/e816fe41-644e-11e8-937d-c4544454fb00/odigos/email-marketing/email_performance_metrics@2_x.jpg" alt="img" className='right_image' />
                                        </div>


                                    </div>

                                    <div className="item-test">
                                        <div className="left-test">
                                            <div className="label">Data Analysis</div>
                                            <h3 className="title-test">Data Analysis and Optimization</h3>

                                            <div className="text-test_bold">With our budgeting system, you can rest assured your resources are spent wisely.</div>

                                            <div className="text-test">
                                                With our budgeting system, you can rest assured your resources are spent wisely.
                                            </div>
                                        </div>

                                        <div className="image_box">
                                            <img src="https://www.vision6.com/wp-content/uploads/2020/06/15140748/spam-trigger.png" alt="img" className='right_image' />
                                        </div>


                                    </div>


                                    <div className="item-test">
                                        <div className="left-test">
                                            <div className="label">Infrastructure and Support</div>
                                            <h3 className="title-test">Technical Infrastructure and Support</h3>

                                            <div className="text-test_bold">We can develop and design the  robust Infrastructure which can deliver the emails and manage your campaign</div>

                                            <div className="text-test">
                                                We can develop and design the  robust Infrastructure which can deliver the emails and manage your campaign
                                            </div>
                                        </div>

                                        <div className="image_box">
                                            <img src="https://info.friendbuy.com/hubfs/blog-email-blasts-1200x627.jpg" alt="img" className='right_image' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ---------------features---------------- */}

                    <section className="features">
                        <div className="container">
                            <div className="feature_wrapper">
                                <div className="featured-item-test">
                                    <div className="featured-left-test">
                                        <div className="label label_center">EQ-Prd Features</div>
                                        <h3 className="featured-title-test">From setting up SMTP Server to managing your Campaign- We are here to help.</h3>

                                        <div className="featured-text-test">
                                            From technical team to the email marketing strategist, we have all who are ready to help you out with pitfalls of the email marketing and deliverability.
                                        </div>
                                    </div>

                                    <div className="featured-image_box">
                                        <img src="https://static.wixstatic.com/media/c748b6_b9605c73675443a9b48cf4b7992786af~mv2.png/v1/crop/x_99,y_0,w_705,h_705/fill/w_450,h_450,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/email-marketing_edited.png" alt="img" className='featured-right_image' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />

                </main>
            </div>


        </>
    )
}


export default Home;