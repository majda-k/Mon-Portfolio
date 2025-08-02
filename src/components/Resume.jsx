export default function Resume() {
  return (
    <section className="fade-in" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 20px",
      position: "relative",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "80px",
        maxWidth: "1200px",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
        <div style={{
          position: "relative",
          animation: "float 6s ease-in-out infinite",
        }}>
          <div style={{
            position: "absolute",
            inset: "-20px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "50%",
            filter: "blur(40px)",
            opacity: 0.5,
          }}></div>
          <img
            src="./logo.jpg"
            alt="Majda Kamrain"
            className="hover-lift"
            style={{
              width: "400px",
              height: "400px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "5px solid rgba(102, 126, 234, 0.3)",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>
        
        <div style={{
          flex: 1,
          minWidth: "300px",
          textAlign: "center",
        }}>
          <p style={{
            fontSize: "18px",
            color: "#a0aec0",
            marginBottom: "16px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}>
            Développeuse Web Full Stack
          </p>
          
          <h1 style={{
            fontSize: "clamp(40px, 8vw, 64px)",
            fontWeight: "800",
            marginBottom: "24px",
            lineHeight: "1.1",
          }}>
            <span className="text-gradient animate-gradient">Majda Kamrain</span>
          </h1>
          
          <p style={{
            fontSize: "20px",
            color: "#cbd5e0",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: "1.8",
          }}>
            Créative, rigoureuse et passionnée. Je conçois des solutions web modernes 
            et performantes pour transformer vos idées en réalité digitale.
          </p>
          
          <div style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
            <a
              href="./KAMRAINMajdacv.pdf"
              download
              style={{ textDecoration: "none" }}
            >
              <button
                className="hover-lift"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  fontWeight: "600",
                  padding: "16px 32px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "all 0.3s ease",
                }}
              >
                <span>Télécharger mon CV</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </button>
            </a>
            
            <button
              className="glass-effect hover-lift"
              style={{
                color: "white",
                fontWeight: "600",
                padding: "16px 32px",
                fontSize: "16px",
                borderRadius: "50px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Me Contacter
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}