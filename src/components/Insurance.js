import React, { useState, useEffect } from "react";

// SVG Icon Components
const PlusIcon = ({ className }) => (
  <svg
    className={className}
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
const ShieldIcon = ({ className }) => (
  <svg
    className={className}
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);
const UmbrellaIcon = ({ className }) => (
  <svg
    className={className}
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 12a10.3 10.3 0 0 0-20 0Z"></path>
    <path d="M12 12v8a2 2 0 0 0 4 0"></path>
    <path d="M12 2v1"></path>
  </svg>
);
const AirplaneIcon = ({ className }) => (
  <svg
    className={className}
    width="44"
    height="44"
    viewBox="0 -1 26 26"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
  </svg>
);

// Modal Component
const Modal = ({ data, onClose }) => {
  // 모달이 열렸을 때 배경 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        {data.details ? (
          <>
            <h2 className="modal-title">{data.details.title}</h2>
            {data.details.content.map((section, index) => (
              <div key={index} className="modal-section">
                <h3>{section.heading}</h3>
                <ul>
                  {section.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        ) : (
          <div className="modal-section">
            <h2 className="modal-title">{data.title}</h2>
            <p>상세 정보가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Insurance Component
const Insurance = () => {
  const [selectedInsurance, setSelectedInsurance] = useState(null);

  const insurances = [
    {
      theme: "nhi",
      icon: <PlusIcon className="icon" />,
      title: "National Health Insurance (NHI)",
      sections: [
        {
          heading: "Eligibility",
          text: "Foreigners staying in Korea for more than 6 months",
        },
        {
          heading: "Enrollment",
          text: "Students are automatically enrolled (mandatory)",
        },
        {
          heading: "Benefits",
          text: "Same as Koreans: 30% out-of-pocket cost",
        },
      ],
      details: {
        title: "1️⃣ National Health Insurance (NHI)",
        content: [
          {
            heading: "Eligibility",
            points: [
              "All foreigners residing in Korea for more than 6 consecutive months with a Foreign Registration Card.",
              "Includes international students (D-2/D-4), foreign workers (E visas), and marriage migrants (F-6).",
            ],
          },
          {
            heading: "How to Join",
            points: [
              "International students → Automatically enrolled as regional subscribers (mandatory since July 2019).",
              "Employees → Enrolled as workplace subscribers; employers pay part of the premium.",
              "Others (self-employed, freelancers, unemployed) → Must apply directly to NHIS after 6 months of residence.",
              "Average premium: about 120,000 KRW per month. Students receive a 50% government subsidy (since 2023).",
            ],
          },
          {
            heading: "Benefits",
            points: [
              "Same benefits as Korean citizens.",
              "Patients pay only about 30% of medical costs (outpatient, hospitalization, prescriptions).",
            ],
          },
        ],
      },
    },
    {
      theme: "private",
      icon: <ShieldIcon className="icon" />,
      title: "Private Indemnity Insurance",
      sections: [
        { heading: "Enrollment", text: "Foreigners with valid NHI" },
        {
          heading: "Enrollment",
          text: "Enroll individually through an insurer",
        },
        {
          heading: "Benefits",
          text: "Reimburses 70-80% of out-of-pocket cost",
        },
      ],
      details: {
        title: "2️⃣ Private Indemnity Health Insurance",
        content: [
          {
            heading: "Eligibility",
            points: [
              "Foreigners with valid NHI coverage and legal residence in Korea.",
              "Most products (cancer, accident, general health) are available.",
              "Not available for short-term visa holders (e.g., tourist visas, working holiday).",
            ],
          },
          {
            heading: "How to Join",
            points: [
              "Purchase individually through major Korean insurers (e.g., Samsung Fire & Marine, DB Insurance).",
              "Premiums depend on age and coverage; paid monthly.",
              "Since 2024, proof of NHI payment is often required when applying.",
            ],
          },
          {
            heading: "Benefits",
            points: [
              "Reimburses 70–80% of out-of-pocket medical expenses left after NHI coverage.",
              "Covers hospitalization, surgeries, outpatient treatment, etc.",
              "Provides financial protection against high-cost treatments.",
            ],
          },
        ],
      },
    },
    {
      theme: "student",
      icon: <UmbrellaIcon className="icon" />,
      title: "International Student Insurance",
      sections: [
        {
          heading: "Enrollment",
          text: "Foreign students studying abroad in Korea",
        },
        {
          heading: "Enrollment",
          text: "Through university: 6-month or 1-year plan",
        },
        {
          heading: "Benefits",
          text: "Covers 90% of inpatient cost and some outpatient visits",
        },
      ],
      details: {
        title: "3️⃣ International Student Health Insurance",
        content: [
          {
            heading: "Eligibility",
            points: [
              "Degree-seeking students (D-2) → automatically covered under NHI.",
              "Language students (D-4-1) → must enroll in private student insurance for the first 6 months.",
              "Exchange/short-term students → must join school-designated insurance (required for visa maintenance).",
            ],
          },
          {
            heading: "How to Join",
            points: [
              "Organized through universities or institutions (6-month or 1-year contracts).",
              "Premiums: about 60,000–70,000 KRW for 6 months, 110,000–130,000 KRW for 12 months.",
              "Enrollment usually tied to school registration.",
            ],
          },
          {
            heading: "Benefits",
            points: [
              "Covers medical expenses during study in Korea.",
              "Inpatient: 90% of costs reimbursed (limit: about 10 million KRW).",
              "Outpatient: reimbursed up to 250,000 KRW per visit.",
            ],
          },
        ],
      },
    },
    {
      theme: "travel",
      icon: <AirplaneIcon className="icon" />,
      title: "Travel Medical Insurance",
      sections: [
        { heading: "Eligibility", text: "Short-term visitors without NHI" },
        { heading: "Enrollment", text: "At airport or online on arrival" },
        { heading: "Benefits", text: "Covers illness/injuries during travel" },
      ],
      details: {
        title: "4️⃣ Travel Medical Insurance",
        content: [
          {
            heading: "Eligibility",
            points: [
              "Tourists and short-term visitors (e.g., C-3 visa holders).",
              "Individuals staying in Korea for less than 6 months.",
              "Those not eligible for NHI.",
            ],
          },
          {
            heading: "How to Join",
            points: [
              "Can be purchased online before or upon arrival in Korea.",
              "Available at insurance counters at Incheon International Airport.",
              "Various plans available from global and Korean insurers.",
            ],
          },
          {
            heading: "Benefits",
            points: [
              "Covers emergency medical expenses due to accidents or sudden illness during travel.",
              "Includes costs for emergency room visits, hospitalization, and necessary treatments.",
              "Coverage and limits vary significantly by plan, so checking policy details is crucial.",
            ],
          },
        ],
      },
    },
  ];

  return (
    <>
      <style>{`
        .insurance-container {
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          background-color: #fff;
        }

        .main-title {
          text-align: center; color: #2c3e50; margin-bottom: 25px;
          font-size: 1.8em; font-weight: 600;
        }

        .cards-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px; max-width: 1000px; margin: 0 auto;
        }

        .card {
          border-radius: 12px; border-width: 2px; border-style: solid;
          padding: 15px;
          cursor: pointer; transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          background-color: #fff;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .card-title-area {
            margin-bottom: 20px;
            min-height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .icon { 
            margin-bottom: 12px;
            background: transparent !important;
        }
        .card-title { font-size: 1.3em; margin: 0; font-weight: 600; line-height: 1.3; }

        .info-section { 
            margin-bottom: 15px; 
            text-align: center;
        }
        .info-section:last-child { margin-bottom: 0; }
        .info-section h3 { font-size: 1.1em; margin: 0 0 8px 0; font-weight: bold; color: #333; }
        .info-section p { font-size: 1em; line-height: 1.5; margin: 0; color: #555; }

        /* 테마별 스타일 */
        .card-nhi { border-color: #fcebb3; }
        .card-nhi .card-title-area { background-color: #fffbf0; }
        .card-nhi .icon, .card-nhi .card-title { color: #c79f2d; }

        .card-private { border-color: #f7d8c8; }
        .card-private .card-title-area { background-color: #fff6f0; }
        .card-private .icon, .card-private .card-title { color: #b57657; }

        .card-student { border-color: #f9d1c9; }
        .card-student .card-title-area { background-color: #fff4f1; }
        .card-student .icon, .card-student .card-title { color: #c4644f; }

        .card-travel { border-color: #fcd7e3; }
        .card-travel .card-title-area { background-color: #fff5f8; }
        .card-travel .icon, .card-travel .card-title { color: #c97191; }


        /* --- 모달 스타일 --- */
        .modal-backdrop {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex; justify-content: center; align-items: center;
          z-index: 1000; animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          background-color: white; padding: 30px 40px; border-radius: 12px;
          max-width: 650px; width: 90%; max-height: 85vh;
          overflow-y: auto; position: relative;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
          animation: slideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          text-align: left;
        }

        .modal-close-btn {
          position: absolute; top: 15px; right: 20px;
          background: none; border: none; font-size: 2.5rem;
          color: #aaa; cursor: pointer; line-height: 1; padding: 0;
          transition: color 0.2s ease;
        }
        .modal-close-btn:hover { color: #333; }
        
        .modal-title { font-size: 1.8em; margin-bottom: 20px; color: #333; }
        .modal-section { margin-bottom: 20px; }
        .modal-section h3 { font-size: 1.3em; margin-bottom: 10px; color: #444; }
        .modal-section ul { list-style: none; padding-left: 0; }
        .modal-section li { margin-bottom: 8px; line-height: 1.6; color: #555; padding-left: 20px; position: relative; }
        .modal-section li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #007bff;
          font-weight: bold;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { transform: translateY(-50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
      <div className="insurance-container">
        <h1 className="main-title">
          Types of Medical Insurance for Foreigners in Korea
        </h1>
        <div className="cards-grid">
          {insurances.map((item, index) => (
            <div
              key={index}
              className={`card card-${item.theme}`}
              onClick={() => setSelectedInsurance(item)}
            >
              <div className="card-title-area">
                {item.icon}
                <h2 className="card-title">{item.title}</h2>
              </div>

              {item.sections.map((section, secIndex) => (
                <div key={secIndex} className="info-section">
                  <h3>{section.heading}</h3>
                  <p>{section.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {selectedInsurance && (
        <Modal
          data={selectedInsurance}
          onClose={() => setSelectedInsurance(null)}
        />
      )}
    </>
  );
};

export default Insurance;
