import { IoLogoLinkedin } from "react-icons/io";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

export default function Header() {
  return (
    <header className="fade-in" style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(10, 14, 39, 0.8)",
      borderBottom: "1px solid rgba(102, 126, 234, 0.2)",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <div className="logo-container">
          <h1 className="text-gradient animate-gradient" style={{
            fontSize: "28px",
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
            gap: "30px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}>
            <li>
              <a 
                href="mailto:kamrainmajda98@gmail.com"
                className="hover-lift"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#a0aec0",
                  textDecoration: "none",
                  fontSize: "16px",
                  transition: "color 0.3s ease",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(102, 126, 234, 0.1)",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#667eea"}
                onMouseLeave={e => e.currentTarget.style.color = "#a0aec0"}
              >
                <MdOutlineAttachEmail size={20} />
                <span>Email</span>
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
                  gap: "8px",
                  color: "#a0aec0",
                  textDecoration: "none",
                  fontSize: "16px",
                  transition: "color 0.3s ease",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(102, 126, 234, 0.1)",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#0077b5"}
                onMouseLeave={e => e.currentTarget.style.color = "#a0aec0"}
              >
                <IoLogoLinkedin size={20} />
                <span>LinkedIn</span>
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
                  gap: "8px",
                  color: "#a0aec0",
                  textDecoration: "none",
                  fontSize: "16px",
                  transition: "color 0.3s ease",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(102, 126, 234, 0.1)",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#ffffff"}
                onMouseLeave={e => e.currentTarget.style.color = "#a0aec0"}
              >
                <IoLogoGithub size={20} />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
