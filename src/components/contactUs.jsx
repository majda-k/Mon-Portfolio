import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_sy1r6fo",     
        "template_rnredwb",    
        e.target,
        "NWu_3qjbzkpnxMejs"      
      )
      .then(
        () => {
          setSubmitted(true);
          setError(null);
          setLoading(false);
          e.target.reset();
        },
        (err) => {
          setError("Erreur lors de l'envoi, réessayez plus tard.");
          setLoading(false);
          console.error(err);
        }
      );
  };

  return (
    <section id="contact" className="fade-in mobile-padding" style={{
      padding: "100px 20px",
      position: "relative",
    }}>
      <div style={{
        position: "absolute",
        top: "20%",
        left: "-10%",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, var(--section-glow) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}></div>
      
      <div style={{
        maxWidth: "600px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        padding: "0 15px",
      }}>
        <h2 className="text-gradient animate-gradient" style={{
          fontSize: "clamp(32px, 7vw, 48px)",
          fontWeight: "800",
          marginBottom: "20px",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "-1px",
        }}>
          Contactez-moi
        </h2>
        
        <p style={{
          fontSize: "clamp(16px, 4vw, 20px)",
          color: "var(--text-secondary)",
          marginBottom: "clamp(40px, 8vw, 60px)",
          textAlign: "center",
          padding: "0 15px",
        }}>
          Discutons de votre prochain projet ensemble
        </p>

        {submitted ? (
          <div className="glass-effect" style={{
            padding: "40px",
            borderRadius: "24px",
            textAlign: "center",
          }}>
            <div style={{
              width: "80px",
              height: "80px",
              margin: "0 auto 20px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "var(--success-text)",
              marginBottom: "10px",
            }}>
              Message envoyé avec succès!
            </p>
            <p style={{
              fontSize: "16px",
              color: "var(--text-secondary)",
            }}>
              Je vous répondrai dans les plus brefs délais.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-effect" style={{
            padding: "clamp(20px, 5vw, 40px)",
            borderRadius: "24px",
          }}>
            <div style={{ marginBottom: "clamp(20px, 5vw, 30px)" }}>
              <label htmlFor="name" style={{
                display: "block",
                marginBottom: "10px",
                color: "var(--text-primary)",
                fontWeight: "600",
                fontSize: "clamp(12px, 3vw, 14px)",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}>
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Votre nom"
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid var(--input-border)",
                  background: "var(--input-bg)",
                  color: "var(--text-primary)",
                  boxShadow: "0 2px 4px var(--shadow-color)",
                  fontSize: "clamp(14px, 3.5vw, 16px)",
                  transition: "all 0.3s ease",
                  outline: "none",
                }}
                onFocus={e => {
                  e.currentTarget.style.border = "1px solid var(--input-focus)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={e => {
                  e.currentTarget.style.border = "1px solid var(--input-border)";
                  e.currentTarget.style.boxShadow = "0 2px 4px var(--shadow-color)";
                }}
              />
            </div>

            <div style={{ marginBottom: "clamp(20px, 5vw, 30px)" }}>
              <label htmlFor="email" style={{
                display: "block",
                marginBottom: "10px",
                color: "var(--text-primary)",
                fontWeight: "600",
                fontSize: "clamp(12px, 3vw, 14px)",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="votre@email.com"
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid var(--input-border)",
                  background: "var(--input-bg)",
                  color: "var(--text-primary)",
                  boxShadow: "0 2px 4px var(--shadow-color)",
                  fontSize: "clamp(14px, 3.5vw, 16px)",
                  transition: "all 0.3s ease",
                  outline: "none",
                }}
                onFocus={e => {
                  e.currentTarget.style.border = "1px solid var(--input-focus)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={e => {
                  e.currentTarget.style.border = "1px solid var(--input-border)";
                  e.currentTarget.style.boxShadow = "0 2px 4px var(--shadow-color)";
                }}
              />
            </div>

            <div style={{ marginBottom: "clamp(20px, 5vw, 30px)" }}>
              <label htmlFor="message" style={{
                display: "block",
                marginBottom: "10px",
                color: "var(--text-primary)",
                fontWeight: "600",
                fontSize: "clamp(12px, 3vw, 14px)",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                placeholder="Votre message..."
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid var(--input-border)",
                  background: "var(--input-bg)",
                  color: "var(--text-primary)",
                  boxShadow: "0 2px 4px var(--shadow-color)",
                  fontSize: "clamp(14px, 3.5vw, 16px)",
                  resize: "vertical",
                  minHeight: "150px",
                  transition: "all 0.3s ease",
                  outline: "none",
                }}
                onFocus={e => {
                  e.currentTarget.style.border = "1px solid var(--input-focus)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={e => {
                  e.currentTarget.style.border = "1px solid var(--input-border)";
                  e.currentTarget.style.boxShadow = "0 2px 4px var(--shadow-color)";
                }}
              />
            </div>

            {error && (
              <div style={{
                padding: "12px",
                borderRadius: "8px",
                background: "var(--error-bg)",
                border: "1px solid var(--error-border)",
                color: "var(--error-text)",
                marginBottom: "20px",
                fontSize: "clamp(12px, 3vw, 14px)",
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="hover-lift"
              style={{
                width: "100%",
                padding: "clamp(15px, 4vw, 18px)",
                fontSize: "clamp(14px, 3.5vw, 16px)",
                fontWeight: "600",
                border: "none",
                borderRadius: "12px",
                background: loading 
                  ? "rgba(102, 126, 234, 0.5)" 
                  : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "var(--button-text)",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              {loading ? (
                <>
                  <div style={{
                    width: "20px",
                    height: "20px",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    borderTopColor: "white",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                  }}></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer le message
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        )}
      </div>
      
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}