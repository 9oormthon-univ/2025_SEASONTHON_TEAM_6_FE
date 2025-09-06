import React from "react";

const SymptomAnalysis = ({
  symptomInput,
  setSymptomInput,
  analysisProgress,
  setAnalysisProgress,
  symptomResult,
  setSymptomResult,
}) => {
  const analyzeSymptom = () => {
    if (!symptomInput.trim()) {
      alert("증상을 입력해주세요.");
      return;
    }

    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setAnalysisProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);

        const symptoms = symptomInput.toLowerCase();
        let result;

        if (symptoms.includes("배") || symptoms.includes("복통")) {
          result = {
            department: "소화기내과",
            recommendation: "소화기내과 진료를 권장합니다.",
            factCheck: "민간요법 주의: 배 아플 때 찬물은 도움이 되지 않습니다.",
          };
        } else if (symptoms.includes("머리") || symptoms.includes("두통")) {
          result = {
            department: "신경과",
            recommendation: "신경과 진료를 받아보세요.",
            factCheck: null,
          };
        } else {
          result = {
            department: "내과",
            recommendation: "내과 진료를 권장합니다.",
            factCheck: null,
          };
        }

        setSymptomResult(result);
      }
    }, 300);
  };

  return (
    <div className="card">
      <h2>
        <span className="icon">🩺</span>증상 분석
      </h2>
      <textarea
        className="symptom-input"
        value={symptomInput}
        onChange={(e) => setSymptomInput(e.target.value)}
        placeholder="증상을 설명해주세요..."
      />
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${analysisProgress}%` }}
        ></div>
      </div>
      <button className="btn" onClick={analyzeSymptom}>
        증상 분석하기
      </button>

      {symptomResult && (
        <div className="analysis-result">
          <h4>분석 결과</h4>
          <p>
            <strong>추정 진료과:</strong> {symptomResult.department}
          </p>
          <p>
            <strong>권장사항:</strong> {symptomResult.recommendation}
          </p>
          {symptomResult.factCheck && (
            <div className="fact-check">
              <strong>⚠️ 팩트체크:</strong> {symptomResult.factCheck}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SymptomAnalysis;
