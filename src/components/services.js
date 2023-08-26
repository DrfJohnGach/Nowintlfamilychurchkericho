import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Services(){
    return(
            <Container fluid id="services" className="services">
                <Container>
                <Row>
                    <Col sm={true}>
                        <h2><b><span className="our">Our</span> Services</b></h2>
                        <ul>
                            <p>Sunday Services</p>
                            <ul>
                                <li>Church School <span>9:30am-10am</span></li>
                                <li> Main Service <span>10am-12pm</span></li>
                            </ul>
                            <p>Wedndsday Service <span>5pm-6:30pm</span></p>
                            <p>Friday Prayer Service <span>5pm-6:30pm</span></p>
                        </ul>
                    </Col>
                    <Col sm={true}>
                        <h2><b><span className="our">Our</span> Belief</b></h2>
                        <p>The Holy Trinity, God the Father, God the Son, God the Holy Spirit, <br /> 
                            and the power we gain in faith to overcome any situation.
                        </p>
                        <p><b>Philippians 4:13;</b>I can do all things through christ who strenthens me.</p>
                    </Col>
                    <Col sm={true}>
                        <h2><b>Sermons</b></h2>
                        <p>Watch video or listen to audio sermons from our Minister, Pastor Kiptoo Maiyo</p>
                        <Link to={`sermons`} className="btn btn-danger">Watch videos<FontAwesomeIcon icon={faArrowCircleRight} /></Link>
                    </Col>
                </Row>
            </Container>
            </Container>
    )
}
