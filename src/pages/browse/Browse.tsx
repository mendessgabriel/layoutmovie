import React from 'react';
import './Browse.css';
import Destaque from '../destaque/Destaque';

function Browse() {
  return (
    <div className="browse">
      {/* {Destaque()} */}
      <div>
        <h2>Populares no Iteris Prime</h2>
      </div>
      <div>
        <h2>Assistir novamente</h2>
      </div>
    </div>
  );
}

export default Browse;
