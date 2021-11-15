import React from 'react'
import images from "../../assets/images/image";
import { Row, Col, Carousel } from 'react-bootstrap'
import './Testimonial.css'

const Testimonial = () => {
    const testimonial = [
        {
            image: "{images.testimonialImage}",
            author: "Macsams Emmanuel Samuel",
            school: "Web Developer, Port Harcourt",
            content:
                "I was at a point in Web development where I needed mentoring and coaching. I had bought a course online but couldn't understand the concept of web development fully, until I had an opportunity to be trained by the Harvoxx team. The free but intensify training started on the 9th of  September, 2021. So far, I've learnt how to make good tech researches and I've learnt a lot on web development, UI and UX principles.",
        },
        {
            image: "{images.testimonialImage}",
            author: "Helen Design Cook",
            school: "UST Student",
            content:
                "My journey into Tech has been a very interesting one all thanks to the team at Harvoxx Tech Hub. I started my frontend development training with lots of doubts but two weeks into my training at Harvoxx Tech Hub, I felt at peace with myself and fell in love with not just frontend development but the entire tech thing. They helped set me out properly on this part and I’m proud for the lady I’m becoming.",
        },
        {
            image: "{images.testimonialImage}",
            author: "Somebody Somewhere",
            school: "UST Student",
            content:
                "When I told my mum about my zeal to acquire a Tech skill at Harvoxx, she simply asked me: “How will you make money with that?”. I couldn’t answer that question boldly because it wasn’t so clear to how exactly I was going to start making money with my skill. Well, the Harvoxx team didn’t just train me, they showed me how to monetize my skills and that made all the difference for me. I love all of you guys at Harvoxx.",
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
