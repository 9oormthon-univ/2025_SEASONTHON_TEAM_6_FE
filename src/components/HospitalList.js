import React, { useState } from "react";

const HospitalList = ({ hospitals }) => {
  const [selectedHospital, setSelectedHospital] = useState(null);

  return (
    <div style={{
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      {/* 헤더 */}
      <div style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <p style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '20px',
          margin: 10
        }}>
          총 {hospitals.length}개의 병원을 찾았습니다.
        </p>
      </div>

      {/* 메인 컨테이너 - 좌우 분할 */}
      <div style={{
        display: 'flex',
        gap: '30px',
        height: '600px'
      }}>
        {/* 왼쪽: 병원 리스트 */}
        <div style={{
          width: '40%',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          padding: '20px',
          overflowY: 'auto'
        }}>
          <h3 style={{
            color: '#f8f9fa',
            fontSize: '20px',
            fontWeight: 'bold',
            margin: '0 0 20px 0',
            textAlign: 'center'
          }}>
            병원 목록
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {hospitals.map((hospital, index) => (
              <div
                key={index}
                onClick={() => setSelectedHospital(hospital)}
                style={{
                  background: selectedHospital === hospital 
                    ? 'rgba(59, 130, 246, 0.3)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  border: selectedHospital === hospital 
                    ? '2px solid rgba(59, 130, 246, 0.6)' 
                    : '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {/* 병원명 */}
                <h4 style={{
                  color: '#f8f9fa',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  margin: '0 0 8px 0'
                }}>
                  {hospital.name_korean}
                </h4>

                {/* 주소 */}
                <div style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '14px',
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                {hospital.address_korean}
                </div>

                {/* 전화번호 */}
                <div style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  Tel: {hospital.p_number}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽: 지도 */}
        <div style={{
          width: '60%',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h3 style={{
            color: '#f8f9fa',
            fontSize: '20px',
            fontWeight: 'bold',
            margin: '0 0 20px 0',
            textAlign: 'center'
          }}>
            지도
          </h3>
          
          {/* 지도 플레이스홀더 */}
          <div style={{
            width: '100%',
            height: '400px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed rgba(255, 255, 255, 0.3)'
          }}>
            <div style={{
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.6)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🗺️</div>
              <div style={{ fontSize: '16px' }}>
                {selectedHospital 
                  ? `${selectedHospital.name_korean} 위치` 
                  : '병원을 선택하면 지도가 표시됩니다'
                }
              </div>
            </div>
          </div>

          {/* 선택된 병원 정보 */}
          {selectedHospital && (
            <div style={{
              width: '100%',
              marginTop: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <h4 style={{
                color: '#f8f9fa',
                fontSize: '16px',
                fontWeight: 'bold',
                margin: '0 0 12px 0'
              }}>
                상세 정보
              </h4>
              
              <div style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                marginBottom: '8px'
              }}>
                <strong>지원 언어:</strong> {selectedHospital.language}
              </div>
              
              <div style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px'
              }}>
                <strong>진료과목:</strong> {selectedHospital.specialty_korean}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HospitalList;