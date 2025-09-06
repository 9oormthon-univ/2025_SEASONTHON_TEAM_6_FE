import React, { useState } from "react";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Insurance from "./components/Insurance";
import Calendar from "./components/Calendar";
import SymptomAnalysis from "./components/SymptomAnalysis";
import HospitalSearch from "./components/HospitalSearch";
import InsuranceInfo from "./components/InsuranceInfo";
import TodoManager from "./components/TodoManager";
import AddTodoModal from "./components/AddTodoModal";
import { hospitalData } from "./data/hospitalData";
import "./App.css";

function App() {
  // 현재 활성 탭 상태 (Chat이 기본)
  const [activeTab, setActiveTab] = useState("Chat");

  // 증상 분석 상태
  const [symptomInput, setSymptomInput] = useState("");
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [symptomResult, setSymptomResult] = useState(null);

  // 병원 검색 상태
  const [locationInput, setLocationInput] = useState("");
  const [hospitalResults, setHospitalResults] = useState([]);

  // 보험 정보 상태
  const [insuranceResult, setInsuranceResult] = useState(null);
  const [insuranceType, setInsuranceType] = useState("");

  // 할 일 관리 상태
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "진료 예약",
      description: "오늘 오후 2시 - 서울대병원",
      completed: false,
      priority: "high",
    },
    {
      id: 2,
      title: "보험 서류 제출",
      description: "마감일: 2주 후",
      completed: false,
      priority: "medium",
    },
  ]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <div className="sidebar">
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
        <div className="main-content-area">
          {activeTab === "Chat" && <Chat />}
          {activeTab === "Insurance" && <Insurance />}
          {activeTab === "Calendar" && <Calendar />}
        </div>
      </div>
    </div>
  );
}

export default App;
