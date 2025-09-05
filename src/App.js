import React, { useState } from "react";
import Header from "./components/Header";
import SymptomAnalysis from "./components/SymptomAnalysis";
import HospitalSearch from "./components/HospitalSearch";
import InsuranceInfo from "./components/InsuranceInfo";
import TodoManager from "./components/TodoManager";
import AddTodoModal from "./components/AddTodoModal";
import { hospitalData } from "./data/hospitalData";
import "./App.css";

function App() {
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
      <div className="container">
        <Header />

        <div className="main-content">
          <SymptomAnalysis
            symptomInput={symptomInput}
            setSymptomInput={setSymptomInput}
            analysisProgress={analysisProgress}
            setAnalysisProgress={setAnalysisProgress}
            symptomResult={symptomResult}
            setSymptomResult={setSymptomResult}
          />

          <HospitalSearch
            locationInput={locationInput}
            setLocationInput={setLocationInput}
            hospitalResults={hospitalResults}
            setHospitalResults={setHospitalResults}
            hospitals={hospitalData}
          />
        </div>

        <div className="main-content">
          <InsuranceInfo
            insuranceType={insuranceType}
            setInsuranceType={setInsuranceType}
            insuranceResult={insuranceResult}
            setInsuranceResult={setInsuranceResult}
          />

          <TodoManager
            todos={todos}
            setTodos={setTodos}
            setShowAddTodo={setShowAddTodo}
          />
        </div>

        {showAddTodo && (
          <AddTodoModal
            todos={todos}
            setTodos={setTodos}
            setShowAddTodo={setShowAddTodo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
