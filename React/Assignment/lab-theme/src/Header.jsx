import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header() {
  const { theme } =
    useContext(ThemeContext);

  return (
    <h2>
      Current Theme: {theme}
    </h2>
  );
}