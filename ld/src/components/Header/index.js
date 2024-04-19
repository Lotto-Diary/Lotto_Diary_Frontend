// src/components/Header/index.js

import React from 'react';
import './style.css';
import logo from '../../logo.svg';

const Header = () => {
  const handleLogin = () => {};
  return (
    <header className="header">
      <div className="header-container">
        <a className="header-title" href="/">
          <img src={logo} alt="Logo" /> 
        </a>
        <div className="header-menu">
          <span className="header-menu-text">규칙</span>
          <button className="header-button">일기 쓰기</button>
          <button className="header-button">코인 상점</button>
          <button className="header-button">코인 랭킹</button>
          <button className="header-login-button" onClick={handleLogin}>로그인/회원가입</button>
        </div>
      </div>
      <div className="header-divider"></div> 
    </header>
  );
};

export default Header;
