import React from 'react';
import './Collection.scss'
import weth from '../../assets/weth.png'

export const Collection = ({id, name, traits, image}) => {
  return <div className="collection-card">
      <img src={image} alt="" />
      <div className="deatails">
      <div className="name">
          {name} <div className="id"> .#{id}</div>
      </div>
    <div className="price-container">
        <img src={weth} className="wethImage" alt="" />
        <div className="price">{traits[0]?.value}</div>
    </div>
    </div>
  </div>
};
