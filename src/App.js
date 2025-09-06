import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Insurance from "./components/Insurance";
import Calendar from "./components/Calendar";
import "./App.css";

function App() {
  // 현재 활성 탭 상태 (Chat이 기본)
  const [activeTab, setActiveTab] = useState("Chat");
  // 사이드바 열림/닫힘 상태
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // 선택된 국가 상태
  const [selectedCountry, setSelectedCountry] = useState("");

  // URL 파라미터에서 토큰 추출 및 저장
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');
    const email = urlParams.get('email');
    const name = urlParams.get('name');

    // 토큰이 있으면 localStorage에 저장
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      console.log('Access token saved to localStorage');
    }

    // 이메일이 있으면 localStorage에 저장
    if (email) {
      localStorage.setItem('user_email', decodeURIComponent(email));
      console.log('User email saved to localStorage');
    }

    // 이름이 있으면 localStorage에 저장
    if (name) {
      localStorage.setItem('user_name', decodeURIComponent(name));
      console.log('User name saved to localStorage');
    }

    // 토큰 관련 파라미터가 있으면 URL에서 제거
    if (accessToken || email || name) {
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
      console.log('URL parameters removed from address bar');
    }
  }, []);

  return (
    <div className="app">
      <Header 
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        sidebarOpen={sidebarOpen}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <div className="main-layout">
        <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <nav className="sidebar-nav">
            <button 
              className={`sidebar-link ${activeTab === "Chat" ? "active" : ""}`}
              onClick={() => setActiveTab("Chat")}
            >
              Chat
            </button>
            <button 
              className={`sidebar-link ${activeTab === "Insurance" ? "active" : ""}`}
              onClick={() => setActiveTab("Insurance")}
            >
              Insurance
            </button>
            <button 
              className={`sidebar-link ${activeTab === "Calendar" ? "active" : ""}`}
              onClick={() => setActiveTab("Calendar")}
            >
              Calendar
            </button>
          </nav>
        </div>
        <div className={`main-content-area ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          {activeTab === "Chat" && <Chat selectedCountry={selectedCountry} />}
          {activeTab === "Insurance" && <Insurance />}
          {activeTab === "Calendar" && <Calendar />}
        </div>
      </div>
    </div>
  );
}

export default App;
