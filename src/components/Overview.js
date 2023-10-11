import React from 'react'
import '../CSS/Overview.css'
import Footer from '../Footer/Footer'
import Header from '../header/Header'

function Overview() {
    return (
        <>

            <Header />


            <section class="home-content-section">
                <div class="overview-home-content">
                    <div class="home-content-text">
                        <div class="content-text-label">Website Overview</div>

                        <h1 class="overview-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas ex
                            quidem.</h1>

                        <div class="overview-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit Vitae voluptas
                        </div>
                    </div>

                    <button class="big primary big-button">
                        <span> Request a demo </span>
                    </button>

                    <img src="./img/ov-img.webp" alt="img" class="img image" height="560" width="1175" />

                </div>
            </section>

            {/* <!-- -----------------------Tab-statistics------------------------ --> */}


            <section className="tabs-header">
                <div className="tabs">
                    <div className="container">
                        <div className="tabs-text-box">
                            <div className="tab-item">
                                <div className="tab-title">Heading Text</div>
                            </div>

                            <div className="tab-item">
                                <div className="tab-title">Heading Text</div>
                            </div>

                            <div className="tab-item">
                                <div className="tab-title">Heading Text</div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="f-tab-content">
                    <h3 className="content-title">
                        Lorem ipsum dolor sit amet consectetur.
                        <span className="red">Lorem ipsum</span>
                        sit amet consectetur.
                    </h3>
                </div>

                <div className="content-items">

                    <div className="content-item">
                        <div className="icon">
                            <div className="box-icon">
                                <img src="./img/slack.png" alt="img" width="30px" height="30px" />
                            </div>
                        </div>

                        <div className="icon-text">
                            Lorem ipsum dolor sit amet consectetur. sit amet consectetur.
                        </div>
                    </div>

                    <div className="content-item">
                        <div className="icon">
                            <div className="box-icon">
                                <img src="./img/slack.png" alt="img" width="30px" height="30px" />
                            </div>
                        </div>

                        <div className="icon-text">
                            Lorem ipsum dolor sit amet consectetur. sit amet consectetur.
                        </div>
                    </div>

                    <div className="content-item">
                        <div className="icon">
                            <div className="box-icon">
                                <img src="./img/slack.png" alt="img" width="30px" height="30px" />
                            </div>
                        </div>

                        <div className="icon-text">
                            Lorem ipsum dolor sit amet consectetur. sit amet consectetur.
                        </div>
                    </div>

                    <div className="content-item">
                        <div className="icon">
                            <div className="box-icon">
                                <img src="./img/slack.png" alt="img" width="30px" height="30px" />
                            </div>
                        </div>

                        <div className="icon-text">
                            Lorem ipsum dolor sit amet consectetur. sit amet consectetur.
                        </div>
                    </div>

                    <div className="content-item">
                        <div className="icon">
                            <div className="box-icon">
                                <img src="./img/slack.png" alt="img" width="30px" height="30px" />
                            </div>
                        </div>

                        <div className="icon-text">
                            Lorem ipsum dolor sit amet consectetur. sit amet consectetur.
                        </div>
                    </div>

                    <div className="content-item">
                        <div className="icon">
                            <div className="box-icon">
                                <img src="./img/slack.png" alt="img" width="30px" height="30px" />
                            </div>
                        </div>

                        <div className="icon-text">
                            Lorem ipsum dolor sit amet consectetur. sit amet consectetur.
                        </div>
                    </div>

                </div>
            </div>

            {/* // < !-- ----------------------- overview - statistics------------------------ --> */}

            <section className="container overview-statistics">
                <div className="statistics-card">
                    <div className="statistics-number">99.9%</div>
                    <div className="statistics-info">Email deliverability rate</div>
                </div>

                <div className="statistics-card">
                    <div className="statistics-number">15</div>
                    <div className="statistics-info">Average mailboxes per domain</div>
                </div>

                <div className="statistics-card">
                    <div className="statistics-number">3000+</div>
                    <div className="statistics-info">Domains recovered</div>
                </div>


            </section>


            {/* <!-- ------------------Integration SECTION----------------------- --> */}

            <section id="integration" className="overview-integration-banner">
                <div className="container">
                    <div className="overview-integration-content">
                        <div className="integration-content-left">

                            <div className="integration-label">Intergrations</div>

                            <h2 className="overview-integration-title">
                                Lorem ipsum dolor sit amet
                            </h2>
                            <div className="integration-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorum id adipisicing
                                elit. Deleniti dolorum id
                            </div>

                            <button className="big-1 btn-color-1">
                                <span> Check your integration </span>
                                {/* <span className="primary-btn-icon">></span> */}
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- ----------------- highest - rated - model------------------------ --> */}

            <section className="highest-rated-model">
                <div className="container">
                    <div className="highest-rated-content">
                        <div className="left-box">
                            <div className="left-box-title">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                            </div>
                            <div className="title-text">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="platform-item">
                        <div className="partner-logo-wrapper">
                            <img src="./img/berkeley.39f3c663.svg" alt="" className="logo" width="100px" height="80px" />
                        </div>

                        <div className="partner-logo-wrapper">
                            <img src="./img/cemtrex.70d8f9aa.svg" alt="" className="logo" width="100px" height="80px" />
                        </div>

                        <div className="partner-logo-wrapper">
                            <img src="./img/token.5046263e.svg" alt="" className="logo" width="100px" height="80px" />
                        </div>

                        <div className="partner-logo-wrapper">
                            <img src="./img/sujo.81da991a.svg" alt="" className="logo" width="100px" height="80px" />
                        </div>

                        <div className="partner-logo-wrapper">
                            <img src="./img/sock.7bd459ed.svg" alt="" className="logo" width="100px" height="80px" />
                        </div>

                        <div className="partner-logo-wrapper">
                            <img src="./img/titan.112a696b.svg" alt="" className="logo" width="100px" height="80px" />
                        </div>

                        <div className="partner-logo-wrapper">
                            <img src="./img/texas.74998529.svg" alt="" className="logo" width="100px" height="80px" />
                        </div>

                        <div className="partner-logo-wrapper">
                            <img src="./img/born.f58ad3c4.svg" alt="" className="logo" width="100px" height="80px" />
                        </div>

                        <div className="partner-logo-wrapper">
                            <img src="./img/greater.92cf8d7c.svg" alt="" className="logo" width="100px" height="80px" />
                        </div>

                        <div className="partner-logo-wrapper">
                            <img src="./img/oncobox.46551be2.svg" alt="" className="logo" width="100px" height="80px" />
                        </div>

                        <div className="partner-logo-wrapper">
                            <img src="./img/citrusad.2150ec1d.svg" alt="" className="logo" width="100px" height="80px" />
                        </div>

                        <div className="partner-logo-wrapper">
                            <img src="./img/columbus.a34e9888.svg" alt="" className="logo" width="100px" height="80px" />
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- ------------- msg - banner-------------- --> */}

            <section className="msg-banner">
                <div className="container">
                    <div className="banner-content">
                        <div className="banner-title">Lorem ipsum dolor sit amet consectetur adipisicing</div>

                        <button className="big-2 btn-color-2">
                            <span> Check your integration </span>
                            {/* <span className="primary-btn-icon-1">></span> */}
                        </button>

                    </div>

                </div>
            </section>


            <Footer />


        </>
    )
}

export default Overview
