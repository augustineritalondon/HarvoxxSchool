import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components'
import { MdClose } from 'react-icons/md';
import images from "../../assets/images/image";
import './Modal.css'
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";


const Background = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
position: fixed;
z-index: 3000;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
`;

const ModalWrapper = styled.div`
width: 80vw;
height: 50vh;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
position: relative;
z-index: 9000;
border-radius: 10px;
`;

const ModalImg = styled.img`
width: 100%;
border-raidus: 10px 0 0 10px;
background: #000;
`;

const ModalContent = styled.div`
  line-height: 1.8;
  color: #000;
  text-align:center;
  padding: 100px 0;
  h3 {
    margin-bottom: 1rem;
    color: rgb(6, 182, 20);
  }
  button {
    padding: 10px 24px;
    background: linear-gradient(
        90.08deg, #FF3F34 -8.44%, #FF6D34 111.83%);
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Modal = ({ showModal, setShowModal }) => {

    const [check, setCheck] = useState()

    const modalRef = useRef();

    const {
        watch,
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: "all" });

    // const [sub]

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress])



    const checkName = (data) => {

        if (data.email === "rita@gmail.com") {
            console.log(data.email)
            setCheck(true)
        } else {
            console.log("why")
            setCheck(false)
        }

        // data.email === "rita@gmail.com" ? ()


        // var config = {
        //   method: "post",
        //   url: "https://harvoxxtest.com.ng/harvoxx-school/registration.php",
        //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
        //   data: qs.stringify(data),
        // };

        // axios(config)
        //   .then((response) => {
        //     console.log(response.data);
        //     if (response.data.res === "success") {
        //       Swal.fire({
        //         title: "Success!",
        //         text: "Your registrations was successful",
        //         icon: "success",
        //         confirmButtonText: "Continue",
        //       }).then((result) => {
        //         if (result.value) {
        //           history.push("/");
        //         }
        //       });
        //     } else {
        //       Swal.fire({
        //         title: "Error!",
        //         text: "Please check your network connection",
        //         icon: "error",
        //         confirmButtonText: "Try again",
        //       });
        //     }
        // })
        // .catch((error) => {
        //     Swal.fire({
        //       title: "Error!",
        //       text: "Please check your network connection",
        //       icon: "error",
        //       confirmButtonText: "Try again",
        //     });
        // });

    };

    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>
                            {/* <ModalImg src={require('../../assets/images/checked.png')} alt="image" /> */}

                            <ModalContent>
                                {/* <img src={images.success} /> */}

                                <h3>Hello there!</h3>
                                <h3>The registration for this training has ended!</h3>

                                {/* <Form onSubmit={handleSubmit(checkName)}>
                                    <Form.Group className="mb-3 mt-4">
                                        <Form.Label>Enter Your Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter Your Email Here"
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
                                    {errors.email && <p className='error-message'>{errors.email.message}</p>}


                                    <button className='mt-3'>Check</button>
                                </Form> */}


                                {check === true ? 
                                    <div className='mt-3'>
                                        <h3>Congratulations</h3>
                                        <p>You have been selected to be a part of the DSP training, <br /> click the button below to print acceptance letter</p>
                                    </div>
                                    : 
                                    <div className='mt-3'>
                                        <h3>Oops!!!</h3>
                                        {/* <p>Unfortunately You were not selected to be a part of the DSP training, <br /> Better Luck next time</p> */}
                                    </div>
                                }


                            </ModalContent>

                            <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}></CloseModalButton>
                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    )
}

export default Modal
