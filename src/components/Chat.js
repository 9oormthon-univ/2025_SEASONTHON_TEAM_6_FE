import React, { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSliding, setIsSliding] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading && !isSliding) {
      setIsLoading(true);
      setIsSliding(true);
      
      try {
        // 여기에 API 호출 로직 추가
        console.log("Message sent:", message);
        
        // 슬라이드 애니메이션 후 초기화
        setTimeout(() => {
          setIsLoading(false);
          setIsSliding(false);
          setMessage("");
        }, 1000);
      } catch (error) {
        console.error('요청 오류:', error);
        setIsLoading(false);
        setIsSliding(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div style={{ 
      background: "transparent", 
      height: "100%", 
      display: "flex", 
      flexDirection: "column",
      position: "relative"
    }}>
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "40px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <h2 style={{ 
          textAlign: "center", 
          color: "#374151", 
          fontSize: "40px", 
          marginTop: "-30%", 
          fontFamily: "Arial, sans-serif",
          fontWeight: "500",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
          letterSpacing: "1px"
        }}>
          Please describe your symptoms!
        </h2>
      </div>
      
      <div style={{
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "800px",
        padding: "0 40px"
      }}>
        <form onSubmit={handleSubmit}>
          <div style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "white",
            borderRadius: "32px",
            border: "1px solid black",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            padding: "8px",
            minHeight: "80px",
            // transform: isSliding ? "translateY(100px)" : "translateY(0)",
            // opacity: isSliding ? 0 : 1,
            // transition: "all 0.5s ease-in-out"
          }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="메시지를 입력하세요..."
                style={{
                  width: "100%",
                  minHeight: "40px",
                  maxHeight: "128px",
                  resize: "none",
                  border: "0",
                  background: "transparent",
                  padding: "8px 8px",
                  fontSize: "16px",
                  outline: "none",
                  fontFamily: "inherit"
                }}
                rows={1}
              />
            </div>

            {/* 전송 버튼 */}
            <button
              type="submit"
              disabled={!message.trim() || isLoading || isSliding}
              style={{
                flexShrink: 0,
                height: "40px",
                width: "40px",
                borderRadius: "12px",
                background: isLoading ? "#6b7280" : "black",
                border: "none",
                cursor: message.trim() && !isLoading && !isSliding ? "pointer" : "not-allowed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.2s ease"
              }}
              onMouseEnter={(e) => {
                if (message.trim() && !isLoading && !isSliding) {
                  e.target.style.background = "#374151";
                }
              }}
              onMouseLeave={(e) => {
                if (message.trim() && !isLoading && !isSliding) {
                  e.target.style.background = "black";
                }
              }}
            >
              {isLoading ? (
                <div style={{
                  height: "20px",
                  width: "20px",
                  border: "2px solid white",
                  borderTop: "2px solid transparent",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite"
                }} />
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              )}
            </button>
          </div>
        </form>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Chat;