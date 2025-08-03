export default function Resume() {
  return (
    <section className="fade-in mobile-padding hero-section" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 20px",
      position: "relative",
    }}>
      <div className="mobile-stack mobile-small-gap" style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "clamp(30px, 8vw, 80px)",
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
            inset: "clamp(-15px, -3vw, -20px)",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "50%",
            filter: "blur(clamp(20px, 5vw, 40px))",
            opacity: 0.5,
          }}></div>
          <img
            src="./logo.jpg"
            alt="Majda Kamrain"
            className="hover-lift profile-image"
            style={{
              width: "clamp(150px, 25vw, 400px)",
              height: "clamp(150px, 25vw, 400px)",
              objectFit: "cover",
              borderRadius: "50%",
              border: "clamp(3px, 1vw, 5px) solid var(--border-strong)",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>
        
        <div className="mobile-text-center" style={{
          flex: 1,
          minWidth: "280px",
          textAlign: "center",
        }}>
          <p style={{
            fontSize: "clamp(14px, 4vw, 18px)",
            color: "var(--text-secondary)",
            marginBottom: "clamp(12px, 3vw, 16px)",
            letterSpacing: "clamp(1px, 0.5vw, 2px)",
            textTransform: "uppercase",
          }}>
            Développeuse Web Full Stack
          </p>
          
          <h1 style={{
            fontSize: "clamp(28px, 8vw, 64px)",
            fontWeight: "800",
            marginBottom: "clamp(16px, 4vw, 24px)",
            lineHeight: "1.1",
          }}>
            <span className="text-gradient animate-gradient">Majda Kamrain</span>
          </h1>
          
          <p style={{
            fontSize: "clamp(14px, 4vw, 20px)",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto clamp(20px, 5vw, 40px)",
            lineHeight: "1.6",
            padding: "0 10px",
          }}>
            Créative, rigoureuse et passionnée. Je conçois des solutions web modernes 
            et performantes pour transformer vos idées en réalité digitale.
          </p>
          
          <div className="mobile-xs-gap" style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "0 10px",
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
                  color: "var(--button-text)",
                  fontWeight: "600",
                  padding: "clamp(12px, 3vw, 16px) clamp(20px, 5vw, 32px)",
                  fontSize: "clamp(14px, 3.5vw, 16px)",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "all 0.3s ease",
                  minWidth: "fit-content",
                }}
              >
                <span>Télécharger mon CV</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </button>
            </a>
            
            <button
              className="glass-effect hover-lift contact-button"
              style={{
                fontWeight: "600",
                padding: "clamp(12px, 3vw, 16px) clamp(20px, 5vw, 32px)",
                fontSize: "clamp(14px, 3.5vw, 16px)",
                borderRadius: "50px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                minWidth: "fit-content",
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