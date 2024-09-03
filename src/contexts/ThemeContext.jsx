import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    //!true = false y !false = true
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    //localStorage es de JS
    localStorage.setItem("darkMode", newDarkMode);
  };

  //codigo operaciones

  useEffect(() => {
    // console.log(typeof localStorage.getItem("darkMode")); //es un string
    const isDarkLS = localStorage.getItem("darkMode") === "true"; //al compararlo a "true" me daria un booleano
    setIsDark(isDarkLS);
  }, [])

  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export {
  ThemeContext,
  ThemeContextProvider
}
