export default function Projects() {
  const projects = [
    {
      title: "Application de Gestion Scolaire",
      icon: "🎓",
      description: "En cours — Développement d'une plateforme web complète pour la gestion administrative des établissements scolaires.",
      features: [
        "Front-end : React.js avec composants réutilisables & Context API",
        "Back-end : API RESTful avec Laravel & MySQL"
      ],
      tech: ["React.js", "Laravel", "MySQL", "Tailwind CSS", "Git"],
      color: "#667eea",
    },
    {
      title: "Horaires de Prière & Météo",
      icon: "🕌",
      description: "Octobre 2024 — Création d'une application affichant les horaires de prière et les prévisions météo, intégrant des APIs.",
      features: [
        "React.js avec appels API",
        "UI moderne avec Tailwind CSS"
      ],
      tech: ["React.js", "API REST", "Tailwind CSS"],
      link: "https://github.com/majda-k/AddanTime",
      color: "#764ba2",
    },
    {
      title: "Cantine Scolaire",
      icon: "🍽️",
      description: "Application web permettant aux élèves de commander des repas en ligne.",
      tech: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL"],
      link: "https://github.com/majda-k/project-cantine-php",
      color: "#f093fb",
    }
  ];

  return (
    <section className="fade-in mobile-padding" style={{
      padding: "100px 20px",
      position: "relative",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <h2 className="text-gradient animate-gradient" style={{
          fontSize: "clamp(32px, 7vw, 48px)",
          fontWeight: "800",
          marginBottom: "20px",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "-1px",
        }}>
          Mes Projets
        </h2>
        
        <p style={{
          fontSize: "clamp(16px, 4vw, 20px)",
          color: "var(--text-secondary)",
          marginBottom: "clamp(40px, 8vw, 60px)",
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto clamp(40px, 8vw, 60px)",
          padding: "0 15px",
        }}>
          Découvrez mes réalisations et projets en cours de développement
        </p>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(clamp(280px, 60vw, 350px), 1fr))",
          gap: "clamp(20px, 5vw, 30px)",
          padding: "0 15px",
        }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="hover-lift card-element"
              style={{
                background: "var(--card-bg)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--border-accent)",
                borderRadius: "24px",
                padding: "clamp(20px, 5vw, 32px)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${project.color}`;
                e.currentTarget.querySelector('.project-glow').style.opacity = "0.3";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = "1px solid var(--border-accent)";
                e.currentTarget.querySelector('.project-glow').style.opacity = "0";
              }}
            >
              <div 
                className="project-glow"
                style={{
                  position: "absolute",
                  top: "-50%",
                  right: "-50%",
                  width: "200%",
                  height: "200%",
                  background: `radial-gradient(circle, ${project.color}30 0%, transparent 70%)`,
                  transition: "opacity 0.3s ease",
                  opacity: 0,
                  pointerEvents: "none",
                }}
              ></div>
              
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "20px",
                }}>
                  <span style={{
                    fontSize: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}10 100%)`,
                  }}>
                    {project.icon}
                  </span>
                  <h3 style={{
                    fontSize: "clamp(20px, 5vw, 24px)",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    margin: 0,
                  }}>
                    {project.title}
                  </h3>
                </div>
                
                <p style={{
                  fontSize: "clamp(14px, 3.5vw, 16px)",
                  color: "var(--text-secondary)",
                  marginBottom: "20px",
                  lineHeight: "1.6",
                }}>
                  {project.description}
                </p>
                
                {project.features && (
                  <ul style={{
                    marginBottom: "20px",
                    paddingLeft: "20px",
                    color: "var(--text-secondary)",
                  }}>
                    {project.features.map((feature, i) => (
                      <li key={i} style={{
                        marginBottom: "8px",
                        fontSize: "clamp(12px, 3vw, 14px)",
                        lineHeight: "1.5",
                      }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "20px",
                }}>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        background: "rgba(102, 126, 234, 0.1)",
                        border: "1px solid var(--border-accent)",
                        fontSize: "clamp(10px, 2.5vw, 12px)",
                        color: "var(--text-secondary)",
                        fontWeight: "500",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 24px",
                      borderRadius: "12px",
                      background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}cc 100%)`,
                      color: "var(--button-text)",
                      textDecoration: "none",
                      fontWeight: "600",
                      fontSize: "clamp(12px, 3vw, 14px)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    Voir le code
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}