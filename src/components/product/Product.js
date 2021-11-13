import React from 'react'
import { Link } from "react-router-dom";
import './Product.css'

const Product = () => {
    return (
        <>
            <section className="product-container product">
                <div className="product-design" data-aos="zoom-in-right">
                    <h1>Product Design</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam augue id magna finibus, a maximus lorem pretium. Nullam rutrum aliquam augue id magna finibus, a maximus lorem pretium. Nullam rutrumLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam augue id magna finibus, a </p>
                </div>
                <div className="product-design-card row" >
                    <div className="col-lg-6 col-md-6 col-12 card">
                        <div data-aos="fade-up"
                        data-aos-duration="1000">
                            <h3>Lite</h3>
                            <h1>N12,000</h1>
                            <p>Lorem ipsum dolor sit amet</p>
                            <button>Purchase Now</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 times">
                    <ul data-aos="fade-up" data-aos-duration="1000">
                        <li><i class="fas fa-check-circle"></i>TRAINING DURATION: 2 MONTHS</li>
                        <li><i class="fas fa-check-circle"></i>INTERNSHIP: 1 MONTH</li>
                        <li><i class="fas fa-check-circle"></i>TRAINING SCHEDULE: 3 DAYS/WEEK</li>
                        <li><i class="fas fa-check-circle"></i>TIME: 10AM - 2PM</li>
                    </ul>
                    </div>
                </div>
                <div className="product-offer">
                    <h1 data-aos="fade-up" data-aos-duration="1000">What you will offer</h1>
                    <ul>
                        <li data-aos="fade-up" data-aos-duration="1500"><i class="fas fa-check-circle"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu malesuada elit</li>
                        <li data-aos="fade-up" data-aos-duration="1300"><i class="fas fa-check-circle"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu malesuada elit</li>
                        <li data-aos="fade-up" data-aos-duration="1100"><i class="fas fa-check-circle"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu malesuada elit</li>
                        <li data-aos="fade-up" data-aos-duration="900"><i class="fas fa-check-circle"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu malesuada elit</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Product
