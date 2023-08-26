import { Carousel } from "react-bootstrap";
import img1 from '../assets/wlc.jpg';
import img2 from '../assets/pst.jpg';
import img3 from '../assets/lady.jpg';
import img4 from '../assets/wsp.jpg';
import { Link } from "react-router-dom";

const items = [
    {
        'image': img1,
        'title': '',
        'description' : ''
    },
    {
        'image': img2,
        'title': 'Never underestimate the power of God,',
        'description' : ' working in you and with you. As you do things mention a word of prayer to God. Declare a prophetic word upon your life.'
    },
    {
        'image': img3,
        'title': 'We are Here to Help you,',
        'description' : 'grow a healthy spiritual life. Contact us through the contacts details provided anytime.'
    },
    {
        'image': img4,
        'title': 'Come Worship with us,',
        'description' : ' OFF Kericho-Nakuru Road, Kwa Michael, 200 metres from main road.'
    }
]

export default function AppHero(){
    return (
        <section id="home" className="hero">
            <Carousel>
                { items.map(item => (
                    <Carousel.Item key={item.image}>
                        <img className="w-100" src={item.image} alt="Slide1" />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="fab text-right fixed-bottom">
                <Link to={'https://wa.me/254717885510'} className="whatsapp">
                    Chat on Whatsapp
                </Link>
            </div>
        </section>
    );
}