import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Slider from "react-slick";
import character from '../data/character.json';
import { ChannelSetting } from './common/sliderSetting';
import HomeCharCard from './HomeCharCard';
import Loading from './Loading';
 
function Channel() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 900);
        }
    }, [loading]);

    return (
        <Container fluid className="home-char" >
            {loading ? <Loading /> :
                (
                    <>
                        <Row>
                            <Col className="text-light mb-2 ">
                                <div className="home-row">
                                    <p className="home-char-title">کانال ها</p>
                                </div>
                            </Col>             
                        </Row>
                        <Row >
                            <Col>
                                <div>
                                    <div className=" my-1 mb-2 mx-4  ">
                                        <Slider {...ChannelSetting}>
                                            {
                                                character.Characters.map((item, id) =>
                                                (<HomeCharCard item={item} key={id} />
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                </div>
                              </Col>
                        </Row>
                    </>
                )}
    </Container>
  );
}

export default Channel;

