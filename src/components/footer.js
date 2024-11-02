import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import facebook from '../assets/facebook.svg';
import you from '../assets/yuo.png';
import tiktok from '../assets/tiktok.svg';

export default function Footer(){
    return(
        <Container fluid id="footer" className="footer">
            <Container>
                <Row>
                    <Col sm={true}>
                        <h4><b><span className="our">Contact</span> Details</b></h4>
                        <ul>
                            <li><FontAwesomeIcon icon={faEnvelope} className="m-3 mt-0 mb-0" />  nowintlfamilychuch@gmail.com </li>
                            <li><FontAwesomeIcon icon={faPhone} className="m-3 mt-0 mb-0" /> +254 717 885 510</li>
                            <li><FontAwesomeIcon icon={faLocationDot} className="m-3 mt-0 mb-0" />
                            OFF Kericho-Nakuru Road, Kwa Michael, 200 metres from main road.</li>
                        </ul>
                    </Col>
                    <Col sm={true}>
                        <h4><b><span className="our">Quick</span> Links</b></h4>
                        <ul>
                            <li className="li"><Link to={'#'} className="link">Contact Us</Link></li>
                            <li className="li"><Link to={'#'} className="link">About Us</Link></li>
                            <li className="li"><Link to={'#'} className="link">Sermons</Link></li>
                            <li className="li"><Link to={'#'} className="link">Give</Link></li>
                            <li>
                                <div className="mt-1">
                                    <Link to={'https://www.facebook.com/kiptoo.maiyo'} className="img-link">
                                        <img src={facebook} className="img1" alt="facebook" /></Link>
                                    <Link to={'https://www.youtube.com/@pastorkiptoomaiyo5913'} className="img-link">
                                        <img src={you} className="img1" alt="youtube" /></Link>
                                    <Link to={'https://vm.tiktok.com/ZM2oREvJ9/'} className="img-link">
                                        <img src={tiktok} className="img1" alt="Tweeter" /></Link>
                                </div>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={true}>
                        <h4><b><span className="our">Donate </span>/ Give</b></h4>
                        <ul>
                            <li><b>- Mpesa to Pastor Kiptoo Maiyo through: </b></li>
                            <li><b>- </b><u>+254 717 885 510</u></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
