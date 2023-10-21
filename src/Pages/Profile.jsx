import React, { useEffect, useState } from "react";
import { Container, Row, Col} from 'react-bootstrap';
import dgirl from "../assets/image/girl.png";
import dboy from "../assets/image/boy.png";
import { motion } from "framer-motion";
import MyHelmet from '../Components/MyHelmet';
import avatarPic from '../data/avatar.json';
import Loading from '../Components/Loading';
import useEmoji from "../hooks/useEmoji";
import useHeaderColor from "../hooks/useHeaderColor";
import useProfileSubmit from "../hooks/useProfileSubmit";

function Profile() {

    const { themeColor } = useHeaderColor();
    const { isGirlVisible, isBoyVisible, handleGirlPress, handleBoyPress, setEmoji, emoji } = useEmoji();
    const { setGirlSelected, setBoySelected, routeChange } = useProfileSubmit();

    //loader goes here
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }, [loading]);
    
    return (
        <Container style={{ marginTop:"80px" }}>
            {loading ?
                <Loading /> : (
                <>
                        <Row>
                            <MyHelmet title='تنظیمات پروفایل' description="تنظیمات پروفایل" url="https://kids.mp4.ir/profile" />
                            <Col>
                                 {/*title of page goes here*/}
                                <div  className="d-flex justify-content-center align-items-center" style={{ borderRadius: "5px", background:"rgba(36, 36, 36, 0.23)" }} >
                                    <h3 style={{ color: "white", marginTop: "20px", marginBottom: "20px" }}> ایموجی خودت رو انتخاب کن!</h3>
                                </div>
                    <div className="d-flex justify-content-center align-items-center mb-5">
                                    <div className="text-white d-flex">
                                        {/*girl and boy  button of theme goes here*/}
                            <motion.div className="d-flex flex-column align-items-center"
                                animate={{ x: -5 }}
                                            transition={{ type: "spring", stiffness: 100 }}
                                            onClick={() => setBoySelected(true)}>
                                            <div className="d-flex flex-column align-items-center">
                                            <img src={dboy} alt="پسر" onClick={handleBoyPress} className="genderbtn mt-5" />
                                                <h6 className="m-0">پسر</h6>
                                                {isBoyVisible && <div className="wrapper d-flex flex-column align-items-start">
                                                    <div className="tick"></div>
                                                </div>}
                                            </div>
                                        </motion.div>
                            <motion.div className="d-flex flex-column align-items-center"
                                animate={{ x: -5 }}
                                            transition={{ type: "spring", stiffness: 100 }}
                                            onClick={() => setGirlSelected(true)}
                                        >
                                            <div className="d-flex flex-column align-items-center">
                                            <img src={dgirl} alt="دختر"  onClick={handleGirlPress} className="genderbtn mt-5 mb-1" />
                                            <h6 className="m-0">دختر</h6>
                                                {isGirlVisible && <div className="wrapper d-flex flex-column align-items-start">
                                                    <div className="tick"></div>
                                                </div>}
                                            </div>
                            </motion.div>
                        </div>
                    </div></Col>
                </Row>
                <Row>
                              {/*emojis box goes here*/}
                            <div className="d-flex justify-content-center flex-wrap">
                        {
                            avatarPic.emojis.map((item) =>
                            (<motion.div className="d-flex flex-column align-items-center"
                                animate={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                key={item.id}
                            >
                                <img src={item.image} alt={item.title} className="avatar selectable-item" tabIndex={0}  onClick={() => { localStorage.setItem("avatar", item.image); setEmoji(item.emoji) }} />
                            </motion.div>
                            ))
                        }
                            </div>
                            <div className="d-flex justify-content-center mt-5 mb-2">
                            <button  className="register-btn" onClick={routeChange}>
                                ثبت
                            </button>
                            </div>
                    </Row>
                </>
            )}
        </Container>
    )
}

export default Profile