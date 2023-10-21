import { Container,Row,Col,Card } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import MyHelmet from '../Components/MyHelmet';
import { motion } from "framer-motion";
import Scroll from '../Components/Scroll';
import Loading from '../Components/Loading';
import 'react-loading-skeleton/dist/skeleton.css';
import Pagenotfound from '../Components/Pagenotfound';
import useFetchChannelDetail from '../hooks/useFetchChannelDetail';
 
function ChanelDetail() {

    let { id } = useParams();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    const { loading, chanelItems, notFound } = useFetchChannelDetail(id);
   
    if (notFound) return <Pagenotfound />

    return (

        <Container fluid  >
            <Scroll />
            {loading ? (
                <Loading/>
            ) : (
                    <>
                        {/*meta tag of helmet goes here*/}    
                        {chanelItems.data.slice(0,1).map((item) => (
                            <div key={item.id} >
                                <MyHelmet title={item.channelName} description={item.channelName}
                                    url={`https://kids.mp4.ir/Home/Channels/${item.channelID}/${item.channelName.replaceAll(/\s+/g, "-").replaceAll('---', '-')}`}
                                    keywords={item.tags} image={item.image} />
                            </div>
                        ))}
                      {/*cover of channel goes here*/}
                        <Row className="d-flex flex-column justify-content-center align-items-center mt-5 title-chanel" >
                                {/*channel title goes here*/}
                            <Col className="d-flex justify-content-center align-items-center flex-wrap mb-4 col-12">
                                <motion.div  className="text-white mt-4 pb-1 highlight-container" 
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 0.9 }}
                                    transition={{
                                        default: {
                                            duration: 0.2,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        },
                                        scale: {
                                            type: "spring",
                                            damping: 5,
                                            stiffness: 100,
                                            restDelta: 0.001
                                        }
                                    }}>
                                    <h1 className="m-0 p-0 highlight" >
                                        {chanelItems.data[0]?.channelName}
                                </h1>
                            </motion.div>
                                </Col>
                            <Col className="d-flex justify-content-center align-items-around flex-wrap mb-5 pb-5" >
                        {/*list of channel goes here*/}
                                 {chanelItems.data.map((item) => (
                                     <motion.div className="d-flex justify-content-center my-2" style={{ width: "400px" }} whileHover={{ scale: 1.05 }} transition={{
                                         opacity: { ease: "linear" },
                                         layout: { duration: 0.3 }
                                     }} key={item.id} >
                                         <Link to={`/Home/Video/${item.name}/${item.title.replaceAll(/\s+/g, "-").replaceAll('---', '-') }`} className="card-style" >
                                        <Card className="channel-card" >
                                            <Card.Img variant="top" src={item.image} className="img-chanel" alt={item.title} />
                                            <Card.Body>
                                                <Card.Title style={{ fontSize: "15px" }}>{item.duration}</Card.Title>
                                                <Card.Text style={{ fontSize: "17px"}}>
                                                    {item.title} 
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                </Link> 
                            </motion.div>))}
                             </Col>
                </Row>
            </>)}
         </Container>
  );
}

export default ChanelDetail;