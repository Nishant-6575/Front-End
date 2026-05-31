import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

function App() {
  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"} >
      <div className="container py-5">

        <div className="mx-auto text-center bg-danger w-100" style={{ textAlign: "center" }}>
          <button className="theme-btn" onClick={toggleTheme} >
            Toggle Theme
          </button>
        </div>

        <div className="theme-card">
          <h2>Theme Context API Demo</h2>

          <p>
            Current Theme: {theme}
          </p>

          <p>
            This content changes appearance
            globally using Context API.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;