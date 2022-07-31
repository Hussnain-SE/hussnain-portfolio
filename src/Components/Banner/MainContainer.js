import { Row, Container, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImage from '../../assets/img/header-img.svg';
import cv from './Resume.pdf';
import ME from '../../assets/img/MeT.png';
import { useEffect, useState } from 'react';
import './MainContainer.css';



export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Web Developer", "Freelancer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {
            clearInterval(ticker)
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])



    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);

        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <Router>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline">About Me</span>
                            <br />
                            <img src={ME} alt="" className='mePic' />
                            <h1>{`Hi I'm Hussnain`}<br /><span className="wrap">{text}</span></h1>

                            <p>
                                An aspiring Software Engineer with the ambition and interest of developing and designing softwares. I have the expertise in not only Web Development but also have experience with developing responsive cross-plateform mobile applications based on flutter and dart.
                            </p>

                            <div className='button-div'>
                                <HashLink to='#contact' style={{ textDecoration: 'none' }}>
                                    <button>Let's Connect<ArrowRightCircle size={25} /></button>
                                </HashLink>
                                <a href={cv} download> <button>Download CV<ArrowRightCircle size={25} /></button></a>
                            </div>

                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImage} alt="" className="BannerImage" />

                        </Col>
                    </Row>
                </Container>
            </section>
        </Router>

    )
}