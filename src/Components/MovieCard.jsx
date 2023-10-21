import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';

function MovieCard({movie }) {
   return (
       <motion.div className="d-flex justify-content-center " whileHover={{ scale: 0.9 }} transition={{
           opacity: { ease: "linear" },
           layout: { duration: 0.3 }
       }} >
        <Link to={`/Home/Video/${movie.name}/${movie.title.replaceAll(/\s+/g, "-").replaceAll('---', '-') }`} className="d-flex justify-content-center card-style gap-10" >
               <Card className="movie-card"  >
                   <Card.Img variant="top" src={movie.image} className="img-card" alt={movie.title} />
                   <Card.Body>
                       <Card.Title style={{ fontSize: "15px",lineHeight:"21px" }}>{movie.title}</Card.Title>
                   </Card.Body>
               </Card>
          </Link>
       </motion.div>
  );
}

export default MovieCard;