import React from 'react'
import { Button } from '../button/Button'
import images from "../../assets/images/image";
import { Testimonial, Questions } from '../index'
import './Services.css'
import { useHistory, Link } from 'react-router-dom';

const Services = () => {

    let history = useHistory()

    return (
        <>
            <section className="hs-container services">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 services-text" data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                        <h1>Product Design</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam augue id magna finibus, a maximus lorem pretium. Nullam rutrum aliquam augue id magna finibus, a maximus lorem pretium. Nullam rutrumLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam augue id magna finibus, a </p>
                        <Button onClick={()=>{history.push("product")}}  buttonStyle='btn--blue' buttonSize='btn--medium' > Apply Now</Button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 services-img" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                        <img src={images.unsplash2} alt="" />
                    </div>
                </div>
            </section>

            <section className="hs-container services-2">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 services-2-img" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                        <img src={images.unsplash2} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 services-2-text" data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                        <h1>Product Design</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam augue id magna finibus, a maximus lorem pretium. Nullam rutrum aliquam augue id magna finibus, a maximus lorem pretium. Nullam rutrumLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam augue id magna finibus, a </p>
                        <Button onClick={()=>{history.push("product")}} buttonStyle='btn--blue' buttonSize='btn--medium'>Apply Now</Button>
                    </div>
                </div>
            </section>

            <section className="hs-container services-3">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 services-3-text" data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                        <h1>Product Design</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam augue id magna finibus, a maximus lorem pretium. Nullam rutrum aliquam augue id magna finibus, a maximus lorem pretium. Nullam rutrumLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam augue id magna finibus, a </p>
                        <Button onClick={()=>{history.push("product")}} buttonStyle='btn--blue' buttonSize='btn--medium'>Apply Now</Button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 services-3-img" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                        <img src={images.unsplash2} alt="" />
                    </div>
                </div>
            </section>

            <section className="hs-container why-people">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12" data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                        <h1>Why People Train with Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam augue id magna finibus, a maximus lorem pretium. Nullam rutrum aliquam augue id magna finibus, a maximus lorem pretium.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="row train" data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                            <div className="col-lg-6 col-6">
                                <ul>
                                    <li><i class="fas fa-check-circle"></i>Supervision</li>
                                    <li><i class="fas fa-check-circle"></i>Project MAnagers</li>
                                    <li><i class="fas fa-check-circle"></i>Cost Analysis Experts</li>
                                    <li><i class="fas fa-check-circle"></i>Cost Analysis Experts</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-6">
                            <ul>
                                    <li><i class="fas fa-check-circle"></i>Supervision</li>
                                    <li><i class="fas fa-check-circle"></i>Project MAnagers</li>
                                    <li><i class="fas fa-check-circle"></i>Cost Analysis Experts</li>
                                    <li><i class="fas fa-check-circle"></i>Cost Analysis Experts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonial />

            <Questions />
        </>
    )
}

export default Services
