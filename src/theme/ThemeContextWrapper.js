import { useState, useEffect } from "react";
import { ThemeContext, themes } from "../context/ThemeContext";

export default function ThemeContextWrapper({ children }) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    //  switch (theme) {
    //    case themes.light:
    //      document.body.classList.add("white-content")
    //      break
    //    case themes.dark:
    //    default:
    //      document.body.classList.remove("white-content")
    //      break
    //  }

    // Using Map object as alternative to Switch cases.
    const themeClassMap = new Map([
      [themes.light, "white-content"],
      [themes.dark, ""],
    ]);

    const themeClassToAdd = themeClassMap.get(theme);
    document.body.classList.toggle(
      "white-content",
      themeClassToAdd === "white-content"
    );
  }, [theme]);

	
  return (
    <div>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
