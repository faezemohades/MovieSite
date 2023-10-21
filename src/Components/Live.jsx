import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import live from '../assets/image/jj.gif';
import Loading from './Loading';
import { motion } from "framer-motion";

function Live() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    }, [loading]);

     return (
         <>
              {
        loading ? <Loading /> :( <div className="mb-5 text-white" >
                                 <div className="live">
                                     <div className="shake">
                                         <Link to="/live" >
                                                 <div style={{ position: 'relative' }}>
                                                     <motion.div whileHover={{ scale: 1.05 }} transition={{
                                                         opacity: { ease: "linear" },
                                                         layout: { duration: 0.3 }}}>
                                                         <img src={live} alt="" className="live-pic" />
                                                     </motion.div> 
                                                 <p className="live-title font-kuluche" >
                                                         کارتونکده
                                                     </p>
                                                 </div>
                                         </Link>
                                     </div>
                                 </div>
                             </div>)}
         </>
    );
}

export default Live;