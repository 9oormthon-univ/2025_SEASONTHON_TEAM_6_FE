import React from "react";

const Header = () => {
  return (
    <header className="header">
      {/* 왼쪽 로고 */}
      <div className="logo-section">
        <h1 className="title">MEDIGUIDE KOREA</h1>
      </div>
      
      {/* 오른쪽 네비게이션 */}
      <div className="nav-section">
        <a href="#" className="nav-link">LOGIN</a>
        <a href="#" className="nav-link">MY</a>
        <button className="search-btn">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
