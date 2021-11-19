import React from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'
import './Steps.css'

const Steps = () => {
    return (
        <>
            <section className="how_it_works">
                <div className="hs-container" data-aos="zoom-out">
                    <h1>How It Works</h1>
                    <div>
                        <Carousel interval={2000}>
                            <Carousel.Item interval={3000}>
                                <h6>1</h6>
                                <p>Selected persons will be trained for 3 months on any of the tech skills they have chosen. The training is a physical training (2-3 times every week).</p>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <h6>2</h6>
                                <h4>Trainees will also learn:</h4>
                                <ul>
                                    <li>• How to monetize their skills.</li>
                                    <li>• The business of tech.</li>
                                    <li>• How to collaborate and partner.</li>
                                    <li>• How to build high Performance team.</li>
                                    <li>• How to find a co-founder.</li>
                                </ul>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <h6>3</h6>
                                <p>10 weeks into the training, trainees will be drawn from various categories to form teams (5-7 persons) per team.</p>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <h6>4</h6>
                                <p>Each team will be assigned with an experienced and dedicated mentor who will guide them to build a successful product (MVP).</p>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <h6>5</h6>
                                <p>The team with the best product (based on market validation and ability to get attraction) will get N1,000,000 instant funding and will also be subscribed to techlauncher.io for business mentorship and extra investment.</p>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <h6>6</h6>
                                <p>Each team and their product will be subscribed to techlauncher.io to get professional business development and funding.</p>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <h6>7</h6>
                                <p>Successful trainees who desires to work will be deployed for employment to any of partnering companies.</p>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Steps
