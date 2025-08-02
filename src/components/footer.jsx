export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/majda-kamrain-7633671a9/",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      url: "https://github.com/majda-k",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:kamrainmajda98@gmail.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-10 5L2 7"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="mobile-padding" style={{
      background: "linear-gradient(to bottom, transparent, rgba(10, 14, 39, 0.8))",
      paddingTop: "clamp(60px, 15vw, 100px)",
      marginTop: "clamp(60px, 15vw, 100px)",
    }}>
      <div style={{
        background: "rgba(26, 32, 53, 0.6)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(102, 126, 234, 0.2)",
        padding: "clamp(30px, 7vw, 40px) 20px",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(20px, 5vw, 30px)",
        }}>
          <div style={{
            display: "flex",
            gap: "clamp(15px, 4vw, 20px)",
          }}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift"
                style={{
                  width: "clamp(40px, 10vw, 50px)",
                  height: "clamp(40px, 10vw, 50px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  background: "rgba(102, 126, 234, 0.1)",
                  border: "1px solid rgba(102, 126, 234, 0.2)",
                  color: "#a0aec0",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.border = "1px solid transparent";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(102, 126, 234, 0.1)";
                  e.currentTarget.style.color = "#a0aec0";
                  e.currentTarget.style.border = "1px solid rgba(102, 126, 234, 0.2)";
                }}
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div style={{
            textAlign: "center",
            color: "#a0aec0",
          }}>
            <p style={{
              fontSize: "clamp(12px, 3vw, 14px)",
              marginBottom: "10px",
            }}>
              © {new Date().getFullYear()} Majda Kamrain. Tous droits réservés.
            </p>
            <p style={{
              fontSize: "clamp(10px, 2.5vw, 12px)",
              opacity: 0.7,
            }}>
              Conçu avec passion et créativité
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}