import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="hs-container"
                    data-aos="fade-up"
                    data-aos-duration="1500">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <h3>Harvoxx Tech Hub</h3>
                            <p>The Digital SkillUp Project (DSP-300) is a FREE three months intensive trainings on digital skills for 300 selected youths in Rivers State. The training is geared towards equipping youths in Rivers State with in-demand digital skills and mentoring them in building a successful Tech Career.</p>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12 f">
                            <h3 className="text-left">Available Programs:</h3>
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <ul>
                                        <li>Product Design</li>
                                        <li>Website Development(Frontend)</li>
                                        <li>Website Development(Backend)</li>
                                        <li>Mobile App Development(Flutter)</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <ul>
                                        <li>CyberSecurity</li>
                                        <li>Digital Marketing</li>
                                        <li>Graphics Design/Product Branding</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <h3>Connect With Us</h3>
                            <a href="https://twitter.com/HarvoxxH"><i class="fab fa-twitter"></i></a>
                            {/* <i class="fab fa-instagram"></i> */}
                            <a href="https://web.facebook.com/HarvoxxOfficial"><i class="fab fa-facebook-f"></i></a>
                            {/* <i class="fab fa-linkedin"></i> */}
                        </div>
                    </div>
                    <p className="copyright">© Harvoxx Tech Hub. All right reserved. Designed by Harvoxx Tech Hub</p>
                </div>
            </section>
        </>
    )
}

export default Footer
    // < div className = "col-lg-3 col-md-6 col-12 f" >
    //     <ul>
    //         <li>Product Design</li>
    //         <li>Website Development(Frontend)</li>
    //         <li>Website Development(Backend)</li>
    //     </ul>
    //                     </div >
    // <div className="col-lg-3 col-md-6 col-12 text-end">
    //     <ul>
    //         <li>CyberSecurity(Powered by Hackify.io)</li>
    //         <li>Digital Marketing</li>
    //         <li>Graphics Design/Product Branding</li>
    //     </ul>
    // </div>