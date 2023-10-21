import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CharCard({ item }) {
    return (
    <motion.div className="d-flex justify-content-center" whileHover={{ scale: 0.9 }} transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.3 }
    }}>
            <Link to={item.link }>
                <img src={item.image} alt={item.title}  className="char-img" />
        </Link>
    </motion.div>
  );
}

export default CharCard;