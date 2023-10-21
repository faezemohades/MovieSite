import { Row, Col, Container } from 'react-bootstrap';
import Slider from "react-slick";
import Loading from './Loading';
import AnimeCard from './AnimeCard';
import { animationSetting } from './common/sliderSetting';
import useFetchAnimation from '../hooks/useFetchAnimation';

function Anime() {

    const { loading, VideoItems } = useFetchAnimation();

    return (
        <Container fluid className="home-char" >
            {loading ? <Loading /> :
                (
                    <>
                        <Row>
                            <Col className="text-light mt-2">
                                <div className="home-row">
                                    <p className="home-char-title">سینمایی</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="p-0" className="d-flex justify-content-center">
                            <Col lg={12} md={12} sm={11} xs={12}  >
                                <div className=" p-0 " >
                                    <div className="my-1 mx-2 py-0" >
                                        <Slider {...animationSetting}>
                                            {VideoItems && VideoItems.map((movie, id) => (
                                                <AnimeCard key={id} movie={movie} />
                                            ))}
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

export default Anime;

