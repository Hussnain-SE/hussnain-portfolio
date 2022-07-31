import { Container, Row } from "react-bootstrap"
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';


import './footer.css';

export const Footer = () => {


    return (
        <footer className="footer">
            <Container className="contain">
                <Row className="align-item-center justify-content-space-evenly">

                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/hussnain-ali-202738191/"><img src={navIcon1} alt="" /></a>
                        <a href="https://www.facebook.com/hussnain.ali.52459615"><img src={navIcon2} alt="" /></a>
                        <a href="https://www.instagram.com/mrzahussnain/?hl=en"><img src={navIcon3} alt="" /></a>

                    </div>

                    <p>CopyRight 2022, All Rights Reserved By Hussnain Ali</p>


                </Row>
            </Container>
        </footer>
    )
}