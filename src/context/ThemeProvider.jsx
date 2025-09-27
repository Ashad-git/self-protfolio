// import { createContext, useEffect, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({children}) => {
//     const [darkMode, setDarkMode] = useState(
//         localStorage.getItem("theme") === "dark"
//     );

//     useEffect(() =>{
//         const root = window.document.documentElement;

//         if (darkMode) {
//             root.classList.add("dark");
//             localStorage.setItem("theme", "dark");
//         } else {
//             root.classList.remove("dark");
//             localStorage.setItem("theme", "light");
//         }
//     }, [darkMode]);


//     const toggleTheme =() => setDarkMode(!darkMode);

//     return (
//         <ThemeContext.Provider value={{darkMode, toggleTheme}}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";


export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Optional: Persist theme with localStorage
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" ? true : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
