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
                        <div className="col-lg-3 col-md-6 col-12">
                            <h3>Harvoxx Tech Hub</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pellentesque lacus eu</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 f">
                            <ul>
                                <li>Product Design</li>
                                <li>Website Development(Frontend)</li>
                                <li>Website Development(Backend)</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 text-end">
                            <ul>
                                <li>CyberSecurity(Powered by Hackify.io)</li>
                                <li>Digital Marketing</li>
                                <li>Graphics Design/Product Branding</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 text-end">
                            <h3>Connect With Us</h3>
                            <i class ="fab fa-twitter"></i>
                            {/* <i class="fab fa-instagram"></i> */}
                            <i class="fab fa-facebook-f"></i>
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
