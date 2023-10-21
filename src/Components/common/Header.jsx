import React, { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from '../../assets/image/logo.png';
import { NavLink } from "react-router-dom";
import { BiSearch } from 'react-icons/bi';
import avatarPic from '../../data/avatar.json';
import SearchModal from "../SearchModal";
import GenderModal from "../GenderModal";
import home from '../../assets/image/home.png';

function Header() {

    const Toggle = () => setShow(!show);
    const [show, setShow] = useState(true);
    const [genderModalShow, setGenderModalShow] = useState(false);
    const [srchmodalShow, setSrchModalShow] = useState(false);
    const [emoji] = useState(avatarPic.emojis[0].image);
    const avatar = localStorage.getItem("avatar");

    //esc key for searchmodal
    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                setSrchModalShow(false)
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])

    //esc key for gendermodal
    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                setGenderModalShow(false)
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])

    //show gendermodal one per session
    useEffect(() => {
        let pop_status = localStorage.getItem('pop_status');
        if (!pop_status) {
            setGenderModalShow(true);
            localStorage.setItem('pop_status', 1);
            localStorage.setItem("theme", "#A160FB");
            localStorage.setItem("avatar", emoji);
        }
    }, [])

    return (
        <Navbar
            collapseOnSelect
            fixed="top"
            className="header-color "
            id="nav"
            style={{ padding: "3px"} }
        >
            <Container  gap={3} fluid >
                {/*RIGHT NAV GOES HERE*/}
                <div className="d-flex align-items-center ">
                    <Navbar.Brand href="/">
                        <img src={logo} alt="لوگو" className="logo p-0 " style={{marginLeft:"6px"} } />
                            </Navbar.Brand>
                    <NavLink to='/profile' className='link'>
                        <img src={avatar} alt="آواتار" className="header-icon" />
                                </NavLink> 
                    <NavLink to='/' className='link'>
                        <img src={home} alt="آواتار" className="header-icon p-1" />
                    </NavLink>
                </div>
                <div style={{ marginTop: "10px" }} onClick={Toggle}>
                    <div className="d-flex flex-column align-items-center pb-2" style={{ width: "90%",cursor:"pointer"}}  >
                        <BiSearch onClick={() => setSrchModalShow(true)} size={29} color="white"/>
                    </div>
                </div>
                {/*SEARCH MODAL GOES HERE*/}
                <SearchModal show={srchmodalShow} close={() => setSrchModalShow(false)}  />
                {/*GENDER MODAL GOES HERE*/}
                <GenderModal show={genderModalShow} close={() => setGenderModalShow(false)} />
            </Container>
        </Navbar>
    );
}

export default Header;