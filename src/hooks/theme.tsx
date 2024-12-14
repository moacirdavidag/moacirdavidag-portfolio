import React, { createContext, useCallback, useContext, useState } from "react";
import { darkTheme, lightTheme } from "../styles/global";
import { ThemeProvider } from "styled-components";

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

interface Theme {
  name: string;
  colors: {
    background: string;
    secondaryBackground: string;
    textPrimary: string;
    textSecondary: string;
    links: string;
    primary: string;
    borders: string;
    hover: string;
  };
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(darkTheme);

  const toggleTheme = useCallback(() => {
    if (theme.name === "darkTheme") {
      setTheme(lightTheme);
    } else if (theme.name === "lightTheme") {
      setTheme(darkTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
