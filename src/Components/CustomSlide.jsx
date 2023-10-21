import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { ImPlay3 } from 'react-icons/im';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
 
 function CustomSlide({item }) {
     return (
         <div style={{ direction: "rtl" }} >
             <img
                 src={item.image}
                 width="100%"
                 alt={item.title}
                 className="carosel"
                 />
             <div className="content-slider">
       {/*play button in sm breakpoint*/}
                 <div style={{ margin: "0px", padding: "0px" }} className="mb-1">
                     <Link to={item.link} style={{ textDecoration: "none" }}>
                     <ImPlay3 size={30} color="white" className="play-btn-sm"/>
                     </Link>
                 </div>
       {/*title and description*/}
                 <div className="text-light highlightt"  >
                     <p className="title-slider" >{item.title}</p>
                     {/*<p className="desc-slider" >{item.description}</p>*/}
                 </div>
       {/*play button in lg breakpoint*/}
                 <div >
                     <Link to={item.link}
                         style={{ textDecoration: "none" }}
                     >
                   <Button variant="danger" className=" play-btn-lg">
                             <FaPlay color='white ' />
                             <h4 className="mx-2 pt-1 font-kuluche" >نمایش</h4>
                  </Button>
                     </Link>
              </div>
          </div>
          </div>
  );
}

export default CustomSlide;