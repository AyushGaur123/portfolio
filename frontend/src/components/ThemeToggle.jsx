import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-[38px] h-[38px] border border-line bg-transparent text-text grid place-items-center cursor-pointer transition-[background,color] duration-[250ms] ease-in-out [-webkit-tap-highlight-color:transparent] hover:bg-text hover:text-bg"
    >
      {theme === "dark" ? <FiSun size={17} /> : <FiMoon size={17} />}
    </button>
  );
}
