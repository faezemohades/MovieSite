import React, { useState } from "react"; 
import { Container, Modal, Row } from "react-bootstrap"; 
import { motion } from "framer-motion"; 
import { FaWindowClose } from 'react-icons/fa'; 
import dgirl from "../assets/image/girl.png"; 
import dboy from "../assets/image/boy.png"; 
import avatarPic from '../data/avatar.json'; 
import useHeaderColor from "../hooks/useHeaderColor";
import useTheme from "../hooks/useTheme";
import useEmoji from "../hooks/useEmoji";

function GenderModal(props) { 
    const [fullscreen] = useState(true);
    const { themeColor } = useHeaderColor();
    const avatar = localStorage.getItem("avatar");
    //handling close and fullscreen modal
    const { setGirlSelected, setBoySelected, setAvatarSelected, themeHandler, dp } = useTheme()
    const { isGirlVisible, isBoyVisible, handleGirlPress, handleBoyPress, setEmoji, emoji } = useEmoji();

    return ( 
      <>
          {((  avatar === emoji) && dp) && 
                <Modal show={props.show}
                    fullscreen={fullscreen} > 
                  {/*close button */}
                  <div > 
                      <FaWindowClose size={30} color='white' onClick={props.close} style={{ marginInline: "8px",cursor:"pointer" ,marginTop:"8px"}} /> 
                  </div> 
                    <div className="gmodal">
                  <Container> 
                      <Row  > 
                          {/*title of modal*/}
                            <motion.div className="d-flex justify-content-center align-items-center  " 
                              initial={{ opacity: 0, scale: 0.5 }} 
                              animate={{ opacity: 1, scale: 1 }} 
                              transition={{ 
                                  default: { 
                                      duration: 0.3, 
                                      ease: [0, 0.71, 0.2, 1.01] 
                                  }, 
                                  scale: { 
                                      type: "spring", 
                                      damping: 5, 
                                      stiffness: 100, 
                                      restDelta: 0.001 
                                  } 
                              }} > 
                                <h4 style={{ color: "white"}}> ایموجی خودت رو انتخاب کن! </h4> 
                          </motion.div> 
                                <motion.div className="d-flex justify-content-center align-items-center "
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        default: {
                                            duration: 0.3,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        },
                                        scale: {
                                            type: "spring",
                                            damping: 5,
                                            stiffness: 100,
                                            restDelta: 0.001
                                        }
                                    }}>
                                    {/*girl and boy button */}
                                    <div className="text-white d-flex ">
                                        <motion.div className="d-flex flex-column align-items-center" whileHover={{ scale: 0.9 }} transition={{
                                            opacity: { ease: "linear" },
                                            layout: { duration: 0.3 }
                                        }}
                                            onClick={() => setBoySelected(true)}
                                        >
                                            <div className="d-flex flex-column align-items-center">
                                                <img src={dboy} alt="پسر" onClick={handleBoyPress} className="genderbtn mt-5" />
                                                <h6 className="m-0">پسر</h6>
                                                {isBoyVisible && <div className="wrapper d-flex flex-column align-items-start">
                                                    <div className="tick"></div>
                                                </div>}
                                            </div>
                                        </motion.div>
                                        <motion.div className="d-flex flex-column align-items-center" whileHover={{ scale: 0.9 }} transition={{
                                            opacity: { ease: "linear" },
                                            layout: { duration: 0.3 }
                                        }}
                                            onClick={() => setGirlSelected(true)}
                                        >
                                            <div className="d-flex flex-column align-items-center">
                                                <img src={dgirl} alt="دختر" onClick={handleGirlPress} className="genderbtn mt-5 mb-1" />
                                                <h6 className="m-0">دختر</h6>
                                                {isGirlVisible && <div className="wrapper d-flex flex-column align-items-start">
                                                    <div className="tick"></div>
                                                </div>}
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div> 
                          {/*avatar box goes here*/}
                          <div className="d-flex justify-content-center flex-wrap mt-1"> 
                              { avatarPic.emojis.slice(0, 8).map((item) => ( 
                                      <motion.div className="d-flex justify-content-center" 
                                          animate={{ x: 10 }} 
                                          transition={{ type: "spring", stiffness: 100 }}
                                            key={item.id} 
                                      > 
                                      <img src={item.image} alt={item.title} className="avatar selectable-item" tabIndex={0}
                                          onClick={() => { localStorage.setItem("avatar", item.image); setAvatarSelected(true); setEmoji(item.image) }} /> 
                                      </motion.div> 
                                  ))} 
                          </div> 
                      </Row> 
                  </Container> 
                  {/*register button*/}
                     <div className="d-flex justify-content-center mt-lg-2">
                     <button className=" register-btn" onClick={themeHandler}>ثبت</button>
                       </div>
                     </div>
              </Modal> 
            } 
      </> 
  ); 
} 
 
export default GenderModal;