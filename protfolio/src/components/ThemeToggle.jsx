import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
    const {darkMode, toggleTheme } =useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className="text-xl p-2 rounded-full hover:scale-110 transition" >
            {darkMode ? (<FaSun className="text-yellow-400" />) : ( <FaMoon className="text-gray-800" />)}
        </button>
    );
};

export default ThemeToggle;