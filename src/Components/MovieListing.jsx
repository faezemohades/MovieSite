import { Link } from "react-router-dom";
import { Container,Col,Row,Card } from 'react-bootstrap';
import Slider from "react-slick";
import MovieCard from './MovieCard';
import InfiniteScroll from "react-infinite-scroll-component";
import ScrolLoading from './ScrolLoading';
import Loading from '../Components/Loading';
import { MovieSetting } from './common/sliderSetting';
import useFetchMovieListing from '../hooks/useFetchMovieListing';
   
function MovieListing() {

    const { loading, posts, fetchChannelDetail, setCPosts } = useFetchMovieListing();

    return (
        <>
            {loading ?
                (<Loading />)
                :
                (<Container fluid  className="series-sec ">
                    <div className='text-light home-title ' >
                  <h2 className="font-kuluche m-0"> سریالی</h2>
            </div>
            {/*scroll loading*/}
            <InfiniteScroll
                dataLength={posts.length}
                next={() => {
                    fetchChannelDetail(setCPosts, posts);
                }}
                hasChildren={true}
                hasMore={true}
                loader={<ScrolLoading />}>
                <>
                    {posts && posts.map((item, id) => (
                                        <Row style={{ margin: "0 auto" }} className="d-flex align-items-center justify-content-center  mx-2 my-lg-3" key={id}>
                                <Col lg={2} md={4} sm={6} xs={4} className='movielist-title'> </Col>
                                {/*channel pic goes here*/}
                                            <Col lg={2} md={5} sm={5} xs={0}  >
                                    <Link to={`/Home/Channels/${item.id}/${item.title.replaceAll(/\s+/g, "-").replaceAll('---', '-') }`} className="d-flex  align-items-center justify-content-center">
                                        <Card style={{ width: '12rem' }} className="box">
                                           <Card.Img variant="top" src={item.image}   />
                                            <Card.Body className="box-content">
                                                <div className="overlay-img">
                                                    <img src={item.image} />
                                                </div>
                                                <div className="inner-content">
                                                    <Card.Title className="title ">{item.title}</Card.Title>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                            {/*title of movie listing*/}
                                            <Col lg={10} md={5} sm={6} xs={12} className='movielist-title mb-4' >
                                                <Link to={`/Home/Channels/${item.id}/${item.title.replaceAll(/\s+/g, "-").replaceAll('---', '-')}`} style={{ textDecoration: "none" }} >
                                                    <div className="d-flex justify-content-center pt-0 text-white">
                                                        <p className="m-0 pt-1 font-kuluche" style={{ fontSize: "18px" }}>{item.title}</p>
                                                    </div>
                                                </Link>
                                            </Col>
                                {/*channel items goes here*/}
                                <Col lg={10} md={7} sm={7} xs={12} className="chanel-item">
                                    <div>
                                        <div className=" mx-2 " >
                                            <Slider {...MovieSetting}>
                                                {item.videos.map((movie, id) => (
                                                    <MovieCard key={id} movie={movie} />
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        ))}
                </>
            </InfiniteScroll>
        </Container>) }
        </> 
    );
}

export default MovieListing;

 