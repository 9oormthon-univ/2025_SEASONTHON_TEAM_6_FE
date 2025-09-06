import React from "react";

const Header = ({ onToggleSidebar, sidebarOpen }) => {
  return (
    <header className="header">
      {/* 왼쪽 로고 */}
      <div className="logo-section">
        <button 
          onClick={onToggleSidebar}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            marginRight: "15px",
            padding: "5px"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div style={{ lineHeight: "1.2", textAlign: "center", }}>
          <h1 className="title" style={{ margin: 0, lineHeight: "1", fontSize: "28px", color: "#ffffff" }}>MediBuddy</h1>
          <p style={{ margin: 0, fontSize: "16px", color: "#d1d5db", fontWeight: "400", lineHeight: "1" }}>Dr.Kim is Here</p>
        </div>
      </div>
      
      {/* 오른쪽 네비게이션 */}
      <div className="nav-section" style={{ paddingRight: "30px" }}>
        <a href="#" className="nav-link" style={{ fontSize: "17px", marginRight: "35px", color: "white" }}>LOGIN</a>
        <a href="#" className="nav-link" style={{ fontSize: "17px", color: "white" }}>MY PAGE</a>
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
