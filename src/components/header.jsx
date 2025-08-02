import { IoLogoLinkedin } from "react-icons/io";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { useWindowSize } from '../hooks/useWindowSize';

export default function Header() {
  const { width } = useWindowSize();
  const isMobile = width < 480;
  
  return (
    <header className="fade-in" style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(10, 14, 39, 0.8)",
      borderBottom: "1px solid rgba(102, 126, 234, 0.2)",
    }}>
      <div className={isMobile ? "mobile-header" : ""} style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "clamp(15px, 4vw, 20px) clamp(20px, 5vw, 40px)",
        maxWidth: "1200px",
        margin: "0 auto",
        flexWrap: "wrap",
        gap: "15px",
      }}>
        <div className="logo-container">
          <h1 className="text-gradient animate-gradient" style={{
            fontSize: "clamp(20px, 5vw, 28px)",
            fontWeight: "800",
            letterSpacing: "-0.5px",
            margin: 0,
          }}>
            Majda K.
          </h1>
        </div>
        
        <nav>
          <ul style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(15px, 4vw, 30px)",
            listStyle: "none",
            margin: 0,
            padding: 0,
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            <li>
              <a 
                href="mailto:kamrainmajda98@gmail.com"
                className="hover-lift"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#a0aec0",
                  textDecoration: "none",
                  fontSize: "clamp(14px, 3.5vw, 16px)",
                  transition: "color 0.3s ease",
                  padding: "clamp(6px, 2vw, 8px) clamp(12px, 3vw, 16px)",
                  borderRadius: "8px",
                  backgroundColor: "rgba(102, 126, 234, 0.1)",
                  whiteSpace: "nowrap",
                  minWidth: "fit-content",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#667eea"}
                onMouseLeave={e => e.currentTarget.style.color = "#a0aec0"}
              >
                <MdOutlineAttachEmail size={20} />
                {!isMobile && <span>Email</span>}
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/majda-kamrain-7633671a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#a0aec0",
                  textDecoration: "none",
                  fontSize: "clamp(14px, 3.5vw, 16px)",
                  transition: "color 0.3s ease",
                  padding: "clamp(6px, 2vw, 8px) clamp(12px, 3vw, 16px)",
                  borderRadius: "8px",
                  backgroundColor: "rgba(102, 126, 234, 0.1)",
                  whiteSpace: "nowrap",
                  minWidth: "fit-content",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#0077b5"}
                onMouseLeave={e => e.currentTarget.style.color = "#a0aec0"}
              >
                <IoLogoLinkedin size={20} />
                {!isMobile && <span>LinkedIn</span>}
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/majda-k"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#a0aec0",
                  textDecoration: "none",
                  fontSize: "clamp(14px, 3.5vw, 16px)",
                  transition: "color 0.3s ease",
                  padding: "clamp(6px, 2vw, 8px) clamp(12px, 3vw, 16px)",
                  borderRadius: "8px",
                  backgroundColor: "rgba(102, 126, 234, 0.1)",
                  whiteSpace: "nowrap",
                  minWidth: "fit-content",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#ffffff"}
                onMouseLeave={e => e.currentTarget.style.color = "#a0aec0"}
              >
                <IoLogoGithub size={20} />
                {!isMobile && <span>GitHub</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
