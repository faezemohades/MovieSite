import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';
import useFetchRelated from '../hooks/useFetchRelated';

function Related({ item }) {

    const { related } = useFetchRelated(item);
    const filteredRelated = related.data?.filter((relatedItem) => relatedItem.id !== item.id);

    return (
        <div className="d-flex justify-content-center flex-wrap mb-5">
            {filteredRelated?.slice(0, 4).map((items, id) => (
                    <a href={`/Home/Video/${items.name}/${items.title.replaceAll(/\s+/g, "-").replaceAll('---', '-') }`} className="card-style" key={id}>
                        <motion.div whileHover={{ scale: 0.9 }} transition={{
                            opacity: { ease: "linear" },
                            layout: { duration: 0.3 } }}>
                            <Card className="related-card"  >
                                <Card.Img variant="top" src={items.image} className="img-related" alt={items.title} />
                                <Card.Body>
                            <Card.Title style={{ fontSize: "15px",lineHeight:"20px" }}>{items.title}</Card.Title>
                        </Card.Body>
                    </Card>
                        </motion.div>
                </a>))}
        </div>
    );
}

export default Related;