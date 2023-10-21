import React from 'react';
import Spiner from '../assets/image/LOADING.gif';
function Loading() {
  return (
      <div>
          <img src={Spiner} className="spiner" alt='loader' />
      </div>
  );
}

export default Loading;