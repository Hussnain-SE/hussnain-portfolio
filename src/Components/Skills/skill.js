import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import scale1 from '../../assets/img/meter1.svg';
import scale2 from '../../assets/img/meter2.svg';
import scale3 from '../../assets/img/meter3.svg';
import circle from '../../assets/img/color-sharp.png';

import './skill.css';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Following are my skills:
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={scale1} alt="" />
                                    <h5>
                                        Web Development
                                    </h5>

                                </div>

                                <div className="item">
                                    <img src={scale2} alt="" />
                                    <h5>
                                        HTML5
                                    </h5>

                                </div>

                                <div className="item">
                                    <img src={scale3} alt="" />
                                    <h5>
                                        CSS
                                    </h5>


                                </div>

                                <div className="item">
                                    <img src={scale1} alt="" />
                                    <h5>
                                        React
                                    </h5>

                                </div>

                                <div className="item">
                                    <img src={scale2} alt="" />
                                    <h5>
                                        OOP
                                    </h5>
                                </div>

                                <div className="item">
                                    <img src={scale2} alt="" />
                                    <h5>
                                        Java
                                    </h5>
                                </div>

                                <div className="item">
                                    <img src={scale3} alt="" />
                                    <h5>
                                        Redux
                                    </h5>
                                </div>

                                <div className="item">
                                    <img src={scale2} alt="" />
                                    <h5>
                                        Node.js
                                    </h5>
                                </div>

                                <div className="item">
                                    <img src={scale1} alt="" />
                                    <h5>
                                        C++
                                    </h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-left" src={circle} alt="" />
        </section>
    )
}