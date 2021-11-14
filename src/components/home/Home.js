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
              <li><i class="fas fa-check-circle"></i>Product Design(Ui/Ux)</li>
              <li><i class="fas fa-check-circle"></i>Website Development (Frontend)</li>
              <li><i class="fas fa-check-circle"></i>Website Development (Backend)</li>
              <li><i class="fas fa-check-circle"></i>Cyber Security (Powered by hackify.io)</li>
              <li><i class="fas fa-check-circle"></i>Digital Marketing</li>
              <li><i class="fas fa-check-circle"></i>Graphics Design and Product Branding</li>
            </ul>
            <Button buttonStyle='btn--blue' buttonSize='btn--medium'><Link to="/payment"> Apply Now </Link></Button>
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
            <h3>Product(UI/UX) Design</h3>
            <p>
              Product designers are able to design, prototype, test, and improve products. 
              They work to optimize the user experience in the solutions they make for their users.
            </p>
            <a href="/payment">Apply Now</a>
          </div>
          <div className="col-lg-4 col-md-4 col-12 card-hover" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={images.shopping} />
            <h3>Website Development (Frontend)</h3>
            <p>
            Frontend of the website that the user interacts with directly. It is also known as the ‘Christ Side’ 
            of the platform. It includes everything that users experience directly on the website. 
            Text colors &amp; styles, images, graphs &amp; tables, buttons, colors &amp; navigation menu.
            </p>
            <a href="/payment">Apply Now</a>
          </div>
          <div className="col-lg-4 col-md-4 col-12" data-aos="fade-up"
            data-aos-duration="3000">
            <img src={images.shopping} />
            <h3>Website Development (Backend)</h3>
            <p>This is the server-side of the website. It shows and arranges data. It also makes sure everything 
              on the client-side of the website works fine. This is actually the part of the website that you 
              can't see or interact with. Building APIs, creating libraries, etc. are all included in the backend 
              development.
            </p>
            <a href="/payment">Apply Now</a>
          </div>
          <div className="col-lg-4 col-md-4 col-12" data-aos="fade-up"
            data-aos-duration="3000">
            <img src={images.shopping} />
            <h3>CyberSecurity (Powered by hackify.io)</h3>
            <p>
              Cybersecurity deals with the protection of internet-connected systems (hardware, software, data, 
              etc) from cyber attacks. CyberSecurity experts defends computers, servers, mobile devices, 
              electronic systems, networks and data from malicious attacks.
            </p>
            <a href="/payment">Apply Now</a>
          </div>
          <div className="col-lg-4 col-md-4 col-12 card-hover" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={images.shopping} />
            <h3>Digital Marketing</h3>
            <p>
              This is simply advertising made through digital channels such as search engines, 
              social media, email, mobile apps. It involves the use of the internet to reach consumers.
            </p>
            <a href="/payment">Apply Now</a>
          </div>
          <div className="col-lg-4 col-md-4 col-12" data-aos="fade-up"
            data-aos-duration="3000">
            <img src={images.shopping} />
            <h3>Graphics Design/Product Branding</h3>
            <p>
              Graphic design is a craft where you create visual content to communicate messages. 
              Graphic designers use typography, ideas and pictures to meet users' specific needs.
            </p>
            <a href="/payment">Apply Now</a>
          </div>
        </div>
      </section>

      <Testimonial />

      <Questions />
    </>
  );
};

export default home;
