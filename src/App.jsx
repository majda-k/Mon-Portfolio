import Header from "./components/header";
import Projects from "./components/projects";
import Resume from "./components/Resume";
import Skills from "./components/skills";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.css";


function App() {
  return (
    <ThemeProvider>
      <div className="app-container" style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, var(--bg-primary) 0%, var(--bg-secondary) 100%)",
        position: "relative",
        overflow: "hidden"
      }}>
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        opacity: 0.3,
        pointerEvents: "none",
        transition: "opacity 0.3s ease"
      }}></div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Resume />
        <Skills />
        <Projects />
        <ContactUs />
        <Footer />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
