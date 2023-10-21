import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import { motion } from "framer-motion";
import MyHelmet from '../Components/MyHelmet';
import Scroll from '../Components/Scroll';
import CharCard from '../Components/CharCard';
import character from '../data/character.json';
import Loading from '../Components/Loading';
import { Link, useParams } from "react-router-dom";
import Related from '../Components/Related';
import Pagenotfound from '../Components/Pagenotfound';
import { horizentalSetting, verticalSettings } from '../Components/common/sliderSetting';
import useFetchMovieDetail from '../hooks/useFetchMovieDetail';
 
function MovieDetail() {

    let { id } = useParams();
    const { loading, movieItems, notFound } = useFetchMovieDetail(id);

    if (notFound) return <Pagenotfound/>

    return (
        <Container fluid className="mt-5">
            <Scroll />
            {loading ? (
                <Loading/>
            ) : (<>
                {/*helmet goes here*/}
                 {movieItems.data.map((item) => (
                  <div key={item.id} >
                  <MyHelmet title={item.title} description={item.description} keywords={item.tags} url={`https://kids.mp4.ir/Home/Video/${item.name}/${item.title.replaceAll(/\s+/g, "-").replaceAll('---', '-')}`}   image={item.image} />
                     </div>
                        ))}
                        <Row >
                        <Col lg={1} md={0} sm={0} xs={0}></Col>
                        {/*vertical slider goes here*/}
                        <Col lg={2} md={0} sm={0} xs={0} className="side-plyr" style={{ marginTop: '73px', borderRadius: "5px" }}>
                            <div className="chanel-side">
                                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.4,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }} >
                                    <Slider {...verticalSettings} >
                                        {
                                            character.Characters.map((item,id) =>
                                                (<CharCard item={item} key={id } />))
                                        }
                                    </Slider>
                                </motion.div>
                            </div>
                        </Col>
                        {/*iframe goes here*/}
                        <Col lg={8} md={12} sm={12} xs={12} className="pt-2 px-2" >
                            {movieItems.data.map((item) => (
                                <div key={item.id}>
                                <div  className="pt-4 pb-2 px-3 text-white">
                                    <h1 style={{ margin: "0px" }} className="movie-title">{item.title}</h1>
                                </div>
                                    <div style={{ margin: "0 auto", width: "98%", padding: "10px", background: "rgba(36, 36, 36, 0.23)", borderRadius: "5px" }}  >
                                     <div className="embed-container ">
                                            <iframe src={item.embed} frameBorder='0' allowFullScreen={true} allow="autoplay; encrypted-media" style={{ borderRadius: "5px" }} />
                                </div>
                                    <div className="d-flex justify-content-between align-items-center  " key={item.id}>
                                            <div className="py-3 px-3 text-white"> 
                                                <p style={{ wordBreak: "break-word" } }>{item.description}</p>
                                             </div>
                                        </div>
                                    </div>
                            </div>
                                ))}
                        </Col>
                        <Col lg={1} md={0} sm={0} xs={0}  ></Col>
                    </Row>
                    {/*horizental slider goes here*/}
                    <Container fluid className="mb-5">
                        <Row className="bottom-plyr">
                            <Col lg={11} md={12} sm={12} xs={12}>
                                <div >
                                    <motion.div className=" mt-3 px-4"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.5,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        }}>
                                            <Slider {...horizentalSetting}>
                                            {
                                                character.Characters.map((item,id) =>
                                                (<CharCard item={item} key={id} />
                                                ))
                                            }
                                        </Slider>
                                    </motion.div>
                                </div>
                            </Col>
                        </Row>
                        </Container>
                        {/*related video goes here*/}
                        <Row className="my-3 pt-2">
                            <Col lg={1} md={1} sm={1} xs={0}  ></Col>
                            <Col lg={10} md={10} sm={10} xs={12} className="pt-2 px-2 d-flex justify-content-center" >
                                {movieItems.data.map((item,id) => (
                                    <motion.div className="text-light" key={id} whileHover={{ scale: 1.05 }}
                                        onHoverStart={e => { }}
                                        onHoverEnd={e => { }}
                                        whileTap={{ scale: 0.9 }}>
                                        <Link to={`/Home/Channels/${item.channelID}/${item.title.replaceAll(/\s+/g, "-").replaceAll('---','-')}`} className="text-link">
                                            <h4 className="related-title">{`ویدیو های مرتبط با ${item.channelName}`}</h4>
                                        </Link>
                                    </motion.div>))}    
                            </Col> 
                            <Col lg={1} md={1} sm={1} xs={1}  ></Col>
                        </Row>
                        <Row>
                            <Col lg={1} md={1} sm={1} xs={1}  ></Col>
                            <Col lg={10} md={10} sm={10} xs={12} className="pt-2 px-2" >
                        {movieItems.data.map((item,id) => ( 
                            <Related key={id} item={item} />))}
                            </Col>
                            <Col lg={1} md={1} sm={1} xs={0}  ></Col>
                        </Row>
                    </>
            )}
       </Container>
  );
}

export default MovieDetail;