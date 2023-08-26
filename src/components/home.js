import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebook from '../assets/facebook.svg';
import you from '../assets/yuo.png';
import tiktok from '../assets/tiktok.svg';
import intl from '../assets/intl3.png';
import '../App.css';
import { Link, Outlet } from "react-router-dom";
import { faBible, faHeart, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";
import { useEffect, useState } from "react";

function Home() {
    const [fixed, setFixed ] = useState(false)
    useEffect(() =>{
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 100){
                setFixed(true)
            }
            else{
                setFixed(false)
            }
        })
    },[])
    return (<>
    <header className={fixed ? "fixed-top" : ''}>
        <Navbar className="nav justify-content-between">
            <div className="top">
                +254717885510 |  nowintlfamilychuch@gmail.com 
            </div>
            <div className="top pull-right">
                <Link to={'https://www.facebook.com/kiptoo.maiyo'} className="img-link">
                    <img src={facebook} className="img" alt="facebook" /></Link>
                <Link to={'https://www.youtube.com/@pastorkiptoomaiyo5913'} className="img-link">
                    <img src={you} className="img" alt="youtube" /></Link>
                <Link to={'https://vm.tiktok.com/ZM2oREvJ9/'} className="img-link">
                    <img src={tiktok} className="img" alt="Tweeter" /></Link>
            </div>
        </Navbar>
        <Navbar expand="lg" className="bg-body-tertiary" >
            <Container>
                <Navbar.Brand href="/">
                    <img src={intl} alt='Logo' width={40} height={40}/>
                    <b>The Now Int'l Family Church Kericho</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/#home" className="text-blue">
                        <FontAwesomeIcon icon={faHouse} className="m-1 mt-0 mb-0" />Home</Nav.Link>
                    <Nav.Link href="/#services" className="text-blue">
                        <FontAwesomeIcon icon={faUser} className="m-1 mt-0 mb-0" /> About</Nav.Link>
                    <Nav.Link href="sermons#" className="text-blue">
                        <FontAwesomeIcon icon={faBible} className="m-1 mt-0 mb-0" />Sermons</Nav.Link>
                    <Nav.Link href="#footer" className="text-blue">
                        <FontAwesomeIcon icon={faHeart} className="m-1 mt-0 mb-0" /> Give</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
    <Outlet />
    <section>
        <Footer />
    </section>
    </>
    );
}

export default Home;