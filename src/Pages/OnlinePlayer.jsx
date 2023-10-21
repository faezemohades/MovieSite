//import React, { useEffect, useState } from 'react';
//import ReactJWPlayer from 'react-jw-player';
//import { Container, Row, Col } from 'react-bootstrap';
//import Slider from "react-slick";
//import { motion } from "framer-motion";
//import MyHelmet from '../Components/MyHelmet';
//import Scroll from '../Components/Scroll';
//import CharCard from '../Components/CharCard';
//import character from '../data/character.json';
//import Loading from '../Components/Loading';

////bottom slider setting  
//const horizentalSetting = {
//    dots: false,
//    infinite: true,
//    slidesToShow: 6,
//    slidesToScroll: 2,
//    speed: 500,
//    swipeToSlide: true,
//    autoplay: true,
//    responsive: [
//        {
//            breakpoint: 1300,
//            settings: {
//                slidesToShow: 6,
//                slidesToScroll: 1,
//                infinite: true,
//                dots: false
//            }
//        },
//        {
//            breakpoint: 1024,
//            settings: {
//                slidesToShow: 7,
//                slidesToScroll: 1,
//                infinite: true,
//                dots: false,
//                arrows: false,

//            }
//        },
//        {
//            breakpoint: 768,
//            settings: {
//                slidesToShow: 6,
//                slidesToScroll: 1,
//                initialSlide: 1,
//                arrows: false,

//            }
//        },
//        {
//            breakpoint: 600,
//            settings: {
//                slidesToShow: 4,
//                slidesToScroll: 1,
//                initialSlide: 1,
//                arrows: false,

//            }
//        },
//        {
//            breakpoint: 480,
//            settings: {
//                slidesToShow: 3,
//                slidesToScroll: 1,
//                arrows: false,


//            }
//        }

//    ]
//}


////right slider setting  
//const verticalSettings = {
//    infinite: true,
//    slidesToShow: 8,
//    slidesToScroll: 1,
//    vertical: true,
//    autoplay: true,
//    speed: 3000,
//    autoplaySpeed: 3000,
//    cssEase: "linear",
//    arrows: false,
//    swipeToSlide: true,
//    verticalSwiping: true,
//    responsive: [

//        {
//            breakpoint: 1440,
//            settings: {
//                slidesToShow: 6,
//                slidesToScroll: 1,
//                infinite: true,
//                dots: false
//            }
//        },
//        {
//            breakpoint: 1300,
//            settings: {
//                slidesToShow: 6,
//                slidesToScroll: 1,
//                infinite: true,
//                dots: false
//            }
//        },
//        {
//            breakpoint: 1024,
//            settings: {
//                slidesToShow: 6,
//                slidesToScroll: 1,
//                infinite: true,
//                dots: false,
//                arrows: false,

//            }
//        },
//        {
//            breakpoint: 600,
//            settings: {
//                slidesToShow: 3,
//                slidesToScroll: 1,
//                initialSlide: 1,
//                arrows: false,

//            }
//        },
//        {
//            breakpoint: 480,
//            settings: {
//                slidesToShow: 1,
//                slidesToScroll: 1,
//                arrows: false,


//            }
//        }
//    ],

//}


//function OnlinePlayer() {

    

//    const [loading, setLoading] = useState(true);
 

//    //fetch movieDetail api


//    useEffect(() => {
//        setLoading(false); 
    
//    }, []);




 
//    return (

//        <Container fluid className="mt-5">

//            <Scroll />

//            {loading ? (
//                <Loading />
//            ) : (
//                <>

                   
//                        {/*helmet goes here*/}
                       
//                            <div   >
//                                <MyHelmet title="کارتونکده" description="تماشای آنلاین کارتون"  url="https://kids.mp4.ir/live"/>
//                            </div>
                       


//                    <Row >
//                        <Col lg={1} md={0} sm={0} xs={0}></Col>

//                    {/*vertical slider goes here*/}

//                        <Col lg={2} md={0} sm={0} xs={0} className="side-plyr" style={{ marginTop: '82px', borderRadius: "5px" }}>

//                            <div className="chanel-side">

//                                <motion.div initial={{ opacity: 0, scale: 0.5 }}
//                                    animate={{ opacity: 1, scale: 1 }}
//                                    transition={{
//                                        duration: 0.4,
//                                        delay: 0.4,
//                                        ease: [0, 0.71, 0.2, 1.01]
//                                    }} >

//                                    <Slider {...verticalSettings} >

//                                        {
//                                            character.Characters.map((item, id) =>
//                                                (<CharCard item={item} key={id} />))
//                                        }
//                                    </Slider>

//                                </motion.div>
//                            </div>

//                        </Col>

//                        {/*Player goes here*/}

//                        <Col lg={8} md={12} sm={12} xs={12} className="pt-2 px-2" >

                            
//                                <div  >

//                                    <div className="pt-4 pb-2 px-3 text-white">
//                                        <p style={{ margin: "0px" }} className="movie-title">  کارتونکده  </p>
//                                    </div>


//                                    <div style={{ margin: "0 auto", width: "98%", padding: "10px", background: "rgba(36, 36, 36, 0.23)", borderRadius: "5px" }}  >

//                                        <div className="embed-container ">
                                          
//                                            <ReactJWPlayer
//                                                playerId="123"
//                                                playerScript="https://cdn.jwplayer.com/libraries/cDnha7c4.js"
//                                                file="https://dl13.mp4.ir/video/live/kids/1020/m3u8/1020.m3u8"
//                                                aspectRatio="16:9"
//                                                isAutoPlay={true} 
//                                                customProps={{
//                                                    playbackRateControls: [1, 1.25, 1.5],
//                                                    cast: {}
//                                                }}
//                                            />
//                                        </div>

//                                        <div className="d-flex justify-content-between align-items-center  "  >
//                                            <div className="py-3 px-3 text-white">
//                                                <p style={{ wordBreak: "break-word" }}> </p>
//                                            </div>
//                                        </div>
//                                    </div>
//                                </div>
                             
//                        </Col>

//                        <Col lg={1} md={0} sm={0} xs={0}  ></Col>
//                    </Row>

//                    {/*horizental slider goes here*/}

//                    <Container fluid className="mb-5">

//                        <Row className="bottom-plyr">

//                            <Col lg={11} md={12} sm={12} xs={12}>
//                                <div >
//                                    <motion.div className=" mt-3 px-4"
//                                        initial={{ opacity: 0, scale: 0.5 }}
//                                        animate={{ opacity: 1, scale: 1 }}
//                                        transition={{
//                                            duration: 0.8,
//                                            delay: 0.5,
//                                            ease: [0, 0.71, 0.2, 1.01]
//                                        }}>
//                                        <Slider {...horizentalSetting}>
//                                            {
//                                                character.Characters.map((item, id) =>
//                                                (<CharCard item={item} key={id} />
//                                                ))
//                                            }
//                                        </Slider>

//                                    </motion.div>
//                                </div>

//                            </Col>
//                        </Row>

//                    </Container>

//                </>
//            )}

//        </Container>
//    );
//}

//export default OnlinePlayer;