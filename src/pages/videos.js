import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import axiosInstance from "../components/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios";

export default function Sermons(){
    const [song, setsong] = useState();
    const [videos, setvideos] = useState([]);
    const [data, setData] = useState([]);
    const [isvloaded, setVloaded] = useState(false);
    const [isloaded, setLoaded] = useState(false);
    
    useEffect(() =>{
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCMRT1Iy49Jmy4JReNqFeehw&maxResults=50&order=date&key=AIzaSyASTJ4rZSUHAsJ8OZCYzSZhw2EHtnVhaNs")
        .then(res =>{
            setvideos(res.data.items)
        })
        .catch(err =>{
            console.log(err)
        }).finally(() =>{
            setVloaded(true)
        })
        axiosInstance.get('/audios?ordering=-id')
        .then((res) =>{
            setData(res.data)
        })
        .catch((error) =>{
            alert(error.code + '...' + error.message)
        }).finally(() =>{
            setLoaded(true)
        })
    },[])
    return(
        <Container fluid id="sermons" className="audio">
            <h5 className="m-3"><b>Video sermons on Youtube...</b></h5>
            <Row>
                {
                    isvloaded ? videos.map((video) =>{
                        return(
                            <Col xs={6} md={4} lg={3} className="mb-2">
                                <iframe className="m-3" src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; 
                                encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                                </iframe>
                            </Col>
                        )
                    }) : <div className=""><Spinner /></div>
                }
            </Row>
            <h5 className="m-3"><b>Audio sermons...</b></h5>
            <Row>
                {
                    isloaded ? data.map((item) =>{
                        return(
                            <Col  key={item.id} xs={6} md={4} lg={3} className="mb-2">
                                <Card onClick={() => setsong(item.audio)}>
                                    <Card.Img variant="top" src={item.image} height={150} />
                                    <Card.ImgOverlay className="shadow-lg">
                                        <Card.Title>{item.title}</Card.Title>
                                    </Card.ImgOverlay>
                                    <Card.Body className="text-white">
                                        <FontAwesomeIcon 
                                        icon={ faPlayCircle} 
                                        className="text-white m-2 mt-1 mb-0" />
                                        <Card.Text className="m-0 p-0">{item.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }) : <div className=""><Spinner /></div>
                }
                <ReactAudioPlayer className="fixed-bottom w-80"
                src={song}
                autoPlay
                controls
                />
            </Row>
        </Container>
    )
}