import React from "react";

const InsuranceInfo = ({
  insuranceType,
  setInsuranceType,
  insuranceResult,
  setInsuranceResult,
}) => {
  const checkInsurance = () => {
    if (!insuranceType) {
      alert("보험 유형을 선택해주세요.");
      return;
    }

    const insuranceData = {
      student: { name: "유학생 보험", coverage: "70%", cost: "20,000원" },
      employee: { name: "건강보험", coverage: "80%", cost: "15,000원" },
      private: { name: "사보험", coverage: "90%", cost: "10,000원" },
    };

    setInsuranceResult(insuranceData[insuranceType]);
  };

  return (
    <div className="card">
      <h2>
        <span className="icon">🛡️</span>보험 정보
      </h2>
      <select
        className="symptom-input"
        value={insuranceType}
        onChange={(e) => setInsuranceType(e.target.value)}
      >
        <option value="">보험 유형 선택</option>
        <option value="student">유학생 보험</option>
        <option value="employee">건강보험</option>
        <option value="private">사보험</option>
      </select>
      <button className="btn" onClick={checkInsurance}>
        보험 확인
      </button>

      {insuranceResult && (
        <div className="insurance-card">
          <div className="insurance-type">{insuranceResult.name}</div>
          <div className="cost-info">
            <p>보장률: {insuranceResult.coverage}</p>
            <p>예상 비용: {insuranceResult.cost}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsuranceInfo;
