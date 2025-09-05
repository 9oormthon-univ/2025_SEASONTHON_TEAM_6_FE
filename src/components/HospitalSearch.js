import React from "react";

const HospitalSearch = ({
  locationInput,
  setLocationInput,
  hospitalResults,
  setHospitalResults,
  hospitals,
}) => {
  const searchHospitals = () => {
    let filtered = hospitals;
    if (locationInput) {
      filtered = hospitals.filter((h) => h.location.includes(locationInput));
    }
    setHospitalResults(filtered);
  };

  return (
    <div className="card">
      <h2>
        <span className="icon">🏥</span>병원 찾기
      </h2>
      <input
        type="text"
        className="symptom-input"
        placeholder="위치 입력 (예: 강남구)"
        value={locationInput}
        onChange={(e) => setLocationInput(e.target.value)}
      />
      <button className="btn" onClick={searchHospitals}>
        병원 검색
      </button>

      <div className="hospital-list">
        {hospitalResults.map((hospital) => (
          <div key={hospital.id} className="hospital-item">
            <div className="hospital-name">{hospital.name}</div>
            <div className="hospital-info">
              📍 {hospital.location} | 📞 {hospital.phone}
            </div>
            <div style={{ margin: "10px 0" }}>
              {hospital.languages.map((lang) => (
                <span key={lang} className="language-support">
                  {lang}
                </span>
              ))}
            </div>
            <button className="btn">예약하기</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalSearch;
