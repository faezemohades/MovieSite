import React from 'react';
import Spiner from '../assets/image/LOADING.gif';

function ScrolLoading() {
    return (
        <div>
            <img src={Spiner} className="scrol-spinner" alt='loader' />
        </div>
    );
}

export default ScrolLoading;