import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import circle2 from '../../assets/img/color-sharp2.png';
import OtakuMania from '../../assets/img/Otaku.png';
import HMS from '../../assets/img/HMS1.png';
import MHA from '../../assets/img/MHA.png';
import QuizApp from '../../assets/img/QuizApp7.png';
import ProcessSheduling from '../../assets/img/ProcessScheduling.png';
import Portfolio from '../../assets/img/Portfolio.png';
import PixelShop from '../../assets/img/PixelShop.png';
import './Project.css';

export const Projects = () => {
    const projects = [
        {
            title: "Personal Portfolio",
            description: "Personal Portfolio",
            technologyStack: "React,Node.js,Swiper.js,Animation.js,HTML5,Bootstrap,CSS",
            imgUrl: Portfolio,
        },

        {
            title: "MHA",
            description: "Online shopping site without payment methode",
            technologyStack: "Php,HTML5,CSS,Vanilla JS,MySql,Bootstrap",
            imgUrl: MHA,
        },
        {
            title: "OtakuMania",
            description: "Front-end of anime streaming site",
            technologyStack: "HTML5,CSS and Vanilla JS",
            imgUrl: OtakuMania,
        },
        {
            title: "HMS",
            description: "Hospital Management System having file handling as local storage.",
            technologyStack: "C++,OOP",
            imgUrl: HMS,
        },
        {
            title: "Quiz Examination System",
            description: "A simple Quiz Application.the help of Java,JavaFX,Java Swing",
            technologyStack: "Java,Java Swing,MySQL,MS Access,Ant",
            imgUrl: QuizApp,
        },
        {
            title: "Process Scheduling",
            description: "A simple process scheduller that displays difference between different process schedulling techniques of OS",
            technologyStack: "C++,POSIX Library",
            imgUrl: ProcessSheduling,
        },
        {
            title: "Pixel Shop",
            description: "Simple dynamic front-end of online shopping site having data fecthed from created API",
            technologyStack: "AngularJs,TypeScript,HTML5,CSS,Bootstrap,C#,Karma.js",
            imgUrl: PixelShop,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Following are My Projects:</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab 3
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.slice(0, 2).map((project, index) => {
                                                return <ProjectCard key={index} {...project} />
                                            })



                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects.slice(2, 4).map((project, index) => {
                                                return <ProjectCard key={index} {...project} />
                                            })



                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projects.slice(4, projects.length).map((project, index) => {
                                                return <ProjectCard key={index} {...project} />
                                            })

                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>

            </Container>
            <img src={circle2} className="bg-right" alt=" " />
        </section>
    )
}
