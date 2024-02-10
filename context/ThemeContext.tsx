"use client";
import { createContext, useState, ReactNode } from "react";
import { IThemeContext } from "../types";

export const ThemeContext = createContext<IThemeContext>({
  toggleMode: () => {},
  mode: "dark",
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<string>("dark");

  const toggleMode = (): void => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ toggleMode, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
