import React from 'react';
import error from '../assets/image/err.gif';
import MyHelmet from './MyHelmet';

function Pagenotfound() {
    return (
        <>
            <MyHelmet title='404' description='404 error' />
        <div width="100vw" height="100vh" className="d-flex justify-content-center align-item-center mt-5 pt-5"  >
            <div>
            <img src={error}  alt='error' width="100%" />
            </div>
        </div>
            </>
    );
}

export default Pagenotfound;