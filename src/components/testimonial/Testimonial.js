import React from 'react'
import images from "../../assets/images/image";
import { Row, Col, Carousel } from 'react-bootstrap'
import './Testimonial.css'

const Testimonial = () => {
    const testimonial = [
        {
            image: "{images.testimonialImage}",
            author: "Queen Heart",
            school: "UST Student",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel auctor nisi. Curabitur pellentesque a dolor in vulputate. Sed at viverra nisi. Suspendisse rutrum ipsum justo, et tempor purus tristique et. Vivamus sodales vel justo sit amet egestas. Vestibulum ante ipsum",
        },
        {
            image: "{images.testimonialImage}",
            author: "Helen Design Cook",
            school: "UST Student",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel auctor nisi. Curabitur pellentesque a dolor in vulputate. Sed at viverra nisi. Suspendisse rutrum ipsum justo, et tempor purus tristique et. Vivamus sodales vel justo sit amet egestas. Vestibulum ante ipsum",
        },
        {
            image: "{images.testimonialImage}",
            author: "Somebody Somewhere",
            school: "UST Student",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel auctor nisi. Curabitur pellentesque a dolor in vulputate. Sed at viverra nisi. Suspendisse rutrum ipsum justo, et tempor purus tristique et. Vivamus sodales vel justo sit amet egestas. Vestibulum ante ipsum",
        }
    ];

    return (
        <>
            <section className="testimonial">
                <div className="hs-container" data-aos="zoom-out">
                    <h1>What People say about Harvoxx</h1>
                    <div>
                        <Carousel interval={2000}>
                            {testimonial.map((testitem, index) => {
                                return (
                                    <Carousel.Item interval={5000}>
                                        <img src={images.testimonialImage} alt="testimonial image" />
                                        <h5>{testitem.author}</h5>
                                        <h6>{testitem.school}</h6>
                                        <div>
                                            <p>{testitem.content}</p>
                                        </div>
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
