import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Map(){
    return (<>
        <Container className="video" fluid>
            <Row>
                <Col sm={true}>
                    <div className="m-3">
                        <h3>A Word from our Minister Pst. Kiptoo Maiyo.</h3>
                        <p><b>Topic: </b> Practical Living</p>
                        More sermons in the sermons page<br/>
                        <Link to={`sermons`} className="btn btn-danger">View All 
                        <FontAwesomeIcon icon={faArrowCircleRight} /> </Link>                
                    </div>
                </Col>
                <Col sm={true}>
                    <iframe className="m-3" width="660" height="415" src="https://www.youtube.com/embed/h41eSseXJVs" 
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </Col>
            </Row>
        </Container>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.740939911332!2d35.
                29582337412741!3d-0.35684313531478484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                1!3m3!1m2!1s0x182a59f9ae5716f5%3A0x19950a73bb073783!2sThe%20Now%20Int&#39;
                l%20Family%20Church%20Kericho!5e0!3m2!1sen!2ske!4v1692177428290!5m2!1sen!2ske" allowFullScreen
                title='Our location' loading="lazy" referrerPolicy="no-referrer-when-downgrade" width='100%' height="400">
                </iframe>
            </div>
        </>
    )
}