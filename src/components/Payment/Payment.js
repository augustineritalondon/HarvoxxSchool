import react, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import images from "../../assets/images/image";
import "aos/dist/aos.css";
import { Button } from "../button/Button";
import { useForm } from "react-hook-form";
import "./Style.css";
import axios from "axios";
import qs from "qs";
import Swal from "sweetalert2";
import { Link, useHistory } from "react-router-dom";

function Payment() {
  const [formStep, setFormStep] = useState(0);
  
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });


  const nextStep = () => {
    setFormStep((cur) => cur + 1);
  };
  
  const prevStep = () => {
    setFormStep((cur) => cur - 1);
  };
  
  const renderButton = () => {
    if (formStep > 1) {
      return undefined;
    } else if (formStep === 1) {
      return (
        <>
          <input
            className="nextButton"
            buttonStyle="btn--red"
            type="button"
            value="Prev"
            onClick={prevStep}
          />
          <input
            disabled={!isValid}
            className="nextButton"
            buttonStyle="btn--red"
            type="submit"
            value="Submit"
          />
        </>
      );
    } else {
      return (
        <input
          disabled={!isValid}
          className="nextButton"
          buttonStyle="btn--red"
          type="button"
          value="Next"
          onClick={nextStep}
        />
      );
    }
  };

  const history = useHistory();

  const submitForm = (data) => {
    var config = {
      method: "post",
      url: "https://harvoxxtest.com.ng/harvoxx-school/registration.php",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
        if (response.data.res === "success") {
          Swal.fire({
            title: "Success!",
            text: "Your registrations was successful",
            icon: "success",
            confirmButtonText: "Continue",
          }).then((result) => {
            if (result.value) {
              history.push("/");
            }
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Please check your network connection",
            icon: "error",
            confirmButtonText: "Try again",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Please check your network connection",
          icon: "error",
          confirmButtonText: "Try again",
        });
      });

    // nextStep()
  };

  return (
    <>
      <section className="payment">
        <div className="row form-container">
          <div className="col-lg-6 col-md-6 col-12 image">
            <img src={images.regImage} />
          </div>
          <div className="col-lg-6 col-md-6 col-12 content">
            <Form onSubmit={handleSubmit(submitForm)}>
              {formStep === 0 && (
                <section>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name Here"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "*** Enter your full name",
                        },
                        minLength: {
                          value: 5,
                          message: "*** Please Enter Your Fullname",
                        },
                      })}
                    />
                  </Form.Group>
                  {errors.name && <p>{errors.name.message}</p>}
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="info@gmail.com"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "*** Please Enter Your Email",
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "*** Enter a valid E-mail address",
                        },
                      })}
                    />
                  </Form.Group>
                  {errors.email && <p>{errors.email.message}</p>}
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="phone"
                      placeholder="090 333 77 888"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "*** Enter a Valid Phone Number",
                        },
                        pattern: {
                          value: /^[0-9\b]+$/,
                          message: "*** Enter a valid Phone Number",
                        },
                        minLength: {
                          value: 11,
                          message: "*** Enter a valid Phone Number",
                        },
                      })}
                    />
                  </Form.Group>
                  {errors.phone && <p>{errors.phone.message}</p>}
                  <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      {...register("gender", {
                        required: {
                          value: true,
                          message: "*** Enter a Gender",
                        },
                      })}
                    >
                      <option disabled></option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Form.Select>
                  </Form.Group>
                  {errors.gender && <p>{errors.gender.message}</p>}
                </section>
              )}

              {formStep === 1 && (
                <section>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Residential</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="woji port harcourt"
                      {...register("location", {
                        required: {
                          value: true,
                          message: "*** Enter you Residential Address",
                        },
                        minLength: {
                          value: 5,
                          message: "*** Please Enter a Valid Address",
                        },
                      })}
                    />
                  </Form.Group>
                  {errors.location && <p>{errors.location.message}</p>}
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Age Group</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      {...register("age", {
                        required: {
                          value: true,
                          message: "*** Choose Your Age",
                        },
                      })}
                    >
                      <option disabled></option>
                      <option value="16-25">16 - 25</option>
                      <option value="26-35">26 - 35</option>
                    </Form.Select>
                  </Form.Group>
                  {errors.age && <p>{errors.age.message}</p>}
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Are you a Graduate</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      {...register("graduate", {
                        required: {
                          value: true,
                          message: "*** Choose an Answer",
                        },
                      })}
                    >
                      <option disabled></option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Form.Select>
                  </Form.Group>
                  {errors.graduate && <p>{errors.graduate.message}</p>}
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Package</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      {...register("package", {
                        required: {
                          value: true,
                          message: "*** Select a Package",
                        },
                      })}
                    >
                      <option disabled></option>
                      <option value="FrontEnd">
                        Website Development (Frontend)
                      </option>
                      <option value="Backend">
                        Website Development (Backend)
                      </option>
                      <option value="Cybersecurity">
                        Cyber Security (Powered by hackify.io)
                      </option>
                      <option value="Productdesign">Product Design</option>
                      <option value="digitalmarketing">
                        Digital Marketing
                      </option>
                      <option value="Graphicsdesign">
                        Graphics Design/Product Branding
                      </option>
                      <option value="MobileAppDev">
                        Mobile App Development (Flutter)
                      </option>
                    </Form.Select>
                  </Form.Group>
                  {errors.package && <p>{errors.package.message}</p>}
                </section>
              )}

              {formStep === 2 && (
                <section>
                  {/* <div className="success">
                                    <img src={images.success} />
                                    <h1>Success!</h1>
                                    <p>You have sucessfully sent your application.</p>
                                    <button><Link to="/payment"> Continue </Link></button>
                                </div> */}
                </section>
              )}

              {renderButton()}
              {/* <pre>
                                {JSON.stringify(watch(), null, 2)}
                            </pre> */}
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Payment;
