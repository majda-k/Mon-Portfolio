export default function Skills() {
  const skills = [
    { src: "./icons/html-5-svgrepo-com.svg", alt: "HTML", color: "#E34F26" },
    { src: "./icons/css-3-svgrepo-com.svg", alt: "CSS", color: "#1572B6" },
    { src: "./icons/javascript-svgrepo-com.svg", alt: "JavaScript", color: "#F7DF1E" },
    { src: "./icons/php-svgrepo-com.svg", alt: "PHP", color: "#777BB4" },
    { src: "./icons/laravel-svgrepo-com.svg", alt: "Laravel", color: "#FF2D20" },
    { src: "./icons/nodejs-svgrepo-com.svg", alt: "Node.js", color: "#339933" },
    { src: "./icons/react-javascript-js-framework-facebook-svgrepo-com.svg", alt: "React", color: "#61DAFB" },
    { src: "./icons/nextjs-svgrepo-com.svg", alt: "Next.js", color: "#000000" },
    { src: "./icons/figma-svgrepo-com (1).svg", alt: "Figma", color: "#F24E1E" },
    { src: "./icons/git-svgrepo-com.svg", alt: "Git", color: "#F05032" },
  ];

  return (
    <section className="fade-in mobile-padding" style={{
      padding: "100px 20px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        top: "10%",
        right: "-10%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}></div>
      
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
      }}>
        <h2 className="text-gradient animate-gradient" style={{
          fontSize: "clamp(32px, 7vw, 48px)",
          fontWeight: "800",
          marginBottom: "20px",
          textTransform: "uppercase",
          letterSpacing: "-1px",
        }}>
          Mes Compétences
        </h2>
        
        <p style={{
          fontSize: "clamp(16px, 4vw, 20px)",
          color: "var(--text-secondary)",
          marginBottom: "clamp(40px, 8vw, 60px)",
          maxWidth: "600px",
          margin: "0 auto clamp(40px, 8vw, 60px)",
          padding: "0 15px",
        }}>
          Technologies et outils que j'utilise pour créer des expériences web exceptionnelles
        </p>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(clamp(100px, 20vw, 120px), 1fr))",
          gap: "clamp(15px, 4vw, 30px)",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 15px",
        }}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="hover-lift card-element"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                padding: "clamp(20px, 5vw, 30px) clamp(15px, 4vw, 20px)",
                borderRadius: "20px",
                background: "var(--card-bg)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--border-accent)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${skill.color}`;
                e.currentTarget.style.boxShadow = `0 0 30px ${skill.color}20`;
                e.currentTarget.querySelector('.skill-hover-bg').style.opacity = "1";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = "1px solid var(--border-accent)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.querySelector('.skill-hover-bg').style.opacity = "0";
              }}
            >
              <div style={{
                width: "clamp(60px, 15vw, 80px)",
                height: "clamp(60px, 15vw, 80px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.9)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${skill.color}20 0%, transparent 100%)`,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }} className="skill-hover-bg"></div>
                <img
                  src={skill.src}
                  alt={skill.alt}
                  style={{
                    width: "clamp(35px, 10vw, 50px)",
                    height: "clamp(35px, 10vw, 50px)",
                    objectFit: "contain",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </div>
              <span style={{
                fontSize: "clamp(14px, 3.5vw, 16px)",
                fontWeight: "600",
                color: "var(--text-primary)",
              }}>
                {skill.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}