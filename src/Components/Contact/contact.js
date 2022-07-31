import { useState, useRef } from "react";
import contactImage from '../../assets/img/contact-img.svg';
import { Row, Col, Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './contact.css';

export const Contact = () => {



    const [buttonText, setButtonText] = useState('Send');





    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText('Sending...');

        emailjs.sendForm('service_bhhmfd8', 'template_rlkudd5', form.current, 'HhP5pu8zOUNhAUVO7')
            .then((result) => {


                alert("Message Sent Successfully.");
                setButtonText("Send");
            }, (error) => {

                alert("Something went wrong, try again later ):");
                setButtonText("Send");
            });


    };
    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImage} alt="" />
                    </Col>

                    <Col md={6}>
                        <h2>
                            Get In Touch
                        </h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row className="Row">
                                <Col size={12} sm={9} className="px-1">
                                    <input type="text" placeholder="Subject" name='subject' required />
                                </Col>
                                <Col size={12} sm={9} className="px-1">
                                    <input type="text" placeholder="Full Name" name="name" required />
                                </Col>
                                <Col size={12} sm={9} className="px-1">
                                    <input type="email" placeholder="Email Address" name="email" required />
                                </Col>
                                <br />
                                <Col size={12} className="px-1">
                                    <textarea rows="6" placeholder="Message" name="message" required />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>

                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}