import React, { useState } from "react";
import images from "../../assets/images/image";
import { Carousel } from 'react-bootstrap'
import { Button } from "../button/Button";
import { Questions, Testimonial } from '../index'
import { Navbar } from "../index";
import './Home.css'
import { Link } from "react-router-dom";

const home = () => {

  const ola = () => alert('ola');

  return (
    <>
      <section className="hero">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images.hero1}
              alt="First slide"
            />
            <div className="caption-div">
              <div className="text">
                <h1 data-aos="fade-up"
                  data-aos-duration="3000">Everything You Need for a Sucessful Tech Career</h1>
                <p data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies erat sapien</p>
                <div>
                  <Button buttonStyle='btn--red' onClick={ola}> <Link to="/payment"> Apply Now </Link></Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images.hero2}
              alt="Second slide"
            />

            <div className="caption-div">
              <div className="text">
                <h1 data-aos="fade-up"
                  data-aos-duration="3000">Everything You Need for a Sucessful Tech Career</h1>
                <p data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies erat sapien</p>
                <div>
                  <Button buttonStyle='btn--red'> <Link to="/payment"> Apply Now </Link></Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images.hero3}
              alt="Third slide"
            />

            <div className="caption-div">
              <div className="text">
                <h1 data-aos="fade-up"
                  data-aos-duration="3000">Everything You Need for a Sucessful Tech Career</h1>
                <p data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies erat sapien</p>
                <div>
                  <Button buttonStyle='btn--red'> <Link to="/payment"> Apply Now </Link></Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="hs-container section">
        <div className="row hsc-container">
          <div className="col-lg-4 col-md-4 col-12 hcard">
            <div className="row">
              <div className="col-2"><img src={images.group1} alt="group" /></div>
              <div className="col-10" data-aos="fade-up"
                data-aos-duration="3000">
                <h3>Get Trained &amp; Mentored</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12 hcard">
            <div className="row">
              <div className="col-2"><img src={images.group2} alt="group" /></div>
              <div className="col-10" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <h3>Get Visibilty</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12 hcard">
            <div className="row">
              <div className="col-2"><img src={images.group3} alt="group" /></div>
              <div className="col-10" data-aos="fade-up"
                data-aos-duration="3000">
                <h3>Start Earning</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hs-container section1">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 text-content" data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <h1>Learn a Tech Skill and be financially free</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam augue id magna finibus, a maximus </p>
            <ul>
              <li><i class="fas fa-check-circle"></i>Product Design</li>
              <li><i class="fas fa-check-circle"></i>Website Development (Frontend)</li>
              <li><i class="fas fa-check-circle"></i>Website Development (Backend)</li>
            </ul>
            <Button buttonStyle='btn--blue' buttonSize='btn--medium'>Apply Now</Button>
          </div>
          <div className="col-lg-6 col-md-6 col-12 section1-image" data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <span className="img-image"><img src={images.image2} /></span>
            <img className="curve-image" data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
              src={images.image1} alt="" />
          </div>
        </div>
      </section>

      <section className="hs-container section2">
        <h1 data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
          Learn a Tech Skill and be financially free</h1>
        <div className="row skillcard">
          <div className="col-lg-4 col-md-4 col-12" data-aos="fade-up"
            data-aos-duration="3000">
            <img src={images.shopping} />
            <h3>UiUx Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam </p>
            <a href="">Learn More</a>
          </div>
          <div className="col-lg-4 col-md-4 col-12 card-hover" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={images.shopping} />
            <h3>UiUx Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam </p>
            <a href="">Learn More</a>
          </div>
          <div className="col-lg-4 col-md-4 col-12" data-aos="fade-up"
            data-aos-duration="3000">
            <img src={images.shopping} />
            <h3>UiUx Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam </p>
            <a href="">Learn More</a>
          </div>
        </div>
      </section>

      <Testimonial />

      <Questions />
    </>
  );
};

export default home;
