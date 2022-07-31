import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl, technologyStack }) => {
    return (
        <Col sm={6} md={5}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <h5>Description</h5>
                    <span>{description}</span>
                    <br />
                    <h5>Technologies</h5>
                    <span>{technologyStack}</span>







                </div>
            </div>

        </Col>
    )
}