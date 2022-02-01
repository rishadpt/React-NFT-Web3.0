import React from 'react';
import './Header.scss'
import punkLogo from '../../assets/header/cryptopunk-logo.png'
import searchIcon from '../../assets/header/search.png'
import themeSwitch from '../../assets/header/theme-switch.png'

export default function Header() {
  return <div className="header">
   <div className="logo-container">
     <img src={punkLogo} className="punklogo" alt="" />
   </div>
   <div className="search-bar">
     <div className="search-icon-container">
       <img src={searchIcon} className="search" alt="" />
     </div>
     <input type="text" className="search-input" placeholder='Collection, item or user'/>
   </div>
   <div className="header-items">
     <p>Drops</p>
     <p>Marketplace</p>
     <p>Create</p>
   </div>
   <div className="header-actions">
     <div className="theme-switch-container">
       <img src={themeSwitch} alt="" />
     </div>
   </div>
   <div className="login-container">GET IN

   </div>
  </div>;
}
