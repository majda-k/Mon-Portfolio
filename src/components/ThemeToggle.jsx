import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="hover-lift"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "clamp(40px, 10vw, 50px)",
        height: "clamp(40px, 10vw, 50px)",
        borderRadius: "12px",
        background: "var(--glass-bg)",
        border: "1px solid var(--border-light)",
        color: "var(--text-primary)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "var(--primary-gradient)";
        e.currentTarget.style.color = "var(--button-text)";
        e.currentTarget.style.border = "1px solid transparent";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "var(--glass-bg)";
        e.currentTarget.style.color = "var(--text-primary)";
        e.currentTarget.style.border = "1px solid var(--border-light)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div
        style={{
          transform: `rotate(${isDark ? '0deg' : '180deg'})`,
          transition: "transform 0.5s ease",
        }}
      >
        {isDark ? (
          // Moon icon for dark mode
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        ) : (
          // Sun icon for light mode
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        )}
      </div>
      
      {/* Ripple effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle, ${isDark ? '#f59e0b' : '#6366f1'}20 0%, transparent 70%)`,
          opacity: 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
        className="theme-ripple"
      />
      
      <style>{`
        .theme-toggle:hover .theme-ripple {
          opacity: 1 !important;
        }
      `}</style>
    </button>
  );
}