import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
      <button className="btn btn-primary" onClick={toggleTheme} >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
  );
}